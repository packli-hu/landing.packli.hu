import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";
import { CustomSubtitle } from "@/components/custom/subtitle";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kotsy Zsófi",
      role: "@TeeAmoTea",
      content:
        "Elsősorban az áraitok és az integrációtok miatt döntöttünk mellettetek. Nagyon tetszik a törzsvásárlói rendszeretek is minél tovább vagyunk partnerek, annál jobban csökkennek a szállítási költségeink.",
      avatar:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Kristóf Edina",
      role: "@Keridekor",
      content:
        "Nagy segítség, hogy személyesen jöttök el a csomagpontos küldeményeimért, ezzel sok időt takarítok meg. Szeretem, hogy több szolgáltatóval dolgoztok együtt, és hogy külföldre is elfogadható árakkal szállítotok.",
      avatar:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Török Gergő",
      role: "@SafeBeBag, @ProLife",
      content:
        "Eddig minden kérésünket teljesítettétek - még a felhasználói felületet is az egyéni igényeinkre szabtátok. Az elszámolási rendszeretek pontos és precíz, és a rendeléskezelés is hatékonyan működik. Hosszú távon viszont Fruzsi fogott meg minket, aki nemcsak szakmai, de egyéb haszno tanácsokkal és véleményekkel is ellát minket.",
      avatar:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div className="flex-shrink-0 w-[350px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/15 dark:to-indigo-900/15  p-6 border border-border/50 shadow-sm mx-1.5">
      <p className="text-muted-foreground mb-4 font-medium">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-3">
        <div>
          <div className="font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );

  const firstColumn = testimonials.slice(0, 5);
  const secondColumn = testimonials.slice(5, 10);

  return (
    <section
      className="py-24 bg-background overflow-hidden border-b border-border/50"
      id="testimonails"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>Nyiss új lapot te is!</CustomBadge>

          <CustomTitle>Rólunk mondták</CustomTitle>

          <CustomSubtitle>
            A küldeményeknél csak ügyfeleink elégedettségével törödünk többet.
          </CustomSubtitle>
        </motion.div>
      </div>

      <div className="w-full mx-auto px-6">
        <motion.div
          className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1.5 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Marquee pauseOnHover className="[--duration:40s] grow">
            {firstColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] grow">
            {secondColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 start-0 w-1/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 end-0 w-1/12 bg-gradient-to-l from-background"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
