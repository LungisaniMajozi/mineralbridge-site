import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import MineralSourcing from "./pages/services/MineralSourcing";
import DueDiligence from "./pages/services/DueDiligence";
import TransactionManagement from "./pages/services/TransactionManagement";
import AdvisoryServices from "./pages/services/AdvisoryServices";
import MiningAcquisitions from "./pages/services/MiningAcquisitions";
import InvestmentAdvisory from "./pages/services/InvestmentAdvisory";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <WhatsAppButton />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/sourcing" element={<MineralSourcing />} />
            <Route path="/services/due-diligence" element={<DueDiligence />} />
            <Route
              path="/services/transactions"
              element={<TransactionManagement />}
            />
            <Route path="/services/advisory" element={<AdvisoryServices />} />
            <Route
              path="/services/acquisitions"
              element={<MiningAcquisitions />}
            />
            <Route
              path="/services/investment"
              element={<InvestmentAdvisory />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
