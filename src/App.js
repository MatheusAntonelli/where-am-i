import './App.css';
import LeafletMap from './component/leaflet/LeafletMap';
import Navbar from './component/header/Navbar';
 
function App() {
  return (
    <section>
    <Navbar/>
    <LeafletMap/>
    </section>
  );
}

export default App;
