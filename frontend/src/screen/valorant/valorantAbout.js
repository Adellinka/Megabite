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
              vyhraje 13 kol, vyhrává zápas.
            </p>
            <ul>
              <li>
                <img
                  className="medium"
                  src="./images/valgame.png"
                  alt="in game valorant"
                />
              </li>
              <li>
                <i>Obchod se zbraněmi a schopnostmi</i>
              </li>
            </ul>
            <h2>HERNÍ MÓDY</h2>
            <h4>NEHODNOCENÝ ZÁPAS</h4>
            <p>
              Ve standardním nehodnoceném režimu se zápas hraje na 25 kol -
              první tým, který vyhraje 13 kol, vyhrává zápas. Útočící tým má
              bombu zvanou "Spike". Tento tým musí bombu doručit a aktivovat na
              jednom z několika určených míst (stanoviště A, stanoviště B,
              popřípadě stanoviště C). Po aktivaci bomby má útočící tým za úkol
              bombu hlídat před nepřátelským bránícím týmem, aby bombu
              nedeaktivovali. Pokud útočící tým úspěšně chrání aktivovanou bombu
              po dobu 45 sekund, bomba vybuchne a zničí vše v určité oblasti.
              Všichni hráči tedy musí před vybuchnutím opustit blízkost bomby,
              aby přežili. Pokud bránící tým bombu deaktivuje nebo vyprší
              časovač 100sekundového kola, aniž by útočící tým bombu aktivoval,
              obránce získá bod. Pokud jsou všichni členové útočícího týmu
              vyřazeni před aktivací bomby, nebo pokud jsou všichni členové
              bránícího týmu vyřazeni po aktivaci bomby, získává soupeřící tým
              bod. Pokud oba týmy vyhrají 12 kol, dojde k náhlé smrti, ve které
              vítězný tým daného kola vyhraje zápas, který se liší od
              prodloužení u kompetitivních zápasů. Pokud si navíc tým přeje po 4
              kolech tento zápas vzdát, může hlasovat o kapitulaci. Tým dostane
              jen dvě šance na kapitulaci: jednu jako útočníci a druhou jako
              obránce.
            </p>

            <h4>HODNOCENÝ ZÁPAS</h4>
            <p>
              Hodnocené zápasy jsou stejné jako nehodnocené zápasy s přidáním
              systému hodnocení založeného na výhrách, který každému hráči po
              odehrání 5 her přidělí divizi. Než hráč může zapnout hodnocenou
              hru, musí předtím vyhrát 10 nehodnocených zápasů. V červenci 2020
              Riot zavedl podmínku „vyhrát o dva“ u soutěžních zápasů, kde místo
              toho, aby hrály jedno kolo náhlého úmrtí ve 12-12, budou týmy
              střídat hraní kol na útok a obranu v prodloužení, dokud si tým
              nevyžene vítězství zajištěním náskoku dvou zápasů. Každé kolo
              prodloužení dává hráčům stejné množství peněz na nákup zbraní a
              schopností, stejně jako přibližně polovinu jejich konečného nabití
              schopností. Po každé skupině dvou kol mohou hráči hlasovat o
              ukončení hry remízou, což vyžaduje 6 hráčů po prvním setu, 3 po
              druhém a poté pouze 1 hráč, aby souhlasili s remízou. Konkurenční
              systém hodnocení je železo (iron), bronz (bronze), stříbro
              (silver), zlato (gold), platina (platinum), diamant (diamond),
              nesmrtelný (immortal) a zářivý (radiant). Každá hodnost, kromě
              nesmrtelné a zářivé, má 3 úrovně.
            </p>

            <h4>SPIKE RUSH</h4>
            <p>
              V režimu Spike Rush se zápas hraje na 7 kol - první tým, který
              vyhraje 4 kola, vyhrává zápas. Hráči začínají kolo se všemi
              schopnostmi plně nabitými, kromě jejich ultimátní schopnosti,
              která se nabíjí dvakrát rychleji než ve standardních hrách.
              Všichni hráči útočícího týmu mají bombu, ale v každém kole může
              být aktivována pouze jedna. Zbraně jsou v každém kole náhodně
              rozděleny a každý hráč začíná se stejnou zbraní.
            </p>
          </div>
          <div className="col">
            <h4>DEATHMATCH</h4>
            <p>
              Režim Deathmatch byl představen 5. srpna 2020. 14 hráčů vstupuje
              do 9 minutového zápasu, kde hrají všichni proti všem. První osoba,
              která dosáhne 40 zabití, nebo hráč, který má nejvíce zabití, když
              vyprší čas, vyhrává zápas. Hráči se objeví s náhodným šampionem,
              přičemž všechny schopnosti jsou během zápasu deaktivovány, což
              dopřává čistou přestřelku. Po každém zabitém hráči zůstane na zemi
              zelený balíček. Hráč, který tento balíček sebere, získá maximum
              zdraví, maximální výzbroj a maximální munici. Pokud ale hráč
              používá kulomet, dostane pouze 30 nábojů navíc.
            </p>
            <h4>ESCALATION</h4>
            <p>
              Herní režim Escalation byl představen v únoru 2021 a je podobný
              konceptu „gungame“ v Counter-Strike a Call of Duty: Black Ops, i
              když je spíše týmový než všichni proti všem. Hra vybere náhodný
              výběr 12 zbraní, kterými se budou hráči pohybovat. Stejně jako u
              jiných verzí gungame musí tým získat určitý počet zabití, aby
              postoupil k další zbrani, a zbraně se postupně zhoršují, jak se
              nimi tým pohybuje. Existují dvě výherní podmínky, pokud jeden tým
              úspěšně projde všemi 12 úrovněmi nebo je-li jeden tým na vyšší
              úrovni než soupeřící tým do 10 minut. Stejně jako v Deathmatchi se
              hráči objevují jako náhodní agenti, kteří nemohou používat
              schopnosti, protože herní režim je nastaven na čisté boje se
              zbraněmi. Schopnosti, jako jsou Sovovy šokové šipky, Razin boom
              bot a raketomet, jsou schopnosti, které každý může použít jako
              zbraň. Po každém zabitém hráči zůstane na zemi zelený balíček
              stejně jako v Deathmatchi. Tento herní mód má také zapnutá
              automatická "respawnování", které obnovuje hráče na náhodných
              místech po mapě.
            </p>
            <h2>MAPY</h2>
            <h4>BREEZE</h4>
            <p>
              Breeze (anglicky vánek) - V tomto tropickém ráji si můžete
              prohlédnout památky historických zřícenin nebo přímořských
              jeskyní. Ale přineste nějaké krytí. Budete je potřebovat pro
              široce otevřené prostory a střetnutí na velké vzdálenosti.
              Sledujte své boky a bude to vánek.
            </p>
            <h4>ICEBOX</h4>
            <p>
              Vaším dalším bitevním polem je tajné naleziště království, které
              předstihla arktická oblast. Dvě stanoviště chráněné sněhem a kovem
              vyžadují určitou horizontální jemnost. Využijte výhody zipline a
              nikdy vás neuvidí přicházet.
            </p>
            <h4>BIND</h4>
            <p>
              Dvě stanoviště. Žádný střed. Doleva nebo doprava? Co to tedy bude?
              Obě strany nabízejí přímé cesty pro útočníky a dvojice
              jednosměrných teleportů usnadňuje obklíčení.
            </p>
            <h4>HAVEN</h4>
            <p>
              Pod zapomenutým klášterem se vynořuje křik rivalských agentů,
              kteří se střetávají, aby ovládli tři místa. Je zde více území,
              které je třeba hlídat, ale obránci mohou navíc využít vnitřní
              prostory k agresivním tlakům.
            </p>
            <h4>SPLIT</h4>
            <p>
              Pokud chcete jít daleko, musíte jít nahoru. Dvojice míst
              rozdělených vyvýšeným středem umožňuje rychlý pohyb pomocí dvou
              lanových stoupaček. Každé místo je postaveno s rýsující se věží,
              zásadní pro kontrolu. Nezapomeňte se dívat nad sebe, než to
              všechno vyletí do nebe.
            </p>
            <h4>ASCENT</h4>
            <p>
              Otevřené hřiště pro malé války pozicování a vyhlazování, rozděluje
              dvě stanoviště na Ascentu. Každé stanoviště může být opevněno
              nevratně zavírajícími se dveřmi ;jakmile se zavřou, budete je
              muset zničit nebo najít jinou cestu. Vzdejte se co nejméně uzemí.
            </p>
            <ul>
              <li>
                <img
                  className="medium"
                  src="./images/ascent.png"
                  alt="Mapa ascent"
                />
              </li>
              <li>
                <i>Mapa Ascent</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
