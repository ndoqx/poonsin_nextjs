import Image from "next/image";
import { CheckCircle, HeartHandshake } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/400x500/f3f4f6/C5A059?text=Owner+Installing"
                alt="การติดตั้งศาล"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
              />
              <Image
                src="https://placehold.co/400x500/f3f4f6/C5A059?text=Craftsmanship"
                alt="ฝีมือช่าง"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl border-4 border-gold w-32 h-32 flex flex-col items-center justify-center text-center">
              <span className="font-heading font-bold text-3xl text-gold">
                {SITE_CONFIG.yearsExperience}
              </span>
              <span className="text-xs text-gray-500 font-semibold uppercase">
                Years Exp.
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-gold font-semibold text-lg mb-2 uppercase tracking-wide">
              เกี่ยวกับร้านพูนสิน
            </h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ตำนานแห่งความศรัทธาที่ส่งต่อรุ่นสู่รุ่น
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ร้านพูนสินดำเนินกิจการมาอย่างยาวนานกว่า 60 ปี
              เราเริ่มต้นจากการเป็นผู้เชี่ยวชาญด้านศาลพระภูมิแบบดั้งเดิม
              และได้พัฒนาฝีมือผสานเข้ากับยุคสมัยใหม่ จนเกิดเป็น
              &quot;ศาลโมเดิร์น&quot;
              ที่ตอบโจทย์บ้านและธุรกิจในปัจจุบัน
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              เราใส่ใจในทุกรายละเอียด ดูแลทุกขั้นตอนโดยเจ้าของร้านโดยตรง
              ตั้งแต่การเลือกแบบ การผลิต จนถึงการติดตั้ง
              เพื่อให้ลูกค้าได้รับสิ่งที่ดีที่สุด
              ทั้งความสวยงามและความเป็นสิริมงคล
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-gold mt-1 mr-3 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-gray-900">
                    คุณภาพที่เชื่อถือได้
                  </h4>
                  <p className="text-sm text-gray-500">
                    วัสดุเกรดพรีเมียม แข็งแรง ทนทาน
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <HeartHandshake className="w-6 h-6 text-gold mt-1 mr-3 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-gray-900">
                    ดูแลโดยเจ้าของ
                  </h4>
                  <p className="text-sm text-gray-500">
                    ใส่ใจทุกขั้นตอน บริการด้วยใจ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
