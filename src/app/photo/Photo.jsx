import React from "react";
const ImageList = [
  "images/photo/1.jpg",
  "images/photo/2.jpg",
  "images/photo/3.jpg",
  "images/photo/4.jpg",
  "images/photo/5.jpg",
  "images/photo/6.jpg",
  "images/photo/7.jpg",
  "images/photo/8.jpg",
  "images/photo/9.jpg",
  "images/photo/10.jpg",
  "images/photo/11.jpg",
  "images/photo/12.jpg",
  "images/photo/13.jpg",
  "images/photo/14.jpg",
  "images/photo/15.jpg",
];

export default function Photo() {
  return (
    <div className="photo">
      <div className="photo__inner">
        {ImageList.map((item, index) => {
          return (
            <div className="photo__item" key={index}>
              <div className="photo__item-image">
                <img src={item} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <button className="button primary">
        Vraag vrijblijvend een offerte aan
      </button>
    </div>
  );
}
