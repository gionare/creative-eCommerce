import React from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import images from "../images.json"; // Adjust the path based on the actual location of your JSON file
import Offers from "../components/Offers";
import Card from "../components/Card";
import Accordion from "../components/Accordion";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Slider images={images} />
      <Offers />
      <Card />
      <Accordion />
    </div>
  );
}
