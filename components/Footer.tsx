import Image from "next/image";

export default function Footer() {
return (
<footer>
        <div className="footer-l">
          <div className="footer-icon">
            <Image
              src="/images/logo_icon_black.png"
              alt="Mogentik Logo"
              width={24}
              height={24}
              style={{ objectFit: 'contain', opacity: 0.35 }}
            />
          </div>
          <span className="footer-name">MOGENTIK © 2025 owned by MO AND CO PTY LTD</span>
        </div>
        <div className="footer-r">Marketing that thinks for itself.</div>
      </footer>
)
}
