import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

const ALL_FAQS = [
  ...SITE.faqs,
  {
    q: "Where is MY DENTIST located in Kanpur?",
    a: "MY DENTIST is located at 117/L-1/455A, P Block, Naveen Nagar, Kakadeo, Kanpur, Uttar Pradesh — near Panacea Hospital and Dwivedi Hospital. We are easily accessible from Pandu Nagar, Sharda Nagar, Swaroop Nagar, Civil Lines, Sarvodaya Nagar, Lajpat Nagar, Kaushalpuri, and RS Puram.",
  },
  {
    q: "Do you offer dental implants for missing teeth in Kanpur?",
    a: "Yes. MY DENTIST offers world-class dental implants in Kanpur placed by Dr. Asheesh K. Sawhny — an American-certified implantologist (AAID). Treatments include single tooth implants, multiple implants, implant-supported bridges, and full-arch restoration. Book a consultation for your personalised dental implant cost in Kanpur.",
  },
  {
    q: "Are children welcome at MY DENTIST?",
    a: "Yes. We provide paediatric dentistry for children of all ages at our Kakadeo clinic. Our specialists use child-friendly techniques, behavioural guidance, and preventive care to build positive dental habits from the first tooth.",
  },
  {
    q: "How long does a smile makeover take?",
    a: "Most cosmetic smile makeovers at MY DENTIST are completed in 2 to 4 visits over 2 to 3 weeks, depending on whether veneers, teeth whitening, contouring or orthodontics are involved. A digital preview is provided before any treatment begins.",
  },
  {
    q: "Do you accept insurance and offer EMI?",
    a: "MY DENTIST supports leading insurance reimbursements and offers flexible EMI options for larger treatments such as implants, orthodontics and full-mouth rehabilitation. Please ask the front desk for current options.",
  },
  {
    q: "Which dental clinic in Kanpur has an American-certified implantologist?",
    a: "MY DENTIST, Kakadeo, Kanpur is led by Dr. Asheesh K. Sawhny — one of very few dentists in Uttar Pradesh certified by the American Academy of Implant Dentistry (AAID). His international implant certification, combined with 21+ years of clinical experience, makes him the preferred implant dentist for complex cases in Kanpur.",
  },
  {
    q: "Is there a dentist open on Sunday in Kanpur?",
    a: "Yes. MY DENTIST is open on Sundays from 11 AM to 2 PM. Monday through Saturday we are open in the evening from 4 PM to 9 PM — ideal for working patients who need a dentist open in the evening in Kanpur.",
  },
  {
    q: "Where can I get painless root canal treatment in Kanpur?",
    a: "MY DENTIST, Kakadeo, Kanpur offers painless root canal treatment performed by Dr. Asheesh K. Sawhny, an MDS Endodontist with 21+ years of specialist experience. Single-sitting RCT is available for straightforward cases. Call +91 98385 00100 to book.",
  },
  {
    q: "What is the cost of teeth whitening in Kanpur?",
    a: "Teeth whitening costs at MY DENTIST vary by the whitening method. Clinically supervised, customised whitening delivers safe and lasting results. Book a consultation for accurate, personalised pricing.",
  },
  {
    q: "Can I book a same-day or walk-in dentist appointment in Kanpur?",
    a: "Yes. MY DENTIST offers same-day emergency appointments and walk-in dental care in Kanpur for urgent cases including severe tooth pain, swelling and broken teeth. For non-emergency treatment, we recommend booking in advance. Call +91 98385 00100 or WhatsApp us.",
  },
  {
    q: "What is root canal treatment?",
    a: "Root canal treatment (RCT) removes infected or inflamed pulp from inside a tooth, then cleans, shapes and seals the canal to relieve pain and save the natural tooth. At MY DENTIST, Dr. Asheesh K. Sawhny — an MDS Endodontist — performs painless, single-sitting RCT using rotary instruments and apex-locator precision wherever clinically suitable.",
  },
  {
    q: "Are braces painful?",
    a: "Braces typically cause mild pressure or soreness for 2 to 4 days after fitting or adjustment — not sharp pain. Dr. Karuna Singh Sawhny, MDS Orthodontist, plans gentle, gradual force application to keep discomfort minimal throughout treatment, whether you choose metal braces, ceramic braces or clear aligners.",
  },
  {
    q: "Is a dental implant better than a bridge?",
    a: "Implants and bridges both replace missing teeth, but they work differently. A dental implant replaces the tooth root, preserves jawbone, and doesn't involve adjacent teeth — generally the longer-lasting option. A bridge is faster and more affordable but requires reshaping neighbouring teeth. Dr. Asheesh K. Sawhny, AAID-Certified Implantologist, can advise which suits your case at a consultation.",
  },
  {
    q: "How can I relieve tooth pain at home before my appointment?",
    a: "Rinsing with warm salt water, taking an over-the-counter pain reliever as directed, and avoiding very hot, cold or sugary food can ease tooth pain temporarily. This is not a substitute for treatment — for ongoing or severe pain, call MY DENTIST at +91 98385 00100 for a same-day emergency appointment in Kanpur.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const TITLE = "Dental FAQs — My Dentist Kakadeo Kanpur | Root Canal Cost, Implant Cost, Braces Cost";
const DESC =
  "Answers to common dental questions: root canal treatment cost in Kanpur, dental implant cost in Kanpur, braces cost in Kanpur, Sunday dentist Kanpur, evening dentist, emergency dental care — from MDS specialists at My Dentist, Kakadeo, Kanpur.";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/faqs` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/faqs` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd) }],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title={<>Your dental questions, <span className="italic text-aqua-deep">answered.</span></>}
        intro="Direct, specialist-written answers to the most common questions we receive at MY DENTIST Kanpur."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <Stagger className="grid gap-4">
            {ALL_FAQS.map((f) => (
              <motion.details
                key={f.q}
                variants={item}
                className="group rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-xl leading-snug marker:hidden">
                  {f.q}
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-foreground/40 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </motion.details>
            ))}
          </Stagger>

          <Reveal>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-foreground/8 bg-card p-8 shadow-soft">
              <div>
                <h3 className="font-display text-2xl">Still have a question?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Speak with a specialist at MY DENTIST — we'll guide you honestly.
                </p>
              </div>
              <Link
                to="/contact"
                hash="consultation-form"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
              >
                Book a consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
