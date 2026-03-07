// ===== Site Configuration =====
export const SITE_CONFIG = {
  name: "ร้านพูนสิน",
  nameEn: "Poon Sin Spirit House",
  tagline: "Since 1964",
  description:
    "จำหน่ายศาลพระภูมิ ศาลเจ้าที่ สไตล์โมเดิร์น และแบบดั้งเดิม พร้อมบริการติดตั้งครบวงจร โดยทีมงานมืออาชีพ",
  yearsExperience: "60+",
  phone: "081-8890173",
  phoneRaw: "0818890173",
  ownerName: "สิงหะ",
  lineId: "0611733389",
  lineUrl: "https://line.me/ti/p/~0611733389",
  facebookUrl:
    "https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr",
} as const;

// ===== Navigation =====
export const NAV_LINKS = [
  { href: "#home", label: "หน้าแรก" },
  { href: "#about", label: "ความเป็นมา" },
  { href: "#products", label: "สินค้าของเรา" },
  { href: "#reviews", label: "รีวิวลูกค้า" },
  { href: "#services", label: "บริการ" },
] as const;

// ===== Products =====
export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  category: ProductCategory;
}

export type ProductCategory = "all" | "modern" | "traditional" | "brahman";

export const PRODUCT_CATEGORIES: { key: ProductCategory; label: string }[] = [
  { key: "all", label: "ทั้งหมด" },
  { key: "modern", label: "ศาลโมเดิร์น" },
  { key: "traditional", label: "ศาลพระภูมิ/เจ้าที่" },
  { key: "brahman", label: "ศาลพระพรหม" },
];

export const PRODUCTS: Product[] = [
  {
    id: "modern-luxury",
    title: "ชุดศาลพระภูมิโมเดิร์น ลักชัวรี่",
    description:
      "ดีไซน์เรียบหรู เข้ากับบ้านสไตล์ Modern & Minimal เน้นโทนสีขาวสะอาดตา",
    image:
      "https://photos.app.goo.gl/bPsNCA1kxTNLfCNg7",
    imageAlt: "ศาลโมเดิร์น",
    badge: "Best Seller",
    category: "modern",
  },
  {
    id: "thai-traditional",
    title: "ศาลพระภูมิทรงไทยประยุกต์",
    description:
      "ความงดงามตามแบบฉบับดั้งเดิม ลวดลายวิจิตรบรรจง ทรงคุณค่า",
    image:
      "https://placehold.co/600x400/EEE/999?text=Traditional+Spirit+House",
    imageAlt: "ศาลแบบดั้งเดิม",
    category: "traditional",
  },
  {
    id: "brahman-large",
    title: "ศาลพระพรหม ขนาดใหญ่",
    description:
      "สำหรับกิจการ ธุรกิจ หรือบ้านขนาดใหญ่ เสริมบารมีและความเจริญรุ่งเรือง",
    image: "https://placehold.co/600x400/EEE/999?text=Brahman+Shrine",
    imageAlt: "ศาลพระพรหม",
    category: "brahman",
  },
  {
    id: "ancestor-shrine",
    title: "ศาลตายาย / ศาลเจ้าที่",
    description:
      "มีทั้งแบบเรือนไทยและแบบโมเดิร์น จัดชุดเข้าคู่กับศาลพระภูมิได้อย่างลงตัว",
    image:
      "https://placehold.co/600x400/EEE/999?text=Ancestor+Shrine",
    imageAlt: "ศาลตายาย",
    category: "traditional",
  },
  {
    id: "roman-style",
    title: "ศาลสไตล์โรมัน",
    description:
      "โดดเด่นด้วยเสาโรมันและโดมที่สง่างาม เหมาะสำหรับคฤหาสน์หรู",
    image: "https://placehold.co/600x400/EEE/999?text=Roman+Style",
    imageAlt: "ศาลโรมัน",
    category: "modern",
  },
  {
    id: "accessories",
    title: "ของแต่งบ้านมงคล",
    description:
      "ตุ๊กตาบริวาร ช้างม้า นางรำ ฉัตรเงินฉัตรทอง ครบครันสำหรับพิธีตั้งศาล",
    image: "https://placehold.co/600x400/EEE/999?text=Accessories",
    imageAlt: "ของแต่งบ้านมงคล",
    category: "traditional",
  },
];

// ===== Services =====
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "delivery",
    icon: "Truck",
    title: "จัดส่งทั่วประเทศ",
    description:
      "บริการขนส่งที่รวดเร็วและปลอดภัย มั่นใจได้ว่าศาลพระภูมิจะถึงมือท่านในสภาพสมบูรณ์",
  },
  {
    id: "installation",
    icon: "Hammer",
    title: "ติดตั้งโดยมืออาชีพ",
    description:
      "ทีมงานช่างผู้ชำนาญการ พร้อมติดตั้งให้ถูกต้องตามหลักวิศวกรรมและความสวยงาม",
  },
  {
    id: "consultation",
    icon: "MessageSquare",
    title: "ให้คำปรึกษาฟรี",
    description:
      "ให้คำแนะนำเรื่องทิศทาง รูปแบบ และขนาดที่เหมาะสมกับพื้นที่ โดยทีมงานและเจ้าของร้าน",
  },
];

// ===== Reviews =====
export interface Review {
  id: string;
  name: string;
  avatar: string;
  timeAgo: string;
  content: string;
  image?: string;
  reactionCount: number;
  reactionType: "thumbs-up" | "heart";
}

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "คุณสมชาย ใจดี",
    avatar: "https://placehold.co/100x100/EEE/999?text=User1",
    timeAgo: "2 วันที่แล้ว",
    content:
      "บริการดีมากครับ ให้คำแนะนำเรื่องทิศตั้งศาลละเอียดมาก ศาลสวยตรงปก งานจริงสีสวยกว่าในรูปอีกครับ ติดตั้งรวดเร็ว ประทับใจครับ",
    image:
      "https://placehold.co/300x200/f3f4f6/C5A059?text=Installed+House",
    reactionCount: 12,
    reactionType: "thumbs-up",
  },
  {
    id: "review-2",
    name: "คุณนิดา สุขสมบูรณ์",
    avatar: "https://placehold.co/100x100/EEE/999?text=User2",
    timeAgo: "1 สัปดาห์ที่แล้ว",
    content:
      "ขอบคุณร้านพูนสินมากค่ะ คุณสิงหะให้คำแนะนำดีมาก จากที่ไม่รู้เรื่องพิธีเลย ตอนนี้สบายใจมาก ศาลโมเดิร์นเข้ากับบ้านสุดๆ แขกมาบ้านชมทุกคนเลยค่ะ",
    reactionCount: 24,
    reactionType: "heart",
  },
  {
    id: "review-3",
    name: "Somsak Construction",
    avatar: "https://placehold.co/100x100/EEE/999?text=User3",
    timeAgo: "3 สัปดาห์ที่แล้ว",
    content:
      "สั่งทำศาลพระพรหมไปวางหน้าบริษัท งานจริงอลังการมากครับ วัสดุแข็งแรงทนทาน ขนส่งดูแลดี ไม่มีตำหนิเลยครับ ราคาสมเหตุสมผล ไว้มีโครงการหน้าจะมาอุดหนุนใหม่ครับ",
    reactionCount: 8,
    reactionType: "thumbs-up",
  },
];
