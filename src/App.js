import React from "react";
import { 
  CheckCircle2, 
  MessageCircle, 
  Play, 
  Calendar, 
  Bell 
} from "lucide-react";

// Componente de Botão do WhatsApp Estilizado
const GreenCTAButton = ({ text, href, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex min-h-[70px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#29d6cf] to-[#2ed7d0] px-8 text-xl font-black uppercase tracking-wider text-[#06162d] shadow-[0_0_40px_rgba(46,215,208,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(46,215,208,0.5)] active:scale-95 ${className}`}
  >
    <MessageCircle className="mr-3 h-6 w-6" />
    <span className="relative z-10">{text}</span>
  </a>
);

export default function App() {
  // ==========================================================
  // CONFIGURAÇÕES - COLE SEU LINK DO WHATSAPP AQUI
  // ==========================================================
  const whatsappGroupLink = "https://chat.whatsapp.com/SEU_LINK_AQUI";
  
  // Link do vídeo ZSyoFbYAH9k otimizado para evitar Erro 150/153
  const videoEmbedUrl = "https://www.youtube.com/embed/ZSyoFbYAH9k?rel=0&modestbranding=1&playsinline=1&showinfo=0";

  return (
    <div className="min-h-screen bg-[#06162d] text-white font-sans antialiased selection:bg-[#2ed7d0]/30">
      
      {/* Grid de fundo sutil */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#2ed7d0 1px, transparent 1px), linear-gradient(90deg, #2ed7d0 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-10 lg:py-20">
        
        {/* Header de Confirmação */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-16">
          <div className="mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-[#2ed7d0]/10 text-[#2ed7d0] shadow-[0_0_40px_rgba(46,215,208,0.2)]">
            <CheckCircle2 className="h-10 w-10 lg:h-12 lg:w-12" />
          </div>
          <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-4 leading-none text-balance">
            Inscrição <br className="lg:hidden" /> <span className="text-[#2ed7d0]">Confirmada!</span>
          </h1>
          <p className="text-lg lg:text-2xl text-slate-400 max-w-2xl font-medium">
            Você deu o primeiro passo. Assista ao vídeo abaixo para saber como acessar a Sala Secreta.
          </p>
        </div>

        {/* Player de Vídeo Responsivo */}
        <div className="relative mb-12 lg:mb-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2ed7d0]/20 to-transparent blur-3xl opacity-30 transition duration-1000 group-hover:opacity-60"></div>
          
          <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-[2.5rem] border border-white/10 bg-black shadow-2xl" 
               style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src={videoEmbedUrl}
              title="Vídeo de Boas-vindas Masterclass"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-3 text-[#2ed7d0] font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
            <Play className="h-4 w-4 fill-current animate-pulse" />
            <span>Aperte o play para as instruções</span>
          </div>
        </div>

        {/* Bloco de Ação do WhatsApp */}
        <div className="relative rounded-[2.5rem] border border-[#2ed7d0]/30 bg-[#2ed7d0]/5 p-8 lg:p-14 text-center backdrop-blur-md mb-16 overflow-hidden">
          {/* Decoração interna */}
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-[#2ed7d0]/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-5xl font-black uppercase mb-6 leading-tight">
              Acesse o <span className="text-[#2ed7d0]">Grupo VIP</span>
            </h2>
            <p className="text-slate-300 text-base lg:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
              É por aqui que você receberá o link da aula e os materiais de apoio. Sua presença no grupo é indispensável.
            </p>
            
            <div className="max-w-md mx-auto">
              <GreenCTAButton 
                text="Entrar no Grupo de Alunos" 
                href={whatsappGroupLink} 
              />
            </div>
          </div>
        </div>

        {/* Grid de Informações Rápidas */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="h-12 w-12 rounded-xl bg-[#2ed7d0]/10 flex items-center justify-center text-[#2ed7d0] shrink-0">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-1">Data e Hora</h4>
              <p className="text-lg font-black uppercase">26 MAR • 20H (BR)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="h-12 w-12 rounded-xl bg-[#2ed7d0]/10 flex items-center justify-center text-[#2ed7d0] shrink-0">
              <Bell className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-1">Atenção</h4>
              <p className="text-lg font-black uppercase">Cheque seu E-mail</p>
            </div>
          </div>
        </div>

        {/* Rodapé Slim */}
        <footer className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">
            Matheus Oleiro • Especialista em Leilões USA
          </p>
        </footer>

      </main>
    </div>
  );
}