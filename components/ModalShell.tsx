"use client";

import Modal from "@/components/Modal";
import CustomCursor from "@/components/CustomCursor";
import { useModal } from "@/context/ModalContext";

export default function ModalShell() {
  const { modal, closeModal } = useModal();
  return (
    <>
      <CustomCursor />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      {modal && <Modal onClose={closeModal} />}
    </>
  );
}
