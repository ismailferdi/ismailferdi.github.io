import { Github } from 'lucide-react';
import { HStack } from '@astryxdesign/core/HStack';
import { Icon } from '@astryxdesign/core/Icon';
import { Layout } from '@astryxdesign/core/Layout';
import { TopNav, TopNavHeading, TopNavItem } from '@astryxdesign/core/TopNav';

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const GITHUB_URL = 'https://github.com/ismailferdi';

export default function SiteNav() {
  return (
    <Layout height="auto" contentWidth={1320} padding={0}>
      <TopNav
        label="Primary"
        heading={<TopNavHeading heading="Ismail Ferdi" headingHref="#hero" />}
        startContent={
          <HStack gap={1}>
            {NAV_LINKS.map((link) => (
              <TopNavItem key={link.href} label={link.label} href={link.href} />
            ))}
            <TopNavItem label="GitHub" href={GITHUB_URL} icon={<Icon icon={Github} />} />
          </HStack>
        }
      />
    </Layout>
  );
}
