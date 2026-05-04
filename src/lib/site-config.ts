export const SITE_CONFIG = {
  heroBgImage: "https://storage.googleapis.com/poonsinshop-images/images/herobanner.webp",

  // 📂 ระบบ Catalog
  catalog: {
    spiritTraditional: {
      categoryName: "ศาลพระภูมิดั้งเดิม (Traditional Spirit House)",
      coverImage: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop",
      items: [
        {
          id: "st1",
          name: "ศาลพระภูมิ ทรงไทยประยุกต์ ปิดทองคำเปลว",
          price: "35,900",
          sold: "340",
          rating: "4.9",
          description: "สถาปัตยกรรมแบบดั้งเดิม ความวิจิตรบรรจงระดับสูงสุด พร้อมประดับลวดลายและปิดทองคำเปลว",
          features: ["งานช่างฝีมือประสบการณ์ 60 ปี", "ประดับลวดลายวิจิตรและปิดทอง", "โครงสร้างแข็งแรงทนทานเป็นมรดก"],
          images: [
            "https://images.unsplash.com/photo-1599619585752-c3c94d6d4ba7?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2670&auto=format&fit=crop"
          ]
        }
      ]
    },
    spiritModern: {
      categoryName: "ศาลพระภูมิโมเดิร์น (Modern Spirit House)",
      coverImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2680&auto=format&fit=crop",
      items: [
        {
          id: "sm1",
          name: "โมเดิร์น รุ่น M-01 (Minimalist White)",
          price: "29,900",
          sold: "125",
          rating: "5.0",
          description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่",
          features: ["โครงสร้างคอนกรีตเสริมเหล็ก", "สีพรีเมียมกันเชื้อรา", "ถูกต้องตามหลักฮวงจุ้ย"],
          images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop"
          ]
        },
        {
          id: "sm2",
          name: "โมเดิร์น รุ่น M-02 (Luxury Marble)",
          price: "45,000",
          sold: "84",
          rating: "4.9",
          description: "ยกระดับความหรูหราด้วยการปิดผิวลายหินอ่อน นำเข้าจากต่างประเทศ โดดเด่นไม่ซ้ำใคร",
          features: ["ปิดผิวลายหินอ่อนพรีเมียม", "ดีไซน์โปร่ง รับลม", "ฐานกว้างพิเศษ"],
          images: [
            "https://images.unsplash.com/photo-1583847268964-b28ce8f25f2b?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
          ]
        }
      ]
    },
    brahmaTraditional: {
      categoryName: "ศาลพระพรหมดั้งเดิม (Traditional Brahma Shrine)",
      coverImage: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=2592&auto=format&fit=crop",
      items: [
        {
          id: "bt1",
          name: "ศาลพระพรหม ขนาดมาตรฐาน สำหรับองค์กร",
          price: "89,000",
          sold: "89",
          rating: "5.0",
          description: "ความยิ่งใหญ่และสง่างามขั้นสุด ศูนย์รวมศรัทธาที่ออกแบบมาเพื่อเสริมสิริมงคลให้กับธุรกิจ อาคารสำนักงานขนาดใหญ่",
          features: ["ขนาดถูกต้องตามหลักคติพราหมณ์", "วัสดุเกรดพรีเมียมที่สุดทนแดดฝน", "บริการดูพื้นที่และฤกษ์ตั้งศาล"],
          images: [
            "https://images.unsplash.com/photo-1574087913340-7ec878da6b98?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565610222536-ef125c5972e3?q=80&w=2574&auto=format&fit=crop"
          ]
        }
      ]
    },
    brahmaModern: {
      categoryName: "ศาลพระพรหมโมเดิร์น (Modern Brahma Shrine)",
      coverImage: "https://images.unsplash.com/photo-1568013821213-911369b76a71?q=80&w=2574&auto=format&fit=crop",
      items: [
        {
          id: "bm1",
          name: "ศาลพระพรหม รุ่นพิเศษ (Gold Edition)",
          price: "129,000",
          sold: "32",
          rating: "5.0",
          description: "ที่สุดของความมั่งคั่ง ด้วยการประดับทองคำเปลวและกระจกสีอย่างประณีตทั้งองค์",
          features: ["ปิดทองคำเปลว 100%", "สถาปัตยกรรมชั้นครู", "สำหรับคฤหาสน์และโรงแรม"],
          images: [
            "https://images.unsplash.com/photo-1568013821213-911369b76a71?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523544545175-92e04b96d26b?q=80&w=2574&auto=format&fit=crop"
          ]
        }
      ]
    },
    guardianSpirit: {
      categoryName: "ศาลเจ้าที่ (Guardian Spirit House)",
      coverImage: "https://images.unsplash.com/photo-1620023758287-c4664a754117?q=80&w=2670&auto=format&fit=crop",
      items: [
        {
          id: "gs1",
          name: "ศาลเจ้าที่ ทรงเรือนไทยโบราณไม้สัก",
          price: "59,000",
          sold: "120",
          rating: "5.0",
          description: "ศาลเจ้าที่จำลองแบบจากเรือนไทยโบราณ แกะสลักอย่างวิจิตรบรรจง คลาสสิกและทรงคุณค่า",
          features: ["ไม้เนื้อแข็งทนแดดทนฝน", "ลงน้ำยาเคลือบเงาพิเศษ", "เสริมบารมีเจ้าของบ้าน"],
          images: [
            "https://images.unsplash.com/photo-1620023758287-c4664a754117?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop"
          ]
        }
      ]
    },
    roman: {
      categoryName: "ศาลโรมัน (Roman Shrine)",
      coverImage: "https://images.unsplash.com/photo-1582570881907-7cb52ea02dce?q=80&w=2670&auto=format&fit=crop",
      items: [
        {
          id: "r1",
          name: "ศาลทรงยุโรป โรมันคลาสสิก",
          price: "95,000",
          sold: "45",
          rating: "4.8",
          description: "ศาลดีไซน์ผสมผสานสไตล์ยุโรป โดดเด่นด้วยเสาโรมัน เหมาะกับบ้านสไตล์คลาสสิก หรือลักชัวรี่วิลล่า",
          features: ["เสาโรมัน แกะสลักอย่างประณีต", "โครงสร้างหินอ่อนเทียมกันแดดกันฝน", "ดีไซน์หรูหราระดับคฤหาสน์"],
          images: [
            "https://images.unsplash.com/photo-1582570881907-7cb52ea02dce?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543482705-1a8dfc8ac604?q=80&w=2670&auto=format&fit=crop"
          ]
        }
      ]
    }
  },

  reviews: [
    {
      id: 1,
      author: "คุณธนินทร์ ว.",
      role: "เจ้าของโครงการอสังหาริมทรัพย์",
      content: "งานละเอียดมากครับ ไม่มีรอยต่อที่ไม่เรียบร้อยเลย บริการติดตั้งก็มืออาชีพ แนะนำได้ครบถ้วน ประทับใจมากครับ สมกับประสบการณ์ 60 ปี",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
      link: "https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr"
    },
    {
      id: 2,
      author: "คุณวิลาวัลย์",
      role: "ลูกค้าบ้านเดี่ยว",
      content: "ศาลโมเดิร์นสวยเข้ากับตัวบ้านมากค่ะ ทีมงานคุณสิงหะดูแลดีตั้งแต่การเลือกแบบจนถึงวันตั้งศาล แนะนำร้านนี้เลยค่ะ ไม่ผิดหวัง",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
      link: "https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr"
    },
    {
      id: 3,
      author: "บจก. เอสเทต ดีเวลลอปเมนท์",
      role: "ลูกค้าองค์กร",
      content: "สั่งทำศาลพระพรหมสำหรับหน้าอาคารสำนักงานใหญ่ งานวิจิตรบรรจง ปิดทองสวยงามมาก ช่วยเสริมบารมีให้องค์กรได้ดีเยี่ยมครับ",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
      link: "https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr"
    }
  ],

  bestSellers: [
    { id: "bs1", name: "ศาลพระพรหม โมเดิร์น", image: "https://placehold.co/400x400/transparent/white.png", bgColor: "bg-[#DE7254]" },
    { id: "bs2", name: "ศาลพระภูมิ ดั้งเดิม", image: "https://placehold.co/400x400/transparent/white.png", bgColor: "bg-[#D9B44A]" },
    { id: "bs3", name: "ศาลพระภูมิ ดั้งเดิม", image: "https://placehold.co/400x400/transparent/white.png", bgColor: "bg-[#A2CEDB]" },
  ],

  articles: [
    { id: "a1", slug: "difference-between-shrines", title: "ศาลพระภูมิ และ ศาลเจ้าที่ ต่างกันอย่างไร ?", image: "https://placehold.co/100x100/transparent/white.png", bgColor: "bg-[#F27C50]", textColor: "text-white" },
    { id: "a2", slug: "how-to-setup-shrine", title: "วิธีตั้งศาล\nให้ถูกใจเจ้าที่", bgColor: "bg-[#B9D8DB]", textColor: "text-[#2B3B4C]" },
    { id: "a3", slug: "shrine-taboos", title: "ข้อห้ามเกี่ยวกับ\nศาลพระภูมิ\nที่คุณต้องรู้", bgColor: "bg-[#655F6D]", textColor: "text-gray-400" },
  ]
};

export type CategoryKey = keyof typeof SITE_CONFIG.catalog;

export type ProductItem = {
  id: string;
  name: string;
  price: string;
  sold: string;
  rating: string;
  description: string;
  features: string[];
  images: string[];
};

export type CategoryConfig = {
  categoryName: string;
  coverImage: string;
  items: ProductItem[];
};
