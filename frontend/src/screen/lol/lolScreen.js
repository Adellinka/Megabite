import React from "react";
import { Link } from "react-router-dom";

export default function lolScreen() {
  return (
    <div>
      <div id="lol-parallax" className="parallax"></div>

      <div className="row row-content lol-border">
        <img className="big" src="../../images/logolol.png" alt="logolol" />
      </div>

      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu lol-border">
            <li>
              <Link className="link" to="/lolAbout">
                O HŘE
              </Link>
            </li>
            <li>
              <Link className="link" to="/lolChamps">
                ŠAMPIONI
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidemenu-border lol-border grid-item">
          <div className="col">
            <div>
              <h2>O HŘE</h2>
              <p>
                League of Legends (zkráceně LoL) je počítačová hra žánru
                multiplayer online battle arena (MOBA). Vývojářem i hlavním
                distributorem je společnost Riot Games. Hra byla inspirována
                módem Defense of the Ancients (DotA) hry Warcraft 3 společnosti
                Blizzard Entertainment. Byla oznámena dne 7. října 2008 a
                spuštěna 27. října 2009. Pro snížení latence je světová herní
                populace rozdělena geograficky do asi tuctu regionů, přičemž
                hráči z daného regionu jsou připojováni na příslušné servery.
                Většinu těchto serverů spravuje přímo Riot Games, jen čínský
                provozuje Tencent (od roku 2015 vlastník Riot Games) a několik v
                Jihovýchodní Asii Garena. Česko spadá pod server EU Nordic And
                East, na něm je pak hra kompletně přeložena a předabována do
                češtiny. Pro přehlednost jsou však zde uvedeny české i anglické
                termíny, neboť herní slang oba jazyky kombinuje.
              </p>
            </div>
            <div>
              <h2>ESPORT</h2>
              <p>
                O League of Legends můžeme s klidem říct, že ve světovém esportu
                zaujímá obrovskou část a je takovou dá se říct "královnou
                esportu". Turnaje, a obzvlášť ty světové, jsou díky Riot Games
                na nejvyšší úrovni jakou esport kdy viděl a rok od roku se
                zlepšují. Světový šampionát se koná v listopadu každého roku,
                pokaždé v jiné zemi. Například minulý rok, tedy v roce 2019 se
                tento šampionát konal v Paříži. Aréna s kapacitou 20 300 míst,
                ve které se turnaj konal, se vyprodala během 10 sekund v online
                předprodeji. Online tento turnaj sledovalo přes 44 milionů
                diváků. Vítězný tým si kromě titulu mistra světa odnesl také
                krásných 2,2 milionů dolarů. V roce 2013 se mistrovství světa
                League of Legends sezóny 3 konalo ve vyprodaném Staples Center.
                Mistrovství světa League of Legends 2014 v jihokorejském Soulu
                mělo více než 40 000 fanoušků a kromě soutěže se představila
                skupina Imagine Dragons a zahajovací a závěrečný ceremoniál.
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <ul>
                <li>
                  <img className="medium" src="./images/mapa.jpg" alt="mapa" />
                </li>
                <li>
                  <i>Mapa Summoner's Rift - pohled shora</i>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
