"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const metricCards = [
  {
    metric: "0%",
    label: "No-shows",
    subtitle: "Pago Garantizado",
    description:
      "Los pedidos prepagados garantizan los ingresos al restaurante y eliminan las pérdidas debidas a mesas vacías por reservas incumplidas.",
  },
  {
    metric: "-50%",
    label: "Estrés en cocina",
    subtitle: "Operación Optimizada",
    description:
      "La cocina recibe los pedidos con antelación, permitiendo una mejor gestión de las horas punta.",
  },
  {
    metric: "+25%",
    label: "Rotación",
    subtitle: "Mayor Rotación de Mesas",
    description:
      "Al eliminar las esperas para pedir y preparar los platos, tus clientes disfrutan su comida al llegar, y tú aumentas al máximo la rotación y el rendimiento de cada mesa.",
  },
  {
    metric: "30min",
    label: "Ahorrados",
    subtitle: "Cero Tiempos Muertos",
    description:
      "Con Plateo, tus clientes aprovechan al máximo su pausa para comer y disfrutar de tu restaurante sin preocuparse por el reloj.",
  },
];

const steps = [
  {
    number: "01",
    title: "El cliente reserva y pide por adelantado",
    description:
      "El cliente elige hora, platos y paga el pedido por adelantado.",
    image: "/ManagerLanding/ComoFunciona/Reservation.jpeg",
  },
  {
    number: "02",
    title: "La cocina se prepara con antelación",
    description:
      "Tu equipo puede adelantar la preparación de los pedidos, evitando congestiones durante las horas de máxima afluencia.",
    image: "/ManagerLanding/ComoFunciona/Cook.jpeg",
  },
  {
    number: "03",
    title: "Servicio inmediato al llegar",
    description:
      "Los clientes se sientan y reciben sus platos al llegar, acelerando la rotación de las mesas.",
    image: "/ManagerLanding/ComoFunciona/busy.jpeg",
  },
];

