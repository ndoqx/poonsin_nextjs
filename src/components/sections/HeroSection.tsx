import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-150 flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/EEE/CCC?text=Beautiful+Modern+Spirit+House+Background"
          alt="ร้านพูนสิน ศาลพระภูมิ"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm tracking-widest mb-4">
          ผู้เชี่ยวชาญกว่า 60 ปี
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          ผสมผสานความศรัทธา <br />
          <span className="text-gold">สู่งานดีไซน์ที่ลงตัว</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          จำหน่ายศาลพระภูมิ ศาลเจ้าที่ สไตล์โมเดิร์น และแบบดั้งเดิม
          พร้อมบริการติดตั้งครบวงจร โดยทีมงานมืออาชีพ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="px-8 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            ดูสินค้าแนะนำ
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gold text-white rounded-full font-semibold hover:bg-gold-dark transition shadow-lg border border-transparent"
          >
            สอบถามราคา
          </a>
        </div>
      </div>
    </section>
  );
}
