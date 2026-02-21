import Image from "next/image";
import { Facebook, ThumbsUp, Heart, Globe } from "lucide-react";
import type { Review } from "@/lib/constants";

interface ReviewCardProps {
  review: Review;
}

const reactionIcons = {
  "thumbs-up": ThumbsUp,
  heart: Heart,
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const ReactionIcon = reactionIcons[review.reactionType];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full relative">
      {/* Facebook badge */}
      <div className="absolute top-6 right-6 text-blue-600">
        <Facebook className="w-6 h-6" />
      </div>

      {/* User info */}
      <div className="flex items-center mb-4">
        <Image
          src={review.avatar}
          alt={review.name}
          width={48}
          height={48}
          className="rounded-full mr-4 border-2 border-white shadow-sm"
        />
        <div>
          <h4 className="font-bold text-gray-900 font-heading">
            {review.name}
          </h4>
          <div className="flex items-center text-gray-400 text-xs gap-1">
            <span>{review.timeAgo}</span>
            <span>•</span>
            <Globe className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <p className="text-gray-700 leading-relaxed">
          &ldquo;{review.content}&rdquo;
        </p>
        {review.image && (
          <div className="mt-4 rounded-lg overflow-hidden h-40 bg-gray-100 relative">
            <Image
              src={review.image}
              alt="รีวิวจากลูกค้า"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
      </div>

      {/* Reactions */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <div className="bg-blue-500 rounded-full p-1 text-white">
            <ReactionIcon className="w-3 h-3" />
          </div>
          <span>{review.reactionCount}</span>
        </div>
        <div className="flex gap-4">
          <span>ถูกใจ</span>
          <span>ตอบกลับ</span>
        </div>
      </div>
    </div>
  );
}
