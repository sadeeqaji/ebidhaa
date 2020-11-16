import React from "react";

const Button = ({ title, onClick, disabled, Icon, className, iconClass }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="bg-text-white" />}
      {title}
    </button>
  );
};

const AddToCardButton = ({ amount, onClick, disabled }) => {
  return (
    <button className="btn add-to-card" onClick={onClick} disabled={disabled}>
      &#8358;{amount}
      <hr width="1" size="20" style={{ marginLeft: 4, marginRight: 4 }}></hr>
      Add to Cart
    </button>
  );
};

const GetAppButton = ({ onClick, disabled, title, Icon }) => {
  return (
    <button className="btn get-app-btn" onClick={onClick} disabled={disabled}>
      <div className="circle" />
      <p>
        Get on the <br /> <span>{title}</span>
      </p>
    </button>
  );
};

export { Button, AddToCardButton, GetAppButton };
