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
      paddingBlock={8}
      paddingInline={4}
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
                description={<Text type="supporting" size="base">{issuer}</Text>}
                endContent={<Text type="supporting" size="base">{date}</Text>}
              />
            ))}
          </List>

          <Text type="supporting" size="base">{additionalCertifications}</Text>
        </VStack>
      </VStack>
    </Section>
  );
}
