import type { Metadata } from "next";
import { Poppins, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Plateo – Di adiós a la cola del restaurante",
  description:
    "Reserva en minutos. Llega a mesa puesta y disfruta. Pre-pide tu menú, comparte el plan y olvídate de las esperas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES">
      <body
        className={`${poppins.variable} ${bodoniModa.variable} font-poppins min-h-screen antialiased text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
