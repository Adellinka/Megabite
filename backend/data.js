import bcrypt from "bcryptjs";

const data = {
  pubgMaps: [
    {
      name: "erangel",
      nahled: "./images/NahledPubgMaps/nahlederangel.jpg",
      mapa: "./images/erangel.png",
      description:
        "Erangel je první mapou hry PLAYERUNKNOWN's Battlegrounds. Název Erangel byl inspirován podle jména Eryn, což je dcera vývojáře PLAYERUNKNOWN. I přes to, že Erangel vyšel v roce 2016, je dodnes nejhranější a nejoblíbenější mapou. Velikost této mapy je 8x8 kilometrů a do hry se může napojit až 100 hráčů. Erangel se nachází na ruské půdě, proto také lze zpozorovat veškeré nápisy na budovách a značkách v azbuce. Tato mapa dominuje travnatým a zalesněným terénem, ale je tam také několik panelákových měst, malých městeček, vesniček, statků, farem a velké plochy obilných polí. Středem mapy protéká řeka, která se vlévá do oceánu na západní straně. Oceán tvoří velké procento mapy a obtéká tento ostrov ze všech stran. Hlavní ostrov je spojen dvěma mosty s jižním menším ostrovem zvaným Sosnovka, na kterém se nachází vojenská základna Sosnovka. Jak na hlavním ostrově, tak na ostrově Sosnovka jsou přístavy, mezi kterými plují 2 větší přepravní lodě, na které lze nastoupit a dopravit se na druhý ostrov. Dopravní prostředky na této mapě jsou: auto Dacia, UAZ, bugina, motocykl, sidekára, rogalo, loď a aquarail. ",
    },
    {
      name: "miramar",
      nahled: "./images/NahledPubgMaps/nahledmiramar.jpg",
      mapa: "./images/Miramar.jpg",
      description:
        "Miramar je mapa vytvořená korejskými developery. Velikost této mapy je 8x8 km a do hry se může napojit až 100 hráčů. Miramar nabízí unikátní písčitý terén z prostředí mexických pouští, husté městské, a malé venkovské oblasti. Největší město na této mapě se jmenuje Los Leones, ve kterém se kromě paneláků nachází také spoustu malých baráčků, obchodů, zřícenin, nedokončených staveb, ale také jeřábů a rozbitých aut. Jižní a východní část mapy je obejmutá oceánem. Západní část mapy obepíná pohoří a severní část je ohraničena vysokou zdí, která by mohla připomínat reálnou zeď mezi Mexikem a USA. Na jihu se nachází ostrov spojený mosty s hlavní pevninou a na východě jsou 2 malé ostrůvky, na které lze doplavat nebo se dopravit lodí či aquarailem. Další dopravní prostředky na této mapě jsou: sportovní auto Mirado, pickup, miniautobus, bugina, motocykl, sidekára a rogalo. ",
    },
    {
      name: "sanhok",
      nahled: "./images/NahledPubgMaps/nahledsanhok.jpg",
      mapa: "./images/Sanhok.jpg",
      description:
        "Sanhok je třetí mapou hry PUBG. Vyšla v roce 2018. Sanhok je 4x4 ostrov z prostředí Filipín a Thajska. Mapa je určená pro 100 hráčů stejně jako Erangel a Miramar, i přes to, že je oproti těmto mapám poloviční. Byla to první mapa, kvůli jejíž vývoji navštívil developerský tým tyto země, aby se inspiroval. Dřevěné domy a špičaté zaoblené střechy na Sanhoku jsou specifické pro toto prostředí. Terén tvoří zalesněné plochy, louky, rýžová a palmová pole. Tato mapa obsahuje velké procento vodní plochy nejen v podobě oceánu kolem ostrova, ale také v podobě řeky, která rozděluje pevninu na 3 části. Jako dopravní prostředek na této mapě lze použít auto Rony, motocykl, buginu, rogalo, loď, aquarail a také skútr nebo Tuk-tuk, což jsou specifické dopravní prostředky pro Thajsko. ",
    },
    {
      name: "vikendi",
      nahled: "./images/NahledPubgMaps/nahledvikendi.jpg",
      mapa: "./images/Vikendi.jpg",
      description:
        "Vikendi vyšla v roce 2018 jako čtvrtá PUBG mapa. Byla to první mapa, která byla představena na konferenci E3 v Los Angeles. Vikendi je ostrov v Jaderském moři s rozměry 6x6 km. Pro design mapy se developeři inspirovali ve Slovinsku. Vikendi je jediná zasněžená mapa a je to také první mapa, kde se mění noc a den. Na noční mapě je trochu horší viditelnost a na obloze jde vidět polární záře. V centrální oblasti se nachází zasněžené hory a nejvyšší bod ostrova Mount Kreznic. Ostrov je obklopen hustým lesem a na jižní teplejší části se vyskytují vinice. Mapa je vertikálně rozdělená na 2 části zmrzlou řekou. Na ostrově se nachází nejrůznější atrakce pro turisty jako je Cosmodrome, historický hrad nebo Dino Park. Jak už bylo řečeno, pro Vikendi je specifický sníh a s ním také přichází nová funkce v podobě stop ve sněhu, jak od aut tak od lidí. Dopravní prostředky na této mapě jsou: auto Dacia, auto Zima, zimní skútr, zimní motorka a loď.",
    },
    {
      name: "karakin",
      nahled: "./images/NahledPubgMaps/nahledkarakin.jpg",
      mapa: "./images/Karakin.png",
      description:
        "Karakin vyšla jako pátá mapa v pořadí. Je to 2x2 mapa pro maximálně 64 hráčů. Karakin je prostředí severní Afriky, vyznačuje se proto písčitým terénem a palmami. Tato mapa má hned několik jedinečných funkcí, které ostatní mapy nemají. Jedna z nich je například tzv. Černá Zóna. Narozdíl tedy od červené zóny, která se objevuje na všech ostatních mapách, černá zóna na Karakinu ničí budovy. Další jedinečnost této mapy jsou tunely, do kterých se lze dostat pomocí časovaných bomb, které dokáží zničit některé zdi. Tyto časované bomby lze také najít pouze a jen na Karakinu. Kromě zdí, které se dají zbourat bombou, jsou tady také zdi, skrz které se dá střílet. Na této mapě se nenachází žádné dopravní prostředky, ale i přes to je pohyb po mapě docela rychlý, vzhledem k její malé velikosti.",
    },
    {
      name: "paramo",
      nahled: "./images/NahledPubgMaps/nahledparamo.jpg",
      mapa: "./images/Paramo.jpg",
      description:
        "Paramo je šestá PUBG mapa. Rozměr této mapy je 3x3 km a do hry se může napojit až 64 hráčů. Paramo se nachází v oblasti Jižní Ameriky v sopečném prostředí. Na mapě se nachází aktivní sopka, ze které tečou proudy vroucí lávy, která způsobuje poškození do hráčů, jakmile do ní stoupnou. Na mapě se kromě městeček a stavenišť, vyskytují také starověké kamenné hrobky, do kterých se dá dostat pouze pomocí speciálního klíče, který lze na mapě najít. Narozdíl od ostatních map, kde tzv. Airdrop nese letadlo a je seslán na zem automaticky, na této mapě nese Airdrop helikoptéra, kterou musí hráč zničit, aby byl balíček spuštěn. Stejně jako na Karakinu tak ani na Paramu nejsou žádné cesty, z tohoto důvodu je na této mapě pouze jeden dopravní prostředek, kterým je terénní motocykl.",
    },
    {
      name: "haven",
      nahled: "./images/NahledPubgMaps/nahledhaven.jpg",
      mapa: "./images/Haven.png",
      description:
        "Haven je mapa vytvořená americkými developery. Je to 1x1 mapa pro maximálně 32 hráčů. Mapa je z prostředí průmyslového amerického města. Haven je úplně první PUBG mapa ve formátu PvPvE. To znamená, že kromě hráčů se ve hře nachází také umělá inteligence, neboli Boti, kteří krouží v helikoptéře kolem města. Když se hráči podaří tyto Boty zabít, získá vzácné předměty.",
    },
  ],

  lolChamps: [
    {
      name: "Aatrox",
      nahled: "./images/NahledChamps/nahledaatrox.jpg",
      zakladni: "./images/Champs/Aatrox.jpg",
      skin: "./images/Champs/AatroxOdyssey.jpg",
      nadpis: "AATROX - ČEPEL DARKINŮ",
      description:
        "Aatrox je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Aatrox a jeho bratři, kdysi uznávaní obránci Shurimy proti Prázdnotě, se nakonec pro Runeterru stali ještě větší hrozbou a dokázala je porazit pouze vychytralá magie smrtelníků. Ale po staletích uvěznění byl Aatrox první, kdo opět nalezl svobodu, když nakazil a přetvořil ty, kteří byli natolik bláhoví, že se pokusili používat magickou zbraň s jeho esencí. V ukradeném těle, brutálně spojeném s jeho předchozí podobou, nyní kráčí po Runeterře a touží po apokalyptické a dlouho odkládané pomstě. ",
    },
    {
      name: "Ahri",
      nahled: "./images/NahledChamps/nahledahri.jpg",
      skin: "./images/Champs/AhriKDA.jpg",
      zakladni: "./images/Champs/Ahri.jpg",
      nadpis: "AHRI - DEVÍTIOCASÁ LIŠKA",
      description:
        "Ahri je šampionka hraná především na středové linii (mid lane). Patří do skupiny mágů, základní útoky má na dálku. Vastajka Ahri má vrozenou schopnost čerpat dřímající sílu Runeterry a formovat magii do podoby koulí čiré energie. S oblibou si se svou kořistí pohrává a manipuluje s jejími emocemi, než na závěr pohltí její životní esenci. Navzdory své predátorské povaze má Ahri vysokou schopnost empatie, jelikož s každou pozřenou duší získá i záblesky vzpomínek jejího majitele.",
    },
    {
      name: "Akali",
      nahled: "./images/NahledChamps/nahledakali.jpg",
      skin: "./images/Champs/AkaliKDA.jpg",
      zakladni: "./images/Champs/Akali.jpg",
      nadpis: "AKALI - ODPADLÁ VRAŽEDKYNĚ",
      description:
        "Akali je šampionka hraná na středové či horní linii (mid, top). Patří do skupiny zabijáků, základní útoky má na blízko. Akali, která opustila řád Kinkou i svůj titul Pěst stínu, nyní útočí sama a je připravena být smrtící zbraní, kterou její lid potřebuje. Přestože dodržuje vše, co ji její mistr Shen naučil, přísahala, že bude bránit Ionii před nepřáteli, zářez po zářezu. Akali sice útočí v tichosti, ale svůj vzkaz tím do světa vyšle jasně a nahlas: bojte se zabijáka, co nemá pána.",
    },
    {
      name: "Alistar",
      nahled: "./images/NahledChamps/nahledalistar.jpg",
      skin: "./images/Champs/AlistarLunarBeast.jpg",
      zakladni: "./images/Champs/Alistar.jpg",
      nadpis: "ALISTAR - MINOTAURUS",
      description:
        "Alistar je šampion hraný především na spodní linii (bottom lane), hraný na roli podpory (support). Patří do skupiny tanků, základní útoky má na blízko. Alistar je mocný válečník s obávanou pověstí, jenž se snaží pomstít noxijské říši za vyhlazení svého kmene. Ačkoliv byl zotročen a přinucen přijmout úděl gladiátora, díky své nezlomné vůli se z něj nakonec nestalo pouhé bojující zvíře. Časem se mu podařilo zbavit okovů svých bývalých pánů a nyní bojuje jménem všech utlačovaných a umlčovaných. Jeho hněv je stejně nebezpečnou zbraní jako jeho rohy, kopyta a pěsti.",
    },
    {
      name: "Amumu",
      nahled: "./images/NahledChamps/nahledamumu.jpg",
      skin: "./images/Champs/AmumuPumpkinPrince.jpg",
      zakladni: "./images/Champs/Amumu.jpg",
      nadpis: "AMUMU - SMUTNÁ MUMIE",
      description:
        "Amumu je šampion hraný především v džungli (jungle). Patří do skupiny tanků, základní útoky má na blízko. Podle legend je Amumu osamělá a posmutnělá duše ze starobylé Shurimy, jež nyní putuje světem a hledá přítele. Je pod vlivem prastaré kletby, a tak je odsouzen zůstat navždy sám – jeho dotek je smrtící a jeho náklonnost ničivá. Ti, kteří tvrdí, že Amumua spatřili, jej popisují jako malou oživlou mrtvolku zabalenou do obvazů v barvě lišejníku. Vzniklo podle něj nespočetně bajek, písní a mýtů, které se předávají z generace na generaci, a tak je dnes nemožné rozlišit, co je pravda a co pohádka.",
    },
    {
      name: "Anivia",
      nahled: "./images/NahledChamps/nahledanivia.jpg",
      skin: "./images/Champs/AniviaCosmicFlight.jpg",
      zakladni: "./images/Champs/Anivia.jpg",
      nadpis: "ANIVIA - KRYOFÉNIX",
      description:
        "Anivia je šampionka hraná především na středové linii (mid lane). Patří do skupiny mágů, základní útoky má na dálku. Anivia je laskavý okřídlený duch, který při ochraně Freljordu prochází neustálým koloběhem života, smrti a znovuzrození. Tato polobohyně stvořená z nelítostného ledu a mrazivých vichrů neváhá použít sílu živlů k tomu, aby zastavila každého, kdo by se snažil ublížit její zemi. Anivia je průvodkyní a ochránkyní kmenů z drsného severu, jež ji uctívají jako symbol naděje a předzvěst velké změny. Do boje vkládá všechny své síly a ví, že díky její oběti vzpomínka na ni přetrvá, a tak se bude moci znovu zrodit do nového zítřku.",
    },
    {
      name: "Annie",
      nahled: "./images/NahledChamps/nahledannie.jpg",
      skin: "./images/Champs/Annie-Versary.jpg",
      zakladni: "./images/Champs/Annie.jpg",
      nadpis: "TEMNÉ DÍTĚ",
      description:
        "Annie je šampionka hraná především na středové linii (mid lane). Patří do skupiny mágů, základní útoky má na dálku. Annie je sice ještě dítě, ale na svůj věk je vyspělá a velice nebezpečná, vládne totiž ohromnými pyromantskými silami. Dokonce i ve stínu hor severně od Noxu vzbuzují její magické schopnosti velkou pozornost. Její silný vztah k ohni se projevil už v raném věku při různých nepředvídatelných výbuších emocí, časem se však naučila tyto „hravé kousky“ ovládat. Mezi její oblíbené triky patří vyvolání milovaného medvídka Tibberse v podobě ohnivého ochránce. Annie, ztracená v bezmezné nevinnosti dětství, se toulá temnými lesy a neustále hledá někoho, s kým by si mohla hrát.",
    },
    {
      name: "Aphelios",
      nahled: "./images/NahledChamps/nahledaphelios.jpg",
      skin: "./images/Champs/ApheliosNightbringer.jpg",
      zakladni: "./images/Champs/Aphelios.jpg",
      nadpis: "APHELIOS - ZBRAŇ VĚRNÝCH",
      description:
        "Aphelios je šampion hraný především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skupiny střelců, základní útoky má na dálku. Aphelios, který se vynořil ze stínu měsíčního svitu s tasenými zbraněmi, zabíjí nepřátele své víry v zachmuřeném tichu – mluví pouze prostřednictvím jistoty své mušky a výstřelu každé své zbraně. Svou sílu čerpá z jedu, kvůli kterému oněměl, vede ho však jeho sestra Alune. Ta mu ze své vzdálené chrámové svatyně do rukou vkládá arzenál zbraní z měsíčního kamene. Dokud bude Apheliovi svítit měsíc nad hlavou, nebude nikdy sám.",
    },
    {
      name: "Ashe",
      nahled: "./images/NahledChamps/nahledashe.jpg",
      skin: "./images/Champs/AsheProject.jpg",
      zakladni: "./images/Champs/Ashe.jpg",
      nadpis: "ASHE - MRAZIVÁ LUČIŠTNICE",
      description:
        "Ashe je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Ashe, tato Ledorozená vojevůdkyně kmene Avarosanů, velí nejpočetnější hordě z celých severních zemí. Ačkoliv jí role vůdkyně není příliš po chuti, proslula svým klidem, inteligencí a silným vztahem k ideálům. Dokáže čerpat prastarou energii svého rodu, díky čemuž může do boje vyrážet s lukem z pravého ledu. Její lid věří, že je znovuzrozenou mytologickou hrdinkou Avarosou, a Ashe sama doufá, že když se jí podaří obsadit pradávnou zem svého kmene, opět tím sjednotí celý Freljord. ",
    },
    {
      name: "Aurelion Sol",
      nahled: "./images/NahledChamps/nahledaurelion.jpg",
      skin: "./images/Champs/AurelionSolMecha.jpg",
      zakladni: "./images/Champs/AurelionSol.jpg",
      nadpis: "AURELION SOL - STVOŘITEL HVĚZD",
      description:
        "Aurelion Sol je šampion hraný především na středové linii (mid lane). Patří do skupiny mágů, základní útoky má na dálku. Aurelion Sol kdysi zaplňoval nezměrnou kosmickou prázdnotu obdivuhodnými nebeskými tělesy, které sám stvořil. Nyní je však nucen svou moc používat podle rozkazů vesmírné říše, jež ho svými pletichami uvrhla do poddanství. Aurelion Sol je připraven získat zpět svou svobodu, i kdyby to znamenalo z nebe strhnout i tu poslední hvězdu. Jediné, po čem touží, je vrátit se zpět na nebesa a vytvářet nové hvězdy.",
    },
    {
      name: "Azir",
      nahled: "./images/NahledChamps/nahledazir.jpg",
      skin: "./images/Champs/AzirElderwood.jpg",
      zakladni: "./images/Champs/Azir.jpg",
      nadpis: "AZIR - PÍSEČNÝ CÍSAŘ",
      description:
        "Azir je šampion hraný především na středové linii (mid). Patří do skupiny mágů, základní útoky má na dálku. Azir byl kdysi smrtelníkem a vládnoucím císařem Shurimy. Byl pyšným mužem, který stál až na samotném prahu nesmrtelnosti. Byl však kvůli své pýše zrazen a zavražděn ve chvíli svého největšího triumfu. Nyní, o několik tisíciletí později, byl znovuzrozen jako Vyzdvižená bytost třímající nezměrnou moc. Jeho město nyní znovu povstalo z písku a Azir hodlá Shurimě navrátit její zašlou slávu.",
    },
    {
      name: "Bard",
      nahled: "./images/NahledChamps/nahledbard.jpg",
      skin: "./images/Champs/BardAstronaut.jpg",
      zakladni: "./images/Champs/Bard.jpg",
      nadpis: "BARD - POTULNÝ OPATROVNÍK",
      description:
        "Bard je šampion hraný především na spodní linii (bottom lane). Patří do skupiny supportů (podpory), základní útoky má na dálku. Bard, tento mezihvězdný poutník, je vyslancem osudu, jenž bojuje za zachování rovnováhy všude tam, kde život dokáže odolat nástrahám chaosu. Mnozí obyvatelé Runeterry zpívají písně, jež se snaží odhalit pravou podstatu jeho tajemného původu, všichni se však shodují na tom, že tohoto kosmického tuláka přitahují artefakty nabité velkou magickou silou. Činy, které Bard koná za rozjásaného doprovodu svých nápomocných mipů, lze jen těžko považovat za napomáhání zlu. Vždycky slouží výhradně většímu dobru... svým vlastním, zvláštním způsobem.",
    },
    {
      name: "Blitzcrank",
      nahled: "./images/NahledChamps/nahledblitzcrank.jpg",
      skin: "./images/Champs/BlitzcrankGoalkeeper.jpg",
      zakladni: "./images/Champs/Blitzcrank.jpg",
      nadpis: "BLITZCRANK - VELKÝ PARNÍ GOLEM",
      description:
        "Blitzcrank je šampion hraný především na spodní linii (bottom lane), hraný na roli podpory (support). Patří do skupiny tanků, základní útoky má na blízko. Blitzcrank je obří, téměř nezničitelný automaton ze Zaunu, který byl původně stvořen k tomu, aby se staral o likvidaci nebezpečného odpadu. Svůj prvotní účel však považoval za příliš svazující, a tak sám sebe upravil tak, aby mohl co nejlépe sloužit křehkým lidem z Jímky. Blitzcrank zcela nezištně využívá svou sílu a odolnost k ochraně druhých a vystřelovací pěstí nebo výboji energie zneškodňuje každého, kdo dělá problémy.",
    },
    {
      name: "Brand",
      nahled: "./images/NahledChamps/nahledbrand.jpg",
      skin: "./images/Champs/BrandArclight.jpg",
      zakladni: "./images/Champs/Brand.jpg",
      nadpis: "BRAND - OHNIVÁ POMSTA",
      description:
        "Brand je šampion hraný především na středové linii (mid lane), ale také na spodní linii v roli supporta. Patří do skupiny mágů, základní útoky má na dálku. Stvoření známé jako Brand kdysi bývalo člověk, Freljorďan jménem Kegan Rodhe. Dnes je jeho existence varováním, co se lidem může stát, když podlehnou svodům nesmírné síly. Kegan pátral po legendárních runách světa. Když se svými společníky jednu nalezli, zradil je a zmocnil se jí sám – a to byl jeho konec. Jeho duše shořela a z jeho těla se stala schránka pro živoucí oheň. Nyní Brand putuje po Valoranu, hledá další runy a přísahá pomstu za křivdy, jež by jen stěží mohl vytrpět i za tucet životů.",
    },
    {
      name: "Braum",
      nahled: "./images/NahledChamps/nahledbraum.jpg",
      skin: "./images/Champs/BraumSanta.jpg",
      zakladni: "./images/Champs/Braum.jpg",
      nadpis: "BRAUM - SRDCE FRELJORDU",
      description:
        "Braum je šampion hraný především na spodní linii (bottom lane), na roli podpory (support). Patří do skupiny supportů, základní útoky má na blízko. Braum je milovaným freljordským hrdinou, který je obdařen ohromnými svaly a ještě větším srdcem. V každé taverně severně od Mrazivé Tvrze oslavují hosté nad medovinou jeho legendární sílu, díky níž údajně dokázal během jediné noci pokácet dubový les a celou horu rozdrtit na štěrk. S magickými dveřmi od pokladnice, které s sebou nosí jako štít, bloumá Braum zmrzlým severem, a kam se hne, tam s ním jde i jeho kníratý úsměv, jenž si svou silou v ničem nezadá s jeho svaly. Je-li někdo skutečným přítelem lidí v nouzi, je to právě on.",
    },
    {
      name: "Caitlyn",
      nahled: "./images/NahledChamps/nahledcaitlyn.jpg",
      skin: "./images/Champs/CaitlynHeadhunter.jpg",
      zakladni: "./images/Champs/Caitlyn.jpg",
      nadpis: "CAITLYN - ŠERIFKA Z PILTOVERU",
      description:
        "Caitlyn je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Caitlyn je proslulá strážkyně pořádku. V celém Piltoveru se nenajde nikdo, kdo by dokázal zbavovat město zákeřných kriminálníků tak efektivně jako ona. Často spolupracuje s Vi a snaží se této své zbrklé parťačce vtlouct do hlavy alespoň trochu rozvahy. Ačkoliv nikdy neudělá ani krok bez své unikátní magitechnické pušky, nejsilnější Caitlyninou zbraní je břitký intelekt, díky kterému dokáže nastražovat záludné léčky na všechny padouchy, kteří jsou tak hloupí, že se rozhodnou porušovat zákony ve Městě pokroku.",
    },
    {
      name: "Camille",
      nahled: "./images/NahledChamps/nahledcamille.jpg",
      skin: "./images/Champs/CamilleCoven.jpg",
      zakladni: "./images/Champs/Camille.jpg",
      nadpis: "CAMILLE - OCELOVÝ STÍN",
      description:
        "Camille je šampionka hraná především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Vrchní ochránkyně klanu Ferrosů Camille je elegantní a elitní agentka, která díky své nestandardní výzbroji dokáže operovat mimo běžné hranice zákona. Jejím hlavním úkolem je zajistit, aby se soukolí Piltoveru a jeho zaunských útrob hladce otáčela. Sama je proslulá svou adaptabilitou a přesností; jakoukoliv známku nešikovnosti považuje za pohanu, kterou je zapotřebí napravit. Mysl má Camille ostrou jako čepele, jimiž je vyzbrojena, ale její snaha o dosažení dokonalosti prostřednictvím magitechnických vylepšení v mnohých vyvolává otázky, zda již není víc strojem než člověkem.",
    },
    {
      name: "Cassiopeia",
      nahled: "./images/NahledChamps/nahledcassiopeia.jpg",
      skin: "./images/Champs/CassiopeiaSpiritBlossom.jpg",
      zakladni: "./images/Champs/Cassiopeia.jpg",
      nadpis: "CASSIOPEIA - HADÍ OBJETÍ",
      description:
        "Cassiopeia je šampionka hraná především na středové linii (mid lane). Patří do skupiny mágů, základní útoky má na dálku. Cassiopeia je smrtící tvor, jenž podrobuje ostatní své zákeřné vůli. Tato nejmladší a nejkrásnější dcera noxijského rodu Du Couteau se vydala pátrat hluboko do krypt pod shurimskou pouští po starodávné moci. Tam ji pokousal hrůzostrašný strážce hrobky, jehož jed ji přeměnil na plazího predátora. Lstivá a hbitá Cassiopeia se nyní plíží pod závojem noci a svým děsivým pohledem mění nepřátele na kámen.",
    },
    {
      name: "Corki",
      nahled: "./images/NahledChamps/nahledcorki.jpg",
      skin: "./images/Champs/CorkiDragonwing.jpg",
      zakladni: "./images/Champs/Corki.jpg",
      nadpis: "CORKI - ODVÁŽNÝ BOMBOMETČÍK",
      description:
        "Corki je šampion hraný především na středové linii (mid lane). Patří do skupiny střelců, základní útoky má na dálku. Yordlí pilot Corki zbožňuje především dvě věci: létání a svůj velkolepý knír... a ne nutně v tomto pořadí. Po odchodu z Bandle City se usadil v Piltoveru a zamiloval se do báječných zařízení, které zde nalezl. Svůj život zasvětil vývoji létajících strojů a vede jednotku vzdušné obrany složenou z ostřílených veteránů, která je známá jako Ječící užovky. Corki, jenž dokáže i v té nejzběsilejší mele zachovat chladnou hlavu, střeží oblohu nad svým novým domovem a ještě nikdy se nesetkal s problémem, který by nedokázala vyřešit pořádná salva raket. ",
    },
    {
      name: "Darius",
      nahled: "./images/NahledChamps/nahleddarius.jpg",
      skin: "./images/Champs/DariusDunkmaster.jpg",
      zakladni: "./images/Champs/Darius.jpg",
      nadpis: "DARIUS - PĚST NOXU",
      description:
        "Darius je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Neexistuje žádný výraznější symbol noxijské moci než Darius, tento obávaný a bitvami zocelený vůdce národa. Tento muž z prosté rodiny se postupně vypracoval až k titulu Pěst Noxu a nemilosrdně si prosekává cestu řadami nepřátel své říše – mezi nimiž se často najdou i rodilí Noxijci. Nikdy nepochybuje o správnosti své věci, a jakmile jednou pozvedne svou sekeru, neváhá s ní udeřit, takže ti, kdož se postaví veliteli trifarské legie, nemohou počítat s žádným milosrdenstvím.",
    },
    {
      name: "Diana",
      nahled: "./images/NahledChamps/nahleddiana.jpg",
      skin: "./images/Champs/DianaBattleQueen.jpg",
      zakladni: "./images/Champs/Diana.jpg",
      nadpis: "DIANA - OPOVRŽENÍ MĚSÍCE",
      description:
        "Diana je šampionka hraná především na střední linii (mid lane). Patří do skupiny bojovníků, základní útoky má na blízko. Diana se svou půlměsícovitou čepelí bojuje jako válečník Lunari, téměř potlačeného náboženství v krajích kolem hory Targon. Je oděná ve třpytivé zbroji barvy zimního nočního sněhu a představuje živoucí ztělesnění síly stříbrného měsíce. Jelikož byla Diana prodchnuta esencí Aspektu zpoza impozantního vrcholu Targonu, není už zcela člověkem a snaží se přijít na to, jakou moc a účel má v tomto světě.",
    },
    {
      name: "Draven",
      nahled: "./images/NahledChamps/nahleddraven.jpg",
      skin: "./images/Champs/DravenSoulReaver.jpg",
      zakladni: "./images/Champs/Draven.jpg",
      nadpis: "DRAVEN - SLAVNÝ POPRAVČÍ",
      description:
        "Draven je šampion hraný především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skupiny střelců, základní útoky má na dálku. V Noxu je zvykem, že válečníci známí jako „zúčtovači“ spolu svádějí v arénách krvavé boje, jež jsou zkouškou jejich síly – ovšem žádnému z nich se nikdy nepodařilo dosáhnout takového věhlasu jako Dravenovi. Tento bývalý voják zjistil, že davy zbožňují jeho smysl pro drama i nepřekonatelné kousky, které provádí s rotujícími sekerami. Draven si již nedovede představit život bez toho, že by stavěl na odiv svou namyšlenou dokonalost, a přísahal, že porazí každého, koho bude muset, jen aby se říší dál neslo nadšené provolávání jeho jména.",
    },
    {
      name: "Dr. Mundo",
      nahled: "./images/NahledChamps/nahleddrmundo.jpg",
      skin: "./images/Champs/DrMundoFrozen.jpg",
      zakladni: "./images/Champs/DrMundo.jpg",
      nadpis: "DR. MUNDO - ŠÍLENEC ZE ZAUNU",
      description:
        "Dr. Mundo je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Dr. Mundo, dokonale šílený, děsivě fialový a se zarputile vražednými sklony, je přesně ten důvod, proč mnozí občané Zaunu nevycházejí v obzvláště temných nocích na ulici. Zdá se, že tato jednoslabičná ohavnost netouží po ničem jiném než po bolesti – ať už ji má působit jiným, anebo naopak. Mundo nosí svůj obrovský sekáček na maso, jako by byl lehký jako pírko, a je nechvalně proslulý tím, že unesl a mučil desítky obyvatel Zaunu kvůli své nekalé „práci“, ačkoliv není jasné, jestli tím vůbec sleduje nějaký cíl. Je brutální. Je nepředvídatelný. Jde, kam on chce. A také to, technicky vzato, ve skutečnosti není doktor.",
    },
    {
      name: "Ekko",
      nahled: "./images/NahledChamps/nahledekko.jpg",
      skin: "./images/Champs/EkkoProject.jpg",
      zakladni: "./images/Champs/Ekko.jpg",
      nadpis: "EKKO - MLADIČKÝ PÁN STŘÍPKŮ ČASU",
      description:
        "Ekko je šampion hraný především na středové linii (mid lane) nebo v džungli. Patří do skupiny zabijáků, základní útoky má na blízko. Zázračný mladík Ekko, jenž vyrostl v drsných ulicích Zaunu, dokáže obratným manipulováním s časem vytěžit z každé situace maximum. Pomocí vlastního vynálezu, takzvaného Z-pohonu, prozkoumává rozvětvující se možnosti reality, aby vytvořil naprosto dokonalý okamžik. Ačkoliv si nade vše cení vlastní svobody, jakmile se jeho přátelé ocitnou v nebezpečí, neváhá udělat cokoliv, jen aby je ochránil. Kdo Ekka nezná, tomu se zdá, že se mu každý z jeho zdánlivě nemožných kousků podaří hned napoprvé.",
    },
    {
      name: "Elise",
      nahled: "./images/NahledChamps/nahledelise.jpg",
      skin: "./images/Champs/EliseBewitching.jpg",
      zakladni: "./images/Champs/Elise.jpg",
      nadpis: "ELISE - KRÁLOVNA PAVOUKŮ",
      description:
        "Elise je šampionka hraná především v džungli. Patří do skupiny mágů. Elise má dvě formy - formu lidskou a formu pavouka. Základní útoky v lidské formě má na dálku a ve formě pavouka na blízko. Elise je vražedný dravec, který sídlí hluboko v nejstarším noxijském městě, v temném paláci, kam nepronikne ani paprsek světla. Kdysi bývala smrtelnicí, hlavou mocného rodu, ale kousnutí zákeřného pavoučího poloboha ji přeměnilo v cosi krásného, avšak zcela nelidského – pavoučí stvůru, která láká nic netušící kořist do své sítě. Aby si zachovala věčné mládí, hoduje Elise na tělech naivních lidí bez špetky víry, a jen málokdo dokáže jejím svodům odolat.",
    },
    {
      name: "Evelynn",
      nahled: "./images/NahledChamps/nahledevelynn.jpg",
      skin: "./images/Champs/EvelynnKDA.jpg",
      zakladni: "./images/Champs/Evelynn.jpg",
      nadpis: "EVELYNN - NÁRUČ UTRPENÍ",
      description:
        "Evelynn je šampionka hraná především v džungli. Patří do skupiny zabijáků, základní útoky má na blízko. V temných zákoutích Runeterry pátrá démonka Evelynn po své další oběti. Nejprve kořist naláká na svou svůdnou masku lidské ženy, a jakmile daný nešťastník jejímu mámení podlehne, ukáže se Evelynn ve své pravé podobě. Poté smrtelníka podrobí nevýslovnému mučení a vychutnává si jeho bolest. Sama démonka to vše považuje jen za nevinnou zábavu. Pro zbytek Runeterry to jsou děsivé příběhy o pokřiveném chtíči a hrůznou připomínkou ceny, která se platí za nezřízenou touhu. ",
    },
    {
      name: "Ezreal",
      nahled: "./images/NahledChamps/nahledezreal.jpg",
      skin: "./images/Champs/EzrealSG.jpg",
      zakladni: "./images/Champs/Ezreal.jpg",
      nadpis: "EZREAL - BEZSTAROSTNÝ PRŮZKUMNÍK",
      description:
        "Ezreal je šampion hraný především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skupiny střelců, základní útoky má na dálku. Ezreal, švihácký dobrodruh nevědomky obdařený magickým uměním, zkoumá dávno ztracené katakomby, zaplétá se do starověkých kleteb a snadno překonává zdánlivě nemožné. Jeho odvaha a siláctví neznají meze a on sám raději v každé situaci improvizuje, přičemž se zčásti spoléhá na svůj ostrovtip, ale většinou na svou bájnou shurimskou rukavici, ze které vysílá výboje ničivé mystické energie. Jedna věc je jistá – ať už je Ezreal kdekoliv, potíže má vždy v patách. Nebo před sebou. Nejčastěji ale všude kolem.",
    },
    {
      name: "Fiddlesticks",
      nahled: "./images/NahledChamps/nahledfiddle.jpg",
      skin: "./images/Champs/FiddlesticksSurprise.jpg",
      zakladni: "./images/Champs/Fiddlesticks.jpg",
      nadpis: "FIDDLESTICKS - PRASTARÉ ZLO",
      description:
        "Fiddlesticks je šampion hraný především v džungli. Patří do skupiny mágů, základní útoky má na dálku. Na Runeterře se něco probudilo. Něco pradávného. Něco strašlivého. Bezvěká hrůza známá jako Fiddlesticks číhá na okraji společnosti smrtelníků. Přitahují ji oblasti plné strachu, kde hoduje na vyděšených obětech. Tento otrhaný tvor složený ze všeho možného nosí zubatou kosu, kterou sklízí samotný strach, a tříští na kousky mysl nešťastníků, kteří jeho řádění přežijí. Střez se zvuku vran a šepotu postavy, která vypadá téměř lidsky... Fiddlesticks se vrátil.",
    },
    {
      name: "Fiora",
      nahled: "./images/NahledChamps/nahledfiora.jpg",
      skin: "./images/Champs/FioraPoolParty.jpg",
      zakladni: "./images/Champs/Fiora.jpg",
      nadpis: "FIORA - MOCNÁ DUELISTKA",
      description:
        "Fiora je šampionka hraná především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Fiora, nejobávanější duelistka v celém Valoranu, je stejně proslulá svou úsečnou povahou a vychytralostí jako rychlostí svého rapíru z modré oceli. Narodila se v rodu Laurentů v království Demacie a správu nad rodinou převzala po svém otci po skandálu, který je málem zničil. Pověst rodu Laurentů byla v troskách, ale Fiora své veškeré úsilí napřímila k tomu, aby rodině vrátila čest a její právoplatné místo mezi velkými a dobrými rody Demacie.",
    },
    {
      name: "Fizz",
      nahled: "./images/NahledChamps/nahledfizz.jpg",
      skin: "./images/Champs/FizzFisherman.jpg",
      zakladni: "./images/Champs/Fizz.jpg",
      nadpis: "FIZZ - MOŘSKÝ PODĚS",
      description:
        "Fizz je šampion hraný především na středové linii (mid lane). Patří do skupiny zabijáků, základní útoky má na blízko. Fizz je obojživelný yordl, jenž žije mezi útesy lemujícími Bilgewater. Často z moře loví obětiny, které do něj házejí pověrčiví kapitáni, a zase jim je vrací. Ovšem i ti nejzkušenější námořníci vědí, že není radno si s ním zahrávat – v přístavech se vypráví nejeden příběh o chudácích, kteří tohoto drobného, nepolapitelného taškáře podcenili. Občas bývá omylem považován za nějakého nevyzpytatelného oceánského ducha, dokáže totiž ovládat obří hladové tvory z hlubin a s radostí si utahuje ze spojenců i nepřátel.",
    },
    {
      name: "Galio",
      nahled: "./images/NahledChamps/nahledgalio.jpg",
      skin: "./images/Champs/GalioBirdio.jpg",
      zakladni: "./images/Champs/Galio.jpg",
      nadpis: "GALIO - KOLOS",
      description:
        "Galio je šampion hraný především na středové linii (mid lane). Patří do skupiny tanků, základní útoky má na blízko. Před zářivým městem jménem Demacie stojí na bdělé stráži kamenný kolos Galio. Byl vytvořen na ochranu proti nepřátelským mágům a často stojí nehnutě celá desetiletí, dokud jej nepřivede k životu přítomnost mocných kouzel. Čas, který má k dispozici, se Galio snaží využít co nejvíce a plnými doušky si vychutnává žár bitvy a onu vzácnou poctu, že může bránit obyvatele své země. Jeho vítězství však mají vždy trpkou pachuť, jelikož magie, kterou zničí, je také zdrojem jeho života, a kdykoliv se dočká triumfu, upadne opět v bezesný spánek.",
    },
    {
      name: "Gangplank",
      nahled: "./images/NahledChamps/nahledgp.jpg",
      skin: "./images/Champs/GangplankSpooky.jpg",
      zakladni: "./images/Champs/Gangplank.jpg",
      nadpis: "GANGPLANK - ZHOUBA MOŘÍ",
      description:
        "Gangplank je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Nevyzpytatelný a krvelačný král pirátů Gangplank, jenž nedobrovolně přišel o svůj trůn, nahání hrůzu všem široko daleko. Kdysi vládl přístavnímu městu Bilgewater, a ačkoliv jeho panování již skončilo, podle názoru některých lidí je od té doby ještě nebezpečnější než dříve. Gangplank by raději viděl Bilgewater zalitý krví, než aby se jej zmocnil někdo jiný – a nyní je odhodlán s pomocí pistole, šavle a sudů se střelným prachem získat to, co dříve ztratil.",
    },
    {
      name: "Garen",
      nahled: "./images/NahledChamps/nahledgaren.jpg",
      skin: "./images/Champs/GarenGodKing.jpg",
      zakladni: "./images/Champs/Garen.jpg",
      nadpis: "GAREN - MOC DEMACIE",
      description:
        "Garen je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Hrdý a vznešený válečník Garen je jedním z bojovníků Neohrožené gardy. Mezi svými kolegy se těší velké oblibě a i nepřátelé k němu vzhlížejí s nemalým respektem – když už nic jiného, tak jako k potomkovi slavného rodu Korunní stráže, jehož úkolem je chránit Demacii a její ideály. Ve své zbroji odolné vůči magii a s obřím mečem v rukou je Garen připraven postavit se na bojišti všem čarodějům a černokněžníkům v ničivém víru poctivé oceli.",
    },
    {
      name: "Gnar",
      nahled: "./images/NahledChamps/nahledgnar.jpg",
      skin: "./images/Champs/GnarAstronaut.jpg",
      zakladni: "./images/Champs/Gnar.jpg",
      nadpis: "GNAR - CHYBĚJÍCÍ ČLÁNEK",
      description:
        "Gnar je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků. Má dvě formy - mini formu a mega formu. V mini formě má základní útoky na dálku, v mega formě na blízko. Gnar je starověký yordl, jehož hravé skopičiny se mohou během okamžiku změnit v dětinský záchvat vzteku, při kterém se přemění na ohromnou stvůru lačnící po ničení. Celá tisíciletí strávil tento zvědavý tvoreček zamrzlý v pravém ledu, ale teď se osvobodil a skotačí po světě, který se od základů změnil a jejž považuje za plný krás a divů. Když se ocitne v ohrožení, metá Gnar po nepřátelích vše, co mu přijde pod ruku, ať už to je jeho bumerang vyřezaný z obřího klu, nebo nedaleká budova.",
    },
    {
      name: "Gragas",
      nahled: "./images/NahledChamps/nahledgragas.jpg",
      skin: "./images/Champs/GragasOktoberfest.jpg",
      zakladni: "./images/Champs/Gragas.jpg",
      nadpis: "GRAGAS - PODNĚCOVAČ MAS",
      description:
        "Gragas je šampion hraný v džungli, na horní a středové linii a dokonce na spodní linii jako podpora (support). Patří do skupiny bojovníků, základní útoky má na blízko. Žoviální a zároveň impozantní Gragas je mohutný, grobiánský sládek, který putuje světem ve snaze uvařit dokonalé pivo. Nikdo neví, odkud pochází, ale nyní bloumá divokými pustinami Freljordu, hledá vzácné ingredience a při tom zkouší každý recept, který se mu dostane do rukou. Jelikož je velice impulzivní a často pod parou, proslul rozpoutáváním rvaček, jež často končí celonočními veselicemi a nezanedbatelnými škodami na majetku. Kdekoliv se Gragas objeví, tam co nevidět dorazí popíjení a zkáza – přesně v tomto pořadí. ",
    },
    {
      name: "Graves",
      nahled: "./images/NahledChamps/nahledgraves.jpg",
      skin: "./images/Champs/GravesPoolParty.jpg",
      zakladni: "./images/Champs/Graves.jpg",
      nadpis: "GRAVES - PSANEC",
      description:
        "Graves je šampion hraný především v džungli. Patří do skupiny střelců, základní útoky má na dálku. Malcolm Graves je věhlasný žoldnéř, karbaník a zloděj. Na jeho hlavu je vypsaná odměna v každém městě či říši, do kterých kdy zavítal. Navzdory své výbušné povaze má silný smysl pro zločineckou čest, kterou často vynucuje pomocí své dvouhlavňové brokovnice jménem Osud. Před několika lety obnovil těžce zkoušené partnerství s Twisted Fatem a společně se jim v bilgewaterském podsvětí podařilo najít opět slušnou obživu.",
    },
    {
      name: "Gwen",
      nahled: "./images/NahledChamps/nahledgwen.jpg",
      skin: "./images/Champs/GwenSpaceGroove.jpg",
      zakladni: "./images/Champs/Gwen.jpg",
      nadpis: "GWEN - POSVÁTNÁ ŠVADLENA",
      description:
        "Gwen je šampionka hraná především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Gwen je bývalá panenka, kterou proměnila a oživila magie, a používá ty samé nástroje, které kdysi stvořily ji samotnou. Na každém kroku s sebou nese břímě lásky své stvořitelky a nic nebere jako samozřejmost. Velí Posvátné mlze, prastaré ochranné magii, která požehnala Gweniny nůžky, jehly a přízi. Skoro vše je pro ni nové, ale Gwen si zachovává radostné odhodlání a chce bojovat za dobro, které přežívá v rozbitém světě.",
    },
    {
      name: "Hecarim",
      nahled: "./images/NahledChamps/nahledhecarim.jpg",
      skin: "./images/Champs/HecarimCosmic.jpg",
      zakladni: "./images/Champs/Hecarim.jpg",
      nadpis: "HECARIM - STÍN VÁLKY",
      description:
        "Hecarim je šampion hraný především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Hecarim je přízračným spojením člověka a zvířete. Jeho prokletím je až do skonání světa pronásledovat duše živých. Když Požehnané ostrovy pohltil stín, zahubila drtivá energie Zničení tohoto hrdého rytíře i s celou jeho kavalerií a všemi oři. Kdykoliv se nyní rozprostře Černá mlha po Runeterře, vede ničivý výpad nehmotné jízdy a vyžívá se v krveprolití a v tom, jak pod jeho okovanými kopyty křupou kosti nepřátel.",
    },
    {
      name: "Heimerdinger",
      nahled: "./images/NahledChamps/nahledheimer.jpg",
      skin: "./images/Champs/HeimerdingerDragonTrainer.jpg",
      zakladni: "./images/Champs/Heimerdinger.jpg",
      nadpis: "HEIMERDINGER - VZNEŠENÝ VYNÁLEZCE",
      description:
        "Heimerdinger je šampion hraný především na středové linii (mid lane). Patří do skupiny mágů, základní útoky má na dálku. Geniální, byť poněkud výstřední yordlí profesor Cecil B. Heimerdinger je považován za jednoho z nejbrilantnějších vynálezců v dějinách Piltoveru. Ke své práci přistupuje se zápalem hraničícím až s neurotickou posedlostí a s nadšením hledá odpovědi na ty nejzapeklitější otázky vesmíru. Ačkoliv bývají Heimerdingerovy teorie složité a těžko pochopitelné, pocházejí z jeho dílny jedny z nejúžasnějších (a nejvražednějších) strojů, které Piltover kdy spatřil. Je také známý tím, že se ve svých vynálezech neustále šťourá, aby byly ještě efektivnější.",
    },
    {
      name: "Cho'Gath",
      nahled: "./images/NahledChamps/nahledchogath.jpg",
      skin: "./images/Champs/ChogathShanHai.jpg",
      zakladni: "./images/Champs/Chogath.jpg",
      nadpis: "CHO'GATH - HRŮZA Z PRÁZDNOTY",
      description:
        "Cho'Gath je šampion hraný především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízko. Od okamžiku, kdy se Cho'Gath poprvé zjevil pod nemilosrdným světlem runeterrského slunce, jej stravuje ryzí a zcela neukojitelný hlad. Cho'Gath je dokonalým zosobněním touhy Prázdnoty po pohlcení veškerého života – veškerou hmotu, kterou pozře, dokáže jeho komplexní metabolismus zakomponovat do vlastního těla, čímž se zvyšuje jak množství a hustota jeho svalové hmoty, tak i síla vnějšího krunýře pevného jako organický diamant. Když se tento zplozenec Prázdnoty rozhodne, že už nechce dál růst, vyzvrátí přebytečný materiál v podobě ostnů ostrých jako břitva, jimiž probodne svou oběť a připraví si ji na pozdější hostinu.",
    },
    {
      name: "Illaoi",
      nahled: "./images/NahledChamps/nahledillaoi.jpg",
      skin: "./images/Champs/IllaoiResistance.jpg",
      zakladni: "./images/Champs/Illaoi.jpg",
      nadpis: "ILLAOI - KRAKENOVA KNĚŽKA",
      description:
        "Illaoi je šampionka hraná především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Illaoinu mocnou stavbu těla by dokázala překonat jen její nezdolná víra. Coby kněžka Velkého krakena pomocí obrovské zlaté modly vytrhává duše z těl svých nepřátel a drtí jejich vnímání reality. Všichni, kteří vyzvou „Pravdonošku Nagakabouros“, záhy zjistí, že Illaoi nikdy nebojuje sama – bohyně Hadích ostrovů jí vždy stojí po boku.",
    },
    {
      name: "Irelia",
      nahled: "./images/NahledChamps/nahledirelia.jpg",
      skin: "./images/Champs/IreliaAviator.jpg",
      zakladni: "./images/Champs/Irelia.jpg",
      nadpis: "IRELIA - TANEČNICE S ČEPELEMI",
      description:
        "Irelia je šampionka hraná především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Během noxijské okupace se v Ionii zrodilo mnoho hrdinů, ovšem žádný z nich nebyl tak nečekaný jako mladá Irelia z Navori. Původně se cvičila v prastarém tanečním umění svého lidu, které pak přizpůsobila válce a svými ladnými a pečlivě natrénovanými pohyby ovládala sadu létajících vražedných dýk. Poté, co prokázala své bojové schopnosti, se nevolky stala vůdkyní a hlavní tváří celého odboje. A ani ubíhající roky neotupily její odhodlání chránit svou vlast.",
    },
    {
      name: "Ivern",
      nahled: "./images/NahledChamps/nahledivern.jpg",
      skin: "./images/Champs/IvernCandyKing.jpg",
      zakladni: "./images/Champs/Ivern.jpg",
      nadpis: "IVERN - OTEC ZELENĚ",
      description:
        "Ivern je šampion hraný především v džungli. Patří do skupiny podpory (supportů), základní útoky má na dálku. Ivern Stromonožka, známý také jako Otec zeleně, je napůl člověkem a napůl stromem a toulá se po lesích Runeterry, kde pečuje o život všude, kudy kráčí. Zná tajemství přírodního světa a je dobrým přítelem všeho, co roste, létá a běhá. Ivern se toulá divočinou a předává podivnou moudrost každému, koho potká. Obohacuje lesy a příležitostně svěřuje upovídaným motýlům svá tajemství.",
    },
    {
      name: "Janna",
      nahled: "./images/NahledChamps/nahledjanna.jpg",
      skin: "./images/Champs/JannaForecast.jpg",
      zakladni: "./images/Champs/Janna.jpg",
      nadpis: "JANNA - HNĚV BOUŘE",
      description:
        "Janna je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Janna, ozbrojená mocí runeterrských vichřic, je záhadný duch živlu větru, který chrání nemajetné obyvatele Zaunu. Někteří se domnívají, že ji k životu přivedly prosby runeterrských námořníků, kteří se modlili za dobrý vítr, když proplouvali zrádnými vodami a drsnými bouřemi. Na její přízeň a ochranu se od té doby odvolávali lidé v hlubinách Zaunu, kde se Janna stala světélkem naděje pro lidi v nesnázích. Nikdo neví, kdy a kde se objeví, ale většinou na pomoc přijde.",
    },
    {
      name: "Jarvan IV.",
      nahled: "./images/NahledChamps/nahledjarvan.jpg",
      skin: "./images/Champs/JarvanIVHextech.jpg",
      zakladni: "./images/Champs/JarvanIV.jpg",
      nadpis: "JARVAN IV. - VZOR DEMACIE",
      description:
        "Jarvan IV. je šampion hraný především v džungli. Patří do skupiny tanků, základní útoky má na blízko. Princ Jarvan, potomek dynastie Lightshieldů, je následníkem demacijského trůnu. Byl vychován tak, aby se stal ztělesněním těch nejcennějších ctností celého národa, a musí najít rovnováhu mezi nesmírnými očekáváními, jež jsou naložena na jeho bedra, a vlastní touhou bojovat v první linii. Jarvan povzbuzuje okolní vojáky svou hrůzu budící odvahou a nesobeckým odhodláním, s nimiž dělá čest svému rodu a jež vypovídají o jeho pravé síle a přirozené schopnosti vést lid.",
    },
    {
      name: "Jax",
      nahled: "./images/NahledChamps/nahledjax.jpg",
      skin: "./images/Champs/JaxPax.jpg",
      zakladni: "./images/Champs/Jax.jpg",
      nadpis: "JAX - VELMISTR ZBRANÍ",
      description:
        "Jax je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Jax je posledním známým mistrem zbraní z Ikacie. Nemá sobě rovného jak v dovedném nakládání s neobvyklou výzbrojí, tak v jedovatém sarkasmu. Poté, co jeho domovina na sebe přivolala ve své pýše zkázu otevřením brány do Prázdnoty, Jax a jeho společníci se zapřisáhli, že budou chránit to málo, co z jejich země zbylo. Jak ovšem nyní magie ve světě sílí, tato dřímající hrozba se opět probouzí a Jax putuje Valoranem s posledním světlem Ikacie a zkouší všechny válečníky, které potká, zda jsou dostatečně silní, aby mohli stát po jeho boku...",
    },
    {
      name: "Jayce",
      nahled: "./images/NahledChamps/nahledjayce.jpg",
      skin: "./images/Champs/JayceDebonair.jpg",
      zakladni: "./images/Champs/Jayce.jpg",
      nadpis: "JAYCE - OBRÁNCE ZÍTŘKA",
      description:
        "Jayce je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na dálku. Jayce je geniální vynálezce, který celý svůj život zasvětil obraně Piltoveru a jeho snaze o neustálý pokrok. Se svým modifikovatelným kladivem v rukou vynakládá veškerou svou sílu, odvahu a nezanedbatelnou inteligenci, aby bylo jeho město v bezpečí. Všeobecně je sice považován za hrdinu, ale jen s nelibostí nese pozornost, kterou tak k sobě přitahuje. Srdce má ovšem na pravém místě a i ti, kdo mu závidí jeho vrozený talent, mu jsou vděčni na to, že chrání Město pokroku.",
    },
    {
      name: "Jhin",
      nahled: "./images/NahledChamps/nahledjhin.jpg",
      skin: "./images/Champs/JhinProject.jpg",
      zakladni: "./images/Champs/Jhin.jpg",
      nadpis: "JHIN - VIRTUÓZ",
      description:
        "Jhin je šampion hraný především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skupiny střelců, základní útoky má na dálku. Jhin je úzkostlivě pečlivý zločinecký psychopat, který považuje vraždění za umění. Kdysi byl ionským zajatcem, ale osvobodily ho tajemné síly z ionské vládnoucí rady, takže tento masový vrah nyní tomuto spolku slouží jako nájemný zabiják. Jhin považuje svou zbraň za štětec, s jehož pomocí vytváří brutální umělecká díla složená z nemilosrdně zmasakrovaných obětí a bezmocných přihlížejících. Z rozehrání svého zvráceného divadla čerpá kruté potěšení. Díky tomu představuje dokonalou volbu pro případy, kde je třeba vyvolat ten nejsilnější dojem: hrůzu.",
    },
    {
      name: "Jinx",
      nahled: "./images/NahledChamps/nahledjinx.jpg",
      skin: "./images/Champs/JinxAmbitiousElf.jpg",
      zakladni: "./images/Champs/Jinx.jpg",
      nadpis: "JINX - UTRŽENÁ ZE ŘETĚZU",
      description:
        "Jinx je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skupiny střelců, základní útoky má na dálku. Jinx, maniakální a impulzivní zločinec ze Zaunu, celý život páchá spoušť bez ohledu na následky. Díky svému arzenálu smrtících zbraní dokáže způsobit ty nejsilnější výbuchy a nejhlasitější otřesy, které v jejích šlépějích zanechávají zmatek a paniku. Jinx nesnáší nudu, a ať už kráčí kamkoliv, mileráda s sebou přináší vlastní chaotické pandemonium.",
    },
    {
      name: "Kai'Sa",
      nahled: "./images/NahledChamps/nahledkaisa.jpg",
      skin: "./images/Champs/KaisaKDA.jpg",
      zakladni: "./images/Champs/Kaisa.jpg",
      nadpis: "KAI'SA - DCERA PRÁZDNOTY",
      description:
        "Kai'Sa je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skupiny střelců, základní útoky má na dálku. Kai'Sa, kterou Prázdnota pohltila, když byla sotva ještě dítě, dokázala přežít díky prosté houževnatosti a síle vůle. Její zkušenosti z ní učinily smrtící lovkyni a podle některých i posla budoucnosti, které by se raději nedožili. Jelikož navázala nelehký symbiotický vztah s živoucím krunýřem z Prázdnoty, brzy nadejde čas, kdy se bude muset rozhodnout, jestli odpustí těm smrtelníkům, kteří ji považují za zrůdu, a vyrazí s nimi proti blížící se temnotě společně... anebo zda prostě zapomene a nechá Prázdnotu pohltit svět, který se k ní otočil zády.",
    },
    {
      name: "Kalista",
      nahled: "./images/NahledChamps/nahledkalista.jpg",
      skin: "./images/Champs/KalistaMarauder.jpg",
      zakladni: "./images/Champs/Kalista.jpg",
      nadpis: "KALISTA - OŠTĚP POMSTY",
      description:
        "Kalista je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skupiny střelců, základní útoky má na dálku. Kalista, přízrak hněvu a odplaty, je nehynoucí duch pomsty, ozbrojená noční můra povolaná ze Stínových ostrovů, aby lovila podvodníky a zrádce. Zrazení lidé se mohou krví dovolávat pomsty, ale Kalista odpovídá pouze těm, již jsou ochotní zaplatit svou vlastní duší. Na koho Kalista zaměří svůj hněv, ten by měl urychleně vypořádat všechny své záležitosti, neboť úmluvy uzavřené s tímto pochmurným lovcem mohou skončit pouze chladnou palbou jejích přízračných oštěpů.",
    },
    {
      name: "Karma",
      nahled: "./images/NahledChamps/nahledkarma.jpg",
      skin: "./images/Champs/KarmaOdyssey.jpg",
      zakladni: "./images/Champs/Karma.jpg",
      nadpis: "KARMA - OSVÍCENÁ",
      description:
        "Karma je šampionka hraná především na spodní linii na roli podpory (supporta), nebo na horní linii (top lane). Patří do skupiny mágů, základní útoky má na dálku. Žádný smrtelník není lepším ztělesněním duchovních tradic Ionie než Karma. Je živoucím vtělením bezpočtukrát znovuzrozené duše, jež si do každého nového života přenáší veškeré své dřívější vzpomínky, a navíc je požehnaná mocí, kterou dokáže pochopit jen málokdo. Udělala vše, co bylo v jejích silách, aby provedla svůj lid nedávným těžkým obdobím, ale uvědomuje si, že za mír a harmonii možná bude muset zaplatit vysokou cenu – jak ona sama, tak i země, která je jejímu srdci nejdražší.",
    },
    {
      name: "Karthus",
      nahled: "./images/NahledChamps/nahledkarthus.jpg",
      skin: "./images/Champs/KarthusGrimReaper.jpg",
      zakladni: "./images/Champs/Karthus.jpg",
      nadpis: "KARTHUS - SMRTONOŠ",
      description:
        "Karthus je šampion hraný především v džungli nebo na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Herald zapomnění Karthus je nesmrtelným duchem, jehož děsivé písně jsou jen předehrou k hrůzám, které šíří všude, kde se objeví. Živým nahání stav neživota strach, ovšem Karthus v něm vidí pouze krásu a čistotu, dokonalé spojení života a smrti. Vydává se ze Stínových ostrovů do okolního světa a v roli apoštola smrti přináší smrtelníkům radosti záhrobí.",
    },
    {
      name: "Kassadin",
      nahled: "./images/NahledChamps/nahledkassadin.jpg",
      skin: "./images/Champs/KassadinHextech.jpg",
      zakladni: "./images/Champs/Kassadin.jpg",
      nadpis: "KASSADIN - POUTNÍK Z PRÁZDNOTY",
      description:
        "Kassadin je šampion hraný především na středové linii (mid lane). Patří do skupiny zabijáků, základní útoky má na blízko. Kassadin, jenž si prosekává ohnivou cestu těmi nejtemnějšími místy světa, ví, že jeho dny jsou sečteny. Jakožto velmi zcestovalý shurimský průvodce a dobrodruh se rozhodl založit rodinu mezi mírumilovnými jižními kmeny – dokud jeho vesnici nepohltila Prázdnota. Přísahal pomstu, a aby se připravil na nadcházející boj, zkombinoval celou řadu magických artefaktů a zakázaných technologií. Nakonec se Kassadin vydal do pustin Ikacie, připraven čelit každému obludnému konstruktu z Prázdnoty, na který narazí během svého pátrání po samozvaném prorokovi Malzaharovi.",
    },
    {
      name: "Katarina",
      nahled: "./images/NahledChamps/nahledkatarina.jpg",
      skin: "./images/Champs/KatarinaDeathSworn.jpg",
      zakladni: "./images/Champs/Katarina.jpg",
      nadpis: "KATARINA - ZLOVĚSTNÁ ČEPEL",
      description:
        "Katarina je šampionka hraná především na středové linii. Patří do skupiny zabijáků, základní útoky má na blízko. Katarina, nejproslulejší noxijská vražedkyně, je rychlá ve svém soudu a naprosto smrtící v boji. Tato nejstarší dcera legendárního generála Du Couteau se proslavila bleskurychlou likvidací nic netušících nepřátel. Ve své spalující ctižádostivosti bez váhání přijímá úkoly na zneškodňování silně chráněných cílů, a to i za cenu ohrožení životů svých spolubojovníků – ovšem ať už má Katarina jakýkoliv úkol, obestře se vírem ozubených dýk a bez váhání splní svou povinnost.",
    },
    {
      name: "Kayle",
      nahled: "./images/NahledChamps/nahledkayle.jpg",
      skin: "./images/Champs/KaylePentakill.jpg",
      zakladni: "./images/Champs/Kayle.jpg",
      nadpis: "KAYLE - SPRAVEDLIVÁ",
      description:
        "Kayle je šampionka hraná především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko, v pozdější fázi hry jsou její základní útoky na dálku. Kayle se narodila jednomu z targonských Aspektů v době, kdy vrcholily runové války, a uctívá matčinu památku tím, že na křídlech z posvátného ohně bojuje za spravedlnost. Ona a její dvojče Morgana byly dlouhá léta ochránkyněmi Demacie – do doby, než Kayle zklamala opakovaná selhání smrtelníků a rozhodla se toto království nadobro opustit. Nadále se však vyprávějí legendy o tom, jak svými ohnivými meči trestá všechno zlo, a mnozí doufají, že se jednoho dne opět navrátí…",
    },
    {
      name: "Kayn",
      nahled: "./images/NahledChamps/nahledkayn.jpg",
      skin: "./images/Champs/KaynOdyssey.jpg",
      zakladni: "./images/Champs/Kayn.jpg",
      nadpis: "KAYN - VRAŽDÍCÍ STÍN",
      description:
        "Kayn je šampion hraný především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Shieda Kayn vládne smrtící stínovou magií a snaží se naplnit svůj pravý osud – dovést Stínový řád do nové éry, ve které bude vládnout celé Ionii. V rukou třímá Rhaasta, živoucí zbraň darkinů, a nenechá se od toho zastrašit ani plíživou zhoubou, která se zvolna šíří jeho tělem i myslí. Jsou jen dva možné výsledky: Buď Kayn podrobí zbraň své vůli... nebo si nenávistí prosycená zbraň naopak podmaní jeho, čímž se otevře cesta ke zkáze celé Runeterry.",
    },
    {
      name: "Kennen",
      nahled: "./images/NahledChamps/nahledkennen.jpg",
      skin: "./images/Champs/KennenBloodMoon.jpg",
      zakladni: "./images/Champs/Kennen.jpg",
      nadpis: "KENNEN - SRDCE BOUŘE",
      description:
        "Kennen je šampion hraný především na horní linii (top lane). Patří do skupiny mágů, základní útoky má na dálku. Kennen není pouze bleskově rychlým strážcem ionské rovnováhy, ale také jediným yordlím členem Kinkou. Navzdory své drobné huňaté postavičce se neváhá postavit jakékoliv hrozbě, jíž čelí s vířící bouří šurikenů a bezmezným nadšením. Se svým mistrem Shenem střeží duchovní svět a pomocí ničivé elektrické energie likviduje své nepřátele.",
    },
    {
      name: "Kha'Zix",
      nahled: "./images/NahledChamps/nahledkhazix.jpg",
      skin: "./images/Champs/KhazixOdyssey.jpg",
      zakladni: "./images/Champs/Khazix.jpg",
      nadpis: "KHA'ZIX - PLENITEL Z PRÁZDNOTY",
      description:
        "Kha'Zix je šampion hraný především v džungli. Patří do skupiny zabijáků, základní útoky má na blízko. Prázdnota roste a přizpůsobuje se – a u žádného z jejích myriád zplozenců nejsou tyto pravdy patrnější než u Kha'Zixe. Hlavní silou této mutující hrůzy, jež byla stvořena k přežití a boji proti těm nejsilnějším, je neustálá evoluce. Narazí-li na protivníka, který je nebezpečnější než on, vyvine si účinnější zbraně, s jejichž pomocí svou kořist nakonec zabije. Kha'Zix byl původně nemyslícím zvířetem, jeho inteligence se však zdokonalila stejně jako jeho tělo. Nyní svůj lov podrobně plánuje a dokonce cíleně využívá živelnou hrůzu, kterou v myslích svých obětí vyvolává.",
    },
    {
      name: "Kindred",
      nahled: "./images/NahledChamps/nahledkindred.jpg",
      skin: "./images/Champs/KindredSpiritBlossom.jpg",
      zakladni: "./images/Champs/Kindred.jpg",
      nadpis: "KINDRED - VĚČNÍ LOVCI",
      description:
        "Kindred je šampionka hraná především v džungli. Patří do skupiny střelců, základní útoky má na dálku. Kindred představuje dva aspekty smrti, jež navzdory své rozdílnosti tvoří jeden celek. Oveččin luk přináší rychlý odchod z tohoto světa těm, kteří přijmou svůj osud. Naopak ti, kdo se snaží svému konci uprchnout, přijdou o život krvavým způsobem v ocelovém sevření Vlkových čelistí. Ačkoliv se výklad Kindredovy povahy napříč Runeterrou liší, každý smrtelník si musí zvolit pravou tvář svého skonu.",
    },
    {
      name: "Kled",
      nahled: "./images/NahledChamps/nahledkled.jpg",
      skin: "./images/Champs/KledKledula.jpg",
      zakladni: "./images/Champs/Kled.jpg",
      nadpis: "KLED - HAŠTEŘIVÝ DRAGOUN",
      description:
        "Kled je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Yordl Kled je ztělesněním noxijské zuřivé odvahy, a jak je neohrožený, tak je otravný. Ostatní vojáci říše jej obdivují, důstojníci mu nedůvěřují a šlechtici jím opovrhují. Mnozí tvrdí, že bojoval v každém tažení noxijských legií, že „nasbíral“ všechny vojenské hodnosti a že nikdy neutekl z boje. Věrohodnost takovýchto tvrzení je často poněkud pochybná, ale o jedné části této legendy není sporu: Když jede Kled do bitvy na své nepříliš věrné Skaarl, tvrdě bojuje z plných sil, aby ochránil svůj majetek... a aby se zmocnil všeho, co patří ostatním.",
    },
    {
      name: "Kog'Maw",
      nahled: "./images/NahledChamps/nahledkogmaw.jpg",
      skin: "./images/Champs/KogMawArcanist.jpg",
      zakladni: "./images/Champs/KogMaw.jpg",
      nadpis: "KOG'MAW - CHŘTÁN PROPASTI",
      description:
        "Kog'Maw je šampion hraný především na středové linii nebo spodní linii jako zdroj fyzického či magického poškození. Patří do skupiny střelců, základní útoky má na dálku. Kog'Maw, jehož vyvrhla hnijící trhlina do Prázdnoty v pustinách Ikacie, je zvídavý, byť hnilobou prolezlý tvor s obřím chřtánem plným žíravých slin. Chce-li toto stvoření z Prázdnoty něčemu ve svém okolí skutečně porozumět, musí to přežvýkat a oslintat. Kog'Maw sice není sám o sobě zlý, ovšem ve své všetečné naivitě dokáže být nebezpečný, neboť ta může vyústit ve zběsilou žravost – ne snad kvůli hladu, nýbrž aby ukojil svou bezmeznou zvědavost.",
    },
    {
      name: "LeBlanc",
      nahled: "./images/NahledChamps/nahledleblanc.jpg",
      skin: "./images/Champs/LeblancChampionship.jpg",
      zakladni: "./images/Champs/Leblanc.jpg",
      nadpis: "LEBLANC - MISTRYNĚ KLAMU",
      description:
        "LeBlanc je šampionka hraná především na středové linii. Patří do skupiny zabijáků, základní útoky má na dálku. LeBlanc je pouze jedním z mnoha jmen bledé ženy, jejíž intriky sahající až do raných dní Noxu ovlivnily již bezpočet životů a událostí. Dokonce i pro ostatní členy řádu Černé růže je záhadou. S pomocí magie dokáže tato čarodějka přemístit svůj obraz, kam se jí zlíbí, a může se objevit kdekoliv, komukoliv a dokonce i na mnoha místech zároveň. Vždy potají spřádá nějaké plány a její skutečné motivy jsou stejně tajemné jako její pravá identita.",
    },
    {
      name: "Lee Sin",
      nahled: "./images/NahledChamps/nahledleesin.jpg",
      skin: "./images/Champs/LeeSinGodFist.jpg",
      zakladni: "./images/Champs/LeeSin.jpg",
      nadpis: "LEE SIN - SLEPÝ MNICH",
      description:
        "Lee Sin je šampion hraný především v džungli. Patří do skupiny bojovník, základní útoky má na blízko. Lee Sin je mistrem starodávného ionského bojového umění a zásadovým bojovníkem, který za pomoci vyvolávané esence dračí duše necouvne před žádným nebezpečím. Ačkoliv tento bojový mnich přišel již před mnoha lety o zrak, zasvětil svůj život ochraně své domoviny před každým, kdo by se odvážil narušit její posvátnou rovnováhu. Pokud nepřátelé podcení jeho klid pramenící z meditace, nepříjemně je pak překvapí jeho slavné ohnivé pěsti a plamenné kopy.",
    },
    {
      name: "Leona",
      nahled: "./images/NahledChamps/nahledleona.jpg",
      skin: "./images/Champs/LeonaMechaKingdoms.jpg",
      zakladni: "./images/Champs/Leona.jpg",
      nadpis: "LEONA - ZÁŘIVÝ ÚSVIT",
      description:
        "Leona je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny tanků, základní útoky má na blízko. Leona, nabitá silou slunce, je svatou válečnicí Solari, která brání horu Targon svou Zenitovou čepelí a Štítem rozbřesku. Její kůže se třpytí jako záře hvězd a její oči planou silou božského Aspektu, kterého má v sobě. Leona, oděná ve zlaté zbroji a nesoucí strašlivé břímě prastaré znalosti, přináší některým osvícení a jiným smrt.",
    },
    {
      name: "Lillia",
      nahled: "./images/NahledChamps/nahledlillia.jpg",
      skin: "./images/Champs/LilliaSpiritBlossom.jpg",
      zakladni: "./images/Champs/Lillia.jpg",
      nadpis: "LILLIA - PLACHÝ KVĚT",
      description:
        "Lillia je šampionka hraná především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Nesmírně nesmělá pohádková srna Lillia se plaše toulá po ionských lesích. Lillia se schovává mimo zraky smrtelníků – jejichž záhadná povaha ji už dlouho přivádí v úžas, ale rovněž děsí – a doufá, že objeví, proč už se jejich sny nedostávají k prastarému Stromu snění. Nyní putuje po Ionii se svou kouzelnou větví v ruce a snaží se nalézt neuskutečněné sny lidí. Teprve pak může sama Lillia rozkvést a pomáhat ostatním rozplést obavy a najít v nitru svou jiskru. Jej!",
    },
    {
      name: "Lissandra",
      nahled: "./images/NahledChamps/nahledlissandra.jpg",
      skin: "./images/Champs/LissandraDarkCosmic.jpg",
      zakladni: "./images/Champs/Lissandra.jpg",
      nadpis: "LISSANDRA - LEDOVÁ ČARODĚJKA",
      description:
        "Lissandra je šampionka hraná především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Lissandřina magie přetváří čistou sílu ledu v něco temného a hrozivého. Svým černým ledem dokáže mnohem víc než jen zmrazovat – probodává jím a drtí každého, kdo se odváží postavit se jí do cesty. Vyděšeným obyvatelům severu je známá jen jako „Ledová čarodějka“. Pravda je však mnohem hrůznější: Lissandra je zkázou přírody a za cíl si klade uvěznit celý svět v ledu.",
    },
    {
      name: "Lucian",
      nahled: "./images/NahledChamps/nahledlucian.jpg",
      skin: "./images/Champs/LucianPulsefire.jpg",
      zakladni: "./images/Champs/Lucian.jpg",
      nadpis: "LUCIAN - OČISTNÝ PLAMEN",
      description:
        "Lucian je šampion hraný především na spodní linii (bottom lane), jako zdroj fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Strážce světla Lucian je chmurný lovec nemrtvých duší, jež bezúnavně pronásleduje a ničí dvojicí svých starožitných pistolí. Poté, co mu Thresh zabil manželku, se Lucian vydal na cestu pomsty – ale ani její návrat k životu nedokázal jeho vztek zmírnit. Nemilosrdný a zaslepený Lucian se nezastaví před ničím, aby ochránil živé před dávno mrtvými hrůzami Černé mlhy.",
    },
    {
      name: "Lulu",
      nahled: "./images/NahledChamps/nahledlulu.jpg",
      skin: "./images/Champs/LuluDragonTrainer.jpg",
      zakladni: "./images/Champs/Lulu.jpg",
      nadpis: "LULU - VÍLÍ ČARODĚJKA",
      description:
        "Lulu je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Yordlí čarodějka Lulu, jež putuje Runeterrou se svým vílím společníkem Pixem, je proslulá vyvoláváním snových iluzí a fantastických tvorů. Dokáže dle libosti upravovat realitu, překrucovat předivo skutečnosti a upravovat omezení fyzického světa, který považuje za nesmírně nudný. Zatímco ostatní mohou považovat její magii přinejlepším za nepřirozenou a přinejhorším za nebezpečnou, ona sama se domnívá, že každému by prospělo trošku kouzel.",
    },
    {
      name: "Lux",
      nahled: "./images/NahledChamps/nahledlux.jpg",
      skin: "./images/Champs/LuxCosmic.jpg",
      zakladni: "./images/Champs/Lux.jpg",
      nadpis: "LUX - PANÍ SVĚTLA",
      description:
        "Lux je šampionka hraná především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Luxanna z Korunní stráže pochází z Demacie, odtažité říše, kde lidé pohlížejí na magické schopnosti se strachem a podezřením. Jelikož vládne schopností ohýbat světlo dle vlastní vůle, vyrostla v hrůze z odhalení a z toho, že bude muset žít ve vyhnanství. Udržovala tedy svou moc v tajnosti, aby neohrozila vznešenou pověst své rodiny. Díky nezdolnému optimismu a duševní síle se však Lux nakonec naučila svůj jedinečný dar přijmout a nyní jej potají používá ku prospěchu své vlasti.",
    },
    {
      name: "Malphite",
      nahled: "./images/NahledChamps/nahledmalphite.jpg",
      skin: "./images/Champs/MalphiteDarkStar.jpg",
      zakladni: "./images/Champs/Malphite.jpg",
      nadpis: "MALPHITE - ÚLOMEK MONOLITU",
      description:
        "Malphite je šampion hraný především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízku. Malphite je obřím tvorem z oživlého kamene, jenž se navzdory všem neúspěchům snaží zavést požehnaný řád v chaosem zmítaném světě. Pochází z jiného světa, ve kterém se zrodil jako úlomek sloužící obelisku známému jako Monolit. Za pomoci svých úctyhodných elementálních sil pečoval o svého stvořitele a chránil jej, ovšem nakonec selhal. Následující zkázu kromě něj už nikdo další nepřežil. Nyní se Malphite snaží najít pochopení pro měkké obyvatele Runeterry a jejich neotesanou náladovost a zároveň hledá úlohu, která by byla hodna posledního zástupce celého jeho druhu.",
    },
    {
      name: "Malzahar",
      nahled: "./images/NahledChamps/nahledmalzahar.jpg",
      skin: "./images/Champs/MalzaharBee.jpg",
      zakladni: "./images/Champs/Malzahar.jpg",
      nadpis: "MALZAHAR - PROROK Z PRÁZDNOTY",
      description:
        "Malzahar je šampion hraný především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Malzahar, tento zapálený jasnovidec hlásající sjednocení veškerého života, skutečně věří, že nově nalezená cesta do Prázdnoty je branou ke spasení Runeterry. V pouštních pustinách Shurimy následoval hlasy, které mu šeptaly v hlavě, až do prastaré Ikacie. V rozvalinách oné země pak nahlédl do temného srdce samotné Prázdnoty – a byl obdařen novými schopnostmi a novým účelem. Malzahar nyní sám sebe vnímá jako pastýře s úkolem zavést do trhliny i ostatní… anebo vypustit stvoření, jež se v ní ukrývají.",
    },
    {
      name: "Maokai",
      nahled: "./images/NahledChamps/nahledmaokai.jpg",
      skin: "./images/Champs/MaokaiFestive.jpg",
      zakladni: "./images/Champs/Maokai.jpg",
      nadpis: "MAOKAI - POKROUCENÝ ENT",
      description:
        "Maokai je šampion hraný především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízko. Maokai je ohromný zuřivý ent, který bojuje proti nadpřirozeným hrůzám Stínových ostrovů. Vlna neživota jej nesmetla jen díky tomu, že měl dřevo prosycené živou vodou. Magická pohroma, jež zničila jeho domovinu, jej místo toho pokřivila do podoby tvora plného touhy po pomstě. Zatímco dříve býval Maokai mírumilovný přírodní duch, nyní se s nevídanou zběsilostí snaží vymýtit ze Stínových ostrovů veškerý neživot a navrátit své vlasti její původní krásu.",
    },
    {
      name: "Master Yi",
      nahled: "./images/NahledChamps/nahledmaster.jpg",
      skin: "./images/Champs/MasterYiPsyOps.jpg",
      zakladni: "./images/Champs/MasterYi.jpg",
      nadpis: "MASTER YI - ŠERMÍŘ WUJU",
      description:
        "Master Yi je šampion hraný především v džungli. Patří do skupiny zabijáků, základní útoky má na blízko. Master Yi zocelil své tělo a zbystřil svou mysl tak, aby myšlenka a čin téměř splývaly v jeden celek. K násilí se sice uchyluje pouze v případě, není-li jiného zbytí, ovšem ladnost a rychlost jeho čepele zaručují, že k rozřešení sporů dojde vždy velice rychle. Jakožto jeden z posledních žijících mistrů ionského bojového umění wuju zasvětil Yi svůj život tomu, aby odkaz jeho lidu žil dál – a tak zkoumá potenciální nové učedníky Sedmi čočkami vhledu ve snaze najít mezi nimi ty nejschopnější.",
    },
    {
      name: "Miss Fortune",
      nahled: "./images/NahledChamps/nahledmf.jpg",
      skin: "./images/Champs/MissFortuneBewitching.jpg",
      zakladni: "./images/Champs/MissFortune.jpg",
      nadpis: "MISS FORTUNE - LOVKYNĚ ODMĚN",
      description:
        "Miss Fortune je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Sarah Fortune, tato bilgewaterská kapitánka, je známá pro svou krásu a obávaná pro svou bezohlednost. Výrazně se liší od otrlých kriminálníků, jichž je přístavní město plné. Když byla ještě malé děvče, král pirátů Gangplank přímo před jejíma očima povraždil celou její rodinu, za což se mu o mnoho let krvavě pomstila tím, že vyhodila do povětří jeho loď, zatímco byl na její palubě. Kdo ji podcení, ten se dočká lstí a nevypočitatelných zvratů… a pravděpodobně jedné nebo dvou kulek do břicha.",
    },
    {
      name: "Mordekaiser",
      nahled: "./images/NahledChamps/nahledmorde.jpg",
      skin: "./images/Champs/MordekaiserDarkStar.jpg",
      zakladni: "./images/Champs/Mordekaiser.jpg",
      nadpis: "MORDEKAISER - ŽELEZNÝ PŘÍZRAK",
      description:
        "Mordekaiser je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Dvakrát skolený a třikrát zrozený Mordekaiser je krvelačný vládce z dávných dob, který s pomocí svých nekromantských sil spoutává duše k věčnému podrobení. Na světě zbývá už jen hrstka těch, kteří si pamatují jeho dřívější bitvy či znají skutečný rozsah jeho moci – přesto se však několik takových prastarých jedinců najde a ti se nyní děsí dne, kdy by se mohl znovu ujmout vlády nad světem živých i mrtvých.",
    },
    {
      name: "Morgana",
      nahled: "./images/NahledChamps/nahledmorgana.jpg",
      skin: "./images/Champs/MorganaSinful.jpg",
      zakladni: "./images/Champs/Morgana.jpg",
      nadpis: "MORGANA - PADLÁ",
      description:
        "Morgana je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny mágů, základní útoky má na dálku. V Morganině nitru probíhá věčný boj mezi její nebeskou a smrtelnou podstatou. Spoutala si křídla, aby tak přijala své lidství, a svou bolest a zahořklost si vybíjí na všech neupřímných a zkažených. Odmítá zákony a tradice, které považuje za nespravedlivé, a zatímco se někteří snaží pravdu potlačovat, ona za ni bojuje ze stínů Demacie sesíláním štítů a řetězů z temného ohně. Morgana je neochvějně přesvědčena, že i ti, kdož byli dříve zapuzeni a vyhnáni, mohou jednoho dne znovu hrdě pozvednout hlavu.",
    },
    {
      name: "Nami",
      nahled: "./images/NahledChamps/nahlednami.jpg",
      skin: "./images/Champs/NamiCosmic.jpg",
      zakladni: "./images/Champs/Nami.jpg",
      nadpis: "NAMI - VLÁDKYNĚ PŘÍLIVU",
      description:
        "Nami je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Tvrdohlavá mladá mořská vastajka Nami byla první z kmene Marajů, která opustila rodné vlny a vydala se na suchou zem. Stalo se tak poté, co se ztratilo dávné spojení s Targoňany. Jelikož neviděla žádnou jinou možnost, vzala na svá bedra povinnost dokončit posvátný rituál, jenž by měl zajistit jejímu lidu bezpečí. V chaosu tohoto nového věku čelí Nami nejisté budoucnosti s odvahou a odhodlaností a pomocí své hole Vládkyně přílivu povolává sílu samotného oceánu.",
    },
    {
      name: "Nasus",
      nahled: "./images/NahledChamps/nahlednasus.jpg",
      skin: "./images/Champs/NasusLunarGuardian.jpg",
      zakladni: "./images/Champs/Nasus.jpg",
      nadpis: "NASUS - STRÁŽCE PÍSKŮ",
      description:
        "Nasus je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Nasus je působivou Vyzdviženou bytostí ze starobylé Shurimy, hrdinná postava, která je obyvateli pouště oslavována jako polobůh. Když byl smrtelníkem, byl vysoce inteligentním strážcem veškerého vědění a jedinečným stratégem, jehož moudrost vedla starobylou Shurimu k velkoleposti po celá staletí. Po pádu říše odešel do exilu a z velkého hrdiny se pomalu stala jen pouhá legenda. Když nyní starobylé město Shurima opět povstalo, navrátil se plný odhodlání, že tentokrát už jej nikdy padnout nenechá.",
    },
    {
      name: "Nautilus",
      nahled: "./images/NahledChamps/nahlednautilus.jpg",
      skin: "./images/Champs/NautilusAstronaut.jpg",
      zakladni: "./images/Champs/Nautilus.jpg",
      nadpis: "NAUTILUS - TITÁN Z HLUBIN",
      description:
        "Nautilus je šampion hraný především na spodní linii na roli podpory (supporta). Patří do skupiny tanků, základní útoky má na blízko. Obrněný obr známý jako Nautilus, osamělá legenda stará stejně jako první mola v Bilgewateru, brázdí temné vody kus od pobřeží ostrovů Modrého plamene. Kupředu ho žene zapomenutá zrada, útočí bez varování. Máchá svou obří kotvou, aby ochránil chudáky a chamtivce stáhl pod hladinu. Říká se, že si chodí pro ty, kteří zapomínají zaplatit „bilgewaterský desátek“, a stahuje je pod hladinu jako železná připomínka toho, že hlubinám neunikne nikdo.",
    },
    {
      name: "Neeko",
      nahled: "./images/NahledChamps/nahledneeko.jpg",
      skin: "./images/Champs/NeekoSG.jpg",
      zakladni: "./images/Champs/Neeko.jpg",
      nadpis: "NEEKO - ZVĚDAVÁ CHAMELEONKA",
      description:
        "Neeko je šampionka hraná především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Neeko pochází z dávno ztraceného vastajského kmene. Snadno splyne s libovolným davem, dokáže si totiž vypůjčit vzhled ostatních a dokonce pohltí i část jejich pocitů, takže okamžitě rozezná přátele od nepřátel. Nikdo si nikdy nemůže být jistý, kde nebo kým Neeko zrovna je. Ovšem ti, kdož jí hodlají ublížit, zakrátko spatří její pravou tvář a pocítí plnou sílu její pradávné duchovní magie.",
    },
    {
      name: "Nidalee",
      nahled: "./images/NahledChamps/nahlednidalee.jpg",
      skin: "./images/Champs/NidaleeSuperGalaxy.jpg",
      zakladni: "./images/Champs/Nidalee.jpg",
      nadpis: "NIDALEE - ZÁKEŘNÁ LOVKYNĚ",
      description:
        "Nidalee je šampionka hraná především v džungli. Patří do skupiny zabijáků. Nidalee má dvě formy - lidskou formu a zvířecí formu. V lidské formě má základní útoky na dálku, ve zvířecí formě na blízku. Nidalee vyrostla v té nejhlubší džungli a je špičkovou stopařkou, která se dokáže libovolně měnit do podoby krvelačné pumy. Není ani zcela člověk, ani zvíře, ale s divokou zuřivostí brání s pomocí pastí a ostrého oštěpu své území před veškerými nezvanými hosty. Svou kořist nejprve ochromí, načež se na ni vrhne ve své kočičí podobě. Ti, jimž se poštěstilo přežít, vyprávějí neuvěřitelné historky o divožence s instinkty ostrými jako břitva a ještě ostřejšími drápy...",
    },
    {
      name: "Nocturne",
      nahled: "./images/NahledChamps/nahlednocturne.jpg",
      skin: "./images/Champs/NocturneElderwood.jpg",
      zakladni: "./images/Champs/Nocturne.jpg",
      nadpis: "NOCTURNE - VĚČNÁ NOČNÍ MŮRA",
      description:
        "Nocturne je šampion hraný především v džungli. Patří do skupiny zabijáků, základní útoky má na blízko. Démonické stvoření probuzené z nočních můr, známé většinou jako Nocturne, se stalo původní silou čistého zla. Tento amébovitý stín ozbrojený děsivými čepelemi nemá žádný stálý tvar a tam, kde by se měla nacházet tvář, visí jen dvojice chladných očí. Poté, co se Nocturne osvobodil ze sféry duchů, sestoupil do světa bdících, kde se krmí na hrůze, jež má kořeny v pravé temnotě.",
    },
    {
      name: "Nunu",
      nahled: "./images/NahledChamps/nahlednunu.jpg",
      skin: "./images/Champs/NunuGrungy.jpg",
      zakladni: "./images/Champs/Nunu.jpg",
      nadpis: "NUNU A WILLUMP - KLUK A JEHO YETTI",
      description:
        "Nunu je šampion hraný především v džungli. Patří do skupiny tanků, základní útoky má na blízko. Kdysi dávno žil jeden chlapec, který chtěl dokázat, že je hrdinou, a to tak, že porazí děsivou obludu – jen aby zjistil, že tato příšera, osamělý a kouzelný yetti, akorát potřeboval kamaráda. Spjati prastarou mocí a sdílenou láskou ke koulovačkám se nyní Nunu s Willumpem divoce řítí Freljordem a vdechují život smyšleným dobrodružstvím. Doufají, že tam někde najdou Nunuovu matku. Pokud ji dokážou zachránit, možná z nich přeci jen budou hrdinové...",
    },
    {
      name: "Olaf",
      nahled: "./images/NahledChamps/nahledolaf.jpg",
      skin: "./images/Champs/OlafBro.jpg",
      zakladni: "./images/Champs/Olaf.jpg",
      nadpis: "OLAF - NÁJEZDNÍK",
      description:
        "Olaf je šampion hraný především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Olaf, tento nezastavitelný živel zkázy ozbrojený sekerou, touží jen po jediném – zemřít ve velkolepém boji. Pochází z nemilosrdného freljordského poloostrovu Lokfar. Kdysi se dozvěděl o proroctví, podle kterého měl pokojně skonat... jenže to byl osud zbabělců a mezi jeho lidem obrovská urážka. Pln hněvu se tedy vypravil hledat smrt, zuřivě bojoval po celé zemi, skolil zástupy slavných válečníků a legendárních bestií, ale stále nenašel protivníka, který by jej dokázal zastavit. Nyní vstoupil do řad Zimního spáru a doufá, že najde svůj konec v blížící se válce.",
    },
    {
      name: "Orianna",
      nahled: "./images/NahledChamps/nahledorianna.jpg",
      skin: "./images/Champs/OriannaWinterWonder.jpg",
      zakladni: "./images/Champs/Orianna.jpg",
      nadpis: "ORIANNA - MECHANICKÁ DÁMA",
      description:
        "Orianna je šampionka hraná především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Orianna je plně mechanický zázrak techniky, dřív však bývala zvědavou dívkou z masa a kostí. Po nehodě v dolních částech Zaunu smrtelně onemocněla a její rozpadající se tělo muselo být kousek po kousku nahrazováno špičkovými přístroji. Nyní Orianna svobodně prozkoumává divy Piltoveru i města pod ním a společnost jí dělá jedinečná mosazná koule, která je jejím přítelem a ochráncem.",
    },
    {
      name: "Ornn",
      nahled: "./images/NahledChamps/nahledornn.jpg",
      skin: "./images/Champs/OrnnElderwood.jpg",
      zakladni: "./images/Champs/Ornn.jpg",
      nadpis: "ORNN - OHEŇ POD HOROU",
      description:
        "Ornn je šampion hraný především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízku. Ornn je freljordský duch kovářství a řemeslnictví. Pracuje o samotě v obrovské kovárně, kterou si vykoval z lávových jeskyní pod sopkou jménem Krbdům. Tam přikládá pod bublajícími kotly s roztavenými kameny, čistí rudu a vyrábí předměty nevýslovné kvality. Když ostatní božstva – zejména Volibear – sestoupí na zem a pletou se do záležitostí smrtelníků, Ornn povstane, aby tyto neuvážené bytosti odkázal do patřičných mezí, a to buď svým kladivem, či ohnivou silou samotných hor.",
    },
    {
      name: "Pantheon",
      nahled: "./images/NahledChamps/nahledpantheon.jpg",
      skin: "./images/Champs/PantheonPulsefire.jpg",
      zakladni: "./images/Champs/Pantheon.jpg",
      nadpis: "PANTHEON - NEZLOMNÉ KOPÍ",
      description:
        "Pantheon je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Atreus byl kdysi nedobrovolným hostitelem Aspektu války, který přežil, když byla nebeská moc v jeho nitru zabita, a odmítl podlehnout úderu, který strhl hvězdy ze samotných nebes. Časem se naučil přijmout moc své vlastní smrtelnosti a tvrdošíjnou houževnatost, která je s ní spjatá. Atreus nyní coby znovuzrozený Pantheon vzdoruje všemu nebeskému a jeho nezdolná vůle na bojišti napájí zbraně padlého Aspektu.",
    },
    {
      name: "Poppy",
      nahled: "./images/NahledChamps/nahledpoppy.jpg",
      skin: "./images/Champs/PoppySnowFawn.jpg",
      zakladni: "./images/Champs/Poppy.jpg",
      nadpis: "POPPY - STRÁŽKYNĚ KLADIVA",
      description:
        "Poppy je šampionka hraná především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízko. Runeterra rozhodně nemá nouzi o chrabré šampiony, jen málokterý z nich se ovšem může svou houževnatostí měřit s Poppy. Tato odhodlaná yordlice, třímající legendární Orlonovo kladivo, strávila bezpočet let tajným pátráním po slavném „hrdinovi Demacie“, jenž má být právoplatným majitelem její zbraně. Dokud se jí to nepodaří, vyráží svědomitě do každého boje a mocnými švihy svého kladiva zahání nepřátele království. ",
    },
    {
      name: "Pyke",
      nahled: "./images/NahledChamps/nahledpyke.jpg",
      skin: "./images/Champs/PykePsyOps.jpg",
      zakladni: "./images/Champs/Pyke.jpg",
      nadpis: "PYKE - ROZPAROVAČ Z KRVAVÉHO PŘÍSTAVU",
      description:
        "Pyke je šampion hraný především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na blízko. Proslulý harpunář Pyke z bilgewaterských Vražedných doků měl najít smrt v břiše obří žravuchy… ale přesto se vrátil. Nyní se plíží vlhkými uličkami a průchody města, jež mu dříve bylo domovem, a používá své nově nabyté nadpřirozené dary k tomu, aby rychle a krvavě skoncoval s každým, kdo vydělává na zneužívání slabosti ostatních. Ve městě obývaném hrdými lovci příšer se náhle objevila příšera, která loví je.",
    },
    {
      name: "Qiyana",
      nahled: "./images/NahledChamps/nahledqiyana.jpg",
      skin: "./images/Champs/QiyanaTrueDamage.jpg",
      zakladni: "./images/Champs/Qiyana.jpg",
      nadpis: "QIYANA - CÍSAŘOVNA ŽIVLŮ",
      description:
        "Qiyana je šampionka hraná především na středové linii. Patří do skupiny zabijáků, základní útoky má na blízko. V pralesním městě Ixaocanu osnuje Qiyana nelítostné intriky, které ji mají vynést až na trůn Yun Talu. Ačkoliv se v řadě nástupníků nachází na posledním místě, svým sokům se staví s drzou sebejistotou a nevídaným mistrovstvím v ovládání magie živlů. A jelikož samotná země plní všechny její příkazy, považuje se Qiyana za nejlepší elementalistku v dějinách Ixaocanu – a tím pádem si zaslouží vládu nejen nad městem, nýbrž nad celou říší.",
    },
    {
      name: "Quinn",
      nahled: "./images/NahledChamps/nahledquinn.jpg",
      skin: "./images/Champs/QuinnPhoenix.jpg",
      zakladni: "./images/Champs/Quinn.jpg",
      nadpis: "QUINN - KŘÍDLA DEMACIE",
      description:
        "Quinn je šampionka hraná především na horní linii (top lane). Patří do skupiny střelců, základní útoky má na dálku. Quinn je elitní demacijská rytířka-průzkumnice, která plní nebezpečné úkoly hluboko na nepřátelském území. Mezi ní a jejím legendárním orlem Valorem se pne nezničitelné pouto a nepřátelé často padnou skoleni k zemi dřív, než si uvědomí, že nebojují proti jednomu demacijskému hrdinovi, nýbrž dvěma. Hbitá a v případě potřeby nesmírně mrštná Quinn míří svým samostřílem, zatímco jí Valor shůry vyhledává cíle, což z nich činí na bojišti nesmírně vražedný pár.",
    },
    {
      name: "Rakan",
      nahled: "./images/NahledChamps/nahledrakan.jpg",
      skin: "./images/Champs/RakanSG.jpg",
      zakladni: "./images/Champs/Rakan.jpg",
      nadpis: "RAKAN - MILÁČEK PUBLIKA",
      description:
        "Rakan je šampion hraný především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na blízko. Rakan, stejně vrtošivý jako okouzlující, je nechvalně proslulý vastajský potížista a ten nejlepší bojový tanečník v historii kmene Lhotlan. Lidé z ionské vysočiny si jeho jméno už dlouhou dobu spojují s divokými slavnostmi, nekontrolovatelnými večírky a anarchistickou hudbou. Jen málokoho by napadlo, že tento energetický potulný šoumen je zároveň druhem rebelky jménem Xayah, které pomáhá s jejím posláním.",
    },
    {
      name: "Rammus",
      nahled: "./images/NahledChamps/nahledrammus.jpg",
      skin: "./images/Champs/RammusFreljord.jpg",
      zakladni: "./images/Champs/Rammus.jpg",
      nadpis: "RAMMUS - PANCÉŘOVEC",
      description:
        "Rammus je šampion hraný především v džungli. Patří do skupiny tanků, základní útoky má na blízko. Některými obdivován a jinými zavržen, Rammus zůstává pro mnohé záhadou. Chrání jej tvrdý krunýř posetý ostny. Ať vkročí kamkoliv, lidé spřádají rozličné teorie o tom, odkud se toto záhadné stvoření vzalo – je polobohem, posvátným věštcem či pouhým zvířetem přetvořeným magií? Ať už je pravda jakákoliv, Rammus je tajnůstkář a na svých toulkách shurimskou pouští se kvůli nikomu nezastavuje.",
    },
    {
      name: "Rek'Sai",
      nahled: "./images/NahledChamps/nahledreksai.jpg",
      skin: "./images/Champs/RekSaiBlackfrost.jpg",
      zakladni: "./images/Champs/RekSai.jpg",
      nadpis: "REK'SAI - POSTRACH Z PRÁZDNOTY",
      description:
        "Rek'Sai je šampionka hraná především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Rek'Sai je nemilosrdné stvoření z Prázdnoty a dokonalý predátor, jenž si prohrabává tunely pod zemí a ze zálohy útočí na nic netušící kořist. Její neukojitelný hlad přeměnil v pustinu celé rozlehlé oblasti kdysi slavné Shurimské říše. Kupci, obchodníci i dokonce ozbrojené karavany si raději zajdou stovky mil, jen aby se vyhnuli oblastem, na nichž se usadili její potomci. Všichni vědí, že jakmile se na obzoru objeví Rek'Sai, smrti z hlubin země již nikdo neuteče.",
    },
    {
      name: "Rell",
      nahled: "./images/NahledChamps/nahledrell.jpg",
      skin: "./images/Champs/RellBattleQueen.jpg",
      zakladni: "./images/Champs/Rell.jpg",
      nadpis: "RELL - ŽELEZNÁ PANNA",
      description:
        "Rell je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny tanků, základní útoky má na blízko. Rell, výsledek brutálních experimentů Černé růže, je odbojná živoucí zbraň odhodlaná zničit Noxus. Její dětství bylo plné bídy a hrůzy, kdy musela vytrpět nevýslovné procedury pro zdokonalení své magické moci ovládat kov, ze které chtěli udělat zbraň... dokud se neprobila na svobodu, přičemž zabila spoustu svých věznitelů. Rell, nyní prohlášená za zločince, útočí na noxijské vojáky na potkání, hledá přeživší své staré „akademie“ a brání slabé, zatímco svým někdejším pánům přináší nelítostnou smrt.",
    },
    {
      name: "Renekton",
      nahled: "./images/NahledChamps/nahledrenekton.jpg",
      skin: "./images/Champs/RenektonPoolParty.jpg",
      zakladni: "./images/Champs/Renekton.jpg",
      nadpis: "RENEKTON - PÍSEČNÝ ŘEZNÍK",
      description:
        "Renekton je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Renekton je hrozivý Vyzdvižený z rozpálené shurimské pouště, kterého sžírá hněv. Kdysi byl nejváženějším bojovníkem říše; pod jeho velením dosáhla armáda jeho lidu bezpočtu vítězství. Po pádu říše byl však Renekton pohřben pod písky a zatímco se svět nad ním pomalu měnil, Renekton přišel o rozum. Nyní je opět volný, ale jeho mysl pohltila touha po tom, aby našel a zabil svého bratra Nasuse, kterému dává za vinu své šílenství i uvěznění trvající několik staletí.",
    },
    {
      name: "Rengar",
      nahled: "./images/NahledChamps/nahledrengar.jpg",
      skin: "./images/Champs/RengarNightHunter.jpg",
      zakladni: "./images/Champs/Rengar.jpg",
      nadpis: "RENGAR - HRDÝ LOVEC",
      description:
        "Rengar je šampion hraný především v džungli. Patří do skupiny zabijáků, základní útoky má na blízko. Rengar je divoký vastajský lovec trofejí, který žije pro potěšení, jež mu přináší stopování a zabíjení nebezpečných tvorů. Po celém světě hledá ty nejděsivější šelmy, jaké dokáže najít, a zejména pátrá po stopách Kha'Zixe, stvoření z Prázdnoty, které ho připravilo o oko. Rengar svou kořist neloví kvůli jídlu ani slávě, nýbrž kvůli ryzí kráse lovu.",
    },
    {
      name: "Riven",
      nahled: "./images/NahledChamps/nahledriven.jpg",
      skin: "./images/Champs/RivenSpiritBlossom.jpg",
      zakladni: "./images/Champs/Riven.jpg",
      nadpis: "RIVEN - VYHNANKYNĚ",
      description:
        "Riven je šampionka hraná především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Riven bývala šermířkou v noxijské armádě, dnes však žije ve vyhnanství v zemi, kterou se dříve snažila dobýt. Díky síle svého odhodlání a nemilosrdné efektivitě postupovala armádní hierarchií s překvapivou rychlostí a dokonce získala za odměnu legendární runový meč a vlastní válečnou tlupu. Ionské tažení však představovalo obtížnou zkoušku pro Riveninu víru ve vlastní zem; zkoušku, ve které nakonec neuspěla. Poté, co zpřetrhala veškeré vazby s císařstvím, se nyní snaží najít své místo v roztříštěném světě, přestože se všude proslýchá, že Noxus sám se znovu sjednotil…",
    },
    {
      name: "Rumble",
      nahled: "./images/NahledChamps/nahledrumble.jpg",
      skin: "./images/Champs/RumbleSuperGalaxy.jpg",
      zakladni: "./images/Champs/Rumble.jpg",
      nadpis: "RUMBLE - SESTROJENÝ POSTRACH",
      description:
        "Rumble je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Rumble je mladý vynálezce s hodně prchlivou povahou. Vlastníma rukama vyrobil tento kurážný yordl z hromady šrotu obří mechanický oblek vybavený bohatým arzenálem elektrických harpun a zápalných raket. Ostatní sice často nad Rumblovými výrobky ze smetiště ohrnují nos a vysmívají se jim, jemu to však nevadí – je to konec konců on, kdo drží prst na spoušti plamenometu.",
    },
    {
      name: "Ryze",
      nahled: "./images/NahledChamps/nahledryze.jpg",
      skin: "./images/Champs/RyzePirate.jpg",
      zakladni: "./images/Champs/Ryze.jpg",
      nadpis: "RYZE - RUNOVÝ MÁG",
      description:
        "Ryze je šampion hraný především na středové linii (mid lane). Patří do skupiny mágů, základní útoky má na dálku. Ryze je životem ošlehaný prastarý arcimág, jenž je mnohými považován za jednoho z nejschopnějších čarodějů Runeterry. Na jeho bedrech spočívá obrovské břímě. Vyniká nekonečnou odolností a hlubokými znalostmi tajemných učení. Svůj život strávil pátráním po Runách světa – úlomcích surové magie, která kdysi z nicoty stvořila svět. Ryze ví o hrůzách, které by tyto artefakty mohly na Runeterře způsobit, a tak je musí nalézt dřív, než padnou do nesprávných rukou.",
    },
    {
      name: "Samira",
      nahled: "./images/NahledChamps/nahledsamira.jpg",
      skin: "./images/Champs/SamiraSpaceGroove.jpg",
      zakladni: "./images/Champs/Samira.jpg",
      nadpis: "SAMIRA - POUŠTNÍ RŮŽE",
      description:
        "Samira je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Samira zírá smrti do očí s neutuchající sebejistotou a vyhledává vzrušení, kamkoliv vkročí. Poté, co byl její shurimský domov v dětství zničen, našla své pravé místo v Noxu, kde si vybudovala pověst stylového troufalce, který vykonává nebezpečné mise toho nejtěžšího kalibru. Samira používá pistole se střelným prachem a speciálně vyrobenou čepel. Vyžívá se v situacích, kdy jde o život, a likviduje každého, kdo se postaví do cesty jejímu stylu a šarmu.",
    },
    {
      name: "Sejuani",
      nahled: "./images/NahledChamps/nahledseju.jpg",
      skin: "./images/Champs/SejuaniFirecracker.jpg",
      zakladni: "./images/Champs/Sejuani.jpg",
      nadpis: "SEJUANI - ZUŘIVOST SEVERU",
      description:
        "Sejuani je šampionka hraná především v džungli. Patří do skupiny tanků, základní útoky má na blízko. Sejuani je tvrdá a nelítostná Ledorozená vojevůdkyně Zimního spáru, jednoho z nejobávanějších kmenů Freljordu. Přežití jejího lidu je vykoupeno neustálou zoufalou bitvou proti živlům, takže aby obstáli během zdejších krutých zim, musí pořádat nájezdy na osady Noxijců, Demacijců i Avarosanů. Sejuani vyráží v čele nejnebezpečnějších útoků v sedle svého drüvaského kance Bristla a svým řemdihem z pravého ledu zmrazuje nepřátele, aby je pak mohla roztříštit na kusy.",
    },
    {
      name: "Senna",
      nahled: "./images/NahledChamps/nahledsenna.jpg",
      skin: "./images/Champs/SennaTrueDamage.jpg",
      zakladni: "./images/Champs/Senna.jpg",
      nadpis: "SENNA - SPASITELKA",
      description:
        "Senna je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry) nebo jako podpora (support). Patří do skuipiny střelců, základní útoky má na dálku. Senna je už od dětství prokletá, a proto ji pronásleduje nadpřirozená Černá mlha. Přidala se k posvátnému řádu známému jako Strážci světla a zuřivě se bránila – jen aby byla zabita a její duši uvěznil v lucerně krutý přízrak Thresh. Senna se však odmítla vzdát naděje a v lucerně se naučila Mlhu využívat. Opět se vrátila k životu, navždy proměněná. Nyní Senna používá temnotu společně se světlem a chce zničit Černou mlhu tak, že ji obrátí proti ní samé – s každým výstřelem ze svého starožitného děla, které přináší spásu duším v ní ztracených.",
    },
    {
      name: "Seraphine",
      nahled: "./images/NahledChamps/nahledseraphine.jpg",
      skin: "./images/Champs/SeraphineKDA.jpg",
      zakladni: "./images/Champs/Seraphine.jpg",
      nadpis: "SERAPHINE - IDEALISTICKÁ PĚVKYNĚ",
      description:
        "Seraphine je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny mágů, základní útoky má na dálku. Seraphine se narodila v Piltoveru zaunským rodičům a dokáže slyšet duše ostatních – svět jí zpívá a ona zase zpívá jemu. Přestože ji tyto zvuky v mládí pohlcovaly, nyní z nich čerpá inspiraci a proměňuje chaos v symfonii. Zpívá pro sesterská města, aby jejich obyvatelům připomněla, že nejsou sami, že společně jsou silní a že v jejích očích je jejich potenciál neomezený.",
    },
    {
      name: "Sett",
      nahled: "./images/NahledChamps/nahledsett.jpg",
      skin: "./images/Champs/SettObsidianDragon.jpg",
      zakladni: "./images/Champs/Sett.jpg",
      nadpis: "SETT - VELKÝ KÁPO",
      description:
        "Sett je šampion hraný především na horní linii (top lane), nebo na spodní linii (bottom lane) na roli supporta. Patří do skupiny bojovníků, základní útoky má na blízko. Sett, vůdce rostoucího ionského zločineckého podsvětí, se dostal na výsluní po válce s Noxem. Ačkoliv začal jako skromný vyzyvatel v bojových arénách Navori, rychle proslul díky své divoké síle a schopnosti ustát zdánlivě nekonečné bití. Nyní, když se probojoval řadami místních zápasníků, se Sett dostal až na vrchol a řídí arény, ve kterých kdysi bojoval.",
    },
    {
      name: "Shaco",
      nahled: "./images/NahledChamps/nahledshaco.jpg",
      skin: "./images/Champs/ShacoDarkStar.jpg",
      zakladni: "./images/Champs/Shaco.jpg",
      nadpis: "SHACO - ĎÁBELSKÝ ŠAŠEK",
      description:
        "Shaco je šampion hraný především v džungli. Patří do skupiny zabijáků, základní útoky má na blízko. Čarovného panáčka Shaca kdysi dávno vyrobili jako hračku pro jednoho osamělého prince, nyní však nalezl potěšení ve vraždění a masakru. Býval roztomilou loutkou, ovšem od doby, co jeho srdce zasáhla temná magie a ztráta milovaného pána, mu radost činí pouze utrpení nebohých duší, které mučí. Vraždí pomocí různých hraček a jednoduchých triků a výsledky svých krvavých „her“ se nesmírně baví. Pokud někdo zaslechne uprostřed noci temný smích, znamená to, že si jej Ďábelský šašek vybral jako další oběť pro své hrátky.",
    },
    {
      name: "Shen",
      nahled: "./images/NahledChamps/nahledshen.jpg",
      skin: "./images/Champs/ShenPsyOps.jpg",
      zakladni: "./images/Champs/Shen.jpg",
      nadpis: "SHEN - OKO SOUMRAKU",
      description:
        "Shen je šampion hraný především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízko. Shen je vůdcem – takzvaným Okem soumraku – tajnůstkářského ionského společenství válečníků známého jako Kinkou. Touží se oprostit od zmatku emocí, předsudků či ega a kráčí po neviděné cestě nezakaleného úsudku mezi říší duchů a fyzickým světem. Jeho úkolem je dohlížet na rovnováhu mezi nimi, a kdo se ji pokusí narušit, ten okusí Shenův ocelový meč a jeho magickou energii.",
    },
    {
      name: "Shyvana",
      nahled: "./images/NahledChamps/nahledshyvana.jpg",
      skin: "./images/Champs/ShyvanaChampionship.jpg",
      zakladni: "./images/Champs/Shyvana.jpg",
      nadpis: "SHYVANA - POLODRAK",
      description:
        "Shyvana je šampionka hraná především v džungli. Patří do skupiny bojovníků základní útoky má na blízko. Shyvana je tvorem, jemuž v srdci plane magie úlomku ohnivé runy. Přestože se často zjevuje jako člověku podobné stvoření, dokáže na sebe vzít i svou pravou podobu děsivého draka, jenž svým ohnivým dechem mění nepřátele na popel. Poté, co zachránila život korunnímu princi Jarvanovi IV., vstoupila do služby jeho královské gardy a nyní se jen stěží vyrovnává s podezřívavostí demacijského lidu.",
    },
    {
      name: "Singed",
      nahled: "./images/NahledChamps/nahledsinged.jpg",
      skin: "./images/Champs/SingedBee.jpg",
      zakladni: "./images/Champs/Singed.jpg",
      nadpis: "SINGED - ŠÍLENÝ CHEMIK",
      description:
        "Singed je šampion hraný především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízko. Singed je zaunský alchymista, jehož inteligenci se nikdo jen tak nevyrovná. Celý svůj život zasvětil posouvání hranic vědomostí, přičemž žádná cena pro něj nebyla příliš vysoká, dokonce ani vlastní příčetnost. Je snad jeho šílenství záměrné? Singedovy lektvary jen velmi zřídka nedosahují požadovaného efektu, ovšem on sám už v sobě zřejmě zahubil vše lidské a nechává za sebou jen jedovatou stopu zoufalství a hrůzy.",
    },
    {
      name: "Sion",
      nahled: "./images/NahledChamps/nahledsion.jpg",
      skin: "./images/Champs/SionWorldbreaker.jpg",
      zakladni: "./images/Champs/Sion.jpg",
      nadpis: "SION - NEMRTVÝ KOLOS",
      description:
        "Sion je šampion hraný především na horní linii (top lane). Patří do skupiny tanků, základní útoky má na blízko. Sion je válečný hrdina z dávných dob, který je v Noxu oslavován za to, že holýma rukama vymáčkl život z těla demacijského krále. Nebylo mu však dopřáno požehnání věčného odpočinku – místo toho byl znovu oživen, aby své říši sloužil i po smrti. Jakmile kolem sebe začne rozsévat zkázu, neohlíží se na to, zda zabíjí nepřátele, nebo spojence, což je důkazem, že o svou lidskost už nenávratně přišel. Přesto ve svém hrubém brnění, nanýtovaném přímo do hnijícího těla, vyráží bezhlavě do boje a mezi jednotlivými machy mocnou sekerou se snaží vzpomenout na své dřívější já.",
    },
    {
      name: "Sivir",
      nahled: "./images/NahledChamps/nahledsivir.jpg",
      skin: "./images/Champs/SivirPizza.jpg",
      zakladni: "./images/Champs/Sivir.jpg",
      nadpis: "SIVIR - MISTRYNĚ BOJE",
      description:
        "Sivir je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Sivir je proslulou žoldáckou velitelkou a lovkyní pokladů, která své řemeslo provozuje v pouštích Shurimy. Vyzbrojena svým legendárním křížovým ostřím posázeným drahokamy, Sivir vítězně vybojovala bezpočet bitev ve jménu všech, kdo si mohli dovolit její nehoráznou cenu. Je proslulá svou odvahou, odhodláním a vysokou ctižádostivostí a pyšní se tím, že dokáže vynášet na denní světlo poklady ze shurimských hrobek plných nástrah – samozřejmě za tučné nálezné. Samotnými kostmi Shurimy teď ovšem otřásají prastaré síly a Sivir čeká nelehké rozhodnutí, jakým směrem se bude její osud dál odvíjet.",
    },
    {
      name: "Skarner",
      nahled: "./images/NahledChamps/nahledskarner.jpg",
      skin: "./images/Champs/SkarnerCosmic.jpg",
      zakladni: "./images/Champs/Skarner.jpg",
      nadpis: "SKARNER - KŘIŠŤÁLOVÝ STRÁŽCE",
      description:
        "Skarner je šampion hraný především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Skarner je obrovský křišťálový škorpión z ukrytého údolí v Shurimě. Je jedním z rasy brackernů, jež je známá pro svou moudrost a hluboké spojení se zemí, neboť jsou jejich duše propojeny pomocí mocných životních krystalů, ve kterých se ukrývají živoucí myšlenky a vzpomínky brackernských předků. V dávno ztraceném věku se uložili brackernové ke spánku, aby se vyhnuli obrovské kouzelné zkáze, ale byl to právě Skarner, koho probudily nedávné události. Je jediným brackernem, který nespí, a tak na sebe vzal zodpovědnost strážit svůj lid před všemi, kdo by mu chtěli uškodit.",
    },
    {
      name: "Sona",
      nahled: "./images/NahledChamps/nahledsona.jpg",
      skin: "./images/Champs/SonaDJ.jpg",
      zakladni: "./images/Champs/Sona.jpg",
      nadpis: "SONA - MISTRYNĚ STRUN",
      description:
        "Sona je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Sona je největší demacijskou mistryní ve hře na etwahl. Hovoří pouze prostřednictvím něžných akordů a živých árií. Její vybrané způsoby jí zajistily oblibu u šlechty, mnozí se však domnívají, že její čarokrásné melodie ve skutečnosti vyzařují magii – což je v Demacii přísné tabu. Cizincům se sice může zdát být němá, její blízcí společníci jí však jakýmsi způsobem rozumějí. Sona svými melodiemi dokáže nejen uklidnit raněné spojence, ale také jejich zvukem proklát srdce nic netušících nepřátel.",
    },
    {
      name: "Soraka",
      nahled: "./images/NahledChamps/nahledsoraka.jpg",
      skin: "./images/Champs/SorakaDawnbringer.jpg",
      zakladni: "./images/Champs/Soraka.jpg",
      nadpis: "SORAKA - DÍTĚ HVĚZD",
      description:
        "Soraka je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Soraka, tato poutnice z hvězdných dimenzí za horou Targon, se vzdala své nesmrtelnosti, aby mohla chránit smrtelné rasy před jejich vlastními násilnými instinkty. Kam vkročí, tam se snaží šířit soucit a milosrdenství – léčí dokonce i ty, kteří by jí rádi ublížili. A navzdory všem kazům tohoto světa, jež Soraka spatřila, se i nadále domnívá, že lid Runeterry má stále šanci plně rozvinout svůj pravý potenciál.",
    },
    {
      name: "Swain",
      nahled: "./images/NahledChamps/nahledswain.jpg",
      skin: "./images/Champs/SwainHextech.jpg",
      zakladni: "./images/Champs/Swain.jpg",
      nadpis: "SWAIN - NOXIJSKÝ VELEGENERÁL",
      description:
        "Swain je šampion hraný především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Jericho Swain je vizionářským vládcem Noxu, rozpínavého národa, který si cení pouze síly. Ačkoliv během ionské války ztratil své postavení, utrpěl vážná zranění a přišel o levou paži, nakonec se ujal vlády nad říší, a to díky svému nemilosrdnému odhodlání... a nové démonické ruce. Nyní Swain velí svým armádám přímo z první linie a vede je do boje proti blížící se temnotě, kterou vidí pouze on v záblescích posbíraných stínovými havrany z mrtvol v jeho okolí. Ve víru obětí a intrik je největším tajemstvím to, že pravý nepřítel se ukrývá ve vlastním nitru.",
    },
    {
      name: "Sylas",
      nahled: "./images/NahledChamps/nahledsylas.jpg",
      skin: "./images/Champs/SylasFreljord.jpg",
      zakladni: "./images/Champs/Sylas.jpg",
      nadpis: "SYLAS - NESPOUTANÝ",
      description:
        "Sylas je šampion hraný především na horní linii (top lane) či na středové linii. Patří do skupiny mágů, základní útoky má na blízko. Sylas ze Stokařova vyrostl v jedné z demacijských chudinských čtvrtí a stal se symbolem temnější tváře Velkého města. Ještě jako mladý hoch zaujal svou schopností odhalovat skrytou magii neblaze proslulé lovce mágů, a když pak tyto síly použil proti nim, uvrhli jej do vězení. Z něj však Sylas uprchl a stal se odhodlaným vůdcem revoluce. S pomocí magie svých následovníků se snaží zničit království, jemuž kdysi sloužil… a jak se zdá, jeho řady čarodějných vyvrhelů den ode dne rostou.",
    },
    {
      name: "Syndra",
      nahled: "./images/NahledChamps/nahledsyndra.jpg",
      skin: "./images/Champs/SyndraPoolParty.jpg",
      zakladni: "./images/Champs/Syndra.jpg",
      nadpis: "SYNDRA - TEMNÁ VLÁDKYNĚ",
      description:
        "Syndra je šampionka hraná především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Syndra je hrozivá ionská čarodějka, jež vládne neuvěřitelně mocnými silami. Už jako malé dítě děsila stařešiny vesnice svým neuvážlivým a divokým používáním magie. Poslali ji pryč, aby se naučila svou moc ovládat, po čase však zjistila, že místo aby jí její mentor pomáhal, připravuje ji o schopnosti. Svou bolest a pocit zrady zformovala Syndra do podoby temných koulí energie a přísahala, že zničí každého, kdo by se ji pokusil ovládat.",
    },
    {
      name: "Tahm Kench",
      nahled: "./images/NahledChamps/nahledtahm.jpg",
      skin: "./images/Champs/TahmKenchEmperor.jpg",
      zakladni: "./images/Champs/TahmKench.jpg",
      nadpis: "TAHM KENCH - KRÁL ŘEKY",
      description:
        "Tahm Kench je šampion hraný především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na blízko. Démon Tahm Kench, jenž byl v dějinách znám pod mnoha různými jmény, putuje runeterrskými řekami a tiší svůj neukojitelný hlad utrpením ostatních. Ačkoliv může působit mimořádně okouzlujícím a hrdým dojmem, ve skutečnosti se potuluje fyzickým světem, aby tu hledal nic netušící kořist. Jeho předlouhý jazyk dokáže na tucet kroků omráčit i silně opancéřovaného válečníka a pád do jeho kručícího žaludku je nekonečná cesta do propasti, z níž již téměř nikdy není návratu.",
    },
    {
      name: "Taliyah",
      nahled: "./images/NahledChamps/nahledtaliyah.jpg",
      skin: "./images/Champs/TaliyahFreljord.jpg",
      zakladni: "./images/Champs/Taliyah.jpg",
      nadpis: "TALIYAH - SPLÉTAČKA KAMENE",
      description:
        "Taliyah je šampionka hraná především v džungli nebo na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Taliyah je mladá dívka z kmene nomádů, jež se potácí mezi dětskou rozverností a zodpovědností dospělých. Vydala se za poznáním své rostoucí moci napříč téměř celým Valoranem, nedávno se však vrátila domů, aby chránila svůj lid. Někteří lidé si její soucit pletou se slabostí – a za tento omyl zaplatili nejvyšší cenu. Pod Taliyiným mladistvým zevnějškem se totiž ukrývá vůle pevná jako skála a duch neochvějný jako sama země.",
    },
    {
      name: "Talon",
      nahled: "./images/NahledChamps/nahledtalon.jpg",
      skin: "./images/Champs/TalonSword.jpg",
      zakladni: "./images/Champs/Talon.jpg",
      nadpis: "TALON - STÍN ČEPELE",
      description:
        "Talon je šampion hraný především na středové linii. Patří do skupiny zabijáků, základní útoky má na blízko. Talon je nožem v temnotách, nelítostný zabiják, který dokáže udeřit bez varování a uprchnout dřív, než se stačí rozeznít poplach. Svou nebezpečnou pověst si vybudoval v drsných ulicích Noxu, kde musel bojovat, zabíjet a krást, jen aby si zachránil holý život. Později byl přijat do služeb nechvalně známého rodu Du Couteau, a tak se nyní svému krvavému řemeslu věnuje na rozkaz říše – vraždí nepřátelské vůdce, kapitány a hrdiny… i každého Noxijce, který ve své pošetilosti zkříží cestu svým vládcům.",
    },
    {
      name: "Taric",
      nahled: "./images/NahledChamps/nahledtaric.jpg",
      skin: "./images/Champs/TaricPoolParty.jpg",
      zakladni: "./images/Champs/Taric.jpg",
      nadpis: "TARIC - ŠTÍT VALORANU",
      description:
        "Taric je šampion hraný především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na blízko. Taric třímá obrovskou sílu Aspektu ochránce a je strážcem života, lásky a krásy na Runeterře. Na horu Targon se vypravil hledat rozhřešení poté, co byl s hanbou propuštěn ze služby a vyhnán z rodné Demacie, místo něj zde ale našel vyšší volání hvězd. Tělem mu nyní proudí prastará síla Targonu, stal se Štítem Valoranu a střeží svět před zákeřným zlem Prázdnoty.",
    },
    {
      name: "Teemo",
      nahled: "./images/NahledChamps/nahledteemo.jpg",
      skin: "./images/Champs/TeemoBee.jpg",
      zakladni: "./images/Champs/Teemo.jpg",
      nadpis: "TEEMO - RYCHLÝ ZVĚD",
      description:
        "Teemo je šampion hraný především na horní linii (top lane). Patří do skupiny střelců, základní útoky má na dálku. Teemo se nezalekne ani těch nejnebezpečnějších a nejděsivějších překážek a prozkoumává svět s nezdolným nadšením a veselým duchem. Tento yordl s neochvějným smyslem pro morálku hrdě dodržuje Kodex průzkumníků z Bandle City, a to občas s takovým zápalem, že si ani neuvědomuje celkový dopad svých činů. Objevují se sice hlasy, podle nichž je existence Průzkumného sboru diskutabilní, jedno je však jisté: s Teemovým přesvědčením není radno si zahrávat.",
    },
    {
      name: "Thresh",
      nahled: "./images/NahledChamps/nahledthresh.jpg",
      skin: "./images/Champs/ThreshPulsefire.jpg",
      zakladni: "./images/Champs/Thresh.jpg",
      nadpis: "ŘETĚZOVÝ STRÁŽCE",
      description:
        "Thresh je šampion hraný především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Sadistický a záludný Thresh je ctižádostivý duch ze Stínových ostrovů, který nezná pokoje. Tento bývalý strážce bezpočtu magických tajemství byl zničen silou mocnější než život nebo smrt a nyní čerpá moc tím, že láme vůli a ducha ostatních lidí pomalým, vynalézavým mučením. Jeho oběti trpí i po smrti, neboť Thresh jejich duším působí agonii uvězněním ve své lucerně, ve které mu jsou vydány na milost až do skonání světa.",
    },
    {
      name: "Tristana",
      nahled: "./images/NahledChamps/nahledtristana.jpg",
      skin: "./images/Champs/TristanaDragonTrainer.jpg",
      zakladni: "./images/Champs/Tristana.jpg",
      nadpis: "TRISTANA - YORDLÍ PISTOLNICE",
      description:
        "Tristana je šampionka hraná především na spodní linii (bottom lane), jako zdroj fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Zatímco mnozí ostatní yordlové soustředí svou energii na objevování, vynalézání či prosté tropení neplechy, Tristanu vždy zajímala dobrodružství a osudy slavných válečníků. Slyšela toho spoustu o Runeterře, jejích národech a válkách a věřila, že i její lid by si zasloužil vstoupit do legend. Vypravila se tedy do světa se svým věrným dělem Bumbácem a nyní se s nezdolnou odvahou a optimismem vrhá přímo do těch nejzuřivějších bojů.",
    },
    {
      name: "Trundle",
      nahled: "./images/NahledChamps/nahledtrundle.jpg",
      skin: "./images/Champs/TrundleDragonslayer.jpg",
      zakladni: "./images/Champs/Trundle.jpg",
      nadpis: "TRUNDLE - KRÁL TROLLŮ",
      description:
        "Trundle je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Trundle je mohutný a zákeřný troll s velice krvelačnými choutkami. Není nic, co by si nedokázal podmanit ranami svého kyje – třeba i samotný Freljord. Žárlivě si střeží svoje území a pronásleduje každého, kdo je natolik hloupý, že do jeho teritoria vstoupí. Poté se svým napřaženým kyjem z pravého ledu zmrazí nepřítele na kost, probodne jej zubatým ledovým sloupem a se smíchem pozoruje, jak mu s krví uniká do mrazivé tundry i život.",
    },
    {
      name: "Tryndamere",
      nahled: "./images/NahledChamps/nahledtrynda.jpg",
      skin: "./images/Champs/TryndamereChemtech.jpg",
      zakladni: "./images/Champs/Tryndamere.jpg",
      nadpis: "TRYNDAMERE - KRÁL BARBARŮ",
      description:
        "Tryndamere je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Tryndamera pohání nekontrolovatelný hněv a zuřivost. Kdysi putoval celým Freljordem a otevřeně vyzýval největší bojovníky severu, aby se připravil na temnotu, k níž se schylovalo. Tento vzteklý barbar dlouho hledal pomstu za zničení svého klanu, nedávno se však spojil s vůdkyní Avarosanů Ashe a našel domov u jejího lidu. Jeho téměř nadlidská síla a houževnatost jsou legendární a vysloužily jemu a jeho novým spojencům bezpočet vítězství i proti výrazné přesile.",
    },
    {
      name: "Twisted Fate",
      nahled: "./images/NahledChamps/nahledtf.jpg",
      skin: "./images/Champs/TwistedFateUnderworld.jpg",
      zakladni: "./images/Champs/TwistedFate.jpg",
      nadpis: "TWISTED FATE - KARETNÍ MISTR",
      description:
        "Twisted Fate je šampion hraný především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Twisted Fate je nechvalně známý karbaník a falešný hráč, který procestoval většinu světa a díky svým dovednostem a šarmu si vysloužil nevraživost i uznání všech možných boháčů i pošetilců. Jen zřídkakdy bere věci vážně a každý den vítá pyšným krokem a uštěpačným úsměvem na tváři. Twisted Fate má vždy nějaké to eso v rukávu – ve všech ohledech.",
    },
    {
      name: "Twitch",
      nahled: "./images/NahledChamps/nahledtwitch.jpg",
      skin: "./images/Champs/TwitchOmegaSquad.jpg",
      zakladni: "./images/Champs/Twitch.jpg",
      nadpis: "TWITCH - MOROVÁ KRYSA",
      description:
        "Twitch je šampion hraný především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Zaunský morový krysák Twitch, tento gurmánský znalec hnusu všeho druhu, se nebojí ušpinit si pracky. Ze své kuše střílí šipky napuštěné různými chemikáliemi přímo do pozlaceného srdce Piltoveru a přísahal, že těm z „města nahoře“ ukáže, jak špinaví ve skutečnosti jsou. Vždy se někam plíží, a když se zrovna nepoflakuje po své rodné Jímce, přehrabuje se v cizích odpadcích ve snaze najít vyhozené poklady… nebo třeba zplesnivělý krajíc chleba.",
    },
    {
      name: "Udyr",
      nahled: "./images/NahledChamps/nahledudyr.jpg",
      skin: "./images/Champs/UdyrSpiritGuard.jpg",
      zakladni: "./images/Champs/Udyr.jpg",
      nadpis: "UDYR - POUTNÍK DUŠÍ",
      description:
        "Udyr je šampion hraný především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Udyr je víc než jen obyčejný člověk – je to nositel nezkrocené síly čtyř divokých zvířecích duchů. Když se Udyr napojí na jejich živočišnou energii, poskytují mu své jedinečné schopnosti: tygr mu dává rychlost a zuřivost, želva odolnost, medvěd fyzickou sílu a fénix svůj věčný oheň. Spojením všech těchto elementů dokáže zneškodnit každého, kdo by se pokusil narušovat přirozený řád.",
    },
    {
      name: "Urgot",
      nahled: "./images/NahledChamps/nahledurgot.jpg",
      skin: "./images/Champs/UrgotHighNoon.jpg",
      zakladni: "./images/Champs/Urgot.jpg",
      nadpis: "URGOT - NOČNÍ MŮRA ZAUNU",
      description:
        "Urgot je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Urgot býval mocným noxijským popravčím, zradila ho však přímo sama říše, jejímž jménem ukončil tolik životů. Skončil spoutaný v železných řetězech a v Kobce – vězeňském dole hluboko pod Zaunem – byl přinucen poznat pravou podstatu síly. Během katastrofy, jež rozpoutala chaos v celém městě, však uprchl a nyní vrhá svůj mohutný stín na jeho zločinecké podsvětí. Své oběti chytá do týchž řetězů, jež jej kdysi zotročily, zbavuje svůj domov všech, kteří jej nejsou hodni, a snaží se z něj učinit vroucí kotel bolesti.",
    },
    {
      name: "Varus",
      nahled: "./images/NahledChamps/nahledvarus.jpg",
      skin: "./images/Champs/VarusHeartseeker.jpg",
      zakladni: "./images/Champs/Varus.jpg",
      nadpis: "VARUS - ŠÍP POMSTY",
      description:
        "Varus je šampion hraný především na spodní linii (bottom lane), jako zdroj fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Varus je jedním z příslušníků prastarých darkinů. Býval to krutý zabiják, který své nepřátele mučil až na pokraj šílenství, než jim proklál srdce šípem. Na konci Velké darkinské války upadl do zajetí, ovšem po několika staletích se mu podařilo uprchnout v těle, které si sestavil ze dvou ionských lovců – ti jej nevědomky pustili na svobodu a nyní jsou nuceni nést jeho luk, k němuž je připoutána jeho životní esence. Své bývalé věznitele nyní Varus loví, aby na nich vykonal brutální pomstu. Ovšem duše smrtelníků, které v něm přebývají, s ním stále na každém kroku bojují.",
    },
    {
      name: "Vayne",
      nahled: "./images/NahledChamps/nahledvayne.jpg",
      skin: "./images/Champs/VayneSoulstealer.jpg",
      zakladni: "./images/Champs/Vayne.jpg",
      nadpis: "VAYNE - NOČNÍ LOVKYNĚ",
      description:
        "Vayne je šampionka hraná především na spodní linii (bottom lane), jako zdroj fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Shauna Vayne je smrtící a nelítostná demacijská lovkyně příšer, jejímž životním cílem je nalézt a zabít démonku, která vyvraždila její rodinu. Vayne, vyzbrojená zápěstní kuší a srdcem plným pomsty, je skutečně šťastná pouze tehdy, když zabíjí provozovatele temného řemesla či jejich výtvory, na které útočí ze stínů za krupobití stříbrných šipek.",
    },
    {
      name: "Veigar",
      nahled: "./images/NahledChamps/nahledveigar.jpg",
      skin: "./images/Champs/VeigarElderwood.jpg",
      zakladni: "./images/Champs/Veigar.jpg",
      nadpis: "VEIGAR - MALIČKÝ PÁN ZLA",
      description:
        "Veigar je šampion hraný především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Veigar je nadšený mistr temné magie, jenž ovládl takové síly, k nimž by se většina smrtelníků neopovážila přiblížit. Jako volnomyšlenkářský občan Bandle City snil o tom, že posune hranice yordlovské magie, a sáhl po prastarých textech, jež byly po tisíce let ukryty před zraky lidí. Veigar je tvrdohlavý tvoreček, kterého bezmezně fascinují tajemství vesmíru. Ostatní jej často podceňují – ovšem ačkoliv se on sám považuje za naprosto zlého, řídí se určitými morálními pravidly, což vyvolává otázku o jeho hlubší motivaci.",
    },
    {
      name: "Vel'Koz",
      nahled: "./images/NahledChamps/nahledvelkoz.jpg",
      skin: "./images/Champs/VelkozInfernal.jpg",
      zakladni: "./images/Champs/Velkoz.jpg",
      nadpis: "VEL'KOZ - OKO Z PRÁZDNOTY",
      description:
        "Vel'Koz je šampion hraný především na středové linii (mid lane) nebo na spodní linii v roli podpory (supporta). Patří do skupiny mágů, základní útoky má na dálku. Není jasné, zda byl Vel'Koz prvním zplozencem Prázdnoty, jenž se na Runeterře objevil, ovšem nikdy před ním se neobjevil žádný, který by se mohl vyrovnat jeho krutému, pečlivě kalkulujícímu vědomí. Zatímco ostatní sežerou nebo poskvrní vše ve svém okolí, on místo toho prozkoumává a studuje fyzický svět – a s ním i ta podivná bojující stvoření, jež na něm žijí – ve snaze najít slabinu, kterou by mohla Prázdnota využít. Vel'Koz ovšem není ani zdaleka jen pasivním pozorovatelem. Každého, kdo jej ohrožuje, sežehne smrtící plazmou nebo narušením samotného přediva okolního světa.",
    },
    {
      name: "Vi",
      nahled: "./images/NahledChamps/nahledvi.jpg",
      skin: "./images/Champs/ViOfficer.jpg",
      zakladni: "./images/Champs/Vi.jpg",
      nadpis: "VI - PILTOVERSKÁ STRÁŽKYNĚ POŘÁDKU",
      description:
        "Vi je šampionka hraná především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Vi je horkokrevná a impulzivní bývalá kriminálnice původem z nebezpečných ulic Zaunu. V ostatních vzbuzuje zasloužený respekt, sama se však před cizí autoritou jen tak neskloní. Vyrostla zcela o samotě, díky čemuž si vyvinula jedinečný instinkt pro přežití a poměrně drsný smysl pro humor. Nyní ve službách piltoverských strážců dohlíží na dodržování pořádku a svými mocnými magitechnickými rukavicemi dokáže v případě potřeby prorazit zeď nebo skrz ni prohodit podezřelého.",
    },
    {
      name: "Viego",
      nahled: "./images/NahledChamps/nahledviego.jpg",
      skin: "./images/Champs/ViegoLunarBeast.jpg",
      zakladni: "./images/Champs/Viego.jpg",
      nadpis: "VIEGO - PADLÝ KRÁL",
      description:
        "Viego je šampion hraný především na horní linii (top lane). Patří do skupiny zabijáků, základní útoky má na blízko. Viego – kdysi vládce dávno ztraceného království – zahynul před tisíci lety, když jeho pokus přivést svou manželku zpět z mrtvých spustil magickou katastrofu známou jako Zničení. Nyní v podobě silného neživého přízraku zmučeného posedlou touhou po své stovky let mrtvé královně řádí Viego jako Padlý král, ovládá smrtící Strašidelnice, aby prohledal Runeterru a našel cokoliv, co by mu ji jednoho dne mohlo vrátit, a ničí všechno, co se mu postaví do cesty, zatímco mu z krutého, zlomeného srdce prýští Černá mlha.",
    },
    {
      name: "Viktor",
      nahled: "./images/NahledChamps/nahledviktor.jpg",
      skin: "./images/Champs/ViktorPsyOps.jpg",
      zakladni: "./images/Champs/Viktor.jpg",
      nadpis: "VIKTOR - MECHANICKÝ PROROK",
      description:
        "Viktor je šampion hraný především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Viktor, zvěstovatel nové technologické éry, zasvětil svůj život rozvoji lidstva. Jakožto idealista, který usiluje o to, aby dovedl obyvatele Zaunu na novou úroveň poznání, věří, že lidstvo může celý svůj potenciál rozvinout pouze tak, že přijme úžasnou evoluci technologie. V těle vylepšeném díky oceli a vědě se Viktor neúnavně žene za zářivější budoucností.",
    },
    {
      name: "Vladimir",
      nahled: "./images/NahledChamps/nahledvladimir.jpg",
      skin: "./images/Champs/VladimirNightbringer.jpg",
      zakladni: "./images/Champs/Vladimir.jpg",
      nadpis: "VLADIMIR - ŠARLATOVÝ DĚS",
      description:
        "Vladimir je šampion hraný především na horní linii (top lane) nebo na mid lane. Patří do skupiny mágů, základní útoky má na dálku. Krvežíznivý démon Vladimir ovlivňoval záležitosti Noxu již od raných dní této říše. Umění hemomancie mu nejen nezvykle prodloužilo život, ale navíc mu umožňuje ovládat mysli a těla ostatních tak snadno, jako by byly jeho vlastní. V okázalých saloncích noxijské šlechty tak mohl kolem sebe vybudovat fanatický kult – a v temných zadních uličkách s pomocí této magie vysává své nepřátele dosucha.",
    },
    {
      name: "Volibear",
      nahled: "./images/NahledChamps/nahledvoli.jpg",
      skin: "./images/Champs/VolibearAnniversary.jpg",
      zakladni: "./images/Champs/Volibear.jpg",
      nadpis: "VOLIBEAR - NEUTUCHAJÍCÍ BOUŘE",
      description:
        "Volibear je šampion hraný především na horní linii (top lane) nebo v džungli. Patří do skupiny bojovníků, základní útoky má na blízku. Volibear je pro ty, kteří ho stále uctívají, ztělesněná bouře. Ničivý, divoký a tvrdohlavě odhodlaný – existoval ještě předtím, než smrtelníci kráčeli po freljordské tundře, a zuřivě brání země, které vytvořil s ostatními polobohy. Civilizaci a slabost, kterou přinesla, chová v hluboké nenávisti a nyní usiluje o návrat starých způsobů – když byla země nezkrocená a krev volně tekla – a dychtivě bojuje se všemi, kteří mu vzdorují, pomocí zubů, drápů a hromového odhodlání.",
    },
    {
      name: "Warwick",
      nahled: "./images/NahledChamps/nahledww.jpg",
      skin: "./images/Champs/WarwickBigBad.jpg",
      zakladni: "./images/Champs/Warwick.jpg",
      nadpis: "WARWICK - BĚSNÍCÍ HNĚV ZAUNU",
      description:
        "Warwick je šampion hraný především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Warwick je zrůda, jež loví v zašedlých uličkách Zaunu. Při mučivých experimentech bylo jeho tělo přeměněno, a tak je nyní jeho samotnou součástí složitý systém komor a pump, plnící jeho tepny alchymistickým hněvem. Ze stínů loví kriminálníky, kteří terorizují hlubiny města. Warwicka přitahuje krev a její vůně jej dohání k šílenství. Nikdo, kdo ji prolije, mu neunikne.",
    },
    {
      name: "Wukong",
      nahled: "./images/NahledChamps/nahledwukong.jpg",
      skin: "./images/Champs/WukongUnderworld.jpg",
      zakladni: "./images/Champs/Wukong.jpg",
      nadpis: "WUKONG - OPIČÍ KRÁL",
      description:
        "Wukong je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Wukong je rozverný vastajský taškář, který využívá svou sílu, hbitost a inteligenci k tomu, aby zmátl své soupeře a získal nad nimi výhodu. Poté, co našel věrného přítele ve válečníkovi známém jako Mistr Yi, se stal posledním studentem prastarého bojového umění wuju. Nyní putuje Ionií ozbrojen čarovnou holí a dělá vše pro to, aby svou zemi ochránil před záhubou.",
    },
    {
      name: "Xayah",
      nahled: "./images/NahledChamps/nahledxayah.jpg",
      skin: "./images/Champs/XayahSG.jpg",
      zakladni: "./images/Champs/Xayah.jpg",
      nadpis: "XAYAH - REBELKA",
      description:
        "Xayah je šampionka hraná především na spodní linii (bottom lane), jako jednotka fyzického poškození (AD carry). Patří do skuipiny střelců, základní útoky má na dálku. Xayah, smrtící a přesná, je vastajská revolucionářka, která vede svou osobní válku za záchranu svého lidu. Díky své rychlosti, lstivosti a jako břitva ostrým perutním čepelím zabije každého, kdo se jí postaví do cesty. Xayah bojuje po boku svého druha a milence Rakana, aby zachránili svůj zmenšující se kmen a obnovili svou rasu ke Xayině obrazu o její zašlé slávě.",
    },
    {
      name: "Xerath",
      nahled: "./images/NahledChamps/nahledxerath.jpg",
      skin: "./images/Champs/XerathDarkStar.jpg",
      zakladni: "./images/Champs/Xerath.jpg",
      nadpis: "XERATH - VYŠŠÍ MÁG",
      description:
        "Xerath je šampion hraný především na středové linii (mid lane) nebo na spodní linii jako podpora (support). Patří do skupiny mágů, základní útoky má na dálku. Xerath je Vyzdviženým mágem starobylé Shurimy. Je bytostí stvořenou z čiré magické energie, jež je spoutána do úlomků kouzelného sarkofágu. Byl uvězněn pod pouštními dunami po celá tisíciletí, ale vzestup Shurimy jej ze starobylého vězení osvobodil. Jeho moc jej dohnala k šílenství. Xerath nyní prahne po tom, aby získal zpět vše, co mu podle jeho pomatené mysli náleží, a aby nahradil stávající civilizace jednou jedinou, jež by byla podle jeho vlastních představ.",
    },
    {
      name: "Xin Zhao",
      nahled: "./images/NahledChamps/nahledxin.jpg",
      skin: "./images/Champs/XinZhaoDragonslayer.jpg",
      zakladni: "./images/Champs/XinZhao.jpg",
      nadpis: "XIN ZHAO - DEMACIJSKÝ SENEŠAL",
      description:
        "Xin Zhao je šampion hraný především v džungli. Patří do skupiny bojovníků, základní útoky má na blízko. Xin Zhao je neochvějný válečník, věrný služebník vládnoucí dynastie Lightshieldů. Kdysi byl odsouzen k boji v noxijských arénách, kde přežil bezpočet gladiátorských vystoupení, ovšem když jej po čase osvobodila demacijská vojska, dal svůj život i věrnost do služeb svým statečným zachráncům. Se svým oblíbeným oštěpem tří drápů nyní Xin Zhao bojuje za své nové království a troufale vyzývá k boji všechny nepřátele bez ohledu na jejich početní převahu.",
    },
    {
      name: "Yasuo",
      nahled: "./images/NahledChamps/nahledyasuo.jpg",
      skin: "./images/Champs/YasuoTrueDamage.jpg",
      zakladni: "./images/Champs/Yasuo.jpg",
      nadpis: "YASUO - ZAHANBENÝ",
      description:
        "Yasuo je šampion hraný především na středové linii. Patří do skupiny bojovníků, základní útoky má na blízko. Odhodlaný ionský bojovník Yasuo je mrštný šermíř, jenž používá proti nepřátelům sílu samotného větru. Když byl ještě pyšný mladík, byl obviněn z vraždy svého mistra – jelikož nebyl schopen prokázat svou nevinu, byl donucen v sebeobraně zabít vlastního bratra. Přestože skutečný vrah jeho mistra byl nakonec odhalen, Yasuo si nikdy nedokázal odpustit, co všechno provedl, a nyní se toulá po své domovině, přičemž jeho meč neprovází nic jiného než vítr.",
    },
    {
      name: "Yone",
      nahled: "./images/NahledChamps/nahledyone.jpg",
      skin: "./images/Champs/YoneSpiritBlossom.jpg",
      zakladni: "./images/Champs/Yone.jpg",
      nadpis: "YONE - NEZAPOMENUTÝ",
      description:
        "Yone je šampion hraný především na středové linii. Patří do skupiny zabijáků, základní útoky má na blízko. Zaživa to byl Yone – nevlastní bratr Yasua a uznávaný žák šermířské školy ve své vesnici. Ale po smrti, kdy padl bratrovou rukou, zjistil, že ho pronásleduje zlomyslná bytost ze světa duchů, kterou byl donucen zabít jejím vlastním mečem. Nyní je jeho prokletím nosit na tváři její démonickou masku. Yone neúnavně loví všechny podobné bytosti, aby pochopil, čím se stal.",
    },
    {
      name: "Yorick",
      nahled: "./images/NahledChamps/nahledyorick.jpg",
      skin: "./images/Champs/YorickArclight.jpg",
      zakladni: "./images/Champs/Yorick.jpg",
      nadpis: "YORICK - PASTÝŘ DUŠÍ",
      description:
        "Yorick je šampion hraný především na horní linii (top lane). Patří do skupiny bojovníků, základní útoky má na blízko. Yorick je posledním žijícím členem dávno zapomenutého mnišského řádu. Jeho požehnáním a zároveň i prokletím je moc nad mrtvými. Od té doby, co je uvězněn na Stínových ostrovech, mu společnost dělají pouze rozkládající se mrtvoly a kvílející duchové, kteří se k němu stahují. Yorickovy činy mohou působit děsivě, ukrývá se za nimi však šlechetné poslání: snaží se vymanit svou domovinu z kletby Zničení.",
    },
    {
      name: "Yuumi",
      nahled: "./images/NahledChamps/nahledyuumi.jpg",
      skin: "./images/Champs/YuumiBattlePrincipal.jpg",
      zakladni: "./images/Champs/Yuumi.jpg",
      nadpis: "YUUMI - KOUZELNÁ KOČKA",
      description:
        "Yuumi je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Yuumi, kouzelná kočka z Bandle City, bývala pomocníčkem yordlí čarodějky jménem Norra. Když její panička jednoho dne záhadně zmizela, stala se Yuumi strážkyní Norřiny Knihy horizontů, jež je nadaná vlastním rozumem, a cestovala skrze portály na jejích stránkách ve snaze kouzelnici opět najít. Yuumi nic nemiluje tolik jako láskyplné pohlazení, a tak vyhledává přátelské společníky, k nimž by se mohla na své pouti připojit, a chrání je zářivým štítem a zuřivou odvahou. Zatímco Knížka by se chtěla soustředit jen na jejich úkol, Yuumi často podlehne světským pokušením, jako jsou lenošení a ryby. Nakonec se ale stejně pokaždé vrátí k hledání své nejlepší přítelkyně.",
    },
    {
      name: "Zac",
      nahled: "./images/NahledChamps/nahledzac.jpg",
      skin: "./images/Champs/ZacBattlecast.jpg",
      zakladni: "./images/Champs/Zac.jpg",
      nadpis: "ZAC - TAJNÁ ZBRAŇ",
      description:
        "Zac je šampion hraný především v džungli. Patří do skupiny tanků, základní útoky má na blízko. Zac vznikl coby následek prosáknutí toxického materiálu z chemotechnického ložiska, který se dostal do izolované jeskyně hluboko pod zaunskou Jímkou. Navzdory svému skromnému původu se Zac z prvotního slizu vyvinul v myslící bytost, která obývá městské potrubí a občas se vynoří, aby pomohla těm, kteří si nemohou pomoct sami, nebo aby pomohla znovuvybudovat rozbitou zaunskou infrastrukturu.",
    },
    {
      name: "Zed",
      nahled: "./images/NahledChamps/nahledzed.jpg",
      skin: "./images/Champs/ZedPsyOps.jpg",
      zakladni: "./images/Champs/Zed.jpg",
      nadpis: "ZED - MISTR STÍNŮ",
      description:
        "Zed je šampion hraný především na středové linii. Patří do skupiny zabijáků, základní útoky má na blízko. Bezohledný a zcela nemilosrdný Zed je vůdcem Stínového řádu – organizace vytvořené s cílem využít tradiční ionskou magii a bojová umění k vojenským účelům a vyhnat noxijské vetřelce. Během války v nouzi odhalil tajemství stínové formy – zlovolné duchovní magie, která je stejně mocná jako nebezpečná a pokřivující. Zed všechny tyto zakázané techniky ovládl, aby mohl zničit vše, co považuje za hrozbu pro svůj národ nebo nový řád.",
    },
    {
      name: "Ziggs",
      nahled: "./images/NahledChamps/nahledziggs.jpg",
      skin: "./images/Champs/ZiggsSnowDay.jpg",
      zakladni: "./images/Champs/Ziggs.jpg",
      nadpis: "ZIGGS - ODBORNÍK NA EXPLOZE",
      description:
        "Ziggs je šampion hraný především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Yordl Ziggs, milující velké bomby a krátké zápalné šňůry, je už od přírody sám výbušnou silou. Předvídatelný život asistenta piltoverského vynálezce jej nudil, a tak se spřátelil se šílenou modrovlasou rakeťačkou Jinx. Po divoké noci strávené ve městě si vzal Ziggs k srdci její radu a přestěhoval se do Zaunu, kde se může svobodněji věnovat svým koníčkům a terorizovat chemobarony i běžné občany ve své nekonečné touze vyhazovat věci do povětří.",
    },
    {
      name: "Zilean",
      nahled: "./images/NahledChamps/nahledzilean.jpg",
      skin: "./images/Champs/ZileanTimeMachine.jpg",
      zakladni: "./images/Champs/Zilean.jpg",
      nadpis: "ZILEAN - STRÁŽCE ČASU",
      description:
        "Zilean je šampion hraný především na spodní linii na roli podpory (supporta). Patří do skupiny podpory (supportů), základní útoky má na dálku. Zilean býval mocným ikacijským mágem, jenž poté, co se stal svědkem zničení své vlasti Prázdnotou, propadl posedlosti tokem času. Aniž by si dovolil strávit jedinou minutu truchlením nad touto děsivou ztrátou, vyvolal prastarou časovou magii, která mu měla odhalit všechny možné výsledky. Stal se de facto nesmrtelným a nyní cestuje minulostí, přítomností i budoucností, přetváří kolem sebe tok času a neustále hledá onen nepolapitelný okamžik, který by dokázal otočit běh hodin a zrušil zkázu Ikacie.",
    },
    {
      name: "Zoe",
      nahled: "./images/NahledChamps/nahledzoe.jpg",
      skin: "./images/Champs/ZoeArcanist.jpg",
      zakladni: "./images/Champs/Zoe.jpg",
      nadpis: "ZOE - ASPEKT SOUMRAKU",
      description:
        "Zoe je šampion hraný především na středové linii. Patří do skupiny mágů, základní útoky má na dálku. Coby ztělesnění neplechy, fantazie a změny funguje Zoe jako kosmický posel hory Targon, který zvěstuje velké události, jež přetvářejí podobu světa. Už jen její přítomnost překrucuje mystickou matematiku, která vládne realitám, což občas vede ke katastrofám, aniž by za nimi byla vědomá snaha či zášť. Tím se možná vysvětluje ta uvolněná nonšalance, se kterou Zoe přistupuje ke svým povinnostem a díky které má spoustu času věnovat se hrám, žertování na úkor smrtelníků či dalším podobným radovánkám. Setkání se Zoe může být veselé a plné optimismu, ale vždy je v tom víc, než se zdá, a často to je nesmírně nebezpečné.",
    },
    {
      name: "Zyra",
      nahled: "./images/NahledChamps/nahledzyra.jpg",
      skin: "./images/Champs/ZyraCoven.jpg",
      zakladni: "./images/Champs/Zyra.jpg",
      nadpis: "ZYRA - PROBUZENÍ TRNŮ",
      description:
        "Zyra je šampionka hraná především na spodní linii na roli podpory (supporta). Patří do skupiny mágů, základní útoky má na dálku. Zyra, jež se zrodila během pradávné magické katastrofy, je ztělesněním hněvu přírody – svůdným spojením rostliny a člověka, v jehož každém kroku raší nový život. Smrtelné obyvatele Valoranu považuje za pouhou kořist pro své rostoucí potomstvo a ochotně je všechny pobíjí krupobitím smrtících trnů. Nikdo netuší, jaký cíl Zyra skutečně sleduje. Ví se o ní jen tolik, že putuje světem a naplno se oddává primitivní touze kolonizovat a ničit všechny ostatní formy života.",
    },
  ],
  valorantChamps: [
    {
      name: "Brimstone",
      nahled: "./images/NahledValor/nahledbrimstone.jpg",
      zakladni: "./images/ChampsVal/01Brimstone.jpg",
      description:
        "Brimstoneův orbitální arzenál, který se připojil z USA, zajišťuje, že jeho tým má vždy výhodu. Jeho schopnost dodávat nástroje přesně a z dálky z něj dělá bezkonkurenčního velitele na zemi.",
    },
    {
      name: "Phoenix",
      nahled: "./images/NahledValor/nahledphoenix.jpg",
      zakladni: "./images/ChampsVal/02Phoenix.jpg",
      description:
        "Pochází z Velké Británie, Phoenixova hvězdná síla prosvítá jeho bojovým stylem, bleskem a vzplanutím zapálí bojiště. Ať už má zálohu nebo ne, vrhne se do boje podle svých vlastních podmínek.",
    },
    {
      name: "Sage",
      nahled: "./images/NahledValor/nahledsage.jpg",
      zakladni: "./images/ChampsVal/03Sage.jpg",
      description:
        "Pevnost Číny, Sage vytváří bezpečí pro sebe a svůj tým, ať už je kdekoli. Dokáže oživit padlé přátele a odvrátit agresivní tlaky. Poskytuje klidné centrum pekelnému boji.",
    },
    {
      name: "Sova",
      nahled: "./images/NahledValor/nahledsova.jpg",
      zakladni: "./images/ChampsVal/04Sova.jpg",
      description:
        "Sova, který se narodil z věčné zimy ruské tundry, sleduje, vyhledává a eliminuje nepřátele s nemilosrdnou účinností a přesností. Jeho vlastní luk a neuvěřitelné schopnosti průzkumu zajišťují, že i když utíkáte, nemůžete se ukrýt.",
    },
    {
      name: "Viper",
      nahled: "./images/NahledValor/nahledviper.jpg",
      zakladni: "./images/ChampsVal/05Viper.jpg",
      description:
        "Americký chemička, Viper, rozmístila řadu jedovatých chemických zařízení, aby ovládla bojiště a ochromila vizi nepřítele. Pokud její kořist nezabijí toxiny, její myšlenkové hry určitě ano.",
    },
    {
      name: "Cypher",
      nahled: "./images/NahledValor/nahledcypher.jpg",
      zakladni: "./images/ChampsVal/06Cypher.jpg",
      description:
        "Marocký informační zprostředkovatel Cypher je monitorovací síť v jednom těle, který sleduje každý nepřátelský pohyb. Žádné tajemství není v bezpečí. Žádný manévr nezůstane bez povšimnutí. Cypher tě vždy sleduje.",
    },
    {
      name: "Reyna",
      nahled: "./images/NahledValor/nahledreyna.jpg",
      zakladni: "./images/ChampsVal/07Reyna.jpg",
      description:
        "Reyna, která byla vytvořena v srdci Mexika, dominuje v jednotlivých soubojích a vyřádí se s každým zabitím, které získá. Její schopnost je omezena pouze její surovou dovedností, takže je vysoce závislá na výkonu.",
    },
    {
      name: "Killjoy",
      nahled: "./images/NahledValor/nahledkilljoy.jpg",
      zakladni: "./images/ChampsVal/08Killjoy.jpg",
      description:
        "Geniální Němka. Killjoy snadno zajišťuje bitevní pole pomocí svého arzenálu vynálezů. Pokud poškození způsobené její výbavou nezastaví její nepřátele, debuff jejích robotů s nimi udělá krátkou práci.",
    },
    {
      name: "Breach",
      nahled: "./images/NahledValor/nahledbreach.jpg",
      zakladni: "./images/ChampsVal/09Breach.jpg",
      description:
        "Breach, bionický Švéd, střílí silné, cílené kinetické výbuchy, aby agresivně vyčistil cestu nepřátelskou zemí. Poškození a narušení, které způsobí, zajistí, že žádný boj nebude nikdy fér.",
    },
    {
      name: "Omen",
      nahled: "./images/NahledValor/nahledomen.jpg",
      zakladni: "./images/ChampsVal/10Omen.jpg",
      description:
        "Omen, přízrak vzpomínky, loví ve stínu. Zneškodňuje nepřátele, teleportuje se přes pole. Pokud se nějaký nepřítel pokusí postavit zpět na nohy, zmocní se ho paranoia.",
    },
    {
      name: "Jett",
      nahled: "./images/NahledValor/nahledjett.jpg",
      zakladni: "./images/ChampsVal/11Jett.jpg",
      description:
        "Jett pochází z Jižní Korei. Její hbitý a vyhýbavý bojový styl jí umožňuje riskovat jako nikdo jiný. Krouží kolem každé potyčky a střílí nepřátele, než vůbec vědí, co je zasáhlo. ",
    },
    {
      name: "Raze",
      nahled: "./images/NahledValor/nahledraze.jpg",
      zakladni: "./images/ChampsVal/12Raze.jpg",
      description:
        "Raze exploduje z Brazílie se svou velkou osobností a velkými zbraněmi. Se svým herním stylem tupé síly a traumatu vyniká v odplavování zabarikádovaných nepřátel a čištění úzkých prostor s velkorysou dávkou „boomu“.",
    },
    {
      name: "Skye",
      nahled: "./images/NahledValor/nahledskye.jpg",
      zakladni: "./images/ChampsVal/13Skye.jpg",
      description:
        "Skye a její skupina zvířat, které pocházejí z Austrálie, procházejí cestu nepřátelským územím. Díky jejím výtvorům, které brání nepříteli, a její síle uzdravovat ostatní, je tým nejsilnější a nejbezpečnější po jejím boku.",
    },
    {
      name: "Yoru",
      nahled: "./images/NahledValor/nahledyoru.jpg",
      zakladni: "./images/ChampsVal/14Yoru.jpg",
      description:
        "Japonský rodák Yoru trhá díry skrz realitu, aby neviditelně pronikl do nepřátelských linií. Použitím klamu a agresivity ve stejné míře, dostane každého předtím, než vůbec zjistí kam se dívat.",
    },
    {
      name: "Astra",
      nahled: "./images/NahledValor/nahledastra.jpg",
      zakladni: "./images/ChampsVal/15Astra.jpg",
      description:
        "Ghanská agentka Astra využívá energie vesmíru k přetváření bojišť podle jejího rozmaru. S plným vedením své astrální formy a talentem na hlubokou strategickou předvídavost je vždy o astronomickou jednotku napřed.",
    },
  ],

  users: [
    {
      name: "admin",
      email: "admin@admin.com",
      password: bcrypt.hashSync("admin", 8),
      isAdmin: true,
    },
  ],
};

export default data;
