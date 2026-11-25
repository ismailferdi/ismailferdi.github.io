import { Divider } from '@astryxdesign/core/Divider';
import { Grid } from '@astryxdesign/core/Grid';
import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Icon } from '@astryxdesign/core/Icon';
import { Text } from '@astryxdesign/core/Text';
import { Token } from '@astryxdesign/core/Token';
import { VStack } from '@astryxdesign/core/VStack';
import type { SkillGroupData } from '../data/portfolio';

export default function SkillGroup({ title, icon, summary, items }: SkillGroupData) {
  return (
    <VStack gap={6}>
      <Divider />
      <Grid columns={{ minWidth: 280, max: 2 }} gap={6} align="start">
        <VStack gap={3}>
          <HStack gap={3} align="center">
            <Icon icon={icon} size="md" color="accent" />
            <Heading level={3}>{title}</Heading>
          </HStack>
          <Text color="secondary">{summary}</Text>
        </VStack>

        <HStack gap={2} wrap="wrap">
          {items.map((item) => (
            <Token key={item} label={item} size="md" color="purple" />
          ))}
        </HStack>
      </Grid>
    </VStack>
  );
}
