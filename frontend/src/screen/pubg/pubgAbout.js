import React from "react";
import { Link } from "react-router-dom";

export default function pubgAbout() {
  return (
    <div>
      <div className="row"></div>

      <div className="row row-content pubg-border mt-50">
        <img className="big" src="./images/pubg3.png" alt="PUBG logo" />
      </div>
      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu pubg-border">
            <li>
              <Link className="link" to="/pubg">
                ZPĚT
              </Link>
            </li>
            <li>
              <Link className="link" to="/pubgMaps">
                MAPY
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidemenu-border pubg-border grid-item">
          <div className="col">
            <h2>PRŮBĚH HRY</h2>
            <p>
              PLAYERUNKNOWN'S BATTLEGROUNDS hra typu stříleček hráč proti hráči,
              ve kterém až 100 hráčů bojuje na bitevním poli do posledního
              přeživšího. Do samostatného zápasu je možno vstoupit sám (solo), s
              parťákem (duo), nebo v malé skupině 4 hráčů (squad). Každý zápas
              začíná na zahřívacím ostrově jedné momentálně ze sedmi map, kdy
              mají hráči čas se připojit a připravit do tohoto utkání. Na mapě
              je zobrazená trasa letadla, kterým hráči po uplynutí časomíry
              poletí, takže mají minutu na naplánování a rozhodnutí, na jaké
              místo se tuto hru vydají. Trasa letadla je náhodná a každou hru se
              mění. Následuje tedy let letadlem. Pokud hráč nestihne z letadla
              vyskočit sám, automaticky ho letadlo vyhodí na konci dráhy. Hráči
              skáčou z letadla ve výšce 1500 metrů a 300 metrů nad zemí se jim
              otevře padák, díky kterému mohou bezpečně přistát na zemi. Hráči
              začínají bez jakéhokoliv vybavení. Jakmile hráči dopadnou, mohou
              začít prozkoumávat budovy, města, vojenské základny, atp., za
              účelem nalezení zbraní, munice, vybavení (helmy, vesty a batohu),
              vybavení na zbraně (zaměřovače, rozšířené zásobníky, tlumič na
              zbraň) a lékárniček. Na náhodných místech zejména kolem cest jsou
              rozmístěna vozidla, která slouží k rychlé dopravě po mapě, u
              pobřeží lze nalézt vodní dopravní prostředky. Pokud hráč zabije
              jiného hráče, zůstane na místě jeho smrti "bedna," ze které si
              poté hráč může vzít jeho veškeré vybavení. Hráči se řídí podle
              modré zóny, která je viditelná na mapě a vede hráče do finále hry.
              Poslední přeživší vyhrává.{" "}
            </p>
            <ul>
              <li>
                <img
                  className="medium"
                  src="./images/draha.png"
                  alt="Trasa letadla"
                />
              </li>
              <li>
                <i>Trasa letadla před začátkem hry</i>
              </li>
            </ul>
            <h2>ZÓNY</h2>
            <h4>BLUE ZONE</h4>
            <p>
              Hra je ovlivňována různými typy zón. Nejdůležitější zóna také
              nazývána jako (kruh, modrá, circle, blue...), je zóna která
              ohraničuje herní pole a má za úkol dostat hráče k sobě. Když hráč
              vystoupí z označeného kruhu, dostává od zóny pravidelné poškození,
              dokud se zase nevrátí do kruhu. Tato zóna má obvykle 8 fází. V
              první fázi je v kruhu větší část mapy a v poslední fázi už má kruh
              přibližně jen 50 metrů v průměru. Čím je kruh menší, tím se
              rychleji zmenšuje a zóna mimo kruh dává větší a větší poškození.
              Rychlost pohybu kruhu je na každé mapě jinak stanovená, a také se
              tato rychlost liší na kompetitivní scéně neboli turnajích.
            </p>
            <ul>
              <li>
                <img
                  className="medium"
                  src="./images/bluezone.png"
                  alt="Modrá zóna"
                />
              </li>
              <li>
                <i>Modrá zóna - 3. fáze</i>
              </li>
            </ul>
            <h4>RED ZONE</h4>
            <p>
              Asi největší nepříjemností ve hře je tzv. Red Zone, neboli červená
              zóna. Červená zóna je kruh o průměru 1km a objevuje se náhodně po
              mapě od první až do třetí fáze modré zóny. Tento kruh se objeví na
              mapě a během 20 sekund se z nebe spustí bomby, které jsou pro
              hráče smrtelné když ho zasáhnou. Když nad sebou hráč spatří
              červenou zónu, obvykle co nejrychleji vyhledá nějakou budovu do
              které se může schovat. Pokud se poblíž hráče nenachází žádný
              úkryt, může hráč pouze doufat, že bude mít štěstí a žádná bomba ho
              nezasáhne.
            </p>
            <p>
              I přes to, že se u červené zóny hráči občas pobaví, obzvlášť ve
              squadech, kdy polovinu týmu při jízdě autem odbouchne bomba a
              druhá polovina týmu se pro ně musí vracet a zachraňovat je, což
              většinou provází výsměch, je tato mechanika na kompetitivní scéně
              vypnutá. Je to z toho důvodu, že červená zóna je většinou pouhou
              nepříjemností pro hráče a na turnajích jde především o to, aby
              vyhrál ten nejlepší tým, a ne aby byly týmy ovlivňovány tzv. RNG*
              a kazilo jim to hru.{" "}
            </p>
            <p>
              <i>
                *RNG znamená Random Number Generator. V herní terminologii tato
                zkratka stanovuje náhodné události, které nejsou způsobené
                hráčem, ale hrou. V PUBG to může být právě například místo kde
                se objeví červená zóna, jak poletí letadlo, kam skočí modrá zóna
                nebo kde se na mapě nachází třeba auto.{" "}
              </i>
            </p>
            <h4>BLACK ZONE</h4>
            <p>
              Black zone neboli černá zóna, funguje podobně jako červená zóna s
              tím rozdílem, že před červenou zónou se hráč může schovat do
              budovy, kde je před bombami v bezpečí, ale když se hráč schová do
              budovy před černou zónou, bude toho velmi litovat. Tato zóna se
              objevuje pouze nad městy a ostatními menšími objekty s budovami.
              Když je hráč v tomto malém kruhu, nemusí se obávat že ho bomba
              zabije, pokud není právě v blízkosti nebo uvnitř budovy. Tyto
              bomby jsou totiž nastavené tak, aby padaly pouze na budovy, které
              se po dopadu bomby zboří a zůstanou po nich pouze zříceniny.
            </p>
            <p>
              Černá zóna je herní mechanikou pouze na jedné z map, a tou je
              Karakin. Pouze na Karakinu jsou totiž jedinečné herní mechaniky,
              které ostatní mapy nemají a to jsou právě rozbitné zdi, stropy a v
              případě tedy černé zóny i rozbitné budovy.{" "}
            </p>
            <h2>DOPRAVA</h2>
            <p>
              Když hráč potřebuje urazit větší vzdálenost, může použít dopravní
              prostředek pro rychlejší pohyb po mapě.
              <p>
                Patří zde: auto UAZ, Dacia, Rony, Mirado, Zima, pickup,
                miniautobus, bugina, Tuk-Tuk, motocykl, sidekára, skútr, zimní
                skútr, zimní motocykl, terénní motocykl, rogalo a pro vodní
                cestování je zde loď nebo aquarail.
              </p>
              <p>
                Jako novinku do hry nedávno přidali "Emergency pickup". Hráč
                může najít na mapě tašku se čtyřmi padáky, na které se můžé
                zaháknout jeden, dva, tři nebo všichni čtyři členové týmu. Poté
                přiletí letadlo, které hráče vyzvedne a dopraví do středu modré
                zóny, kde hráči můžou vyskočit a dopadnout padákem zpět na zem.
              </p>
            </p>
            <h2>LÉČENÍ</h2>
            <p>
              Když hráč přežije kontakt s nepřítelem a je poraněný, musí se
              něčím vyléčit. Mezi léčivé předměty patří:
              <p>Med Kit - doplní hráči 100% životů</p>
              <p>First Aid Kit - doplní hráči 75% životů</p>
              <p>Bandáž - doplní hráči 10% životů</p>
              <p>
                Adrenalinová injekce, Prášky od bolesti, Energetický nápoj -
                zrychlí hráči pohyb a doplňuje pomaličku chybějící životy hráče
              </p>
            </p>
          </div>
          <div className="col">
            <h2>VÝBAVA</h2>
            <p>
              Mezi základní výbavu hráče patří helma, vesta a batoh, aby hráč
              mohl sbírat věci. Tato výbava se dělí na 1. úroveň, 2. úroveň a 3.
              úroveň. Hráč tedy na mapě může najít 3 druhy batohů - čím vyšší
              úroveň batohu, tím větší kapacita. Dále 3 druhy vest - vyšší
              úroveň pokryje více poškození. A 3 druhy helem. Helma na třetí
              úrovni (Trojková helma) se dá na zemi najít pouze na mapě Vikendi,
              jinak je k nalezení pouze v air-dropu. Trojková helma také jako
              jediná helma pokryje střelu z odstřelovacích pušek, kromě AWM. AWM
              jako jediná zbraň dokáže hráče zabít na jeden náboj přes trojkovou
              helmu. Ostatní ostřelovací pušky hráče zabijí na jeden náboj pouze
              přes jedničkovou a dvojkovou helmu.
            </p>
            <h2>ZBRANĚ</h2>
            <p>
              Vzhledem k tomu, že PUBG je jedna z nejreálnějších her, tak i
              veškeré zbraně jsou z reálného světa. Jak už vzhled tak i
              funkčnost zbraní. Zbraně jsou tedy rozděleny do několika skupin.
            </p>
            <ul>
              <li>
                <img
                  className="medium"
                  src="./images/M416.jpg"
                  alt="PUBG M416"
                />
              </li>
              <li>
                <i>M416</i>
              </li>
            </ul>
            <h4>ASSAULT RIFLE (AR)</h4>
            <p>
              Do této skupiny patří zbraně, které jsou vhodné na "sprejování" na
              krátkou či střední vzdálenost. Poškození těchto zbraní je
              průměrné, tzn. na zabití hráče je potřeba trefit tak 4-6 střel.
              <p>
                Patří zde: AKM, Beryl M762, M416, Scar-L, Groza (pouze
                air-drop), AUG A3 (pouze air-drop), G36C (pouze mapa Vikendi),
                QBZ95 (pouze mapa Sanhok), M16A4 a MK47.{" "}
              </p>
            </p>
            <h4>DESIGNATED MARKSMAN RIFLE (DMR)</h4>
            <p>
              Tyto zbraně jsou vhodné na dlouhou vzdálenost a mají docela velké
              poškození. Na zabití hráče je potřeba 2-4 střely.
              <p>
                Patří zde: SLR, SKS, Mk14 (pouze air-drop), Mini14, QBU (pouze
                mapa Sanhok) a VSS.
              </p>
            </p>
            <h4>SNIPER RIFLE (SR)</h4>
            <p>
              SR neboli odstřelovací pušky jsou vhodné na velkou vzdálenost a
              mají největší poškození ze všech zbraní. Tyto zbraně mají velmi
              dlouhé přebíjení a také malé zásobníky, ale jedna trefa touto
              zbraní do hlavy je v 99% případů smrtelná.{" "}
              <p>
                Patří zde: Kar98k, M24, Mosin Nagant, Win94 a nejsilnější zbraň
                ve hře AWM (pouze air-drop).
              </p>
            </p>
            <h4>LIGHT MACHINE GUNS (LMG)</h4>
            <p>
              Tyto zbraně jsou silné proti autům, dokáží velmi rychle a
              efektivně zničit každé auto, obzvlášť díky velkým zásobníkům.
              Jedna z těchto zbraní má zásobník až pro 150 nábojů.
              <p>Patří zde: DP-28, M249 a MG3 (pouze air-drop)</p>
            </p>
            <h4>SUBMACHINE GUNS (SMG)</h4>
            <p>
              Do této skupiny patří zbraně vhodné na krátkou vzdálenost. Mají
              sice nejrychlejší přebíjení a nejrychlejší střelbu, ale velmi
              nízké poškození. Na zabití nepřítele je potřeba trefit 6-8 střel.
              <p>
                Patří zde: MP5K (pouze mapy Vikendi, Karakin a Paramo), PP-19
                Bizon, Micro UZI, Vector, Tommy Gun a UMP45.{" "}
              </p>
            </p>
            <h4>BROKOVNICE</h4>
            <p>
              Brokovnice se hodí pouze na velmi krátkou vzdálenost maximálně 20
              metrů, dál tyto náboje nedoletí. Ovšem pokud hráč otevře dveře a
              tam na něj vybafne hlaveň brokovnice, nemá šanci ani zareagovat a
              ve hře hodně rychle končí.
              <p>Patří zde: S686, S12K, S1897, DBS a Sawed-Off.</p>
            </p>
            <h4>PISTOLE</h4>
            <p>Patří zde: P1911, P92, P18C, R1895, R45, Deagle a Skorpion.</p>
            <h4>ZBRANĚ NA BLÍZKO</h4>
            <p>Patří zde: Pánvička, Kosa, Mačeta a Páčidlo.</p>
            <h4>OSTATNÍ</h4>
            <p>
              Patří zde: Kuše a Flare Gun. (Vystřelením světlice z Flare Guny
              hráč přivolá letadlo, které mu přinese balíček s exkluzivní
              kořistí nebo obrněné auto.
            </p>
            <h4>MUNICE</h4>
            <p>
              Ke každé zbrani je třeba určitý druh munice, kterou musí hráč
              zvlášť sbírat na zemi. Patří zde:
              <p>.300 Magnum Ammo - AWM</p>
              <p>7.62mm Ammo - SR, DMR, AR, LMG</p>
              <p>5.56mm Ammo - DMR, AR, LMG</p>
              <p>.45 ACP Ammo - SMG, pistole</p>
              <p>9mm - SMG, pistole, VSS</p>
              <p>12 Gauge Ammo - brokovnice</p>
              <p>Šípy - Kuše</p>
              <p>Světlice - Flare Gun</p>
            </p>
            <h4>GRANÁTY</h4>
            <p>
              Patří zde: Granáty, Kouřové granáty, Oslepující granáty, Molotow a
              C4.
            </p>
            <h2>DOPLŇKY NA ZBRANĚ</h2>
            <p>Doplňky slouží k lepší kontrole zbraní.</p>
            <h4>ZAMĚŘOVAČE</h4>
            <p>15x, 8x zaměřovač - lze je použít pouze na SR a DMR.</p>
            <p>
              6x, 4x, 3x, 2x zaměřovač - lze použít na SR, DMR, AR, LMG, SMG a
              kuši.
            </p>
            <p>
              Red Dot, Holosight - lze nasadit na všechny typy zbraní kromě
              brokovnic.
            </p>
            <ul>
              <li>
                <img className="medium" src="./images/8x.png" alt="8x scope" />
              </li>
              <li>
                <i>Zaměřovač s 8x přiblížením</i>
              </li>
            </ul>
            <h4>DRŽENÍ ZBRANĚ</h4>
            <p>Pažby na AR, SMG a DMR - Tactical Stock, Cheek Pad</p>
            <p>
              Rukojeti na AR, SMG a DMR - Vertical Grip, Angled Grip,
              Lightweight Grip, Thumb Grip, Half Grip
            </p>
            <h4>PŘESNOST ZBRANÍ</h4>
            <p>Tlumiče na AR, DMR, SR, SMG a pistole</p>
            <p>Kompenzátory na AR, SMG, DMR a SR</p>
            <p>Úsťové brzdy na AR, SMG, DMR a SR</p>
            <h4>ZÁSOBNÍKY</h4>
            <p>Různé druhy na AR, DMR, SR, SMG, pistole i brokovnice</p>
          </div>
        </div>
      </div>
    </div>
  );
}
