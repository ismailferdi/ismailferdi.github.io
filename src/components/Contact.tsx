import { Mail } from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Divider } from '@astryxdesign/core/Divider';
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
      <HStack as="span" gap={3} align="center" paddingBlock={1.5}>
        <Icon icon={icon} size="md" />
        <VStack as="span" gap={0} style={{ minWidth: 0 }}>
          <Text type="label" weight="bold">
            {label}
          </Text>
          <Text weight="medium" wordBreak="break-word">
            {value}
          </Text>
        </VStack>
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
    >
      <Card variant="green" padding={0}>
        <Grid columns={{ minWidth: 384, max: 2 }} gap={6} align="start">
          <VStack gap={4} maxWidth={560}>
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

          <Grid columns={{ minWidth: 240, max: 2 }} gap={4} align="start">
            {contacts.map((contact) => (
              <ContactLink key={contact.label} {...contact} />
            ))}
          </Grid>
        </Grid>

        <Divider />

        <Text>
          <Text weight="bold" display="inline">
            Open to:
          </Text>{' '}
          Internships, junior roles, freelance ML projects, open-source collaborations, research
          assistant positions.
        </Text>
      </Card>
    </Section>
  );
}
