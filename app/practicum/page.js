"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import {
  IoIosMenu,
  IoIosArrowRoundBack,
  IoIosCodeDownload,
} from "react-icons/io";

// Images import
import timeline from "../images/practicum/timeline.png";
import ux1 from "../images/practicum/output-ux-1.png";
import ux2 from "../images/practicum/output-ux-2.png";
import ux3 from "../images/practicum/output-ux-3.png";
import ux4 from "../images/practicum/output-ux-4.png";
import ux5 from "../images/practicum/output-ux-5.png";
import ux6 from "../images/practicum/output-ux-6.png";
import react1 from "../images/practicum/output-webdev-react-01.png";
import react2 from "../images/practicum/output-webdev-react-02.png";
import react3 from "../images/practicum/output-webdev-react-03.png";
import react4 from "../images/practicum/output-webdev-react-04.png";
import django1 from "../images/practicum/output-django-01.png";
import django2 from "../images/practicum/output-django-02.png";
import django3 from "../images/practicum/output-django-03.png";
import django4 from "../images/practicum/output-django-04.png";
import django5 from "../images/practicum/output-django-05.png";
import django6 from "../images/practicum/output-django-06.png";
import reactnative01 from "../images/practicum/output-mobiledev-rn-01.png";
import reactnative02 from "../images/practicum/output-mobiledev-rn-02.png";
import reactnative03 from "../images/practicum/output-mobiledev-rn-03.png";
import reactnative04 from "../images/practicum/output-mobiledev-rn-04.png";
import reactnative05 from "../images/practicum/output-mobiledev-rn-05.png";
import reactnative06 from "../images/practicum/output-mobiledev-rn-06.png";
import reactnative07 from "../images/practicum/output-mobiledev-rn-07.png";
import reactnative08 from "../images/practicum/output-mobiledev-rn-08.png";
import reactnative09 from "../images/practicum/output-mobiledev-rn-09.png";
import reactnative10 from "../images/practicum/output-mobiledev-rn-10.png";
import reactnative11 from "../images/practicum/output-mobiledev-rn-11.png";
import reactnative12 from "../images/practicum/output-mobiledev-rn-12.png";
import swift1 from "../images/practicum/output-mobiledev-swift-01.png";
import swift2 from "../images/practicum/output-mobiledev-swift-02.png";
import swift3 from "../images/practicum/output-mobiledev-swift-03.png";
import swift4 from "../images/practicum/output-mobiledev-swift-04.png";
import swift5 from "../images/practicum/output-mobiledev-swift-05.png";
import swift6 from "../images/practicum/output-mobiledev-swift-06.png";
import swift7 from "../images/practicum/output-mobiledev-swift-07.png";
import metacrafters01 from "../images/practicum/output-metacrafters-01.png";
import metacrafters02 from "../images/practicum/output-metacrafters-02.png";
import metacrafters03 from "../images/practicum/output-metacrafters-03.png";
import metacrafters04 from "../images/practicum/output-metacrafters-04.png";
import metacrafters05 from "../images/practicum/output-metacrafters-05.png";
import metacrafters06 from "../images/practicum/output-metacrafters-06.png";
import metacrafters07 from "../images/practicum/output-metacrafters-07.png";
import metacrafters08 from "../images/practicum/output-metacrafters-08.png";
import metacrafters09 from "../images/practicum/output-metacrafters-09.png";
import metacrafters10 from "../images/practicum/output-metacrafters-10.png";
import metacrafters11 from "../images/practicum/output-metacrafters-11.png";
import metacrafters12 from "../images/practicum/output-metacrafters-12.png";
import metacrafters13 from "../images/practicum/output-metacrafters-13.png";
import metacrafters14 from "../images/practicum/output-metacrafters-14.png";
import metacrafters15 from "../images/practicum/output-metacrafters-15.png";
import metacrafters16 from "../images/practicum/output-metacrafters-16.png";
import certRequired01 from "../images/practicum/cert-required-01.png";
import certRequired02 from "../images/practicum/cert-required-02.png";
import certRequired03 from "../images/practicum/cert-required-03.png";
import certRequired04 from "../images/practicum/cert-required-04.png";
import certRequired05 from "../images/practicum/cert-required-05.png";
import certRequired06 from "../images/practicum/cert-required-06.png";
import certRequired07 from "../images/practicum/cert-required-07.png";
import certRequired08 from "../images/practicum/cert-required-08.png";
import certRequired09 from "../images/practicum/cert-required-09.png";
import certRequired10 from "../images/practicum/cert-required-10.png";
import certRequired11 from "../images/practicum/cert-required-11.png";
import certRequired12 from "../images/practicum/cert-required-12.png";
import certSpecialization1 from "../images/practicum/cert-specialization-1.png";
import certSpecialization2 from "../images/practicum/cert-specialization-2.png";
import certSpecialization3 from "../images/practicum/cert-specialization-3.png";
import certSpecialization4 from "../images/practicum/cert-specialization-4.png";
import certSpecialization5 from "../images/practicum/cert-specialization-5.png";
import certSpecialization6 from "../images/practicum/cert-specialization-6.png";
import certSpecialization7 from "../images/practicum/cert-specialization-7.png";
import certSpecialization8 from "../images/practicum/cert-specialization-8.png";
import certSpecialization9 from "../images/practicum/cert-specialization-9.png";
import metacraftersNFT1 from "../images/practicum/metacrafters-nft1.png";
import metacraftersNFT2 from "../images/practicum/metacrafters-nft2.png";
import metacraftersNFT3 from "../images/practicum/metacrafters-nft3.png";
import metacraftersNFT4 from "../images/practicum/metacrafters-nft4.png";

