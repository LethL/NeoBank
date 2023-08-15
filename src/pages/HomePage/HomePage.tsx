import React from "react";
import Intro from "../../components/Intro/Intro";
import Features from "../../components/Features/Features";
import Exchange from "../../modules/Exchange/Exchange.module";
import Map from "../../components/Map/Map";
import News from "../../modules/News/News.module";
import Subscribe from "../../modules/Subscribe/Subscribe.module";

export default function HomePage() {
  return (
    <main>
      <Intro />
      <Features />
      <Exchange />
      <Map />
      <News />
      <Subscribe />
    </main>
  );
}
