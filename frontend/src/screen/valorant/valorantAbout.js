import React from "react";
import { Link } from "react-router-dom";

export default function valorantAbout() {
  return (
    <div>
      <div className="row"></div>

      <div className="row row-content val-border mt-50">
        <img className="big" src="./images/valor.png" alt="Valorant logo" />
      </div>
      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu val-border">
            <li>
              <Link className="link" to="/valorant">
                ZPĚT
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
            <h2>PRŮBĚH HRY</h2>
            <p>
              {" "}
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
              vyhraje 13 kol, vyhrává zápas. Hráči hrají za tzv. agenty,
              postavy, které pochází z různých zemí a kultur po celém světě. V
              hlavním herním módu jsou týmy tvořeny po pěti hráčích, přičemž
              jeden z týmů brání a druhý útočí. Agenti mají speciální schopnosti
              a prostřednictvím peněžního systému si mohou nakupovat další
              schopnosti a zbraně. Ve hře se nachází například sekundární zbraně
              (pistole nebo nože), samopaly, brokovnice, kulomety, útočné pušky
              a odstřelovací pušky. Zbraně mají zpětný ráz a hráč je tak musí
              umět ovládat, aby mohl přesně střílet. Útočící tým disponuje
              bombou, nazývanou Spike, kterou musí nastražit na předem dané
              místo. Pokud útočící tým úspěšně uchrání bombu a bomba detonuje,
              dostanou bod. Pokud bránící tým úspěšně zneškodní bombu, jejíž
              časovač je nastaven na 100 sekund, získá bod. Pokud hráči
              útočícího týmu eliminují všechny hráče z bránícího týmu, získávají
              bod. Po dvanácti kolech se týmy prohazují, útočící na bránící a
              naopak. Tým, který jako první vyhraje 13 kol, vyhrává zápas.
            </p>
            <p>
              {" "}
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
              vyhraje 13 kol, vyhrává zápas.
            </p>
          </div>
          <div className="col">
            <p>text</p>
          </div>
        </div>
      </div>
    </div>
  );
}
