import React from "react";
import { Switch, Route } from 'react-router-dom';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import LocationsList from "./components/LocationsList"
import Episodelist from "./components/EpisodeList"
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      
      <Header />
      <TabNav />
      <div className="page-view ui bottom attached segment active tab">
        <Route path='/characters' component={CharacterList} />
        <Route path='/locations' component={LocationsList} />
        <Route path='/episodes' component={Episodelist} />
        <Route exact path='/' component={WelcomePage} />
      </div>
    </main>
    
  );
}
