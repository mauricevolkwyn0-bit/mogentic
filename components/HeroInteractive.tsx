"use client";

import { useModal } from "@/context/ModalContext";

export function HeroInteractive() {
  const { openModal } = useModal();

  return (
    <button className="hero-cta" onClick={openModal}>
      Apply for Access&nbsp;&nbsp;<span className="hero-cta-badge">FOUNDING MEMBER</span>
    </button>
  );
}