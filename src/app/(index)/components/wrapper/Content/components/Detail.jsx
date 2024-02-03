import React from "react";
import ButtonRow from "./ButtonRow";

const DetailLIst = [
  {
    id: "1",
    title: "Beton cire",
    tag: "meest verkocht",
    desc1:
      "Beton ciré is een decoratieve coating die een betonlook geeft aan wanden en vloeren van uw woning of kantoor ruimte.",
    imageBig: "images/detail/1/1.jpg",
    subtitle: "Wat is betoncire",
    desc2: (
      <>
        <strong>Beton cire</strong> is een type <a href="#">betonvloer</a> met
        een unieke en natuurlijke uitstraling. Het is een dunne laag betonstuc
        die ambachtelijk wordt aangebracht op verschillende ondergronden.
      </>
    ),
    images: [
      "images/detail/1/2.jpg",
      "images/detail/1/3.jpg",
      "images/detail/1/4.jpg",
    ],
    desc3: (
      <>
        <span>Beton cire</span> is waterdicht, slijtvast, onderhoudsvriendelijk
        en leverbaar in vele unieke kleuren zoals Grijs, Taupe, Dark sand, Latte
        en meer.
      </>
    ),
    adv: ["Hecht op elke ondergrond", "Veel kleuren en afwerkingen"],
    desc4: (
      <>
        Betoncire is geschikt voor zowel binnen als buiten, en voor zowel wanden
        als vloeren. <strong>Beton cire</strong> geeft uw woning of bedrijf een
        warme en moderne sfeer en kan geheel naar uw wensen worden gemaakt.
      </>
    ),
  },
  {
    id: "2",
    title: "Gietvloer beton",
    desc1: (
      <>
        Een <strong>Gietvloer beton</strong> is een kunststof vloer met een
        betonlook. Een gietvloer met betonlook is hygienisch, warm, makkelijk en
        kleurrijk.
      </>
    ),
    imageBig: "images/detail/2/1.jpg",
    desc2: (
      <>
        Een <strong>gietvloer beton</strong> is een vloer die vloeibaar over uw
        ondergrond wordt gegoten om een <a href="#">betonlook</a> te creeeren.
        <br /> <br />U geniet bij een gietvloer beton van de look & feel van een
        betonvloer, die toch warm en zacht aanvoelt aan uw voeten.
      </>
    ),
    images: ["images/detail/2/2.jpg", "images/detail/2/3.jpg"],
    desc3: (
      <>
        Een gietvloer beton is niet hetzelfde als gietbeton, dat een massieve
        betonvloer is. Gietbeton is dikker, harder en gevoeliger voor scheuren
        dan een gietvloer beton.
      </>
    ),
    adv: ["Voelt warm aan", "Ideaal voor vloerverwarming"],
    desc4: (
      <>
        Een gietvloer beton is daarom een betere keuze voor een comfortabele en
        duurzame vloer in uw woning.
      </>
    ),
  },
];
export default function Detail({buttonText, buttonColor}) {
  return (
    <div className="detail__outer">
      {DetailLIst.map((item, index, ) => {
        return <DetailItem itemData={item} key={index} index={index} buttonText={buttonText} buttonColor={buttonColor}   />;
      })}
    </div>
  );
}
const DetailItem = ({ itemData, index, buttonColor,buttonText }) => {
  return (
    <div className="detail">
      <div className="detail__title">
        <h3>
          {index + 1}. {itemData.title}
        </h3>
        {itemData.tag && (
          <div className="detail__title-tag">{itemData.tag}</div>
        )}
      </div>
      {itemData.desc1 && <p className="extra">{itemData.desc1}</p>}

      <div className="detail__image">
        <img src={itemData.imageBig} alt="" />
      </div>
      {itemData.subtitle && <h3 className="sm">{itemData.subtitle}</h3>}
      {itemData.desc2 && <p className="extra">{itemData.desc2}</p>}

      {itemData?.images?.length > 0 && (
        <div
          className={
            "detail__items " + (itemData.images.length > 2 ? "three" : "")
          }
        >
          {itemData.images.map((item, index) => {
            return (
              <div className="detail__item" key={index}>
                <div className="detail__item-image">
                  <img src={item} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      )}
      {itemData.desc3 && <p className="extra">{itemData.desc3}</p>}
      {itemData?.adv?.length > 0 && (
        <>
          <h3 className="sm">Voordelen van beton cire</h3>
          <div className="detail__adv">
            {itemData?.adv.map((item, index) => {
              return (
                <div className="detail__adv-item" key={index}>
                  <img src="images/icons/tick.png" alt="" />
                  {item}
                </div>
              );
            })}
          </div>
        </>
      )}
      {itemData.desc4 && <p className="extra">{itemData.desc4}</p>}
      <ButtonRow
        type={"type2"}
        buttonText={buttonText}
        buttonColor={buttonColor}
      />
    </div>
  );
};
