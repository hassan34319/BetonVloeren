"use client";
import Footer from "../base/Footer";
import Header from "../base/Header";

import Photo from "./Photo";

export default function Index() {
  return (
    <>
      <Header type="second" link={"Photo"} />
      <main className="pt">
        <Photo />
      </main>
      <Footer />
    </>
  );
}
