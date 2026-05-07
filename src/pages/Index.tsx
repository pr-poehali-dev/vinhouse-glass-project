import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О компании", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Home",
    title: "Остекление домов",
    desc: "Панорамное и стандартное остекление частных домов, коттеджей и таунхаусов. Профили REHAU, KBE, VEKA. Монтаж под ключ с гарантией до 10 лет.",
    price: "от 8 500 ₽/м²",
  },
  {
    icon: "Trees",
    title: "Террасы и веранды",
    desc: "Тёплое и холодное остекление открытых террас и веранд. Раздвижные и распашные системы. Защита от ветра, осадков и шума.",
    price: "от 6 200 ₽/м²",
  },
  {
    icon: "Umbrella",
    title: "Беседки",
    desc: "Остекление деревянных и металлических беседок. Поликарбонат, закалённое стекло, алюминиевые рамы. Лёгкий монтаж без фундамента.",
    price: "от 4 800 ₽/м²",
  },
  {
    icon: "Building2",
    title: "Балконы и лоджии",
    desc: "Холодное и тёплое остекление балконов. Французское остекление, раздвижные системы Provedal, утепление и отделка под ключ.",
    price: "от 5 500 ₽/м²",
  },
  {
    icon: "Sun",
    title: "Зимние сады",
    desc: "Проектирование и монтаж зимних садов и оранжерей. Двухкамерные стеклопакеты, тёплые профили, солнцезащитное стекло.",
    price: "от 12 000 ₽/м²",
  },
  {
    icon: "Layers",
    title: "Коммерческое остекление",
    desc: "Остекление офисов, ресторанов, магазинов. Витражи, структурное остекление, алюминиевые фасады. Проектирование и согласование.",
    price: "от 7 000 ₽/м²",
  },
];

const PORTFOLIO = [
  {
    img: "https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/7e6cf168-20bf-43c7-84da-0b31fe31bc88.jpg",
    title: "Панорамный дом",
    tag: "Остекление дома",
    area: "320 м²",
    location: "Красноярск, Солонцы",
  },
  {
    img: "https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/af7d8d3b-f809-4e15-9f69-8eb8d443492e.jpg",
    title: "Беседка в саду",
    tag: "Беседка",
    area: "48 м²",
    location: "Красноярский край, Дрокино",
  },
  {
    img: "https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/b2c239c5-69d8-45fc-b76c-646a5b75e0d2.jpg",
    title: "Зимний сад",
    tag: "Зимний сад",
    area: "64 м²",
    location: "Красноярск, Академгородок",
  },
  {
    img: "https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/a9fd7cce-2133-44e4-a09c-3576cadab9f0.jpg",
    title: "Остекление балкона",
    tag: "Балкон",
    area: "18 м²",
    location: "Красноярск, Взлётка",
  },
  {
    img: "https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/7e6cf168-20bf-43c7-84da-0b31fe31bc88.jpg",
    title: "Терраса у озера",
    tag: "Терраса",
    area: "96 м²",
    location: "Красноярское море",
  },
  {
    img: "https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/af7d8d3b-f809-4e15-9f69-8eb8d443492e.jpg",
    title: "Ресторан «Берег»",
    tag: "Коммерческое",
    area: "210 м²",
    location: "Красноярск, набережная",
  },
];

