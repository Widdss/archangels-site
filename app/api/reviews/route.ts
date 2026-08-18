import { NextResponse } from "next/server";

export const runtime = "edge";

// Fallback reviews — real, verified 5-star Google reviews, used whenever the
// Google Places API isn't configured yet or a live fetch fails. Keeps the
// testimonials section honest even without live credentials.
const FALLBACK_REVIEWS = [
  {
    name: "Angela Gordon",
    initials: "AG",
    rating: 5,
    text: "I was very pleased with my services I received from Archangels Personal Care. I had to have surgery and my husband needed to be tube fed — she did not disappoint. She did a fine job and I would definitely use this agency again.",
  },
  {
    name: "Susan Goodrich",
    initials: "SG",
    rating: 5,
    text: "Our experience with Archangels Personal Care has been exceptional. They cared for Mom for two years. They were always compassionate, dependable and had a loving relationship with Mom. Truly Angels. We would highly recommend Archangels.",
  },
  {
    name: "George Voorhees",
    initials: "GV",
    rating: 5,
    text: "Our family has been with this amazing and wonderful organization for approximately 18 months. I simply cannot say enough good things about the level of care that Archangels has provided my parents. They have surpassed our expectations!",
  },
];

function initialsFor(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Not configured yet — serve the real, hand-verified fallback reviews.
  if (!apiKey || !placeId) {
    return NextResponse.json({
      source: "fallback",
      rating: 5.0,
      reviews: FALLBACK_REVIEWS,
    });
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        // Revalidate periodically so new Google reviews surface without a redeploy.
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error("Google Places API error:", res.status, await res.text());
      return NextResponse.json({
        source: "fallback",
        rating: 5.0,
        reviews: FALLBACK_REVIEWS,
      });
    }

    const data = await res.json();
    const rawReviews: any[] = Array.isArray(data.reviews) ? data.reviews : [];

    const reviews = rawReviews
      .filter((r) => (r?.rating ?? 0) >= 4)
      .slice(0, 6)
      .map((r) => {
        const name = r?.authorAttribution?.displayName || "Google User";
        return {
          name,
          initials: initialsFor(name),
          rating: r?.rating ?? 5,
          text: r?.text?.text || r?.originalText?.text || "",
        };
      })
      .filter((r) => r.text);

    if (reviews.length === 0) {
      return NextResponse.json({
        source: "fallback",
        rating: data.rating ?? 5.0,
        reviews: FALLBACK_REVIEWS,
      });
    }

    return NextResponse.json({
      source: "live",
      rating: data.rating ?? 5.0,
      userRatingCount: data.userRatingCount ?? null,
      reviews,
    });
  } catch (err) {
    console.error("Live reviews fetch failed:", err);
    return NextResponse.json({
      source: "fallback",
      rating: 5.0,
      reviews: FALLBACK_REVIEWS,
    });
  }
}
