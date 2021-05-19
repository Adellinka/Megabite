import { Route, BrowserRouter } from "react-router-dom";
import lolScreen from "./screen/lol/lolScreen";
import lolAbout from "./screen/lol/lolAbout";
import lolChamps from "./screen/lol/lolChamps";
import lolChampDetailScreen from "./screen/lol/lolChampDetailScreen";
import createLolChampScreen from "./screen/lol/createLolChampScreen";
import mainScreen from "./screen/mainScreen";
import pubgScreen from "./screen/pubg/pubgScreen";
import pubgAboutScreen from "./screen/pubg/pubgAbout";
import pubgMapsScreen from "./screen/pubg/pubgMaps";
import pubgMapDetailScreen from "./screen/pubg/pubgMapDetailScreen";
import valorantScreen from "./screen/valorant/valorantScreen";
import valorantChamps from "./screen/valorant/valorantChamps";
import valorantChampDetailScreen from "./screen/valorant/valorantChampDetailScreen";
import createValorantChampScreen from "./screen/valorant/createValorantChampScreen";
import Header from "./components/header";
import Footer from "./components/footer";
import createData from "./screen/createData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <body>
          <div className="grid-container">
            <Header className="header" />
            {/* odkazy */}
            <main>
              <Route
                path="/pubgMaps/:id"
                component={pubgMapDetailScreen}
                exact
              ></Route>
              <Route
                path="/lolChamps/:id"
                component={lolChampDetailScreen}
                exact
              ></Route>
              <Route
                path="/valorantChamps/:id"
                component={valorantChampDetailScreen}
                exact
              ></Route>
              <Route path="/lol" component={lolScreen}></Route>
              <Route path="/lolAbout" component={lolAbout}></Route>
              <Route path="/lolChamps" component={lolChamps} exact></Route>
              <Route path="/pubg" component={pubgScreen}></Route>
              <Route path="/pubgAbout" component={pubgAboutScreen}></Route>
              <Route path="/pubgMaps" component={pubgMapsScreen} exact></Route>
              <Route path="/valorant" component={valorantScreen}></Route>
              <Route
                path="/valorantChamps"
                component={valorantChamps}
                exact
              ></Route>
              <Route
                path="/createValorantChamp"
                component={createValorantChampScreen}
              ></Route>
              <Route path="/createData" component={createData} />
              <Route path="/createLolChamp" component={createLolChampScreen} />
              <Route path="/" component={mainScreen} exact></Route>
            </main>
            <Footer className="footer" />
          </div>
        </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
