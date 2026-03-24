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

        <div className="relative z-10 flex flex-col items-center text-center px-4 py-20 max-w-4xl mx-auto">
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Convierte las horas punta en un servicio fluido y mas rentable
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8">
            Con Plateo, tus clientes reservan la mesa, piden y pagan por adelantado; tú optimizas el servicio, aumentas la rotación de mesas y elevas los ingresos de forma sencilla y segura.
          </p>
          <a
            href="#contacto"
            className="bg-[hsl(var(--primary))] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 text-lg mb-10"
          >
            Reserva una demo gratuito
          </a>

          <div className="flex flex-wrap justify-center gap-3">
            {["Eficiencia operativa", "Cero No-Shows", "Mas ingresos"].map((badge) => (
              <span
                key={badge}
                className="bg-white/15 backdrop-blur border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Restaurants Choose Plateo ── */}
      <section id="desafios" className="py-16 md:py-24 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12 md:mb-16">
            Por qué los restaurantes eligen Plateo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricCards.map((card) => (
              <div
                key={card.metric}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[hsl(var(--primary))] font-poppins text-4xl md:text-5xl font-black mb-1">
                  {card.metric}
                </div>
                <div className="text-slate-900 font-bold text-lg mb-1">{card.label}</div>
                <div className="text-[hsl(var(--primary))] font-semibold text-sm mb-3">
                  {card.subtitle}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo Funciona ── */}
      <section id="solucion" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12 md:mb-16">
            Cómo Funciona
          </h2>
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}
              >
                <div className="flex-1">
                  <div className="text-[hsl(var(--primary))] font-poppins text-6xl md:text-7xl font-black mb-4 opacity-30">
                    {step.number}
                  </div>
                  <h3 className="font-poppins text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1 w-full">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitive Advantages ── */}
      <section id="beneficios" className="py-16 md:py-24 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12 md:mb-16">
            Marca la diferencia con Plateo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[hsl(var(--primary))] mb-4">{adv.icon}</div>
                <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-3">
                  {adv.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contacto" className="py-16 md:py-24 bg-[#165132]">
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
