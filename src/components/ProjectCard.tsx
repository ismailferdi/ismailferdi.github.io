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

type FlowNode = { label: string; x: number; y: number; width: number };

type FlowArrow =
  | { direction: 'horizontal'; from: number; to: number; y: number }
  | { direction: 'vertical'; x: number; from: number; to: number };

type FlowSpec = { viewBox: string; nodes: FlowNode[]; arrows: FlowArrow[] };

const NODE_HEIGHT = 34;
const HEAD_LENGTH = 8;
const HEAD_HALF_WIDTH = 5;

function FlowDiagram({ spec, variant }: { spec: FlowSpec; variant: 'wide' | 'narrow' | 'always' }) {
  return (
    <svg
      viewBox={spec.viewBox}
      aria-hidden="true"
      className={`flow-diagram flow-diagram--${variant}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {spec.nodes.map((node) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y={node.y}
            width={node.width}
            height={NODE_HEIGHT}
            className="flow-node"
          />
          <text
            x={node.x + node.width / 2}
            y={node.y + 23}
            textAnchor="middle"
            className="flow-label"
          >
            {node.label}
          </text>
        </g>
      ))}
      {spec.arrows.map((arrow, index) =>
        arrow.direction === 'horizontal' ? (
          <g key={`horizontal-${index}`}>
            <path
              d={`M${arrow.from} ${arrow.y}h${arrow.to - arrow.from - HEAD_LENGTH}`}
              className="flow-edge"
            />
            <polygon
              points={`${arrow.to},${arrow.y} ${arrow.to - HEAD_LENGTH},${arrow.y - HEAD_HALF_WIDTH} ${arrow.to - HEAD_LENGTH},${arrow.y + HEAD_HALF_WIDTH}`}
              className="flow-head"
            />
          </g>
        ) : (
          <g key={`vertical-${index}`}>
            <path
              d={`M${arrow.x} ${arrow.from}v${arrow.to - arrow.from - HEAD_LENGTH}`}
              className="flow-edge"
            />
            <polygon
              points={`${arrow.x},${arrow.to} ${arrow.x - HEAD_HALF_WIDTH},${arrow.to - HEAD_LENGTH} ${arrow.x + HEAD_HALF_WIDTH},${arrow.to - HEAD_LENGTH}`}
              className="flow-head"
            />
          </g>
        ),
      )}
    </svg>
  );
}

/*
 * Wide: five stages on one line from 672px up. Narrow: three stages, then the
 * remaining two directly under the last stage, so the wrap connector is a
 * single vertical arrow with no line running beneath the first row.
 */
const CHURNOPS_WIDE: FlowSpec = {
  viewBox: '0 0 624 46',
  nodes: [
    { label: 'User', x: 8, y: 6, width: 60 },
    { label: 'FastAPI', x: 120, y: 6, width: 92 },
    { label: 'Model', x: 264, y: 6, width: 78 },
    { label: 'SQLite', x: 394, y: 6, width: 78 },
    { label: 'Monitor', x: 524, y: 6, width: 92 },
  ],
  arrows: [
    { direction: 'horizontal', from: 80, to: 108, y: 23 },
    { direction: 'horizontal', from: 224, to: 252, y: 23 },
    { direction: 'horizontal', from: 354, to: 382, y: 23 },
    { direction: 'horizontal', from: 484, to: 512, y: 23 },
  ],
};

const CHURNOPS_NARROW: FlowSpec = {
  viewBox: '0 0 342 100',
  nodes: [
    { label: 'User', x: 10, y: 6, width: 58 },
    { label: 'FastAPI', x: 88, y: 6, width: 80 },
    { label: 'Model', x: 188, y: 6, width: 60 },
    { label: 'SQLite', x: 188, y: 60, width: 60 },
    { label: 'Monitor', x: 270, y: 60, width: 68 },
  ],
  arrows: [
    { direction: 'horizontal', from: 73, to: 83, y: 23 },
    { direction: 'horizontal', from: 173, to: 183, y: 23 },
    { direction: 'vertical', x: 218, from: 40, to: 55 },
    { direction: 'horizontal', from: 253, to: 265, y: 77 },
  ],
};

const RAGNAR_WIDE: FlowSpec = {
  viewBox: '0 0 624 46',
  nodes: [
    { label: 'Docs', x: 8, y: 6, width: 60 },
    { label: 'Chunk', x: 121, y: 6, width: 78 },
    { label: 'Embed', x: 252, y: 6, width: 94 },
    { label: 'ChromaDB', x: 399, y: 6, width: 112 },
    { label: 'LLM', x: 564, y: 6, width: 52 },
  ],
  arrows: [
    { direction: 'horizontal', from: 80, to: 109, y: 23 },
    { direction: 'horizontal', from: 211, to: 240, y: 23 },
    { direction: 'horizontal', from: 358, to: 387, y: 23 },
    { direction: 'horizontal', from: 523, to: 552, y: 23 },
  ],
};

const RAGNAR_NARROW: FlowSpec = {
  viewBox: '0 0 342 100',
  nodes: [
    { label: 'Docs', x: 10, y: 6, width: 58 },
    { label: 'Chunk', x: 88, y: 6, width: 72 },
    { label: 'Embed', x: 180, y: 6, width: 92 },
    { label: 'ChromaDB', x: 180, y: 60, width: 92 },
    { label: 'LLM', x: 294, y: 60, width: 44 },
  ],
  arrows: [
    { direction: 'horizontal', from: 73, to: 83, y: 23 },
    { direction: 'horizontal', from: 165, to: 175, y: 23 },
    { direction: 'vertical', x: 226, from: 40, to: 55 },
    { direction: 'horizontal', from: 277, to: 289, y: 77 },
  ],
};

const BANKS_FLOW: FlowSpec = {
  viewBox: '0 0 342 46',
  nodes: [
    { label: 'Extract', x: 8, y: 6, width: 62 },
    { label: 'Transform', x: 90, y: 6, width: 86 },
    { label: 'Load', x: 196, y: 6, width: 54 },
    { label: 'Query', x: 270, y: 6, width: 64 },
  ],
  arrows: [
    { direction: 'horizontal', from: 75, to: 85, y: 23 },
    { direction: 'horizontal', from: 181, to: 191, y: 23 },
    { direction: 'horizontal', from: 255, to: 265, y: 23 },
  ],
};

const FLOW_SPECS: Record<'churnops' | 'ragnar', { wide: FlowSpec; narrow: FlowSpec }> = {
  churnops: { wide: CHURNOPS_WIDE, narrow: CHURNOPS_NARROW },
  ragnar: { wide: RAGNAR_WIDE, narrow: RAGNAR_NARROW },
};

function FlowDiagrams({ flows }: { flows: { wide: FlowSpec; narrow: FlowSpec } }) {
  return (
    <HStack isScrollable>
      <FlowDiagram spec={flows.narrow} variant="narrow" />
      <FlowDiagram spec={flows.wide} variant="wide" />
    </HStack>
  );
}

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

      {project.flow === 'churnops' && <FlowDiagrams flows={FLOW_SPECS.churnops} />}
      {project.flow === 'ragnar' && <FlowDiagrams flows={FLOW_SPECS.ragnar} />}
      {project.flow === 'banks' && (
        <HStack isScrollable>
          <FlowDiagram spec={BANKS_FLOW} variant="always" />
        </HStack>
      )}

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
              <ListItem key={item} label={<Text type="supporting" size="base">{item}</Text>} />
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
