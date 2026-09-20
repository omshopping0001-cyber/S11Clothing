import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronRight, Instagram, Menu, Minus, PackageCheck, Plus, Ruler, Scissors, ShieldCheck, Shirt, Sparkles, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { S11Logo } from "@/components/s11-logo";
import { FILTERS, PRODUCTS, type Product } from "@/data/products";
import storyImage from "@/assets/s11-story.jpg";
import blackImage from "@/assets/s11-campaign-black.jpg";
import whiteImage from "@/assets/s11-campaign-white.jpg";
import redImage from "@/assets/s11-campaign-red.jpg";
import sandImage from "@/assets/s11-campaign-sand.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S11 Clothing | Premium T-Shirts" },
      { name: "description", content: "Shop premium, comfortable and modern T-shirts from S11 Clothing. Choose your size and colour and order directly on WhatsApp." },
      { property: "og:title", content: "S11 Clothing | Premium T-Shirts" },
      { property: "og:description", content: "Premium Indian streetwear essentials. Choose your fit and order directly on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Storefront,
});

// Replace this placeholder with your WhatsApp business number, including country code and no + sign.
const WHATSAPP_NUMBER = "919876543210";
const INSTAGRAM_URL = "https://instagram.com/s11clothing"; // Replace with your real Instagram profile.