export default function Practicum() {
  const [showMenu, setShowMenu] = useState(false);

  const startSectionRef = useRef();
  const overviewSectionRef = useRef();
  const timelineSectionRef = useRef();
  const outputSectionRef = useRef();
  const certSectionRef = useRef();
  const synthesisSectionRef = useRef();
  const appendicesSectionRef = useRef();
  const downloadSectionRef = useRef();

  function scrollToSection(sectionRef) {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="gradientBg snap-y snap-mandatory h-screen overflow-auto">
      <div className="absolute top-3 w-[94%] left-1/2 -translate-x-1/2 text-custom-white">
        <div className="pinkBorder bg-custom-black/60 h-[60px] px-5 flex flex-row items-center justify-between">
          <button
            className="flex flex-row items-center gap-3"
            onClick={() => setShowMenu(!showMenu)}
          >
            <IoIosMenu />
            <p className="font-Inconsolata font-bold">Practicum Presentation</p>
          </button>
          <Link href="/" className="flex flex-row items-center">
            <IoIosArrowRoundBack />
            <p className="text-sm">Back to home</p>
          </Link>
        </div>
        {showMenu && (
          <div className="bg-custom-black/60 border border-custom-dark-pink rounded-sm p-5 mt-5 w-[550px] flex flex-col gap-3 font-Inconsolata text-2xl">
            <button
              onClick={() => scrollToSection(startSectionRef)}
              className="text-left"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection(overviewSectionRef)}
              className="text-left"
            >
              Overview of the Practicum Engagement
            </button>
            <button
              onClick={() => scrollToSection(timelineSectionRef)}
              className="text-left"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection(outputSectionRef)}
              className="text-left"
            >
              Presentation of Output
            </button>
            <button
              onClick={() => scrollToSection(certSectionRef)}
              className="text-left"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection(synthesisSectionRef)}
              className="text-left"
            >
              Synthesis of the Practicum Engagement
            </button>
            <button
              onClick={() => scrollToSection(appendicesSectionRef)}
              className="text-left"
            >
              Appendices
            </button>
            <button
              onClick={() => scrollToSection(downloadSectionRef)}
              className="text-left"
            >
              Download Final Report Document
            </button>
          </div>
        )}
      </div>
      <div ref={startSectionRef} className="singleSlide">
        <h2 className="font-bold mb-4">CS Practicum Final Report</h2>
        <p>by Charmaine Eunice Rabano</p>
      </div>
      <div ref={overviewSectionRef} className="singleSlide">
        <h2 className="font-bold">Overview of the Practicum Engagement</h2>
      </div>
      <div className="singleSlide">
        <div className="w-11/12 flex flex-row items-center justify-around">
          <h2 className="font-bold">Learning Path Track</h2>
          <div className="pinkBorder bg-custom-white/60 p-5 flex flex-col">
            <ul>
              <li>March 30 to May 24, 2023</li>
              <li>
                LinkedIn Learning courses - 324 total credit hours
                <ul>
                  <li>Required learning modules - 90 credit hours</li>
                  <li>Specialization learning modules - 234 credit hours</li>
                </ul>
              </li>
              <li>Metacrafters courses - 57 total hours</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="singleSlide">
        <div className="w-11/12 flex flex-row items-center justify-around">
          <h2 className="font-bold">Learning Path Track</h2>
          <div>
            <div className="pinkBorder bg-custom-white/60 p-5 flex flex-col">
              <p className="font-bold">Required Learning Modules</p>
              <ul>
                <li>Design Thinking</li>
                <li>Project Management</li>
                <li>Workplace Management</li>
              </ul>
              <p className="font-bold mt-5">Specialization Learning Modules</p>
              <ul>
                <li>User Experience</li>
                <li>Web Development</li>
                <li>Mobile Application Development</li>
              </ul>
              <p className="font-bold mt-5">Metacrafters</p>
              <ul>
                <li>JS PROOF: Beginner Course</li>
                <li>ETH PROOF: Beginner EVM Course</li>
                <li>ETH + AVAX PROOF: Intermediate EVM Course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div ref={timelineSectionRef} className="singleSlide">
        <h2 className="font-bold">Timeline</h2>
      </div>
      <div className="singleSlide">
        <Image src={timeline} alt="" className="h-2/3 w-auto" />
      </div>
      <div ref={outputSectionRef} className="singleSlide">
        <h2 className="font-bold">Presentation of Output</h2>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          User Experience: Sketching for UX Designers
        </p>
        <div className="carousel">
          <Image src={ux1} alt="" className="w-auto" />
          <Image src={ux2} alt="" className="w-auto" />
          <Image src={ux3} alt="" className="w-auto" />
          <Image src={ux4} alt="" className="w-auto" />
          <Image src={ux5} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">User Experience: Figma for UX Design</p>
        <div className="carousel justify-center">
          <Image src={ux6} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          Web Development: React.js Code Challenges
        </p>
        <div className="carousel">
          <Image src={react1} alt="" className="w-auto" />
          <Image src={react2} alt="" className="w-auto" />
          <Image src={react3} alt="" className="w-auto" />
          <Image src={react4} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          Web Development: Django Essential Training
        </p>
        <div className="carousel">
          <Image src={django1} alt="" className="w-auto" />
          <Image src={django2} alt="" className="w-auto" />
          <Image src={django3} alt="" className="w-auto" />
          <Image src={django4} alt="" className="w-auto" />
          <Image src={django5} alt="" className="w-auto" />
          <Image src={django6} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          Mobile Application Development: React Native Essential Training
        </p>
        <div className="carousel">
          <Image src={reactnative01} alt="" className="w-auto" />
          <Image src={reactnative02} alt="" className="w-auto" />
          <Image src={reactnative03} alt="" className="w-auto" />
          <Image src={reactnative04} alt="" className="w-auto" />
          <Image src={reactnative05} alt="" className="w-auto" />
          <Image src={reactnative06} alt="" className="w-auto" />
          <Image src={reactnative07} alt="" className="w-auto" />
          <Image src={reactnative08} alt="" className="w-auto" />
          <Image src={reactnative09} alt="" className="w-auto" />
          <Image src={reactnative10} alt="" className="w-auto" />
          <Image src={reactnative11} alt="" className="w-auto" />
          <Image src={reactnative12} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          Mobile Application Development: Building Your First iOS App
        </p>
        <div className="carousel">
          <Image src={swift1} alt="" className="w-auto" />
          <Image src={swift2} alt="" className="w-auto" />
          <Image src={swift3} alt="" className="w-auto" />
          <Image src={swift4} alt="" className="w-auto" />
          <Image src={swift5} alt="" className="w-auto" />
          <Image src={swift6} alt="" className="w-auto" />
          <Image src={swift7} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">Metacrafters: JS PROOF Beginner</p>
        <div className="carousel justify-center">
          <Image src={metacrafters01} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">Metacrafters: ETH PROOF Beginner</p>
        <div className="carousel">
          <Image src={metacrafters02} alt="" className="w-auto" />
          <Image src={metacrafters03} alt="" className="w-auto" />
          <Image src={metacrafters04} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          Metacrafters: ETH + AVAX PROOF Intermediate
        </p>
        <div className="carousel">
          <Image src={metacrafters05} alt="" className="w-auto" />
          <Image src={metacrafters06} alt="" className="w-auto" />
          <Image src={metacrafters07} alt="" className="w-auto" />
          <Image src={metacrafters08} alt="" className="w-auto" />
          <Image src={metacrafters09} alt="" className="w-auto" />
          <Image src={metacrafters10} alt="" className="w-auto" />
          <Image src={metacrafters11} alt="" className="w-auto" />
          <Image src={metacrafters12} alt="" className="w-auto" />
          <Image src={metacrafters13} alt="" className="w-auto" />
          <Image src={metacrafters14} alt="" className="w-auto" />
          <Image src={metacrafters15} alt="" className="w-auto" />
          <Image src={metacrafters16} alt="" className="w-auto" />
        </div>
      </div>
      <div ref={certSectionRef} className="singleSlide">
        <h2 className="font-bold">Certificates</h2>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          LinkedIn Learning: Required Learning Modules
        </p>
        <div className="carousel">
          <Image src={certRequired01} alt="" className="w-auto" />
          <Image src={certRequired02} alt="" className="w-auto" />
          <Image src={certRequired03} alt="" className="w-auto" />
          <Image src={certRequired04} alt="" className="w-auto" />
          <Image src={certRequired05} alt="" className="w-auto" />
          <Image src={certRequired06} alt="" className="w-auto" />
          <Image src={certRequired07} alt="" className="w-auto" />
          <Image src={certRequired08} alt="" className="w-auto" />
          <Image src={certRequired09} alt="" className="w-auto" />
          <Image src={certRequired10} alt="" className="w-auto" />
          <Image src={certRequired11} alt="" className="w-auto" />
          <Image src={certRequired12} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">
          LinkedIn Learning: Specialization Learning Modules
        </p>
        <div className="carousel">
          <Image src={certSpecialization1} alt="" className="w-auto" />
          <Image src={certSpecialization2} alt="" className="w-auto" />
          <Image src={certSpecialization3} alt="" className="w-auto" />
          <Image src={certSpecialization4} alt="" className="w-auto" />
          <Image src={certSpecialization5} alt="" className="w-auto" />
          <Image src={certSpecialization6} alt="" className="w-auto" />
          <Image src={certSpecialization7} alt="" className="w-auto" />
          <Image src={certSpecialization8} alt="" className="w-auto" />
          <Image src={certSpecialization9} alt="" className="w-auto" />
        </div>
      </div>
      <div className="singleSlide">
        <p className="font-bold mb-6">Metacrafters</p>
        <div className="carousel justify-center">
          <Image src={metacraftersNFT1} alt="" className="w-auto" />
          <Image src={metacraftersNFT2} alt="" className="w-auto" />
          <Image src={metacraftersNFT3} alt="" className="w-auto" />
          <Image src={metacraftersNFT4} alt="" className="w-auto" />
        </div>
      </div>
      <div ref={synthesisSectionRef} className="singleSlide">
        <h2 className="font-bold">Synthesis of the Practicum Engagement</h2>
      </div>
      <div className="singleSlide">
        <div className="pinkBorder bg-custom-white/60 w-10/12 mx-auto p-5 flex flex-col gap-5">
          <p>
            Aside from the certificates earned, I gained valuable learnings from
            this Practicum engagement. These include both soft skills and hard
            skills.
          </p>
          <p>
            I gained a deeper understanding of creativity, realizing that
            creative thinking is not solely about design but about generating
            great ideas. Recognizing that the quality of an idea can only be
            assessed by comparing it to many others, I learned the importance of
            generating ideas quickly. Furthermore, I gained knowledge about
            agile project management and its comparison to other methodologies.
            I understood the processes and roles involved in an agile project.
            Additionally, I learned about effective communication through verbal
            and nonverbal cues. I learned how to remove clutters that may take
            up my time and harm my time management. I learned about email, text,
            and phone business etiquette, and how to handle work and meetings in
            remote or hybrid setup.
          </p>
        </div>
      </div>
      <div className="singleSlide">
        <div className="pinkBorder bg-custom-white/60 w-10/12 mx-auto p-5 flex flex-col gap-5">
          <p>
            I also gained knowledge about user experience (UX) design. I
            discovered that UX design goes beyond creating apps and user
            interfaces; it involves research to understand users and develop the
            best solutions for their needs.
          </p>
          <p>
            Furthermore, I became aware of the current technologies in web and
            mobile development. I learned about full-stack development using
            React or Vue.js in the frontend and Node.js in the backend, along
            with SQL, NoSQL, and REST APIs. I also learned about the basics of
            web development using Django. I also delved into mobile app
            development using React Native and Swift.
          </p>
          <p>
            One significant realization I had was the rapid evolution of
            programming languages and frameworks. I discovered that syntax from
            courses created 2-5 years ago might no longer work due to changes in
            specific languages.
          </p>
          <p>
            Moreover, I gained an understanding of web3 development through the
            Metacrafters courses. I was able to create Solidity smart contracts
            deployable in Ethereum and Avalanche blockchains. I also got to
            practice my presentation skills through code walkthroughs required
            for the projects.
          </p>
        </div>
      </div>
      <div className="singleSlide">
        <div className="pinkBorder bg-custom-white/60 w-10/12 mx-auto p-5 flex flex-col gap-5">
          <p>
            In conclusion, this Practicum engagement allowed me to enhance both
            my soft skills and hard skills, from creative thinking to the latest
            technologies in web and mobile development. While it cannot fully
            replace the experience of on-the-job training with a company, I
            acquired valuable knowledge that will greatly benefit my future
            career.
          </p>
        </div>
      </div>
      <div ref={appendicesSectionRef} className="singleSlide">
        <h2 className="font-bold">Appendices</h2>
        <div className="mt-8">
          <a href="/cv.pdf" target="_blank">
            <p className="flex flex-row items-center gap-2 my-2">
              <IoIosCodeDownload size="2em" />
              Competency-Based CV
            </p>
          </a>
          <a href="/practicum/acceptance-form.pdf" target="_blank">
            <p className="flex flex-row items-center gap-2 my-2">
              <IoIosCodeDownload size="2em" />
              Practicum Confirmation and Acceptance Form
            </p>
          </a>
          <a href="/practicum/liability-waiver.pdf" target="_blank">
            <p className="flex flex-row items-center gap-2 my-2">
              <IoIosCodeDownload size="2em" />
              Student Training Agreement and Liability Waiver
            </p>
          </a>
          <a href="/practicum/learning-path-proposal.pdf" target="_blank">
            <p className="flex flex-row items-center gap-2 my-2">
              <IoIosCodeDownload size="2em" />
              Learning Path Proposal
            </p>
          </a>
          <a href="/practicum/weekly-journal.pdf" target="_blank">
            <p className="flex flex-row items-center gap-2 my-2">
              <IoIosCodeDownload size="2em" />
              Complete Weekly Journal
            </p>
          </a>
        </div>
      </div>
      <div ref={downloadSectionRef} className="singleSlide">
        <h2 className="font-bold">Download</h2>
        <a href="/practicum/final-report.pdf" target="_blank">
          <p className="flex flex-row items-center gap-2 mt-8">
            <IoIosCodeDownload size="2em" />
            Final Report Document
          </p>
        </a>
      </div>
    </main>
  );
}
