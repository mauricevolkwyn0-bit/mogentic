import Reveal from "@/components/Reveal"
import {integrations} from "@/lib/constants"

export default function IntegrationSEction() {
return (
    <section className="integration-wrap">
      <div className="integration-header">
        <Reveal><div className="sec-eye">Ecosystem</div></Reveal>
        <Reveal><h2 className="sec-h2">Integrates with everything<br />you already use.</h2></Reveal>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...integrations, ...integrations].map((item, i) => (
            <div key={i} className="integration-pill">
              <span className="pill-icon">{item.icon}</span>
              <span className="pill-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
)
}
