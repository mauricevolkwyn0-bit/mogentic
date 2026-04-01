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
							<span className="eyebrow-text">
								Autonomous Marketing Infrastructure
							</span>
						</div>
					</Reveal>

					<Reveal>
						<h1 className="hero-h1">
							Replace Your Entire<br />
							Marketing Team With AI
						</h1>
					</Reveal>

					<Reveal>
						<p className="hero-sub">
							Mogentic deploys AI agents that run your content, SEO, and growth — 24/7 — so your business scales without hiring.
						</p>
					</Reveal>

					{/* Client island: button + modal + counters */}
					<HeroInteractive />

					<Reveal>
						<p className="hero-trust">
							No commitment. See exactly how it works.
						</p>
					</Reveal>

				</div>

				<div className="hero-right">
					<HeroDotLottie />
				</div>
			</div>
		</section>
	);
}