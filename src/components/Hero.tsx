import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Avatar } from '@astryxdesign/core/Avatar';
import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { Grid } from '@astryxdesign/core/Grid';
import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Icon } from '@astryxdesign/core/Icon';
import { Link } from '@astryxdesign/core/Link';
import { List } from '@astryxdesign/core/List';
import { ListItem } from '@astryxdesign/core/List';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';

const SUMMARY =
  "I'm Ismail Ferdi, a 4th-year AI Engineering student at Université Djillali Liabès, Algeria.";

const WHAT_I_BUILD =
  'I build production-oriented machine learning systems — MLOps pipelines with FastAPI, scikit-learn, and MLflow, containerized backends with Docker and CI/CD, RAG document systems with ChromaDB, and tested ETL data pipelines in Python.';

const HIGHLIGHTS = [
  'End-to-end MLOps: FastAPI, scikit-learn, MLflow, Docker, GitHub Actions',
  'Data drift monitoring using statistical methods (PSI, Jensen-Shannon divergence)',
  'Structured logging, automated Slack alerts, and prediction logging for production observability',
  'Clean, tested Python code with CI verification',
];

export default function Hero() {
  return (
    <Section id="hero" className="section-anchor" paddingBlockStart={8} paddingBlockEnd={10}>
      <Grid columns={{ minWidth: 320, max: 2 }} gap={8} align="center">
        <VStack gap={5}>
          <Badge label="AI / ML ENGINEERING" variant="green" />

          <Heading level={1} type="display-2" textWrap="balance">
            AI/ML Engineer building production-oriented machine learning systems.
          </Heading>

          <Text type="large">{SUMMARY}</Text>
          <Text type="body" color="secondary">
            {WHAT_I_BUILD}
          </Text>

          <HStack gap={3} wrap="wrap">
            <Button label="View Selected Work" variant="primary" href="#projects" />
            <Button
              label="GitHub"
              variant="secondary"
              icon={<Icon icon={Github} />}
              href="https://github.com/ismailferdi"
            />
          </HStack>

          <HStack gap={4} wrap="wrap">
            <Link href="mailto:ismailferdi10042004@gmail.com" type="supporting">
              <Icon icon={Mail} size="sm" /> ismailferdi10042004@gmail.com
            </Link>
            <Link href="tel:+213775853351" type="supporting">
              <Icon icon={Phone} size="sm" /> +213 775 85 33 51
            </Link>
            <Link
              href="https://linkedin.com/in/ismail-ferdi-1b3a70290"
              isExternalLink
              type="supporting"
            >
              <Icon icon={Linkedin} size="sm" /> LinkedIn
            </Link>
            <Link href="https://github.com/ismailferdi" isExternalLink type="supporting">
              <Icon icon={Github} size="sm" /> GitHub
            </Link>
          </HStack>

          <VStack gap={2}>
            <Text weight="bold">What I bring:</Text>
            <List listStyle="disc" density="compact">
              {HIGHLIGHTS.map((item) => (
                <ListItem key={item} label={<Text type="supporting">{item}</Text>} />
              ))}
            </List>
          </VStack>

          <Text type="body">
            <Text weight="bold" display="inline">
              Looking for:
            </Text>{' '}
            AI/ML Engineering internships and junior roles where I can contribute to production ML
            systems.
          </Text>
        </VStack>

        <Avatar
          src="/profile-removebg-preview.webp"
          fallbackSrc="/profile-removebg-preview.png"
          name="Ismail Ferdi"
          alt="Ismail Ferdi — AI Engineering Student"
          size={180}
          shape="circle"
          tooltip={false}
        />
      </Grid>
    </Section>
  );
}
