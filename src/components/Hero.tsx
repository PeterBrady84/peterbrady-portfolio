import { motion, MotionConfig } from 'framer-motion';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/profile';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Hero() {
  const links = profile.links;

  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="relative flex min-h-screen items-center pt-24 pb-16">
        <motion.div
          className="container-page grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div>
            <motion.p
              variants={fade}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to new opportunities
            </motion.p>

            <motion.h1
              variants={fade}
              className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            >
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-accent to-sky-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            <motion.p variants={fade} className="font-display mt-4 text-xl sm:text-2xl">
              {profile.title}
            </motion.p>

            <motion.p variants={fade} className="mt-4 max-w-xl text-lg text-muted">
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fade}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.cv.pdf}
                download
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent-strong"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.ul variants={fade} className="mt-8 flex gap-6 text-sm text-muted">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 transition hover:text-accent hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={fade} className="relative mx-auto w-64 sm:w-80">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-accent/30 to-sky-400/20 blur-2xl"
            />
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              className="relative aspect-square w-full rounded-[2rem] border border-border object-cover"
            />
          </motion.div>
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-accent sm:block"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>
    </MotionConfig>
  );
}
