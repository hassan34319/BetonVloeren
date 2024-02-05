"use client";
import React, { useState } from "react";
import FormModal from "../../../../../components/form/FormModal";
import { phoneSvg } from "./../../../../../base/SVG";

export default function ButtonRow({
  type,
  phone,
  buttonText,
  buttonColor,
  link,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <FormModal open={open} setOpen={setOpen} />
      </div>
      {type === "type1" && (
        <div className="button__row">
          <a href={`tel:${phone}`} className="button secondary phone blue">
            {phoneSvg}
            {phone}
          </a>
          <button
            onClick={() => setOpen(true)}
            type="button"
            className={`button primary bg-[#${buttonColor}] big`}
          >
            {buttonText}
          </button>
        </div>
      )}
      {type === "type2" && (
        <div className="button__row">
          <a href={link} className="button link">
            Meer over Beton cire
          </a>
          <button
            onClick={() => setOpen(true)}
            type="button"
            className={`button primary bg-[#${buttonColor}]`}
          >
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
}
