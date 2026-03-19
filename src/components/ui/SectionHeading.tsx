interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-gold font-heading font-semibold uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mt-2 ${light ? "text-white" : "text-gray-900"
          }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-600"
            }`}
        >
          {description}
        </p>
      )}
      {!description && (
        <div className="w-20 h-1 bg-gold mt-4 mx-auto" />
      )}
    </div>
  );
}
