import Layout from './components/Layout';
import Section from './components/Section';

export default function App() {
  return (
    <Layout>
      <main>
        <Section id="about" eyebrow="About" title="Layout test">
          <p className="text-muted">Placeholder content.</p>
        </Section>
      </main>
    </Layout>
  );
}
