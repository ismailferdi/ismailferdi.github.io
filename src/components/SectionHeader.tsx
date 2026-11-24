import { Heading } from '@astryxdesign/core/Heading';

export default function SectionHeader({ id, title }: { id: string; title: string }) {
  return (
    <Heading id={id} level={2} type="display-3" textWrap="balance">
      {title}
    </Heading>
  );
}
