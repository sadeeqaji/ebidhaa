import React from "react";
import { AddToCardButton } from "./Button";

const Card = ({
  imageUrl,
  title,
  amount,
  description,
  showCardDesc,
  cardHeight,
  overlayText,
  text,
  overlayPosition = "center",
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      className={`${
        overlayText && `card-with-overlay-text center full-width`
      } `}
    >
      <div
        style={{
          width: "100%",
          height: cardHeight,
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          border: "none",
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {overlayText && (
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <p className="overlay-text center">{title}</p>
          </div>
        )}
        {text && (
          <div
            style={{
              display: "flex",
              marginTop: 100,
              marginLeft: 0,
            }}
          >
            <p className="discount-text ">
              Get 50% off a scheduled <br />
              order from Tuesday!"
            </p>
          </div>
        )}
      </div>
      {showCardDesc && (
        <div
          style={{
            marginTop: 5,
            height: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1 className="card-title">{title}</h1>
          <p className="card-desc">{description}</p>
          <AddToCardButton amount={amount} />
        </div>
      )}
    </div>
  );
};

export default Card;
