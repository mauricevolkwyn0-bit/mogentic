"use client";

import Image from "next/image";
import Logo from "../public/images/mogentik_pure_black.png";
import { useModal } from "@/context/ModalContext";

function Nav() {
  const { openModal } = useModal();

  return (
    <nav>
      <div className="nav-logo">
        <Image
          src={Logo}
          alt="Mogentik Logo"
          width={160}
          height={40}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="nav-actions">
        <button className="nav-btn" onClick={openModal}>Join Waitlist</button>
        <button className="nav-btn nav-btn--black" onClick={openModal}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Nav;