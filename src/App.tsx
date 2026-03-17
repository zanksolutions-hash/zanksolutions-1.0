import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Download,
  Globe,
  Laptop,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

import logoMark from "./assets/logo-mark.png";
import logoWordmark from "./assets/logo-wordmark.png";

import repair1 from "./assets/repairs/repair-1.jpeg";
import repair2 from "./assets/repairs/repair-2.jpeg";
import repair3 from "./assets/repairs/repair-3.jpeg";
import repair4 from "./assets/repairs/repair-4.jpeg";
import repair5 from "./assets/repairs/repair-5.jpeg";

import appleLogo from "./assets/brands/apple.png";
import samsungLogo from "./assets/brands/samsung.png";
import xiaomiLogo from "./assets/brands/xiaomi.png";
import huaweiLogo from "./assets/brands/huawei.png";
import oneplusLogo from "./assets/brands/oneplus.png";
import googleLogo from "./assets/brands/google.png";

type ServiceItem = {
  icon: typeof Laptop;
  title: string;
  text: string;
  benefit: string;
  cta: string;
  href: string;
};

type ForfaitItem = {
  title: string;
  price: string;
  hook: string;
  details: string[];
  options?: string[];
};

type RepairGalleryItem = {
  src: string;
  title: string;
  text: string;
};

type FaqItem = {
  q: string;
  a: string;
};

const contact = {
  email: "info@zanksolutions.be",
  phoneRaw: "+32499469864",
  phoneDisplay: "+32 499 469 864",
  whatsappUrl: "https://wa.me/32499469864",
  vat: "BE1033.509.066",
  companyName: "ZANK Solutions",
};

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#avis", label: "Avis clients" },
  { href: "#contact", label: "Contact" },
];

const services: ServiceItem[] = [
  {
    icon: Smartphone,
    title: "Réparation smartphone",
    text: "Écran cassé, batterie à remplacer, problème de charge ou diagnostic : vous obtenez rapidement une réponse claire et une prise en charge adaptée à votre appareil.",
    benefit:
      "Vous savez quoi faire, combien cela implique et comment avancer rapidement.",
    cta: "Demander un diagnostic",
    href: "#reparation-gsm",
  },
  {
    icon: Laptop,
    title: "Dépannage informatique",
    text: "Ordinateur lent, problème logiciel, installation, configuration ou bug du quotidien : vous retrouvez un appareil plus stable, plus fluide et plus simple à utiliser.",
    benefit:
      "Vous gagnez du temps et vous retrouvez un outil plus fiable pour travailler ou profiter de votre matériel.",
    cta: "Demander un devis",
    href: "#contact",
  },
  {
    icon: ShieldCheck,
    title: "Assistance et accompagnement",
    text: "Besoin d’aide pour utiliser vos appareils, résoudre un blocage ou être accompagné pas à pas ? Vous avancez plus sereinement avec une aide simple, humaine et compréhensible.",
    benefit:
      "Vous êtes aidé sans jargon et sans vous sentir perdu face au technique.",
    cta: "Contacter sur WhatsApp",
    href: contact.whatsappUrl,
  },
  {
    icon: Globe,
    title: "Création de site vitrine",
    text: "Vous avez besoin d’une présence en ligne claire, professionnelle et rassurante ? Vous pouvez lancer un site vitrine simple, moderne et prêt à présenter votre activité.",
    benefit:
      "Vous gagnez en crédibilité avec une base propre, lisible et pensée pour vos futurs clients.",
    cta: "Demander un devis",
    href: "#site-vitrine",
  },
];

const reassurancePoints = [
  {
    icon: Sparkles,
    title: "Simple",
    text: "Vous expliquez votre problème et vous obtenez une réponse claire, sans jargon inutile.",
  },
  {
    icon: ShieldCheck,
    title: "Fiable",
    text: "Vous bénéficiez d’un accompagnement sérieux, d’une solution adaptée et d’une prise en charge rassurante.",
  },
  {
    icon: CheckCircle2,
    title: "Rapide",
    text: "Vous pouvez demander un devis, un diagnostic ou une aide rapidement, avec une prise de contact simple.",
  },
];

