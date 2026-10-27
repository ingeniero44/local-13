"use client"

import { ArrowDown, Banknote, Boxes, Home, Package, PackageCheck, Sparkles, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-white/20 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
              Vacantes disponibles
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Empaca desde casa con <span className="text-primary">SurtidoraMX</span>
            </h1>

            <p className="mb-8 text-lg font-medium leading-relaxed text-foreground/85 md:text-xl text-balance">
              Organiza y empaca productos como cosméticos, juguetes y accesorios. Nosotros te los llevamos y los recogemos cuando estén listos.
            </p>

            <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
              <div className="rounded-2xl border border-white/70 bg-white/90 px-5 py-4 text-center shadow-lg shadow-blue-950/10 sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pago semanal</p>
                <p className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-accent md:text-3xl">$4,000 pesos</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">Pagos puntuales cada semana</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <p className="text-sm font-bold text-foreground">¿Te interesa? Postúlate aquí</p>
                <ArrowDown aria-hidden="true" className="size-5 motion-safe:animate-bounce text-primary" />
                <Button asChild size="lg" className="bg-accent px-8 font-bold text-accent-foreground shadow-lg shadow-orange-950/15 hover:bg-accent/90">
                  <Link href="#postularme">Postularme</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Feature icon={Home} title="Desde tu casa" detail="Sin traslados" />
              <Feature icon={Truck} title="Entrega a domicilio" detail="Llevamos y recogemos" />
              <Feature icon={Banknote} title="Pago semanal" detail="$4,000 pesos" />
            </div>
          </div>

          <div role="img" className="relative mx-auto w-full max-w-lg" aria-label="Ilustración de paquetes y productos listos para empacar">
            <div aria-hidden="true" className="absolute inset-8 rounded-full bg-sky-300/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 p-5 shadow-2xl shadow-blue-950/15 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-100 text-primary"><PackageCheck aria-hidden="true" className="size-6" /></span>
                  <div>
                    <p className="font-extrabold text-foreground">Tu próximo pedido</p>
                    <p className="text-sm font-medium text-muted-foreground">Listo para preparar</p>
                  </div>
                </div>
                <Sparkles aria-hidden="true" className="size-5 text-amber-500" />
              </div>

              <div className="relative flex min-h-72 items-center justify-center sm:min-h-80">
                <div aria-hidden="true" className="absolute left-2 top-10 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-lg floating-package">
                  <Package aria-hidden="true" className="size-8 text-amber-600" />
                </div>
                <div aria-hidden="true" className="absolute right-2 top-12 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-lg floating-package-delayed">
                  <Boxes aria-hidden="true" className="size-8 text-emerald-600" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div aria-hidden="true" className="mb-3 flex size-36 items-center justify-center rounded-[2rem] bg-gradient-to-br from-amber-300 to-orange-400 shadow-xl shadow-orange-900/20 sm:size-44">
                    <Package aria-hidden="true" className="size-20 text-white drop-shadow-md sm:size-24" strokeWidth={1.5} />
                  </div>
                  <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-extrabold text-primary shadow-md">Empaca a tu ritmo</span>
                </div>
                <div aria-hidden="true" className="absolute bottom-8 left-10 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-lg floating-package-delayed">
                  <PackageCheck aria-hidden="true" className="size-8 text-primary" />
                </div>
                <div aria-hidden="true" className="absolute bottom-7 right-8 rounded-2xl border border-white/80 bg-white/90 px-3 py-2 text-xs font-extrabold text-foreground shadow-lg floating-package">PRODUCTOS</div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {["Cosméticos", "Accesorios", "Juguetes"].map((item) => (
                  <span key={item} className="rounded-full bg-blue-100/90 px-3 py-1.5 text-xs font-bold text-primary">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, detail }: { icon: typeof Home; title: string; detail: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/90 p-3 shadow-sm">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-primary"><Icon aria-hidden="true" className="size-5" /></span>
      <span className="text-left">
        <span className="block text-sm font-extrabold text-foreground">{title}</span>
        <span className="block text-xs font-semibold text-muted-foreground">{detail}</span>
      </span>
    </div>
  )
}
