"use client"

import {pricingPackages} from "@/lib/constants"
import PricingCard from "@/components/PricingCard"
import Reveal from "./Reveal"
import { useState } from "react"

export default function PricingSection() {
const [modal,setModal] = useState(false);

return (
<section className="section">
        <Reveal><div className="sec-eye">Investment</div></Reveal>
        <Reveal><h2 className="sec-h2">Pricing that grows<br />with your brand.</h2></Reveal>
        <div className="pricing-grid">
          {pricingPackages.map((p, i) => (
            <PricingCard key={i} pkg={p} index={i} setModal={setModal} />
          ))}
        </div>
      </section>
)
}
