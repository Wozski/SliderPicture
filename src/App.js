import "./App.css";
import { Component, useState } from "react";
import { PictureComponents } from "./utils";
import { ImageSlider } from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <div className="App">
      <ImageSlider Sliders={SliderData} />
    </div>
  );
}

export default App;
