"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const carouselTexts = [
  "fully planned",
  "setteled in advance",
  "with zero stress",
];

const featureCards = [
  {
    title: "Choose your meal",
    description: "Select the time of arrival and your meal. Once you arrive find your food ready!",
    bg: "bg-[hsl(30,30%,92%)]",
    bgImage: null,
    image: "/cards/card_menu.png",
    imageAlt: "hoose your meal",
    titleColor: "text-[hsl(16,85%,55%)]",
  },
  {
    title: "Share the plan",
    description: "The best recipe? Good food, in good company. Share the plan with your friends. Each one choose the preferred meal, one single booking, clear prices for each account.",
    bg: "bg-[hsl(0,40%,90%)]",
    bgImage: null,
    image: "/cards/card_share.png",
    imageAlt: "Comparte el plan",
    titleColor: "text-[hsl(340,75%,55%)]",
  },
  {
    title: "Arrive and enjoy",
    description: "When you arrive the food is served in few minutes. Enjoy your time as you most wish.",
    bg: "bg-[hsl(25,40%,90%)]",
    bgImage: null,
    image: "/cards/card_pay.webp",
    imageAlt: "Arrive and enjoy",
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
    <>
      {/* Desktop: scroll-driven cards */}
      <section
        ref={sectionRef}
        className="relative bg-[hsl(var(--background))] pt-20 hidden md:block"
        style={{ height: "250vh" }}
      >
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">
          {/*<h2 className="font-poppins text-5xl md:text-7xl font-bold text-center text-slate-900 mb-8">
            This is PLATEO
          </h2>*/}

          <div className="w-full max-w-6xl flex flex-row gap-5" style={{ height: "600px" }}>
            {featureCards.map((card, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`${card.bg} rounded-3xl border-[3px] border-slate-900 overflow-hidden will-change-[flex] relative`}
                style={{ flex: i === 0 ? 5 : 1 }}
              >
                {card.bgImage && (
                  <Image
                    src={card.bgImage}
                    alt=""
                    fill
                    className="object-cover"
                  />
                )}

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

      {/* Mobile: horizontal carousel */}
      <section className="bg-[hsl(var(--background))] py-16 md:hidden">
        <h2 className="font-poppins text-3xl font-bold text-center text-slate-900 mb-8 px-4">
          What is PLATEO
        </h2>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-hide">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className={`${card.bg} rounded-2xl border-[3px] border-slate-900 overflow-hidden flex-shrink-0 w-[80vw] snap-center`}
            >
              <div className="p-6 flex flex-col gap-4">
                <span className={`font-poppins text-2xl font-extrabold leading-none tracking-tight ${card.titleColor}`}>
                  {card.title}
                </span>
                <p className="text-base leading-snug text-slate-600">
                  {card.description}
                </p>
                {card.image && (
                  <div className="flex justify-center">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={300}
                      height={300}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
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
      }, 600);
    }, 4000);
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

          <h1 className="font-poppins text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
            Fancy a dinner? Have it<br />
            <span
              className={`text-primary inline-block transition-all duration-600 whitespace-nowrap ${animating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
            >
              {carouselTexts[carouselIndex]}
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mb-10">
            <span className="block md:inline">Book it in few steps.</span>{" "}
            <span className="block md:inline">Arrive on time and start enjoing your meal.</span>
          </p>

          {/* Email form in hero */}
          {submitted ? (
            <div className="bg-white/90 backdrop-blur text-green-700 rounded-2xl px-8 py-6 font-medium">
              Great! We will notify for the launch 🚀
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="anna.devries@email.com"
                className="flex-1 px-5 py-3 rounded-xl border-0 bg-white/90 backdrop-blur text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition text-base"
              />
              <button
                type="submit"
                className="bg-primary text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 whitespace-nowrap"
              >
                Join the waiting list
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-white/70">
            No spam. Only good vibes. 🎊
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
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-poppins text-3xl sm:text-5xl md:text-7xl font-bold text-center text-slate-900 mb-3">
            Join Plateo ↓
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-16">
            Less stress. More smiles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <a href="#cta-section" className="group border-2 border-black rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="p-5 md:p-8 pb-4 md:pb-6 flex-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F97316" />
                </svg>
                <h3 className="font-bold text-xl md:text-3xl text-slate-900 mb-2 md:mb-3 leading-tight">Your time is more valuable than a queue.</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-5">
                  Upgrade your planning skills with a smooth and organised dinner.
                </p>
                <p className="text-muted-foreground text-sm font-semibold transition-colors duration-300 group-hover:text-orange-500">
                  Be one of the first to take advantage of Plateo.
                </p>
              </div>
              <div className="h-40 md:h-56 overflow-hidden">
                <Image
                  src="/benefits/benefit.png"
                  alt="Your time is more valuable than a queue"
                  width={500}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

            {/* Benefit 2 */}
            <a href="#cta-section" className="group border-2 border-black rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="p-5 md:p-8 pb-4 md:pb-6 flex-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="#22C55E" />
                </svg>
                <h3 className="font-bold text-xl md:text-3xl text-slate-900 mb-2 md:mb-3 leading-tight">Planes que salen bien.</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-5">
                  Todo el mundo queda contento: menos indecisión, más risas y mesa sin estrés.
                </p>
                <p className="text-muted-foreground text-sm font-semibold transition-colors duration-300 group-hover:text-orange-500">
                  Te avisamos en cuanto esté activo.
                </p>
              </div>
              <div className="h-40 md:h-56 overflow-hidden">
                <Image
                  src="/benefits/benefit2.png"
                  alt="Planes que salen bien"
                  width={500}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

            {/* Benefit 3 */}
            <a href="#cta-section" className="group border-2 border-black rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="p-5 md:p-8 pb-4 md:pb-6 flex-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-5">
                  <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" fill="#8B5CF6" />
                </svg>
                <h3 className="font-bold text-xl md:text-3xl text-slate-900 mb-2 md:mb-3 leading-tight">Cuentas claras, sobremesa larga.</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-5">
                  Goodby to onsite settelments: una experiencia cómoda para grupos, equipos y comidas de trabajo.
                </p>
                /*<p className="text-muted-foreground text-sm font-semibold transition-colors duration-300 group-hover:text-orange-500">
                  Apúntate a la beta y pruébalo antes.
                </p>*/
              </div>
              <div className="h-40 md:h-56 overflow-hidden">
                <Image
                  src="/benefits/benefit3.png"
                  alt="Cuentas claras, sobremesa larga"
                  width={500}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA Signup ── */}
      <section id="cta-section" className="py-14 md:py-24 bg-[#165132] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-poppins text-3xl sm:text-[2.9375rem] md:text-[3.6875rem] font-black text-white mb-4 md:mb-6 leading-tight">
              Be the first<br />enjoying it
            </h2>
            <p className="text-white/80 text-lg mb-2">
              Déjanos tu email y sé de los primeros en probar Plateo en Madrid.
            </p>
            <p className="text-white/60 text-sm md:text-base mb-6 md:mb-10">
              Lanzamiento + invitación a la beta + ventajas de early adopters.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rodrigo.garcia@email.com"
                className="flex-1 px-5 py-4 rounded-xl border border-white/30 bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
              />
              <button
                type="submit"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#165132] active:scale-95 transition-all duration-150 whitespace-nowrap"
              >
                Count me in
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center pt-8 md:pt-12">
            <div className="relative animate-float">
              {/* Notification badge */}
              <div className="absolute -top-10 right-0 md:-right-6 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 z-10 animate-float-delayed">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Pedido listo</p>
                  <p className="text-sm font-bold text-slate-900 whitespace-nowrap">¡A disfrutar!</p>
                </div>
              </div>
              {/* Phone frame */}
              <div className="relative w-[220px] sm:w-[260px] md:w-[300px] rounded-[2rem] sm:rounded-[2.5rem] border-[5px] sm:border-[6px] border-gray-900 bg-gray-900 shadow-2xl">
                <div className="rounded-[2rem] overflow-hidden">
                  <Image
                    src="/benefits/fotoapp.png"
                    alt="Plateo app"
                    width={300}
                    height={650}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1a1a2e] text-slate-400 pt-10 md:pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-start">
            <div>
              <span className="text-2xl font-bold"><span className="text-[hsl(var(--primary))]">Pla</span><span className="text-[#b32e34]">teo</span></span>
              <p className="text-sm mt-4 max-w-md">
                Transforma las operaciones de tu restaurante con reservas garantizadas y pedidos prepagados.
              </p>
              <a
                href="mailto:info@plateo.es"
                className="text-sm text-slate-300 hover:text-white transition mt-3 inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                <span className="font-bold">info@plateo.es</span>
              </a>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <div className="flex flex-col gap-3 text-sm">
                <a href="/privacy" className="hover:text-white transition">Privacy</a>
                <a href="/terms" className="hover:text-white transition">T&C</a>
                <a href="/cookies" className="hover:text-white transition">Cookies</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-slate-600/50 text-center text-sm text-slate-500">
            © 2026 Plateo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
