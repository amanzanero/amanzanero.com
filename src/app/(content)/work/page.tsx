import { H1, P } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Andrew's Work History and Projects",
    description: "Details about Andrew's work history, resume, and projects.",
    url: "https://amanzanero.com/work",
    images: [
      {
        url: "https://amanzanero.com/pfp.png",
        width: 100,
        height: 100,
        alt: "Andrew Manzanero",
      },
    ],
  },
};

export default function Work() {
  return (
    <>
      <div className="h-4 sm:h-8" />
      <H1>Work History and Projects</H1>
      <P>Nothing to see here yet. Check back later.</P>
    </>
  );
}
