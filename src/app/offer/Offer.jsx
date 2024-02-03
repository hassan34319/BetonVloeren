import React from "react";

export default function Offer() {
  return (
    <div className="offer">
      <div className="auto__container">
        <div className="offer__inner">
          <div className="offer__image">
            <img src="images/offer.jpg" alt="" />
          </div>
          <div className="offer__form">
            <div className="offer__form-title">Vrijblijvende offerte</div>
            <div className="offer__form-subtitle">
              Direct een prijsopgave in uw inbox
            </div>
            <div className="offer__form-iframe">
              <iframe
                id="advanced_iframe"
                name="advanced_iframe"
                src="//gietvloeren-offerte.nl/quotation-generator/index.php?thank-you=//www.gietvloeren-utrecht.nl/bedankt-offerte/"
                width="100%"
                height="1550"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
