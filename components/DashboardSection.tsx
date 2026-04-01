import Reveal from "@/components/Reveal";
import {barHeights} from "@/lib/constants"

export function DashboardSection() {
return (
<div className="dash-wrap">
        <Reveal><div className="sec-eye">Platform Preview</div></Reveal>
        <Reveal><h2 className="sec-h2">Realtime client<br />dashboards.</h2></Reveal>
        <Reveal>
          <div className="dash-frame">
            <div className="dash-bar">
              <div className="dash-dot" style={{ background: "#ff5f57" }} />
              <div className="dash-dot" style={{ background: "#ffbd2e" }} />
              <div className="dash-dot" style={{ background: "#28c840" }} />
              <div className="dash-url">app.mogentik.ai / dashboard / acme-corp</div>
            </div>
            <div className="dash-body">
              <div className="dash-side">
                {["Overview", "SEO Report", "Social", "Competitors", "Content Queue", "Reports", "Settings"].map(item => (
                  <div key={item} className={`dash-nav${item === "Overview" ? " on" : ""}`}>{item}</div>
                ))}
              </div>
              <div className="dash-main">
                <div className="stat a"><span className="stat-val">↑ 143</span><span className="stat-lbl">Organic Keywords</span><span className="stat-delta">+28 this week</span></div>
                <div className="stat b"><span className="stat-val">8.4k</span><span className="stat-lbl">Monthly Visitors</span><span className="stat-delta">+12.3%</span></div>
                <div className="stat c"><span className="stat-val">94</span><span className="stat-lbl">SEO Health Score</span><span className="stat-delta">Excellent</span></div>
                <div className="chart-wrap">
                  <div className="chart-lbl">Organic Traffic — Last 14 Days</div>
                  <div className="bar-chart animate">{barHeights.map((h, i) => <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }} />)}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
)
}
