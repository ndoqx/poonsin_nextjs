import { Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold font-heading mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="mb-4 max-w-sm">
              ผู้เชี่ยวชาญด้านศาลพระภูมิและศาลโมเดิร์น
              ด้วยประสบการณ์ยาวนานกว่า 60 ปี
              เรามุ่งมั่นสร้างสรรค์งานศิลป์ที่เป็นมงคลคู่บ้านคุณ
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              เมนูนำทาง
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="hover:text-gold transition">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              ติดต่อ
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> {SITE_CONFIG.phone} (
                {SITE_CONFIG.ownerName})
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" /> ID Line:{" "}
                {SITE_CONFIG.lineId}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name} (
            {SITE_CONFIG.nameEn}). สงวนลิขสิทธิ์.
          </p>
        </div>
      </div>
    </footer>
  );
}
