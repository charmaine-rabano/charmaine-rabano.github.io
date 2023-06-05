"use client";

import React, { useRef } from "react";
import useIsInViewport from "./hooks/useIsInViewport";
import HeaderSection from "./components/HeaderSection";
import MainContentSection from "./components/MainContentSection";
import FooterSection from "./components/FooterSection";
import FloatingBar from "./components/FloatingBar";
import FloatingLines from "./components/FloatingLines";

export default function Home() {
  const footerRef = useRef(null);
  const isInViewport = useIsInViewport(footerRef);

  return (
    <main>
      <HeaderSection />
      <MainContentSection />
      <FooterSection />
      <div ref={footerRef} />
      {!isInViewport && <FloatingBar />}
      <FloatingLines />
    </main>
  );
}