type SortMode = "featured" | "low" | "high" | "newest";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Storefront() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [sort, setSort] = useState<SortMode>("featured");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const visibleProducts = useMemo(() => {
    const result = PRODUCTS.filter((product) => {
      if (filter === "All") return true;
      if (filter === "New Arrivals") return product.newArrival;
      return product.category === filter;
    });
    return [...result].sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "newest") return Number(b.newArrival) - Number(a.newArrival) || b.id - a.id;
      return Number(b.featured) - Number(a.featured) || a.id - b.id;
    });
  }, [filter, sort]);

  const navigateTo = (id: string) => {
    setMobileOpen(false);
    window.setTimeout(() => scrollTo(id), 60);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:flex lg:h-20 lg:px-10">
          <a href="#top" className="min-w-0 shrink-0" aria-label="S11 Clothing home"><S11Logo /></a>
          <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {[["Home", "top"], ["Shop", "shop"], ["New Arrivals", "shop"], ["Best Sellers", "best-sellers"], ["About", "about"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={label} href={`#${id}`} className="nav-link">{label}</a>
            ))}
          </nav>
          <Button variant="brand" className="ml-3 hidden lg:inline-flex" onClick={() => scrollTo("shop")}>Shop now <ArrowRight /></Button>
          <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu className="h-6 w-6" /></Button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm lg:hidden" role="presentation" onClick={() => setMobileOpen(false)}>
          <aside className="ml-auto flex h-full w-[min(88vw,380px)] flex-col bg-background p-6 shadow-2xl" role="dialog" aria-modal="true" aria-label="Mobile navigation" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between"><S11Logo /><Button variant="ghost" size="icon" aria-label="Close navigation" onClick={() => setMobileOpen(false)}><X /></Button></div>
            <nav className="mt-14 flex flex-col" aria-label="Mobile navigation links">
              {([["Home", "top"], ["Shop", "shop"], ["New Arrivals", "shop"], ["Best Sellers", "best-sellers"], ["About", "about"], ["Contact", "contact"]] as [string, string][]).map(([label, id], index) => (
                <Button key={label} variant="ghost" className="h-14 justify-between border-b border-border px-0 text-base" onClick={() => navigateTo(id)}>{label}<span className="font-normal text-muted-foreground">0{index + 1}</span></Button>
              ))}
            </nav>
            <Button variant="brand" size="lg" className="mt-auto w-full" onClick={() => navigateTo("shop")}>Shop now <ArrowRight /></Button>
          </aside>
        </div>
      )}

      <main id="top">
        <section className="hero-grid relative min-h-[calc(100svh-4.5rem)] bg-ink text-ink-foreground lg:min-h-[calc(100svh-5rem)]">
          <div className="relative z-10 flex min-h-[45svh] flex-col justify-end px-5 pb-10 pt-16 sm:px-8 lg:min-h-0 lg:px-12 lg:pb-16 xl:px-20">
            <p className="eyebrow text-ink-muted animate-rise">S11 / ESSENTIALS 2026</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,8vw,8.8rem)] uppercase leading-[0.87] animate-rise-delay">Wear your<br /><span className="text-brand">attitude.</span></h1>
            <p className="mt-7 max-w-md text-sm leading-6 text-ink-muted sm:text-base">Premium everyday essentials designed for your style. Built in India, made to move differently.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="brand" onClick={() => scrollTo("shop")}>Shop collection <ArrowDown /></Button>
              <Button size="lg" variant="inverted" onClick={() => scrollTo("best-sellers")}>Explore best sellers</Button>
            </div>
          </div>
          <div className="hero-image relative min-h-[52svh] overflow-hidden lg:min-h-0">
            <img src={blackImage} alt="Model wearing the S11 Essential Black oversized T-shirt" width={1024} height={1280} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center animate-reveal" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-5 pt-20 text-ink-foreground lg:p-8">
              <div><p className="text-xs font-bold uppercase tracking-[0.16em]">Essential Black Tee</p><p className="mt-1 text-xs text-ink-muted">Heavyweight · 240 GSM</p></div>
              <span className="font-display text-2xl">₹599</span>
            </div>
          </div>
          <div className="pointer-events-none absolute right-4 top-4 z-20 hidden vertical-label text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ink-muted lg:block">New Delhi / 28.6139° N</div>
        </section>

        <section aria-label="Brand benefits" className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-[1480px] snap-x overflow-x-auto px-4 sm:grid sm:grid-cols-4 sm:px-6 lg:px-10">
            {[{ icon: ShieldCheck, text: "Premium quality" }, { icon: Shirt, text: "Comfortable fabrics" }, { icon: Scissors, text: "Modern fits" }, { icon: PackageCheck, text: "Easy WhatsApp ordering" }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex min-w-[72vw] snap-start items-center gap-3 border-r border-border px-4 py-5 first:border-l sm:min-w-0 sm:justify-center sm:px-3"><Icon className="h-5 w-5 text-brand" /><span className="text-xs font-bold uppercase tracking-[0.12em]">{text}</span></div>
            ))}
          </div>
        </section>

        <section id="shop" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1480px]">
            <SectionHeading index="01" eyebrow="The S11 collection" title="EVERYDAY, ELEVATED." description="Purposeful fits. Honest fabrics. Tees that hold their shape and your attention." />
            <div className="mt-10 border-y border-border py-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter products">
                  {FILTERS.map((item) => <Button key={item} size="sm" variant={filter === item ? "default" : "ghost"} className="shrink-0" onClick={() => setFilter(item)}>{item}</Button>)}
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-3 md:flex">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{visibleProducts.length} pieces</span>
                  <Select value={sort} onValueChange={(value) => setSort(value as SortMode)}>
                    <SelectTrigger className="h-11 w-[180px] rounded-sm border-border bg-background text-xs font-bold uppercase tracking-[0.08em]" aria-label="Sort products"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="featured">Featured</SelectItem><SelectItem value="low">Price: Low to High</SelectItem><SelectItem value="high">Price: High to Low</SelectItem><SelectItem value="newest">Newest</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />)}
            </div>
          </div>
        </section>

        <section id="best-sellers" className="scroll-mt-20 bg-ink px-4 py-20 text-ink-foreground sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1480px]">
            <SectionHeading dark index="02" eyebrow="S11 most wanted" title="THE ONES EVERYONE’S WEARING" description="Four fits that became instant uniforms." />
            <div className="mt-12 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
              <button type="button" className="group relative min-h-[620px] cursor-pointer overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand" onClick={() => setSelectedProduct(PRODUCTS[2] ?? null)}>
                <img src={redImage} alt="Urban Red Graphic Tee campaign" width={1024} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-9"><div><p className="eyebrow text-ink-muted">Drop 11 / Bestseller</p><h3 className="mt-3 font-display text-3xl uppercase sm:text-5xl">Urban Red<br />Graphic Tee</h3></div><span className="grid h-12 w-12 place-items-center bg-brand text-brand-foreground"><ArrowRight /></span></div>
              </button>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                {PRODUCTS.filter((product) => product.bestseller && product.id !== 3).slice(0, 2).map((product) => <ProductCard key={product.id} product={product} dark compact onOpen={setSelectedProduct} />)}
              </div>
            </div>
            <div className="mt-10 text-center"><Button variant="inverted" size="lg" onClick={() => { setFilter("All"); scrollTo("shop"); }}>Shop best sellers <ArrowRight /></Button></div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 grid lg:grid-cols-2">
          <div className="order-2 flex items-center bg-surface px-5 py-16 sm:px-10 lg:order-1 lg:px-[8vw] lg:py-24">
            <div className="max-w-xl"><p className="eyebrow text-brand">Our point of view</p><h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.92]">Built for everyday.<br />Designed to stand out.</h2><p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground">S11 Clothing creates comfortable, modern and versatile T-shirts for people who want everyday clothing with personality. No noise—just confident fits, tactile fabrics and details that last.</p><div className="mt-10 grid grid-cols-3 border-y border-border py-6"><Stat number="240" label="GSM cotton" /><Stat number="05" label="Core sizes" /><Stat number="01" label="Bold identity" /></div></div>
          </div>
          <div className="order-1 min-h-[420px] lg:order-2 lg:min-h-[720px]"><img src={storyImage} alt="Friends wearing S11 Clothing streetwear in an urban courtyard" width={1200} height={800} loading="lazy" className="h-full w-full object-cover" /></div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1480px]"><SectionHeading index="03" eyebrow="Made with intent" title="QUALITY YOU CAN FEEL." />
            <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {[{ icon: Sparkles, title: "Premium fabric", text: "Dense, breathable cotton selected for softness and structure." }, { icon: Shirt, title: "Comfortable fit", text: "Balanced proportions designed for all-day movement." }, { icon: ShieldCheck, title: "Durable prints", text: "High-quality finishes made to stay sharp wash after wash." }, { icon: Scissors, title: "Finished details", text: "Reinforced seams, ribbed necklines and considered construction." }].map(({ icon: Icon, title, text }, index) => <article key={title} className="border-b border-r border-border p-6 sm:p-8"><span className="font-display text-sm text-brand">0{index + 1}</span><Icon className="mt-12 h-8 w-8" /><h3 className="mt-6 font-display text-xl uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-surface px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1480px]"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><SectionHeading index="04" eyebrow="Community in motion" title="FOLLOW THE S11 STYLE" /><Button asChild variant="outline"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Follow us <Instagram /></a></Button></div>
            <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2">
              {[blackImage, whiteImage, redImage, sandImage, storyImage, blackImage].map((image, index) => <a key={`${image}-${index}`} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label={`View S11 style post ${index + 1}`} className={`group relative overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}><img src={image} alt={["Black oversized T-shirt street style", "White oversized tee styling", "Red graphic tee at night", "Beige essential tee look", "S11 community streetwear", "Premium black tee detail"][index]} width={index === 4 ? 1200 : 1024} height={index === 4 ? 800 : 1280} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? "aspect-square h-full" : "aspect-square"}`} /><span className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-background/90 opacity-0 transition-opacity group-hover:opacity-100"><Instagram className="h-4 w-4" /></span></a>)}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading index="05" eyebrow="Need to know" title="QUESTIONS, ANSWERED." description="Still unsure? Message us on WhatsApp and we’ll help you choose." />
            <Accordion type="single" collapsible className="border-t border-border">
              {[ ["What sizes are available?", "Most styles are available from S to XXL. Availability for each style is shown in its product details."], ["How do I place an order?", "Choose a product, select your size, colour and quantity, then tap Order on WhatsApp. Your order details will be ready to send."], ["Can I choose a different colour?", "Yes. Each product shows its available colours; select your preferred option before ordering."], ["How do I know my size?", "Open our size guide and compare the chest and length measurements with a T-shirt you already own."], ["How will I confirm my order?", "Our team will confirm availability, delivery details and the final total with you directly on WhatsApp."], ["Do you offer returns/exchanges?", "Size exchanges are accepted for unworn items with tags intact. Confirm the current policy with our team before placing your order."] ].map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="py-6 text-left text-base font-bold no-underline hover:no-underline sm:text-lg"><span className="pr-6">{question}</span></AccordionTrigger><AccordionContent className="max-w-2xl pb-6 pr-8 text-sm leading-6 text-muted-foreground sm:text-base">{answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-brand px-5 py-20 text-brand-foreground sm:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center"><p className="eyebrow">Your next essential</p><h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,7rem)] uppercase leading-[0.9]">Ready to upgrade<br />your tee game?</h2><p className="mx-auto mt-7 max-w-xl text-sm leading-6 opacity-80 sm:text-base">Choose your favourite. Select your size and colour. Place your order directly on WhatsApp.</p><Button variant="inverted" size="lg" className="mt-9" onClick={() => scrollTo("shop")}>Shop now <ArrowRight /></Button></div>
        </section>
      </main>

      <footer className="bg-ink px-5 pb-8 pt-16 text-ink-foreground sm:px-8 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-[1480px]"><div className="grid gap-12 border-b border-ink-border pb-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><S11Logo className="text-ink-foreground" /><p className="mt-6 max-w-sm text-sm leading-6 text-ink-muted">Premium everyday streetwear made for comfort, character and the way you actually live.</p></div><FooterLinks title="Shop" links={[["All tees", "shop"], ["New arrivals", "shop"], ["Best sellers", "best-sellers"]]} /><FooterLinks title="Help" links={[["Size guide", "size"], ["FAQ", "faq"], ["Contact", "contact"]]} onSizeGuide={() => setSizeGuideOpen(true)} /><div><p className="eyebrow text-ink-muted">Connect</p><div className="mt-5 flex flex-col gap-3"><a className="footer-link" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp <ArrowRight /></a><a className="footer-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <ArrowRight /></a></div></div></div><div className="flex flex-col gap-3 pt-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-muted sm:flex-row sm:justify-between"><p>© 2026 S11 Clothing. All rights reserved.</p><p>Made to stand out / India</p></div></div>
      </footer>

      <ProductDialog product={selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)} onSizeGuide={() => setSizeGuideOpen(true)} />
      <SizeGuide open={sizeGuideOpen} onOpenChange={setSizeGuideOpen} />
    </div>
  );
}

function SectionHeading({ index, eyebrow, title, description, dark = false }: { index: string; eyebrow: string; title: string; description?: string; dark?: boolean }) {
  return <div className="max-w-4xl"><div className="flex items-center gap-3"><span className="font-display text-xs text-brand">{index}</span><p className={dark ? "eyebrow text-ink-muted" : "eyebrow text-muted-foreground"}>{eyebrow}</p></div><h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,5.4rem)] uppercase leading-[0.92]">{title}</h2>{description && <p className={`mt-5 max-w-lg text-sm leading-6 sm:text-base ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>{description}</p>}</div>;
}

function ProductCard({ product, onOpen, dark = false, compact = false }: { product: Product; onOpen: (product: Product) => void; dark?: boolean; compact?: boolean }) {
  return <article className={`product-card group ${dark ? "text-ink-foreground" : ""}`}><button type="button" className={`relative block w-full cursor-pointer overflow-hidden bg-product focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${compact ? "aspect-[4/3] lg:aspect-[2/1]" : "aspect-[4/5]"}`} onClick={() => onOpen(product)} aria-label={`View ${product.name}`}><img src={product.image} alt={`${product.name} by S11 Clothing`} width={1024} height={1280} loading="lazy" style={{ objectPosition: product.imagePosition ?? "center" }} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />{product.newArrival && <span className="absolute left-3 top-3 bg-brand px-2.5 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-brand-foreground">New</span>}<span className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-2 place-items-center bg-background text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"><ArrowRight className="h-4 w-4" /></span></button><div className="pt-4"><p className={`text-[0.62rem] font-semibold uppercase tracking-[0.14em] ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>{product.label}</p><div className="mt-2 flex items-start justify-between gap-2"><h3 className="min-w-0 text-sm font-bold leading-5 sm:text-base">{product.name}</h3><div className="shrink-0 text-right"><span className="text-sm font-extrabold sm:text-base">₹{product.price}</span>{product.originalPrice && <span className={`ml-1 text-[0.65rem] line-through ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>₹{product.originalPrice}</span>}</div></div><div className="mt-3 flex items-center justify-between"><div className="flex -space-x-1" aria-label={`Colours: ${product.colours.join(", ")}`}>{product.colours.map((colour) => <span key={colour} title={colour} className={`colour-dot colour-${colour.toLowerCase()}`} />)}</div><Button variant="ghost" size="sm" className={dark ? "text-ink-foreground hover:bg-ink-surface hover:text-ink-foreground" : ""} onClick={() => onOpen(product)}>View</Button></div></div></article>;
}

function ProductDialog({ product, onOpenChange, onSizeGuide }: { product: Product | null; onOpenChange: (open: boolean) => void; onSizeGuide: () => void }) {
  const [size, setSize] = useState(""); const [colour, setColour] = useState(""); const [quantity, setQuantity] = useState(1); const [attempted, setAttempted] = useState(false);
  const reset = () => { setSize(""); setColour(""); setQuantity(1); setAttempted(false); };
  const order = () => { setAttempted(true); if (!product || !size || !colour) return; const message = `Hi S11 Clothing! I want to order:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nSize: ${size}\nColour: ${colour}\nQuantity: ${quantity}\n\nPlease confirm availability and order details.`; window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); };
  return <Dialog open={Boolean(product)} onOpenChange={(open) => { if (!open) reset(); onOpenChange(open); }}><DialogContent className="max-h-[94svh] w-[calc(100%-1rem)] max-w-5xl overflow-y-auto rounded-none border-0 p-0 sm:rounded-none"><DialogHeader className="sr-only"><DialogTitle>{product?.name ?? "Product details"}</DialogTitle><DialogDescription>Select size, colour and quantity to order on WhatsApp.</DialogDescription></DialogHeader>{product && <div className="grid md:grid-cols-2"><div className="min-h-[360px] bg-product md:min-h-[700px]"><img src={product.image} alt={product.name} width={1024} height={1280} className="h-full w-full object-cover" style={{ objectPosition: product.imagePosition ?? "center" }} /></div><div className="flex flex-col p-5 sm:p-8 md:p-10"><p className="eyebrow text-brand">{product.label}</p><h2 className="mt-4 pr-10 font-display text-3xl uppercase leading-none sm:text-4xl">{product.name}</h2><div className="mt-4 flex items-center gap-2"><span className="text-xl font-extrabold">₹{product.price}</span>{product.originalPrice && <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>}</div><p className="mt-5 text-sm leading-6 text-muted-foreground">{product.description}</p><p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em]"><span className="text-muted-foreground">Fabric / </span>{product.fabric}</p><div className="mt-8"><div className="flex items-center justify-between"><p className="option-label">Select size {size && <span>— {size}</span>}</p><Button variant="link" size="sm" className="h-auto p-0" onClick={onSizeGuide}><Ruler /> Size guide</Button></div><div className="mt-3 grid grid-cols-5 gap-2">{product.sizes.map((item) => <Button key={item} variant={size === item ? "default" : "outline"} className="px-1" onClick={() => setSize(item)} aria-pressed={size === item}>{item}</Button>)}</div>{attempted && !size && <p className="mt-2 text-xs font-semibold text-brand">Please select a size.</p>}</div><div className="mt-7"><p className="option-label">Select colour {colour && <span>— {colour}</span>}</p><div className="mt-3 flex flex-wrap gap-2">{product.colours.map((item) => <Button key={item} variant={colour === item ? "default" : "outline"} onClick={() => setColour(item)} aria-pressed={colour === item}><span className={`colour-dot colour-${item.toLowerCase()}`} />{colour === item && <Check />}{item}</Button>)}</div>{attempted && !colour && <p className="mt-2 text-xs font-semibold text-brand">Please select a colour.</p>}</div><div className="mt-7"><p className="option-label">Quantity — {quantity}</p><div className="mt-3 inline-grid grid-cols-3 border border-border"><Button variant="ghost" size="icon" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} disabled={quantity === 1}><Minus /></Button><span className="grid min-w-12 place-items-center border-x border-border text-sm font-bold">{quantity}</span><Button variant="ghost" size="icon" aria-label="Increase quantity" onClick={() => setQuantity((value) => Math.min(10, value + 1))}><Plus /></Button></div></div><div className="mt-8 border-t border-border pt-6 md:mt-auto"><div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold"><span className={size ? "text-foreground" : "text-muted-foreground"}>Size: {size || "Not selected"}</span><span className={colour ? "text-foreground" : "text-muted-foreground"}>Colour: {colour || "Not selected"}</span><span>Qty: {quantity}</span></div><Button variant="brand" size="lg" className="w-full" onClick={order}>Order on WhatsApp <ArrowRight /></Button><p className="mt-3 text-center text-[0.65rem] leading-5 text-muted-foreground">No payment is taken here. We’ll confirm availability and order details on WhatsApp.</p></div></div></div>}</DialogContent></Dialog>;
}

