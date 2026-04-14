import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function About() {
  return (
    <div>
      <Header />
      <main className="about-page">
        <section className="about-section">
          <h1>About Me</h1>
          <p>This is the about page. Skills and other sections will be added.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}