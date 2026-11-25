import { Github, Sparkles } from 'lucide-react';
import { Badge } from '@astryxdesign/core/Badge';
import { Divider } from '@astryxdesign/core/Divider';
import { Grid } from '@astryxdesign/core/Grid';
import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Icon } from '@astryxdesign/core/Icon';
import { Link } from '@astryxdesign/core/Link';
import { List, ListItem } from '@astryxdesign/core/List';
import { Text } from '@astryxdesign/core/Text';
import { Token } from '@astryxdesign/core/Token';
import { VStack } from '@astryxdesign/core/VStack';
import { useMediaQuery } from '@astryxdesign/core';
import type { Project } from '../data/portfolio';

const ChurnOpsFlow = () => (
  <svg viewBox="0 0 480 36" aria-hidden="true" className="flow-diagram" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" className="flow-node" />
    <text x="36" y="22" textAnchor="middle" className="flow-label">User</text>
    <path d="M72 18h10" className="flow-edge" />
    <polygon points="84,18 78,14 78,22" className="flow-head" />
    <rect x="88" y="6" width="80" height="24" className="flow-node" />
    <text x="128" y="22" textAnchor="middle" className="flow-label">FastAPI</text>
    <path d="M172 18h10" className="flow-edge" />
    <polygon points="184,18 178,14 178,22" className="flow-head" />
    <rect x="188" y="6" width="80" height="24" className="flow-node" />
    <text x="228" y="22" textAnchor="middle" className="flow-label">Model</text>
    <path d="M272 18h10" className="flow-edge" />
    <polygon points="284,18 278,14 278,22" className="flow-head" />
    <rect x="288" y="6" width="72" height="24" className="flow-node" />
    <text x="324" y="22" textAnchor="middle" className="flow-label">SQLite</text>
    <path d="M364 18h10" className="flow-edge" />
    <polygon points="376,18 370,14 370,22" className="flow-head" />
    <rect x="380" y="6" width="88" height="24" className="flow-node" />
    <text x="424" y="22" textAnchor="middle" className="flow-label">Monitor</text>
  </svg>
);

const RAGFlow = () => (
  <svg viewBox="0 0 480 36" aria-hidden="true" className="flow-diagram" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" className="flow-node" />
    <text x="36" y="22" textAnchor="middle" className="flow-label">Docs</text>
    <path d="M72 18h10" className="flow-edge" />
    <polygon points="84,18 78,14 78,22" className="flow-head" />
    <rect x="88" y="6" width="80" height="24" className="flow-node" />
    <text x="128" y="22" textAnchor="middle" className="flow-label">Chunk</text>
    <path d="M172 18h10" className="flow-edge" />
    <polygon points="184,18 178,14 178,22" className="flow-head" />
    <rect x="188" y="6" width="80" height="24" className="flow-node" />
    <text x="228" y="22" textAnchor="middle" className="flow-label">Embed</text>
    <path d="M272 18h10" className="flow-edge" />
    <polygon points="284,18 278,14 278,22" className="flow-head" />
    <rect x="288" y="6" width="88" height="24" className="flow-node" />
    <text x="332" y="22" textAnchor="middle" className="flow-label">ChromaDB</text>
    <path d="M380 18h10" className="flow-edge" />
    <polygon points="392,18 386,14 386,22" className="flow-head" />
    <rect x="396" y="6" width="72" height="24" className="flow-node" />
    <text x="432" y="22" textAnchor="middle" className="flow-label">LLM</text>
  </svg>
);

const ETLFlow = () => (
  <svg viewBox="0 0 480 36" aria-hidden="true" className="flow-diagram" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="100" height="24" className="flow-node" />
    <text x="54" y="22" textAnchor="middle" className="flow-label">Extract</text>
    <path d="M108 18h10" className="flow-edge" />
    <polygon points="122,18 116,14 116,22" className="flow-head" />
    <rect x="126" y="6" width="124" height="24" className="flow-node" />
    <text x="188" y="22" textAnchor="middle" className="flow-label">Transform</text>
    <path d="M254 18h10" className="flow-edge" />
    <polygon points="268,18 262,14 262,22" className="flow-head" />
    <rect x="272" y="6" width="80" height="24" className="flow-node" />
    <text x="312" y="22" textAnchor="middle" className="flow-label">Load</text>
    <path d="M356 18h10" className="flow-edge" />
    <polygon points="374,18 368,14 368,22" className="flow-head" />
    <rect x="378" y="6" width="98" height="24" className="flow-node" />
    <text x="427" y="22" textAnchor="middle" className="flow-label">Query</text>
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  const isLaptop = useMediaQuery('(min-width: 1024px)', false);
  return (
    <VStack gap={6}>
      <Divider />

      <VStack gap={3}>
        <Heading level={3} textWrap="balance">
          {project.title}
        </Heading>
        <HStack gap={3} align="center" wrap="wrap">
          <Badge label={project.badge} variant="purple" />
          <Text type="large" color="secondary">
            {project.positioning}
          </Text>
        </HStack>
      </VStack>

      {project.flow === 'churnops' && <HStack isScrollable><ChurnOpsFlow /></HStack>}
      {project.flow === 'ragnar' && <HStack isScrollable><RAGFlow /></HStack>}
      {project.flow === 'banks' && <HStack isScrollable><ETLFlow /></HStack>}

      <Grid columns={isLaptop ? 2 : 1} gap={8} align="start">
        <VStack gap={2}>
          <Text type="label" weight="bold" color="secondary">
            Problem
          </Text>
          <Text>{project.problem}</Text>
        </VStack>

        <VStack gap={2}>
          <Text type="label" weight="bold" color="secondary">
            Engineering
          </Text>
          <List listStyle="disc" density="compact">
            {project.engineering.map((item) => (
              <ListItem key={item} label={<Text type="supporting">{item}</Text>} />
            ))}
          </List>
        </VStack>
      </Grid>

      <VStack gap={2}>
        <Text type="label" weight="bold" color="secondary">
          Evidence
        </Text>
        <List hasDividers density="compact">
          {project.evidence.map((item) => (
            <ListItem
              key={item}
              startContent={<Icon icon="check" size="sm" color="success" />}
              label={<Text type="supporting" size="base">{item}</Text>}
            />
          ))}
        </List>
      </VStack>

      <HStack gap={2} wrap="wrap">
        {project.tags.map((tag) => (
          <Token key={tag} label={tag} size="md" color="purple" />
        ))}
      </HStack>

      <Text type="body" color="secondary">
        {project.summary}
      </Text>

      <Divider />

      <HStack gap={6} wrap="wrap">
        {project.links.map((link) => (
          <Link key={link.href} href={link.href} isExternalLink type="supporting">
            <HStack as="span" gap={2} align="center">
              <Icon icon={link.icon === 'github' ? Github : Sparkles} size="sm" />
              {link.label}
            </HStack>
          </Link>
        ))}
      </HStack>
    </VStack>
  );
}
