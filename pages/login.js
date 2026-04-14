import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function Login() {
  return (
    <div>
      <Header />
      <main className="login-page">
        <h1>Login</h1>
        <p>Authentication system.</p>
      </main>
      <Footer />
    </div>
  );
}