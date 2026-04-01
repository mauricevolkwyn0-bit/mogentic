"use client";

import { Dispatch, SetStateAction } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface PricingPackage {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
}

interface PricingCardProps {
  pkg: PricingPackage;
  index: number;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export default function PricingCard({ pkg, index, setModal }: PricingCardProps) {
  const { ref, isIntersecting: visible } = useIntersectionObserver({ 
    threshold: 0.1, 
    delay: 100 + index * 100 
  });

  return (
    <div
      ref={ref}
      className={`pricing-card${visible ? " visible" : ""}${pkg.popular ? " popular" : ""}`}
    >
      {pkg.popular && <div className="popular-badge">Most Popular</div>}
      <div className="pkg-name">{pkg.name}</div>
      <div className="pkg-price-row">
        <span className="pkg-price">{pkg.price}</span>
        <span className="pkg-period">{pkg.period}</span>
      </div>
      <p className="pkg-desc">{pkg.desc}</p>
      <div className="pkg-features">
        {pkg.features.map((f: string, i: number) => (
          <div key={i} className="pkg-feature">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <button 
        className={`pkg-btn${pkg.popular ? " primary" : ""}`} 
        onClick={() => setModal(true)}
      >
        {pkg.cta}
      </button>
    </div>
  );
}