function SizeGuide({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="w-[calc(100%-1.5rem)] max-w-xl rounded-none p-6 sm:p-8"><DialogHeader><DialogTitle className="font-display text-3xl uppercase">Find your fit</DialogTitle><DialogDescription>Garment measurements in inches. For the best fit, compare with a T-shirt you own.</DialogDescription></DialogHeader><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[360px] border-collapse text-left"><thead><tr className="border-y border-foreground text-xs uppercase tracking-[0.1em]"><th className="py-4">Size</th><th className="py-4">Chest</th><th className="py-4">Length</th></tr></thead><tbody>{[["S", "38\"", "27\""], ["M", "40\"", "28\""], ["L", "42\"", "29\""], ["XL", "44\"", "30\""], ["XXL", "46\"", "31\""]].map((row) => <tr key={row[0]} className="border-b border-border text-sm">{row.map((cell, index) => <td key={cell} className={`py-4 ${index === 0 ? "font-bold" : "text-muted-foreground"}`}>{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-4 text-xs leading-5 text-muted-foreground">Oversized styles are intentionally roomy. Choose your usual size for the intended fit.</p></DialogContent></Dialog>;
}

function Stat({ number, label }: { number: string; label: string }) { return <div><p className="font-display text-2xl sm:text-3xl">{number}</p><p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">{label}</p></div>; }
function FooterLinks({ title, links, onSizeGuide }: { title: string; links: string[][]; onSizeGuide?: () => void }) { return <div><p className="eyebrow text-ink-muted">{title}</p><div className="mt-5 flex flex-col gap-3">{links.map(([label, id]) => id === "size" ? <Button key={label} variant="ghost" className="h-auto justify-start p-0 text-sm normal-case tracking-normal text-ink-foreground hover:bg-transparent hover:text-brand" onClick={onSizeGuide}>{label}</Button> : <a key={label} className="text-sm transition-colors hover:text-brand" href={`#${id}`}>{label}</a>)}</div></div>; }
