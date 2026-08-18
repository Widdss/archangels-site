"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  initials: string;
  rating: number;
  text: string;
};

const INITIAL_REVIEWS: Review[] = [
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

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [rating, setRating] = useState(5.0);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
        if (typeof data.rating === "number") {
          setRating(data.rating);
        }
      })
      .catch(() => {
        // Silent fail — initial hardcoded reviews stay on screen.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div className="section-head">
        <span className="eyebrow">Families Trust Us</span>
        <h2>What our clients say.</h2>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ color: "var(--gold)", letterSpacing: "2px" }}>★★★★★</span>
          {rating.toFixed(1)} on Google &middot; verified reviews
        </p>
      </div>
      <div className="grid-3 reveal-stagger">
        {reviews.map((r) => (
          <div className="testimonial" key={r.name}>
            <div className="testimonial-head">
              <span className="avatar-initials">{r.initials}</span>
              <div>
                <div className="who">{r.name}</div>
                <div className="role">Google Review &middot; {"★".repeat(Math.round(r.rating))}</div>
              </div>
            </div>
            <p className="quote">&ldquo;{r.text}&rdquo;</p>
          </div>
        ))}
      </div>
    </>
  );
}
