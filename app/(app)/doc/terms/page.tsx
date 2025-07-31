"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-border/50">
        <div className="container mx-auto px-6 grid gap-5">
          <div className="prose w-full max-w-4xl mx-auto p-6">
            <h1 className="text-2xl mb-5">Általános Szerződési Feltételek</h1>
            <p className="mb-4">
              Cronos Global Korlátolt Felelősségű Társaság által a Packli
              szolgáltatásaira alkalmazott, üzleti partnereknek szóló Általános
              Szerződési Feltételek
            </p>
            <p className="mb-4">I. Preambulum</p>
            <p className="mb-4">
              A jelen Általános Szerződési Feltételek (a továbbiakban:
              <strong>ÁSZF</strong>) célja, hogy teljeskörűen szabályozza a
              Cronos Global Korlátolt Felelősségű Társaság (cégjegyzékszám:
              13-09-209476 , székhely: 2013 Pomáz, Sólyom utca 10.) (a
              továbbiakban: <strong>Szállítmányozó</strong>) és az általa
              nyújtott szolgáltatásokat igénybe vevő egyéni vállalkozók, jogi
              személyek és jogi személyiséggel nem rendelkező egyéb szervezetek,
              mint megbízók (a továbbiakban: <strong>Megbízó</strong>) között
              létrejött szerződéses jogviszony valamennyi általános elemét.
            </p>
            <p className="mb-4">
              II. Az ÁSZF-ben használt fogalmak magyarázata
            </p>
            <p className="mb-4">
              <strong>Szállítmányozó:</strong>
            </p>
            <p className="mb-4">
              Jelen ÁSZF vonatkozásában szállítmányozónak minősül Cronos Global
              Korlátolt Felelősségű Társaság (cégjegyzékszám: 13-09-209476,
              székhely: 2013 Pomáz, Sólyom utca 10., adószám: 28963680-2-13).
            </p>
            <p className="mb-4">
              <strong>Megbízó:</strong>
            </p>
            <p className="mb-4">
              Jelen ÁSZF vonatkozásában megbízó az a természetes személy, jogi
              személy, vagy jogi személyiség nélküli egyéb gazdálkodó szervezet,
              aki/ amely a Szolgáltatást igénybe veszi, és akinek/ amelynek
              üzleti ügyfélként történő besorolását - a Weboldalon történő
              regisztráció során- a Szállítmányozó jóváhagyta.
            </p>
            <p className="mb-4">
              <strong>Szolgáltatás:</strong>
            </p>
            <p className="mb-4">
              Mindazon szállítmányozási szolgáltatások - ideértve különösen, de
              nem kizárólag csomag szállítással, áru fuvarozásával, gyűjtésével,
              tárolásával, mozgatásával és terítésével kapcsolatos, illetve a
              fentiekkel összefüggő közreműködést és tanácsadást -, melyeket a
              Szállítmányozó az egyes Megbízók számára nyújt az ÁSZF-ben
              meghatározott feltételek szerint.
            </p>
            <p className="mb-4">
              <strong>Alapszolgáltatás:</strong>
            </p>
            <p className="mb-4">
              A küldemény szállítmányozására irányuló megbízás szerződésszerű
              ellátásához szükséges valamennyi szolgáltatás, melyek
              teljesítésére a Szállítmányozó a szállítmányozási alapdíj
              megfizetése ellenében kötelezettséget vállal.
            </p>
            <p className="mb-4">
              <strong>Kiegészítő szolgáltatás:</strong>
            </p>
            <p className="mb-4">
              Azok a szolgáltatások, melyek teljesítését a Szállítmányozó az
              alapszolgáltatáson felül, a Megbízó erre irányuló kifejezett
              igénye esetén, külön díj megfizetése ellenében vállalja.
            </p>
            <p className="mb-4">
              <strong>Áru:</strong>
            </p>
            <p className="mb-4">
              Minden olyan dolog, melyet a Megbízó vagy harmadik személy
              küldeményként történő továbbítás céljából bocsátott a
              Szállítmányozó rendelkezésére. Veszélyes áru: Minden olyan áru,
              amely hivatalosan veszélyes árunak minősül, ideértve azokat is,
              amelyek veszélyesek, gyúlékonyak, radioaktívak, amelyeknek
              károsító, vagy sérülést okozó jellegük van, vagy ilyen árukká
              válhatnak.
            </p>
            <p className="mb-4">
              <strong>Értéktárgy:</strong>
            </p>
            <p className="mb-4">
              Nemesfémek, érmék, pénz, értékpapírok, drágakövek, ékszerek, antik
              tárgyak, festmények, egyéb művészeti alkotások és ezekhez hasonló
              jellegű ingóságok.
            </p>
            <p className="mb-4">
              <strong>Keretszerződés:</strong>
            </p>
            <p className="mb-4">
              Szállítmányozó által kínált szolgáltatások igénybevétele tárgyában
              a Megbízó és a Szállítmányozó elektronikus úton kötött
              megállapodása, amelyben a Felek a közöttük fennálló
              szállítmányozási jogviszonyt keretjelleggel szabályozzák.
            </p>
            <p className="mb-4">
              <strong>Egyedi szerződés:</strong>
            </p>
            <p className="mb-4">
              A Keretszerződés hatálya alatt a Megbízó és Szállítmányozó között
              elektronikus úton létrejött megállapodás, amelyben a Felek
              rögzítik az adott szállítmányozási feladat pontos meghatározását,
              teljesítésének határidejét, a Megbízónak a szállítmányozás
              ellátásával kapcsolatos egyedi elvárásait, valamint a fizetendő
              szállítmányozási díj összegét.
            </p>
            <p className="mb-4">
              <strong>Weboldal:</strong>
            </p>
            <p className="mb-4">
              A Szállítmányozó által üzemeltett online felület, amely a
              https://packli.hu URL cím alatt érhető el és amely elsődlegesen a
              szállítmányozásra vonatkozó megbízások érvényes leadására és
              visszaigazolására, valamint kezelésére szolgál.
            </p>
            <p className="mb-4">
              <strong>Küldemény:</strong>
            </p>
            <p className="mb-4">
              Mindazon áruk, értéktárgyak, melyek szállítmányozására a
              Szállítmányozó a jelen ÁSZF alapján létrejövő egyedi szerződések
              alapján kötelezettséget vállal. Szállítmányozó a Weboldalon
              folyamatosan közzéteszi azon áruk és értéktárgyak listáját, melyek
              a szállítmányozásból ki vannak zárva.
            </p>
            <p className="mb-4">
              <strong>Rendeléskezelő felület:</strong>
            </p>
            <p className="mb-4">
              A Weboldalon elvégzett regisztrációt, majd bejelentkezést követően
              elérhető felület, melyen keresztül a Megbízó a szállítmányozási
              feladatok teljesítésére vonatkozó megbízást tud adni a
              Szállítmányozó részére.
            </p>
            <p className="mb-4">
              <strong>Körméret:</strong>
            </p>
            <p className="mb-4">
              A küldemény hosszúságának, szélességének és magasságának összege,
              centiméterben meghatározva. Az a küldemény, ami méretei, illetve
              súlya alapján a Szállítmányozó által meghatározott &quot;S&quot;
              és &quot;M&quot; kategóriákba sorolható.
            </p>
            <p className="mb-4">
              <strong>Megfelelő biztosíték:</strong>
            </p>
            <p className="mb-4">
              Olyan biztosíték, mely a végrehajtási láncban résztvevőknél
              várhatóan felmerülő költségek legalább 10%-kal növelt összegét
              eléri, és alkalmas arra, hogy azt a Szállítmányozó minden további,
              a Megbízó vagy harmadik személy ellen folytatott érvényesítési
              eljárás nélkül, azonnal igénybe vegye.
            </p>
            <p className="mb-4">
              <strong>Észszerű biztosíték:</strong>
            </p>
            <p className="mb-4">
              Olyan biztosíték, amit a Megbízó pénzben vagy bankgarancia
              biztosításával szolgáltat, és az a biztosíték érvényesítésével
              járó szokásos költségeket is alapul véve eléri legalább a
              Szállítmányozó lejárt és nem vitatott követelésének 10%-kal növelt
              összegét.
            </p>
            <p className="mb-4">III. ÁSZF hatálya</p>
            <p className="mb-4">
              <strong>ÁSZF személyi hatálya</strong>
            </p>
            <p className="mb-4">
              Jelen ÁSZF kiterjed a Szállítmányozó és a Megbízó között a
              szolgáltatás igénybevételével létrejövő szállítmányozási
              jogviszonyokra.
            </p>
            <p className="mb-4">
              <strong>ÁSZF időbeli hatálya</strong>
            </p>
            <p className="mb-4">
              Jelen ÁSZF annak kihirdetésével lép hatályba, és annak
              visszavonásáig vagy módosításáig hatályban marad.
            </p>
            <p className="mb-4">
              <strong>ÁSZF területi hatálya</strong>
            </p>
            <p className="mb-4">
              Jelen ÁSZF hatálya kiterjed valamennyi, a Szállítmányozó által
              Európai Unió területén nyújtott szolgáltatásra.
            </p>
            <p className="mb-4">
              <strong>ÁSZF tárgyi hatálya</strong>
            </p>
            <p className="mb-4">
              Jelen ÁSZF teljeskörűen szabályozza a Szállítmányozó és a Megbízó
              között, a Szolgáltatás igénybevételével létrejövő szállítmányozási
              jogviszonyt.
            </p>
            <p className="mb-4">
              A Szállítmányozó és a Megbízó között a jelen ÁSZF előírásainak
              megfelelően létrejött keret-, és egyedi szerződések teljesítésével
              összefüggésben felmerült vitás kérdések elbírálására a jelen ÁSZF
              rendelkezései irányadóak.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy - eltérő megállapodás hiányában - a jelen ÁSZF hatálya nem
                terjed ki azokra a jogviszonyokra, melyek vonatkozásában a Felek
                egyedi szállítmányozási feltételekben állapodtak meg,
                függetlenül attól, hogy az adott jogviszony az ÁSZF
                hatálybalépése előtt vagy azt követően keletkezett.
              </strong>
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy a jelen ÁSZF alapján létrejövő szállítmányozási
                jogviszonyokra a Megbízó által esetlegesen kialakított saját
                általános szerződési feltételei nem alkalmazhatók.
              </strong>
            </p>
            <p className="mb-4">
              IV. ÁSZF elérhetősége, módosítása, joghatóság és illetékesség
            </p>
            <p className="mb-4">
              Szállítmányozó biztosítja, hogy a Megbízó az ÁSZF elfogadását
              megelőzően annak tartalmát megismerhesse, értelmezhesse.
              Szállítmányozó az ÁSZF mindenkor hatályos szövegét a Weboldalon
              közzéteszi.
            </p>
            <p className="mb-4">
              Szállítmányozó fenntartja magának a jogot arra, hogy a jelen ÁSZF
              rendelkezéseit bármikor egyoldalúan módosítsa. Szállítmányozó a
              módosított ÁSZF-et legalább annak hatálybalépését megelőző 15
              (tizenöt) nappal a Weboldalon közzéteszi.
            </p>
            <p className="mb-4">
              A jelen ÁSZF által nem szabályozott kérdésekben a magyar jog, így
              különösen a Polgári Törvénykönyvről szóló 2013. évi V. törvény, a
              közúti árutovábbítási szerződésekről szóló 120/2016. (VI.7.) Korm.
              rendelet, a díj ellenében végzett közúti árutovábbítási, valamint
              saját számlás közúti áruszállítási tevékenységről szóló 261/2011.
              (XII.7.) Korm. rendelet, valamint a postai szolgáltatásokról szóló
              2012. évi CLIX. törvény rendelkezései alkalmazandók, továbbá
              nemzetközi elemet tartalmazó szállítmányozás esetén a Nemzetközi
              Közúti Árufuvarozási Szerződésről (CMR) szóló Egyezményben
              foglaltak megfelelően irányadók.
            </p>
            <p className="mb-4">
              A Szállítmányozó által a szolgáltatásnyújtással összefüggésben
              végzett személyes adatkezelési tevékenységek tekintetében az
              Európai Parlament és a Tanács 2016/679 Rendelete (általános
              adatvédelmi rendelet), valamint az információs önrendelkezési
              jogról és az információszabadságról szóló 2011. évi CXII. törvény
              vonatkozó rendelkezései irányadók.
            </p>
            <p className="mb-4">
              Felek a közöttük létrejött szállítmányozási jogviszonyból fakadó
              vitás kérdéseket elsődlegesen tárgyalások útján, peres eljáráson
              kívül kívánják rendezni. Amennyiben a felek közötti tárgyalások
              nem vezetnek eredményre, vagy a vitarendezés előreláthatólag
              sikertelen, úgy a felek kikötik a Székesfehérvári Járásbíróság
              (8000 Székesfehérvár, Dózsa György út 1.), illetve a
              Székesfehérvári Törvényszék (8000 Székesfehérvár, Dózsa György út
              1.) kizárólagos illetékességét. Abban az esetben, ha a pertárgy
              értéke eléri vagy meghaladja a 3.000.000,- forint összeget, úgy a
              Felek - külön figyelemfelhívó tájékoztatás után - alávetik magukat
              a Budapesti Ügyvédi Kamara Elnöksége által ajánlott
              Mintaszabályzat szerint megalakuló és eljáró eseti
              választottbíróság kizárólagos döntésének. Az eseti
              választottbíróság tagjait a Budapesti Ügyvédi Kamara tagjaként a
              Magyar Ügyvédi Kamara által vezetett névjegyzékbe bejegyzett
              ügyvédek közül választják. Az eljáró választottbírók száma 3
              (három). Az eljárás során a magyar nyelvet kell alkalmazni.
            </p>
            <p className="mb-4">V. Személyes adatok kezelése</p>
            <p className="mb-4">
              Szállítmányozó szavatosságot vállal arra, hogy a
              szolgáltatásnyújtással összefüggésben tudomására jutó személyes
              adatokat az irányadó adatvédelmi jogszabályi előírásokkal
              összhangban kezeli.
            </p>
            <p className="mb-4">
              Szállítmányozó szavatol továbbá azért, hogy a jelen szerződés
              teljesítése során végzett adatkezelési tevékenysége mindenben
              megfelel az Európai Unió és a Tanács 2016/679 számú általános
              adatvédelmi rendeletének (a továbbiakban: GDPR), valamint az
              információs önrendelkezési jogról és az információszabadságról
              szóló 2011. évi CXII. törvénynek (a továbbiakban: Infotv.), a
              Szállítmányozó így különösen, de nem kizárólagosan megfelelő
              jogalappal rendelkezik a személyes adatok kezeléséhez, az
              adatkezelési tevékenységet jogszerű cél elérése érdekében végzi,
              ezen cél eléréséhez feltétlenül szükséges ideig és adatkör
              vonatkozásában.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja az adatkezeléssel érintett természetes
              személyek figyelmét arra, hogy az adatkezeléssel összefüggő
              jogaikat a Szállítmányozóval, mint adatkezelővel szemben a
              Szállítmányozó által közzétett Adatkezelési tájékoztatóban
              részletezett módon gyakorolhatják.
            </p>
            <p className="mb-4">
              A Szállítmányozó által végzett adatkezelési tevékenységek
              részletszabályait a Szállítmányozó által elkészített és a
              Weboldalon közzétett Adatkezelési tájékoztató tartalmazza, mely
              közvetlenül elérhető az alábbi linken: https://packli.hu/privacy
            </p>
            <p className="mb-4">
              VI. Szállítmányozó által nyújtott szolgáltatások meghatározása
            </p>
            <p className="mb-4">
              A jelen ÁSZF-ben írtak szerint létrejövő szállítmányozási
              szerződés alapján a Szállítmányozó a saját nevében, a Megbízó
              javára küldemény továbbításával összefüggő szerződések megkötésére
              és ezzel kapcsolatos jognyilatkozatok megtételére, a Megbízó pedig
              szállítmányozási díj fizetésére köteles.
            </p>
            <p className="mb-4">
              Szállítmányozó szavatol azért, hogy a szolgáltatást a lehető
              legmagasabb szakmai színvonalon, az irányadó sztenderdekkel
              összhangban nyújtja a Megbízó részére. Szállítmányozó rendelkezik
              mindazon szakmai felkészültséggel és technikai feltételekkel,
              melyek szükségesek a szolgáltatásnyújtás körében felmerülő
              valamennyi feladat teljesítéséhez. Szállítmányozó a
              szolgáltatásnyújtás során saját belső eljárásrendje szerint jár el
              azzal, hogy köteles a szállítmányozási feladatokat folyamatosan, a
              tőle elvárható legnagyobb gondossággal ellátni, és tevékenységét
              úgy megszervezni, hogy biztosítsa a szállítmányozási feladat
              szakszerű ellátását - a Megbízó érdekeinek elsődlegessége és a
              gondos feladatellátás követelményének megtartása mellett.
            </p>
            <p className="mb-4">
              A Szállítmányozó fenntartja magának a jogot arra, hogy az általa
              kínált bizonyos szolgáltatások igénybevételét az általa előzetesen
              meghatározott feltételek teljesítése esetén tegye lehetővé a
              Megbízók számára.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét, hogy a jelen ÁSZF
              alapján nyújtott szállítmányozási szolgáltatás nem terjed ki a
              Megbízó küldeményeinek becsomagolására, felcímkézésére, illetve
              raktározására. A küldemények csomagolásáról, felcímkézéséről és
              raktározásáról a Megbízó köteles gondoskodni. A küldemények
              csomagolásának és felcímkézésének hiányából, hiányosságából,
              illetve pontatlanságából eredő valamennyi kárért a Szállítmányozó
              kizárja a felelősségét.
            </p>
            <p className="mb-4">
              VII. Szállítmányozási jogviszony létrejötte, szerződéskötés
              technikai lépései
            </p>
            <p className="mb-4">
              Szállítmányozó tájékoztatja a Megbízót, hogy a Szállítmányozó és a
              Megbízó között, a Weboldalon keresztül megkötésre kerülő
              szerződések nem minősülnek írásba foglaltnak. Szállítmányozó a
              Megbízó általi regisztráció és az egyes megbízások leadása során
              .log fájlokat rögzít és tárol, mely alapján utólag visszakövethető
              a szerződések megkötésének folyamata és azok tartalma. A Felek
              között létrejövő szállítmányozási szerződések nyelve magyar.
            </p>
            <p className="mb-4">A. Keretszerződés létrejöttének feltételei</p>
            <p className="mb-4">
              Szállítmányozó és a Megbízó között, a szolgáltatás(ok)
              igénybevételére irányuló szállítmányozási keretjogviszony akkor
              jön létre, amikor a Megbízó regisztrál a Szállítmányozó
              Weboldalán, és ezzel egyidejűleg elfogadja a jelen ÁSZF
              rendelkezéseit.
            </p>
            <p className="mb-4">
              Az érvényes regisztráció feltétele, hogy a Megbízó a Weboldal
              regisztrációs felületén megadjon egy e-mail címet és egy jelszót,
              továbbá a szerződés teljesítéséhez szükséges azonosító adatait.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét arra, hogy a
                Weboldalon történt regisztráció eredményeként - amennyiben azt a
                Szállítmányozó elektronikus úton visszaigazolta - a Megbízó és a
                Szállítmányozó között szállítmányozási keretszerződés jön létre
                a jelen ÁSZF-ben meghatározott feltételek szerint.
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét, hogy a
                keretszerződés létrejöttének feltétele, hogy a Megbízó a
                regisztráció során - az erre szolgáló jelölőnégyzet
                kipipálásával - kifejezetten elfogadja és magára nézve
                kötelezőnek ismerje el a jelen ÁSZF rendelkezéseit.
              </strong>
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét, hogy a Weboldalon
              történő sikeres regisztráció hiányában a Megbízó érvényesen nem
              tud megbízást adni a Szállítmányozó számára az egyes
              szállítmányozási feladatok teljesítésére.
            </p>
            <p className="mb-4">
              A regisztráció megtörténtét követően a Megbízó e-mail címének és
              jelszavának megadásával, vagy Google fiókjának használatával -
              amennyiben ilyen fiókkal a Megbízó rendelkezik - tud bejelentkezni
              a Weboldalra, ahol a megbízás teljesítéséhez szükséges adatokat
              meg tudja adni. Szállítmányozó felhívja a Megbízó figyelmét arra,
              hogy Google fiók használatával történő bejelentkezés esetén a
              Megbízó, vagy a Megbízó képviseletében eljáró személy Google
              fiókjához tartozó profilban rögzített személyes adatok (név,
              e-mail cím, nyelvi beállítások, profilkép) a Google által átadásra
              kerülnek a Szállítmányozó részére.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét arra, hogy a
                Weboldal zárt felületéhez való hozzáférést lehetővé tevő, a
                Megbízó által választott e-mail cím és jelszó bizalmas
                információnak minősül, és a Megbízó köteles megtenni mindazon
                intézkedéseket, melyek segítségével megakadályozható, hogy ezen
                információk illetéktelen harmadik személyek tudomására
                juthassanak. A Szállítmányozó semmilyen körülmények között nem
                ellenőrzi azt, hogy a Weboldal zárt felületére a Megbízó nevében
                belépő személyek jogszerűen jutottak-e a hozzáférési adatok
                birtokába, továbbá a Szállítmányozó nem köteles annak
                vizsgálatára sem, hogy a Megbízó nevében a Weboldal zárt
                felületére belépő személyek rendelkeznek-e megfelelő
                felhatalmazással a Megbízótól a szállítmányozási keretszerződés
                jelen ÁSZF szerinti megkötésére, valamint egyedi megbízások
                adására a Rendeléskezelő felületen keresztül. Jogosultan
                harmadik személyek által - a hozzáférési adatok birtokában - a
                Rendeléskezelő felületen adott megbízásokért, illetve az így
                létrejövő egyedi szállítmányozási szerződésből a Megbízó oldalán
                keletkező kötelezettségek teljesítéséért - illetve az
                esetlegesen felmerült károkért - a Megbízó kizárólagosan
                felelős.
              </strong>
            </p>
            <p className="mb-4">
              B. Egyedi szerződés létrejöttére vonatkozó feltételek
            </p>
            <p className="mb-4">
              A Felek között egyedi szerződés akkor jön létre, amikor a Megbízó
              a Weboldalra való bejelentkezést követően elérhető Rendeléskezelő
              felület használatával, app.packli.hu felületen keresztül
              elektronikus úton megbízást ad a Szállítmányozó részére az általa
              meghatározott szállítmányozási feladatok ellátására, és a megbízás
              teljesítését a Szállítmányozó a jelen ÁSZF-ben írtak szerint
              elvállalja.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét, hogy a jelen ÁSZF
              értelmében a szállítmányozási feladat teljesítésére vonatkozó
              megbízás kizárólag abban az esetben minősül érvényesnek, ha annak
              leadása a Rendeléskezelő felületen keresztül történt.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy amennyiben az adott szállítmányozási feladat teljesítésére
                vonatkozó, a Rendeléskezelő felületen keresztül adott megbízást
                a Szállítmányozó elektronikus visszaigazoló üzenet útján
                elvállalja, úgy a Megbízó és a Szállítmányozó között létrejön az
                egyedi szállítmányozási szerződés, mely szerződés alapján a
                Megbízónak a szolgáltatás igénybevételére vonatkozóan - annak
                Szállítmányozó általi teljesítése esetén - fizetési
                kötelezettsége keletkezik.
              </strong>
            </p>
            <p className="mb-4">
              C. Szállítmányozás teljesítéséhez szükséges adatok megadása
            </p>
            <p className="mb-4">
              A Megbízó a Rendeléskezelő felületen az alábbi - a küldemény
              felvételéhez, továbbításához és kiszolgáltatásához
              elengedhetetlenül szükséges - adatok megadásával tudja rögzíteni
              az egyes megbízásokat:
            </p>
            <p className="mb-4">1. A küldemény kategóriája</p>
            <p className="mb-4">
              Megbízó köteles megjelölni, hogy a Küldemény melyik kategóriába
              tartozik. Szállítmányozó felhívja a figyelmet arra, hogy a
              Weboldal a Megbízó által kiválasztott kategória alapján jeleníti
              meg az elérhető szolgáltatásokat. Szállítmányozó külön felhívja a
              Megbízó figyelmét, hogy az 1 kg össztömeget el nem érő küldemények
              szállítmányozására vonatkozó megbízás esetén a küldemény súlyát 1
              kg-ban kell megadni.
            </p>
            <p className="mb-4">
              Szállítmányozó tájékoztatja a Megbízót, hogy az egyes kategóriák a
              küldemény méretei (szélesség, hosszúság, magasság), maximális
              körmérete és súlya szerint kerültek meghatározásra. A különböző
              kategóriákhoz tartozó paramétereket a Szállítmányozó a
              Rendeléskezelő felületen jeleníti meg. Szállítmányozó fenntartja
              magának a jogot arra, hogy az egyes kategóriák paramétereit
              egyoldalúan módosítsa, a Megbízó előzetes tájékoztatása mellett.
            </p>
            <p className="mb-4">2. A küldemény adatai</p>
            <p className="mb-4">
              Megbízó köteles megadni a küldemény súlyát, az utánvét összegét
              forintban (ha releváns), biztosítási értékét forintban, annak
              törékeny és/vagy amorf jellegét (ha releváns).
            </p>
            <p className="mb-4">3. A küldemény felvételére vonatkozó adatok</p>
            <p className="mb-4">
              Megbízónak tájékoztatnia kell a Szállítmányozót arról, hogy a
              küldemény felvétele postán, csomagponton vagy Megbízó által
              megadott felvételi címen történik.
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét arra, hogy postai,
                vagy csomagponti küldeményfelvételre kizárólag kisméretű
                küldemények szállítmányozására vonatkozó megbízás adása esetén
                van lehetőség.
              </strong>
              Postai küldeményfelvétel választása esetén a Megbízó köteles
              megadni a visszakézbesítési címet, míg akkor, ha a
              Szállítmányozónak telephelyen kell felvennie a küldeményt, úgy a
              telephely pontos címét.
            </p>
            <p className="mb-4">4. A küldemény címzettjének adatai</p>
            <p className="mb-4">
              Megbízó köteles megadni a küldemény kiszolgáltatásához
              elengedhetetlenül szükséges címzetti adatokat, valamint a
              szállítási/kiszolgáltatási cím adatait, mely adatok köréről a
              Szállítmányozó minden esetben a Rendeléskezelő felületen
              tájékoztatja a Megbízót.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét arra, hogy küldemény
                szállítmányozására vonatkozó megbízás adása esetén a Megbízó
                köteles a Rendeléskezelő felületen megadni a küldemény
                szállítási/kiszolgáltatási módját is.
              </strong>
              Szállítmányozó a Rendeléskezelő felületen folyamatosan közzéteszi
              azon kiszolgáltatási módokat, melyek közül a Megbízó
              kiválaszthatja a számára legmegfelelőbb opciót.
            </p>
            <p className="mb-4">
              5. A szállítmányozási feladat teljesítéséhez szükséges további
              adatok
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét arra, hogy a
                küldemények szállítmányozását az általa igénybe vett
                közreműködők útján végzi.
              </strong>
              Szállítmányozó a Rendeléskezelő felületen keresztül tájékoztatja a
              Megbízót ezen közreműködők személyéről.
            </p>
            <p className="mb-4">
              Szállítmányozó fenntartja magának a jogot arra, hogy az általa
              kínált egyes szolgáltatások igénybevételét bizonyos feltételek
              teljesítése esetén tegye lehetővé, illetve ezen szolgáltatások
              elvállalása és teljesítése esetén a szállítmányozási alapdíjon
              felül további díjat számítson fel a Megbízóval szemben. Ezen
              feltételekről, valamint a fizetendő külön díj összegéről a
              Szállítmányozó a Megbízót a Rendeléskezelő felületen a megbízás
              teljesítésére vonatkozó utasítás adását megelőzően külön
              tájékoztatja.
            </p>
            <p className="mb-4">1. Egyedi fuvar azonosító</p>
            <p className="mb-4">
              Megbízó által meghatározott azonosító, amely a szállítmányozás
              tárgyát képező rakomány Megbízó általi azonosításának
              megkönnyítését szolgálja. A szállítmányozás teljesítésének ezen
              adat megadása nem feltétele.
            </p>
            <p className="mb-4">2. Kapcsolattartó adatok</p>
            <p className="mb-4">
              Megbízó köteles megjelölni azt a személyt és elérhetőségi adatait,
              akivel a Szállítmányozó, illetve az által a teljesítésbe bevont
              közreműködők a feladat teljesítése érdekében közvetlenül
              kapcsolatba tudnak lépni.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét, hogy a Rendeléskezelő
              felület rendszere kizárólag abban az esetben engedélyezi az egyes
              megbízások rögzítését, ha a Megbízó a rendszer által kötelezően
              kitöltendőként megjelölt adatokat hiánytalanul megadta.
            </p>
            <p className="mb-4">
              Megbízó köteles a szállítmányozási szerződés teljesítéséhez
              szükséges adatokat, információkat hiánytalanul és pontosan
              megadni. Szállítmányozó nem köteles a Megbízó által közölt adatok,
              információk valódiságát, helyességét, pontosságát ellenőrizni. A
              hiányos, vagy pontatlan adatszolgáltatásból fakadó következmények
              kizárólag a Megbízót terhelik.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét, hogy amennyiben a
                megbízás teljesítésének elvállalását követően válik
                nyilvánvalóvá a Szállítmányozó számára, hogy a Megbízó valótlan
                adatokat adott meg, úgy a Szállítmányozó jogosult az erről való
                tudomásszerzést követően a megbízás teljesítését
                visszautasítani.
              </strong>
            </p>
            <p className="mb-4">
              A Szállítmányozó lehetőséget biztosít a webáruházat üzemeltető
              Megbízó számára, hogy a Rendeléskezelő felületen történő manuális
              adatbevitel helyett egy ún. API (alkalmazásprogramozási felület)
              segítségével egyszerűsítse, automatizálja az egyes
              szállítmányozási feladatokhoz kapcsolódó adatok felöltését és
              elküldését a Szállítmányozó részére. Ez esetben az egyes
              szállítmányozási feladatokhoz kapcsolódó címadatokat a rendszer
              automatikusan lekérdezi a Megbízó webshopjának adatbázisából, így
              a Megbízónak csak azt kell ellenőriznie, hogy az adatok helyesen
              kerültek-e rögzítésre, majd ezt követően a Rendeléskezelő
              felületen megbízást adhat a szállítmányozási feladat elvégzésére.
              Az API integráció elvégzéséhez szükséges fejlesztői dokumentáció a
              https://app.packli.hu/integration linken érhető el
            </p>
            <p className="mb-4">
              a Megbízók számára. Megbízó a Rendeléskezelő felületen át tudja
              tekinteni az általa oda feltöltött egyedi megbízások fő adatait és
              azok állapotát, és a Szállítmányozó biztosítja számára, hogy az
              egyes szállítmányozások részletes adataihoz is hozzáférjen.
            </p>
            <p className="mb-4">
              D. Utasítás adás a megbízás teljesítésére, a megbízás elvállalása
            </p>
            <p className="mb-4">
              Megbízó a Rendeléskezelő felületen a szállítmányozási feladat
              teljesítéshez szükséges adatok megadásával egyidejűleg utasítást
              adhat a Szállítmányozónak a megbízás teljesítésére. A Megbízó
              jogosult továbbá arra is, hogy az adott szállítmányozás
              teljesítésére ne az adatrögzítéssel egyidőben, hanem egy későbbi
              időpontban adjon utasítást a Szállítmányozónak.
            </p>
            <p className="mb-4">
              Megbízó módosíthatja, illetve törölheti az általa feltöltött
              szállítmányozási feladatokat mindaddig, amíg a megbízás
              teljesítésére vonatkozó utasítását le nem adta a Rendeléskezelő
              felületen keresztül. Az utasítás leadását követően a Megbízó a
              feltöltött szállítmányozási feladatot már nem módosíthatja,
              kizárólag arra van lehetősége, hogy elálljon az egyedi
              szállítmányozási szerződéstől; elállás esetén a XIX. fejezetben
              rögzített feltételek az irányadók.
            </p>
            <p className="mb-4">
              Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
              hogy azt követően, hogy utasítást adott a megbízás teljesítésére a
              Szállítmányozónak, a Weboldal rendszere rendszerüzenetben és, vagy
              e-mailben automatikusan visszaigazolja annak a Szállítmányozóhoz
              történő beérkezését és tartalmát, ez azonban a Szállítmányozó
              oldalán még nem keletkeztet a szolgáltatásnyújtásra vonatkozó
              kötelezettséget.
            </p>
            <p className="mb-4">
              Szállítmányozó a megbízásban szereplő szállítmányozási feladat
              elvállalásáról rendszerüzenetben és, vagy e-mail üzenetben
              értesíti a Megbízót. Szállítmányozó felhívja a Megbízó figyelmét,
              hogy kizárólag az adott szállítmányozás elvállalásáról értesítő
              rendszerüzenet és, vagy e-mail kézhezvétele után jogosult a
              szolgáltatás nyújtását követelni a Szállítmányozótól.
            </p>
            <p className="mb-4">
              Szállítmányozó biztosítja a Megbízó számára azon küldemények
              címiratainak a Rendeléskezelő felületről való letöltését, melyek
              szállítmányozását a Szállítmányozó a jelen ÁSZF szerint
              elvállalta.
            </p>
            <p className="mb-4">VIII. A megbízás teljesítése</p>
            <p className="mb-4">
              Szállítmányozó garanciát vállal a Megbízó által leadott
              utasításban megjelölt, és az általa elvállalt szállítmányozási
              feladat teljesítésére azzal, hogy a Szállítmányozó nem felel
              azért, ha a küldemény kiszolgáltatása a Megbízónak és/vagy a
              címzettnek felróható okból nem lehetséges.
            </p>
            <p className="mb-4">
              Szállítmányozó szavatosságot vállal azért, hogy a szállítmányozási
              feladat teljesítéséért az utasítás leadásának időpontjában
              érvényes díjakat számítja fel.
            </p>
            <p className="mb-4">
              A szállítmányozásra vonatkozó megbízás teljesítése során a
              Szállítmányozó a Megbízó érdekeit képviseli azzal, hogy e
              kötelezettségbe nem tartozik bele az olyan magatartás tanúsítása
              és/vagy olyan magatartástól való tartózkodás, amellyel a
              Szállítmányozó saját magának vagy harmadik személyeknek kárt,
              költségeket, vagy egyéb hátrányt okozna.
            </p>
            <p className="mb-4">
              Szállítmányozó a Megbízó külön értesítése nélkül gondoskodhat az
              áru, vagy annak egy része fuvarozásáról, megválaszthatja az áru
              mozgatása, betárolása, raktározása és fuvarozása során
              alkalmazandó eszközöket, útvonalakat és eljárásokat, illetve
              ezeket meg is változtathatja.
            </p>
            <p className="mb-4">
              Szállítmányozó a Megbízó utasításai szerint jár el azzal, hogy az
              utasítások szakszerűtlenségére a Megbízó figyelmét köteles
              felhívni. A célszerűtlen, szakszerűtlen, hiányos, hibás és
              késedelmesen adott utasítások következményeit a Megbízó viseli.
            </p>
            <p className="mb-4">
              Ha a Megbízó az utasítást a figyelmeztetés ellenére fenntartja, a
              Szállítmányozó a szállítmányozási szerződéstől elállhat, azt
              felmondhatja, vagy a szállítmányozási feladatot a Megbízó
              kockázatára, biztosíték adását követően elláthatja. Ha a Megbízó a
              biztosíték adásával késlekedik, úgy ennek valamennyi
              következményét maga köteles viselni.
            </p>
            <p className="mb-4">
              Szállítmányozó az utasítás teljesítését megfelelő biztosíték
              adásához kötheti. Ha a Megbízó nem ad megfelelő biztosítékot, a
              Szállítmányozó az utasítás teljesítését megtagadhatja. A
              Szállítmányozó a kapott biztosítékkal - annak igénybevételét vagy
              a Megbízó teljesítését követően - köteles haladéktalanul
              elszámolni.
            </p>
            <p className="mb-4">
              Szállítmányozó a Megbízó utasításától akkor térhet el, ha ezt a
              Megbízó érdeke - a rendelkezésre álló adatok alapján -
              megköveteli, és a Megbízó előzetes értesítésére már nincs mód
              azzal, hogy az eltérésről a Megbízót késedelem nélkül értesíteni
              kell. Szállítmányozó köteles megtagadni az utasítás teljesítését,
              ha annak végrehajtása jogszabály vagy hatósági határozat
              megsértésére vezetne, vagy veszélyeztetné mások személyét vagy
              vagyonát.
            </p>
            <p className="mb-4">
              Megbízó köteles megtéríteni, illetve a Szállítmányozó kérésére
              megfelelő időben előlegezni az utasítás teljesítésével
              kapcsolatban felmerült költségeket.
            </p>
            <p className="mb-4">
              Ha a Megbízó a megbízást úgy módosítja, hogy azt a Szállítmányozó
              nem tudja teljesíteni, a Szállítmányozó jogosult a szerződéstől
              elállni vagy azt felmondani, és követelheti a szállítmányozási díj
              megfizetését, valamint felmerült költségeinek megtérítését.
            </p>
            <p className="mb-4">
              Ha a Megbízó olyan utasítást adott, amely szerint a küldeményt
              harmadik személy rendelkezésére kell tartani, úgy az utasítás nem
              vonható vissza akkor, amikor a harmadik személyt a küldeménnyel
              kapcsolatos rendelkezési jog már megilleti. A harmadik személy
              rendelkezéséből fakadó következmények, így különösen a károk és
              költségek a Megbízót terhelik.
            </p>
            <p className="mb-4">
              Ha a Szállítmányozó kért, de nem kapott utasítást a Megbízótól az
              általa megjelölt határidőben, úgy a Szállítmányozó saját belátása
              szerint intézkedhet. Ennek során Szállítmányozó saját kárának és
              költségeinek elkerülése, illetve minimalizálása mellett a Megbízó
              kárának enyhítését és az észszerűségi szempontokat is köteles
              figyelembe venni. Mindazon károkért, melyek az utasítás
              elmulasztásából a Szállítmányozónál és/vagy a Megbízónál
              keletkeznek, kizárólag a Megbízó felel.
            </p>
            <p className="mb-4">
              Szállítmányozó köteles a Megbízót a megbízás teljesítését
              akadályozó és/vagy a megbízás módosítását igénylő körülményről
              e-mailben vagy a Rendeléskezelő felületen keresztül tájékoztatni.
            </p>
            <p className="mb-4">
              Szállítmányozó előre nem látható körülmények bekövetkezése esetén
              köteles a Megbízó érdekeinek megfelelően eljárni azzal, hogy az
              ezzel összefüggésben felmerülő többletköltségeket és díjakat a
              Megbízó köteles viselni.
            </p>
            <p className="mb-4">
              Szállítmányozó kötelezettséget vállal arra, hogy a
              szállítmányozással közvetlenül összefüggő hatósági rendelkezéseket
              ismeri és betartja. Szállítmányozó ezen túlmenően nem felel más
              hatósági rendelkezés, így különösen az egyes országok export- és
              importszabályozásával kapcsolatos előírások betartásáért.
            </p>
            <p className="mb-4">
              Szállítmányozó jogosult a küldeményt gyűjtőforgalomban
              továbbíttatni.
            </p>
            <p className="mb-4">
              Szállítmányozó jogosult a megbízást - egészben vagy részben - maga
              teljesíteni. Amennyiben a Szállítmányozó a megbízást maga
              teljesíti, úgy erről tájékoztatja a Megbízót.
            </p>
            <p className="mb-4">
              Megbízó a szállítmányozási szerződés teljesítéséről a
              Rendeléskezelő felületen tud tájékozódni. Szállítmányozó
              lehetőséget biztosít a Megbízónak arra, hogy az adott
              szállítmányozási feladat teljesítésének folyamatát is nyomon
              kövesse, a Rendeléskezelő felület erre a célra kialakított
              menüpontjába belépve.
            </p>
            <p className="mb-4">IX. Küldemény átadása/ felvétele</p>
            <p className="mb-4">
              A postán, vagy csomagponton feladásra kerülő küldemények esetén a
              Megbízó köteles gondoskodni arról, hogy a Szállítmányozó
              közreműködője részére ezen küldemények átadásra kerüljenek.
            </p>
            <p className="mb-4">
              A Szállítmányozó a nem postán, vagy csomagponton feladott
              küldeményeket a szállítmányozási feladat elvállalásának
              visszaigazolását követő 2 (kettő) munkanapon belül veszi fel. A
              küldemények felvételére munkanapokon, 8:00 és 17:00 óra között
              kerül sor. A küldeményfelvétel időpontját a Szállítmányozó
              egyoldalúan jogosult meghatározni azzal, hogy erről köteles a
              Megbízót előzetesen tájékoztatni.
            </p>
            <p className="mb-4">
              Megbízó jogosult megbízást adni a Szállítmányozó részére több
              küldemény egyidejű szállítmányozására vonatkozóan is azzal, hogy
              ebben az esetben a megbízás elvállalásának és teljesítésének
              feltétele, hogy valamennyi érintett küldemény felvételi címe és
              időpontja megegyezzen.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét, hogy a jelen ÁSZF
              legfeljebb 40 kg össztömegű és maximum 300 cm körméretű küldemény
              szállítmányozására vállal kötelezettséget azzal, hogy a küldemény
              leghosszabb oldala ebben az esetben sem haladhatja meg a 240 cm
              hosszúságot.
              <strong>
                Szállítmányozó kifejezetten felhívja a figyelmet arra, hogy
                amennyiben a Megbízó több küldemény egyidejű szállítmányozására
                ad megbízást, úgy a megbízás Szállítmányozó általi
                elvállalásához, illetve teljesítéséhez a fenti méretbeli
                követelményeknek az érintett küldemények összméretét és
                össztömegét figyelembe véve is teljesülniük kell.
              </strong>
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét arra, hogy amennyiben
              Megbízó által megadott adatok alapján a küldeményt átvételi ponton
              (pl. posta, csomagautomata, csomagpont) kell kiszolgáltatni, úgy a
              Szállítmányozó egyoldalúan jogosult meghatározni, hogy ilyen
              esetben milyen paraméterekkel rendelkező küldemények esetében
              vállal kötelezettséget a szállítmányozás teljesítésére.
              Szállítmányozó tájékoztatja a Megbízót, hogy a Rendeléskezelő
              felületet úgy alakította ki, hogy minden egyes küldemény
              kategóriánál csak azok a kiszolgáltatási módok jelenjenek meg,
              melyeket a Megbízó - a küldemény paraméterei alapján - jogosult
              kiválasztani.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét, hogy
                abban az esetben, ha a küldemények felvételekor válik
                nyilvánvalóvá a Szállítmányozó számára, hogy egy adott küldemény
                bármelyik mérete vagy az egyidejűleg felvételre kerülő több
                küldemény összesített méreteinek bármelyike
                (szélesség/magasság/hosszúság/súly/körméret) meghaladja a
                Megbízó által kiválasztott kategóriához tartozó paramétereket,
                úgy a Szállítmányozó jogosult megtagadni a szállítmányozás
                teljesítését azzal, hogy ez nem minősül szerződésszegésnek a
                Szállítmányozó részéről, és a Megbízó semmiféle kártérítést,
                kártalanítást vagy más kárpótlást nem jogosult a
                Szállítmányozótól követelni.
              </strong>
            </p>
            <p className="mb-4">
              Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
              hogy a Szállítmányozó az alábbi esetek bármelyikének fennállása
              esetén is jogosult megtagadni a küldemény szállítmányozását:
            </p>
            <p className="mb-4">
               ha a küldemény felvételéhez és/vagy annak címzett részére
              történő kiszolgáltatásához a küldemény lépcsőn történő mozgatása
              szükséges, és a lépcső bármilyen okból balesetveszélyesnek minősül
              (ideértve különösen, de nem kizárólag a korlát hiányát, a lépcső
              szabványoktól eltérő kialakítását, a felületi síkosságot); vagy
            </p>
            <p className="mb-4">
               ha a küldemény felvételéhez és/vagy annak a címzett részére
              történő kiszolgáltatásához a küldemény lépcsőn történő mozgatása
              szükséges, és a lépcső, illetve a lépcsőház kialakítása miatt nem
              teljesülnek a biztonságos szállítás feltételei.
            </p>
            <p className="mb-4">
              Szállítmányozó tájékoztatja a Megbízót, hogy a 40 kg-ot meg nem
              haladó össztömegű küldemény kézi be-és kirakodását a jármű
              vezetője önállóan végzi, és a küldemény kiszolgáltatása ebben az
              esetben közvetlenül kézbesítési cím első zárható ajtaja előtt
              történik.
            </p>
            <p className="mb-4">
              A küldemény átadásakor a Szállítmányozó jogosult, de nem köteles -
              a küldemény darabszámának kivételével - a küldemény tényleges
              adatait megállapítani, és a küldemény sértetlen állapotát
              megvizsgálni.
            </p>
            <p className="mb-4">
              Amennyiben a küldemény ellenőrzés során megállapított adatai a
              megbízás adataitól eltérnek, úgy a Szállítmányozó a Megbízót e
              körülményről haladéktalanul értesíti és közli vele, hogy a
              létrejött szerződés adatai és az átadott küldemény adatai nem
              felelnek meg egymásnak.
              <strong>
                Szállítmányozó a küldemény sérülésének tényét ugyancsak jelzi a
                Megbízónak. Szállítmányozó felhívja a Megbízó figyelmét, hogy az
                általa közölt eltérésből fakadó következmény, így különösen a
                késedelem, a fizetendő díjak vagy a költségek összegének
                növekedése, illetve a küldemény sérült/hiányos jellegéből fakadó
                károk viselése a Megbízót terhelik.
              </strong>
            </p>
            <p className="mb-4">
              Szállítmányozó nem köteles a küldeményt csomagolni, kötegelni, a
              csomagolást javítani, vagy a küldemény fizikai állapotát érintő
              egyéb intézkedést megtenni. Ez alól kivételt képeznek azok az
              esetek, amikor a küldemény mások személyét és/vagy vagyonát
              veszélyezteti. Ilyen esetekben a Megbízó köteles a veszélyeztetés
              megszüntetéséhez szükséges intézkedéseket felhívásra, és a közölt
              határidőben elvégezni, vagy ha ezen intézkedéseket a
              Szállítmányozó teszi meg, úgy részére az ezzel összefüggésben
              felmerült költségeket megtéríteni.
            </p>
            <p className="mb-4">
              Megbízó felel azért, hogy a küldeményen a szállítmányozási feladat
              teljesítéséhez szükséges információk, így különösen a küldemény
              címzettjének adatai szerepeljenek. Megbízó ezen kötelezettségének
              a Rendeléskezelő felületről letölthető címirat küldeményen való
              elhelyezésével eleget tehet. Amennyiben a Megbízó e-mailben vagy
              telefonon keresztül jelzi a Szállítmányozó részére, hogy igényt
              tart olyan papírra, melynek segítségével a címiratot annak
              kinyomtatását követően egyszerűen fel tudja ragasztani a küldemény
              csomagolására, úgy ezt a Szállítmányozó külön díj felszámítása
              nélkül biztosítja a Megbízó számára.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy az alábbi esetek bármelyikének fennállása esetén a
                küldemény felvételére, illetve címzettnek történő
                kiszolgáltatására nem a Megbízó által megadott felvételi,
                illetve kézbesítési címen, hanem a szállítmányozásra használt
                gépjármű parkolási helyén kerül sor:
              </strong>
            </p>
            <p className="mb-4">
               ha a Megbízó által megadott felvételi és/vagy kiszolgáltatási
              cím az útviszonyok miatt a küldemény kézi mozgatásával nem
              közelíthető meg, vagy
            </p>
            <p className="mb-4">
               ha a Megbízó által megadott felvételi és/vagy kiszolgáltatási
              cím megközelítése munka-, és/vagy vagyonvédelmi okokból kockázatot
              jelent a Szállítmányozóra, illetve annak közreműködőire nézve.
            </p>
            <p className="mb-4">
              Megbízó vállalja, hogy a felvételi címen a Szállítmányozó által
              egyoldalúan meghatározott, és a Megbízóval előzetesen közölt
              időpontban biztosítja a szállítmányozási feladat tárgyát képező
              küldemények átadását a Szállítmányozó, illetve annak közreműködői
              részére.
              <strong>
                Szállítmányozó kifejezetten felhívja a figyelmet arra, hogy
                kizárólag a Megbízót terheli a felelősség azért, ha a küldemény
                szállítmányozásra történő átvétele a Megbízónak felróható okból
                meghiúsul, azaz ha a Szállítmányozó vagy annak közreműködője a
                küldeményt sem az előzetesen meghatározott és Megbízóval közölt
                időpontban, sem az azt követő 15 (tizenöt) percen belül nem
                tudja átvenni - ideértve különösen, de nem kizárólag azt az
                esetet, ha a Megbízó nem készíti elő feladásra a küldeményt vagy
                ha a Megbízó, illetve képviselője vagy meghatalmazottja a
                felvételi címen nem található meg.
              </strong>
            </p>
            <p className="mb-4">
              X. Küldemény kiszolgáltatása, visszakézbesítés
            </p>
            <p className="mb-4">
              Szállítmányozó kötelezettséget vállal arra, hogy a Megbízótól
              átvett, illetve felvett küldeményt a címzett részére a megbízás
              elvállalásának visszaigazolásától számított 4 (négy) munkanapon
              belül - ide nem értve azt az esetet, ha a Megbízó a XIII. fejezet
              szerinti időgarantált szolgáltatást veszi igénybe -
              kiszolgáltatja. A Szállítmányozó által vállalt határidő alatt azt
              az időtartamot kell érteni, amely alatt a Szállítmányozó első
              alkalommal kísérli meg a küldemény kiszolgáltatását a címzettnek.
              A Szállítmányozó fenntartja magának a jogot arra, hogy a
              kiszolgáltatásra vállalt határidőtől indokolt esetben egyedileg
              eltérjen. Eltérés esetén a Szállítmányozó köteles erről a
              körülményről a Megbízót haladéktalanul tájékoztatni.
            </p>
            <p className="mb-4">
              Küldemények szállítmányozására adott megbízás esetén, amennyiben a
              küldemény első kiszolgáltatása sikertelen, úgy a Szállítmányozó az
              ismételt kiszolgáltatást a sikertelen kiszolgáltatás időpontjától
              számított 5 (öt) munkanapon belül kísérli meg. Szállítmányozó
              fenntartja magának a jogot arra, hogy a küldemény ismételt
              kiszolgáltatására a jelen ÁSZF-ben meghatározott határidőt
              indokolt esetben egyedileg módosítsa azzal, hogy erről köteles a
              Megbízót haladéktalanul tájékoztatni.
            </p>
            <p className="mb-4">
              Amennyiben a Megbízó a Rendeléskezelő felületen megadja a
              küldemény címzettjének telefonszámát és/vagy e-mail címét, úgy a
              Szállítmányozó vállalja, hogy a címzettet a küldemény
              kiszolgáltatásáról annak tervezett időpontját legalább 2 (kettő)
              órával megelőzően, SMS-ben, e-mailben és/vagy telefonon értesíti.
            </p>
            <p className="mb-4">
              Küldemények szállítmányozására adott megbízás esetén, amennyiben a
              küldemény kiszolgáltatása első alkalommal sikertelennek bizonyul,
              úgy a Szállítmányozó erről, valamint az ismételt kiszolgáltatás
              időpontjáról e-mailben vagy SMS-ben küld értesítést a címzett
              részére.
            </p>
            <p className="mb-4">
              Nem terheli a Szállítmányozót a felelősség abban az esetben, ha a
              címzett értesítése és/vagy a küldemény címzettnek történő
              kiszolgáltatása azért sikertelen, mert a Megbízó a küldemény
              szállítmányozására vonatkozó utasítás adásakor a Rendeléskezelő
              felületen helytelen vagy valótlan információkat adott meg.
            </p>
            <p className="mb-4">
              Ha a küldemény átvételére jogosult címzett az átvételkor
              elmulasztja a küldemény csomagolása épségét megvizsgálni, vagy az
              átvételkor írásban nem közli a Szállítmányozóval - a hiány, vagy
              sérülés természetének megjelölésével - az általa felfedezett
              áruhiányt, vagy sérülést, akkor vélelmezni kell, hogy az áru jó
              állapotban és szerződésszerűen került kiszolgáltatásra. Ha az
              áruhiány, vagy sérülés nem felismerhető a küldemény csomagolása
              alapján, az árut sérülésmentes állapotban kiszolgáltatottnak kell
              tekinteni, kivéve, ha a címzett az áru kiszolgáltatását követő 2
              (kettő) munkanapon belül írásbeli fenntartást tesz a Megbízó felé.
              Szállítmányozó fenntartja magának a jogot arra, hogy a fent írtak
              alapján szerződésszerűen kiszolgáltatott küldemények
              vonatkozásában címzetti fenntartást csak abban az esetben fogadja
              el, ha Megbízó igazolja egyrészről, hogy azt a címzett nála
              írásban a küldemény tényleges kiszolgáltatásától számított 2
              (kettő) munkanapon belül jelezte, másrészről pedig azt, hogy az
              áru a Szállítmányozónak történő átadás időpontjában sérülésmentes
              volt.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a figyelmet arra, hogy egészségvédelmi
              okokból nem vállal kötelezettséget sem a címzettnek
              kiszolgáltatott küldemény kicsomagolására, sem annak a csomagolási
              hulladéknak az elszállítására, ami a küldemény címzett általi
              kicsomagolásának eredményeként keletkezik. Ha a Szállítmányozó a
              vállalt határidőben sem az első, sem a második alkalommal nem
              tudja a küldeményt a címzettnek kiszolgáltatni, úgy a küldeményt a
              sikertelen második kézbesítést követően visszaszállítja a Megbízó
              által megadott felvételi címre.
            </p>
            <p className="mb-4">
              Küldemények szállítmányozására adott megbízás esetén, amennyiben a
              küldemény kiszolgáltatását a Szállítmányozó közreműködői végzik,
              úgy a küldeményt közreműködők a második sikertelen kiszolgáltatás
              időpontjától számítva az általuk meghatározott időtartamig és
              átvételi helyen őrzik, mely időtartam alatt a címzett a küldeményt
              az őrzés helyén átveheti. Szállítmányozó közreműködője a küldemény
              személyes átvételének lehetőségéről a címzettet a sikertelen
              kiszolgáltatáskor hátrahagyott értesítő útján tájékoztatja. A
              fenti őrzési határidő eredménytelen elteltét követően a
              Szállítmányozó közreműködője útján visszaszállítja a küldeményt
              annak felvételi címére. A küldemények jelen fejezetben írt őrzési
              idejét, illetve a küldemények átvételnek helyszínét - valamennyi
              közreműködő vonatkozásában - a Szállítmányozó által közzétett
              hirdetmény tartalmazza.
            </p>
            <p className="mb-4">
              Megbízó már jelen ÁSZF elfogadásával kötelezettséget vállal arra,
              hogy a részére a sikertelen kiszolgáltatás miatt visszakézbesített
              küldeményeket a Szállítmányozótól átveszi. Szállítmányozó felhívja
              a Megbízó figyelmét arra, hogy amennyiben nem tesz eleget a
              visszakézbesített küldemények átvételére vonatkozó
              kötelezettségének, úgy az ezzel összefüggésben a Szállítmányozónál
              felmerült valamennyi költséget kizárólagosan köteles viselni.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja továbbá a Megbízó figyelmét
                arra, hogy amennyiben a Megbízó nem veszi át a neki
                visszaszállított nagyméretű küldeményeket, úgy a Szállítmányozó
                azokat az átadás meghiúsulásától számított 30 (harminc) napig
                őrzi a 1097 Budapest, Ecseri út 14-16 szám alatt található
                raktárában, mely időtartam alatt a Megbízó a küldeményt a fenti
                címen a Szállítmányozóval előzetesen egyeztetett időpontban
                személyesen átveheti. Ha a 30 (harminc) napos őrzési határidő is
                eredménytelenül telik el, úgy a Szállítmányozó jogosult a
                Megbízó által át nem vett küldeményeket felbontani és - saját
                választása szerint - értékesíteni vagy megsemmisíteni azzal,
                hogy az értékesítés esetén a Szállítmányozó csak azon költségek
                megfizetését követelheti a Megbízótól, melyeket a küldemények
                értékesítéséből befolyó összeg nem fedez. Megbízó tudomásul
                veszi és elfogadja, hogy az át nem vett küldemények értékesítése
                vagy megsemmisítése miatt nem jogosult a Szállítmányozóval
                szemben semmilyen jogcímen igényt érvényesíteni.
              </strong>
            </p>
            <p className="mb-4">
              Amennyiben a küldemény visszakézbesítésre kerül a Megbízónak, úgy
              a Szállítmányozó jogosult a XII. fejezetben meghatározott mértékű
              díjat felszámítani, mely a szállítmányozási alapdíjon felül
              fizetendő.
            </p>
            <p className="mb-4">
              Küldemények szállítmányozására adott megbízás esetén a Megbízó
              kiegészítő szolgáltatásként igénybe veheti az ún. cserecsomag
              szolgáltatást, melynek keretében a Szállítmányozó vállalja, hogy -
              közreműködői útján - a küldemény címzettnek történő
              kiszolgáltatásával egyidejűleg a címzettől átvesz egy másik
              küldeményt, és azt a Megbízó részére a felvételi címen
              kiszolgáltatja.
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy a cserecsomag szolgáltatás teljesítését jogosult megtagadni
                akkor, ha a cserecsomagként szállítmányozandó küldemény
                kiszolgáltatási címe eltér a Megbízó által megadott felvételi
                címtől, vagy ha az nem felel meg a küldeményekkel szemben a
                jelen ÁSZF által támasztott követelményeknek - ideértve többek
                között, ha a cserecsomag csomagolása hiányzik vagy nem
                megfelelő, illetve ha abban olyan áruk találhatók, melyek
                szállítmányozása a jelen ÁSZF szerint kizárt.
              </strong>
            </p>
            <p className="mb-4">XI. Utánvétkezelés</p>
            <p className="mb-4">
              Szállítmányozó vállalja, hogy a küldemény pénzbeli ellenértékét,
              melyet a Megbízó a megbízási feladat teljesítésére vonatkozó
              utasításadáskor határoz meg, a címzettől átveszi és az ellenérték
              összegével az utánvétkezelésre vonatkozó szabályok szerint a
              Megbízóval elszámol.
            </p>
            <p className="mb-4">
              Az utánvét összegek elszámolása minden munkanapon átutalás útján
              történik, amennyiben a beszedett és Szállítmányozó számláján
              jóváírt utánvét összeg eléri az 50.000 Ft értéket. Amennyiben a
              beszedett utánvét összegek össz értéke nem éri el az 50.000 Ft-os
              értékhatárt, azok kifizetése hetente utólag banki átutalás útján
              történik, legkésőbb a tárgyhetet követő első munkanapon.
            </p>
            <p className="mb-4">
              Szállítmányozó biztosítja, hogy amennyiben a megbízás a küldemény
              címzett részére utánvétel különszolgáltatással történő
              eljuttatására vonatkozik, úgy a címzett a küldemény Megbízó által
              meghatározott ellenértékét készpénzzel és bankkártyával is
              kiegyenlítheti.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy nem vállal kötelezettséget a küldemény szállítmányozására
                akkor, ha a küldemény pénzbeli ellenértéke, melyet a
                Szállítmányozónak a címzettől át kell vennie a kiszolgáltatás
                során, a bruttó 500.000,- forint összeget meghaladja.
              </strong>
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét arra, hogy amennyiben
              a címzett a küldemény ellenértékének kiegyenlítéséhez a
              Szállítmányozó által biztosított bankkártyás fizetés lehetőségét
              veszi igénybe, úgy a Szállítmányozó jogosult külön díjat
              felszámítani, mely a szállítmányozási alapdíjon és az
              utánvétkezelési külön díjon felül terheli a Megbízót. Az
              utánvétkezelési díj, valamint a bankkártyás fizetési lehetőség
              biztosításáért felszámított díj mindenkor aktuális összegét a
              Szállítmányozó a Weboldalon külön hirdetményben teszi közzé.
            </p>
            <p className="mb-4">
              Megbízó a Rendeléskezelő felületen folyamatosan nyomon tudja
              követni az utánvétek kezelését. Szállítmányozó a Rendeléskezelő
              felületen megjeleníti az aktuális utánvét-kezelési időszakban a
              címzett(ek)nek kiszolgáltatott küldemények alapján kifizetésre
              váró utánvét(ek) összegét, a beszedésre váró utánvétek teljes
              összegét, valamint heti rendszerességgel riportokat készít a
              Megbízó részére kifizetett utánvétek összegéről.
            </p>
            <p className="mb-4">
              XII. Szállítmányozással összefüggésben felmerült díjak, költségek
              és azok megfizetése
            </p>
            <p className="mb-4">
              Azzal, hogy a szállítmányozási feladat teljesítésére a jelen
              ÁSZF-ben meghatározott módon megbízást ad, Megbízó tudomásul veszi
              és elfogadja, hogy fizetési kötelezettsége keletkezik a
              szállítmányozási alap-, pótlólagos-, és külön díjak
              vonatkozásában.
            </p>
            <p className="mb-4">
              A szállítmányozási alap-, pótlólagos-, valamint az egyes külön
              díjak összegét a Szállítmányozó által a Weboldalon közzétett
              hirdetmények tartalmazzák. Szállítmányozó felhívja a Megbízó
              figyelmét arra, hogy a hirdetményekben feltüntetett díjak az ÁFA
              összegét nem tartalmazzák.
            </p>
            <p className="mb-4">
              Szállítmányozó tájékoztatja a Megbízót, hogy a küldemények
              továbbításáért felszámított szállítmányozási alapdíj összegének
              meghatározásakor küldemény esetén a küldemény méreteit, súlyát és
              kiszolgáltatási módját veszi alapul.
            </p>
            <p className="mb-4">
              A szállítmányozási feladat teljesítéséhez szükséges adatok
              megadását, illetve a Szállítmányozó által kínált kiegészítő
              szolgáltatások Megbízó általi kiválasztását követően a
              Szállítmányozó a Rendeléskezelő felületen megjeleníti a Megbízó
              által fizetendő szállítmányozási díj pontos összegét.
            </p>
            <p className="mb-4">
              Szállítmányozó fenntartja magának a jogot arra, hogy a
              szállítmányozási díjakat egyoldalúan megváltoztassa azzal, hogy a
              díjmódosításról köteles legalább 15 (tizenöt) nappal a módosítás
              hatályba lépése előtt írásban tájékoztatni a Megbízót. Ha a
              Megbízó a díjmódosítást nem fogadja el, úgy a módosítás
              hatálybalépéséig jogosult a jelen ÁSZF-et azonnali hatállyal,
              írásban felmondani. Ha a Megbízó a jelen ÁSZF-et a fenti határidő
              alatt nem mondja fel, úgy kell tekinteni, hogy a díjmódosítást
              elfogadta.
            </p>
            <p className="mb-4">
              Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
              hogy a mindenkor érvényes szállítmányozási alap-, pótlólagos-,
              illetve külön díjakon felül jogosult üzemanyag felárat is
              felszámítani minden egyes elvégzett szállítmányozási feladat
              vonatkozásában, a feladott küldemények méretkategóriájától
              függetlenül.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét arra, hogy az
              üzemanyag felár mértékének meghatározásakor a gázolaj Nemzeti
              Adó-és Vámhivatal (a továbbiakban: NAV) által az adott évre
              vonatkozóan hivatalosan közzétett
              (https://nav.gov.hu/ugyfeliranytu/uzemanyag/) literenkénti bruttó
              árát veszi alapul. Szállítmányozó kifejezetten felhívja a Megbízó
              figyelmét arra, hogy amennyiben a NAV a gázolaj hatósági és piaci
              árát is közzéteszi, úgy a Megbízó által fizetendő üzemanyag felár
              mértékének meghatározásakor a gázolaj hatósági ára kizárólag abban
              az esetben irányadó, ha a Szállítmányozó, illetve a Szállítmányozó
              által a feladat teljesítése körében igénybe vett közreműködő(k)
              jogosult(ak) a hatósági árszinten üzemanyagot vásárolni.
            </p>
            <p className="mb-4">
              Szállítmányozó tájékoztatja a Megbízót, hogy az üzemanyag felár
              számításának alapja minden esetben a Megbízó által fizetendő
              szállítmányozási alapdíj nettó összege, mértékét pedig az alábbi
              táblázat szemlélteti.
            </p>
            <table>
              <tr>
                <td colSpan={2}>
                  <p className="mb-4">
                    <strong>Üzemanyag felár</strong>
                  </p>
                </td>
              </tr>
              <tbody>
                <tr>
                  <td>
                    <p className="mb-4">&lt;=400 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">10%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">401 - 420 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">11%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">421 - 440 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">12%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">441 - 460 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">13%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">461 - 480 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">14%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">481 - 500 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">15%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">501 - 520 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">16%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">521 - 540 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">17%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">541 - 560 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">18%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">561 - 580 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">19%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">581 - 600 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">20%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">601 - 620 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">21%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">621 - 640 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">22%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">641 - 660 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">23%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">661 - 680 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">24%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-4">681 - 700 HUF</p>
                  </td>
                  <td>
                    <p className="mb-4">25%</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className="mb-4">
                      Nettó 700 Ft felett minden további 20 Ft-os literenkénti
                      áremelés +1% -kal emeli az üzemanyag felár mértékét.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mb-4">
              Szállítmányozó fenntartja magának a jogot arra, hogy nemzetközi
              szállítmányozási feladat ellátására vonatkozó megbízás elvállalása
              esetén a fenti, belföldi szállítmányozásra irányadó mértéktől
              eltérő üzemanyag felár mértéket állapítson meg és alkalmazzon.
              Szállítmányozó az üzemanyag felár alkalmazásáról, illetve annak
              pontos mértékéről köteles a Megbízót az egyedi szállítmányozási
              jogviszony létrejöttét megelőzően tájékoztatni.
            </p>
            <p className="mb-4">
              Szállítmányozó az adott hónapban irányadó üzemanyag felár mértékét
              mindig közzéteszi a hónap első munkanapján a Weboldalon azzal,
              hogy a Szállítmányozó által ekként kihirdetett üzemanyag felár
              mérték az adott hónap utolsó napjáig érvényes és alkalmazandó.
            </p>
            <p className="mb-4">
              Szállítmányozó tájékoztatja a Megbízót, hogy az általa teljesített
              szállítmányozási feladat kapcsán felmerült és a Megbízó által
              fizetendő szállítmányozási díjat és a felszámított üzemanyag felár
              összegét a Szállítmányozó a számlarészletezőn külön tételként
              szerepelteti.
            </p>
            <p className="mb-4">
              Amennyiben a Szállítmányozó törékeny küldemény szállítmányozását
              végzi, és a Megbízó a küldemény különleges kezelését kérte, úgy a
              Szállítmányozó jogosult e szolgáltatásért külön díjat
              felszámítani, mely az alapdíjon felül fizetendő, és amelynek
              mindenkor aktuális összegét a Szállítmányozó a Weboldalon
              közzétett hirdetményben határozza meg.
            </p>
            <p className="mb-4">
              Utánvétkezelésért a Szállítmányozó jogosult külön díjat
              felszámítani, melynek összegét a Weboldalon közzétett hirdetmény
              tartalmazza. Megbízó az utánvétkezelés díját szállítmányozási
              alapdíjon felül köteles megfizetni.
            </p>
            <p className="mb-4">
              Cserecsomag szolgáltatás igénybevétele esetén a Szállítmányozó
              jogosult külön díjat felszámítani, melynek összegét a Weboldalon
              közzétett hirdetmény tartalmazza. Megbízó ezt a díjat is a
              szállítmányozási alapdíjon felül köteles megfizetni.
            </p>
            <p className="mb-4">
              Amennyiben a küldeményt a címzett nem veszi át, és azt a
              Szállítmányozónak vissza kell kézbesítenie a Megbízó részére, úgy
              ezen visszakézbesítésért a Szállítmányozó jogosult külön díjat
              felszámítani, ami a szállítmányozási alapdíjon felül fizetendő. A
              visszakézbesítés díjának mindenkor aktuális összegét a
              Szállítmányozó által a Weboldalon közzétett hirdetmény
              tartalmazza.
            </p>
            <p className="mb-4">
              Szállítmányozó az időgarantált szállítmányozásért külön díjat
              számít fel, mely díj mindenkor aktuális összegét a Weboldalon
              közzétett hirdetményben teszi közzé, továbbá arról a Megbízót a
              Rendeléskezelő felületen keresztül is tájékoztatja. Az
              időgarantált szállítmányozás díja az alapdíjon felül fizetendő.
            </p>
            <p className="mb-4">
              Szállítmányozó a Megbízó által igénybe vett szolgáltatásokért
              fizetendő szállítmányozási díjat havonta, utólag számlázza ki a
              Megbízónak. Megbízó a szállítmányozási díj összegét a számla
              kiállításától számított 8 (nyolc) napon belül köteles megfizetni.
            </p>
            <p className="mb-4">
              Megbízó fizetési kötelezettségét nem érinti az, ha a Megbízó
              harmadik személy fizetését ígéri. Abban az esetben, ha a Megbízó
              által megjelölt harmadik személy nem teljesít, úgy a
              Szállítmányozó követeléseit a Megbízó köteles megfizetni.
              Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
              hogy a Megbízó, illetve az általa megjelölt harmadik személy sem
              beszámításra, sem visszatartásra nem jogosult a Szállítmányozó
              követeléseivel szemben.
            </p>
            <p className="mb-4">
              Megbízó a Rendeléskezelő felületen folyamatosan nyomon tudja
              követni az aktuális, valamint a korábbi számlázási időszakokban a
              Szállítmányozó által felszámított díjakat. Szállítmányozó a
              Rendeléskezelő felületen megjeleníti az általa kiállított számlák
              végösszegét, a számlák fizetési határidejét. Megbízó a számlákat a
              Rendeléskezelő felületről is letöltheti, továbbá azt a
              Szállítmányozó a tárgyhónapot követően e-mailben is elküldi a
              Megbízónak.
            </p>
            <p className="mb-4">
              Ha a szállítmányozási díj kiegyenlítésére határidőben nem kerül
              sor, úgy a Megbízó köteles megfizetni a Szállítmányozó részére
              mindazon többletköltségeket, melyek a szállítmányozási díj
              késedelmes megfizetéséből erednek, köteles továbbá késedelmi
              kamatot is fizetni, melynek alapja a megbízási díj bruttó összege,
              mértéke pedig a késedelembe esés időpontjában irányadó jegybanki
              alapkamat nyolc százalékponttal növelt értéke.
            </p>
            <p className="mb-4">
              Szállítmányozó kifejezetten felhívja a Megbízó figyelmét, hogy
              amennyiben az esedékes díjak megfizetését a Megbízó akár egyetlen
              alkalommal is elmulasztja, úgy a Szállítmányozó az új és már
              folyamatban lévő szállítmányozási feladatok tekintetében észszerű
              biztosítékot kérhet. Szállítmányozó különösen abban az esetben
              jogosult biztosítékot kérni, ha a Megbízó már korábban is esett
              fizetési késedelembe, vagy ha a küldemény értéke a szállítmányozás
              várható költségeit nem fedezi.
            </p>
            <p className="mb-4">
              Szállítmányozó kifejezetten felhívja továbbá a Megbízó figyelmét
              arra, hogy amennyiben a Megbízó a szállítmányozási díj
              megfizetésével 20 (húsz) napot meghaladó késedelembe esik, vagy
              díjfizetési kötelezettségét egyáltalán nem teljesíti, úgy a
              Szállítmányozó jogosult a szolgáltatásnyújtás korlátozására
              (ideértve különösen, de nem kizárólag a területi korlátozással
              elvállalt szállítmányozást), illetve felfüggesztésére mindaddig,
              amíg a Megbízó esedékes díjfizetési kötelezettségének
              maradéktalanul eleget nem tesz.
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy a korlátozás, illetve a felfüggesztés időtartama alatt -
                annak Szállítmányozó általi feloldásáig - a Megbízó a
                Rendeléskezelő felületen küldemény szállítmányozására vonatkozó
                új megbízást nem tud adni.
              </strong>
            </p>
            <p className="mb-4">
              A fent írtakon túlmenően a Szolgáltató fenntartja továbbá magának
              a jogot arra is, hogy a Megbízó 20 (húsz) napot meghaladó
              díjfizetési késedelme esetén a Szállítmányozó által a címzettektől
              átvett, a Megbízót megillető utánvét összegek kifizetését a
              Megbízó lejárt és esedékes szállítmányozási díjtartozásának
              maradéktalan kiegyenlítéséig megtagadja.
            </p>
            <p className="mb-4">
              Amennyiben a Szállítmányozó a szolgáltatásnyújtás korlátozását,
              illetve felfüggesztését a Megbízó fizetési késedelme miatt első
              alkalommal rendeli el, úgy a fizetési kötelezettség teljesítése
              esetén Szállítmányozó ezen korlátozás, illetve felfüggesztés
              feloldásáért külön díjat nem számít fel.
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét arra, hogy
                amennyiben a Megbízó ismételten díjfizetési késedelembe esik,
                úgy az erre tekintettel elrendelt korlátozás, illetve
                felfüggesztés feloldásáért a Szállítmányozó külön díjat jogosult
                felszámítani, melynek összege 8.000,- forint valamennyi
                elrendelt korlátozás, illetve felfüggesztés esetében. Ezt a
                díjat a Szállítmányozó havonta utólag számlázza ki a Megbízónak.
              </strong>
            </p>
            <p className="mb-4">
              Megbízó köteles legkésőbb a szállítmányozási szerződés
              megszűnésekor mentesíteni a Szállítmányozót a megbízás alapján
              harmadik személyekkel szemben vállalt kötelezettségei alól,
              valamint megtéríteni a Szállítmányozó szükséges, hasznos, és
              indokolt költségeit.
            </p>
            <p className="mb-4">
              XIII. Időgarantált szállítmányozási szolgáltatásra vonatkozó
              eltérő szabályok
            </p>
            <p className="mb-4">
              Időgarantált szállítmányozási szolgáltatás keretében küldemények
              esetén a Szállítmányozó arra vállal kötelezettséget, hogy a
              küldemény kiszolgáltatását a címzett részére annak igazolt
              felvételét követő munkanap 18:00 órájáig garantáltan megkísérli.
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy a jelen fejezetben írt időgaranciát kizárólag a küldemény
                kézbesítésének első alkalommal történő megkísérlése körében
                vállalja.
              </strong>
            </p>
            <p className="mb-4">
              Szállítmányozó tájékoztatja a Megbízót, hogy amennyiben az
              időgarantált szolgáltatást több küldemény egyidejű
              szállítmányozása körében kívánja igénybe venni, úgy ennek
              feltétele az, hogy
            </p>
            <p className="mb-4">
               valamennyi érintett küldemény megfeleljen - a küldemények
              jellegétől függően - a küldeménnyel szemben támasztott
              követelményeknek, mely követelményeket a Szállítmányozó előre
              meghatározott és arról a Megbízót a Rendeléskezelő felületen
              keresztül tájékoztatja, és
            </p>
            <p className="mb-4">
               a Megbízó valamennyi küldeményt ugyanabban az időpontban adja át
              a Szállítmányozó részére.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét arra, hogy az
              időgarantált szállítmányozási szolgáltatás igénybevételére
              vonatkozó szándékát köteles jelezni a Rendeléskezelő felületen, a
              szállítmányozási feladat teljesítésére vonatkozó adatok
              megadásakor; ennek elmulasztása esetén a Szállítmányozó nem
              kötelezhető arra, hogy a küldemények továbbítását és
              kiszolgáltatását a jelen fejezetben írt határidő alatt garantáltan
              megkísérelje, illetve komplett rakomány szállítmányozása esetén a
              felvételi címen a gépjárművet a megadott időablakban kiállítsa.
            </p>
            <p className="mb-4">
              Megbízó köteles a szállítmányozási szerződés teljesítéséhez
              szükséges adatokat, információkat hiánytalanul és pontosan megadni
              a Szállítmányozó részére. Szállítmányozó nem köteles a Megbízó
              által közölt adatok, információk valódiságát, helyességét,
              pontosságát ellenőrizni. A hiányos, vagy pontatlan
              adatszolgáltatásból fakadó következmények kizárólag a Megbízót
              terhelik.
            </p>
            <p className="mb-4">
              A megbízás teljesítésére vonatkozó írásbeli utasítás elküldését
              követően a Szállítmányozó 1 (egy) munkanapon belül igazolja vissza
              írásban, e-mail útján az utasításban szereplő szállítmányozási
              feladat elvállalását.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a Megbízó figyelmét, hogy kizárólag azt
              követően jogosult arra, hogy a szolgáltatás nyújtását követelje a
              Szállítmányozótól, hogy a Megbízótól kapott utasításban szereplő
              szállítmányozási feladat elvállalásáról a Szállítmányozó írásban -
              e-mail útján - nyilatkozott.
            </p>
            <p className="mb-4">
              Szállítmányozó külön felhívja a Megbízó figyelmét arra, hogy az
              időgarantált szolgáltatás igénybevételéért a Megbízó a
              szállítmányozási alapdíjon felül a XII. fejezetben rögzítettek
              szerinti külön díjat is köteles megfizetni azzal, hogy ezt a díjat
              a Szállítmányozó jogosult minden egyes küldemény után
              felszámítani, melynek jelen fejezet szerinti szállítmányozására a
              Megbízó utasítást ad.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy az időgarantált szolgáltatás igénybevételéért fizetendő
                alap-, és külön díjra a Szállítmányozó abban az esetben is
                jogosulttá válik, ha a Szállítmányozó a küldemény
                kiszolgáltatását - a küldemény jellegétől függően - a jelen
                fejezet szerint vállalt határidő alatt igazoltan megkísérelte,
                de a küldemény címzettnek történő kiszolgáltatása a
                Szállítmányozónak fel nem róható okból meghiúsult.
              </strong>
            </p>
            <p className="mb-4">
              Szállítmányozó köteles az időgarantált szállítmányozásért a
              felszámított szállítási díj kétszeresével megegyező összeget
              átalány-kártérítés címén megfizetni a Megbízónak az alábbi esetek
              bekövetkezése esetén:
            </p>
            <p className="mb-4">
               ha a küldemény kiszolgáltatásának első alkalommal történő
              megkísérlésére az egyedi szerződésben vállalt határidő alatt nem
              kerül sor a Szállítmányozónak felróható okból;
            </p>
            <p className="mb-4">
              <strong>
                Megbízó hozzájárul ahhoz, hogy a Szállítmányozó az
                átalány-kártérítés összegét a Megbízó által fizetendő
                szállítmányozási alapdíj összegében jóváírja.
              </strong>
            </p>
            <p className="mb-4">XIV. Szállítmánybiztosítás</p>
            <p className="mb-4">
              Szállítmányozó a küldemény biztosítására az alábbiak szerint
              vállal kötelezettséget. Biztosítási kötelezettsége alapján a
              Szállítmányozó a küldemény felvételét követő elvesztése,
              megsemmisülése, sérülése vagy hiányossága esetén a küldemény
              Megbízó által megadott értékével megegyező összegű kártérítést
              fizet a Megbízónak. A biztosítás díját a Megbízó által megfizetett
              szállítmányozási díj tartalmazza akkor, ha a küldemény értéke a
              bruttó 50.000,- forintot nem haladja meg. Amennyiben a Megbízó
              bruttó 50.000,- forint összeget meghaladó értékű küldemény
              szállítmányozására ad megbízást a Szállítmányozónak, úgy a Megbízó
              külön díj megfizetése ellenében magasabb összegű
              küldeménybiztosítást igényelhet. Ezen igényét a Megbízónak a
              szállítmányozási feladat teljesítésére vonatkozó utasításadáskor,
              a Rendeléskezelő felületen vagy külön e-mail üzenetben kell
              jeleznie a Szállítmányozó felé, a küldemény értékének hitelt
              érdemlő igazolása mellett.
            </p>
            <p className="mb-4">
              XV. Veszélyes vagy különleges kezelést igénylő küldemények
            </p>
            <p className="mb-4">
              Az alábbi küldeményeket csak a Szállítmányozóval történt előzetes,
              kifejezett és írásbeli megállapodás alapján lehet a
              Szállítmányozónak vagy megbízottjának átadni:
            </p>
            <p className="mb-4">
               más küldeményekre, egyéb dolgokra és személyekre veszélyes
              küldemények,
            </p>
            <p className="mb-4"> gyors romlásnak kitett küldemények,</p>
            <p className="mb-4">
               bármely okból érzékeny vagy különleges kezelés igénylő
              küldemények.
            </p>
            <p className="mb-4">
              Megbízó a küldemény veszélyes, gyorsan romló, érzékeny, vagy
              különleges kezelést igénylő jellegét köteles a Szállítmányozó
              megbízásakor a Rendeléskezelő felületen keresztül jelezni, és a
              küldemény speciális jellegét köteles a küldeményt kísérő
              okmányokon és magán a küldeményen is feltüntetni.
            </p>
            <p className="mb-4">
              Ha a Megbízó a küldemény speciális jellegére vonatkozó
              tájékoztatási kötelezettségének nem, vagy nem megfelelően tesz
              eleget, a Szállítmányozó jogosult minden olyan intézkedést
              megtenni, amely a küldemény speciális jellegéből fakadó
              következmények, veszélyek elhárításához szükséges. A Megbízó a
              Szállítmányozó fenti intézkedését elfogadja és vállalja, hogy az
              intézkedéssel összefüggésben felmerült költségeket a
              Szállítmányozónak megtéríti.
            </p>
            <p className="mb-4">
              Megbízó köteles közölni a Szállítmányozóval a küldemény
              veszélyességének az adott fuvarozási ág szerinti megjelölését és a
              veszély elkerüléséhez szükséges információkat. Ennek
              elmulasztásából, a nyilatkozat alkalmatlanságából,
              késedelmességéből fakadó minden kárért a Megbízó kizárólagosan
              felel, továbbá ilyen esetben a Szállítmányozó a küldemény
              felvételét is megtagadhatja.
            </p>
            <p className="mb-4">
              Amennyiben a Megbízó törékeny küldemény szállítmányozására ad
              megbízást, úgy a Szállítmányozó a Megbízó kifejezett kérelme
              esetén, melyet a Rendeléskezelő felületen tud jelezni a
              Szállítmányozónak, a XII. fejezetben meghatározott mértékű külön
              díj felszámítása mellet gondoskodik a küldemény biztonságos, nem
              halmozott csomagként történő szállításáról.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó felhívja a Megbízó figyelmét arra, hogy még erre
                vonatkozó külön megállapodás alapján sem vállal kötelezettséget
                azon veszélyes és/vagy különleges kezelést igénylő árukat,
                értéktárgyakat tartalmazó küldemények szállítmányozására, melyek
                a Szállítmányozó által a Weboldalon közzétett hirdetményben
                kerültek felsorolásra (szállítmányozásból kizárt áruk).
              </strong>
            </p>
            <p className="mb-4">
              XVI. Szállítmányozót megillető zálogjog, visszatartási jog,
              biztosíték igénylésére vonatkozó jog
            </p>
            <p className="mb-4">
              Szállítmányozót díjai és költségei biztosítására zálogjog illeti
              meg azokon a dolgokon, amelyek a szállítmányozással kapcsolatban
              birtokába kerültek, vagy amelyekkel okmányok útján rendelkezik. A
              zálogjog a Szállítmányozónak Megbízóval szemben fennálló, más
              szállítmányozási szerződésből származó lejárt és nem vitatott
              követelését is biztosítja. A Szállítmányozó zálogjogát bírósági
              eljárás nélkül is érvényesítheti.
            </p>
            <p className="mb-4">
              Ha a Megbízó fizetési kötelezettségének nem tesz eleget, a
              Szállítmányozó saját esedékes szolgáltatását a Megbízó esedékes
              fizetési kötelezettségének teljesítéséig vagy megfelelő biztosíték
              nyújtásáig visszatarthatja. A Szállítmányozó jogosult a szerződést
              felmondani, ha a Megbízót a díjfizetésre vagy a biztosítékadásra
              legalább 8 (nyolc) napos teljesítési határidővel felszólította,
              azonban ennek ellenére a Megbízó a szállítmányozási díjat nem
              fizette vagy megfelelő biztosítékot nem adott.
            </p>
            <p className="mb-4">
              Szállítmányozó a Megbízótól, harmadik személyek követelésének
              veszélye esetén, megfelelő biztosítékot követelhet. Ha a Megbízó a
              felhívás ellenére megfelelő biztosítékot nem ad, úgy a
              Szállítmányozó a jelen ÁSZF alapján létrejött szerződést jogosult
              felmondani.
            </p>
            <p className="mb-4">XVII. Szállítmányozó felelőssége</p>
            <p className="mb-4">
              Szállítmányozó felelősséggel tartozik azért, ha megbízás
              teljesítése során nem a megfelelő gondossággal jár el, vagy a
              célszerű intézkedések megtételét elmulasztja. Ilyen esetben a
              Szállítmányozó köteles megtéríteni az áru elvesztése, vagy
              megsérülése következtében keletkezett kárt, valamint a gondossági
              kötelezettség megszegésével közvetlen összefüggésben Megbízónál
              jelentkező közvetlen pénzügyi veszteséget.
            </p>
            <p className="mb-4">
              Ha a Szállítmányozó felelőssége megállapítható, kártérítési
              kötelezettsége a küldeményben keletkezett kárra és a kár
              megállapításával közvetlenül összefüggő költségekre korlátozódik.
            </p>
            <p className="mb-4">
              Ha nem állapítható meg, hogy a kár melyik fuvarozási mód tartama
              alatt keletkezett, úgy a Szállítmányozó felelősségének mértékét az
              összetett fuvarozásban alkalmazott fuvarozási módok szabályai
              közül aszerint kell meghatározni, amelyik a Megbízóra nézve a
              legelőnyösebb.
            </p>
            <p className="mb-4">
              Jelen ÁSZF alapján létrejövő szállítmányozási jogviszonyok
              vonatkozásában a Szállítmányozó felelőssége - a szándékos és a
              súlyosan gondatlan károkozás esetét kivéve - korlátozott.
              Szállítmányozónak a küldemény elvesztéséből eredő felelőssége nem
              haladhatja meg az elveszett küldemény értékét. A küldemény értékét
              a tőzsdei ár, ennek hiányában a piaci ár, ennek hiányában
              ugyanazon áru szokásos értéke szerint kell meghatározni. Ha a
              Szállítmányozó a küldeményt az általa a kiszolgáltatásra vállalt
              határidőtől számított 90 (kilencven) napon belül nem adja át a
              címzett részére, a Megbízó jogosult a küldeményt az ellenkező
              bizonyításig elveszettnek tekinteni.
            </p>
            <p className="mb-4">
              Minden más esetben Szállítmányozónak a szállítmányozási feladat
              teljesítésével összefüggő kárfelelőssége legfeljebb a
              Szállítmányozót az adott szállítmányozási feladat teljesítéséért
              megillető szállítmányozási díj háromszorosával megegyező mértékig
              terjedhet. A fenti korlátozás a Szállítmányozó által szerződésen
              kívül okozott károkra is kiterjed.
            </p>
            <p className="mb-4">Szállítmányozó nem tartozik felelősséggel:</p>
            <p className="mb-4">
               a veszélyes és/vagy speciális kezelést igénylő küldeményekért,
              ha a Megbízó a jelen ÁSZF XV. fejezetében részletezett előírások
              teljesítését elmulasztotta;
            </p>
            <p className="mb-4"> a késedelemből adódó veszteségért;</p>
            <p className="mb-4">
               a közvetett vagy járulékos veszteségért, különösen, de nem
              kizárólag az elmaradt haszonért, vagy a Megbízó piacvesztésért.
            </p>
            <p className="mb-4">
              Megbízó köteles a káreseményt és a várható kár mértékét a
              Szállítmányozóval azok tudomására jutását követő 2 (kettő)
              munkanapon belül e-mailben vagy a Rendeléskezelő felületen
              keresztül írásban közölni. Megbízó köteles továbbá a kár
              bekövetkezését és mértékét bizonyító okmányokat azok kézhezvételét
              követő 2 (kettő) munkanapon belül megküldeni a Szállítmányozónak.
              E kötelezettség késedelmes teljesítéséből vagy elmulasztásából
              eredő következményekért a Szállítmányozó nem vállal felelősséget.
            </p>
            <p className="mb-4">
              <strong>
                Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
                hogy a jelen ÁSZF-ben kifejezetten részletezett károkon
                túlmenően további károk megtérítéséért felelősséget nem vállal.
              </strong>
            </p>
            <p className="mb-4">
              XVIII. Szállítmányozási szerződésből fakadó igények érvényesítése,
              az igények elévülése
            </p>
            <p className="mb-4">
              Szállítmányozó, a Megbízó írásbeli utasítása esetén, a Megbízó
              költségére és veszélyére köteles érvényesíteni a Megbízó peres és
              peren kívüli igényeit a fuvarozóval és a Szállítmányozó által
              igénybe vett más közreműködőkkel szemben.
            </p>
            <p className="mb-4">
              Szállítmányozó külön utasítás nélkül is köteles a Megbízó jogainak
              megóvásához szükséges nyilatkozatokat (pl. a fuvarozóval szemben a
              küldemény kiszolgáltatáskor megteendő nyilatkozatok) megtenni.
            </p>
            <p className="mb-4">
              Szállítmányozó kifejezetten felhívja a Megbízó figyelmét, hogy a
              XII. fejezetben részletezett díjak az igényérvényesítés díját és
              költségeit nem tartalmazzák, azt a Megbízó ezeken felül köteles a
              Szállítmányozónak megfizetni. A Szállítmányozó nem köteles az
              igények érvényesítésével kapcsolatos költségek előlegezésére. Ha a
              Szállítmányozó valamely költséget előlegezné is, ebből további
              költségek előlegezésére nem lehet következtetni. Szállítmányozó -
              a Felek által külön megállapodásban rögzített mértékű -
              igényérvényesítési díj és költségek megtérítésére akkor is
              jogosult, ha az igényérvényesítésre irányuló eljárás esetlegesen
              nem vezetne eredményre.
            </p>
            <p className="mb-4">
              A jelen ÁSZF alapján létrejövő szállítmányozási szerződésből
              fakadó igények - a szándékosan vagy súlyos gondatlansággal okozott
              károk kivételével - 6 (hat) hónap alatt évülnek el. Az elévülés
              akkor kezdődik, amikor a követelés tárgyát képező megrendelést
              befogadta a Szállítmányozó.A Megbízó tudomásul veszi, hogy a
              Szállítmányozó által elfogadott megrendelés tárgyát képező
              szállítási feladattal összefüggésben - ideértve különösen az
              adatbekérést, panasztételt, kártérítési igényt - kizárólag a
              megrendelés Szállítmányozó általi befogadásától számított 6 (hat)
              hónapon belül élhet igénnyel. A 6 hónapos határidő jogvesztő, azt
              követően a Szállítmányozó nem köteles sem adatot szolgáltatni, sem
              panaszt kivizsgálni, sem kártérítési eljárást lefolytatni, illetve
              abban közreműködni.
            </p>
            <p className="mb-4">
              Megbízó a Szállítmányozóval szembeni követelését köteles a
              követelés alapjául szolgáló tényekről, körülményekről való
              tudomásszerzéstől számított 2 (kettő) munkanapon belül írásban,
              e-mailben vagy a Rendeléskezelő felületen keresztül bejelenteni a
              Szállítmányozónak. Ha a Megbízó nem a fent írtak szerint terjeszti
              elő követelését, azt úgy kell tekinteni, mintha a követelés
              érvényesítéséről a Megbízó lemondott vagy attól elállt volna,
              kivéve, ha a Megbízó bizonyítja, hogy a bejelentés határidőben
              való megtételében akadályoztatva volt, és a követelését az akadály
              elhárultát követően haladéktalanul bejelentette.
            </p>
            <p className="mb-4">
              XIX. Szállítmányozási jogviszony megszűnése, elszámolás a Felek
              között
            </p>
            <p className="mb-4">
              Felek közötti szállítmányozási keretszerződés és az egyedi
              szállítmányozási jogviszony megszűnhet/megszüntethető:
            </p>
            <p className="mb-4">
               a jogviszony automatikus megszűnése esetén;
            </p>
            <p className="mb-4"> felek közös megegyezésével;</p>
            <p className="mb-4">
               a jogviszony rendes/rendkívüli felmondásával;
            </p>
            <p className="mb-4"> Szállítmányozó/ Megbízó elállása esetén.</p>
            <p className="mb-4">
              A szállítmányozási keret-, illetve egyedi szerződés automatikusan
              megszűnik a felek bármelyikének jogutód nélküli megszűnése esetén,
              vagy jogszabályban előírt esetek bekövetkezésével. Az egyedi
              szállítmányozási jogviszony automatikusan megszűnik továbbá annak
              Szállítmányozó általi teljesítése esetén is.
            </p>
            <p className="mb-4">
              Felek a szállítmányozási keret-, illetve egyedi szerződést
              bármikor megszüntethetik közös megegyezéssel. A megszüntetés
              érvényességének feltétele annak írásba foglalása, továbbá az, hogy
              annak keretében a felek egymással teljeskörűen elszámoljanak.
            </p>
            <p className="mb-4">
              Megbízó jogosult a Weboldalon regisztrált fiókját törölni, mely a
              Megbízó részéről a szállítmányozási keretszerződés azonnali
              hatályú felmondásának minősül. Szállítmányozó kifejezetten
              felhívja a Megbízó figyelmét arra, hogy mindaddig, amíg a Felek
              között a jelen ÁSZF szerinti egyedi szállítmányozási szerződés van
              hatályban, úgy a Megbízó a keretszerződést - regisztrált fiókjának
              törlésével - érvényesen nem mondhatja fel. Abban az esetben, ha a
              Felek között egyedi szállítmányozási szerződés van hatályban,
              akkor a Megbízó a keretszerződést legkorábban az egyedi
              szállítmányozási szerződés teljesítését vagy annak más okból
              történő megszűnését követő napra mondhatja fel.
            </p>
            <p className="mb-4">
              A Megbízó az egyedi szállítmányozási szerződéstől a jelen ÁSZF-ben
              meghatározott feltételekkel mindaddig jogosult elállni, amíg azt a
              Szállítmányozó nem teljesítette. Az elállás kizárólag abban az
              esetben érvényes, ha a Megbízó az erre vonatkozó szándékáról a
              Rendeléskezelő felületen keresztül - a &quot;Szállítás
              lemondása&quot; gombra kattintva - tájékoztatja a Szállítmányozót.
              Az elállás jelen ÁSZF szerinti közlésével egyidejűleg az egyedi
              szállítmányozási jogviszony minden további jogcselekmény nélkül
              megszűnik.
            </p>
            <p className="mb-4">
              Szállítmányozó a jelen ÁSZF VIII. fejezetében felsorolt esetekben
              jogosult az egyedi szállítmányozási szerződéstől elállni. Ezeken
              túlmenően a Szállítmányozó abban az esetben is jogosult elállni a
              szerződéstől vagy azt felmondani és költségeit, valamint arányos
              díját követelni, amennyiben olyan, a Szállítmányozó befolyásán
              kívül álló körülmények következnek be, amelyek a Szállítmányozó
              kötelezettségeinek teljesítését részben vagy egészben lehetetlenné
              teszik.
            </p>
            <p className="mb-4">
              A szállítmányozási keret-, és egyedi szerződést bármelyik fél
              jogosult rendes felmondással, indokolás nélkül, 15 (tizenöt) napos
              felmondási idő biztosításával megszüntetni, a másik félhez címzett
              írásbeli nyilatkozattal azzal, hogy a már elvállalt
              szolgáltatásokkal és ellenszolgáltatásokkal felek a megszűnés
              napjáig kötelesek egymással elszámolni.
            </p>
            <p className="mb-4">
              Felek jogosultak a szállítmányozási keret-, és az egyedi
              szerződést a másik fél lényeges szerződésszegése esetén azonnali
              hatállyal felmondani. A rendkívüli felmondás kizárólag írásban,
              indokolással, a felmondás okának megjelölésével érvényes. Mindkét
              fél jogosult a felmondásban általa megjelölt felmondási okról
              másik okra áttérni.
            </p>
            <p className="mb-4">
              Ha a Szállítmányozó azért szünteti meg egyoldalúan a
              szállítmányozási jogviszonyt, mert a Megbízó - neki felróható
              okból - nem tesz eleget a küldemény határidőben történő átadására
              vonatkozó kötelezettségének a jelen ÁSZF IX. fejezetében írtakkal
              összhangban, úgy a Megbízó köteles átalány-kártérítés címén a
              bruttó szállítmányozási díj 100 %-ával megegyező összeget
              megfizetni a Szállítmányozónak.
            </p>
            <p className="mb-4">
              Felek a szállítmányozási jogviszony bármely okból történő
              megszűnése esetén kötelesek legkésőbb a megszűnés időpontjáig,
              azonnali hatályú felmondás esetén annak kézhezvételétől számított
              10 (tíz) munkanapon belül elszámolni egymással.
            </p>
            <p className="mb-4">
              A felmondási idő alatt, illetve a szerződés Felek által közösen
              meghatározott megszűnésének időpontjáig Szállítmányozó jogosult -
              választása szerint - az új megbízásokat visszautasítani vagy azok
              teljesítését a szállítmányozási díjak és költségek azonnali
              kifizetéséhez kötni.
            </p>
            <p className="mb-4">
              A szállítmányozási jogviszony megszűnésével a még le nem járt
              valamennyi megbízói számlatartozás egyösszegben lejárttá és
              esedékessé válik.
            </p>
            <p className="mb-4">XX. Fejlesztési igény</p>
            <p className="mb-4">
              Megbízó jogosult a Rendeléskezelő felület továbbfejlesztésére
              vonatkozó egyedi igényét jelezni a Szállítmányozónak.
              Szállítmányozó fenntartja magának a jogot arra, hogy saját
              hatáskörben döntsön arról, hogy a fejlesztést - az általa
              meghatározott feltételek szerint és díjazás ellenében -
              megvalósítja-e.
            </p>
            <p className="mb-4">
              Szállítmányozó kifejezetten felhívja a Megbízó figyelmét arra,
              hogy az igény befogadása még nem keletkeztet kötelezettséget a
              fejlesztés megvalósítására a Szállítmányozó oldalán. Amennyiben a
              Szállítmányozó a fejlesztés megvalósítására kötelezettséget
              vállal, úgy saját hatáskörben jogosult a fejlesztés teljesítési
              határidejének, feltételeinek és díjának meghatározására, és erről
              a Megbízót írásban tájékoztatja (ajánlat).
            </p>
            <p className="mb-4">
              Szállítmányozó a fejlesztés megvalósítására abban az esetben
              köteles, ha a Megbízó a fentiek szerinti ajánlatot annak
              kézhezvételétől számított 15 (tizenöt) napon belül írásban
              elfogadja.
            </p>
            <p className="mb-4">XXI. Kedvezmények</p>
            <p className="mb-4">
              Szállítmányozó fenntartja magának a jogot arra, hogy a Megbízók
              számára kedvezmények igénybevételét tegye lehetővé.
            </p>
            <p className="mb-4">
              Szállítmányozó saját hatáskörében jogosult eldönteni azt, hogy
              milyen feltételek teljesítése esetén minősülhet egy Megbízó
              kiemelt partnernek. Szállítmányozó fenntartja magának a jogot
              arra, hogy egyedi szempontokat mérlegeljen a fenti döntés
              meghozatala során.
            </p>
            <p className="mb-4">
              Szállítmányozó saját hatáskörben jogosult dönteni arról, hogy a
              kiemelt partnernek minősülő Megbízó részére, hogy milyen mértékű
              százalékos kedvezményt biztosít.
            </p>
            <p className="mb-4">
              Ha a kiemelt partnernek minősülő Megbízó küldemények tömeges
              szállítmányozására ad megbízást, úgy a Szállítmányozó lehetővé
              teszi számára, hogy igénybe vegye azt a szolgáltatást is, ami
              alapján a Szállítmányozó - közreműködői útján - maga vállalja
              teljesíteni a küldemények felvételét a Megbízó telephelyén vagy az
              általa megjelölt másik címen.
            </p>
            <p className="mb-4">
              A Megbízó a kiemelt partnernek járó kedvezmények igénybevételére
              azt követően jogosult, hogy a Szállítmányozó a Megbízó kiemelt
              partneri minőségét és kedvezményszintjét a Rendeléskezelő
              felülteten közzétette.
            </p>
            <p className="mb-4">
              Szállítmányozó fenntartja magának a jogot arra, hogy a kiemelt
              partnerek számára a jelen ÁSZF alapján biztosított kedvezményeket
              - ideértve különösen azok mértékét, jellegét -bármikor, indokolás
              nélkül egyoldalú döntésével módosítsa vagy visszavonja.
            </p>
            <p className="mb-4">
              Megbízó a kiemelt ügyfél kedvezményszint alapján járó kedvezmény
              mértéket minden olyan későbbi szállítmányozás díjában
              érvényesítheti, melyre a kedvezményszint közzétételét követően, a
              Rendeléskezelő felületen keresztül ad megbízást. A Megbízó által a
              fentiek szerint elért kedvezményt az üzemanyagfelár címén
              fizetendő, illetve a 300.000,- forint összeget meghaladó, valamint
              a bankkártyával kiegyenlített utánvét kezeléséért felszámított
              díjakon kívül az adott szállítmányozási feladat teljesítéséért a
              Szállítmányozó által felszámított alap-, pótlólagos és külön díjak
              vonatkozásában is érvényesítheti.
            </p>
            <p className="mb-4">
              Szállítmányozó felhívja a figyelmet arra, hogy a Megbízót kiemelt
              partneri minőségére tekintettel megillető kedvezmények harmadik
              személyre nem ruházhatók át, és készpénzre sem válthatók.
            </p>
            <p className="mb-4">XXII. Vegyes rendelkezések</p>
            <p className="mb-4">
              Szerződő felek kötelezettséget vállalnak arra, hogy a közöttük a
              jelen ÁSZF alapján létrejövő szállítmányozási szerződésekből
              fakadó kötelezettségeik teljesítése során az irányadó jogszabályi
              rendelkezéseket betartva, a jóhiszeműség és tisztesség
              követelményének megfelelően járnak el, és egymással kölcsönösen
              együttműködnek, egymást a szerződések teljesítését érintő minden
              lényeges körülményről indokolatlan késedelem nélkül tájékoztatják.
            </p>
            <p className="mb-4">
              Szállítmányozó a jelen ÁSZF által meghatározott rendelkezéseket,
              illetőleg a Rendeléskezelő felületen általa közölt információkat
              magára nézve kötelezőnek tekinti, és azok teljesítése érdekében
              minden esetben úgy jár el, ahogy az az adott helyzetben általában
              elvárható.
            </p>
            <p className="mb-4">
              A jelen ÁSZF elfogadásával a Felek között létrejövő
              szállítmányozási jogviszonyból eredő jogok és kötelezettségek
              gyakorlása során a Megbízó és a Szállítmányozó is a másik fél
              jogos érdekét, jó üzleti hírnevét figyelembe véve köteles eljárni.
            </p>
            <p className="mb-4">
              Felek megállapodása alapján a szállítmányozási szerződések
              megkötésével és teljesítésével összefüggésben a másik féllel és
              annak tevékenységével kapcsolatban bármilyen módon tudomásukra
              jutott adat, tény, így különösen, de nem kizárólagosan a jelen
              ÁSZF alapján létrejövő szállítmányozási szerződések léte és
              tartalma üzleti titoknak minősül, azt a felek harmadik személynek
              nem adhatják ki, nem tehetik hozzáférhetővé és a szerződések
              teljesítésétől eltérő más célra nem használhatják fel.
            </p>
            <p className="mb-4">
              Megbízó vállalja, hogy a Szállítmányozó előzetes írásos
              beleegyezése nélkül harmadik személyek számára nem ad át és nem
              hoz nyilvánosságra a jelen ÁSZF alapján létrejövő szállítmányozási
              szerződések tartalmával és/vagy azok teljesítésével kapcsolatos
              semmilyen információt, különösen, de nem kizárólagosan a
              szállítmányozási feladat teljesítésének időpontjáig. Megbízó
              szavatol azért, hogy a titoktartási kötelezettség valamennyi
              munkatársára, valamint közreműködőként a szerződésekről, azok
              teljesítéséről információt birtokló bármely más személyre
              kiterjed. Megbízó vállalja, hogy minden tőle telhető intézkedést
              megtesz annak megakadályozására, hogy harmadik személyek
              hozzáférjenek vagy megismerjék a jelen ÁSZF alapján létrejövő
              szállítmányozási szerződésekhez vagy azok teljesítéséhez
              kapcsolódó bizalmas ismereteket vagy információkat.
            </p>
            <p className="mb-4">
              Abban az esetben, ha a Szállítmányozó valamely, a jelen ÁSZF-ben
              rögzített jogát nem gyakorolja, úgy a joggyakorlás elmaradása nem
              minősül a Szállítmányozó részéről az adott jogról való
              lemondásnak.
            </p>
            <p className="mb-4">
              A szakma szokásai és a felek között korábban kialakított szokások
              csak akkor válnak a szerződés részévé, ha ebben a felek
              kifejezetten megállapodtak.
            </p>
            <p className="mb-4">
              Mindazon esetleges károkért, melyek a Weboldal és/vagy a
              Rendeléskezelő felület működésében felmerülő hiba vagy hiányosság
              miatt következnek be, Szállítmányozó a felelősségét kizárja.
            </p>
            <p className="mb-4">
              Amennyiben akár a Szállítmányozó, akár a Megbízó jogerősen csőd-
              vagy felszámolási eljárás alá kerül, úgy a másik fél jogosult a
              jelen ÁSZF alapján létrejött szerződést azonnali hatállyal
              felmondani. Azon szolgáltatások vonatkozásában, melyek
              teljesítését a Szállítmányozó a felmondás időpontjában már
              megkezdte, a Felek kötelesek egymással elszámolni.
            </p>
            <p className="mb-4">
              Szállítmányozó és Megbízó a szerződés teljesítése során, illetve a
              szolgáltatásnyújtással összefüggésben felmerülő valamennyi kérdés
              vonatkozásában a kapcsolatot egymással írásban, elektronikus levél
              (e-mail), illetve amennyiben lehetséges, úgy a Rendeléskezelő
              felületen keresztül elküldött üzenetek útján tartja.
            </p>
            <p className="mb-4">
              Szállítmányozó köteles valamennyi értesítést, tájékoztatást,
              jognyilatkozatot a Megbízónak a megadott e-mail címére megküldeni.
              Szállítmányozó a Megbízótól érkező valamennyi írásbeli megkeresés
              fogadására az alábbi e-mail címet tartja fenn: hello@packli.hu
            </p>
            <p className="mb-4">
              Amennyiben a Megbízó e-mail címe időközben módosul, úgy köteles
              erről a Szállítmányozót haladéktalanul tájékoztatni. A fenti
              tájékoztatási kötelezettség elmulasztásából eredő hátrányos
              jogkövetkezményekért a Szállítmányozó semmifajta felelősséggel nem
              tartozik.
            </p>
            <p className="mb-4">
              Jelen dokumentum 2025. 07.31 napjától hatályos, kihirdetésre 2025.
              07. 31. napján került sor.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
