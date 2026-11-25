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
  <svg viewBox="0 0 336 96" aria-hidden="true" className="flow-diagram" xmlns="http://www.w3.org/2000/svg">
    <rect x="66" y="6" width="47" height="34" className="flow-node" />
    <text x="89.5" y="29" textAnchor="middle" className="flow-label">User</text>
    <path d="M117 23h6" className="flow-edge" />
    <polygon points="123,23 117,19 117,27" className="flow-head" />
    <rect x="127" y="6" width="68" height="34" className="flow-node" />
    <text x="161" y="29" textAnchor="middle" className="flow-label">FastAPI</text>
    <path d="M199 23h6" className="flow-edge" />
    <polygon points="205,23 199,19 199,27" className="flow-head" />
    <rect x="209" y="6" width="60" height="34" className="flow-node" />
    <text x="239" y="29" textAnchor="middle" className="flow-label">Model</text>
    <path d="M239 44H125V50" className="flow-edge" />
    <polygon points="125,50 119,44 131,44" className="flow-head" />
    <rect x="93" y="56" width="64" height="34" className="flow-node" />
    <text x="125" y="79" textAnchor="middle" className="flow-label">SQLite</text>
    <path d="M161 73h6" className="flow-edge" />
    <polygon points="167,73 161,69 161,77" className="flow-head" />
    <rect x="171" y="56" width="72" height="34" className="flow-node" />
    <text x="207" y="79" textAnchor="middle" className="flow-label">Monitor</text>
  </svg>
);

const RAGFlow = () => (
  <svg viewBox="0 0 336 96" aria-hidden="true" className="flow-diagram" xmlns="http://www.w3.org/2000/svg">
    <rect x="64" y="6" width="52" height="34" className="flow-node" />
    <text x="90" y="29" textAnchor="middle" className="flow-label">Docs</text>
    <path d="M120 23h6" className="flow-edge" />
    <polygon points="126,23 120,19 120,27" className="flow-head" />
    <rect x="130" y="6" width="62" height="34" className="flow-node" />
    <text x="161" y="29" textAnchor="middle" className="flow-label">Chunk</text>
    <path d="M196 23h6" className="flow-edge" />
    <polygon points="202,23 196,19 196,27" className="flow-head" />
    <rect x="206" y="6" width="67" height="34" className="flow-node" />
    <text x="239.5" y="29" textAnchor="middle" className="flow-label">Embed</text>
    <path d="M239.5 44H139V50" className="flow-edge" />
    <polygon points="139,50 133,44 145,44" className="flow-head" />
    <rect x="92" y="56" width="94" height="34" className="flow-node" />
    <text x="139" y="79" textAnchor="middle" className="flow-label">ChromaDB</text>
    <path d="M190 73h6" className="flow-edge" />
    <polygon points="196,73 190,69 190,77" className="flow-head" />
    <rect x="200" y="56" width="44" height="34" className="flow-node" />
    <text x="222" y="79" textAnchor="middle" className="flow-label">LLM</text>
  </svg>
);

const ETLFlow = () => (
  <svg viewBox="0 0 336 46" aria-hidden="true" className="flow-diagram" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="6" width="67" height="34" className="flow-node" />
    <text x="48.5" y="29" textAnchor="middle" className="flow-label">Extract</text>
    <path d="M86 23h6" className="flow-edge" />
    <polygon points="92,23 86,19 86,27" className="flow-head" />
    <rect x="96" y="6" width="88" height="34" className="flow-node" />
    <text x="140" y="29" textAnchor="middle" className="flow-label">Transform</text>
    <path d="M188 23h6" className="flow-edge" />
    <polygon points="194,23 188,19 188,27" className="flow-head" />
    <rect x="198" y="6" width="51" height="34" className="flow-node" />
    <text x="223.5" y="29" textAnchor="middle" className="flow-label">Load</text>
    <path d="M253 23h6" className="flow-edge" />
    <polygon points="259,23 253,19 253,27" className="flow-head" />
    <rect x="263" y="6" width="59" height="34" className="flow-node" />
    <text x="292.5" y="29" textAnchor="middle" className="flow-label">Query</text>
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  const isLaptop = useMediaQuery('(min-width: 1024px)', false);
  return (
    <VStack gap={6}>
      <Divider />

      <VStack gap={3}>
        <Heading
          level={3}
          textWrap="balance"
          id={project.flow === 'banks' ? 'banks-etl' : project.flow}
        >
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
