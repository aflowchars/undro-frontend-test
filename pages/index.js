import Head from "next/head";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefit from '../components/Benefit';
import Services from '../components/services/Services';
import Footer from '../components/Footer';
import BackTop from '../components/utilities/BackTop';

// Data
import { ProgramData } from '../data/ProgramData';

export default function Home () {
  return (
    <div className="undro font-jakarta min-h-screen relative">
      <Head>
        <title>Undro | Be healthy easier & effortless</title>
        <meta name="description" content="Be healthy easier & effortless" />
        <link rel="shortcut icon" href="favicon-undro.png" type="image/x-icon" />
      </Head>

      <Navbar />
      
      <Hero />
      <Benefit />
      <Services programs={ProgramData} />

      <Footer />

      <BackTop />
    </div>
  )
}