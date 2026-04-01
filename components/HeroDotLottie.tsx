"use client"

import { DotLottiePlayer } from "@dotlottie/react-player";


export function HeroDotLottie() {
 return (
<DotLottiePlayer
                src="/videos/hero-animation.lottie"
                autoplay
                loop
                style={{ width: "100%", height: "auto" }}
              />
)
}
