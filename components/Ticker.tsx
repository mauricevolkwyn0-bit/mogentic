import {tickerItems} from "@/lib/constants"

export function Ticker() {
return (
<div className="ticker">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <div key={i} className="ticker-item"><span className="ticker-dot" />{t}</div>
          ))}
        </div>
      </div>
)
}
