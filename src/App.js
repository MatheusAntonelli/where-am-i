import './App.css';
import LeafletMap from './component/leaflet/LeafletMap';
import Navbar from './component/header/Navbar';
import HeroSection from './component/mainSection/HeroSection';
 
function App() {
  return (
    <section>
    <Navbar/>
    <HeroSection/>
    <LeafletMap/>
    </section>
  );
}

export default App;
