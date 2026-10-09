import type { Experience } from '../types/resume';

export const experience: Experience[] = [
  {
    id: 'aspire',
    company: 'Aspire Technology',
    url: 'https://www.aspiretechnology.com/',
    logo: '/images/logos/aspire_logo.png',
    category: 'relevant',
    summary:
      'Professional services and software company specialising in mobile telecommunications, ' +
      'serving network operators, vendors and managed service providers worldwide.',
    roles: [
      {
        title: 'Frontend Developer',
        start: '2020-06',
        end: '2024-11',
        highlights: [
          'Built dashboards (Alarm Analytics, Health Checks, Energy Saving) that turn large REST API datasets into clear visualisations using Vue.js, Vuetify, HTML5, CSS3 and JavaScript.',
          'Worked with agile teams across Dublin, Belgrade and Lisbon to deliver releases on time.',
          'Owned the full lifecycle: requirements, implementation, testing, documentation and deployment.',
          'Deployed with Docker and AWS, using Git for version control.',
          'Trained and supported clients to ensure smooth adoption of delivered software.',
        ],
      },
      {
        title: 'Frontend Developer',
        start: '2019-02',
        end: '2019-09',
        highlights: [], // TODO: add highlights for this stint
      },
      {
        title: 'Software Engineer',
        start: '2017-08',
        end: '2019-01',
        highlights: [
          "Delivered software for Ericsson's RNC platform in an agile team against strict release deadlines.",
          'Resolved customer Trouble Reports and critical crashes using C++ development and debugging.',
          'Built expertise in UML, C++ (Eclipse), Git and Gerrit, and Linux command-line work.',
          'Coordinated with the Product Line Management team in Kista, Sweden.',
        ],
      },
    ],
  },
  {
    id: 'equisoft',
    company: 'Equisoft',
    url: 'http://www.equisoft.ie/',
    logo: '/images/logos/equisoft_logo.png',
    category: 'relevant',
    summary:
      'Provider of software systems for the bloodstock industry, serving 200+ client sites in 16+ countries.',
    roles: [
      {
        title: 'Software Developer',
        start: '2020-01',
        end: '2020-05',
        highlights: [
          'Developed features for the Horse Management System in PowerBuilder and Microsoft SQL Server.',
          'Gathered requirements with managers and teammates and delivered tested releases on schedule.',
          'Translated feature requests into reliable, scalable solutions.',
        ],
      },
    ],
  },
  {
    id: 'ericsson',
    company: 'LMI Ericsson',
    url: 'http://www.ericsson.com',
    logo: '/images/logos/ericsson_logo.png',
    category: 'relevant',
    summary:
      'Multinational networking and telecommunications company headquartered in Stockholm, with an Irish campus in Athlone.',
    roles: [
      {
        title: 'Software Engineer Intern',
        start: '2016-02',
        end: '2016-08',
        highlights: [
          'Developed the BOAT tool (Java, Swing, SQL) to help customer support teams track and manage requests.',
          'Owned the whole lifecycle: requirements, coding, testing, documentation and delivery.',
          'Delivered complex features to demanding deadlines.',
        ],
      },
    ],
  },
  {
    id: 'murphys',
    company: "Murphy's Bar & Lounge",
    url: 'http://www.murphysbar.ie',
    logo: '/images/logos/murphys_logo.png',
    category: 'other',
    summary:
      "Family-run pub on Blessington's Main Street, with the adjoining Wonka's Sweet Shop.",
    roles: [
      {
        title: 'Part-Time Shop Attendant / Kitchen Porter',
        start: '2013-11',
        end: '2017-07',
        highlights: [
          'Kept kitchen operations running smoothly through busy periods.',
          'Handled the till and customer service in the sweet shop.',
        ],
      },
    ],
  },
  {
    id: 'odav',
    company: "O'Doherty's Audio & Video Productions",
    url: 'http://www.odav.tv',
    logo: '/images/logos/odav_logo.png',
    category: 'other',
    summary:
      'Family-owned outside broadcast company producing Irish horse racing coverage and major live events.',
    roles: [
      {
        title: 'VT Manager',
        start: '2007-07',
        end: '2013-08',
        highlights: [
          'Led the VT department; promoted to Head of VT in 2008.',
          'Designed archiving workflows for major race meetings onto broadcast formats and DVD.',
          'Diagnosed and fixed equipment faults using oscilloscopes and audio meters.',
        ],
      },
      {
        title: 'Camera Operator',
        start: '2004-12',
        end: '2007-07',
        highlights: [
          'Recorded live races across Ireland and produced final programmes from video, audio, graphics and archive material.',
        ],
      },
    ],
  },
  {
    id: 'hri',
    company: 'Horse Racing Ireland',
    url: 'http://www.hri.ie',
    logo: '/images/logos/hri_logo.png',
    category: 'other',
    summary:
      'National authority for thoroughbred racing in Ireland. The Camera Patrol provides footage for stewards.',
    roles: [
      {
        title: 'Camera Operator',
        start: '2001-02',
        end: '2005-12',
        highlights: [
          'Filmed races from assigned positions to provide evidence for stewards inquiries and appeals.',
          'Travelled across Ireland covering near-daily race meetings in all conditions.',
        ],
      },
    ],
  },
];
