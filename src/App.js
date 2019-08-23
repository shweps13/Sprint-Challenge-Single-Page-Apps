import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import Card from "./components/CharacterCard";
import CharacterList from "./components/CharacterList"

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Card />
      <CharacterList />
    </main>
    
  );
}
