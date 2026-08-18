import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Companionship & Social Engagement Richmond VA | Archangels Personal Care",
  description:
    "Meaningful companionship and social engagement support for seniors in Richmond, Mechanicsville & Hanover County — conversation, outings, hobbies, and emotional support. Call 804-903-8133.",
};

export default function CompanionshipPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Companionship & Social Engagement"
      title="Companionship & Social Engagement in Richmond, VA"
      intro="Loneliness and isolation can significantly impact senior health and well-being. Our compassionate caregivers provide meaningful companionship and social engagement to enhance quality of life and emotional wellness."
      heroImg="https://www.archangelspersonalcare.com/images/quality-of-life.jpg"
      heroAlt="Caregiver providing companionship and social engagement"
      whoFor={[
        "Seniors living alone who could use regular, friendly human connection",
        "Anyone who has become withdrawn or isolated after a loss, move, or health change",
        "Families who live far away and want peace of mind that a loved one has regular company",
        "Clients who are physically independent but want help staying socially and mentally active",
      ]}
      signs={[
        "Fewer visits from friends or family than there used to be",
        "Skipping meals or activities they used to genuinely enjoy",
        "Talking about feeling lonely, bored, or forgotten",
        "Family noticing mood changes during regular phone calls",
      ]}
      included={[
        "Friendly conversation and social interaction",
        "Accompanying to social events and outings",
        "Hobby and activity support",
        "Reading, games, and entertainment",
        "Emotional support and active listening",
        "Light meal companionship & shared mealtimes",
        "Wellness check-ins between family visits",
      ]}
      steps={[
        { title: "Tell us about your loved one", desc: "A quick conversation about personality, interests, and what a good visit looks like to them." },
        { title: "We match a compatible companion", desc: "We pair based on shared interests and temperament, not just whoever's schedule is open." },
        { title: "First visits build rapport", desc: "Early visits focus on getting comfortable together — conversation, a shared activity, no pressure." },
        { title: "Regular visits begin", desc: "A consistent rhythm of visits starts, whether that's weekly, a few times a week, or daily." },
        { title: "Adjust anytime", desc: "Cadence, activities, or hours can change anytime as your loved one's needs or interests shift." },
      ]}
      benefits={[
        { title: "Matched on personality, not just availability", desc: "A companion your loved one actually looks forward to seeing." },
        { title: "Addresses a real health risk", desc: "Social isolation is a genuine wellbeing concern — companionship is a meaningful response." },
        { title: "Flexible without commitment", desc: "A few hours a week or daily visits — no rigid package to lock into." },
        { title: "A natural path to more support", desc: "Visits can expand to personal care or medication reminders as needs grow." },
      ]}
      approach={[
        "Companionship care is matched around personality and interests, not just scheduling — we try to pair clients with caregivers they genuinely enjoy spending time with.",
        "Visits are built around what keeps your loved one engaged, whether that's a walk, a card game, a favorite hobby, or simply someone to talk to over coffee.",
        "Because isolation often masks bigger health or safety concerns, caregivers stay attentive and communicate any changes back to the care team.",
        "Many families combine companionship visits with light personal care or medication reminders as needs grow, so the relationship your loved one already trusts can expand naturally instead of starting over with someone new.",
      ]}
      faqs={[
        {
          q: "Is companionship care just \"babysitting\"?",
          a: "No — it's structured, meaningful engagement focused on your loved one's emotional and social wellbeing, delivered by a trained, background-checked caregiver, with oversight from our care team.",
        },
        {
          q: "Can companionship visits include outings?",
          a: "Yes — accompanying clients to social events, appointments, or simple outings is a core part of companionship care, as long as it fits safely within the care plan.",
        },
        {
          q: "How often should we schedule companionship visits?",
          a: "It varies by family — some clients want a few hours a week, others want daily visits. A care coordinator can help you find the right cadence.",
        },
        {
          q: "Can companionship care turn into more hands-on help later?",
          a: "Yes — plans can be adjusted anytime as needs change, whether that means adding personal care support or moving to a more consistent daily schedule.",
        },
        {
          q: "Will my loved one see the same companion each visit?",
          a: "We prioritize matching one consistent caregiver based on shared interests and personality, so real rapport can build over time instead of a rotating cast of strangers.",
        },
        {
          q: "My parent lives alone and I worry about them — but they say they're fine. How do I bring this up?",
          a: "Many families start by framing it as help around the house or a friendly visitor rather than 'care,' which tends to feel less threatening. Our care coordinators are happy to talk through how to introduce the idea in a way that fits your family.",
        },
        {
          q: "Can companionship include help with technology, like video calls with family?",
          a: "Yes — caregivers regularly help clients stay connected with family through video calls, texting, and photos, which is often one of the most valued parts of a visit for both the client and the family checking in from afar.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
