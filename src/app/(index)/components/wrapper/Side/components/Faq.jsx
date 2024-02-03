import { caretDown } from "../../../../../base/SVG";
import React, { useState } from "react";

const faqList = [
  {
    id: "1",
    title: "Betonvloeren",
    description: "Wat zijn betonvloeren en waarom zijn ze populair?",
  },
  {
    id: "2",
    title: "Verschillende soorten betonvloeren",
    description: "Wat zijn betonvloeren en waarom zijn ze populair?",
  },
  {
    id: "3",
    title: "De voordelen van een betonvloer",
    description: "Wat zijn betonvloeren en waarom zijn ze populair?",
  },
  {
    id: "4",
    title: "Betonvloer storten: het proces",
    description: "Wat zijn betonvloeren en waarom zijn ze populair?",
  },
  {
    id: "5",
    title: "Betonvloer: waar moet ik op letten",
    description: "Wat zijn betonvloeren en waarom zijn ze populair?",
  },
  {
    id: "6",
    title: "De prijzen van betonvloeren",
    description: "Wat zijn betonvloeren en waarom zijn ze populair?",
  },
  {
    id: "7",
    title: "Veelgestelde vragen over betonvloer",
    description: "Wat zijn betonvloeren en waarom zijn ze populair?",
  },
];

export default function Faq() {
  const [isActive, setIsActive] = useState(null);
  return (
    <div className="faq__outer">
      <h3 className="sm">Inhoudsopgave</h3>
      {faqList.map((item, index) => {
        return (
          <FaqItem
            itemData={item}
            key={index}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </div>
  );
}
const FaqItem = ({ itemData, isActive, setIsActive }) => {
  const onClick = () => {
    if (isActive?.id === itemData.id) {
      setIsActive(null);
    } else {
      setIsActive(itemData);
    }
  };
  return (
    <div className={"faq " + (isActive?.id === itemData.id ? "active" : "")}>
      <div className="faq__title" onClick={onClick}>
        <h6>{itemData.title}</h6>
        {caretDown}
      </div>
      <div className="faq__content">
        <a href="#">{itemData.description}</a>
      </div>
    </div>
  );
};
