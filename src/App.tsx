import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

import logoMark from "./assets/logo-mark.png";
import logoWordmark from "./assets/logo-wordmark.png";

import repair1 from "./assets/repairs/repair-1.jpeg";
import repair2 from "./assets/repairs/repair-2.jpeg";
import repair3 from "./assets/repairs/repair-3.jpeg";
import repair4 from "./assets/repairs/repair-4.jpeg";
import repair5 from "./assets/repairs/repair-5.jpeg";
import appleLogo from "./assets/brands/apple.png";
import googleLogo from "./assets/brands/google.png";
import huaweiLogo from "./assets/brands/huawei.png";
import oneplusLogo from "./assets/brands/oneplus.png";
import samsungLogo from "./assets/brands/samsung.png";
import xiaomiLogo from "./assets/brands/xiaomi.png";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const services = [
  {
    icon: MonitorSmartphone,
    title: "Réparation smartphone",
    text: "Écran cassé, batterie usée, problème de charge ou diagnostic : vous savez rapidement si votre appareil peut être pris en charge et quelle solution est possible.",
    bullets: ["Diagnostic clair", "Devis rapide", "Intervention garantie"],
    cta: "Demander un diagnostic",
    href: "#reparation-gsm",
  },
  {
    icon: Laptop,
    title: "Dépannage informatique",
    text: "Ordinateur lent, blocage logiciel, installation, nettoyage ou optimisation : vous retrouvez un appareil plus stable, plus fluide et plus simple à utiliser.",
    bullets: ["Pour particuliers et pros", "Prix clairs", "Réponse rapide"],
    cta: "Demander un devis",
    href: "#offres",
  },
  {
    icon: Sparkles,
    title: "Assistance & accompagnement",
    text: "Besoin d’une aide humaine et rassurante pour un appareil, un logiciel ou une démarche numérique ? Vous avancez avec une prise de contact simple et un accompagnement clair.",
    bullets: ["Aide à distance possible", "Sans jargon", "Contact direct"],
    cta: "Contacter sur WhatsApp",
    href: "https://wa.me/32499469864",
  },
];

const trustPoints = [
  {
    icon: MapPin,
    title: "Service local",
    text: "Une aide de proximité, plus simple et plus humaine pour particuliers, indépendants et petites entreprises.",
  },
  {
    icon: Clock3,
    title: "Réponse rapide",
    text: "Vous obtenez un retour rapidement pour savoir comment avancer sans attendre inutilement.",
  },
  {
    icon: ShieldCheck,
    title: "Prix clairs & garantie",
    text: "Vous comprenez plus facilement ce qui est proposé, avec un travail soigné et une garantie mise en avant.",
  },
  {
    icon: MessageCircle,
    title: "Prise de contact simple",
    text: "WhatsApp, téléphone ou email selon le moyen qui vous convient le mieux.",
  },
];

const steps = [
  "Vous expliquez votre besoin par WhatsApp, téléphone ou email.",
  "Nous analysons votre problème pour orienter rapidement la bonne solution.",
  "Vous recevez une réponse claire, avec un devis ou un diagnostic compréhensible.",
  "Nous réparons, dépannons ou vous accompagnons selon votre situation.",
];

const offers = [
  {
    title: "Entretien & optimisation",
    price: "À partir de 59€",
    text: "Pour retrouver un ordinateur plus fluide, mieux entretenu et plus agréable à utiliser.",
    items: ["Nettoyage interne", "Mises à jour", "Optimisation", "Contrôle matériel"],
  },
  {
    title: "Réparation / dépannage",
    price: "À partir de 49€",
    text: "Pour remplacer une pièce, résoudre un blocage ou remettre un appareil en état de fonctionnement.",
    items: ["Diagnostic", "Remplacement de pièces", "Dépannage", "Conseil clair"],
  },
  {
    title: "Accompagnement digital",
    price: "À partir de 49€",
    text: "Pour être guidé simplement dans l’utilisation de vos appareils et outils numériques.",
    items: ["Aide au quotidien", "Accompagnement humain", "Support à distance", "Conseils pratiques"],
  },
];

const repairCards = [
  {
    icon: MonitorSmartphone,
    title: "Écran cassé ou tactile défectueux",
    text: "Vous retrouvez un affichage net, un tactile réactif et un appareil agréable à utiliser au quotidien.",
  },
  {
    icon: BatteryCharging,
    title: "Batterie usée ou autonomie réduite",
    text: "Vous retrouvez plus d’autonomie et un appareil plus fiable, avec une prise en charge claire.",
  },
  {
    icon: Wrench,
    title: "Diagnostic & prise en charge claire",
    text: "Vous obtenez rapidement une réponse simple sur la faisabilité, le prix et la meilleure solution.",
  },
];

