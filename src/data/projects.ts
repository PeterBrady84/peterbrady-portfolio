import type { Project } from '../types/resume';

const img = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${prefix}_${i + 1}.png`);

const project = (
  p: Omit<Project, 'cover' | 'gallery'> & { prefix: string; count: number },
): Project => {
  const { prefix, count, ...rest } = p;
  const [cover, ...gallery] = img(prefix, count);
  return { ...rest, cover, gallery };
};

// TODO: edit descriptions and tech to match each project
export const projects: Project[] = [
  project({
    id: 'three-ball-strike',
    title: '3 Ball Strike Bowling',
    year: 2015,
    description: 'Second-year college project.',
    tech: [],
    repo: { label: 'GitHub', href: 'https://github.com/PeterBrady84/3BallSplitBowling' },
    prefix: '3_ball_strike',
    count: 7,
  }),
  project({
    id: 'basic-kneads-pizza',
    title: 'Basic Kneads Pizza',
    year: 2015,
    description: 'Second-year college project.',
    tech: [],
    repo: { label: 'GitHub', href: 'https://github.com/PeterBrady84/BasicKneadsPizza' },
    prefix: 'pizza',
    count: 6,
  }),
  project({
    id: 'epic-search',
    title: 'Epic Search Engine',
    year: 2016,
    description: 'Third-year college project.',
    tech: [],
    repo: { label: 'GitHub', href: 'https://github.com/PeterBrady84/EpicSearch' },
    prefix: 'epic_search',
    count: 6,
  }),
  project({
    id: 'fuel-logger',
    title: 'Fuel Logger App',
    year: 2017,
    description: 'Fourth-year major project.',
    tech: [],
    repo: {
      label: 'Bitbucket (private)',
      href: 'https://bitbucket.org/PeterBrady1984/fuelandmaintenancetracker/src/master/',
    },
    prefix: 'fuel_logger',
    count: 11,
  }),
  project({
    id: 'resume-website-v1',
    title: 'Resume Website (v1)',
    year: 2017,
    description: 'The original Bootstrap and jQuery version of this site.',
    tech: ['Bootstrap', 'jQuery', 'HTML', 'CSS'],
    repo: { label: 'GitHub', href: 'https://github.com/PeterBrady84/ResumeWebsite' },
    prefix: 'resume',
    count: 6,
  }),
];
