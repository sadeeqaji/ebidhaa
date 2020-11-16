import React from "react";

const Select = ({ options, value, onChange, className, Icon, label }) => {
  return (
    <div className={`select ${className}`}>
      {Icon && <Icon className="select-icon" />}
      {options !==
        (options === null ||
          options === [] ||
          typeof options !== "boolean") && (
        <select value={value} onChange={onChange}>
          {options?.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
          <label>{label}</label>
        </select>
      )}
    </div>
  );
};

export { Select };
