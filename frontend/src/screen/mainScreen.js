import React from "react";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";

export default function mainScreen() {
  return (
    <div>
      <div id="main-parallax" className="parallax"></div>

      <div className="row-content">
        <h1 className="main-nadpis">E-SPORT</h1>
      </div>
      <div className="grid-container-content">
        <div></div>
        <div className="grid-item grid-item-home">
          <div className="col-1">
            <p>
              E-sport, také známý pod pojmem esport, elektronický sport nebo
              progaming, je soutěžní klání hráčů počítačových her. Soutěží se
              formou hry pro více hráčů v různých organizovaných turnajích a
              ligových soutěžích, zejména mezi profesionálními hráči
              individuálně nebo v týmu. Přestože organizované soutěže jsou již
              dlouho součástí kultury videoher, až od roku 2000 se esport začal
              prosazovat ve světě, kdy účast profesionálních hráčů a diváků na
              těchto událostech prostřednictvím živého vysílání zaznamenala
              velký nárůst popularity. Do roku 2010 byl esport významným
              faktorem v odvětví videoher a mnoho vývojářů her aktivně
              navrhovalo a financovalo turnaje a další akce. Elektronický sport
              je možné provozovat na všech populárních platformách – PC, XBOX a
              Playstation. Většina států, jejich sportovní svazy, Evropská unie
              a veřejnost dosud neuznaly kompetitivní hraní počítačových her
              jako sport.
            </p>
            <p>
              Nejpopulárnější žánry videoher přidružené k esportu jsou{" "}
              <i>Multiplayer Online Battle Arena</i> (MOBA),{" "}
              <i>First-Person Shooter</i> (FPS), <i>Battle Royale</i> (BR),{" "}
              <i>Real-Time Strategy</i> (RTS), dále karetní hry (např.
              Hearthstone) a bojové hry (např. Tekken). Nejpopulárnější
              esportové hry jsou{" "}
              <Link className="linktext" to="lol">
                <i>League of Legends</i>
              </Link>
              ,{" "}
              <Link className="linktext" to="pubg">
                <i>PLAYERUNKNOWN'S BATTLEGROUNDS</i>
              </Link>
              ,{" "}
              <Link className="linktext" to="valorant">
                <i>Valorant</i>
              </Link>
              , <i>Dota 2</i>, <i>Counter-Strike</i>, <i>Overwatch</i>,{" "}
              <i>StarCraft</i>, <i>Super Smash Bros.</i>
            </p>
            <p>
              Turnaje jako{" "}
              <i>
                League of Legends World Championship, The International Dota 2
                Championship
              </i>
              , mistrovství v bojových hrách{" "}
              <i>Evolution Championship Series</i> (EVO) a{" "}
              <i>Intel Extreme Masters</i> (IEM), patří mezi největší a
              nejpopulárnější turnaje na světě. Ačkoliv legitimnost esportu jako
              skutečné sporotvní soutěže zůstává otázkou, esport byl představen
              na některých nadnárodních událostech v Asii. Mezinárodní
              olympijský výbor také diskutoval o začlenění esportu do budoucích
              olympijských akcí.
            </p>
            <p>
              V roce 2010 sledovalo esport 454 milionů diváků. Rostoucí
              dostupnost mediálních platforem pro online streamování, zejména
              YouTube a Twitch, se stala ústředním bodem růstu a propagace
              eSportu. Přestože esport sledovalo přibližně 85% mužů a jen 15%
              žen, přičemž většina diváků byla ve věku od 18 do 34 let, ženy
              hrály také profesionálně. Popularita a uznání esportu se poprvé
              odehrály v Asii, kde došlo k výraznému nárůstu v Číně a Jižní
              Koreji, kde mají licensované profesionální hráče již od roku 2000.
              V Japonsku je esport relativně málo rozvinutý, což je do značné
              míry přičítáno k japonským zákonům proti hazardu, které zakazují
              placené profesionální herní turnaje.
            </p>

            <h2>HISTORIE</h2>
            <p>
              První soutěž ve videohrách se odehrála 19. října 1972 na
              Stanfordské Univerzitě ve hře <i>Spacewar!</i>. Soutěž nesla název
              "Intergalactic Spacewar Olympics" a vítěz dostal roční předplatné
              časopisu <i>Rolling Stone</i>. Zlaté časy arkádových videoher
              odstartovaly hrou <i>Space Invaders</i> v roce 1978, která
              popularizovala používání trvale top skóre pro všechny hráče.
              Několik videoher v příštích několika letech následovalo a přidalo
              další prostředky ke sledování top skóre, například top skóre
              tabulky s iniciály hráčů ve hrách jako <i>Asteroids</i> v roce
              1979. Mistrovství Space Invaders pořádané v roce 1980 bylo
              nejdříve rozsáhlou soutěží, kteřá přilákala více než 10 000
              účastníků po celých Spojených Státech a dále se stala jako
              tradičním koníčkem.
            </p>
            <p>
              Samotný vývoj elektronického sportu lze pozorovat souběžně s
              rozvojem počítačových her. První náznaky kompetitivního hraní jsou
              známy již v dobách arkádových her po roce 1980 na počítačích
              Atari. Další velká vlna přišla s rozvojem počítačových sítí v
              systému Unix, který položil základ pro internetové hraní
              počítačových her. Pro PC hraní byl nejdůležitější nástup hry Doom
              a Quake. Právě tyto hry položily pevné základy a stály u
              nadcházejícího rozmachu elektronického sportu. Například Quake je
              hlavní hrou populárního turnaje QuakeCon v americkém Dallasu, kde
              se již od roku 1996 setkávají hráči této hry a soutěží o hodnotné
              ceny.
            </p>
            <p>
              Bojová hra Street Fighter II (1991) popularizovala koncept přímé
              soutěže na úrovni turnaje mezi dvěma hráči. Dříve se videohry při
              určování nejlepšího hráče nejčastěji spoléhaly na top skóre, ale
              to se změnilo u hry Street Fighter II, kde se hráči místo toho
              navzájem přímo vyzývali „tváří v tvář“, aby určili nejlepšího
              hráče, což připravilo půdu pro konkurenční režimy pro více hráčů a
              deathmatch v moderních akčních hrách. Popularita bojových her jako
              Street Fighter a Marvel vs. Capcom v 90. letech vedla v roce 1996
              k založení mezinárodního esportového turnaje Evolution
              Championship Series (EVO). Mezi velké turnaje v esportu v 90.
              letech patří Mistrovství Světa Nintendo 1990, která cestovala po
              celých Spojených státech a která se konala v Universal Studios v
              Hollywoodu v Kalifornii. Nintendo uspořádalo 2. Mistrovství Světa
              v roce 1994 pro Super Nintendo Entertainment System s názvem
              Nintendo PowerFest '94. Ve finále v San Diegu v Kalifornii hrálo
              132 finalistů. Mike Iarossi si odnesl 1. cenu. Blockbuster Video
              také provozoval své vlastní mistrovství světa v hrách na počátku
              90. let, které společně pořádal časopis GamePro. Soutěžit mohli
              občané ze Spojených států, Kanady, Velké Británie, Austrálie a
              Chile. Hry z mistrovství 1994 zahrnovaly NBA Jam a Virtua Racing.
            </p>
            <p>
              Televizní pořady s esporty během tohoto období zahrnovaly britské
              pořady GamesMaster a Bad Influence! australská herní show
              A*mazing, kde v jednom kole soutěžící soupeřili o videohry a
              kanadská herní show Video and Arcade Top 10. V 90. letech mnoho
              her profitovalo ze zvýšení připojení k internetu, zejména PC hry.
              John Romero, inspirovaný bojovými hrami Street Fighter II, Fatal
              Fury a Art of Fighting, založil v roce 1993 konkurenční
              multiplayer v online hrách s režimem Doom deathmatch. Mezi turnaje
              založené na konci 90. let patří Cyberathlete Professional League
              (CPL), QuakeCon a Professional Gamers League. PC hry hrané na CPL
              zahrnovaly série Counter-Strike, Quake, StarCraft a Warcraft.
            </p>
            <ul>
              <li>
                <img
                  className="medium-main"
                  src="./images/dreamhack2004.jpg"
                  alt="Dreamhack 2004"
                />
              </li>
              <li>
                <i>Dreamhack 2004</i>
              </li>
            </ul>

            <p>
              V dubnu 2006 byla federace týmů G7 tvořena sedmi významnými týmy
              Counter-Strike. Cílem organizace bylo zvýšit stabilitu ve světě
              esportů, zejména při standardizaci přestupů hráčů a práci s ligami
              a organizacemi. Zakládajícími členy byli 4Kings, Fnatic, Made in
              Brazil, Mousesports, NiP, SK-Gaming, Team 3D. Organizace trvala
              jen do roku 2009, než se rozpustila. Během roku 2010, esport rostl
              ohromně, způsobil velký nárůst ve sledovanosti i prize money.
              Ačkoli byly velké turnaje založeny před 21. stoletím, počet a
              rozsah turnajů se významně zvýšil, od zhruba 10 turnajů v roce
              2000 po přibližně 260 v roce 2010. Během tohoto období bylo
              založeno mnoho úspěšných turnajů, včetně World Cyber ​​Games,
              Intel Extreme Masters a Major League Gaming. Nárůst turnajů
              zahrnoval experimentování se soutěžemi mimo tradiční žánry
              esportů. Například FUN Technologies Worldwide Webgames
              Championship v září 2006 představovalo 71 soutěžících v
              příležitostných hrách o hlavní cenu 1 milion dolarů. Popularita a
              vznik online streamovacích služeb pomohly v tomto období růstu
              e-sportů a jsou nejčastější metodou sledování turnajů. Twitch,
              online streamovací platforma spuštěná v roce 2011, běžně streamuje
              populární soutěže v eSportu. V roce 2013 diváci platformy
              sledovali 12 miliard minut videa ve službě, přičemž dvěma
              nejoblíbenějšími vysílacími společnostmi Twitch byly League of
              Legends a Dota 2. Během jednoho dne Twitch zaznamenal 4,5 milionu
              jedinečných zobrazení, přičemž každý divák sledoval v průměru dvě
              hodiny.
            </p>
            <div className="row slider-home">
              <Slider
                className="sliderHome"
                autoplay={true}
                arrows={false}
                autoplaySpeed={4000}
              >
                <img src="../../images/obr1.jpg" />
                <img src="../../images/obr2.jpg" />

                <img src="../../images/obr4.jpeg" />
              </Slider>
            </div>
            <h2>VÝVOJ E-SPORTU V ČR</h2>
            <p>
              Historie kompetitivního hraní počítačových her je spjata s vývojem
              telekomunikačních technologií, převážně pak počítačů, šířením
              internetového připojení a rozvojem počítačových her. Další základy
              položil rozvoj organizací sdružující počítačové hráče. Vůbec
              prvním takovým sdružením v České republice byl tým The
              NecroRaisers, jehož vznik se datuje k 1. lednu 1997. Hraní
              počítačových her na profesionální úrovni se řadí mezi činnosti,
              které nejsou fyzicky náročné a nesplňuje tedy definici sportu.
              Soutěžní klání mají jasná pravidla a soutěžní charakter. V
              elektronickém sportu existoval do roku 2010 Českomoravský svaz
              progamingu. Ten měl za úkol zvyšovat úroveň profesionálního hraní
              v České republice. Jedním z hlavních cílů tohoto sdružení bylo
              také pořádání vyvrcholení celého roku v podobě Mistrovství České
              republiky v počítačových hrách, které se od roku 2002 konalo na
              brněnské výstavě INVEX, později známé jako DIGITEX. Mezi roky 2008
              až 2011 se MČR nepořádalo. Od roku 2011 se však znovu pořádá v
              Seči. I když vlastní svaz přestal fungovat, většinu jeho funkcí
              převzal komunitní portál PLAYzone.cz. V letech 2013 a 2014 dostalo
              MČR ještě větší punc, když bylo z Jezerky přesunuto na pražské
              výstaviště v Letňanech jako součást u nás největšího herního
              veletrhu FOR GAMES. Od roku 2015 se finálový turnaj Mistrovství ČR
              v počítačových hrách koná na Brněnském výstavišti BVV v rámci
              veletrhu IN-JOY, která láká stále větší masy fanoušků
              profesionálního a poloprofesionálního hraní počítačových her. Mezi
              nejznámější české organizace patří eSuba, Entropiq, Vikingekrig,
              Inside Games a eXtatus.{" "}
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
