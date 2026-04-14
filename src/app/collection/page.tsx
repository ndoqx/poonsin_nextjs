"use client";

import React, { useState, useEffect } from 'react';
import {
  X, Phone, ChevronLeft, CheckCircle2, Star
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatePresence, motion } from 'framer-motion';

// --- DATA ---
interface CollectionItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  coverImage: string;
  images: string[];
}

const COLLECTION_PRODUCTS: CollectionItem[] = [
  {
    id: "st-1",
    name: "ศาลพระภูมิ ทรงไทยประยุกต์ st-1",
    category: "ศาลพระภูมิดั้งเดิม",
    price: "2x,xxx",
    description: "ศาลพระภูมิสถาปัตยกรรมแบบดั้งเดิม พร้อมประดับลวดลายสวยงาม โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิดั้งเดิม"],
    coverImage: "/images/poom/1.1.jpg",
    images: [
      "/images/poom/1.1.jpg",
    ]
  },
  {
    id: "st-2",
    name: "ศาลพระภูมิ ทรงไทยประยุกต์ st-2",
    category: "ศาลพระภูมิดั้งเดิม",
    price: "3x,xxx",
    description: "ศาลพระภูมิสถาปัตยกรรมแบบดั้งเดิม พร้อมประดับลวดลายสวยงาม โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิดั้งเดิม"],
    coverImage: "/images/poom/2.1.jpg",
    images: [
      "/images/poom/2.1.jpg",
    ]
  },
  {
    id: "st-3",
    name: "ศาลพระภูมิ ทรงไทยประยุกต์ st-3",
    category: "ศาลพระภูมิดั้งเดิม",
    price: "3x,xxx",
    description: "ศาลพระภูมิสถาปัตยกรรมแบบดั้งเดิม พร้อมประดับลวดลายสวยงาม โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิดั้งเดิม"],
    coverImage: "/images/poom/3.1.jpg",
    images: [
      "/images/poom/3.1.jpg",
    ]
  },
  {
    id: "st-4",
    name: "ศาลพระภูมิ ทรงไทยประยุกต์ st-4",
    category: "ศาลพระภูมิดั้งเดิม",
    price: "3x,xxx",
    description: "ศาลพระภูมิสถาปัตยกรรมแบบดั้งเดิม พร้อมประดับลวดลายสวยงาม โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิดั้งเดิม"],
    coverImage: "/images/poom/4.1.jpg",
    images: [
      "/images/poom/4.1.jpg",
    ]
  },
  {
    id: "st-5",
    name: "ศาลพระภูมิ ทรงไทยประยุกต์ st-5",
    category: "ศาลพระภูมิดั้งเดิม",
    price: "6x,xxx",
    description: "ศาลพระภูมิสถาปัตยกรรมแบบดั้งเดิม พร้อมประดับลวดลายสวยงาม โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิดั้งเดิม"],
    coverImage: "/images/poom/5.1.jpg",
    images: [
      "/images/poom/5.1.jpg",
    ]
  },
  {
    id: "st-6",
    name: "ศาลพระภูมิ ทรงไทยประยุกต์ st-6",
    category: "ศาลพระภูมิดั้งเดิม",
    price: "6x,xxx",
    description: "ศาลพระภูมิสถาปัตยกรรมแบบดั้งเดิม พร้อมประดับลวดลายสวยงาม โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิดั้งเดิม"],
    coverImage: "/images/poom/6.1.jpg",
    images: [
      "/images/poom/6.1.jpg",
    ]
  },
  {
    id: "sm-1",
    name: "ศาลพระภูมิ โมเดิร์น sm-1",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "1x,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดเล็ก"],
    coverImage: "/images/modernpoom/small/1.1.jpg",
    images: [
      "/images/modernpoom/small/1.1.jpg",
      "/images/modernpoom/small/1.2.jpg"
    ]
  },
  {
    id: "sm-2",
    name: "ศาลพระภูมิ โมเดิร์น sm-2",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดเล็ก"],
    coverImage: "/images/modernpoom/small/2.1.jpg",
    images: [
      "/images/modernpoom/small/2.1.jpg",
      "/images/modernpoom/small/2.2.jpg",
      "/images/modernpoom/small/2.3.jpg",
      "/images/modernpoom/small/2.4.jpg",
      "/images/modernpoom/small/2.5.jpg"
    ]
  },
  {
    id: "sm-3",
    name: "ศาลพระภูมิ โมเดิร์น sm-3",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดเล็ก"],
    coverImage: "/images/modernpoom/small/3.1.jpg",
    images: [
      "/images/modernpoom/small/3.1.jpg",
      "/images/modernpoom/small/3.2.jpg",
      "/images/modernpoom/small/3.3.jpg",
      "/images/modernpoom/small/3.4.jpg",
      "/images/modernpoom/small/3.5.jpg",
      "/images/modernpoom/small/3.6.jpg",
      "/images/modernpoom/small/3.7.jpg",
      "/images/modernpoom/small/3.8.jpg",
      "/images/modernpoom/small/3.9.jpg",
      "/images/modernpoom/small/3.10.jpg"
    ]
  },
  {
    id: "sm-4",
    name: "ศาลพระภูมิ โมเดิร์น sm-4",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "2x,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/small/4.1.png",
    images: [
      "/images/modernpoom/small/4.1.png",
      "/images/modernpoom/small/4.2.png",
      "/images/modernpoom/small/4.3.png"
    ]
  },
  {
    id: "sm-5",
    name: "ศาลพระภูมิ โมเดิร์น sm-5",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/1.1.jpg",
    images: [
      "/images/modernpoom/medium/1.1.jpg",
      "/images/modernpoom/medium/1.2.jpg"
    ]
  },
  {
    id: "sm-6",
    name: "ศาลพระภูมิ โมเดิร์น sm-6",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "2x,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/2.1.jpg",
    images: [
      "/images/modernpoom/medium/2.1.jpg",
      "/images/modernpoom/medium/2.2.jpg",
      "/images/modernpoom/medium/2.3.jpg",
      "/images/modernpoom/medium/2.4.jpg",
      "/images/modernpoom/medium/2.5.jpg",
      "/images/modernpoom/medium/2.6.jpg",
      "/images/modernpoom/medium/2.7.jpg"
    ]
  },
  {
    id: "sm-7",
    name: "ศาลพระภูมิ โมเดิร์น sm-7",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/3.1.jpg",
    images: [
      "/images/modernpoom/medium/3.1.jpg",
      "/images/modernpoom/medium/3.2.jpg",
      "/images/modernpoom/medium/3.3.jpg"
    ]
  },
  {
    id: "sm-8",
    name: "ศาลพระภูมิ โมเดิร์น sm-8",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/4.1.jpg",
    images: [
      "/images/modernpoom/medium/4.1.jpg",
      "/images/modernpoom/medium/4.2.jpg",
      "/images/modernpoom/medium/4.3.jpg"
    ]
  },
  {
    id: "sm-9",
    name: "ศาลพระภูมิ โมเดิร์น sm-9",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/5.1.jpg",
    images: [
      "/images/modernpoom/medium/5.1.jpg",
      "/images/modernpoom/medium/5.2.jpg"
    ]
  },
  {
    id: "sm-10",
    name: "ศาลพระภูมิ โมเดิร์น sm-10",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "2x,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/6.1.jpg",
    images: [
      "/images/modernpoom/medium/6.1.jpg",
      "/images/modernpoom/medium/6.2.jpg"
    ]
  },
  {
    id: "sm-11",
    name: "ศาลพระภูมิ โมเดิร์น sm-11",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/7.1.jpg",
    images: [
      "/images/modernpoom/medium/7.1.jpg",
      "/images/modernpoom/medium/7.2.jpg",
      "/images/modernpoom/medium/7.3.jpg"
    ]
  },
  {
    id: "sm-12",
    name: "ศาลพระภูมิ โมเดิร์น sm-12",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/8.1.jpg",
    images: [
      "/images/modernpoom/medium/8.1.jpg",
      "/images/modernpoom/medium/8.2.jpg",
      "/images/modernpoom/medium/8.3.jpg"
    ]
  },
  {
    id: "sm-13",
    name: "ศาลพระภูมิ โมเดิร์น sm-13",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/medium/9.1.jpg",
    images: [
      "/images/modernpoom/medium/9.1.jpg"
    ]
  },
  {
    id: "sm-14",
    name: "ศาลพระภูมิ โมเดิร์น sm-14",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/large/1.1.jpg",
    images: [
      "/images/modernpoom/large/1.1.jpg",
      "/images/modernpoom/large/1.2.jpg"
    ]
  },
  {
    id: "sm-15",
    name: "ศาลพระภูมิ โมเดิร์น sm-15",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/large/2.1.jpg",
    images: [
      "/images/modernpoom/large/2.1.jpg",
      "/images/modernpoom/large/2.2.jpg"
    ]
  },
  {
    id: "sm-16",
    name: "ศาลพระภูมิ โมเดิร์น sm-16",
    category: "ศาลพระภูมิโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["ศาลพระภูมิโมเดิร์นขนาดกลาง"],
    coverImage: "/images/modernpoom/large/3.1.jpg",
    images: [
      "/images/modernpoom/large/3.1.jpg"
    ]
  },
  {
    id: "bt-1",
    name: "ศาลพระพรหม ดั้งเดิม bt-1",
    category: "ศาลพระพรหมดั้งเดิม",
    price: "8x,xxx",
    description: "ศาลพระพรหมดั้งเดิมขนาดใหญ่",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 12 นิ้ว โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา"],
    coverImage: "/images/promp/1.1.jpg",
    images: [
      "/images/promp/1.1.jpg"
    ]
  },
  {
    id: "bt-2",
    name: "ศาลพระพรหม ดั้งเดิม bt-2",
    category: "ศาลพระพรหมดั้งเดิม",
    price: "8x,xxx",
    description: "ศาลพระพรหมดั้งเดิมขนาดใหญ่",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 12 นิ้ว โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา"],
    coverImage: "/images/promp/2.1.jpg",
    images: [
      "/images/promp/2.1.jpg"
    ]
  },
  {
    id: "bt-3",
    name: "ศาลพระพรหม ดั้งเดิม bt-3",
    category: "ศาลพระพรหมดั้งเดิม",
    price: "8x,xxx",
    description: "ศาลพระพรหมดั้งเดิมขนาดใหญ่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 12 นิ้ว"],
    coverImage: "/images/promp/3.1.jpg",
    images: [
      "/images/promp/3.1.jpg"
    ]
  },
  {
    id: "bm-1",
    name: "ศาลพระพรหม โมเดิร์น bm-1",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/1.1.jpg",
    images: [
      "/images/modernpromp/medium/1.1.jpg"
    ]
  },
  {
    id: "bm-2",
    name: "ศาลพระพรหม โมเดิร์น bm-2",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/2.1.jpg",
    images: [
      "/images/modernpromp/medium/2.1.jpg"
    ]
  },
  {
    id: "bm-3",
    name: "ศาลพระพรหม โมเดิร์น bm-3",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/3.1.jpg",
    images: [
      "/images/modernpromp/medium/3.1.jpg"
    ]
  },
  {
    id: "bm-4",
    name: "ศาลพระพรหม โมเดิร์น bm-4",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/4.1.jpg",
    images: [
      "/images/modernpromp/medium/4.1.jpg"
    ]
  },
  {
    id: "bm-5",
    name: "ศาลพระพรหม โมเดิร์น bm-5",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/5.1.jpg",
    images: [
      "/images/modernpromp/medium/5.1.jpg"
    ]
  },
  {
    id: "bm-6",
    name: "ศาลพระพรหม โมเดิร์น bm-6",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/6.1.jpg",
    images: [
      "/images/modernpromp/medium/6.1.jpg"
    ]
  },
  {
    id: "bm-7",
    name: "ศาลพระพรหม โมเดิร์น bm-7",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/7.1.jpg",
    images: [
      "/images/modernpromp/medium/7.1.jpg"
    ]
  },
  {
    id: "bm-8",
    name: "ศาลพระพรหม โมเดิร์น และ ศาลเจ้าที่ bm-8",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น ตั้งคู่กับศาลเจ้าที่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/8.1.jpg",
    images: [
      "/images/modernpromp/medium/8.1.jpg"
    ]
  },
  {
    id: "bm-9",
    name: "ศาลพระพรหม โมเดิร์น bm-9",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/9.1.jpg",
    images: [
      "/images/modernpromp/medium/9.1.jpg",
      "/images/modernpromp/medium/9.2.jpg",
      "/images/modernpromp/medium/9.3.jpg"
    ]
  },
  {
    id: "bm-10",
    name: "ศาลพระพรหม โมเดิร์น bm-10",
    category: "ศาลพระพรหมโมเดิร์น",
    price: "xx,xxx",
    description: "ศาลพระพรหมสไตล์โมเดิร์น โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เหมาะสำหรับตั้งองค์พระพรหม 9 นิ้ว"],
    coverImage: "/images/modernpromp/medium/10.1.png",
    images: [
      "/images/modernpromp/medium/10.1.png",
      "/images/modernpromp/medium/10.2.png"
    ]
  },
  {
    id: "gs-1",
    name: "ศาลเจ้าที่ gs-1",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "3x,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เรือนแฝดสุดคลาสสิค"],
    coverImage: "/images/shrine/1.1.png",
    images: [
      "/images/shrine/1.1.png"
    ]
  },
  {
    id: "gs-2",
    name: "ศาลเจ้าที่ gs-2",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "1x,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["เรือนแฝดสุดคลาสสิค"],
    coverImage: "/images/shrine/2.1.jpg",
    images: [
      "/images/shrine/2.1.jpg"
    ]
  },
  {
    id: "gs-3",
    name: "ศาลเจ้าที่ gs-3",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/3.1.jpg",
    images: [
      "/images/shrine/3.1.jpg"
    ]
  },
  {
    id: "gs-4",
    name: "ศาลเจ้าที่ gs-4",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "1x,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/4.1.jpg",
    images: [
      "/images/shrine/4.1.jpg"
    ]
  },
  {
    id: "gs-5",
    name: "ศาลเจ้าที่ gs-5",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/5.1.jpg",
    images: [
      "/images/shrine/5.1.jpg"
    ]
  },
  {
    id: "gs-6",
    name: "ศาลเจ้าที่ gs-6",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/6.1.jpg",
    images: [
      "/images/shrine/6.1.jpg"
    ]
  },
  {
    id: "gs-7",
    name: "ศาลเจ้าที่ gs-7",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/7.1.jpg",
    images: [
      "/images/shrine/7.1.jpg"
    ]
  },
  {
    id: "gs-8",
    name: "ศาลเจ้าที่ gs-8",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/8.1.jpg",
    images: [
      "/images/shrine/8.1.jpg"
    ]
  },
  {
    id: "gs-9",
    name: "ศาลเจ้าที่ gs-9",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/9.1.jpg",
    images: [
      "/images/shrine/9.1.jpg",
      "/images/shrine/9.2.jpg"
    ]
  },
  {
    id: "gs-10",
    name: "ศาลเจ้าที่ gs-10",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/10.1.jpg",
    images: [
      "/images/shrine/10.1.jpg"
    ]
  },
  {
    id: "gs-11",
    name: "ศาลเจ้าที่ gs-11",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "1x,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/11.1.jpg",
    images: [
      "/images/shrine/11.1.jpg"
    ]
  },
  {
    id: "gs-12",
    name: "ศาลเจ้าที่ gs-12",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "1x,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/12.1.jpg",
    images: [
      "/images/shrine/12.1.jpg"
    ]
  },
  {
    id: "gs-13",
    name: "ศาลเจ้าที่ gs-13",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/13.1.jpg",
    images: [
      "/images/shrine/13.1.jpg",
      "/images/shrine/13.2.jpg"
    ]
  },
  {
    id: "gs-14",
    name: "ศาลเจ้าที่ gs-14",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/14.1.jpg",
    images: [
      "/images/shrine/14.1.jpg"
    ]
  },
  {
    id: "gs-15",
    name: "ศาลเจ้าที่ gs-15",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/15.1.jpg",
    images: [
      "/images/shrine/15.1.jpg"
    ]
  },
  {
    id: "gs-16",
    name: "ศาลเจ้าที่ gs-16",
    category: "ศาลเจ้าที่ ตา,ยาย",
    price: "xx,xxx",
    description: "โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["สไตล์โมเดิร์นเข้ากับทุกยุคสมัย"],
    coverImage: "/images/shrine/16.1.jpg",
    images: [
      "/images/shrine/16.1.jpg",
      "/images/shrine/16.1.jpg"
    ]
  },
  {
    id: "r-1",
    name: "ศาลทรงโรมัน r-1",
    category: "ศาลโรมัน",
    price: "xx,xxx",
    description: "ศาลดีไซน์ผสมผสานสไตล์โรมัน โดดเด่นด้วยเสาโรมัน พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["ดีไซน์ทันสมัย"],
    coverImage: "/images/roman/1.1.png",
    images: [
      "/images/roman/1.1.png",
      "/images/roman/1.2.png"
    ]
  },
  {
    id: "r-2",
    name: "ศาลทรงโรมัน r-2",
    category: "ศาลโรมัน",
    price: "3x,xxx",
    description: "ศาลดีไซน์ผสมผสานสไตล์โรมัน โดดเด่นด้วยเสาโรมัน พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["ดีไซน์ทันสมัย"],
    coverImage: "/images/roman/2.1.jpg",
    images: [
      "/images/roman/2.1.jpg",
      "/images/roman/2.2.jpg"
    ]
  },
  {
    id: "r-3",
    name: "ศาลทรงโรมัน r-3",
    category: "ศาลโรมัน",
    price: "xx,xxx",
    description: "ศาลดีไซน์ผสมผสานสไตล์โรมัน โดดเด่นด้วยเสาโรมัน พร้อมสีพรีเมียมกันเชื้อรา อายุการใช้งานยาวนาน",
    features: ["ดีไซน์ทันสมัย"],
    coverImage: "/images/roman/3.1.jpg",
    images: [
      "/images/roman/3.1.jpg",
      "/images/roman/3.2.jpg"
    ]
  },
];

