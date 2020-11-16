import React from "react";
import { HiMenuAlt1, HiBell } from "react-icons/hi";
import { Button } from "./Button";
import { Select } from "./Form";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

let options = [{ label: "Select Closest BlackBells to you", value: "" }];

const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="nav-text-container">
          <HiMenuAlt1 className="nav-text" />
          <HiBell className="nav-text" />
          <p className="nav-text">Blackpeppereats</p>
        </div>
        <div style={{ width: 100 }}>
          <Button title="Sign in" />
        </div>
      </div>
      <div className="get-food">
        <p className="big-text">What are you eating Today?</p>
        <div className="input-container">
          <Select
            Icon={FaMapMarkerAlt}
            className="w-70"
            label="Sign up for extra features"
            options={options}
          />
          <Select Icon={AiFillClockCircle} className="w-25" />
          <div style={{ width: 100 }}>
            <Button title="Get Food" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