const REVIEWS = [
  {
    name: "Алексей Петров",
    role: "Владелец коттеджа",
    text: "Обратились в ВинХАУС для остекления загородного дома. Всё сделали чисто, быстро и в срок. Особенно понравился замерщик — объяснил все нюансы, предложил оптимальный вариант. Уже прошла зима — тепло держится отлично.",
    rating: 5,
    date: "Февраль 2025",
  },
  {
    name: "Марина Сидорова",
    role: "Заказчик беседки",
    text: "Заказывала остекление беседки на даче. Приятно удивила скорость работы — уложились за 3 дня. Стекло красивое, рамы аккуратные. Теперь сидим в беседке даже осенью. Рекомендую!",
    rating: 5,
    date: "Сентябрь 2024",
  },
  {
    name: "Дмитрий Козлов",
    role: "Владелец ресторана",
    text: "Остекляли террасу нашего ресторана. Проект согласовали быстро, цена оказалась ниже других подрядчиков. Гости оценили — летняя веранда теперь работает круглый год. Будем сотрудничать по другим объектам.",
    rating: 5,
    date: "Ноябрь 2024",
  },
  {
    name: "Ольга Иванова",
    role: "Частный заказчик",
    text: "Застеклили балкон и сделали внутреннюю отделку. Работой очень довольна — всё аккуратно, без мусора. Отдельное спасибо мастеру Сергею. Цены адекватные, гарантию дали на 7 лет.",
    rating: 5,
    date: "Март 2025",
  },
];

