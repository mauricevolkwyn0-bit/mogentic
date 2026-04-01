"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AgentCard({ agent, index }: { agent: any; index: number }) {
  const { ref, isIntersecting: visible } = useIntersectionObserver({ threshold: 0.1, delay: 80 + index * 70 });

  return (
    <div
      ref={ref}
      className={`agent-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className="agent-icon-wrap">{agent.icon}</div>
      <div className="agent-name">{agent.name}</div>
      <p className="agent-desc">{agent.desc}</p>
      <span className="agent-tag">{agent.tag}</span>
    </div>
  );
}
