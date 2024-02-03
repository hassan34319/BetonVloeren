"use client";
import Footer from "../base/Footer";
import Header from "../base/Header";

import { useEffect, useState } from "react";
import Offer from "./Offer";

export default function Index() {
  return (
    <>
      <Header type="second" btn="phone" link={"Offer"} />
      <main className="pt">
        <Offer />
      </main>
      <Footer />
    </>
  );
}
