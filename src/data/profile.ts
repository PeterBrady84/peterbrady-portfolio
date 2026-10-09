import type { Profile } from '../types/resume';

export const profile: Profile = {
  name: 'Peter Brady',
  title: 'Frontend Developer',
  tagline: 'I turn large, messy datasets into clear, usable interfaces.',
  summary:
    'Software developer with a First-Class Honours BSc in Computer Science and years of ' +
    'experience building dashboards and interfaces with Vue.js, JavaScript, HTML5 and CSS3, ' +
    'deployed with Docker and AWS. I deliver high-quality, maintainable code, enjoy new ' +
    'challenges, and work well in collaborative agile teams.',
  location: 'Blessington, Co. Wicklow, Ireland',
  portrait: '/images/icons/self_portrait.png',
  links: [
    { label: 'GitHub', href: 'https://github.com/PeterBrady84' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/peterbrady1984/' },
  ],
  cv: { docx: '/bin/PeterBradyCV.docx', pdf: '/bin/PeterBradyCV.pdf' },
};
