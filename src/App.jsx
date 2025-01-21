import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaAngular, FaReact } from "react-icons/fa";
import { SiMui, SiSass } from "react-icons/si";

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
          company="CapeZero, Inc."
          imageSrc="assets/capezero.png"
          range="2023 Oct - Present"
        />
        <Experience
          desgination="Software Engineer"
          company="Kellton"
          imageSrc="assets/kellton.svg"
          range="2022 Aug - 2023 Oct"
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
          title="JSONic"
          subtitle="This project is a clone of JSONPlaceholder, which is a fake REST API for testing and prototyping."
          imageSrc="assets/jsonic.png"
          liveUrl="https://jsonic.vercel.app/"
          githubUrl="https://github.com/dasurahul/jsonic"
        />
        <Project
          title="Encode"
          subtitle="Encode is a web application that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time."
          imageSrc="assets/encode.png"
          liveUrl="https://encode-rahul.vercel.app"
          githubUrl="https://github.com/dasurahul/encode"
        />
        <Project
          title="Friends App"
          subtitle="This is a application that allows users to search for a character in the friends series. Built with Angular."
          imageSrc="assets/friends-app.png"
          liveUrl="https://friends-app-rahul.vercel.app"
          githubUrl="https://github.com/dasurahul/friends-app"
        />
        <Project
          title="Yelpcamp"
          subtitle="A landing page with multiple pages. Built with HTML, CSS (for good custom animations) and JavaScript"
          imageSrc="assets/yelpcamp.png"
          liveUrl="https://yelpcamp-rahul.netlify.app/"
          githubUrl="https://github.com/dasurahul/yelpcamp"
        />
        <Project
          title="Sunnyside"
          subtitle="Sunnyside Agency landing page. Built with HTML, and CSS only. A challenge from Frontend Mentor that I completed."
          imageSrc="assets/sunnyside.png"
          liveUrl="https://sunnyside-agency-rahul.netlify.app/"
          githubUrl="https://github.com/dasurahul/Sunnyside-agency-landing-page"
        />
      </Section>

      <Section title="Skills" autofit={true}>
        <Skill icon={<FaReact />} name="React" color="#61DBFB" />
        <Skill icon={<FaAngular />} name="Angular" color="#DD1B16" />
        <Skill icon={<BiLogoTypescript />} name="TypeScript" color="#007ACC" />
        <Skill icon={<BiLogoJavascript />} name="JavaScript" color="#F0DB4F" />
        <Skill
          icon={<BiLogoTailwindCss />}
          name="Tailwind CSS"
          color="#0DB7ED"
        />
        <Skill icon={<SiMui />} name="JavaScript" color="#2196f3" />
        <Skill icon={<SiSass />} name="Sass" color="#C69" />
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
        <Certification
          certificationName="JavaScript (Intermediate) Certificate"
          imageSrc="assets/hackerrank.jpeg"
          certificationProvider="HackerRank"
          certificateURL="https://www.hackerrank.com/certificates/27879c6743c5"
        />
        <Certification
          certificationName="JavaScript Algorithms and Data Structures Masterclass"
          imageSrc="assets/udemy.svg"
          certificationProvider="Udemy"
          certificateURL="https://www.udemy.com/certificate/UC-fe91980d-ac0c-42e6-b0ee-0e14e50f042e/"
        />
        <Certification
          certificationName="CSS Certificate"
          imageSrc="assets/hackerrank.jpeg"
          certificationProvider="HackerRank"
          certificateURL="https://www.hackerrank.com/certificates/13f1053481f2"
        />
      </Section>

      <Footer />
    </div>
  );
}
