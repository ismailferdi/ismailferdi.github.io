import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <Section
      id="education"
      aria-labelledby="education-heading"
      paddingBlock={8}
      paddingInline={4}
      dividers={['top']}
    >
      <VStack gap={8}>
        <SectionHeader id="education-heading" title="Education" />

        <VStack gap={3}>
          <HStack justify="between" align="start" gap={4} wrap="wrap">
            <Heading level={3} textWrap="balance">
              Bachelor's in Computer Science, AI Specialization
            </Heading>
            <Text type="supporting">Sep 2022 – Jul 2027</Text>
          </HStack>

          <Text color="secondary">Université Djillali Liabès, Algeria</Text>

          <Text>
            <Text weight="semibold" display="inline">
              Relevant coursework:
            </Text>{' '}
            Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Big Data
            Analytics, Linear Algebra, Probability &amp; Statistics, Algorithms &amp; Data
            Structures
          </Text>
        </VStack>
      </VStack>
    </Section>
  );
}
