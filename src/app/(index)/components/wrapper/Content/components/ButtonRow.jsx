import React from "react";
import { phoneSvg } from "./../../../../../base/SVG";

export default function ButtonRow({ type, phone, buttonText, buttonColor }) {
  return (
    <>
      {type === "type1" && (
        <div className="button__row">
          <a    href={`tel:${phone}`} className="button secondary phone blue">
            {phoneSvg}
            {phone}
          </a>
          <button
            type="button"
            className={`button primary bg-[#${buttonColor}] big`}
          >
            {buttonText}
          </button>
        </div>
      )}
      {type === "type2" && (
        <div className="button__row">
          <a href="#" className="button link">
            Meer over Beton cire
          </a>
          <button type="button" className={`button primary bg-[#${buttonColor}]`}>
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
}
