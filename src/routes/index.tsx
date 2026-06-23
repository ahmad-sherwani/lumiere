import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Package, Mic, Camera, Shirt, Coffee, Star, TrendingUp, Image as ImageIcon,
  Play, Mail, Instagram, MessageCircle, ArrowRight, Heart, Clock, Eye, Zap, Target
} from "lucide-react";

import heroAsset from "@/assets/user/Snapchat-271068792.jpg";
import fashion1Asset from "@/assets/user/Snapchat-926854658.jpg";
import fashion2Asset from "@/assets/user/Snapchat-666437094.jpg";
import food1Asset from "@/assets/user/20260418_213558.jpg";
import food2Asset from "@/assets/user/20260407_233824.jpg";
import beauty1Asset from "@/assets/user/Snapchat-670641198.jpg";
import beauty2Asset from "@/assets/user/20251231_185953.jpg";
import lifestyle1Asset from "@/assets/user/IMG-20260417-WA0160.jpg";
import lifestyle2Asset from "@/assets/user/IMG-20251225-WA0171.jpg";

import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

async function handleSubmit(name: string, email: string, message: string) {
  await addDoc(collection(db, "contacts"), {
    name, email, message, createdAt: new Date(),
  });
}

const hero = heroAsset;
const fashion1 = fashion1Asset;
const fashion2 = fashion2Asset;
const food1 = food1Asset;
const food2 = food2Asset;
const beauty1 = beauty1Asset;
const beauty2 = beauty2Asset;
const lifestyle1 = lifestyle1Asset;
const lifestyle2 = lifestyle2Asset;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Studio — Faceless UGC Creator" },
      { name: "description", content: "Aesthetic, scroll-stopping UGC for fashion, food, beauty, lifestyle and product brands." },
      { property: "og:title", content: "Lumière Studio — Faceless UGC Creator" },
      { property: "og:description", content: "Scroll-stopping faceless UGC that converts." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Package, title: "Product Demos", desc: "Clear, aesthetic walk-throughs that show the product in action." },
  { icon: Sparkles, title: "Unboxing Videos", desc: "Cinematic first-impressions that feel personal and premium." },
  { icon: Mic, title: "Voiceover Content", desc: "Warm, scripted voiceovers paired with visual storytelling." },
  { icon: Camera, title: "Aesthetic Showcases", desc: "Editorial product photography and short-form b-roll." },
  { icon: Shirt, title: "Fashion Try-Ons", desc: "Faceless outfit reels, flat lays and styling transitions." },
  { icon: Coffee, title: "Food & Café Content", desc: "Mouth-watering close-ups and lifestyle food stories." },
  { icon: Star, title: "Testimonial Style", desc: "Authentic-feeling reviews scripted around your product." },
  { icon: TrendingUp, title: "Trend-Based Reels", desc: "On-trend audio, transitions and formats for IG & TikTok." },
  { icon: ImageIcon, title: "Photography", desc: "Soft-lit, on-brand stills you can reuse across channels." },
];

const portfolio = [
  { img: fashion1, tag: "Fashion", title: "Mirror OOTD" },
  { img: food1, tag: "Food", title: "Café Table Flatlay" },
  { img: beauty1, tag: "Lifestyle", title: "Bougainvillea Nights" },
  { img: lifestyle1, tag: "Lifestyle", title: "Golden Staircase" },
  { img: fashion2, tag: "Fashion", title: "Winter Layers" },
  { img: food2, tag: "Food", title: "Café Hola Pickup" },
  { img: beauty2, tag: "Interior", title: "Palace Dining" },
  { img: lifestyle2, tag: "Lifestyle", title: "Rooftop Evenings" },
];

const stats = [
  { icon: Heart, label: "Authentic Content", value: "100%" },
  { icon: Zap, label: "Trend-Aware", value: "Daily" },
  { icon: Eye, label: "Aesthetic Eye", value: "Soft" },
  { icon: Clock, label: "Fast Replies", value: "<24h" },
];

