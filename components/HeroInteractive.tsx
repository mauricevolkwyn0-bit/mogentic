"use client";

import { useModal } from "@/context/ModalContext";

export function HeroInteractive() {
  const { openModal } = useModal();

  return (
    <button className="hero-cta" onClick={openModal}>
      See Your AI Growth System&nbsp;&nbsp;
      <span className="hero-cta-badge">Limited Onboarding</span>
    </button>
  );
}