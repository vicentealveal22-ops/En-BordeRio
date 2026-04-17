import { Phone, MapPin, Clock, Car, Users, Utensils, Timer, Trees, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-xl font-semibold text-foreground">En Borde Río</span>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Nosotros
          </a>
          <a href="#resenas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Reseñas
          </a>
          <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="tel:+56942659921">
            <Phone className="h-4 w-4 mr-2" />
            Llámanos
          </a>
        </Button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-restaurant.jpg"
          alt="Restaurante En Borde Río - Terraza junto al río"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
          Un alto que vale la pena: buena comida, atención rápida y un entorno tranquilo junto al río
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
          En Borde Río combina platos abundantes, servicio ágil y un ambiente natural ideal para desconectarte del viaje o disfrutar en familia. Aquí comes bien, sin largas esperas y en un lugar que invita a quedarse.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            <a href="tel:+56942659921">
              <Phone className="h-5 w-5 mr-2" />
              Llámanos ahora
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base px-8">
            <a href="#contacto">
              <MapPin className="h-5 w-5 mr-2" />
              Cómo llegar
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: Utensils,
    title: "Platos abundantes que realmente satisfacen",
    description: "Cada preparación está pensada para que te vayas contento: porciones generosas, acompañamientos incluidos y opciones que se adaptan a distintos gustos, incluso alternativas veganas."
  },
  {
    icon: Timer,
    title: "Atención rápida, sin perder calidad",
    description: "Sabemos que el tiempo importa. Por eso, el servicio es ágil y eficiente, con tiempos de espera bajos incluso en días concurridos."
  },
  {
    icon: Trees,
    title: "Entorno natural y cómodo para todos",
    description: "Áreas verdes, espacio para niños, ambiente tranquilo y estacionamiento disponible. Un lugar pensado para descansar, conversar y disfrutar sin ruido ni estrés."
  }
]

function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Nuestros beneficios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            ¿Por qué elegir En Borde Río?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="nosotros" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Sobre nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Un lugar para comer bien y descansar
            </h2>
          </div>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed text-center text-pretty">
              En Borde Río es un restaurante pensado para quienes valoran comer bien en un ambiente relajado. Ubicado estratégicamente junto a la carretera, ofrecemos una experiencia simple pero cuidada: buena comida, atención cercana y un espacio agradable para compartir.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium">Estacionamiento</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium">Espacio para niños</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trees className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium">Áreas verdes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    quote: "Lindo lugar y tranquilo… rica la comida y rápida la atención. Teníamos hambre y quedamos saciados… la colación es abundante y viene con ensalada y postre.",
    author: "Cliente"
  },
  {
    quote: "Hermoso local junto al río. Cuenta con opciones veganas, los platos son abundantes y la atención muy rápida… lo recomiendo :)",
    author: "Francesca Morecchio"
  },
  {
    quote: "Agradable lugar… pedimos pastel de choclo y estaba bastante bueno… servicio excelente y muy buen ambiente.",
    author: "Francisco Mancilla"
  }
]

function Reviews() {
  return (
    <section id="resenas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Reseñas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-8 pb-8 px-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {`"${review.quote}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">— {review.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          ¿Vas de paso o buscas un buen lugar para comer tranquilo?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Ven a visitarnos o llámanos y asegura tu mesa hoy mismo.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8">
          <a href="tel:+56942659921">
            <Phone className="h-5 w-5 mr-2" />
            +56 9 4265 9921
          </a>
        </Button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contacto" className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">En Borde Río</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Restaurante junto al río con platos abundantes, atención rápida y ambiente natural.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
            <div className="space-y-3">
              <a href="https://maps.google.com/?q=Empalme+A+Ruta+5+Km+495.5+Aguas+y+Arenas+Los+Angeles+Bio+Bio" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-background/70 hover:text-background transition-colors">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Empalme A - Ruta 5, Km 495.5, Aguas y Arenas, Los Ángeles, Bío Bío</span>
              </a>
              <a href="tel:+56942659921" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+56 9 4265 9921</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Horario</h4>
            <div className="flex items-start gap-3 text-background/70 mb-4">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm">Lunes a domingo</p>
                <p className="text-sm font-medium text-background">12:30 – 18:00 hrs</p>
              </div>
            </div>
            <div className="text-sm text-background/60 space-y-1">
              <p>✓ Estacionamiento disponible</p>
              <p>✓ Espacio apto para niños</p>
              <p>✓ Ambiente tranquilo</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/50">© {new Date().getFullYear()} En Borde Río. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
