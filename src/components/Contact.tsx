import { Mail } from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Icon } from '@astryxdesign/core/Icon';
import { Link } from '@astryxdesign/core/Link';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';
import { contacts } from '../data/portfolio';

function ContactLink({ icon, label, value, href }: (typeof contacts)[number]) {
  const isExternal = href.startsWith('http');

  return (
    <Link href={href} color="inherit" display="block" {...(isExternal ? { isExternalLink: true } : {})}>
      <HStack as="span" gap={3} align="center" wrap="wrap" paddingBlock={1}>
        <Icon icon={icon} size="md" />
        <Text type="label" weight="bold">
          {label}
        </Text>
        <Text weight="medium" wordBreak="break-word">
          {value}
        </Text>
      </HStack>
    </Link>
  );
}

export default function Contact() {
  const email = contacts.find((contact) => contact.label === 'Email');

  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-anchor"
      paddingBlock={8}
      paddingInline={4}
      dividers={['top']}
    >
      <Card variant="green" padding={8}>
        <Grid columns={{ minWidth: 320, max: 2 }} columnGap={8} rowGap={4} align="start">
          <VStack gap={4}>
            <Heading id="contact-heading" level={2} type="display-3" textWrap="balance">
              Let's build something useful.
            </Heading>
            <Text>
              I'm actively seeking{' '}
              <Text weight="bold" display="inline">
                AI/ML Engineering internships
              </Text>{' '}
              and{' '}
              <Text weight="bold" display="inline">
                junior AI/ML Engineer roles
              </Text>{' '}
              for 2026–2027. If you're working on NLP, Computer Vision, or applied LLM systems, I'd
              love to hear from you.
            </Text>

            {email && (
              <Button
                label="Email me"
                variant="primary"
                size="lg"
                href={email.href}
                icon={<Icon icon={Mail} />}
              />
            )}
          </VStack>

          <VStack gap={3}>
            {contacts.map((contact) => (
              <ContactLink key={contact.label} {...contact} />
            ))}
          </VStack>

          <Text>
            <Text weight="bold" display="inline">
              Open to:
            </Text>{' '}
            Internships, junior roles, freelance ML projects, open-source collaborations, research
            assistant positions.
          </Text>
        </Grid>
      </Card>
    </Section>
  );
}
