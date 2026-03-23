"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const carouselTexts = [
  "la cola del restaurante",
  "la ensalada del súper",
  "las esperas para comer",
  "los líos con la cuenta",
];

const featureCards = [
  {
    title: "Elige tu menú",
    description: "Reserva tu hora y deja tu pedido listo. Cuando llegas, solo toca comer.",
    bg: "bg-[hsl(30,30%,92%)]",
    bgImage: null,
    image: "/cards/card_menu.png",
    imageAlt: "Elige tu menú",
    titleColor: "text-[hsl(16,85%,55%)]",
  },
  {
    title: "Comparte el plan",
    description: "Organiza comidas sin caos: cada uno elige lo suyo y el pedido queda unificado.",
    bg: "bg-[hsl(0,40%,90%)]",
    bgImage: null,
    image: "/cards/card_share.png",
    imageAlt: "Comparte el plan",
    titleColor: "text-[hsl(340,75%,55%)]",
  },
  {
    title: "Llega a mesa puesta",
    description: "Menos espera, más tiempo: ideal para la pausa de comida y planes con prisa.",
    bg: "bg-[hsl(25,40%,90%)]",
    bgImage: null,
    image: "/cards/card_pay.webp",
    imageAlt: "Llega a mesa puesta",
    titleColor: "text-[hsl(160,70%,38%)]",
  },
];

function FeatureCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const vh = window.innerHeight;
      const scrolled = Math.max(0, Math.min(1, -rect.top / (sectionH - vh)));

      const count = featureCards.length;
      // Map scroll to a continuous position: 0 = card 0 fully open, 1 = card 1, 2 = card 2
      const pos = scrolled * (count - 1); // 0 to 2

      for (let i = 0; i < count; i++) {
        const card = cardRefs.current[i];
        const content = contentRefs.current[i];
        const title = titleRefs.current[i];
        if (!card || !content || !title) continue;

        // Distance from this card's "fully open" position
        const dist = Math.abs(pos - i);
        // Smooth weight: 1 when active, drops off with distance
        // Using a power curve for snappy but smooth feel
        const t = Math.max(0, 1 - dist);
        const weight = t * t * (3 - 2 * t); // smoothstep: smooth in & out

        // Flex: collapsed = 1, expanded = 5
        const flex = 1 + weight * 4;
        card.style.flex = `${flex}`;

        // Content: fade in/out with slight delay for clean feel
        const contentT = Math.max(0, Math.min(1, (weight - 0.3) / 0.7));
        content.style.opacity = `${contentT}`;
        content.style.transform = `translateY(${(1 - contentT) * 15}px)`;

        // Title: switch between horizontal (expanded) and vertical (collapsed)
        const isExpanded = weight > 0.5;
        const hTitle = card.querySelector("[data-h-title]") as HTMLElement;
        const vTitle = title.querySelector("[data-v-title]") as HTMLElement;
        if (hTitle && vTitle) {
          if (isExpanded) {
            hTitle.style.opacity = `${Math.min(1, (weight - 0.5) * 4)}`;
            vTitle.style.opacity = "0";
            title.style.visibility = "hidden";
          } else {
            hTitle.style.opacity = "0";
            vTitle.style.opacity = `${Math.min(1, (0.5 - weight) * 4)}`;
            title.style.visibility = "visible";
          }
        }
      }

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[hsl(var(--background))] pt-20"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">
        <h2 className="font-poppins text-5xl md:text-7xl font-bold text-center text-slate-900 mb-8">
          ¿Qué hay en Plateo?
        </h2>

        <div className="w-full max-w-6xl flex flex-row gap-5" style={{ height: "600px" }}>
          {featureCards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${card.bg} rounded-3xl border-[3px] border-slate-900 overflow-hidden will-change-[flex] relative`}
              style={{ flex: i === 0 ? 5 : 1 }}
            >
              {/* Background image for cards that have one */}
              {card.bgImage && (
                <Image
                  src={card.bgImage}
                  alt=""
                  fill
                  className="object-cover"
                />
              )}

              {/* Vertical title — centered in card when collapsed */}
              <div
                ref={(el) => { titleRefs.current[i] = el; }}
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
              >
                <span
                  data-v-title
                  className={`font-poppins text-4xl md:text-5xl font-extrabold whitespace-nowrap ${card.titleColor}`}
                  style={{
                    writingMode: "vertical-lr",
                    transform: "rotate(180deg)",
                    opacity: i === 0 ? 0 : 1,
                  }}
                >
                  {card.title}
                </span>
              </div>

              {/* Expanded content */}
              <div className="h-full p-8 md:p-10 flex flex-col justify-between relative z-10">
                <span
                  data-h-title
                  className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold block leading-none tracking-tight text-slate-900"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {card.title}
                </span>

                <div
                  ref={(el) => { contentRefs.current[i] = el; }}
                  className="flex flex-col justify-between flex-1 mt-3 will-change-[opacity,transform]"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  <p className="text-xl md:text-2xl leading-snug max-w-lg text-slate-600">
                    {card.description}
                  </p>
                  {card.image && (
                    <div className="flex justify-center mt-auto">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        width={500}
                        height={500}
                        className="w-72 h-72 md:w-96 md:h-96 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function UserLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCarouselIndex((prev) => (prev + 1) % carouselTexts.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      {/* ── Hero (full-width background image) ── */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero/Hero-Desktop.png"
          alt="Profesionales disfrutando del almuerzo juntos"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src="/hero/Hero-Mobile.png"
          alt="Profesionales disfrutando del almuerzo juntos"
          fill
          className="object-cover block md:hidden"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content centered on top of image */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-20 max-w-5xl mx-auto">
          <Image
            src="/logo/True_logo_no_bg.png"
            alt="Logo de Plateo"
            width={300}
            height={100}
            className="h-28 md:h-36 w-auto mb-10"
            unoptimized
          />

          <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
            Di adiós a{" "}
            <span
              className={`text-primary inline-block transition-all duration-400 ${animating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
            >
              {carouselTexts[carouselIndex]}
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-10 whitespace-nowrap">
            Reserva en minutos. Llega a mesa puesta y disfruta.
          </p>

          {/* Email form in hero */}
          {submitted ? (
            <div className="bg-white/90 backdrop-blur text-green-700 rounded-2xl px-8 py-6 font-medium">
              ¡Genial! Te avisaremos en cuanto lancemos 🚀
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rodrigo.garcia@email.com"
                className="flex-1 px-5 py-3 rounded-xl border-0 bg-white/90 backdrop-blur text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition text-base"
              />
              <button
                type="submit"
                className="bg-primary text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 whitespace-nowrap"
              >
                Únete a la Lista
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-white/70">
            Sin spam. Solo buenas noticias. 🎊
          </p>
        </div>

        {/* Wavy bottom edge */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path
              d="M0,60 C200,100 400,20 600,80 C800,140 1000,10 1200,60 C1320,90 1400,70 1440,50 L1440,120 L0,120 Z"
              fill="hsl(30,20%,97%)"
            />
          </svg>
        </div>
      </section>

      {/* ── Feature Cards (scroll-driven) ── */}
      <FeatureCards />

      {/* ── Benefits Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">
            Únete a Plateo
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Pre-launch en Madrid · Menos espera. Más disfrute.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-[hsl(var(--background))] rounded-2xl overflow-hidden hover:-translate-y-px hover:shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/benefits/benefit.png"
                  alt="Tu tiempo vale más que una cola"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Tu tiempo vale más que una cola.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Convierte la salida a comer en algo rápido y fluido. Sin esperas innecesarias.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[hsl(var(--background))] rounded-2xl overflow-hidden hover:-translate-y-px hover:shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/benefits/benefit2.png"
                  alt="Planes que salen bien"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Planes que salen bien.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Todo el mundo queda contento: menos indecisión, más risas.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[hsl(var(--background))] rounded-2xl overflow-hidden hover:-translate-y-px hover:shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/benefits/benefit3.png"
                  alt="Cuentas claras, sobremesa larga"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Cuentas claras, sobremesa larga.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Adiós al lío de pagar: una experiencia cómoda de principio a fin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Signup ── */}
      <section id="signup" className="py-20 bg-[hsl(var(--background))]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <Image
              src="/benefits/PLATEO.png"
              alt="Plateo app"
              width={400}
              height={500}
              className="max-w-xs md:max-w-sm"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Consigue acceso anticipado
            </h2>
            <p className="text-muted-foreground mb-2">
              Déjanos tu email y sé de los primeros en probar Plateo en Madrid.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Lanzamiento + invitación a la beta + ventajas de early adopters.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 px-5 py-3 rounded-xl border border-border bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              <button
                type="submit"
                className="bg-primary text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 whitespace-nowrap"
              >
                Apuntarme
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="font-bodoni text-2xl font-bold text-white">Plateo</span>
              <p className="text-sm mt-2">
                Transforma las operaciones de tu restaurante con reservas garantizadas y pedidos prepagados.
              </p>
              <a
                href="mailto:info@plateo.es"
                className="text-sm text-primary hover:underline mt-1 block"
              >
                info@plateo.es
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a href="/privacy" className="hover:text-white transition">Política de Privacidad</a>
              <a href="/terms" className="hover:text-white transition">Términos y Condiciones</a>
              <a href="/cookies" className="hover:text-white transition">Política de Cookies</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700 text-center text-xs">
            © 2026 Plateo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