const advantages = [
  {
    title: "Servicio Instantáneo",
    description:
      "Atiendes a tus clientes al llegar gracias a los pedidos anticipados y a una cocina preparada de antemano, para un servicio rápido y fluido.",
    tags: ["Sin esperas", "Clientes felices"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Menos Estrés para tu Equipo",
    description:
      "Tu equipo afronta las horas punta con menos estrés y un flujo de trabajo más ordenado.",
    tags: ["Menos estrés"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Mayor Rotación de Mesas",
    description:
      "Plateo te permite atender a más clientes en el mismo tiempo, aumentando la rotación de las mesas.",
    tags: ["+25% rotación", "Más ingresos"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    title: "Ingresos garantizados",
    description:
      "Las reservas prepagadas reducen a cero el riesgo de no-shows y garantizan ingresos seguros.",
    tags: ["0% no-shows", "Cero pérdidas"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const restaurantTypes = [
  "Cadena",
  "Alta Cocina",
  "Restaurante Casual",
  "Servicio Rápido",
  "Cafetería / Bistró",
  "Otro",
];

const locationCounts = [
  "1 Local",
  "2-5 Locales",
  "6-10 Locales",
  "Más de 11 Locales",
];

const challenges = [
  "Reservas Incumplidas",
  "Tiempos de Espera Largos",
  "Cocina Desbordada",
  "Rotación de Mesa",
  "Todos los Anteriores",
];

export default function ManagerLanding() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    tipoRestaurante: "",
    numLocales: "",
    mayorDesafio: "",
    detalles: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/ManagerLanding" className="text-xl font-bold">
            <span className="text-[hsl(var(--primary))]">Pla</span>
            <span className="text-[#b32e34]">teo</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#desafios" className="hover:text-slate-900 transition">Desafíos</a>
            <a href="#solucion" className="hover:text-slate-900 transition">Solución</a>
            <a href="#beneficios" className="hover:text-slate-900 transition">Beneficios</a>
            <a href="#contacto" className="hover:text-slate-900 transition">Contacto</a>
          </div>
          <a
            href="#contacto"
            className="bg-[#165132] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#1a6140] transition"
          >
            Empezar
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="/ManagerLanding/hero/hero-photo-to-load.png"
          alt="Restaurante con servicio fluido"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src="/ManagerLanding/hero/hero-photo-mobile.webp"
          alt="Restaurante con servicio fluido"
          fill
          className="object-cover block md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-start text-left px-6 md:px-20 lg:px-28 py-20 w-full">
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-loose tracking-wide text-white mb-6 max-w-3xl">
            Convierte las horas punta en un{" "}
            <span className="text-[hsl(var(--primary))]">servicio fluido y mas rentable</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8">
            Con Plateo, tus clientes reservan la mesa, piden y pagan por adelantado; tú optimizas el servicio, aumentas la rotación de mesas y elevas los ingresos de forma sencilla y segura.
          </p>
          <a
            href="#contacto"
            className="bg-[hsl(var(--primary))] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 text-base mb-10"
          >
            Reserva una demo gratuito
          </a>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Eficiencia operativa", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
              { label: "Cero No-Shows", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
              { label: "Mas ingresos", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg> },
            ].map((badge) => (
              <span
                key={badge.label}
                className="bg-white/10 backdrop-blur border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2"
              >
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Restaurants Choose Plateo ── */}
      <section id="desafios" className="py-16 md:py-24 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-3">
            Por qué los restaurantes eligen Plateo
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg mb-12 md:mb-16">
            Transforma tu operación diaria con beneficios desde el primer día
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metricCards.map((card, i) => {
              const icons = [
                <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
                <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
                <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>,
                <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
              ];
              return (
                <div
                  key={card.metric}
                  className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-slate-200 hover:border-[hsl(var(--primary))] hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center">
                      {icons[i]}
                    </div>
                    <div className="text-right">
                      <div className="text-[hsl(var(--primary))] font-poppins text-4xl md:text-5xl font-black leading-none">
                        {card.metric}
                      </div>
                      <div className="text-slate-500 text-sm font-medium">{card.label}</div>
                    </div>
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl md:text-2xl mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">{card.subtitle}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cómo Funciona ── */}
      <section id="solucion" className="pt-16 md:pt-24 pb-32 md:pb-44 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-3">
            Cómo Funciona
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg mb-12 md:mb-16">
            Un proceso sencillo que transforma la operativa de tu restaurante
          </p>
          <div className="relative flex flex-col gap-20 md:gap-28">
            {/* Vertical connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[hsl(var(--primary))]/30 -translate-x-1/2" />
            {steps.map((step, i) => {
              const stepIcons = [
                <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
                <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
                <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
              ];
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-0 md:gap-0`}
                >
                  {/* Text card */}
                  <div className="flex-1 z-10">
                    <div className="group bg-white rounded-2xl border border-slate-200 p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-poppins text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[hsl(var(--primary))] transition-colors duration-300 leading-tight flex-1">
                          {step.title}
                        </h3>
                        <div className="ml-3 flex-shrink-0">{stepIcons[i]}</div>
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step number circle */}
                  <div className="relative z-20 -my-4 md:my-0 md:mx-6 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center shadow-lg">
                      <span className="text-white font-poppins font-bold text-lg">{step.number}</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 z-10">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Competitive Advantages ── */}
      <section id="beneficios" className="relative bg-[#1a1a2e] pt-16 md:pt-24 pb-16 md:pb-24">
        {/* Wavy top transition */}
        <div className="absolute left-0 right-0 bottom-full">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block h-[100px] md:h-[150px]">
            <path
              d="M0,75 C360,110 720,15 1080,60 C1260,80 1380,40 1440,55 L1440,150 L0,150 Z"
              fill="#1a1a2e"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <span className="border border-[hsl(var(--primary))] text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full">
              Ventajas Competitivas
            </span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-3">
            Marca la diferencia con<br />
            <span className="text-[hsl(var(--primary))]">Plateo</span>
          </h2>
          <p className="text-center text-white/60 text-base md:text-lg mb-12 md:mb-16">
            Optimiza tu servicio con pedidos anticipados y preparación previsible
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="group bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white hover:border-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mb-5 text-white">{adv.icon}</div>
                <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-[hsl(var(--primary))] mb-3 transition-colors duration-300">
                  {adv.title}
                </h3>
                <p className="text-white/60 group-hover:text-slate-600 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  {adv.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {adv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-[hsl(var(--primary))]/40 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] group-hover:border-transparent group-hover:bg-[hsl(var(--primary))]/15 transition-all duration-300"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wavy bottom transition */}
        <div className="absolute left-0 right-0 top-full -mt-px">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block h-[100px] md:h-[150px]">
            <path
              d="M0,0 L1440,0 L1440,75 C1080,110 720,15 360,60 C180,80 60,40 0,55 Z"
              fill="#1a1a2e"
            />
          </svg>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contacto" className="pt-32 md:pt-44 pb-16 md:pb-24 bg-[hsl(var(--primary))]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Optimiza tu servicio. ¡Contáctanos!
          </h2>
          <p className="text-white/70 text-center text-base md:text-lg max-w-2xl mx-auto mb-12 md:mb-16">
            Únete a los restaurantes que ya utilizan Plateo para mejorar la eficiencia, reducir el estrés y ofrecer una experiencia más rápida y consistente.
          </p>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Contact info */}
            <div className="md:w-1/3 text-white">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                  <span className="font-semibold">Email</span>
                </div>
                <a href="mailto:info@plateo.es" className="text-white/80 hover:text-white transition">
                  info@plateo.es
                </a>
              </div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="font-semibold">Oficina</span>
                </div>
                <span className="text-white/80">Madrid, España</span>
              </div>
              <p className="text-white/60 text-sm">
                Configuración y formación gratuitas en toda España
              </p>
            </div>

            {/* Contact form */}
            <div className="md:w-2/3">
              {submitted ? (
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center text-white">
                  <p className="text-2xl font-bold mb-2">¡Gracias!</p>
                  <p className="text-white/80">Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Nombre *"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                    />
                    <input
                      type="text"
                      name="apellidos"
                      required
                      placeholder="Apellidos *"
                      value={formData.apellidos}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo electrónico *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <select
                      name="tipoRestaurante"
                      required
                      value={formData.tipoRestaurante}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition appearance-none"
                    >
                      <option value="" disabled className="text-slate-900">Tipo de Restaurante *</option>
                      {restaurantTypes.map((t) => (
                        <option key={t} value={t} className="text-slate-900">{t}</option>
                      ))}
                    </select>
                    <select
                      name="numLocales"
                      required
                      value={formData.numLocales}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition appearance-none"
                    >
                      <option value="" disabled className="text-slate-900">Número de Locales *</option>
                      {locationCounts.map((l) => (
                        <option key={l} value={l} className="text-slate-900">{l}</option>
                      ))}
                    </select>
                    <select
                      name="mayorDesafio"
                      required
                      value={formData.mayorDesafio}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition appearance-none"
                    >
                      <option value="" disabled className="text-slate-900">Mayor Desafío *</option>
                      {challenges.map((c) => (
                        <option key={c} value={c} className="text-slate-900">{c}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    name="detalles"
                    placeholder="Detalles Adicionales"
                    value={formData.detalles}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[hsl(var(--primary))] text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 text-lg"
                  >
                    Reserva una demo
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1a1a2e] text-slate-400 pt-10 md:pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-start">
            <div>
              <span className="text-2xl font-bold">
                <span className="text-[hsl(var(--primary))]">Pla</span>
                <span className="text-[#b32e34]">teo</span>
              </span>
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
