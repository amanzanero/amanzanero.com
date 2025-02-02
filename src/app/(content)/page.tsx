import { A, H1, H2, H3, P } from "@/components/ui/typography";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  icons: "/favicon.ico",
  openGraph: {
    title: "Andrew Manzanero",
    description: "Personal website of Andrew Manzanero",
    url: "https://amanzanero.com",
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

export default function Home() {
  return (
    <>
      <div className="h-4 sm:h-8" />
      <div className="flex w-full items-center justify-between">
        <H1>
          Hi, I&apos;m
          <br />
          Andrew 👋
        </H1>
        <Image
          src="/pfp.png"
          alt="profile picutre"
          height={100}
          width={100}
          className="mr-4 rounded-full"
        />
      </div>
      <div className="h-2" />
      <P>
        Welcome to my personal website! I have some basic info about myself,
        what I do for work, and how you can get in touch with me.
      </P>
      <div className="h-4" />
      <div className="flex w-full flex-col">
        <H3>On this page:</H3>
        <ul className="list-disc pl-5 pt-2 sm:pl-4">
          <li>
            <A href="#about-me">About me</A>
          </li>
          <li>
            <A href="#interests">Interests</A>
          </li>
          <li>
            <A href="#get-in-touch">Get in touch</A>
          </li>
        </ul>
      </div>
      <div className="h-8" />
      <H2 id="about-me">About me</H2>
      <P>
        My name is Andrew, and I’m a Senior Software Engineer based out of the
        Los Angeles Area. I’m currently working at&nbsp;
        <A href="https://www.usenourish.com/" newTab>
          Nourish
        </A>
        , a health tech company aiming to improve people&apos;s health by making
        it easier to eat well.
      </P>
      <P>
        Before Nourish, I was a Software Engineer at&nbsp;
        <A href="https://asana.com/" newTab>
          Asana
        </A>
        &nbsp;on the Core Performance team, working to make the webapp as fast
        and snappy as possible. Prior to that I was on the Mobile Foundations
        team where I worked on making it easier to develop features for our iOS
        and Android apps. I graduated from the&nbsp;
        <A href="https://usc.edu" newTab>
          University of Southern California
        </A>
        &nbsp;with a degree in Computer Science. In the past, I have interned as
        a Software Engineer at Microsoft, Honey (acquired by PayPal), and
        American Express.
      </P>
      <div className="h-8" />
      <H2 id="interests">Interests</H2>
      <P>
        Outside of tech, some of my hobbies include: teaching/mentoring, playing
        Super Smash Bros (Bowser and Ike mains for those who care), and binging
        anime. I&apos;m also really passionate about empowering fellow
        minorities to pursue careers in STEM. At school I was involved with
        the&nbsp;
        <A href="https://shpe.org/" newTab>
          Society of Hispanic Professional Engineers
        </A>
        , whose focus is to promote Hispanic & Latino excellence within STEM
        fields in industry & academia.
      </P>
      <div className="h-8" />
      <H2 id="get-in-touch">Get in touch</H2>
      <P>
        Feel free to email me at&nbsp;
        <A href="mailto:contact@amanzanero.com">info@amanzanero.com</A>
      </P>

      <P>Other places you can find me:</P>
      <ul className="list-disc pl-5 sm:pl-4">
        <li>
          <A href="https://www.linkedin.com/in/andrewmanzanero" newTab>
            linkedin.com/in/andrewmanzanero
          </A>
        </li>
        <li>
          <A href="https://github.com/amanzanero" newTab>
            github.com/amanzanero
          </A>
        </li>
        <li>
          <A href="https://twitter.com/AndrewManzanero" newTab>
            twitter.com/AndrewManzanero
          </A>
          &nbsp;(I don&apos;t tweet much and refuse to call it X)
        </li>
      </ul>
      <div className="h-8" />
    </>
  );
}
