import { Divider } from '@astryxdesign/core/Divider';
import { Grid } from '@astryxdesign/core/Grid';
import { LayoutFooter } from '@astryxdesign/core/Layout';
import { Link } from '@astryxdesign/core/Link';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';
import { footerGroups } from '../data/portfolio';

export default function Footer() {
  return (
    <LayoutFooter id="footer" role="contentinfo" hasDivider padding={4}>
      <VStack gap={6}>
        <VStack gap={2}>
          <Text type="large" weight="bold">
            Ismail Ferdi
          </Text>
          <Text type="supporting">
            AI/ML engineering: production-oriented machine learning systems.
          </Text>
        </VStack>

        <Grid columns={{ minWidth: 240, max: 4 }} gap={6} align="start">
          {footerGroups.map((group) => (
            <VStack key={group.label} gap={2} align="start">
              <Text type="label" weight="bold" color="secondary">
                {group.label}
              </Text>
              <VStack gap={0} align="start">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    color="inherit"
                    hasUnderline={false}
                    {...(link.href.startsWith('http') ? { isExternalLink: true } : {})}
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            </VStack>
          ))}
        </Grid>

        <Divider />

        <Text type="supporting">© {new Date().getFullYear()} Ismail Ferdi</Text>
      </VStack>
    </LayoutFooter>
  );
}
