import React, { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Star,
  ChevronDown,
} from "lucide-react";

// ============================================================
// CONFIGURAÇÕES DO EVENTO — EDITE AQUI
// ============================================================
const CONFIG = {
  paypalLink: "COLE_O_LINK_DO_PAYPAL_AQUI",
  eventDate: "Sábado, 30 de Maio de 2026",
  eventTime: "10h às 17h",
  eventLocation: "Damascus, MD",
  eventAddress: "Endereço completo em breve",
  price: "$99",
  priceOld: "$197",
  spots: 20,
};

// ============================================================

const Divider = () => (
  <div className="flex items-center gap-4 my-2">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2ed7d0]/20" />
    <div className="h-1.5 w-1.5 rounded-full bg-[#2ed7d0]/40" />
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2ed7d0]/20" />
  </div>
);

const CTAButton = ({ text, href, size = "lg" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#29d6cf] to-[#2ed7d0] font-black uppercase tracking-wider text-[#06162d] shadow-[0_0_50px_rgba(46,215,208,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(46,215,208,0.55)] active:scale-95 ${
      size === "lg"
        ? "min-h-[72px] w-full px-8 text-xl"
        : "min-h-[56px] px-8 text-base"
    }`}
  >
    <span className="relative z-10">{text}</span>
    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    {/* shimmer */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  </a>
);

const InfoBadge = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2ed7d0]/10 text-[#2ed7d0]">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{label}</p>
      <p className="text-base font-black uppercase text-white">{value}</p>
    </div>
  </div>
);

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2ed7d0]" />
    <span className="text-slate-300 text-base leading-relaxed">{children}</span>
  </li>
);

const Testimonial = ({ name, city, text }) => (
  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#2ed7d0] text-[#2ed7d0]" />
      ))}
    </div>
    <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{text}"</p>
    <div>
      <p className="font-black text-white text-sm uppercase">{name}</p>
      <p className="text-[#2ed7d0] text-xs uppercase tracking-wider">{city}</p>
    </div>
  </div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-bold text-white text-sm lg:text-base">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#2ed7d0] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-slate-400 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
};

// Countdown
const useCountdown = (targetDate) => {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
};

const CountBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="rounded-xl border border-[#2ed7d0]/20 bg-[#2ed7d0]/5 px-4 py-3 min-w-[64px] text-center">
      <span className="text-3xl lg:text-4xl font-black text-[#2ed7d0] tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">{label}</span>
  </div>
);

export default function App() {
  const { d, h, m, s } = useCountdown("2026-05-30T10:00:00");

  return (
    <div className="min-h-screen bg-[#06162d] font-sans text-white antialiased selection:bg-[#2ed7d0]/30">

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#2ed7d0 1px, transparent 1px), linear-gradient(90deg, #2ed7d0 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Glow orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#2ed7d0]/[0.04] blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#2ed7d0]/[0.03] blur-[100px] pointer-events-none" />

      <main className="relative z-10 mx-auto max-w-4xl px-5 py-12 lg:py-20">

        {/* ── HERO ── */}
        <section className="mb-16 lg:mb-24 text-center">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2ed7d0]/25 bg-[#2ed7d0]/5 px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ed7d0] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2ed7d0]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0]">
              Workshop Presencial • Damascus, MD
            </span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-balance">
            Do Zero ao<br />
            <span className="text-[#2ed7d0]">Arremate</span>
          </h1>

          <p className="text-lg lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Aprenda em 1 dia como comprar imóveis em leilão nos EUA com segurança e margem.
          </p>

          {/* Info badges row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 max-w-2xl mx-auto">
            <InfoBadge icon={Calendar} label="Data" value="30 de Maio, 2026" />
            <InfoBadge icon={Clock} label="Horário" value="10h às 17h" />
            <InfoBadge icon={MapPin} label="Local" value="Damascus, MD" />
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 mb-4">
              Começa em
            </p>
            <div className="flex items-start justify-center gap-3 lg:gap-5">
              <CountBox value={d} label="Dias" />
              <span className="text-[#2ed7d0]/40 text-3xl font-black mt-2">:</span>
              <CountBox value={h} label="Horas" />
              <span className="text-[#2ed7d0]/40 text-3xl font-black mt-2">:</span>
              <CountBox value={m} label="Min" />
              <span className="text-[#2ed7d0]/40 text-3xl font-black mt-2">:</span>
              <CountBox value={s} label="Seg" />
            </div>
          </div>

          {/* Price + CTA */}
          <div className="max-w-md mx-auto">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="text-slate-500 line-through text-xl font-bold">{CONFIG.priceOld}</span>
              <span className="text-4xl lg:text-5xl font-black text-white">{CONFIG.price}</span>
              <span className="rounded-lg bg-[#2ed7d0]/10 border border-[#2ed7d0]/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#2ed7d0]">
                Oferta
              </span>
            </div>
            <CTAButton text="Garantir Minha Vaga Agora" href={CONFIG.paypalLink} />
            <p className="mt-3 text-[11px] text-slate-600 uppercase tracking-wider">
              Pagamento seguro via PayPal • Vagas limitadas
            </p>
          </div>
        </section>

        <Divider />

        {/* ── INSTRUTOR — AUTORIDADE ── */}
        <section className="my-16 lg:my-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0] mb-3 text-center">
            Quem vai te ensinar
          </p>

          {/* Foto + Bio */}
          <div className="rounded-[2.5rem] border border-[#2ed7d0]/20 bg-[#2ed7d0]/[0.03] p-8 lg:p-12 relative overflow-hidden mb-6">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#2ed7d0]/[0.06] blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">

              {/* FOTO — substitua o src pelo caminho da sua imagem, ex: "/foto-matheus.jpg" */}
              <div className="shrink-0">
                <div className="relative h-36 w-36 lg:h-44 lg:w-44 rounded-2xl overflow-hidden border-2 border-[#2ed7d0]/30 shadow-[0_0_40px_rgba(46,215,208,0.15)]">
                  <img
                    src="/matheus.png"
                    alt="Matheus Oleiro"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 15%" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback se a foto não carregar */}
                  <div className="hidden h-full w-full items-center justify-center bg-[#2ed7d0]/10 text-5xl font-black text-[#2ed7d0]">
                    M
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-4xl font-black uppercase mb-1">Matheus Oleiro</h2>
                <p className="text-[#2ed7d0] text-sm font-bold uppercase tracking-wider mb-4">
                  Investidor Imobiliário • Criador do Método dos 4 Filtros
                </p>
                <p className="text-slate-400 leading-relaxed mb-2">
                  Investidor imobiliário brasileiro baseado na Flórida, especializado em leilões de Tax Deed e foreclosure nos EUA. Mais de $4 milhões negociados.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Ensina brasileiros com capital a entrar no real estate americano com método, segurança e margem real.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {["$4M+ Negociados", "Tax Deed & Foreclosure", "Método dos 4 Filtros", "Florida"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#2ed7d0]/20 bg-[#2ed7d0]/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2ed7d0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Números de autoridade */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "$4M+", label: "em propriedades negociadas nos EUA" },
              { value: "7h", label: "de imersão prática no computador" },
              { value: "20", label: "vagas apenas nesta turma" },
            ].map(({ value, label }) => (
              <div key={value} className="flex flex-col items-center text-center rounded-2xl border border-[#2ed7d0]/15 bg-[#2ed7d0]/[0.03] p-8">
                <span className="text-4xl lg:text-5xl font-black text-[#2ed7d0] mb-2">{value}</span>
                <p className="text-slate-500 text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── PARA QUEM É ── */}
        <section className="my-16 lg:my-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0] mb-3 text-center">
            Este evento é para você se...
          </p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-center mb-4 leading-tight">
            Você tem dinheiro. Mas não sabe<br />
            <span className="text-[#2ed7d0]">onde investir com segurança</span>
          </h2>
          <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-10">
            Milhares de brasileiros nos EUA acumulam capital e ficam parados por medo de errar. Enquanto isso, as melhores oportunidades do mercado imobiliário americano passam por leilão — abaixo do mercado, com margem real.
          </p>

          <ul className="space-y-4 max-w-2xl mx-auto">
            <CheckItem>Você não sabe como analisar uma propriedade antes de comprar</CheckItem>
            <CheckItem>Tem medo de pagar mais do que vale ou de esconder dívidas</CheckItem>
            <CheckItem>Não conhece o processo de leilão nos EUA e isso trava você</CheckItem>
            <CheckItem>Já perdeu oportunidades por não saber o que está olhando</CheckItem>
            <CheckItem>Continua esperando o momento certo enquanto o mercado não para</CheckItem>
          </ul>
        </section>

        <Divider />

        {/* ── O QUE VOCÊ VAI APRENDER ── */}
        <section className="my-16 lg:my-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0] mb-3 text-center">
            Programação do dia
          </p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-center mb-10 leading-tight">
            O que você vai<br />
            <span className="text-[#2ed7d0]">sair sabendo</span>
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { n: "01", t: "Análise de Propriedades", d: "Como avaliar um imóvel em leilão do zero, o que olhar, o que ignorar e onde estão as armadilhas." },
              { n: "02", t: "Contexto de Região", d: "Como entender o mercado local antes de dar um lance. Crescimento, demanda e potencial de valorização." },
              { n: "03", t: "Análise de Mercado", d: "Ferramentas e dados reais para saber se a propriedade é oportunidade ou cilada." },
              { n: "04", t: "Estimativa de Reforma", d: "Como calcular o custo de reforma sem ser surpreendido depois." },
              { n: "05", t: "Valor Máximo de Lance", d: "A fórmula exata para saber até onde ir no leilão sem destruir sua margem." },
              { n: "06", t: "Encontrar Oportunidades", d: "Onde achar leilões, como filtrar os melhores e construir fluxo constante." },
            ].map((item) => (
              <div
                key={item.n}
                className="flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-colors hover:border-[#2ed7d0]/20"
              >
                <span className="text-4xl font-black text-[#2ed7d0]/20 leading-none shrink-0 select-none">
                  {item.n}
                </span>
                <div>
                  <h3 className="font-black text-white text-base uppercase mb-1">{item.t}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── MÉTODO DOS 4 FILTROS ── */}
        <section className="my-16 lg:my-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0] mb-3 text-center">
            O framework
          </p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-center mb-10 leading-tight">
            Método dos<br />
            <span className="text-[#2ed7d0]">4 Filtros</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", label: "Localização", desc: "O imóvel está onde as pessoas querem morar?" },
              { n: "02", label: "Mercado", desc: "O mercado local suporta o preço que você precisa para sair?" },
              { n: "03", label: "Propriedade", desc: "O imóvel tem problemas que vão destruir sua margem?" },
              { n: "04", label: "Financeiro", desc: "Os números fecham com segurança antes do lance?" },
            ].map(({ n, label, desc }) => (
              <div key={n} className="flex flex-col rounded-2xl border border-[#2ed7d0]/15 bg-[#2ed7d0]/[0.03] p-6 transition-colors hover:border-[#2ed7d0]/30">
                <span className="text-5xl font-black text-[#2ed7d0]/20 leading-none mb-4 select-none">{n}</span>
                <h3 className="font-black text-white uppercase text-base mb-2">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── DEPOIMENTOS ── */}
        <section className="my-16 lg:my-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0] mb-3 text-center">
            Resultados reais
          </p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-center mb-10 leading-tight">
            Quem já passou<br />
            <span className="text-[#2ed7d0]">pelo processo</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              name="Rodrigo M."
              city="Orlando, FL"
              text="Em 3 meses de mentoria com o Matheus fiz meu primeiro arremate. A imersão presencial acelerou tudo — saí do evento com um plano de ação claro."
            />
            <Testimonial
              name="Fernanda L."
              city="Miami, FL"
              text="Tinha capital parado e não sabia onde colocar. Hoje tenho 2 imóveis em processo e gero cashflow em dólares todo mês."
            />
            <Testimonial
              name="André S."
              city="Rockville, MD"
              text="O Matheus não fica só na teoria. Ele mostra o processo com números reais. Isso faz toda a diferença."
            />
          </div>
        </section>

        <Divider />

        {/* ── DETALHES DO EVENTO ── */}
        <section className="my-16 lg:my-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0] mb-3 text-center">
            Detalhes
          </p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-center mb-10 leading-tight">
            Informações do<br />
            <span className="text-[#2ed7d0]">Evento</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Calendar, label: "Data", value: "30 Mai 2026", sub: "Sábado" },
              { icon: Clock, label: "Horário", value: "10h às 17h", sub: "7h de imersão prática" },
              { icon: MapPin, label: "Local", value: "Damascus, MD", sub: "Endereço em breve" },
              { icon: Users, label: "Turma", value: `${CONFIG.spots} pessoas`, sub: "Vagas limitadas" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex flex-col items-center text-center rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ed7d0]/10 text-[#2ed7d0]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">{label}</p>
                <p className="font-black text-white uppercase text-base">{value}</p>
                <p className="text-[#2ed7d0] text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── FAQ ── */}
        <section className="my-16 lg:my-24 max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2ed7d0] mb-3 text-center">
            Dúvidas
          </p>
          <h2 className="text-3xl lg:text-4xl font-black uppercase text-center mb-10">
            Perguntas <span className="text-[#2ed7d0]">frequentes</span>
          </h2>
          <div className="space-y-1">
            <FAQItem
              q="Preciso ter experiência com imóveis para participar?"
              a="Não. O evento foi desenhado para quem está começando. Você sai com o processo claro do zero ao primeiro arremate."
            />
            <FAQItem
              q="O evento é só para brasileiros?"
              a="O conteúdo é em português e voltado para brasileiros nos EUA, mas qualquer pessoa que fala português pode participar."
            />
            <FAQItem
              q="Quanto capital preciso ter para começar?"
              a="Isso vai depender do mercado e do tipo de leilão. Abordaremos isso no evento com faixas reais de entrada."
            />
            <FAQItem
              q="O endereço exato já está disponível?"
              a="Ainda não. O endereço completo em Damascus, MD será enviado por e-mail após a confirmação do pagamento."
            />
            <FAQItem
              q="O $99 inclui material de apoio?"
              a="Sim. Você recebe acesso a materiais de apoio para usar durante e após o evento."
            />
          </div>
        </section>

        <Divider />

        {/* ── CTA FINAL ── */}
        <section className="my-16 lg:my-24">
          <div className="relative rounded-[2.5rem] border border-[#2ed7d0]/30 bg-[#2ed7d0]/5 p-8 lg:p-16 text-center overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-96 rounded-full bg-[#2ed7d0]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#2ed7d0]/25 bg-[#2ed7d0]/5 px-4 py-2 mb-6">
                <TrendingUp className="h-3.5 w-3.5 text-[#2ed7d0]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2ed7d0]">
                  Vagas limitadas
                </span>
              </div>

              <h2 className="text-3xl lg:text-6xl font-black uppercase mb-4 leading-tight">
                Invista um dia.<br />
                <span className="text-[#2ed7d0]">Mude sua trajetória.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
                30 de maio em Damascus, MD. Das 10h às 17h. Você sai com método, ferramentas e clareza para agir.
              </p>

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-slate-500 line-through text-xl font-bold">{CONFIG.priceOld}</span>
                <span className="text-5xl font-black text-white">{CONFIG.price}</span>
              </div>

              <div className="max-w-md mx-auto mb-6">
                <CTAButton text="Garantir Minha Vaga Agora — $99" href={CONFIG.paypalLink} />
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-600 text-xs">
                <Shield className="h-3.5 w-3.5" />
                <span className="uppercase tracking-wider">Pagamento seguro via PayPal</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="mt-16 pt-8 border-t border-white/[0.05] text-center">
          <p className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.4em]">
            Matheus Oleiro • Especialista em Leilões USA
          </p>
        </footer>

      </main>
    </div>
  );
}