const packages = [
  {
    name: "Single Reel",
    price: "Let's chat",
    desc: "One short-form UGC video for your product — perfect to test the vibe.",
    features: ["1 × 15–30s UGC video", "1 styled still photo", "1 round of revisions", "Raw + edited files"],
    featured: false,
  },
  {
    name: "Mini Bundle",
    price: "Let's chat",
    desc: "A small set of content to start building your feed.",
    features: ["2 × 15–30s UGC videos", "3 styled still photos", "Trending audio styling", "1 round of revisions"],
    featured: true,
  },
];


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  useReveal();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loader */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <div className="text-center">
          <div className="font-display text-4xl tracking-wide text-primary">Lumière</div>
          <div className="mt-3 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse" />
        </div>
      </div>

      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Why />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-4">
      <nav className="glass rounded-full max-w-5xl mx-auto px-5 sm:px-7 py-3 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide text-primary">Lumière</a>
        <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#portfolio" className="hover:text-foreground transition">Portfolio</a>
          <a href="#packages" className="hover:text-foreground transition">Packages</a>
        </div>
        <a
          href="#contact"
          className="text-xs sm:text-sm rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition"
        >
          Work with me
        </a>
      </nav>
    </header>
  );
}

function FloatingBlob({ className }: { className?: string }) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 px-5 sm:px-8 overflow-hidden">
      {/* gradient atmosphere */}
      <FloatingBlob className="w-[420px] h-[420px] bg-blush/50 -top-20 -left-20 animate-float-slow" />
      <FloatingBlob className="w-[360px] h-[360px] bg-nude/40 top-1/3 -right-20 animate-float" />
      <FloatingBlob className="w-[280px] h-[280px] bg-accent/40 bottom-0 left-1/3 animate-float-slow" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Faceless UGC · 2026
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-primary">
            Creating <em className="italic text-accent-foreground/80">scroll-stopping</em> UGC that converts.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md">
            Fashion · Food · Beauty · Lifestyle · Product Content — soft, editorial, and made to feel like the algorithm wrote it for your brand.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition shadow-soft"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-primary hover:bg-card transition"
            >
              Work With Me
            </a>
          </div>
        </div>

        {/* 3D-feeling floating image stack */}
        <div className="relative h-[460px] sm:h-[560px] reveal">
          <div className="absolute inset-0 bg-gradient-blush rounded-[3rem]" />
          <img
            src={hero}
            alt="Aesthetic perfume bottle on blush silk — Lumière Studio UGC sample"
            width={1080}
            height={1600}
            className="absolute right-0 top-6 w-[70%] h-[88%] object-cover rounded-[2rem] shadow-soft animate-float"
          />
          <img
            src={beauty2}
            alt="Pink lipstick and compact mirror UGC styling"
            width={800}
            height={1000}
            loading="lazy"
            className="absolute left-0 bottom-0 w-[48%] h-[42%] object-cover rounded-[1.5rem] shadow-soft animate-float-slow"
          />
          <div className="absolute left-2 top-8 glass rounded-2xl px-4 py-3 text-xs animate-float-slow">
            <div className="font-display text-base text-primary">Aesthetic ✦</div>
            <div className="text-muted-foreground">Editorial UGC</div>
          </div>
          <div className="absolute right-4 bottom-6 glass rounded-2xl px-4 py-3 text-xs animate-float">
            <div className="font-display text-base text-primary">Conversion ↑</div>
            <div className="text-muted-foreground">Hooks that work</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto text-center reveal">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</div>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">
          A faceless creator with an eye for the <em className="italic">soft &amp; cinematic</em>.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          I'm an independent UGC creator building authentic, relatable content that helps small brands grow engagement,
          trust and conversions. Faceless by choice — so the product, the styling and the story stay center frame.
          Think aesthetic showcases, unboxings, soft testimonials, lifestyle moments and trend-led reels.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-3 text-xs sm:text-sm">
          {["Authentic", "Editorial", "Trend-aware"].map((w) => (
            <div key={w} className="glass rounded-2xl py-4">{w}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">What I create</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A flexible menu of UGC formats — mix and match to fit your launch, campaign or content calendar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal glass rounded-3xl p-7 hover:translate-y-[-4px] transition duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/40 flex items-center justify-center text-primary">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const tags = ["All", "Fashion", "Food", "Beauty", "Lifestyle"];
  const items = portfolio.filter((p) => filter === "All" || p.tag === filter);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">Selected work</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A starter portfolio of styled mock shoots — the aesthetic and quality you can expect when we collaborate.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 reveal">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm transition ${filter === t
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {items.map((p, i) => (
            <figure
              key={p.title + i}
              className="group relative reveal overflow-hidden rounded-[1.75rem] aspect-[4/5] shadow-soft"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={p.img}
                alt={`${p.title} — ${p.tag} UGC content sample`}
                width={800}
                height={1000}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-transparent opacity-70 group-hover:opacity-90 transition" />
              <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                {p.tag}
              </div>
              <button
                aria-label={`Play ${p.title}`}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                <span className="w-14 h-14 rounded-full glass flex items-center justify-center text-primary">
                  <Play className="w-5 h-5 ml-0.5" />
                </span>
              </button>
              <figcaption className="absolute bottom-3 left-3 right-3 text-primary-foreground">
                <div className="font-display text-lg drop-shadow">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why work with me</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">Made to feel effortless.</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal glass rounded-3xl p-6 text-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <s.icon className="w-5 h-5 mx-auto text-primary" />
              <div className="mt-3 font-display text-3xl text-primary">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Packages() {
  return (
    <section id="packages" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Let's collab</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">Open for first collabs</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            I'm just starting out and building my portfolio — happy to create content in exchange for products or a small budget. DM me on Instagram to chat.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`reveal rounded-3xl p-8 flex flex-col ${p.featured
                  ? "bg-primary text-primary-foreground shadow-soft scale-[1.02]"
                  : "glass"
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`text-xs uppercase tracking-[0.25em] ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {p.name}
              </div>
              <div className="mt-3 font-display text-3xl">{p.price}</div>
              <p className={`mt-2 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${p.featured ? "bg-accent" : "bg-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full text-center py-3 text-sm transition ${p.featured
                    ? "bg-accent text-primary hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
              >
                Book {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const EMAILJS_SERVICE_ID = "service_uvhx0ns";
  const EMAILJS_TEMPLATE_ID = "template_7u9xq7b";
  const EMAILJS_PUBLIC_KEY = "Oy5Ur8TPxVfcWlhe1";

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setSent(false);

    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString() || "";
    const email = data.get("email")?.toString() || "";
    const brand = data.get("brand")?.toString() || "";
    const message = data.get("message")?.toString() || "";

    try {
      // 1. Store in Firestore database
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        brand,
        message,
        createdAt: new Date(),
      });

      // 2. Send email via EmailJS (only if configured)
      if (
        EMAILJS_SERVICE_ID &&
        EMAILJS_TEMPLATE_ID &&
        EMAILJS_PUBLIC_KEY
      ) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            brand: brand,
            message: message,
          },
          EMAILJS_PUBLIC_KEY
        );
      }

      setSent(true);
      formRef.current?.reset();
    } catch (error) {
      console.error("Error storing contact / sending email:", error);
      alert(`Something went wrong: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">Let's create something soft &amp; selling.</h2>
          <p className="mt-5 text-muted-foreground">
            Tell me about your brand and the kind of content you have in mind. I usually reply within 24 hours.
          </p>
          <div className="mt-8 space-y-3">
            <a href="mailto:1studio.lumieree@gmail.com" className="glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-card transition">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">1studio.lumieree@gmail.com</span>
            </a>
            <a href="https://instagram.com/1studio.lumiere" target="_blank" rel="noreferrer" className="glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-card transition">
              <Instagram className="w-4 h-4 text-primary" />
              <span className="text-sm">@1studio.lumiere</span>
            </a>
            <a href="https://wa.me/?text=Hi%20Lumi%C3%A8re%2C%20I%27d%20like%20to%20collaborate" target="_blank" rel="noreferrer" className="glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-card transition">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="reveal glass rounded-3xl p-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input name="name" placeholder="Your name" required disabled={loading} />
            <Input name="brand" placeholder="Brand" disabled={loading} />
          </div>
          <Input name="email" type="email" placeholder="Email" required disabled={loading} />
          <textarea
            name="message"
            placeholder="Tell me about your product and goals…"
            rows={5}
            required
            disabled={loading}
            className="w-full rounded-2xl bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary text-primary-foreground py-3 text-sm hover:bg-primary/90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : sent ? "Collaboration Request Sent!" : "Send Collaboration Request"}
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            {sent
              ? "Thank you! Your request has been securely stored in our database."
              : "Your information will be saved directly to our database."}
          </p>
        </form>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-full bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
    />
  );
}

function Footer() {
  return (
    <footer className="px-5 sm:px-8 pb-10 pt-4">
      <div className="max-w-6xl mx-auto glass rounded-3xl px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="font-display text-xl text-primary">Lumière Studio</div>
        <div className="text-muted-foreground text-xs">© {new Date().getFullYear()} · Faceless UGC, made with care.</div>
        <div className="flex gap-3 text-muted-foreground">
          <a href="mailto:1studio.lumieree@gmail.com" aria-label="Email"><Mail className="w-4 h-4" /></a>
          <a href="https://instagram.com/1studio.lumiere" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
