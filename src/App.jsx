import Choose from "./components/Choose";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Services from "./components/Services";
import Vehicles from "./components/Vehicles";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Services />
      <Vehicles />
      <Choose />
      <Offer />
      <div>Limos</div>
    </>
  );
}

export default App;
