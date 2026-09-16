import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/site/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://sdeventkanpur.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What areas does SD Event & Photography serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve Kanpur and nearby areas including Kakadev, Civil Lines, Swaroop Nagar, and Shyam Nagar.",
              },
            },
            {
              "@type": "Question",
              name: "Does SD Event & Photography handle both event planning and photography?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer complete event planning along with in-house photography and videography for weddings, corporate events, birthdays, and anniversaries.",
              },
            },
            {
              "@type": "Question",
              name: "How far in advance should I book for a wedding?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We recommend booking at least 2–3 months in advance for weddings, especially during peak wedding season.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide corporate event planning services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we plan and manage corporate events including conferences, product launches, and team celebrations.",
              },
            },
            {
              "@type": "Question",
              name: "Can I book only photography without full event planning?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, photography and videography services can be booked independently of event planning.",
              },
            },
            {
              "@type": "Question",
              name: "What is included in your wedding planning package?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Venue coordination, vendor management, decor coordination, and on-the-day execution support.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer birthday party planning for both kids and adults?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we plan themed birthday parties for all age groups.",
              },
            },
            {
              "@type": "Question",
              name: "How can I get a price estimate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Contact us via call or message on our profile and we'll share a customized quote based on your event requirements.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide drone photography for events?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, drone photography and videography are available for weddings and large events.",
              },
            },
            {
              "@type": "Question",
              name: "Is photo editing and album design included?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, professional photo editing and album design are part of our photography packages.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});