const whyChooseUs = [
  "Réponse rapide",
  "Prix clairs",
  "Garantie sur les interventions proposées",
  "Contact direct par WhatsApp, téléphone ou email",
  "Approche claire et sans jargon inutile",
  "Solutions adaptées aux particuliers, indépendants et petites entreprises",
];

const steps = [
  {
    title: "Vous expliquez votre besoin",
    text: "Par WhatsApp, téléphone ou email, selon ce qui vous convient le mieux.",
  },
  {
    title: "Votre problème est analysé",
    text: "L’objectif est de comprendre rapidement la situation et d’identifier la bonne direction.",
  },
  {
    title: "Vous recevez une solution claire",
    text: "Vous savez ce qui est possible, ce qui est recommandé et comment la prise en charge peut se faire.",
  },
  {
    title: "Vous êtes accompagné jusqu’à la résolution",
    text: "Réparation, dépannage ou assistance : vous avancez avec une solution concrète.",
  },
];

const forfaits: ForfaitItem[] = [
  {
    title: "Entretien Essentiel",
    price: "59€",
    hook: "Pour garder un ordinateur plus propre, plus stable et plus agréable à utiliser.",
    details: [
      "Nettoyage interne (dépoussiérage)",
      "Contrôle matériel et températures",
      "Mise à jour système",
      "Optimisation légère",
    ],
  },
  {
    title: "Réparation / Optimisation",
    price: "49€",
    hook: "Pour remplacer une pièce défectueuse ou redonner de la fluidité à votre machine.",
    details: [
      "Remplacement écran cassé",
      "Remplacement clavier défectueux",
      "Remplacement batterie",
      "Remplacement disque dur",
      "Remplacement RAM défectueuse",
      "Upgrade SSD ou RAM",
    ],
  },
  {
    title: "Accompagnement Digital",
    price: "49€",
    hook: "Pour être aidé simplement dans vos démarches et votre usage du numérique.",
    details: [
      "Initiation informatique",
      "Aide démarches en ligne",
      "Assistance smartphone / tablette",
      "Conseils pratiques adaptés",
    ],
  },
  {
    title: "PC sur mesure",
    price: "150€",
    hook: "Pour obtenir un ordinateur réellement adapté à votre usage, à vos besoins et à votre budget.",
    details: [
      "Conseil sur les composants",
      "Montage complet",
      "Installation et optimisation Windows",
      "Installation pilotes",
      "Tests de performance",
    ],
    options: [
      "Transfert de données",
      "Installation logiciels",
      "Configuration sécurité",
    ],
  },
  {
    title: "Nettoyage Premium",
    price: "89€",
    hook: "Pour retrouver un ordinateur mieux refroidi, plus silencieux et plus performant.",
    details: [
      "Nettoyage interne complet",
      "Remplacement pâte thermique",
      "Vérification refroidissement",
      "Optimisation avancée",
      "Test de stabilité",
      "Vérification sécurité",
    ],
  },
  {
    title: "Site web vitrine",
    price: "350€",
    hook: "Pour lancer un site vitrine clair, professionnel et prêt à présenter votre activité.",
    details: [
      "Maquette simple et structurée",
      "Site responsive mobile et desktop",
      "Présentation claire de vos services",
      "Section contact intégrée",
      "Base propre pour votre visibilité en ligne",
    ],
    options: [
      "Ajout de pages supplémentaires",
      "Aide au contenu",
      "Optimisations complémentaires",
    ],
  },
];

