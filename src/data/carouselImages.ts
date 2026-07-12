// ─────────────────────────────────────────────────────────────────────────
// Carousel image manifest — controls the order shown in the homepage
// "Infinite Auto Scrolling Image Carousel".
//
// HOW TO ADD / REMOVE / REPLACE IMAGES:
// 1. Drop your new image file into `src/assets/carousel/`.
// 2. Import it below and add an entry to the `carouselImages` array in the
//    exact position you want it to appear.
// 3. To remove an image, delete its import + array entry.
// 4. To reorder, just reorder the array entries — nothing else changes.
//
// The component (ImageCarousel.tsx) never sorts, shuffles, or reorders this
// list. Whatever sequence you set here is exactly what renders, on every
// device.
// ─────────────────────────────────────────────────────────────────────────

import clinic1 from "@/assets/carousel/clinic-1.webp";
import clinic2 from "@/assets/carousel/clinic-2.webp";
import clinic3 from "@/assets/carousel/clinic-3.webp";
import clinic4 from "@/assets/carousel/clinic-4.webp";
import clinic5 from "@/assets/carousel/clinic-5.webp";
import clinic6 from "@/assets/carousel/clinic-6.webp";
import clinic7 from "@/assets/carousel/clinic-7.webp";
import clinic8 from "@/assets/carousel/clinic-8.webp";
import clinic9 from "@/assets/carousel/clinic-9.webp";
import clinic10 from "@/assets/carousel/clinic-10.webp";
import clinic11 from "@/assets/carousel/clinic-11.webp";
import clinic12 from "@/assets/carousel/clinic-12.webp";
import clinic13 from "@/assets/carousel/clinic-13.webp";
import zeissMicroscope from "@/assets/carousel/clinic-dr-asheesh-zeiss-microscope.webp";
import drAsheeshPortrait from "@/assets/carousel/clinic-dr-asheesh-portrait.webp";
import cerecTreatmentRoom from "@/assets/carousel/clinic-cerec-treatment-room.webp";
import patientFamilyVisit from "@/assets/carousel/clinic-patient-family-visit.webp";
import awardIdaHonor from "@/assets/carousel/clinic-award-ida-honor.webp";
import invisalignCertificate from "@/assets/dr-karuna-align-certificate.webp";
import awardIlluminatiConclave from "@/assets/carousel/clinic-award-illuminati-conclave.webp";

export interface CarouselImage {
  /** Unique, stable key — used for React keys & infinite-loop cloning */
  id: string;
  src: string;
  alt: string;
  /** Optional CSS object-position override (defaults to "center" if omitted) */
  objectPosition?: string;
}

export const carouselImages: CarouselImage[] = [
  { id: "n3", src: zeissMicroscope, alt: "Dr. Asheesh K. Sawhny with the Carl Zeiss dental operating microscope at My Dentist Kanpur" },
  { id: "c1", src: clinic1, alt: "My Dentist Kanpur — clinic moment 1" },
  { id: "n5", src: drAsheeshPortrait, alt: "Dr. Asheesh K. Sawhny — Principal & Professor, Rama Dental College", objectPosition: "center 20%" },
  { id: "c2", src: clinic2, alt: "My Dentist Kanpur — clinic moment 2" },
  { id: "n9", src: cerecTreatmentRoom, alt: "Advanced CEREC digital treatment room at My Dentist Kanpur" },
  { id: "c3", src: clinic3, alt: "My Dentist Kanpur — clinic moment 3" },
  { id: "n4", src: patientFamilyVisit, alt: "Dr. Asheesh K. Sawhny with a young patient and Dr. Kashia Siddiqui at My Dentist Kanpur" },
  { id: "c4", src: clinic4, alt: "My Dentist Kanpur — clinic moment 4" },
  { id: "n6", src: awardIdaHonor, alt: "Indian Dental Association Kanpur Branch honor presented to Dr. Asheesh Sawhny", objectPosition: "center 40%" },
  { id: "c5", src: clinic5, alt: "My Dentist Kanpur — clinic moment 5" },
  { id: "c6", src: clinic6, alt: "My Dentist Kanpur — clinic moment 6" },
  { id: "n8", src: invisalignCertificate, alt: "Dr. Karuna Singh Sawhny's official Invisalign Training Course certificate" },
  { id: "c7", src: clinic7, alt: "My Dentist Kanpur — clinic moment 7" },
  { id: "c8", src: clinic8, alt: "My Dentist Kanpur — clinic moment 8" },
  { id: "n7", src: awardIlluminatiConclave, alt: "Rama Group Illuminati Conclave Clinical Excellence Award presented to Dr. Asheesh Sawhny", objectPosition: "center 40%" },
  { id: "c9", src: clinic9, alt: "My Dentist Kanpur — clinic moment 9" },
  { id: "c10", src: clinic10, alt: "My Dentist Kanpur — clinic moment 10" },
  { id: "c11", src: clinic11, alt: "My Dentist Kanpur — clinic moment 11" },
  { id: "c12", src: clinic12, alt: "My Dentist Kanpur — clinic moment 12", objectPosition: "center 12%" },
  { id: "c13", src: clinic13, alt: "My Dentist Kanpur — clinic moment 13" },
];
