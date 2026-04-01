import Reveal from "@/components/Reveal";

export default function HowItWorks() {
return (
<section className="how-wrap">
        <Reveal><div className="sec-eye">Process</div></Reveal>
        <Reveal><h2 className="sec-h2">Up and running<br />in minutes.</h2></Reveal>
        <div className="steps">
          {[
            { n: "01", t: "Connect Your Brand", d: "Add your website, social accounts and target keywords in a single guided onboarding flow." },
            { n: "02", t: "Agents Deploy", d: "All six AI agents activate immediately and begin auditing, monitoring and collecting intelligence." },
            { n: "03", t: "Content Flows", d: "Scheduled posts, reports and optimisations run automatically — reviewed and approved by you." },
            { n: "04", t: "Results Delivered", d: "Live dashboards give full visibility. Agents self-improve each cycle based on performance data." },
          ].map(s => (
            <Reveal key={s.n}>
              <div className="step">
                <div className="step-num"><span>{s.n}</span></div>
                <div className="step-title">{s.t}</div>
                <p className="step-desc">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
)
}
