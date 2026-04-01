
"use client"
import {useModal} from "@/context/ModalContext"
export default function CTAInteraction() {
    const { openModal } = useModal();

return (
<button className="hero-cta" onClick={openModal}>Apply for Access →</button>
)
}
