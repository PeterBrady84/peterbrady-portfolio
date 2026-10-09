import Hero from './components/Hero';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { navItems } from './data/nav';

export default function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        {navItems.map(({ id, label }) => (
          <Section key={id} id={id} eyebrow="Coming soon" title={label}>
            <p className="text-muted">Placeholder content.</p>
          </Section>
        ))}
      </main>
    </Layout>
  );
}
