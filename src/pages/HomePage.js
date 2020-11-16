import React from "react";
import { Button, GetAppButton } from "../components/Button";
import Card from "../components/card";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { HiBell } from "react-icons/hi";

import Image1 from "../img/Rectangle1.png";
import Image2 from "../img/Rectangle2.png";
import Image3 from "../img/Rectangle3.png";
import CustomSlider from "../components/Slider";

let data = [
  {
    imageUrl: Image1,
    title: "Jollof Rice & Beef",
    amount: "4,670.00",
    description:
      "Same as our regular Jollof rice but Meatier. Perfect for a large party",
  },
  {
    imageUrl: Image2,
    title: "Jollof Rice & Chicken-in-Stew",
    amount: "5,670.00",
    description:
      "Same as our regular Jollof rice but Meatier. Perfect for a large party",
  },
  {
    imageUrl: Image3,
    title: "Spaghetti & Barbeque chicken",
    amount: "670.00",
    description:
      "Same as our regular Jollof rice but Meatier. Perfect for a large party",
  },
  {
    imageUrl: Image2,
    title: "Chinese Rice & Beef",
    amount: "4,670.00",
    description:
      "Same as our regular Jollof rice but Meatier. Perfect for a large party",
  },
  {
    imageUrl: Image3,
    title: "Fried Rice",
    amount: "470.00",
    description:
      "Same as our regular Jollof rice but Meatier. Perfect for a large party",
  },
];

const HomePage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div className="body">
        <CustomSlider
          caption="What’s Popular?"
          data={data}
          showCardDesc
          showSliderBtn
        />
        <CustomSlider caption="Our Categories" data={data} overlayText/>
        <div className="get-app">
          <Button Icon={HiBell} className="btn notify-btn" />
          <p className="big-text">Get our App!</p>
          <div style={{ display: "flex", flexDirection: "row", width: "20%" }}>
            <GetAppButton title="Appstore" />
            <GetAppButton title="Playstore" />
          </div>
        </div>
        <CustomSlider
          caption="Offers"
          slidesToShow={1}
          data={data}
          cardHeight={400}
          centerPadding="300px"
          text
        />
        <CustomSlider data={data} showSliderBtn />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