const iphonePrices = [
  ["iPhone 8 / Plus", "45 €", "25 €"],
  ["iPhone X", "55 €", "25 €"],
  ["iPhone XS / Max", "55 €", "30 €"],
  ["iPhone XR", "55 €", "30 €"],
  ["iPhone SE (2020)", "65 €", "30 €"],
  ["iPhone 11 / Pro / Max", "65 €", "30 €"],
  ["iPhone SE (2022)", "75 €", "30 €"],
  ["iPhone 12 / Plus / Pro / Max", "85 €", "30 €"],
  ["iPhone 13 / Mini / Pro / Max", "115 €", "30 €"],
  ["iPhone 14 / Plus / Pro / Max", "115 €", "40 €"],
  ["iPhone 15 / Plus / Pro / Max", "130 €", "50 €"],
  ["iPhone 16 / Plus / Pro / Max", "150 €", "70 €"],
];

const brands = [
  { name: "Apple", logo: appleLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Xiaomi", logo: xiaomiLogo },
  { name: "Huawei", logo: huaweiLogo },
  { name: "OnePlus", logo: oneplusLogo },
  { name: "Google", logo: googleLogo },
];

const testimonials = [
  { name: "V. A.", quote: "Rapide et très professionnel. Je recommande à 100% !" },
  {
    name: "V. P.",
    quote:
      "Il a su réparer deux smartphones et récupérer mes données sur un téléphone très abîmé. Travail au top, je recommande à 100 %.",
  },
  {
    name: "S. L.",
    quote: "Qualité du travail et du service impeccable. À recommander sans hésiter.",
  },
];

const faqs = [
  {
    q: "Comment demander un devis ?",
    a: "Vous pouvez demander un devis simplement par WhatsApp, téléphone ou email en expliquant votre besoin ou votre panne.",
  },
  {
    q: "Réparez-vous uniquement les iPhone ?",
    a: "Non. Vous pouvez aussi demander une prise en charge pour plusieurs smartphones Android, selon le modèle et la disponibilité des pièces.",
  },
  {
    q: "Intervenez-vous pour les indépendants et petites entreprises ?",
    a: "Oui. ZANK Solutions accompagne aussi les indépendants et petites entreprises pour le dépannage, l’optimisation et l’assistance technique.",
  },
  {
    q: "Peut-on demander de l’aide à distance ?",
    a: "Oui. Si le problème peut être résolu à distance, vous êtes guidé pas à pas pour recevoir une aide simple et rapide via AnyDesk.",
  },
  {
    q: "Les prix sont-ils communiqués à l’avance ?",
    a: "Oui. L’objectif est de proposer des prix clairs et une solution compréhensible avant intervention, selon le besoin identifié.",
  },
  {
    q: "Vos interventions sont-elles garanties ?",
    a: "Oui. Les interventions sont présentées comme garanties, avec un travail soigné et une prise en charge claire pour le client.",
  },
];

const repairGallery = [
  {
    src: repair2,
    title: "Samsung — finition propre",
    text: "Réparation mise en avant : rendu propre après remplacement du dos arrière.",
  },
  {
    src: repair1,
    title: "Samsung — remplacement de dos",
    text: "Exemple avant / après sur Samsung avec dos remplacé proprement.",
  },
  {
    src: repair3,
    title: "iPhone — écran remplacé",
    text: "Comparaison avant / après pour un écran fortement endommagé.",
  },
  {
    src: repair4,
    title: "iPhone — dos arrière remis en état",
    text: "Exemple de dos cassé remplacé avec finition propre.",
  },
  {
    src: repair5,
    title: "iPhone — batterie remplacée",
    text: "Intervention batterie avec appareil complet visible.",
  },
];

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

function getAnyDeskTarget() {
  if (typeof navigator === "undefined") {
    return {
      href: "https://download.anydesk.com/AnyDesk.exe",
      label: "Télécharger AnyDesk pour Windows",
    };
  }

  const ua = navigator.userAgent || navigator.vendor || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  const isChromeOS = /CrOS/i.test(ua);
  const isMac = /Macintosh|Mac OS X/i.test(ua) && !isIOS;
  const isWindows = /Windows/i.test(ua);

  if (isIOS) {
    return {
      href: "https://apps.apple.com/us/app/anydesk-remote-desktop/id1176131273",
      label: "Ouvrir AnyDesk dans l’App Store",
    };
  }

  if (isChromeOS || isAndroid) {
    return {
      href: "https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid",
      label: "Ouvrir AnyDesk dans Google Play",
    };
  }

  if (isMac) {
    return {
      href: "https://download.anydesk.com/anydesk.dmg",
      label: "Télécharger AnyDesk pour macOS",
    };
  }

  if (isWindows) {
    return {
      href: "https://download.anydesk.com/AnyDesk.exe",
      label: "Télécharger AnyDesk pour Windows",
    };
  }

  return {
    href: "https://download.anydesk.com/AnyDesk.exe",
    label: "Télécharger AnyDesk",
  };
}

function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-black/65">{text}</p> : null}
    </div>
  );
}

function RepairCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <>
      <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">Réalisations</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
              Quelques exemples de réparations réalisées.
            </h3>
          </div>
          <p className="hidden text-sm text-black/45 md:block">Glissez à gauche ou à droite pour parcourir.</p>
        </div>

        <div className="-mx-1 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-5 px-1">
            {repairGallery.map((item, idx) => (
              <article
                key={`${item.title}-${idx}`}
                className={`min-w-[76%] snap-center overflow-hidden rounded-[1.7rem] border border-black/8 bg-[#f5f5f7] sm:min-w-[46%] lg:min-w-[31%] ${
                  idx === 0 ? "ring-2 ring-black/10" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="block w-full text-left"
                  aria-label={`Ouvrir la photo : ${item.title}`}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#d7d7da]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-semibold text-black">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-black/62">{item.text}</p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/88 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Galerie de réparations">
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg"
            aria-label="Fermer la galerie"
          >
            <X size={20} />
          </button>

          <div className="mx-auto w-full max-w-5xl">
            <div className="overflow-hidden rounded-[1.8rem] bg-[#1d1d1f] p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#111]">
                <img
                  src={repairGallery[lightboxIndex].src}
                  alt={repairGallery[lightboxIndex].title}
                  className="max-h-[78vh] w-full object-contain"
                />
              </div>
              <div className="px-2 pb-2 pt-4 text-white">
                <h4 className="text-xl font-semibold">{repairGallery[lightboxIndex].title}</h4>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                  {repairGallery[lightboxIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    need: "Réparation smartphone",
    message: "",
  });
  const anydeskTarget = useMemo(() => getAnyDeskTarget(), []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Demande ZANK Solutions — ${formData.need}`);
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nContact : ${formData.contact}\nBesoin : ${formData.need}\n\nMessage :\n${formData.message}`,
    );

    window.location.href = `mailto:info@zanksolutions.be?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-black selection:bg-black selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img src={logoMark} alt="ZANK Solutions" className="h-14 w-auto object-contain sm:h-[4.6rem]" />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-black/70 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="https://wa.me/32499469864" className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition hover:bg-black/5">
              WhatsApp
            </a>
            <a href="#contact" className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02]">
              Demander un devis
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen ? (
          <div id="mobile-navigation" className="border-t border-black/5 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
              <a href="https://wa.me/32499469864" className="mt-2 rounded-full border border-black/10 px-4 py-3 text-center text-sm font-medium text-black">
                WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="accueil" className="section-anchor relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.07),transparent_36%)]" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-black/55">
                Réponse rapide · Prise de contact simple · Garantie
              </div>
              <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Réparation smartphone, dépannage informatique et assistance technique près de chez vous
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65 sm:text-xl">
                ZANK Solutions accompagne les particuliers, indépendants et petites entreprises avec une approche claire, un contact simple, des prix lisibles et une solution adaptée à votre besoin.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">
                  Demander un devis
                </a>
                <a href="https://wa.me/32499469864" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-black/5">
                  Contacter sur WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-black/60">
                {[
                  "Particuliers, indépendants & petites entreprises",
                  "Service local",
                  "Prix clairs",
                  "Travail soigné",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-12">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-black/42">Nous avons une solution</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["Simple", "Vous expliquez votre problème et vous obtenez une réponse claire, sans jargon inutile."],
                    ["Fiable", "Vous bénéficiez d’un accompagnement sérieux, d’un travail soigné et d’une solution adaptée."],
                    ["Rapide", "Vous pouvez demander un devis, un diagnostic ou une aide sans perdre de temps."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-sm">
                      <p className="text-3xl font-semibold tracking-tight">{title}</p>
                      <p className="mt-2 text-sm text-black/55">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-black/[0.05] blur-3xl" />
              <div className="relative rounded-[2.2rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] lg:p-8">
                <div className="rounded-[1.9rem] bg-[#f5f5f7] p-6 lg:p-8">
                  <img src={logoWordmark} alt="ZANK Solutions" className="mx-auto h-32 w-auto object-contain sm:h-44 lg:h-52" />

                  <div className="mt-7 grid gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      const external = service.href.startsWith("http");
                      return (
                        <a
                          key={service.title}
                          href={service.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="block rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white">
                              <Icon size={18} />
                            </div>
                            <p className="text-sm font-semibold text-black">{service.title}</p>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-black/55">{service.text}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section-anchor mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionTitle
              eyebrow="Services"
              title="Une offre plus claire pour vous orienter rapidement vers la bonne solution."
              text="Réparation smartphone, dépannage informatique et assistance : chaque service est présenté avec un bénéfice client et un CTA précis."
              align="center"
            />
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const external = service.href.startsWith("http");

              return (
                <motion.article
                  key={service.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-black">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/62">{service.text}</p>
                  <div className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 text-sm text-black/72">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-black" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={service.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                  >
                    {service.cta}
                    <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="Pourquoi choisir ZANK Solutions"
                title="Un site plus rassurant, une offre plus claire, un contact plus direct."
                text="L’objectif est simple : inspirer confiance et rendre la prise de contact évidente à chaque étape."
                align="center"
              />
            </motion.div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.article
                    key={point.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                    className="rounded-[2rem] border border-black/8 bg-[#f5f5f7] p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-black">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/60">{point.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="comment-ca-marche" className="section-anchor mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionTitle
              eyebrow="Comment ça marche"
              title="Un parcours simple pour vous faire gagner du temps."
              text="Vous expliquez votre besoin, vous recevez une réponse claire, puis nous vous aidons avec la solution la plus adaptée."
              align="center"
            />
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.05)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="mt-5 text-base leading-7 text-black/70">{step}</p>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 rounded-[2rem] bg-black px-8 py-7 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Besoin d’aide à distance ?</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                  Si votre problème peut être résolu sans déplacement, vous êtes guidé simplement pour télécharger AnyDesk et recevoir une assistance rapide.
                </p>
              </div>
              <a href={anydeskTarget.href} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
                {anydeskTarget.label}
              </a>
            </div>
          </motion.div>
        </section>

        <section id="offres" className="section-anchor bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="Offres & tarifs"
                title="Des offres claires pour répondre à vos besoins sans surcharger le parcours."
                text="Entretien, optimisation, dépannage ou accompagnement : vous choisissez une formule adaptée avec une présentation plus professionnelle de ce qui est inclus."
                align="center"
              />
            </motion.div>

            <div className="mt-14 grid gap-6 xl:grid-cols-3">
              {offers.map((offer, index) => (
                <motion.article
                  key={offer.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/40">Offre</p>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-black">{offer.title}</h3>
                    </div>
                    <div className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">{offer.price}</div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-black/63">{offer.text}</p>
                  <div className="mt-6 space-y-3">
                    {offer.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-black/72">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-black" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-black/5">
                    Demander un devis rapide
                    <ArrowRight size={16} />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="reparation-gsm" className="section-anchor mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionTitle
              eyebrow="Réparation smartphone"
              title="Réparation smartphone avec tarifs visibles et prise en charge claire."
              text="Vous pouvez visualiser des exemples de réparations, les marques prises en charge et des premiers tarifs indicatifs avant de demander votre diagnostic."
              align="center"
            />
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {brands.map((brand) => (
              <div key={brand.name} className="flex h-14 min-w-[96px] items-center justify-center rounded-full border border-black/10 bg-white px-5 shadow-sm" title={brand.name} aria-label={brand.name}>
                <img src={brand.logo} alt={brand.name} className="max-h-6 w-auto object-contain opacity-90" />
              </div>
            ))}
          </div>

          <RepairCarousel />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {repairCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/62">{item.text}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-black/8 px-8 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">Tarifs iPhone</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">Écran à partir de / Batterie à partir de</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-black/60">
                Des prix visibles pour vous aider à vous situer rapidement avant de demander votre diagnostic ou votre devis.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-black/8 bg-[#f5f5f7] text-sm text-black/60">
                    <th className="px-6 py-4 font-semibold">Modèle</th>
                    <th className="px-6 py-4 font-semibold">Écran à partir de</th>
                    <th className="px-6 py-4 font-semibold">Batterie à partir de</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-black/75">
                  {iphonePrices.map((row) => (
                    <tr key={row[0]} className="border-b border-black/6 last:border-b-0">
                      <td className="px-6 py-4 font-medium">{row[0]}</td>
                      <td className="px-6 py-4">{row[1]}</td>
                      <td className="px-6 py-4">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-black/8 px-8 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm leading-7 text-black/62">
                  Les tarifs affichés concernent les modèles les plus demandés. Pour tout modèle non affiché, le prix est communiqué sur demande.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">
                  Demander un diagnostic
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="avis" className="section-anchor bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="Avis clients"
                title="Des clients déjà satisfaits."
                text="Voici quelques retours de clients ayant fait appel à ZANK Solutions pour une réparation, un dépannage ou une assistance."
                align="center"
              />
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.name}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8"
                >
                  <div className="mb-5 flex items-center gap-1 text-black">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-black/68">“{testimonial.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-black/40">{testimonial.name}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f9f9fa]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="Questions fréquentes"
                title="Les réponses utiles avant de prendre contact."
                text="Une FAQ pensée pour rassurer, clarifier l’offre et lever les objections les plus courantes."
                align="center"
              />
            </motion.div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <motion.div
                    key={faq.q}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                    className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex((current) => (current === index ? null : index))}
                      className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="text-lg font-semibold tracking-tight text-black">{faq.q}</span>
                      <ChevronDown size={20} className={`shrink-0 text-black/55 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen ? (
                      <div id={`faq-panel-${index}`} className="px-7 pb-7">
                        <p className="text-sm leading-7 text-black/63">{faq.a}</p>
                      </div>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-anchor bg-[#0a0a0a] text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div {...fadeUp}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Obtenez une réponse rapidement.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  Expliquez votre besoin par WhatsApp, téléphone ou email. Que vous soyez particulier, indépendant ou petite entreprise, vous obtenez une prise de contact simple et une orientation claire.
                </p>

                <div className="mt-10 grid gap-4">
                  <a href="https://wa.me/32499469864" className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                    <p className="text-sm text-white/45">WhatsApp</p>
                    <p className="mt-2 text-xl font-medium text-white">Message rapide</p>
                  </a>
                  <a href="tel:+32499469864" className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                    <p className="text-sm text-white/45">Téléphone</p>
                    <p className="mt-2 text-xl font-medium text-white">+32 499 469 864</p>
                  </a>
                  <a href="mailto:info@zanksolutions.be" className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                    <p className="text-sm text-white/45">Email</p>
                    <p className="mt-2 text-xl font-medium text-white">info@zanksolutions.be</p>
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white">Obtenir un devis rapidement</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Ce formulaire prépare votre demande. À l’envoi, votre message s’ouvre dans votre client email avec les bonnes informations.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="Nom"
                      value={formData.name}
                      onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/30"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Email ou téléphone"
                      value={formData.contact}
                      onChange={(event) => setFormData((current) => ({ ...current, contact: event.target.value }))}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/30"
                    />
                  </div>
                  <select
                    value={formData.need}
                    onChange={(event) => setFormData((current) => ({ ...current, need: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  >
                    <option className="text-black">Réparation smartphone</option>
                    <option className="text-black">Dépannage informatique</option>
                    <option className="text-black">Assistance / accompagnement</option>
                    <option className="text-black">Autre demande</option>
                  </select>
                  <textarea
                    required
                    rows={5}
                    placeholder="Expliquez votre besoin"
                    value={formData.message}
                    onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/30"
                  />
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
                    Obtenir un devis rapidement
                    <ArrowRight size={16} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050505] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">ZANK Solutions</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                Réparation smartphone, dépannage informatique et assistance technique pour particuliers, indépendants et petites entreprises.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Navigation</p>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="block hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Contact</p>
              <p className="mt-4 text-sm leading-7 text-white/70">Téléphone : +32 499 469 864</p>
              <p className="text-sm leading-7 text-white/70">Email : info@zanksolutions.be</p>
              <p className="mt-2 text-sm leading-7 text-white/70">TVA : BE1033.509.066</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/45">
            © {new Date().getFullYear()} ZANK Solutions. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
