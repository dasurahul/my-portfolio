import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaAngular, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiSass,
} from "react-icons/si";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-4 font-mono">
      <Navbar />
      <Intro />

      <Section title="Experience">
        <Experience
          desgination="Software Engineer"
          company="Kellton"
          imageSrc="assets/kellton.svg"
          range="2022 Aug - Present"
          invertImage={true}
        />
        <Experience
          desgination="Trainee - Software Development"
          company="Kellton"
          imageSrc="assets/kellton.svg"
          range="2022 Feb - 2022 Aug"
          invertImage={true}
        />
      </Section>

      <Section title="Projects" autofit={true}>
        <Project
          title="Encode"
          subtitle="Encode is a web application that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time."
          imageSrc="assets/encode.png"
          liveUrl="https://encode-rahul.vercel.app"
          githubUrl="https://github.com/dasurahul/encode"
        />
        <Project
          title="My Portfolio"
          subtitle="This is my portfolio. Here you will find all my experience, projects, skills, education, certifications and more."
          imageSrc="assets/my-portfolio.png"
          liveUrl="/"
          githubUrl="https://github.com/dasurahul/my-portfolio"
        />
      </Section>

      <Section title="Skills" autofit={true}>
        <Skill icon={<SiNextdotjs />} name="Next.js" color="#000000" />
        <Skill icon={<FaReact />} name="React" color="#61DBFB" />
        <Skill icon={<FaAngular />} name="Angular" color="#DD1B16" />
        <Skill icon={<BiLogoTypescript />} name="TypeScript" color="#007ACC" />
        <Skill icon={<BiLogoJavascript />} name="JavaScript" color="#F0DB4F" />
        <Skill
          icon={<BiLogoTailwindCss />}
          name="Tailwind CSS"
          color="#0DB7ED"
        />
        <Skill icon={<SiSass />} name="Sass" color="#C69" />
        <Skill icon={<SiMongodb />} name="MongoDB" color="#00684A" />
        <Skill icon={<SiExpress />} name="Express.js" color="#000000" />
        <Skill icon={<SiNodedotjs />} name="Node.js" color="#3C873A" />
      </Section>

      <Section title="Education">
        <Education
          education="BCA"
          imageSrc="assets/berhampur_university.png"
          educator="Berhampur University"
          range="2019 - 2022"
        />
      </Section>

      <Section title="Certifications">
        <Certification
          certificationName="Angular - The Complete Guide (2023 Edition)"
          imageSrc="assets/udemy.svg"
          certificationProvider="Udemy"
          certificateURL="https://udemy-certificate.s3.amazonaws.com/pdf/UC-319460cf-2a2c-4bbb-86c0-fc99aa5cb5f9.pdf"
        />
      </Section>

      <Footer />
    </div>
  );
}
