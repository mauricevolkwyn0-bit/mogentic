"use client"

import Reveal from "@/components/Reveal";
import {agents} from "@/lib/constants"; 
import AgentCardSection from "@/components/AgentCardSection"

export function AgentSection() {
 return (
	<section className="section">
        <Reveal><div className="sec-eye">AI Agent Suite</div></Reveal>
        <Reveal><h2 className="sec-h2">Six agents.<br />One unified platform.</h2></Reveal>
        <div className="agents-grid">
          {agents.map((a, i) => (
            <AgentCardSection key={i} agent={a} index={i} />
          ))}
        </div>
      </section>
 )
}
