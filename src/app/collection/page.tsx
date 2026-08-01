import type { Metadata } from 'next';
import { CollectionClient } from './CollectionClient';

export const metadata: Metadata = {
  title: 'สินค้าทั้งหมดของเรา | ร้านพูนสิน',
  description:
    'รวมศาลพระภูมิ ศาลพระพรหม ศาลเจ้าที่ และศาลโรมันทุกรูปแบบจากร้านพูนสิน ทั้งดีไซน์ดั้งเดิมและโมเดิร์น เลือกชมสินค้าและราคาได้ที่นี่',
  alternates: {
    canonical: '/collection',
  },
  openGraph: {
    title: 'สินค้าทั้งหมดของเรา | ร้านพูนสิน',
    description:
      'รวมศาลพระภูมิ ศาลพระพรหม ศาลเจ้าที่ และศาลโรมันทุกรูปแบบจากร้านพูนสิน ทั้งดีไซน์ดั้งเดิมและโมเดิร์น เลือกชมสินค้าและราคาได้ที่นี่',
    url: 'https://poonsinshop.com/collection',
    type: 'website',
  },
};

export default function CollectionPage() {
  return <CollectionClient />;
}
