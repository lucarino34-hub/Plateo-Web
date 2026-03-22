"use client";

import { useState } from "react";
import Image from "next/image";

export default function UserLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[hsl(var(--background))]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-bodoni text-2xl font-bold tracking-tight text-[hsl(var(--primary))]">
            Plateo
          </span>
          <a
            href="#signup"
            className="text-sm font-medium text-[hsl(var(--primary))] hover:underline transition"
          >
            Únete a la Lista
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
              Di adiós a la cola<br />
              <span className="text-[hsl(var(--primary))]">del restaurante</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-md mx-auto md:mx-0">
              Reserva en minutos. Llega a mesa puesta y disfruta.
            </p>
            <a
              href="#signup"
              className="inline-block bg-[hsl(var(--primary))] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150"
            >
              Únete a la Lista
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Sin spam. Solo buenas noticias. 🎊
            </p>
          </div>

          {/* Hero image placeholder */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center">
              <span className="font-bodoni text-6xl text-[hsl(var(--primary))] opacity-30">
                Plateo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Todo lo que necesitas para comer sin esperas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-[hsl(var(--card))] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[hsl(var(--border))]">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Elige tu menú</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Pre-pide tu comida antes de llegar. Sin esperas, sin dudas. Todo listo cuando tú llegues.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[hsl(var(--card))] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[hsl(var(--border))]">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Comparte el plan</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Coordina con tus compañeros fácilmente. Todos eligen su menú y pagan por separado.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[hsl(var(--card))] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[hsl(var(--border))]">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Llega a mesa puesta</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Tu mesa te espera. Tu comida está lista. Aprovecha cada minuto de tu pausa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Únete a Plateo
          </h2>
          <p className="text-center text-slate-500 mb-12 max-w-lg mx-auto">
            Acceso anticipado para los primeros usuarios. Sé parte de la revolución de los almuerzos de empresa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                <svg className="w-20 h-20 text-[hsl(var(--primary))] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Ahorra tiempo</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Deja de esperar. Recupera minutos valiosos en tu jornada laboral cada día.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-rose-100 to-orange-100 flex items-center justify-center">
                <svg className="w-20 h-20 text-[hsl(var(--primary))] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Come en grupo sin complicaciones</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Organiza almuerzos de equipo sin estrés. Cada uno elige y paga lo suyo.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
                <svg className="w-20 h-20 text-[hsl(var(--primary))] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Pago simplificado</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Sin líos con la cuenta. Paga tu parte antes de llegar y disfruta sin preocupaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Email Signup CTA ── */}
      <section id="signup" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Consigue acceso anticipado
          </h2>
          <p className="text-slate-500 mb-2">
            Lanzamiento + invitación a la beta + ventajas de early adopters
          </p>
          <p className="text-sm text-slate-400 mb-8">Sin spam. Solo buenas noticias. 🎊</p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-8 py-6 font-medium">
              ¡Genial! Te avisaremos en cuanto lancemos 🚀
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 px-5 py-3 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition"
              />
              <button
                type="submit"
                className="bg-[hsl(var(--primary))] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 whitespace-nowrap"
              >
                Apuntarme
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="font-bodoni text-2xl font-bold text-white">Plateo</span>
              <p className="text-sm mt-1">La plataforma de reservas para restaurantes</p>
              <a
                href="mailto:info@plateo.es"
                className="text-sm text-[hsl(var(--primary))] hover:underline mt-1 block"
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
