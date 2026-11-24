import { List, ListItem } from '@astryxdesign/core/List';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';
import SectionHeader from './SectionHeader';
import { additionalCertifications, featuredCertifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-anchor"
      paddingBlock={8}
      dividers={['top']}
    >
      <VStack gap={8}>
        <SectionHeader id="certifications-heading" title="Certifications" />

        <VStack gap={4}>
          <List hasDividers density="balanced">
            {featuredCertifications.map(({ name, issuer, date }) => (
              <ListItem
                key={name}
                label={<Text weight="semibold">{name}</Text>}
                description={<Text type="supporting">{issuer}</Text>}
                endContent={<Text type="supporting">{date}</Text>}
              />
            ))}
          </List>

          <Text type="supporting">{additionalCertifications}</Text>
        </VStack>
      </VStack>
    </Section>
  );
}
