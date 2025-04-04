"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/bluechip.svg",
    jobTitle: "Software Engineer And Ui/Ux Designer",
    company: "BYTE Society",
    jobType: "Society Cordinator",
    duration: "Feb 2024 - Still",
    stuffIDid: [
      "Designed and developed the official website for the society, ensuring a responsive and user-friendly interface.",
      "Worked on both the frontend and backend, implementing features to improve functionality and user experience.",
      "Built a face recognition attendance system for the society, streamlining attendance tracking with automation.",
      "Won a designathon for society upliftment by redesigning the DMRC app for better stability and usability.",
      "Created engaging posts and updates to enhance communication and engagement.",
    ],
  },
  {
    companyImg: "/nnpc.svg",
    jobTitle: "Intern",
    company: "Foster-Kidz",
    jobType: "Internship",
    duration: "July 2024 - Still",
    stuffIDid: [
      "Developed user interface screens using Unreal Engine, including a loading screen, startup screen, and menu screen.",
      "Implemented two distinct inventory systems in the game, enhancing overall gameplay and user experience.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
