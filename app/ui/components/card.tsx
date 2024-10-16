export default function Card({
  subtitle,
  title,
  content,
}: {
  subtitle: string;
  title: string;
  content: string;
}) {
  return (
    <div className="shadow-2xl bg-white rounded-lg px-8 py-5 mb-2">
      {subtitle && (
        <small className="text-[#33333366] tracking-wide">{subtitle}</small>
      )}
      {title && <p className="text-lg font-semibold">{title}</p>}
      {content && <p>{content}</p>}
    </div>
  );
}
