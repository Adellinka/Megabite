import React from "react";
import { Link } from "react-router-dom";

export default function lolAbout() {
  return (
    <div>
      <div className="row"></div>

      <div className="row row-content lol-border mt-50">
        <img className="big" src="./images/pubg3.png" alt="PUBG logo" />
      </div>
      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu lol-border">
            <li>
              <Link className="link" to="/lol">
                ZPĚT
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
            <h2>PRŮBĚH HRY</h2>
            <p>
              Ve hře League of Legends vystupuje hráč jako vyvolávač, který
              ovládá v jednom zápase jediného šampiona s unikátními vlastnostmi
              a bojuje spolu se svým týmem proti nepřátelskému týmu na jedné
              mapě. Cíl hry je obvykle zničit nepřátelský Nexus, stavbu, která
              je na druhém konci mapy u základny druhého týmu. Hra též může
              skončit kapitulací jednoho z týmu, a to po 15 minutách (všichni
              musí být pro) nebo po 20 minutách (4 z 5 musí být pro). Hráči
              hrají jednotlivé zápasy – podle režimu trvají většinou 15-60
              minut. Každý zápas ve hře začínají šampioni obvykle s jednou
              schopností, které si postupem času vylepšují a zpřístupňují si
              další (celkem 4 unikátní schopnosti, s výjimkami). Hráč má na
              začátku hry Level 1 a své schopnosti má všechny plně vyvinuté až v
              pozdní fázi hry na Levelu 18. Na postup do dalšího levelu je
              potřeba sbírat XP - "Experience Points" (slangově expy) – ty se
              získávají pouhým pobytem na lince, zabíjením jednotek a šampionů
              nebo asistencí na zabití. Postupem do dalšího levelu se jednak
              zpřístupní možnost aktivovat/vylepšit schopnost, ale také postavě
              stoupnou tzv. staty – hodnoty brnění, zdraví, many atd. Snaha mít
              co nejrychleji co nejvíce levelů zajištující náskok před
              protihráči je základní mechanikou hry. Hlavní mechanikou hry jsou
              peníze neboli tzv. zlaťáky (Goldy). Goldy získává každý hrdina
              individuálně za zabíjení nepřátelských hrdinů, poskoků, věží a
              neutrálních nestvůr. Za získané goldy si hrdina může koupit určité
              předměty, které mu vylepšují jeho schopnosti. Každý hrdina může
              nakupovat pouze v bázi, ve které se po smrti vždy znovu narodí,
              nebo se tam může kdykoliv vrátit pomocí funkce "recall". Recall je
              doporučeno používat v bezpečí, protože jej lze přerušit
              nepřátelským poškozením a trvá celých 8 sekund.{" "}
            </p>
            <p>
              League of Legends je hra typu freemium – samotná hra je zdarma,
              ale za reálné peníze lze koupit například skiny k postavám nebo
              samotné postavy, nelze s nimi ale žádným způsobem ovlivnit průběh
              hry a šanci na výhru. Vyvolávač může hrát za jakéhokoliv šampiona,
              kterého má koupeného anebo za šampiony, které hra nabízí zdarma v
              tzv. bezplatné týdenní rotaci. Ve hře je celkem 155 jedinečných
              šampionů (k 1.5.2021). Každý šampion má ve hře svůj příběh,
              pochází z určitého regionu, má svoje 4 unikátní schopnosti +
              pasivní schopnost(i). Pokud šampioni hrají proti sobě ve hře a
              jsou ze stejného regionu nebo jsou v nějakém příbuzenském vztahu,
              mívají na sebe hlášky a v některých případech i posílené
              schopnosti.
            </p>

            <h2>STRATEGIE</h2>
            <p>
              Mezi základní strategie výhry patří:
              <li>
                Zachování chladné hlavy. Agresivní hráči jsou často nahlašováni
                a může jim být odepřen přístup ke hře.
              </li>
              <li>
                Mít na mapě tzv. vizi. Celá mapa je pokryta válečnou mlhou (tzv.
                Opar neznáma). Aby hráči nebyli překvapeni výpady ze tmy,
                pokládají na mapě totemy (wardy), které na určitou dobu oblast
                odhalí.
              </li>
              <li>
                Týmová spolupráce. Hry, kdy spolu hráči komunikují např. přes
                Discord nebo TeamSpeak mají jiný charakter než hry, kde se hraje
                s neznámými lidmi a domluva je jen přes chat. Ve hře nelze
                vystupovat jako jeden za jednoho ale pracovat jako tým. Některé
                schopnosti různých šampionů se navíc různě doplňují, nebo
                například pomohou doplňování zdraví (healování) a díky tomu může
                i jen pár dobře domluvených okamžiků rozhodnout o výsledku hry.
              </li>
              <li>
                Znalost všech šampionů a jejich kouzel. Výběr správných run a
                nákup správných předmětů. Ve hře je velké množství předmětů,
                které přidávají šampionovi sílu a funkčnost do hry. Některé
                například zvyšují poškození, jiné přidávají hodnotu brnění,
                zvyšují hodnotu léčení, poskytují štíty atd.
              </li>
            </p>
          </div>
          <div className="col">
            <h2>HERNÍ MÓDY</h2>

            <p>
              Pokud se hráč rozhodne hrát hru, může si zvolit z několika herních
              režimů, respektive z několika map. Kromě linií a základen je na
              nich také tzv. džungle, kde jsou nestvůry, které po zabití dávají
              buff neboli posilnění hrdiny. Momentálně máme ve hře na výběr
              pouze 2 mapy, ale několikrát do roka můžeme vidět na krátkou dobu
              i jinou mapu v rámci různých událostí.
            </p>
            <p>
              Hlavní mapou je Vyvolávačův žleb (Summoner's Rift) - mapa
              vytvořená podle DotA, má tři linie a je pro pět hráčů. V různých
              časových obdobích může mít různé designy, např. letní, zimní,
              halloweenský a vánoční. Na konci roku 2014 byla předělána do jiné
              vizáže. Průměrná délka hry je 30-45 min. Je to jediná mapa určená
              pro kompetitivní scénu. Hrají se na ní také veškeré hodnocené hry,
              ale i nehodnocené hry, tutoriál, tréninkový režim a některé z
              rotujících módů.
            </p>

            <p>
              Druhou aktivní mapou je Kvílející propast (Howling Abyss) - mapa
              určená pouze pro mód ARAM. Může být zřídka viděna na turnajích pro
              1v1 mód.
            </p>

            <p>
              Tutorial (Úvod) je rozdělen na dvě části: Klasický úvod, který je
              určen pro naprosté začátečníky a vysvětluje úplně základní herní
              mechaniky (pohyb, útoky), a Válečný trénink, kde se hráč naučí
              pravidla a ovládání hry.
            </p>

            <p>
              {" "}
              Custom game (Vlastní hra) - typ her, které zakládají sami hráči.
              Do skupiny Custom Games patří i Tournament Draft (turnajový
              draft), který se pro možnost zastavení hry používá pro turnajové
              hraní.
            </p>

            <p>
              Normal game (Normální hra) - hra, ve které hráč dostává obvyklý
              počet ME (modrá essence - lze za ni nakupovat nové šampiony mimo
              hru). Hráč se může do hry buď připojit sám (v takovém případě mu
              hra najde zbytek týmu), nebo se připojí s až čtyřmi předem
              vybranými spoluhráči.
            </p>

            <p>
              Ranked game (Bodovaná hra) - probíhá stejně jako Normální hra s
              draftem. Mohou ji hrát pouze hráči, kteří dosáhli třicáté úrovně a
              vlastní aspoň 20 hrdinů. Spolu s ME získávají hráči také LP
              (League Points), za výhru je získávají, za prohru ztrácejí.
              Jakmile hráč nasbírá 100 LP, dostává se do série 3-5 her, jejichž
              výsledek rozhodne, zda hráč postoupí do další divize nebo ne.
            </p>

            <p>
              Co-op vs. AI (Hráči vs. umělá inteligence) - stejný typ jako
              Normální hra, ale proti 'lidskému' týmu stojí počítačem ovládaní
              boti s nastavitelnou inteligencí. Tento typ hry lze hrát na
              většině map.
            </p>

            <p>
              ARAM (All Random All Mid) - 2 týmy po pěti hráčích se střetávají
              na nové mapě "Howling Abyss" s náhodně vybranými hrdiny a všichni
              jsou pouze v jedné linii. V této hře se v základně neobnovuje
              zdraví a lze nakupovat až po smrti.
            </p>

            <p>
              Practice tool - Mód určený k tréninku, hráč si může nastavit
              například vypnutí přebíjecích časů u kouzel, neomezené finance, či
              neomezenou zásobu many a trénovat postavy a herní prvky.
            </p>
            <h2>SKUPINY ŠAMPIONŮ</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
