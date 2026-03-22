"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselTexts = [
  "la cola del restaurante",
  "la ensalada del súper",
  "las esperas para comer",
  "los líos con la cuenta",
];

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
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,60 1440,40 L1440,80 L0,80 Z"
              fill="hsl(30,20%,97%)"
            />
          </svg>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">
            ¿Qué hay en Plateo?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Prueba la app todo-en-uno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-8 border border-foreground/10 hover:border-foreground/20 hover:-translate-y-px hover:shadow-md hover:brightness-105 transition-all duration-300">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/cards/card_menu.png"
                  alt="Elige tu menú"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Elige tu menú</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reserva tu hora y deja tu pedido listo. Cuando llegas, solo toca comer.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-8 border border-foreground/10 hover:border-foreground/20 hover:-translate-y-px hover:shadow-md hover:brightness-105 transition-all duration-300">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/cards/card_share.png"
                  alt="Comparte el plan"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Comparte el plan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Organiza comidas sin caos: cada uno elige lo suyo y el pedido queda unificado.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-8 border border-foreground/10 hover:border-foreground/20 hover:-translate-y-px hover:shadow-md hover:brightness-105 transition-all duration-300">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/cards/card_pay.webp"
                  alt="Llega a mesa puesta"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Llega a mesa puesta</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Menos espera, más tiempo: ideal para la pausa de comida y planes con prisa.
              </p>
            </div>
          </div>
        </div>
      </section>

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
