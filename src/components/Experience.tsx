import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { List, ListItem } from '@astryxdesign/core/List';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';
import SectionHeader from './SectionHeader';
import { experienceBullets } from '../data/portfolio';

export default function Experience() {
  return (
    <Section
      id="experience"
      aria-labelledby="experience-heading"
      paddingBlock={8}
      paddingInline={4}
      dividers={['top']}
    >
      <VStack gap={8}>
        <SectionHeader id="experience-heading" title="Experience" />

        <VStack gap={4}>
          <HStack justify="between" align="start" gap={4} wrap="wrap">
            <VStack gap={1}>
              <Heading level={3} textWrap="balance">
                Intern, Industrial Systems
              </Heading>
              <Text weight="semibold">
                ENIE (Entreprise Nationale des Industries Électroniques)
              </Text>
              <Text color="secondary">Sidi Bel Abbes, Algeria</Text>
            </VStack>
            <Text type="supporting">March 2026 – April 2026</Text>
          </HStack>

          <List listStyle="disc" density="compact">
            {experienceBullets.map((item) => (
              <ListItem key={item} label={<Text type="supporting">{item}</Text>} />
            ))}
          </List>
        </VStack>
      </VStack>
    </Section>
  );
}
