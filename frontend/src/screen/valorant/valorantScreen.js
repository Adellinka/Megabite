import React from "react";
import { Link } from "react-router-dom";

export default function valorantScreen() {
  return (
    <div>
      <div id="val-parallax" className="parallax"></div>

      <div className="row row-content val-border">
        <img className="big" src="./images/valor.png" alt="Valorant logo" />
      </div>
      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu val-border">
            <li>
              <Link className="link" to="/valorantAbout">
                O HŘE
              </Link>
            </li>
            <li>
              <Link className="link" to="/valorantChamps">
                ŠAMPIONI
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidemenu-border val-border grid-item">
          <div className="col">
            <h2>O HŘE</h2>

            <p>
              Valorant je taktická online střílečka od studia Riot Games, tvůrců
              letitého trháku League of Legends. Výzkum a vývoj hry započal v
              roce 2014. Přestože hra byla spuštěna teprve v dubnu 2020, už nyní
              má našlápnuto na to, stát se jednou z nejoblíbenějších
              kompetitivních her. Valorant je přirovnáván ke hře Counter-Strike:
              Global Offensive (zkráceně CS:GO) společnosti Valve, přičemž obě
              hry mají dva týmy po pěti hráčích, kteří se pokoušejí aktivovat
              bombu. Další hra s níž je Valorant srovnáván je klasická střílečka
              Overwatch od společnosti Blizzard Entertainment, protože obě hry
              mají více tříd a postav, s různými hernímy styly.{" "}
            </p>
            <h2>VÝVOJ</h2>
            <p>
              Joe Ziegler, ředitel hry Valorantu, má zásluhu na prvotní myšlence
              Valorantu při formulování potenciálních her s dalšími vývojáři
              Riot Games. David Nottingham je kreativním ředitelem společnosti
              Valorant. Trevor Romleski, bývalý designér League of Legends a
              Salvatore Garozzo, bývalý profesionální hráč a návrhář map pro
              CS:GO, jsou herními designéry pro Valorant. Uměleckým ředitelem je
              Moby Francke, bývalý vývojář Valve (CS:GO), který byl výtvarným a
              charakterovým designérem her Half-Life 2 a Team Fortress 2.
            </p>
            <p>
              Valorant byl vyvinut se dvěma hlavními zaměřeními: vytvoření
              taktické střílečky, která bude esportově přístupná novým hráčům a
              vytvoření hry, která by přilákala velkou konkurenční scénu, a
              zároveň vyřešila řadu kritických bodů vyjádřených profesionálními
              hráči ze žánrových her. Hry zaměřené na velké, aktivní komunity a
              základny hráčů, obvykle hry zdarma, jako je Fortnite nebo League
              of Legends, mají sklon klást důraz na širší škálu vylepšení výkonu
              systému a stability hry než na novější technologie nebo grafiku
              jako způsob, jak zajistit, aby byly co nejvíce přístupné. V
              rozhovorech před spuštěním hry herní ředitel Joe Ziegler a
              producentka Anna Donlon uvedli, že Valorant byl vytvořen pro lidi
              hrající jejich první taktickou střílečku stejně jako pro
              profesionální hráče, a že dostupnost hry byla velkou prioritou.
            </p>
            <p>
              Během vývoje společnost Riot Games slíbila, že se bude snažit
              dosáhnout odezvy méně než 35 milisekund pro alespoň 70% hráčů této
              hry. Za tímto účelem společnost Riot přislíbila servery ve většině
              hlavních měst světa nebo v jejich blízkosti, jakož i spolupráci s
              poskytovateli internetových služeb na vytvoření vyhrazeného
              připojení k těmto serverům. Kvůli nárůstu internetového provozu
              během pandemie COVID-19 měl Riot potíže s optimalizací připojení a
              odezvou na jejich slíbené úrovně.
            </p>
          </div>
          <div className="col">
            <h2>ÚSPĚCHY</h2>
            <p>
              Austen Goslin z Polygonu (Polygon je americká webová stránka,
              která zveřejňuje články, recenze, videa, novinky a tutoriály ke
              hrám) ocenil beta verzi Valorantu a popsal ji jako rafinovanou a
              „jednu z nejzábavnějších taktických stříleček, kterou jsem hrál“.
            </p>
            <p>
              V první den své beta verze se Valorant umístil na druhém místě v
              žebříčku nejsledovanějších her na světě v jeden čas a rekord drží
              dodnes. Na platformě Twitch, Valorant sledovalo 1,73 milionu
              diváků na desítkách streamů. Jediná hra, která kdy překonala toto
              číslo byl samozřejmě další titul od Riot Games, League of Legends.
              League of Legends mělo 1,74 milionu diváků na finále Mistrovství
              světa 2019. Valorant byl nominován na cenu "Best Esport Game"
              (nejlepší esportová hra), "Best Multiplayer Game" (nejlepší hra
              pro více hráčů) a "Best Community Support" (nejlepší podpora
              komunity) na události <i>The Game Awards 2020</i>.
            </p>
            <object
              className="video"
              data="https://www.youtube.com/embed/OgNEnFJNiGE"
            ></object>

            <h2>E-SPORT</h2>
            <p>
              Valorant, stejně jako mnoho jiných konkurenčních stříleček, se
              stal aktivním v rámci esportů. Společnost Riot Games se rozhodla
              vytvořit první turnaj s názvem „First Strike“, aby vytvořila
              základ pro vytvoření esportové scény s touto hrou. V listopadu
              2020 společnost Riot Games oznámila{" "}
              <i>2021 VALORANT Champions Tour</i>, což je celoroční soutěž
              skládající se ze 3 úrovní (Challengers, Masters a Champions).
              Cílem soutěže je vyhlásit vůbec prvního globálního šampiona
              Valorantu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
