import Image from "next/image";
import { Phone, Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-gray-100 to-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="md:w-1/2 p-10 md:p-14">
            <span className="text-gold font-bold tracking-wider uppercase mb-2 block">
              Contact Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              สนใจสอบถามและสั่งซื้อ
            </h2>
            <p className="text-gray-600 mb-8">
              เรามีทีมงานพร้อมให้คำแนะนำ
              เพื่อให้คุณได้ศาลพระภูมิที่ถูกใจและถูกต้องตามหลักมงคล
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    โทรสอบถาม (คุณ{SITE_CONFIG.ownerName})
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="text-xl font-bold text-gray-800 hover:text-gold"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* LINE */}
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.6.5.5 5.6.5 12c0 2.1.5 4.1 1.5 5.9l-1 5 5.1-1c1.7.9 3.6 1.4 5.9 1.4 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">LINE ID</p>
                  <a
                    href={SITE_CONFIG.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-800 hover:text-gold"
                  >
                    {SITE_CONFIG.lineId}
                  </a>
                </div>
              </div>

              {/* Social buttons */}
              <div className="flex gap-4 mt-8">
                <a
                  href={SITE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <Facebook className="w-5 h-5" /> Facebook
                </a>
                <a
                  href="#"
                  className="flex-1 bg-pink-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-pink-700 transition flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map / Image Side */}
          <div className="md:w-1/2 bg-gray-200 relative min-h-100">
            <Image
              src="https://placehold.co/800x800/C5A059/FFFFFF?text=Map+or+Showroom+Photo"
              alt="แผนที่ร้านพูนสิน"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent text-white">
              <p className="font-bold text-lg">{SITE_CONFIG.name}</p>
              <p className="text-sm opacity-90">
                ให้บริการจัดส่งและติดตั้งทั่วประเทศไทย
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
