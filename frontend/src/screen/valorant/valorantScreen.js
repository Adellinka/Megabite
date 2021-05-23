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
            <object
              className="video"
              data="https://www.youtube.com/embed/OgNEnFJNiGE"
            ></object>
            <p>
              Valorant je taktická online střílečka od studia Riot Games, tvůrců
              letitého trháku League of Legends. Výzkum a vývoj hry započal v
              roce 2014. Přestože hra byla spuštěna teprve v dubnu 2020, už nyní
              má našlápnuto na to, stát se jednou z nejoblíbenějších
              kompetitivních her.{" "}
            </p>
          </div>
          <div className="col">
            <h2>PRŮBĚH HRY</h2>
            <p>
              Hráči hrají za tzv. agenty, postavy, které pochází z různých zemí
              a kultur po celém světě. V hlavním herním módu jsou týmy tvořeny
              po pěti hráčích, přičemž jeden z týmů brání a druhý útočí. Agenti
              mají speciální schopnosti a prostřednictvím peněžního systému si
              mohou nakupovat další schopnosti a zbraně. Ve hře se nachází
              například sekundární zbraně (pistole nebo nože), samopaly,
              brokovnice, kulomety, útočné pušky a odstřelovací pušky. Zbraně
              mají zpětný ráz a hráč je tak musí umět ovládat, aby mohl přesně
              střílet. Útočící tým disponuje bombou, nazývanou Spike, kterou
              musí nastražit na předem dané místo. Pokud útočící tým úspěšně
              uchrání bombu a bomba detonuje, dostanou bod. Pokud bránící tým
              úspěšně zneškodní bombu, jejíž časovač je nastaven na 100 sekund,
              získá bod. Pokud hráči útočícího týmu eliminují všechny hráče z
              bránícího týmu, získávají bod. Po dvanácti kolech se týmy
              prohazují, útočící na bránící a naopak. Tým, který jako první
              vyhraje 13 kol, vyhrává zápas.{" "}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