const repairCards = [
  {
    icon: MonitorSmartphone,
    title: "Écran cassé ou tactile défectueux",
    text: "Vous retrouvez un affichage net, un tactile réactif et un appareil plus agréable à utiliser.",
  },
  {
    icon: BatteryCharging,
    title: "Batterie usée ou autonomie réduite",
    text: "Vous récupérez plus d’autonomie et un appareil plus fiable au quotidien.",
  },
  {
    icon: Wrench,
    title: "Diagnostic et réparation multi-marques",
    text: "Vous obtenez rapidement une réponse claire sur la prise en charge de votre modèle.",
  },
];

const brands = [
  { name: "Apple", logo: appleLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Xiaomi", logo: xiaomiLogo },
  { name: "Huawei", logo: huaweiLogo },
  { name: "OnePlus", logo: oneplusLogo },
  { name: "Google", logo: googleLogo },
];

const repairGallery: RepairGalleryItem[] = [
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

const iphonePrices: [string, string, string][] = [
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

const testimonials = [
  {
    name: "V. A.",
    quote: "Rapide et très professionnel. Je recommande à 100% !",
  },
  {
    name: "V. P.",
    quote:
      "Il a su réparer deux smartphones et récupérer mes données. Travail au top, je recommande à 100 %.",
  },
  {
    name: "S. L.",
    quote: "Qualité du travail et du service impeccable. À recommander.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Comment demander un devis ?",
    a: "Le plus simple est de nous contacter via WhatsApp, téléphone ou email. Vous pouvez aussi utiliser le formulaire pour préparer votre message WhatsApp.",
  },
  {
    q: "Réparez-vous uniquement les iPhone ?",
    a: "Non. Nous prenons aussi en charge plusieurs marques Android selon le modèle et la disponibilité des pièces.",
  },
  {
    q: "Peut-on demander de l’aide à distance ?",
    a: "Oui. Si le problème peut être traité à distance, vous êtes guidé simplement pour recevoir une assistance rapide.",
  },
  {
    q: "Intervenez-vous pour les indépendants et petites entreprises ?",
    a: "Oui. ZANK Solutions accompagne aussi les indépendants et petites entreprises pour leurs besoins informatiques du quotidien.",
  },
  {
    q: "Les prix sont-ils communiqués à l’avance ?",
    a: "Oui, autant que possible. L’objectif est de vous donner une vision claire avant intervention.",
  },
  {
    q: "Peut-on vous contacter sur WhatsApp ?",
    a: "Oui. C’est même le moyen le plus simple pour demander un devis ou expliquer un besoin rapidement.",
  },
  {
    q: "Vos interventions sont-elles garanties ?",
    a: "Oui, les interventions proposées sont réalisées avec garantie.",
  },
  {
    q: "Pouvez-vous créer un site web vitrine ?",
    a: "Oui. Une offre de site vitrine à partir de 350€ peut être proposée pour présenter clairement votre activité en ligne.",
  },
];

function MobileSwipeRow({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) {
  return (
    <div className="overflow-hidden">
      <div className="hide-scrollbar -mx-5 overflow-x-auto px-5 pb-4 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
        <div
          className={`flex snap-x snap-mandatory gap-5 pr-5 md:pr-0 ${itemClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
      {eyebrow ? (
        <span className="mx-auto inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/70 shadow-sm">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mx-auto max-w-2xl text-sm leading-7 text-black/70 sm:text-base ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function getAnyDeskTarget() {
  if (typeof navigator === "undefined") {
    return {
      href: "https://download.anydesk.com/AnyDesk.exe",
      label: "Télécharger AnyDesk",
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

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openForfait, setOpenForfait] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    contactField: "",
    needType: "Réparation smartphone",
    message: "",
  });

  const anydeskTarget = useMemo(() => getAnyDeskTarget(), []);

  const whatsappFormUrl = useMemo(() => {
    const parts = [
      "Bonjour, voici ma demande :",
      "",
      `Nom : ${formData.name || "-"}`,
      `Contact : ${formData.contactField || "-"}`,
      `Type de besoin : ${formData.needType || "-"}`,
      `Message : ${formData.message || "-"}`,
    ];

    return `${contact.whatsappUrl}?text=${encodeURIComponent(parts.join("\n"))}`;
  }, [formData]);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.contactField.trim() ||
      !formData.message.trim()
    ) {
      alert(
        "Merci de compléter au minimum votre nom, votre contact et votre message."
      );
      return;
    }

    window.open(whatsappFormUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f7] text-black selection:bg-black selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3">
            <img
              src={logoMark}
              alt="ZANK Solutions"
              className="h-14 w-auto object-contain sm:h-[4.6rem]"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-black/70 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={contact.whatsappUrl}
              className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition hover:bg-black/5"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Demander un devis
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-black/5 bg-white lg:hidden">
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
              <a
                href={contact.whatsappUrl}
                className="mt-2 rounded-full border border-black/10 px-4 py-3 text-center text-sm font-medium text-black"
              >
                WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="accueil" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.07),transparent_36%)]" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-14 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
            <div className="min-w-0">
              <div className="inline-flex max-w-full items-center rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/55 sm:text-xs">
                Réparation · Dépannage · Assistance
              </div>

              <h1 className="mt-7 max-w-[12ch] text-[2.2rem] font-semibold leading-[1.05] tracking-tight text-black sm:max-w-4xl sm:text-5xl lg:text-7xl">
                Un problème informatique ou un smartphone à réparer ? Vous êtes
                au bon endroit.
              </h1>

              <p className="mt-5 max-w-[34ch] text-base leading-7 text-black/65 sm:max-w-2xl sm:text-lg lg:text-xl">
                ZANK Solutions accompagne les particuliers, indépendants et
                petites entreprises avec des solutions simples, une réponse
                rapide, des prix clairs et un contact direct par WhatsApp,
                téléphone ou email.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  Demander un devis
                </a>

                <a
                  href={contact.whatsappUrl}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-black/5"
                >
                  Contacter sur WhatsApp
                </a>
              </div>

              <p className="mt-5 max-w-[30ch] text-sm leading-6 text-black/55">
                Une réponse rapide, des prix clairs, un contact simple
              </p>

              <div className="mt-12">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-black/42">
                  Nous avons une solution
                </p>

                <MobileSwipeRow itemClassName="md:grid md:grid-cols-3 md:gap-4">
                  {reassurancePoints.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article
                        key={item.title}
                        className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-sm sm:min-w-[86%] sm:max-w-none md:min-w-0"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                          <Icon size={20} />
                        </div>
                        <p className="text-2xl font-semibold tracking-tight">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm text-black/55">
                          {item.text}
                        </p>
                      </article>
                    );
                  })}
                </MobileSwipeRow>
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="absolute -inset-8 rounded-[3rem] bg-black/[0.05] blur-3xl" />
              <div className="relative rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-6 lg:rounded-[2.2rem] lg:p-8">
                <div className="rounded-[1.6rem] bg-[#f5f5f7] p-4 sm:p-6 lg:rounded-[1.9rem] lg:p-8">
                  <img
                    src={logoWordmark}
                    alt="ZANK Solutions"
                    className="mx-auto h-20 w-auto object-contain sm:h-32 lg:h-52"
                  />

                  <div className="mt-7 grid gap-4">
                    <a
                      href="#services"
                      className="block rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                    >
                      <p className="text-sm font-semibold text-black">
                        Support informatique
                      </p>
                      <p className="mt-2 text-sm leading-6 text-black/55">
                        Votre ordinateur est lent, instable ou pénible à
                        utiliser ? Vous retrouvez un appareil plus fluide, plus
                        simple et plus agréable au quotidien.
                      </p>
                    </a>

                    <a
                      href="#reparation-gsm"
                      className="block rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                    >
                      <p className="text-sm font-semibold text-black">
                        Réparation smartphones & tablettes
                      </p>
                      <p className="mt-2 text-sm leading-6 text-black/55">
                        Écran cassé, batterie usée ou problème de charge : vous
                        savez rapidement si votre appareil peut être pris en
                        charge.
                      </p>
                    </a>

                    <a
                      href="#support"
                      className="block rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                    >
                      <p className="text-sm font-semibold text-black">
                        Support à distance
                      </p>
                      <p className="mt-2 text-sm leading-6 text-black/55">
                        Besoin d’aide sans vous déplacer ? Vous êtes guidé
                        simplement pour recevoir une assistance rapide et
                        efficace à distance.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Services"
            title="Des solutions claires pour vos besoins du quotidien"
            description="Que vous ayez besoin d’une réparation, d’un dépannage ou d’un accompagnement, l’objectif est toujours le même : vous faire gagner du temps avec une solution simple, claire et adaptée."
          />

          <div className="mt-14">
            <MobileSwipeRow itemClassName="md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                const isExternal = service.href.startsWith("http");

                return (
                  <article
                    key={service.title}
                    className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:min-w-[84%] sm:max-w-none md:min-w-0"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-black">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-black/62">
                      {service.text}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-7 text-black/85">
                      {service.benefit}
                    </p>
                    <a
                      href={service.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="mt-6 inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition hover:bg-black/5"
                    >
                      {service.cta}
                    </a>
                  </article>
                );
              })}
            </MobileSwipeRow>
          </div>
        </section>

        <section id="site-vitrine" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <SectionTitle
              eyebrow="Création de site vitrine"
              title="Un site vitrine clair, professionnel et prêt à présenter votre activité"
              description="À partir de 350€, vous pouvez lancer une présence en ligne simple, moderne et rassurante pour mieux présenter vos services et faciliter la prise de contact."
              titleClassName="text-[2rem] leading-[1.04] sm:text-4xl lg:text-5xl"
              descriptionClassName="max-w-[24ch] sm:max-w-2xl"
            />

            <div className="mt-14">
              <MobileSwipeRow itemClassName="md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-6">
                <article className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-black p-8 text-white shadow-[0_18px_60px_rgba(0,0,0,0.12)] sm:min-w-[84%] sm:max-w-none md:min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                      <Globe size={22} />
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                      À partir de 350€
                    </div>
                  </div>

                  <h3 className="mt-8 text-[2rem] font-semibold leading-[1.02] tracking-tight sm:text-[2.4rem]">
                    Création de site web vitrine
                  </h3>

                  <p className="mt-5 max-w-[28ch] text-base leading-8 text-white/75">
                    Vous avez besoin d’un site propre, lisible et rassurant pour
                    présenter votre activité ? Cette formule vous permet de poser
                    une base sérieuse, professionnelle et claire pour votre
                    visibilité en ligne.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Design simple et professionnel",
                      "Responsive mobile et desktop",
                      "Présentation claire de vos services",
                      "Section contact intégrée",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-white/78">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-white" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                  >
                    Demander un devis pour un site vitrine
                  </a>
                </article>

                <article className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8 sm:min-w-[84%] sm:max-w-none md:min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
                    Pour qui ?
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Indépendants qui veulent une présence plus professionnelle",
                      "Petites entreprises qui ont besoin d’un site clair et rassurant",
                      "Activités locales qui veulent être trouvées plus facilement",
                      "Entreprises qui veulent une base simple avant d’aller plus loin",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-7 text-black/72">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm leading-7 text-black/62">
                    L’objectif n’est pas de faire compliqué, mais de créer un
                    site clair, moderne et utile pour présenter votre activité
                    et faciliter vos prises de contact.
                  </p>
                </article>
              </MobileSwipeRow>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <SectionTitle
              eyebrow="Pourquoi choisir ZANK Solutions"
              title="Pourquoi faire confiance à ZANK Solutions ?"
              description="Quand vous cherchez de l’aide, vous voulez surtout une solution sérieuse, claire et rapide. C’est exactement l’approche proposée."
            />

            <div className="mt-14">
              <MobileSwipeRow itemClassName="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6">
                {whyChooseUs.map((item) => (
                  <div
                    key={item}
                    className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-7 sm:min-w-[82%] sm:max-w-none md:min-w-0"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-black"
                      />
                      <p className="text-sm leading-7 text-black/72">{item}</p>
                    </div>
                  </div>
                ))}
              </MobileSwipeRow>
            </div>
          </div>
        </section>

        <section
          id="comment-ca-marche"
          className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
          <SectionTitle
            eyebrow="Comment ça marche"
            title="Une prise en charge simple, du premier contact jusqu’à la solution"
            description="Pas besoin de parcours compliqué. En quelques étapes, vous savez comment avancer."
          />

          <div className="mt-14">
            <MobileSwipeRow itemClassName="md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:min-w-[82%] sm:max-w-none md:min-w-0"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-[1.7rem] font-semibold leading-[1.06] tracking-tight text-black sm:text-lg sm:leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/62">
                    {step.text}
                  </p>
                </article>
              ))}
            </MobileSwipeRow>
          </div>
        </section>

        <section id="forfaits" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mx-auto inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/70 shadow-sm">
                Offres et forfaits
              </span>

              <h2 className="mt-4 text-[2rem] font-semibold leading-[1.03] tracking-tight text-black sm:text-4xl lg:text-5xl">
                Des offres claires pour répondre à vos besoins
              </h2>

              <p className="mx-auto mt-4 max-w-[22ch] text-[1rem] leading-8 text-black/70 sm:max-w-2xl sm:text-base">
                Que vous vouliez entretenir votre ordinateur, l’optimiser, vous
                faire accompagner ou repartir sur une configuration adaptée,
                vous trouvez une formule claire et facile à comprendre.
              </p>
            </div>

            <div className="mt-14">
              <MobileSwipeRow itemClassName="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6">
                {forfaits.map((forfait, index) => {
                  const isOpen = openForfait === index;

                  return (
                    <article
                      key={forfait.title}
                      className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] sm:min-w-[82%] sm:max-w-none sm:p-8 md:min-w-0"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenForfait((current) =>
                            current === index ? null : index
                          )
                        }
                        className="w-full text-left"
                      >
                        <div className="flex flex-col gap-4 sm:gap-5">
                          <div className="flex justify-start">
                            <div className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold leading-none text-white sm:px-5 sm:py-2.5 sm:text-base">
                              {forfait.price}
                            </div>
                          </div>

                          <div className="min-w-0">
                            <h3 className="max-w-[12ch] break-words text-[1.75rem] font-semibold leading-[1.02] tracking-tight text-black sm:max-w-[13ch] sm:text-[2rem]">
                              {forfait.title}
                            </h3>

                            <p className="mt-5 max-w-[18ch] text-[1rem] leading-8 text-black/62 sm:max-w-[24ch] sm:text-base">
                              {forfait.hook}
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-[1rem] font-medium text-black/70 sm:text-base">
                          <span>{isOpen ? "Masquer le détail" : "Voir le détail"}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {isOpen ? (
                        <div className="mt-6 border-t border-black/8 pt-6">
                          <div className="space-y-3">
                            {forfait.details.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 text-sm leading-7 text-black/72"
                              >
                                <CheckCircle2
                                  size={18}
                                  className="mt-1 shrink-0 text-black"
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          {forfait.options ? (
                            <div className="mt-6 rounded-[1.5rem] border border-black/8 bg-white p-5">
                              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/40">
                                Options
                              </p>

                              <div className="mt-4 space-y-3">
                                {forfait.options.map((option) => (
                                  <div
                                    key={option}
                                    className="flex items-start gap-3 text-sm leading-7 text-black/72"
                                  >
                                    <CheckCircle2
                                      size={18}
                                      className="mt-1 shrink-0 text-black"
                                    />
                                    <span>{option}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </MobileSwipeRow>
            </div>
          </div>
        </section>

        <section
          id="reparation-gsm"
          className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
          <SectionTitle
            eyebrow="Réparation smartphone"
            title="Réparer votre smartphone avec plus de visibilité et moins d’incertitude"
            description="Avant même de demander votre prise en charge, vous pouvez consulter des exemples de réparations, voir les marques prises en charge et obtenir une première idée des tarifs."
          />

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-14 min-w-[96px] items-center justify-center rounded-full border border-black/10 bg-white px-5 shadow-sm"
                title={brand.name}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-6 w-auto object-contain opacity-90"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-6">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
                  Réalisations
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                  Faites défiler les photos de réparations
                </h3>
              </div>
              <p className="hidden text-sm text-black/45 md:block">
                Glissez à gauche ou à droite pour parcourir
              </p>
            </div>

            <div className="-mx-1 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex snap-x snap-mandatory gap-5 px-1 pr-5">
                {repairGallery.map((item, idx) => (
                  <article
                    key={`${item.title}-${idx}`}
                    className={`min-w-[78%] snap-center overflow-hidden rounded-[1.7rem] border border-black/8 bg-[#f5f5f7] sm:min-w-[46%] lg:min-w-[31%] ${
                      idx === 0 ? "ring-2 ring-black/10" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="block w-full text-left"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-[#d7d7da]">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-base font-semibold text-black">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-black/62">
                          {item.text}
                        </p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14">
            <MobileSwipeRow itemClassName="md:grid md:grid-cols-3 md:gap-6">
              {repairCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:min-w-[84%] sm:max-w-none md:min-w-0"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-black">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-black/62">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </MobileSwipeRow>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
            <div className="border-b border-black/8 px-8 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
                Tarifs iPhone
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                Écran à partir de / Batterie à partir de
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-black/60">
                Vous gagnez en clarté avant de prendre contact, avec des prix
                indicatifs visibles sur les modèles les plus demandés.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-black/8 bg-[#f5f5f7] text-sm text-black/60">
                    <th className="px-6 py-4 font-semibold">Modèle</th>
                    <th className="px-6 py-4 font-semibold">
                      Écran à partir de
                    </th>
                    <th className="px-6 py-4 font-semibold">
                      Batterie à partir de
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-black/75">
                  {iphonePrices.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-black/6 last:border-b-0"
                    >
                      <td className="px-6 py-4 font-medium">{row[0]}</td>
                      <td className="px-6 py-4">{row[1]}</td>
                      <td className="px-6 py-4">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-black/8 px-8 py-5">
              <a
                href={contact.whatsappUrl}
                className="inline-flex rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                Demander un diagnostic
              </a>
            </div>
          </div>
        </section>

        <section id="support" className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                  Support
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Recevez une assistance à distance rapide et simple
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  Si votre problème peut être résolu à distance, vous êtes guidé
                  pas à pas pour être aidé sans déplacement inutile.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={anydeskTarget.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Download size={16} />
                      {anydeskTarget.label}
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Demander une assistance
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="space-y-4">
                  {[
                    "Téléchargez AnyDesk",
                    "Ouvrez le fichier téléchargé",
                    "Communiquez votre identifiant",
                    "Recevez votre assistance rapidement",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                        {index + 1}
                      </div>
                      <p className="pt-2 text-sm leading-6 text-white/75">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="avis" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Avis clients"
            title="Des clients déjà satisfaits de leur prise en charge"
            description="Réparation, dépannage, récupération ou assistance : voici quelques retours de clients ayant déjà fait appel à ZANK Solutions."
          />

          <div className="mt-14">
            <MobileSwipeRow itemClassName="md:grid md:grid-cols-3 md:gap-6">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] snap-start rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:min-w-[84%] sm:max-w-none md:min-w-0"
                >
                  <p className="text-sm leading-7 text-black/68">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-black/40">
                    {testimonial.name}
                  </p>
                </article>
              ))}
            </MobileSwipeRow>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <SectionTitle
              eyebrow="Questions fréquentes"
              title="Les réponses aux questions que vous vous posez le plus souvent"
              description="Avant de prendre contact, vous pouvez déjà retrouver ici les informations les plus utiles."
            />

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-[#f5f5f7]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq((current) =>
                          current === index ? null : index
                        )
                      }
                      className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                    >
                      <span className="text-lg font-semibold tracking-tight text-black">
                        {faq.q}
                      </span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-black/55 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen ? (
                      <div className="px-7 pb-7">
                        <p className="text-sm leading-7 text-black/63">
                          {faq.a}
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0a0a0a] text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                  Contact
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Obtenez une réponse rapidement
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Expliquez votre besoin en quelques secondes. Remplissez le
                  formulaire ci-dessous pour préparer votre message et l’envoyer
                  directement sur WhatsApp.
                </p>

                <form
                  onSubmit={handleFormSubmit}
                  className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8"
                >
                  <div className="grid gap-5">
                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Nom
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Votre nom"
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/25"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Téléphone ou email
                      </label>
                      <input
                        type="text"
                        value={formData.contactField}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            contactField: e.target.value,
                          }))
                        }
                        placeholder="Votre numéro ou votre adresse email"
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/25"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Type de besoin
                      </label>
                      <select
                        value={formData.needType}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            needType: e.target.value,
                          }))
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/25"
                      >
                        <option>Réparation smartphone</option>
                        <option>Dépannage informatique</option>
                        <option>Assistance à distance</option>
                        <option>Optimisation / entretien PC</option>
                        <option>PC sur mesure</option>
                        <option>Nettoyage Premium</option>
                        <option>Création site web vitrine</option>
                        <option>Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Votre demande
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Expliquez brièvement votre besoin, votre problème ou ce que vous souhaitez faire."
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/25"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                    >
                      Envoyer sur WhatsApp
                    </button>
                    <p className="mt-3 text-sm text-white/45">
                      Votre message s’ouvrira dans WhatsApp avant envoi.
                    </p>
                  </div>
                </form>
              </div>

              <div className="lg:pt-14">
                <p className="text-sm leading-7 text-white/60">
                  Vous avez une question, un besoin urgent ou une demande de
                  devis ? Le plus simple est de nous contacter directement.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <a
                    href={contact.whatsappUrl}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                      <MessageCircle size={20} />
                    </div>
                    <p className="text-sm text-white/45">WhatsApp</p>
                    <p className="mt-4 text-base font-semibold leading-snug text-white">
                      Nous contacter
                    </p>
                  </a>

                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                      <Phone size={20} />
                    </div>
                    <p className="text-sm text-white/45">Téléphone</p>
                    <p className="mt-4 text-base font-semibold leading-snug whitespace-nowrap text-white">
                      {contact.phoneDisplay}
                    </p>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                      <Mail size={20} />
                    </div>
                    <p className="text-sm text-white/45">Email</p>
                    <p className="mt-4 text-base font-semibold leading-snug break-all text-white">
                      {contact.email}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050505] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                Mentions légales
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {contact.companyName} accompagne les particuliers, indépendants
                et petites entreprises pour la réparation smartphone, le
                dépannage informatique, l’assistance technique et la création de
                site vitrine.
              </p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                TVA : {contact.vat}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                Coordonnées
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Téléphone : {contact.phoneDisplay}
              </p>
              <p className="text-sm leading-7 text-white/70">
                Email : {contact.email}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/45">
            © {new Date().getFullYear()} {contact.companyName}. Tous droits
            réservés.
          </div>
        </div>
      </footer>

      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/88 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
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
                <h4 className="text-xl font-semibold">
                  {repairGallery[lightboxIndex].title}
                </h4>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                  {repairGallery[lightboxIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}