const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "1 800+", label: "реализованных объектов" },
  { value: "10 лет", label: "гарантия на продукцию" },
  { value: "0 ₽", label: "выезд и замер" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");
  const [lightbox, setLightbox] = useState<null | (typeof PORTFOLIO)[0]>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filters = ["Все", "Остекление дома", "Терраса", "Беседка", "Зимний сад", "Балкон", "Коммерческое"];
  const filtered = activeFilter === "Все" ? PORTFOLIO : PORTFOLIO.filter((p) => p.tag === activeFilter);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background font-golos">

      {/* ===== HEADER ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src="https://cdn.poehali.dev/projects/f58e95db-6f35-4b31-8042-469aab08037b/bucket/9e990216-e940-4dd9-9237-e97edea43cc2.jpg"
              alt="ВинХАУС"
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-golos font-medium text-foreground/70 hover:text-[var(--brand-teal)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+73912345678"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-[var(--brand-teal)]"
            >
              <Icon name="Phone" size={15} />
              +7 (391) 234-56-78
            </a>
            <a
              href="#contacts"
              className="hidden sm:inline-flex btn-teal text-sm font-medium px-4 py-2 rounded-md"
            >
              Заказать замер
            </a>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-3 anim-fade-in">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-[var(--brand-teal)] py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+73912345678"
              className="flex items-center gap-2 text-sm font-semibold text-[var(--brand-teal)] pt-2 border-t border-border"
            >
              <Icon name="Phone" size={15} />
              +7 (391) 234-56-78
            </a>
          </div>
        )}
      </header>

      {/* ===== HERO / ОБЛОЖКА ===== */}
      <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
        {/* Фоновое фото на весь экран */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/057ed359-e72f-4a44-a012-d83c453d0ab6.jpg"
            alt="ВинХАУС — остекление"
            className="w-full h-full object-cover"
          />
          {/* Затемнение — снизу темнее, сверху светлее */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f25]/90 via-[#1a1f25]/40 to-[#1a1f25]/10" />
        </div>

        {/* Логотип поверх хедера (только на hero) */}
        <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center pointer-events-none">
          <div className="w-full h-16 bg-gradient-to-b from-black/20 to-transparent" />
        </div>

        {/* Контент */}
        <div className="relative w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
          <div className="max-w-3xl">
            {/* Бэйдж */}
            <div className="anim-fade-up delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-teal)]" />
              <span className="text-xs font-golos font-medium text-white/80 tracking-wide">
                Красноярск · Более 12 лет на рынке
              </span>
            </div>

            <h1 className="anim-fade-up delay-2 font-cormorant text-5xl md:text-6xl lg:text-[5.5rem] font-light leading-[1.0] text-white mb-6">
              Остекление домов,
              <br />
              <em className="not-italic text-[var(--brand-teal)]">террас и беседок</em>
              <br />
              под ключ
            </h1>

            <p className="anim-fade-up delay-3 font-golos text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
              Напрямую от производителя без наценок — монтаж, доставка и гарантия до&nbsp;10&nbsp;лет уже включены.
            </p>

            {/* Теги */}
            <div className="anim-fade-up delay-4 flex flex-wrap gap-3 mb-10">
              {[
                { icon: "Shield", text: "Гарантия до 10 лет" },
                { icon: "Truck", text: "Бесплатный замер" },
                { icon: "CheckCircle", text: "1 800+ объектов" },
                { icon: "Clock", text: "Срок от 2 недель" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5 text-sm text-white/75">
                  <Icon name={b.icon} size={13} className="text-[var(--brand-teal)]" />
                  {b.text}
                </div>
              ))}
            </div>

            <div className="anim-fade-up delay-5 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacts"
                className="btn-teal inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-golos font-semibold text-sm"
              >
                Рассчитать стоимость
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-golos font-medium text-sm border border-white/25 text-white/80 hover:border-white/50 hover:text-white transition-all backdrop-blur-sm"
              >
                Смотреть работы
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-8 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs font-golos text-white tracking-widest uppercase">Scroll</span>
          <Icon name="ChevronDown" size={16} className="text-white" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[var(--brand-dark)] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-cormorant text-4xl font-light text-white mb-1">{s.value}</div>
              <div className="font-golos text-xs text-white/50 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-golos text-xs uppercase tracking-[0.2em] text-[var(--brand-teal)] mb-3">Наши услуги</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--brand-dark)]">
              Что мы делаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="group bg-white border border-border rounded-xl p-7 hover:border-[var(--brand-teal)]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--brand-teal)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-teal)] transition-colors duration-300">
                  <Icon
                    name={s.icon}
                    size={20}
                    className="text-[var(--brand-teal)] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-[var(--brand-dark)] mb-2">{s.title}</h3>
                <p className="font-golos text-sm text-foreground/55 leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-golos text-sm font-semibold text-[var(--brand-teal)]">{s.price}</span>
                  <a
                    href="#contacts"
                    className="font-golos text-xs text-foreground/40 hover:text-[var(--brand-teal)] flex items-center gap-1 transition-colors"
                  >
                    Заказать <Icon name="ArrowRight" size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== КАК МЫ РАБОТАЕМ ===== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-golos text-xs uppercase tracking-[0.2em] text-[var(--brand-teal)] mb-3">Процесс</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--brand-dark)]">
              Как мы работаем
            </h2>
            <p className="font-golos text-sm text-foreground/50 mt-3 max-w-md mx-auto">
              От первого звонка до сдачи объекта — прозрачно и в срок
            </p>
          </div>

          {/* Шаги */}
          <div className="relative">
            {/* Линия-коннектор (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/30 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  num: "01",
                  icon: "Phone",
                  title: "Заявка",
                  desc: "Оставляете заявку — звоним в течение 15 минут и уточняем задачу",
                },
                {
                  num: "02",
                  icon: "Ruler",
                  title: "Замер",
                  desc: "Выезжаем бесплатно, делаем точные замеры и готовим коммерческое предложение",
                },
                {
                  num: "03",
                  icon: "FileText",
                  title: "Договор",
                  desc: "Фиксируем сроки, стоимость и гарантии — всё прописано в договоре",
                },
                {
                  num: "04",
                  icon: "Settings",
                  title: "Монтаж",
                  desc: "Собственные бригады выполняют работы чисто и в оговорённые сроки",
                },
                {
                  num: "05",
                  icon: "CheckCircle",
                  title: "Сдача",
                  desc: "Принимаете работу, подписываем акт — гарантия вступает в силу",
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Иконка-круг */}
                  <div className="relative mb-5">
                    <div className="w-24 h-24 rounded-full bg-[var(--brand-light)] border-2 border-[var(--brand-teal)]/20 group-hover:border-[var(--brand-teal)] group-hover:bg-[var(--brand-teal)]/8 transition-all duration-300 flex items-center justify-center">
                      <Icon name={step.icon} size={28} className="text-[var(--brand-teal)]" />
                    </div>
                    {/* Номер */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[var(--brand-teal)] flex items-center justify-center">
                      <span className="font-golos text-[10px] font-bold text-white">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold text-[var(--brand-dark)] mb-2">{step.title}</h3>
                  <p className="font-golos text-xs text-foreground/50 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA под блоком */}
          <div className="mt-14 text-center">
            <a
              href="#contacts"
              className="btn-teal inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-golos font-semibold text-sm"
            >
              Начать — оставить заявку
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className="py-24 bg-[var(--brand-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="font-golos text-xs uppercase tracking-[0.2em] text-[var(--brand-teal)] mb-3">Наши работы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--brand-dark)] mb-6">
              Реализованные проекты
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-golos font-medium transition-all ${
                  activeFilter === f
                    ? "bg-[var(--brand-teal)] text-white"
                    : "bg-white border border-border text-foreground/60 hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="gallery-item rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer group"
                onClick={() => setLightbox(p)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--brand-dark)]/0 group-hover:bg-[var(--brand-dark)]/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Icon name="ZoomIn" size={20} className="text-[var(--brand-teal)]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-[var(--brand-teal)] text-white text-xs font-golos font-medium px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-cormorant text-lg font-semibold text-[var(--brand-dark)] mb-1">{p.title}</h3>
                  <div className="flex items-center justify-between text-xs text-foreground/45 font-golos">
                    <span className="flex items-center gap-1">
                      <Icon name="MapPin" size={11} />
                      {p.location}
                    </span>
                    <span>{p.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 anim-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.img} alt={lightbox.title} className="w-full aspect-video object-cover" />
            <div className="p-5 flex items-start justify-between">
              <div>
                <span className="text-xs font-golos font-medium text-[var(--brand-teal)] uppercase tracking-wider">
                  {lightbox.tag}
                </span>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--brand-dark)] mt-1">{lightbox.title}</h3>
                <p className="font-golos text-sm text-foreground/50 mt-1 flex items-center gap-1">
                  <Icon name="MapPin" size={13} /> {lightbox.location} · {lightbox.area}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Левая колонка */}
            <div>
              <p className="font-golos text-xs uppercase tracking-[0.2em] text-[var(--brand-teal)] mb-3">О компании</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--brand-dark)] mb-6 leading-tight">
                ВинХАУС —<br />
                <em className="not-italic text-[var(--brand-teal)]">надёжный партнёр</em>
                <br />в остеклении
              </h2>
              <p className="font-golos text-sm text-foreground/60 leading-relaxed mb-4">
                Компания ВинХАУС работает на рынке остекления Красноярска с 2012 года. За это время
                мы реализовали более 1 800 объектов — от небольших балконов до крупных коммерческих
                фасадов.
              </p>
              <p className="font-golos text-sm text-foreground/60 leading-relaxed mb-8">
                Мы работаем напрямую с производителями профилей REHAU, KBE и VEKA, что позволяет
                предлагать цены ниже рынка без потери качества. Каждый объект — от замера до сдачи
                — ведёт персональный менеджер.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", title: "Сертифицированные профили", desc: "REHAU, KBE, VEKA" },
                  { icon: "Users", title: "Собственные бригады", desc: "Без субподряда" },
                  { icon: "Clock", title: "Сроки соблюдаем", desc: "Договорные гарантии" },
                  { icon: "HeartHandshake", title: "Гарантия до 10 лет", desc: "На все виды работ" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[var(--brand-light)] rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-teal)]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon} size={17} className="text-[var(--brand-teal)]" />
                    </div>
                    <div>
                      <div className="font-golos text-xs font-semibold text-[var(--brand-dark)]">{f.title}</div>
                      <div className="font-golos text-xs text-foreground/50 mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка — фото */}
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/2456b3b6-fcde-43e4-ae3b-bcb7daeeee88/files/b2c239c5-69d8-45fc-b76c-646a5b75e0d2.jpg"
                alt="О компании ВинХАУС"
                className="rounded-2xl w-full aspect-[4/5] object-cover shadow-xl"
              />
              {/* Плашка поверх */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-lg border border-border">
                <div className="font-cormorant text-3xl font-semibold text-[var(--brand-teal)]">12+</div>
                <div className="font-golos text-xs text-foreground/60">лет опыта</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-[var(--brand-teal)] rounded-xl p-4 shadow-lg text-white">
                <div className="font-cormorant text-3xl font-semibold">1800+</div>
                <div className="font-golos text-xs text-white/70">объектов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="py-24 bg-[var(--brand-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-golos text-xs uppercase tracking-[0.2em] text-[var(--brand-teal)] mb-3">Отзывы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--brand-dark)]">
              Что говорят клиенты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-border hover:border-[var(--brand-teal)]/30 hover:shadow-md transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-golos text-sm text-foreground/65 leading-relaxed mb-5">
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="font-golos text-sm font-semibold text-[var(--brand-dark)]">{r.name}</div>
                    <div className="font-golos text-xs text-foreground/45">{r.role}</div>
                  </div>
                  <div className="font-golos text-xs text-foreground/35">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-golos text-xs uppercase tracking-[0.2em] text-[var(--brand-teal)] mb-3">Контакты</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--brand-dark)]">
              Свяжитесь с нами
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14">
            {/* Контактная информация */}
            <div>
              <p className="font-golos text-sm text-foreground/60 leading-relaxed mb-8">
                Оставьте заявку — перезвоним в течение 15 минут и запишем на бесплатный выезд
                замерщика. Работаем ежедневно с 9:00 до 21:00.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (391) 234-56-78", href: "tel:+73912345678" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 (391) 234-56-78", href: "#" },
                  { icon: "MapPin", label: "Офис", value: "г. Красноярск, ул. Взлётная, д. 28, оф. 4", href: "#" },
                  { icon: "Clock", label: "Режим работы", value: "Ежедневно 9:00 – 21:00", href: "#" },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-4 p-4 bg-[var(--brand-light)] rounded-xl hover:bg-[var(--brand-teal)]/8 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-teal)]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-teal)] transition-colors">
                      <Icon name={c.icon} size={18} className="text-[var(--brand-teal)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-golos text-xs text-foreground/45">{c.label}</div>
                      <div className="font-golos text-sm font-medium text-[var(--brand-dark)]">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Форма */}
            <div className="bg-[var(--brand-light)] rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[var(--brand-teal)]/15 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-[var(--brand-teal)]" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--brand-dark)] mb-2">Заявка отправлена!</h3>
                  <p className="font-golos text-sm text-foreground/55">
                    Перезвоним в течение 15 минут в рабочее время
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--brand-dark)] mb-6">
                    Заказать бесплатный замер
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-golos text-xs text-foreground/55 mb-1.5">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full bg-white border border-border rounded-lg px-4 py-3 font-golos text-sm outline-none focus:border-[var(--brand-teal)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-golos text-xs text-foreground/55 mb-1.5">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-white border border-border rounded-lg px-4 py-3 font-golos text-sm outline-none focus:border-[var(--brand-teal)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-golos text-xs text-foreground/55 mb-1.5">Что нужно сделать?</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите об объекте…"
                        rows={3}
                        className="w-full bg-white border border-border rounded-lg px-4 py-3 font-golos text-sm outline-none focus:border-[var(--brand-teal)] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-teal w-full py-3.5 rounded-lg font-golos font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      Отправить заявку
                      <Icon name="ArrowRight" size={16} />
                    </button>
                    <p className="font-golos text-xs text-foreground/35 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[var(--brand-dark)] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/projects/f58e95db-6f35-4b31-8042-469aab08037b/bucket/9e990216-e940-4dd9-9237-e97edea43cc2.jpg"
                alt="ВинХАУС"
                className="h-8 w-auto object-contain brightness-0 invert opacity-80"
              />
            </div>
            <nav className="flex flex-wrap justify-center gap-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-golos text-xs text-white/40 hover:text-white/80 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="font-golos text-xs text-white/30 text-center md:text-right">
              © 2025 ВинХАУС<br />Красноярск · +7 (391) 234-56-78
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a
        href="tel:+73912345678"
        className="fixed bottom-6 right-6 z-40 btn-teal w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        title="Позвонить"
      >
        <Icon name="Phone" size={22} />
      </a>
    </div>
  );
}