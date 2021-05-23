import React from "react";
import { Link } from "react-router-dom";
import "js-video-url-parser/lib/provider/youtube";

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
            </p>{" "}
            <p>
              Navzdory tomu, že je League of Legends pouhá videohra, jejich tým
              grafiků, animátorů a designérů je na špičkové úrovni a můžeme je
              srovnat s nejvyšší příčkou filmových animátorů. Kromě designu co
              se týká hry samotné, dělá Riot Games i videa, neboli krátké filmy.
              Co se týče světových šampionátů, tak tam se animátorský tým vždy
              vyřádí úplně nejvíc. Už od roku 2012 se na světových šampionátech
              dělají show s živým hudbením vystoupením orchestru v doplnění o
              různé umělce jako tanečníky, DJ a zpěváky.
            </p>
            <p>
              Světový šampionát se koná v listopadu každého roku, pokaždé v jiné
              zemi. V roce 2013 se mistrovství světa League of Legends sezóny 3
              konalo ve vyprodaném Staples Center v Los Angeles. Mistrovství
              světa League of Legends 2014 v jihokorejském Soulu mělo více než
              40 000 fanoušků a kromě soutěže se na zahajovacím ceremoniálu
              představila skupina Imagine Dragons s písničkou Warriors, kterou
              nazpívali přímo pro League of Legends. V roce 2016 performovala
              skupina Zedd s písničkou Ignite.
            </p>
            <p>
              V roce 2017 postoupil animátorský tým na úplně jiný level a
              divákům u svých obrazovek ukázali animaci draka, který obletěl
              stadion a přistál na pódiu.{" "}
            </p>
            <ul>
              <li>
                <img className="medium" src="./images/worlds2017.jpg" alt="" />
              </li>
              <li>
                <i>Světový šampionát LoL 2017</i>
              </li>
            </ul>
          </div>
          <div className="col">
            <p>
              V roce 2018 Riot Games vytvořilo virtuální dívčí hudební skupinu s
              názvem K/DA, která má nyní už 6 písniček. Zpěvačky této virtuální
              skupiny jsou postavy ze hry - konkrétně Ahri, Evelynn, Akali,
              Kai'Sa a Seraphine. Každá z postav má svou vlastní reálnou
              zpěvačku. Nejznámější a nejoblíbenější je korejská rapperka Soyeon
              ze skupiny (G)I-DLE, která zpívá za postavu Akali. První písnička
              s názvem Pop Stars byla performována na zahajovacím ceremoniálu
              finále Mistrovství světa v Lol 2018. Tato akce byla nejledovanější
              akcí v historii esportu. Díky ohromnému zájmu čínských fanoušků
              sledovalo zápas 205 milionů diváků, což je 2x větší zájem než o
              Super Bowl.{" "}
            </p>
            <p>
              {" "}
              V roce 2019 se tento šampionát konal v Paříži. Aréna s kapacitou
              20 300 míst, ve které se turnaj konal, se vyprodala během 10
              sekund v online předprodeji. Vítězný tým si kromě titulu mistra
              světa odnesl také krásných 2,2 milionů dolarů. Na zahajovacím
              ceremoniálu, který trval přibližně 10 minut, pracoval animátorský
              tým 10 měsíců. I když si můžeme myslet, že rok 2017, co se
              představení týče, udělal díru do světa, rok 2019 byl teprve jako z
              budoucnosti. Animátorský tým si pro diváky připravil hologramovou
              show, na které se v průběhu roku podíleli i zpěváci singlu pro
              tuto sezónu - <i>GIANTS</i>, který performovali živě v
              choreografii s jejich hologramy. Na toto představení se můžete
              podívat níže.{" "}
            </p>
            <object
              className="video"
              data="https://www.youtube.com/embed/6QDWbKnwRcc"
            ></object>
            <i>Zahajovací ceremoniál světového šampionátu 2019</i>
            <h4>MEZINÁRODNÍ ÚROVEŇ</h4>
            <p>
              V dnešní době je League of Legends rozděleno do 12 světových
              regionů. V každém regionu se pořádají ligy, přičemž nejlepší týmy
              se na konci roku dostanou na světový šampionát. Tyto regiony jsou:
              Evropa, Severní Amerika, Čína, Korea, Japonsko, Latinská Amerika,
              Brazílie, Turecko, Rusko, Taiwan, Vietnam a Oceánie. V Evropské
              lize (LEC) hraje 10 týmů a 3 nejlepší nás reprezentují na světovém
              šampionátu. Nejúspěšnější organizace zde jsou G2 Esports, Fnatic,
              MAD Lions. V týmu MAD Lions máme letos 2 zástupce z Česka, což
              jsou Marek "Humanoid" Brázda a Matyáš "Carzzy" Orság. V Americké
              lize (LCS) hraje taktéž 10 týmů, nejznámější jsou Cloud 9, Team
              Solo Mid a Team Liquid. V Čínské lize (LPL) hraje letos celkem 17
              týmů, z toho jen 3 nejlepší se dostanou na světový šampionát.
              Nejúspěšnější organizace tam jsou: Royal Never Give Up, Edward
              Gaming a Top Esports. V jihokorejské lize hraje 10 týmů a
              nejznámější jsou T1, Damwon a Gen.G. Hráč s přezdívkou "Faker" z
              týmu T1 (dříve SKT T1), je nejznámějším a nejuznávanějším hráčem
              na světě a také ikonou mnoha hráčů. Dlouhodobě byl nejlepším
              hráčem světa, jelikož měl na kontě 3 tituly mistra světa (SKT T1 s
              Fakerem na mid lane, vyhráli světový šampionát v letech 2013,
              2015, 2016).{" "}
            </p>
            <h4>LOL ESPORT V ČESKU</h4>
            <p>
              V České Republice máme ligu, kterou pořádá společnost HITPOINT se
              sídlem ve Svitavách. V lize hraje 8 týmů, a 4 nejlepší postoupí do
              semifinále, které se v březnu a srpnu koná ve svitavské Fabrice
              před živým publikem. Kromě HITPOINT ligy se ještě jednou za rok
              pořádá Mistrovství České Republiky na brněnském výstavišti.
              Nejznámější organizace v česku jsou: eSuba, Vikingekrig a Inside
              Games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
