export default function SectionHeader({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="font-display font-normal text-5xl leading-[1.1] tracking-[-1px] text-on-dark mb-8"
    >
      {title}
    </h2>
  );
}
