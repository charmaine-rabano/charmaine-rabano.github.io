"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import {
  IoIosMenu,
  IoIosArrowRoundBack,
  IoIosCodeDownload,
} from "react-icons/io";

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
      <div ref={timelineSectionRef} className="singleSlide">
        <h2 className="font-bold">Timeline</h2>
      </div>
      <div ref={outputSectionRef} className="singleSlide">
        <h2 className="font-bold">Presentation of Output</h2>
      </div>
      <div ref={certSectionRef} className="singleSlide">
        <h2 className="font-bold">Certificates</h2>
      </div>
      <div ref={synthesisSectionRef} className="singleSlide">
        <h2 className="font-bold">Synthesis of the Practicum Engagement</h2>
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
