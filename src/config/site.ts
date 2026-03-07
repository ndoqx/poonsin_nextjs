export const SITE_CONFIG = {
  // 1. ภาพพื้นหลังหน้าแรก (Hero Background)
  heroBgImage: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop",
  
  // 2. ภาพสินค้าในคอลเลกชันต่างๆ (หน้าหลัก)
  products: {
    modern: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2680&auto=format&fit=crop",
    classic: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop", 
    brahma: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=2592&auto=format&fit=crop"    
  },

  // 3. ข้อมูลรายละเอียดสินค้าในหน้าต่าง Popup (Shopee Style)
  productDetails: {
    modern: {
      name: "ศาลพระภูมิ สไตล์โมเดิร์น (Modern Series) ทรงมินิมอล",
      price: "29,900", // แก้ไขราคาเริ่มต้นศาลโมเดิร์นที่นี่
      sold: "125",
      rating: "5.0",
      description: "ศาลพระภูมิสไตล์โมเดิร์นที่ผสมผสานความสวยงามและความเป็นสิริมงคลเข้ากับยุคสมัยใหม่ได้อย่างลงตัว ดีไซน์มินิมอลแต่ทรงพลัง เข้ากันได้ดีกับบ้านเดี่ยวและโครงการยุคใหม่",
      features: ["โครงสร้างคอนกรีตเสริมเหล็กทนทาน", "สีพรีเมียมกันตะไคร่น้ำและเชื้อรา", "ถูกต้องตามหลักฮวงจุ้ย 100%"]
    },
    classic: {
      name: "ศาลพระภูมิ และ ศาลเจ้าที่ ทรงคลาสสิก (Classic Heritage)",
      price: "35,900", // แก้ไขราคาเริ่มต้นศาลพระภูมิ/ศาลเจ้าที่ที่นี่
      sold: "340",
      rating: "4.9",
      description: "สถาปัตยกรรมแบบดั้งเดิม ความวิจิตรบรรจงระดับสูงสุด พร้อมประดับลวดลายและปิดทองคำเปลว สะท้อนบารมีและดึงดูดความมั่งคั่งให้ผู้ครอบครอง",
      features: ["งานช่างฝีมือประสบการณ์ 60 ปี", "ประดับลวดลายวิจิตรและปิดทอง", "โครงสร้างแข็งแรงทนทานเป็นมรดก"]
    },
    brahma: {
      name: "ศาลพระพรหม ขนาดใหญ่สำหรับองค์กร (The Grand Brahma)",
      price: "89,000", // แก้ไขราคาเริ่มต้นศาลพระพรหมที่นี่
      sold: "89",
      rating: "5.0",
      description: "ความยิ่งใหญ่และสง่างามขั้นสุด ศูนย์รวมศรัทธาที่ออกแบบมาเพื่อเสริมสิริมงคลให้กับธุรกิจ อาคารสำนักงานขนาดใหญ่ และคฤหาสน์หรู",
      features: ["ขนาดถูกต้องตามหลักคติพราหมณ์", "วัสดุเกรดพรีเมียมที่สุดทนแดดฝน", "บริการดูพื้นที่และฤกษ์ตั้งศาล"]
    }
  },

  // 4. ภาพเพิ่มเติมในแต่ละแบบ (Gallery) - ลิ้งก์รูปจะแสดงใน Popup
  galleries: {
    modern: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2680&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28ce8f25f2b?q=80&w=2574&auto=format&fit=crop",
    ],
    classic: [
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599619585752-c3c94d6d4ba7?q=80&w=2669&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620023758287-c4664a754117?q=80&w=2670&auto=format&fit=crop",
    ],
    brahma: [
      "https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=2592&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574087913340-7ec878da6b98?q=80&w=2574&auto=format&fit=crop",
    ]
  },

  // 5. ข้อมูลรีวิวลูกค้า
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
  ]
};
