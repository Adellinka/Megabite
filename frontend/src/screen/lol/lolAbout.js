import React from "react";
import { Link } from "react-router-dom";

export default function lolAbout() {
  return (
    <div>
      <div className="row"></div>

      <div className="row row-content lol-border mt-50">
        <img className="big" src="./images/logolol.png" alt="PUBG logo" />
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
            <ul>
              <li>
                <img className="medium" src="./images/mapa.jpg" alt="mapa" />
              </li>
              <li>
                <i>Mapa Summoner's Rift - pohled shora</i>
              </li>
            </ul>
            <p>
              Druhou aktivní mapou je Kvílející propast (Howling Abyss) - mapa
              určená pouze pro mód ARAM. ARAM (All Random All Mid), je mod,
              který je hraný čistě pro zábavu a neexistuje zde žádná strategie,
              už jen z toho důvodu, že každý hráč dostane náhodného šampiona,
              kterého si maximálně může vyměnit se svým spoluhráčem. Mapa má
              pouze jednu linku, na které se mlátí všech 10 hráčů mezi sebou
              dokud hra neskončí. Mapa může být zřídka viděna na turnajích pro
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
              Ranked game (Hodnocená hra) - probíhá stejně jako Normální hra s
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
          </div>
          <div className="col">
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

            <h2>ROLE</h2>
            <p>
              V League of Legends je 5 různých rolí. Před každou hrou si hráč
              může vybrat jakou roli chce hrát. Má na výběr Top, Jungle, Mid,
              Adc, Support a když se nemůže rozhodnout, může si vybrat možnost
              "Fill", která ho automaticky doplní na roli, která je potřeba.
              Každý hráč může hrát v jedné hře pouze jednu roli.
            </p>
            <h4>TOP</h4>
            <p>
              Na top lane neboli horní lince se hrají převážně tankové, neboli
              šampioni, kteří mají hodně životů, brnění, jednoduše šampioni,
              kteří nedávají moc poškození, ale hodně toho vydrží (např. Ornn,
              Cho'Gath, Malphite). Na topu se také hrají šampioni ze skupiny
              bojovníků (např. Riven, Camille, Renekton). Čas od času můžeme na
              top lane vidět i šampiony určené pro středovou linii (mid). Hráč
              na topu (slangově Topař) si musí uvědomit, že je na této lince sám
              a jediný jeho spojenec v dřívější fázi hry je jeho džungler. Topař
              se nemůže spolehnout na to, že někdo z jeho týmu, mu přijde
              položit do keře odhalovací totem (wardu), ani na to že mu vždy
              bude někdo na blízku. Proto si své okolí musí pečlivě hlídat a
              dávat pozor na nepřátelského džunglera. Vzhledem k tomu, že je top
              lane daleko od všeho dění na mapě, bere si topař většinou
              teleport, aby mohl pomoci svému týmu například v boji o draka.
            </p>
            <h4>JUNGLE</h4>
            <p>
              V džungli se nenachází poskoci jako na linkách, ale je tam plno
              nestvůr, které dávají hráčům v džungli (junglerům) body zkušeností
              a různé buffy, které v pozdější fázi hry může dávat svým
              spoluhráčům, kteří je potřebují a jsou s nimi silnější. Například
              Blue Buff, který rychleji doplňuje manu a snižuje přebíjecí dobu
              (vhodné pro mágy / mid lane šampiony) nebo Red Buff, který
              rychleji doplňuje životy a zapaluje základní útoky (vhodné pro
              střelce - ADC). Práce junglera spočívá v tom, že musí pomáhat svým
              spoluhráčům na linkách (tomu se říká gankování). Jungler by měl
              mít pod kontrolou celou svou džungli a také by měl hlídat a mít
              přehled o tom kde se nachází nepřátelský džungler. S pomocí svých
              spoluhráčů by měl džungler zabíjet draky a v pozdější fázi hry
              Barona. Na rychlé a efektivní zabíjení těchto nestvůr, džunglerovi
              pomáhá tzv. "Smite", kouzlo které se bere pouze na džunglery.
              Nejoblíbenější šampioni do džungle jsou: Kha'Zix, Kayn, Hecarim.
            </p>
            <h4>MID</h4>
            <p>
              Na středové linii (mid lane) se hrají převážně mágové (např. Zoe,
              Syndra, Lux), zabijáci neboli assassíni (např. Akali, Zed,
              Katarina) a v neposlední řadě někteří bojovníci (např. Yasuo,
              Yone). Mid lane je v porovnání s topem a botem krátká linka, takže
              je jednodušší utéct do bezpečí před nepřátelským gankem. Hráč si
              ale oproti ostatním linkám, musí hlídat 2 strany, ze kterých
              zmíněný gank může přijít, je tedy nezbytná vize na obou stranách,
              se kterou pomáhá džungler a support, který společně s džunglerem
              může chodit midaři pomoci. Díky tomu že je mid uprostřed mapy,
              může se hráč rychle dostat do středu dění a tak pomoci svým
              spoluhráčům. Úkolem hráče na midu (midaře) je pomáhat svému
              džunglerovi na řece a chodit pomáhat na top a bot.
            </p>
            <h4>ADC</h4>
            <p>
              ADC neboli AD Carry se hraje na spodní linii (bottom/bot lane)
              společně se supportem. Na pozici ADC se hrají střelci (marksmeni),
              kteří díky svým základním útokům na dálku mohou jednoduše
              provokovat nepřátelskou dvojici a zároveň se držet v bezpečné
              vzdálenosti. Střelci jsou totiž velmi zranitelní šampioni, protože
              nemají žádnou defenzívu, ale jsou od toho, aby dávali vysoké
              poškození pomocí svých základních útoků. Právě proto potřebují po
              boku podporu (supporta), který adc ochrání pomocí štítů, léčení či
              zastavení soupeře. Nejoblíbenější marksmeni jsou: Jinx, Vayne,
              Kai'Sa.{" "}
            </p>
            <h4>SUPPORT</h4>
            <p>
              Podpora (support) je nejdůležitější role obzvlášť na kompetitivní
              scéně. Support se hraje na spodní linii společně s ADC, kterému
              musí stát po boku celou hru a chránit ho před nepřáteli.
              Nejdůležitějším úkolem supporta je sledování mapy a hlášení svým
              spoluhráčům kde se kdo nachází, dále sledování všech časovačů jako
              např. kdy se zrodí drak, Baron, soupeř nebo časování nepřátelských
              kouzel. Dalším důležitým úkolem supporta je dělání vize, tzn.
              pokládání ward po mapě, díky kterým můžou všichni hráči vidět kde
              se kdo nachází a předejít momentu překvapení. Supporti se snaží
              nezabíjet nepřátele a spíš nechávají všechny zabití svým
              spoluhráčům, aby mohli dříve získat předměty, které jim zvýší sílu
              poškození. Vzhledem k tomu, že supporti nechávají všechen zisk z
              nepřátelských jednotek svým spoluhráčům, mají předměty určené pro
              supporty, které jim dávají náhradní zlaťáky. Supporti se dělí do 3
              skupin. Jsou tzv. tank supporti (např. Leona, Thresh, Alistar),
              kteří brání spoluhráče především svým tělem a brání nepříteli
              dostat se na krátkou vzdálenost obzvlášť k ADC. Dále jsou
              supporti, kteří mají za úkol léčit své spoluhráče nebo jim
              poskytnout štít, který zabrání příchozímu poškození. Jsou to např.
              Lulu, Janna, Soraka. Další oblíbená skupina supportů jsou "damage
              supporti" (např. Zyra, Brand). Jsou to převážně mágové, kteří
              hlavně provokují nepřátelskou dvojici a snaží se je zahnat a tím
              svému ADC zpříjemnit pobyt na lince.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
