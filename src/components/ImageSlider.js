import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PutPicture } from "../utils";
import { PictureContainer } from "../Styles/picture";
export const ImageSlider = ({ Sliders }) => {
  const [current, setCurrent] = useState(0);
  const length = Sliders.length;
  const nextCurrent = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevCurrent = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // Array.isArray(Checked Array is Array or not)
  if (!Array.isArray(Sliders) || Sliders.length <= 0) {
    return null;
  }
  console.log(current);
  return (
    <>
      <section className="slider">
        <AiOutlineArrowLeft className="left-arrow" onClick={prevCurrent} />
        <AiOutlineArrowRight className="right-arrow" onClick={nextCurrent} />
        <PictureContainer>
          {SliderData.map((data, length) => {
            return (
              <div
                className={length === current ? "silder active" : "silder"}
                key={length}
              >
                {length === current && (
                  <PutPicture data={data.image} key={length} />
                )}
              </div>
            );
          })}
        </PictureContainer>
      </section>
    </>
  );
};
