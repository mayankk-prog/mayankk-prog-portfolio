import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I amplify brand voices through the web
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I&apos;m passionate about building powerful business solutions that drive growth 🚀. Whether it&apos;s a website for brand visibility 🌐 or software that automates manual tasks 🔄, I love turning ideas into reality and continuously refining them over time
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Since writing my first lines of code in late 2019 💻, I&apos;ve focused on development, sharpening my skills while also picking up UI/UX along the way 🎨. I enjoy tackling increasingly complex challenges to ensure continuous improvement and innovation 💡.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Every project is unique, and I approach each one with a problem-solving mindset, delivering solutions that businesses are proud to own 🏆. Want to learn more? Here&apos;s... <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1J2pAdnJeI2pWE_nzMFejjrBlChtvoZgK/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Skill Set
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
            Figma, Express, MongoDB, DSA in python, C++, Java Script.

            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
             Familiar with
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
            Tailwind CSS, SQL, JS RESTful, Rust, Kotlin, TypeScript, Rust, Warp

            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
                 Interested in
              </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
            Cyber Security, Generative Ai, Data Science.

            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