const FILTERS = ["ทั้งหมด", "ศาลพระภูมิโมเดิร์น", "ศาลเจ้าที่ ตา,ยาย", "ศาลโรมัน", "ศาลพระพรหมโมเดิร์น", "ศาลพระพรหมดั้งเดิม", "ศาลพระภูมิดั้งเดิม"];

export default function CollectionPage() {
  const [filter, setFilter] = useState<string>("ทั้งหมด");
  const [activeProduct, setActiveProduct] = useState<CollectionItem | null>(null);
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [activeProduct]);

  const handleOpenProduct = (product: CollectionItem) => {
    setActiveProduct(product);
    setSelectedImgIdx(0);
  };

  const closeProduct = () => {
    setActiveProduct(null);
  };

  const navigateToContact = () => {
    window.location.href = '/contact';
  };

  const filteredItems = COLLECTION_PRODUCTS.filter(item => {
    if (filter === 'ทั้งหมด') return true;
    return item.category === filter;
  });

  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans min-h-screen pt-24 selection:bg-amber-200 selection:text-gray-900">

      {/* Header text */}
      <section className="bg-white text-gray-900 py-16 md:py-24 px-6 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal effect="blur-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">สินค้าทั้งหมดของเรา</h1>
          </Reveal>

          {/* Review Banner to fill the white space seamlessly */}
          <Reveal effect="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto mt-12 md:mt-16 bg-[#FAF9F6] border border-gray-100/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-gray-200/50 hover:shadow-gray-300/60 transition-all duration-500">
              <div className="w-full md:w-2/5 overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/images/review-1.jpg"
                  alt="รีวิวความทนทาน"
                  className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-3/5 text-left flex flex-col justify-center">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <span className="text-gray-500 text-sm ml-2 font-medium">รีวิวจากลูกค้าจริง</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight leading-snug">
                  การันตีความทนทาน <br className="hidden md:block" />
                  <span className="text-amber-600">ยาวนานกว่า 5 ปี สีไม่ตก</span>
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  "ศาลพระภูมิร้านพูนสิน ติดตั้งมาเกิน 5 ปีแล้ว สีไม่ตก โครงสร้างยังแข็งแรงเหมือนใหม่ ทนแดดทนฝนได้อย่างดีเยี่ยม มั่นใจได้เลยครับ"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Collection Grid & Filters */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto min-h-[50vh]">

        {/* Filter Tabs */}
        <Reveal effect="fade-up">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-20">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-3 rounded-full font-bold text-sm md:text-base border transition-all duration-300 ${isActive
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md transform -translate-y-0.5'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-amber-400 hover:text-amber-600 shadow-sm'
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* CSS Grid for Products */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                onClick={() => handleOpenProduct(item)}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-amber-200 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col h-full"
              >
                {/* Image Container (Front Grid) */}
                <div className="aspect-[4/3] w-full bg-white overflow-hidden relative flex items-center justify-center p-2">
                  <span className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-amber-600 font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                    {item.category}
                  </span>
                  <img
                    src={item.coverImage}
                    alt={item.name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1 border-t border-gray-50">
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-amber-600 transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <p className="text-amber-600 font-bold text-xl md:text-2xl mb-6 mt-auto">฿{item.price}</p>
                  <div className="flex items-center text-gray-500 text-xs md:text-sm gap-2 font-medium group-hover:text-amber-600 transition-colors">
                    ดูรายละเอียดเพิ่มเติม <ChevronLeft className="rotate-180 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 flex flex-col items-center">
            <div className="text-4xl mb-4 text-gray-300">✦</div>
            <p className="text-xl">ไม่พบสินค้าในหมวดหมู่นี้</p>
          </div>
        )}

      </section>

      {/* 🟢 MODAL: หน้าต่างรายละเอียดสินค้ารายตัว */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex justify-center items-center p-0 md:p-8"
          >

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="bg-white w-full h-full md:h-auto md:max-w-6xl md:max-h-[95vh] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
            >

              {/* Header Mobile Only */}
              <div className="flex md:hidden justify-between items-center p-4 border-b border-gray-100 bg-white shrink-0 z-50 relative shadow-sm w-full">
                <button onClick={() => setActiveProduct(null)} className="p-2 -ml-2 text-gray-600">
                  <ChevronLeft size={28} />
                </button>
                <span className="font-bold text-gray-900 truncate px-2 text-sm">{activeProduct.name}</span>
                <button onClick={closeProduct} className="p-2 -mr-2 text-gray-600">
                  <X size={28} />
                </button>
              </div>

              {/* Header Desktop */}
              <div className="hidden md:flex justify-between items-center p-6 border-b border-gray-100 shrink-0 bg-white">
                <button onClick={closeProduct} className="flex items-center gap-2 text-gray-600 hover:text-amber-600 font-bold transition-colors">
                  <ChevronLeft size={24} /> ย้อนกลับไปเลือกหน้าสินค้าของเรา
                </button>
                <button onClick={closeProduct} className="w-10 h-10 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 rounded-full flex items-center justify-center transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">

                {/* ฝั่งซ้าย: รูปภาพ */}
                <div className="lg:w-1/2 p-4 md:p-10 bg-[#FAF9F6] flex flex-col gap-3 md:gap-4 shrink-0">
                  {/* Main Image in Modal */}
                  <div className="w-full aspect-square bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative flex items-center justify-center p-2 md:p-4">
                    {activeProduct.images && activeProduct.images[selectedImgIdx] ? (
                      <motion.img
                        key={selectedImgIdx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={activeProduct.images[selectedImgIdx]}
                        alt="Product"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">ไม่มีรูปภาพ</div>
                    )}
                  </div>

                  {/* Thumbnails in Modal */}
                  {activeProduct.images && activeProduct.images.length > 1 && (
                    <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar snap-x">
                      {activeProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImgIdx(idx)}
                          className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 snap-start rounded-lg md:rounded-xl overflow-hidden border-2 bg-white transition-all duration-200 ${idx === selectedImgIdx ? 'border-amber-500 opacity-100 shadow-md p-1' : 'border-transparent opacity-60 hover:opacity-100 p-1'}`}
                        >
                          <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-contain" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* ฝั่งขวา: รายละเอียด */}
                <div className="lg:w-1/2 p-6 md:p-10 flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white bg-amber-500 px-2 md:px-3 py-1 rounded-sm w-max mb-3 md:mb-4 uppercase tracking-wider">
                    {activeProduct.category}
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                    {activeProduct.name}
                  </h2>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50/30 p-4 md:p-6 rounded-xl md:rounded-2xl mb-6 md:mb-8 border border-amber-100/50 mt-2">
                    <p className="text-gray-500 text-xs md:text-sm mb-1 font-medium">ราคาเริ่มต้น</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl md:text-2xl text-amber-600 font-bold">฿</span>
                      <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                        {activeProduct.price}
                      </span>
                    </div>
                  </div>

                  <div className="mb-8 flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">รายละเอียดสินค้า</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                      {activeProduct.description}
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      {activeProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-gray-700">
                          <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Sticky Bottom on Mobile */}
                  <div className="sticky bottom-0 bg-white pt-4 pb-2 md:static md:bg-transparent md:pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto">
                    <button
                      onClick={navigateToContact}
                      className="flex-1 border-2 border-amber-500 bg-amber-50 text-amber-600 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-amber-100 transition-colors flex justify-center items-center gap-2"
                    >
                      <Phone size={20} className="md:w-6 md:h-6" /> นัดหมาย / สั่งทำ
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}