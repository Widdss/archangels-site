import type { Metadata } from "next";
import SurveyForm from "../../components/SurveyForm";

export const metadata: Metadata = {
  title: "Client Feedback Survey | Archangels Personal Care",
  description: "Share your feedback with Archangels Personal Care.",
  robots: { index: false, follow: false },
};

export default function SurveyPage() {
  return (
    <main style={{ padding: "48px 16px", background: "#f1f5f9", minHeight: "70vh" }}>
      <SurveyForm />
    </main>
  );
}
