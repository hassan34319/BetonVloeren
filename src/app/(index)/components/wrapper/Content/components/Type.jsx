import React from "react";
import ButtonRow from "./ButtonRow";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

const typeList = [
  { id: "1", title: "Beton cire", image: "images/type/1.png" },
  { id: "1", title: "Betonlook", image: "images/type/2.png" },
  { id: "1", title: "Woonbeton", image: "images/type/3.png" },
  { id: "1", title: "Gietvloer beton", image: "images/type/4.png" },
];

export default function Type({
  categoryHeading,
  categoryIntro,
  shortVariantsIntro,
  variantsIntroHeading,
}) {
  const serializers = {
    types: {
      block: (props) => <p className="extra">{props.children}</p>,
      span: (props) => <p className="extra">{props.children}</p>,
      link: (props) => <Link href={props.mark.href}>{props.children}</Link>,
    },
  };
  return (
    <div className="content__type">
      <h2>{categoryHeading}</h2>
      <p className="extra">
        <BlockContent
          className=""
          blocks={categoryIntro}
          serializers={serializers}
        />
      </p>
      <div className="content__type-items">
        {typeList.map((item, index) => {
          return <TypeItem itemData={item} key={index} />;
        })}
      </div>
      <h3 className="sm">{variantsIntroHeading}</h3>
      <p className="extra">
        <BlockContent
          className=""
          blocks={shortVariantsIntro}
          serializers={serializers}
        />
      </p>
      <ButtonRow />
    </div>
  );
}

const TypeItem = ({ itemData }) => {
  return (
    <div className="content__type-item">
      <div className="content__type-item-image">
        <img src={itemData.image} alt="" />
        <a href="#">
          <h6>{itemData.title}</h6>
        </a>
      </div>
    </div>
  );
};
