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
      <button className="nav-btn" onClick={openModal}>Join Waitlist</button>
    </nav>
  );
}

export default Nav;