"use client";
import Side from "./Side/Side";
import Content from "./Content/Content";
import Content2 from "./Content/Content2";
import SideContent from "./Side/SideContent";

export default function Wrapper({
  setColorData,
  setColorModal,
  introText,
  buttonColor,
  buttonText,
  phone,
  buttons,
  boxText,
  sideImage,
  categoryHeading,
  categoryIntro,
  shortVariantsIntro,
  variantsIntroHeading,
  domain,
  advantagesBlocks,
  advantagesHeading,
  advantagesIntroText
}) {
  return (
    <>
      <section className="wrap">
        <div className="auto__container">
          <div className="wrap__inner">
            <Content introText={introText} buttons={buttons} />
            <Side />
          </div>
        </div>
      </section>
      <section className="wrapper" id="wrapper">
        <div className="wrapper__element">
          <img src="images/wrapperElement.png" alt="" />
        </div>
        <div className="auto__container">
          <div className="wrapper__inner">
            <Content2
              buttonColor={buttonColor}
              buttonText={buttonText}
              phone={phone}
              boxText={boxText}
              categoryHeading={categoryHeading}
              categoryIntro={categoryIntro}
              variantsIntroHeading={variantsIntroHeading}
              shortVariantsIntro={shortVariantsIntro}
              domain={domain}
              advantagesBlocks={advantagesBlocks}
              advantagesHeading={advantagesHeading} 
              advantagesIntroText={advantagesIntroText}
            />
            <SideContent
              setColorData={setColorData}
              setColorModal={setColorModal}
              sideImage={sideImage}
              buttonColor={buttonColor}
              buttonText={buttonText}
              phone={phone}
            />
          </div>
        </div>
      </section>
    </>
  );
}
