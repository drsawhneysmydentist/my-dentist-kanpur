export const SITE = {
  name: "MY DENTIST",
  tagline: "Kanpur's Super Specialty Dental Clinic",
  // Canonical production origin (no trailing slash). Used to build absolute
  // canonical/og:url links and the sitemap. Override per-environment with
  // VITE_SITE_URL (e.g. a staging URL) without touching any code.
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
    "https://mydentistkanpur.com",
  // Google Search Console HTML-tag verification code. Leave VITE_GSC_VERIFICATION
  // unset until you have one — the meta tag is omitted entirely when empty,
  // so nothing fake ever ships.
  gscVerification: import.meta.env.VITE_GSC_VERIFICATION as string | undefined,
  // GA4 Measurement ID (e.g. "G-XXXXXXXXXX"). Leave VITE_GA4_MEASUREMENT_ID
  // unset until you have one — the analytics script is omitted entirely
  // when empty, so no placeholder tracking ID ever ships to production.
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined,
  phone: "+91 98385 00100",
  phoneDigits: "919838500100",
  altPhones: ["+91 6387704586", "+91 8808500100"],
  email: "drsawhneysmydentist@gmail.com",
  address:
    "117/L-1/455-A, Naveen Nagar, Kakadeo, Kanpur, Uttar Pradesh – 208025",
  shortAddress: "Kakadeo, Kanpur",
  googleReviewsUrl: "https://g.page/r/CaVXm8iv5Wd1EAE/review",
  // Precise clinic coordinates (also used in the LocalBusiness schema in __root.tsx)
  mapsCoords: { lat: 26.4499, lng: 80.3319 },
  mapsQuery:
    "My Dentist, 117/L-1/455-A, Naveen Nagar, Kakadeo, Kanpur, Uttar Pradesh 208025",
  // Official Google "Maps URLs" deep link — opens the exact location in Google Maps / the Maps app
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "My Dentist, 117/L-1/455-A, Naveen Nagar, Kakadeo, Kanpur, Uttar Pradesh 208025",
    ),
  whatsappConsultUrl:
    "https://wa.me/919838500100?text=" +
    encodeURIComponent(
      "Hello My Dentist Team,\nI would like to book an appointment.\nPlease let me know the available timings.\nThank you.",
    ),
  rating: "5.0",
  reviews: "226+",
  doctors: [
    {
      slug: "dr-asheesh-sawhny",
      name: "Dr. Asheesh K. Sawhny",
      qualifications: "BDS, MDS",
      role: "Endodontist & Implantologist",
      bio: "Dr. Asheesh K. Sawhny is an Endodontist and Implantologist at MY DENTIST, known for precise, patient-focused treatment across a wide range of dental procedures.",
    },
    {
      slug: "dr-karuna-sawhny",
      name: "Dr. Karuna Singh Sawhny",
      qualifications: "BDS, MDS",
      role: "Orthodontist & Invisalign Provider",
      bio: "Dr. Karuna Singh Sawhny is an Orthodontist and Invisalign Provider at MY DENTIST, dedicated to gentle, modern dental care for patients of all ages.",
    },
    {
      slug: "dr-sirjon-mukherji",
      name: "Dr. Sirjon Mukherji",
      qualifications: "BDS (Cal) • FDSRCS (Eng) • FDSRCS (Ed) • FIBOMS",
      role: "Oral & Maxillofacial Surgeon & Implantologist",
      bio: "Dr. Sirjon Mukherji is an internationally trained Oral & Maxillofacial Surgeon and Implantologist, specializing in advanced implant surgery, facial trauma and complex oral surgical procedures.",
    },
  ],
  services: [
    {
      title: "Preventive Dentistry",
      slug: "/preventive-dentistry-kanpur",
      desc: "Routine checkups, scaling, polishing and fluoride therapy that protect your smile for life.",
    },
    {
      title: "Restorative Dentistry",
      slug: "/restorative-dentistry-kanpur",
      desc: "Tooth-coloured fillings, inlays and onlays that restore strength and natural aesthetics.",
    },
    {
      title: "Endodontics (Root Canal)",
      slug: "/root-canal-treatment-kanpur",
      desc: "Single-sitting, complex and retreatment root canal treatment with microscope-assisted precision (Carl Zeiss) and apex-locator accuracy.",
    },
    {
      title: "Dental Implants",
      slug: "/dental-implants-kanpur",
      desc: "AAID-certified implant dentistry — from single tooth to full arch, including bone grafting, pterygoid and zygomatic implants for complex cases.",
    },
    {
      title: "Orthodontics",
      slug: "/orthodontist-kanpur",
      desc: "Metal, ceramic and self-ligating braces plus Invisalign — Invisalign Provider for over 10 years — for every age.",
    },
    {
      title: "Prosthodontics",
      slug: "/prosthodontics",
      desc: "CEREC same-day crowns (Crown in One Hour), bridges, ceramic veneers and full-mouth rehabilitation crafted for strength and beauty.",
    },
    {
      title: "Oral & Maxillofacial Surgery",
      slug: "/oral-and-maxillofacial-surgery",
      desc: "Wisdom-tooth removal, bone grafting, facial trauma and oral pathology managed by a Royal College of Surgeons (Edinburgh)-trained specialist.",
    },
    {
      title: "Cosmetic Dentistry",
      slug: "/cosmetic-dentistry",
      desc: "Smile design, ceramic veneers, contouring and ZOOM tooth whitening designed around your face.",
    },
    {
      title: "Smile Makeover",
      slug: "/smile-makeover-kanpur",
      desc: "Ceramic veneers, bonding and CEREC crowns coordinated into one smile design plan that suits your face.",
    },
    {
      title: "Teeth Whitening",
      slug: "/teeth-whitening-kanpur",
      desc: "Clinically supervised ZOOM tooth whitening, customised for safe, consistent results.",
    },
    {
      title: "Paediatric Dentistry",
      slug: "/paediatric-dentistry",
      desc: "Gentle, child-friendly dentistry that builds lifelong healthy habits from the first tooth.",
    },
    {
      title: "Periodontics (Gum Care)",
      slug: "/gum-treatment-periodontics-kanpur",
      desc: "Advanced gum disease therapy, deep cleaning and laser-assisted periodontal treatment.",
    },
    {
      title: "Emergency Dentistry",
      slug: "/emergency-dentist-kanpur",
      desc: "Same-day emergency dentist in Kanpur for pain, swelling, trauma and broken teeth.",
    },
    {
      title: "Specialized Care",
      slug: "/specialized-dental-care-kanpur",
      desc: "TMJ therapy, oral cancer screening, biopsy and pathology under expert specialist care.",
    },
  ],
  reasons: [
    "Experienced Specialists, Not General Practitioners",
    "International Implant Certification (AAID)",
    "Verified Reviews — 5.0 Rating",
    "Team of Specialists Under One Roof",
    "Ethics First",
    "Evening & Sunday Access",
    "Principal of Rama Dental College",
  ],
  process: [
    {
      title: "Book Your Appointment",
      desc: "Call, WhatsApp or book online — flexible slots, including same-day emergencies.",
    },
    {
      title: "Specialist Consultation & Diagnosis",
      desc: "A super-specialist examines you with digital imaging for an accurate, honest diagnosis.",
    },
    {
      title: "Personalised Treatment Plan",
      desc: "A transparent plan with timelines and pricing — no surprises, no guesswork.",
    },
    {
      title: "Precise, Comfortable Treatment",
      desc: "Modern, minimally invasive techniques delivered in a calm, sterile environment.",
    },
    {
      title: "Aftercare & Follow-Up Support",
      desc: "Detailed home-care guidance and scheduled follow-ups to protect long-term results.",
    },
  ],
  faqs: [
    {
      q: "Is My Dentist a specialist clinic?",
      a: "Yes. Our specialist doctors hold MDS postgraduate degrees — Dr. Asheesh K. Sawhny is an MDS Endodontist and AAID-Certified Implantologist, and Dr. Karuna Singh Sawhny is an MDS Orthodontist. Every treatment at My Dentist, Kakadeo, Kanpur is delivered at the specialist level.",
    },
    {
      q: "What is the cost of root canal treatment in Kanpur?",
      a: "Root canal treatment fees at My Dentist vary by tooth type and case complexity. The consultation fee is ₹500. Painless single-visit RCT is available for straightforward cases. Book an appointment for a transparent, personalised quote.",
    },
    {
      q: "Is Dr. Asheesh qualified for dental implants in Kanpur?",
      a: "Yes. Dr. Asheesh K. Sawhny is an American-certified implantologist, credentialed by the American Academy of Implant Dentistry (AAID) — one of very few implantologists in Uttar Pradesh with this international certification.",
    },
    {
      q: "Does My Dentist offer paediatric dentistry in Kanpur?",
      a: "Yes. My Dentist provides child-friendly paediatric dental care for children of all ages, including routine check-ups, milk tooth care, and early orthodontic screening. Our specialist doctors welcome children at our Kakadeo clinic.",
    },
    {
      q: "What braces and orthodontic treatments are available in Kanpur?",
      a: "Dr. Karuna Singh Sawhny offers Metal Braces, Ceramic Braces, Self-Ligating Braces, Invisalign Clear Aligners and Dentofacial Orthopaedics for children and adults.",
    },
    {
      q: "What are the clinic timings? Is My Dentist open on Sunday in Kanpur?",
      a: "My Dentist is open Mon–Sat: 4 PM–9 PM (evening slots available) and Sunday: 11 AM–2 PM. We are one of the few dental clinics in Kanpur open in the evening and on Sundays.",
    },
    {
      q: "What is the cost of dental implants in Kanpur?",
      a: "Dental implant costs at My Dentist vary by the number of implants, restoration type and preparatory procedures needed. The consultation fee is ₹500. Dr. Asheesh K. Sawhny, our AAID-certified implantologist, provides a personalised quote after assessment.",
    },
    {
      q: "Why is My Dentist considered among the best dental clinics in Kanpur?",
      a: "My Dentist, Kakadeo, Kanpur brings together a team of highly experienced specialists under one roof — Dr. Asheesh K. Sawhny (Endodontist & Implantologist), Dr. Karuna Singh Sawhny (Orthodontist & Invisalign Provider), and Dr. Sirjon Mukherji (Internationally Trained Oral & Maxillofacial Surgeon & Implantologist). From root canal treatment and dental implants to braces, Invisalign clear aligners, and advanced oral surgery, every procedure is led by an MDS specialist rather than a general practitioner. This multi-specialty, specialist-led approach, backed by 226+ verified 5-star Google reviews, is why patients consistently rate My Dentist among the best dental clinics in Kanpur.",
    },
    {
      q: "Does My Dentist offer emergency dental treatment in Kanpur?",
      a: "Yes. My Dentist provides same-day emergency dental care in Kanpur for severe tooth pain, swelling, trauma, and broken teeth. Call +91 98385 00100 for emergency appointments.",
    },
    {
      q: "Where is My Dentist located? Is it near Panacea Hospital or Dwivedi Hospital?",
      a: "My Dentist is located at 117/L-1/455-A, Naveen Nagar, Kakadeo, Kanpur, Uttar Pradesh – 208025. We are conveniently accessible from Pandu Nagar, Sharda Nagar, Naveen Nagar, and nearby areas including Panacea Hospital and Dwivedi Hospital, Kanpur.",
    },
  ],
  locations: [
    "Kakadeo",
    "Naveen Nagar",
    "Pandu Nagar",
    "Sharda Nagar",
    "Swaroop Nagar",
    "Civil Lines",
    "Arya Nagar",
    "Sarvodaya Nagar",
    "Kaushalpuri",
    "Lajpat Nagar",
    "RS Puram",
    "Tilak Nagar",
    "Govind Nagar",
    "Kidwai Nagar",
    "Kalyanpur",
  ],
  testimonials: [
    {
      name: "Shirish Nigam",
      role: "Google Review",
      quote:
        "I had my tooth extraction at My Dentist, and the experience was very smooth and comfortable. The doctor was professional and made me feel at ease. The staff was also polite and the clinic was well-maintained. Highly recommended!",
    },
    {
      name: "Dushyant Singh",
      role: "Google Review",
      quote:
        "Extremely happy with the entire treatment. Many dentists told me for extraction but Dr Asheesh saved it by doing a Root Canal. I think he has the best setup and knowledge in Kanpur.",
    },
    {
      name: "Chinmay Shukla",
      role: "Google Review",
      quote:
        "Very professional dentist, super helpful to take an emergency for a broken tooth and to find a solution in doing a crown in 24h. Highly meticulous and great quality of work. Very reassuring by giving clear and detailed explanation.",
    },
    {
      name: "Tajinder Khanuja",
      role: "Google Review",
      quote:
        "Dr Asheesh Sawhney is well experienced and has good hand in treatments like RCT. He understands the core of the problem and treats very friendly. Dr Karuna on the other hand is blessed with great art of smile design.",
    },
    {
      name: "R.R. Khanna",
      role: "Google Review · Local Guide",
      quote:
        "Very cooperative and professional. Very satisfied with Doctor Asheesh Sawhny and his team. Thank you Dr. for your wonderful treatment.",
    },
  ],
} as const;
