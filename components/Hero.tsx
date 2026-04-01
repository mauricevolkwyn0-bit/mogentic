
import Reveal from "@/components/Reveal";
import { HeroInteractive } from "./HeroInteractive";
import { HeroDotLottie } from "./HeroDotLottie";

export function Hero() {
	return (
		    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">

          <Reveal>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span className="eyebrow-text">Now accepting founding members</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="hero-h1">
              Marketing that Thinks,<br /><em>Optimizes, Converts</em>
            </h1>
          </Reveal>

          <Reveal>
            <p className="hero-sub">
              Six AI agents work around the clock to manage your SEO, social media,
              content, competitor insights, and growth strategy — delivering results
              while you focus on your business
            </p>
          </Reveal>

          {/* Client island: button + modal + counters */}
          <HeroInteractive />

        </div>
        <div className="hero-right">
          <HeroDotLottie />
        </div>
      </div>
    </section>
	)
}
