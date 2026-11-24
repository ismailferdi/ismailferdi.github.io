import { Divider } from '@astryxdesign/core/Divider';
import { Grid } from '@astryxdesign/core/Grid';
import { LayoutFooter } from '@astryxdesign/core/Layout';
import { List, ListItem } from '@astryxdesign/core/List';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';
import { footerGroups } from '../data/portfolio';

export default function Footer() {
  return (
    <LayoutFooter id="footer" hasDivider padding={6} role="contentinfo">
      <VStack gap={8}>
        <VStack gap={2}>
          <Text type="large" weight="bold">
            Ismail Ferdi
          </Text>
          <Text type="supporting">
            AI/ML engineering — production-oriented machine learning systems.
          </Text>
        </VStack>

        <VStack as="nav" aria-label="Footer" gap={6}>
          <Grid columns={{ minWidth: 140, max: 4 }} gap={6} align="start">
            {footerGroups.map((group) => (
              <VStack key={group.label} gap={2}>
                <Text type="label" weight="bold" color="secondary">
                  {group.label}
                </Text>
                <List density="compact" edge="flush">
                  {group.links.map((link) => (
                    <ListItem
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      {...(link.href.startsWith('http') ? { target: '_blank' } : {})}
                    />
                  ))}
                </List>
              </VStack>
            ))}
          </Grid>
        </VStack>

        <Divider />

        <Text type="supporting">© {new Date().getFullYear()} Ismail Ferdi</Text>
      </VStack>
    </LayoutFooter>
  );
}
