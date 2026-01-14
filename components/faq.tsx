import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";
import { CustomSubtitle } from "@/components/custom/subtitle";

const FAQ = () => {
  const faqs = [
    {
      question: "Mi az a Packli, és hogyan segíti a webshopomat?",
      answer:
        "A Packli egy logisztikai aggregátor, amely elérhetővé teszi a legnagyobb hazai és nemzetközi futárszolgálatokat a webshopod számára.",
    },
    {
      question: "Milyen futárszolgálatokkal dolgozik együtt a Packli?",
      answer:
        "Jelenleg elérhető szállítási partnerek: MPL, GLS, DPD, Packeta, Foxpost.",
    },
    {
      question:
        "Kell-e külön szerződést kötnöm minden egyes futárszolgálattal?",
      answer:
        "Nem, elegendő egyetlen szerződés a Packlival, és máris használhatod az összes partnerünk szolgáltatását.",
    },
    {
      question: "Miért éri ez meg nekem?",
      answer:
        "Kevesebb adminisztráció, egyszerűbb logisztika, több szállítási opció a vásárlóidnak, automatizációk integrációkon keresztül. Mindezt alacsonyabb árakon, mint ha egyesével szerződnél a futárszolgálatokkal.",
    },
    {
      question: "Hogyan szerződhetek a Packlival?",
      answer:
        "Add meg a havi várható csomagszámodat az ajánlatkérő oldalon, és már láthatod is az aktuális ártáblát. Egy gyors regisztráció után azonnal feladhatod az első csomagodat. Magasabb csomagszám esetén egyedi kedvezményeket biztosítunk.",
    },
    {
      question: "Milyen webshop-motorokkal kapcsolható össze a Packli?",
      answer:
        "A Packli több népszerű webshop-motorhoz is biztosít integrációt. A pontosan támogatott rendszerek listája a Packli weboldalán érhető el.",
    },
    {
      question: "Mennyi időt vesz igénybe az integráció beállítása?",
      answer:
        "Az integráció bekapcsolása egy egyszerű, néhány lépésből álló folyamat. Minden technikai segítséget megadunk, akár néhány perc alatt is elkészülhetsz vele.",
    },
    {
      question: "Van-e lehetőség API-n keresztüli összekötésre?",
      answer:
        "Igen, a Packli fejlesztőbarát API-t biztosít az egyedi igények kiszolgálására.",
    },
    {
      question: "Lehetséges-e külföldre csomagot küldeni?",
      answer:
        "Igen, minden EU-s tagállamba vállalunk kiszállítást. Az adminisztráció és az elszámolás ugyanolyan egyszerű, mint belföldi csomagok esetén, havi gyűjtőszámlával.",
    },
    {
      question: "Hogyan működik a cserecsomag és a visszaküldés kezelése?",
      answer:
        "A Packli felületén néhány kattintással generálhatsz visszaküldési címkét vagy indíthatsz cserecsomag folyamatot.",
    },
    {
      question: "Mikor kapom meg az utánvét összegeket?",
      answer:
        "Az utánvéteket hetente utaljuk, de az 50 000 Ft-os limit elérése esetén akár már a következő munkanapon megérkezhet az összeg.",
    },
    {
      question: "Milyen költségekkel kell számolnom? Van-e havidíj?",
      answer:
        "Nincs havidíj vagy rejtett költség. Csak az egyes kiszállítások díját kell fizetned, amelyeket átlátható módon követhetsz.",
    },
    {
      question: "Hogyan kapom meg a számlát a szállításokról?",
      answer:
        "Minden szállítópartner költségeiről egyetlen, átlátható havi gyűjtőszámlát állítunk ki.",
    },
    {
      question: "Kihez fordulhatok, ha probléma merül fel egy csomaggal?",
      answer:
        "Személyes kapcsolattartót biztosítunk, aki intézi a reklamációkat, így nem kell a különböző futárszolgálatok ügyfélszolgálatával egyeztetned.",
    },
    {
      question: "Van-e biztosítás a csomagokon?",
      answer:
        "Igen, 50 000 Ft-os értékhatárig a küldemény értékével megegyező kártérítés jár. Magasabb érték esetén külön díjas biztosítás igényelhető.",
    },
  ];
  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-25"
        >
          <CustomBadge>GYIK</CustomBadge>

          <CustomTitle>Gyakran Ismételt Kérdések</CustomTitle>

          <CustomSubtitle>
            Kérdésed van? Itt vannak a válaszaink.
          </CustomSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-background  border! border-border px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-indigo-600 data-[state=open]:text-indigo-600 transition-colors cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
