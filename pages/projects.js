import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function Projects() {
  return (
    <div>
      <Header />
      <main className="projects-page">
        <section className="projects-section">
          <h1>My Projects</h1>
          <p>Web Design, Coding, and Graphic Design projects will be displayed here.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}