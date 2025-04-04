import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Youtube Backend",
      gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://github.com/mayankk-prog/youtube-backend ",
      about:
        "Developed a YouTube-inspired backend system in JavaScript with CRUD operations for videos, users, and comments. Implemented authentication, video streaming, and database management for efficient data handling.",
      stack: ["next.js", "mongoDb", "Express", "JavaScript"],
      img: "/offset-folio.png",
    },
    {
      title: "Face Detection- attendance system",
      gitLink: "https://github.com/mayankk-prog/face_recognition_attendance",
      liveLink: "https://github.com/mayankk-prog/face_recognition_attendance",
      about:
        "Developed a robust Python script for an automated attendance system, incorporating advanced facial detection techniques using computer vision. Demonstrated strong Python programming skills by integrating real-time image processing, ensuring accurate identification and efficient attendance tracking.",
      stack: ["Python"],
      img: "/shortly.png",
    },
    {
      title: "BYTE Website Design",
      gitLink: "https://www.figma.com/design/rcBHYlKmzdbtrWpXBUfM3r/byte-website?node-id=0-1&p=f",
      liveLink: "https://byte-site.vercel.app/",
      about:
        "Designed, animated, and prototyped the Byte website using Figma, developing interactive and visually captivating content. Focused on seamless animations, an intuitive user interface, and modern aesthetics to elevate user experience, engagement, and accessibility.",
      stack: ["Figma", "Graphic Designing"],
      img: "/witw.png",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "Foster-Kidz Horror Game...",
      // gitLink: "https://github.com/AdityaBhardwaj007/Foster-Kidz",
      liveLink: "https://github.com/AdityaBhardwaj007/Foster-Kidz",
      about:
        "Designed a dynamic game interface in Unreal Engine, implementing creative layouts to enhance player immersion and usability. Leveraged UI/UX expertise to craft visually appealing, interactive, and intuitive game elements for a seamless user experience. still in progress...",
      stack: ["figma", "Unreal", "Graphic Design"],
      img: "/multistep.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
