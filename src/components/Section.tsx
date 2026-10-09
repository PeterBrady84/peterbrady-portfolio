import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-24">
      <div className="container-page">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
