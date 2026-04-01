import Reveal from "@/components/Reveal"
import CTAInteraction from "./CTAInteraction"
export default function CTASection() {

return (
      <section className="cta-wrap">
        <Reveal>
          <div className="cta-box">
            <h2 className="cta-h2">Be first.<br /><em>Secure your spot.</em></h2>
            <p className="cta-p">We are opening Mogentik to a limited number of founding businesses. Lock in founding member pricing and help shape the future of AI-powered marketing.</p>
            <div className="cta-badge">✦&nbsp;&nbsp;Premium founding membership · Limited spots available</div>
            <br />
            <CTAInteraction />
            <p className="cta-sub">Founding member pricing · Dedicated onboarding · Priority support</p>
          </div>
        </Reveal>
      </section>
)
}
