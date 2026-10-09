import type { Education } from '../types/resume';

export const education: Education = {
  institution: 'IT Tallaght',
  url: 'https://www.tudublin.ie/',
  logo: '/images/logos/it_tallaght_logo.png',
  qualification: 'BSc (Hons) in Computer Science with Software Development',
  start: 2013,
  end: 2017,
  result: 'First-Class Honours (1.1)',
  gpaByYear: [
    { year: 1, gpa: 3.54 },
    { year: 2, gpa: 3.79 },
    { year: 3, gpa: 3.18 },
    { year: 4, gpa: 3.33 },
  ],
};
