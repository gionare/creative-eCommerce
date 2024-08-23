import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import images from "../images.json";
import Offers from "../components/Offers";
import Card from "../components/Card";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Slider images={images} />
      <Offers />
      <Card />
      <Accordion />
      <Footer />
    </div>
  );
}
