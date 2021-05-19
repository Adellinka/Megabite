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
            <h2>O HŘE</h2>
            <p>
              League of Legends (zkráceně LoL) je počítačová hra žánru
              multiplayer online battle arena (MOBA). Vývojářem i hlavním
              distributorem je společnost Riot Games. Hra byla inspirována módem
              Defense of the Ancients (DotA) hry Warcraft 3 společnosti Blizzard
              Entertainment. League of Legends byla vyhlášena 7. října 2008 pro
              Microsoft Windows. Uzavřené beta testování začalo v dubnu 2009. Po
              spuštění beta verze bylo k dispozici 17 šampionů. Riot původně
              zamýšlel dodávat hru s 20 šampiony, ale zdvojnásobil počet před
              úplným vydáním hry v Severní Americe 27. října 2009. Ačkoli bylo
              celé jméno hry oznámeno jako League of Legends: Clash of Fates,
              podnázev byl před spuštěním zrušen.
            </p>
            <p>
              Pro snížení latence je světová herní populace rozdělena
              geograficky do asi tuctu regionů, přičemž hráči z daného regionu
              jsou připojováni na příslušné servery. Většinu těchto serverů
              spravuje přímo Riot Games, jen čínský provozuje Tencent (od roku
              2015 vlastník Riot Games) a několik v Jihovýchodní Asii Garena.
              Česko spadá pod server EU Nordic And East, na něm je pak hra
              kompletně přeložena a předabována do češtiny. Pro přehlednost jsou
              však zde uvedeny české i anglické termíny, neboť herní slang oba
              jazyky kombinuje.
            </p>

            <h2>ESPORT</h2>
            <p>
              O League of Legends můžeme s klidem říct, že ve světovém esportu
              zaujímá obrovskou část a je takovou dá se říct "královnou
              esportu". Online sledovanost a osobní účast na turnajích překonala
              události jako <i>National Basketball Association</i>,{" "}
              <i>Baseball World Series</i> a <i>Stanley Cup</i> v roce 2016.
              Turnaje, a obzvlášť ty světové, jsou díky Riot Games na nejvyšší
              úrovni jakou esport kdy viděl a rok od roku se zlepšují.
              Momentálně provozuje Riot Games 12 regionálních lig na mezinárodní
              úrovni, z nichž čtyři - Čína, Evropa, Korea a Severní Amerika -
              mají franšízované systémy. V roce 2017 tento systém zahrnoval 109
              týmů a 545 hráčů. Ligové hry jsou obvykle živě vysílány na
              platformách, jako jsou Twitch a YouTube. Play-off severoamerické
              ligy je vysíláno na kabelové televizi na sportovním kanále ESPN. V
              Číně byla práva na streamování mezinárodních akcí, jako jsou
              mistrovství světa a Mid-Season Invitational, prodána Bilibili na
              podzim 2020 za tříletou dohodu údajně v hodnotě 113 milionů USD,
              zatímco exkluzivní streamovací práva pro domácí a další regionální
              ligy jsou vlastnictvím Huya Live. Nejlépe placeným profesionálním
              hráčům této hry přikázali platy přes 1 milion dolarů - více než
              trojnásobek nejlépe placených hráčů Overwatche. Scéna přilákala
              investice od podnikatelů, kteří nebyli spojeni s esporty, jako je
              basketbalový hráč v důchodu Rick Fox, který založil svůj tým Echo
              Fox. V roce 2020 byl slot jeho týmu v severoamerické lize prodán
              organizaci Evil Geniuses za 33 milionů dolarů.
              <p>
                Světový šampionát se koná v listopadu každého roku, pokaždé v
                jiné zemi. V roce 2019 se tento šampionát konal v Paříži. Aréna
                s kapacitou 20 300 míst, ve které se turnaj konal, se vyprodala
                během 10 sekund v online předprodeji. Online tento turnaj
                sledovalo přes 44 milionů diváků. Vítězný tým si kromě titulu
                mistra světa odnesl také krásných 2,2 milionů dolarů. V roce
                2013 se mistrovství světa League of Legends sezóny 3 konalo ve
                vyprodaném Staples Center. Mistrovství světa League of Legends
                2014 v jihokorejském Soulu mělo více než 40 000 fanoušků a kromě
                soutěže se představila skupina Imagine Dragons a zahajovací a
                závěrečný ceremoniál.
              </p>
            </p>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
