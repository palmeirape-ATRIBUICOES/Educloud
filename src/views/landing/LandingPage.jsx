import React from 'react';
import { 
  Cloud, 
  Palette, 
  DollarSign, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  Smartphone, 
  ShieldCheck, 
  Users,
  Star
} from 'lucide-react';

export default function LandingPage({ onEnterApp }) {
  return (
    <div className="landing-container" style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* HEADER / NAVBAR DA LANDING PAGE */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 2rem',
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        backgroundColor: '#ffffff',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem', color: '#0284c7' }}>
          <Cloud size={24} />
          <span>EduCloud</span>
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#funcionalidades" style={{ textDecoration: 'none', color: '#475569', fontSize: '0.95rem', fontWeight: 500 }}>Funcionalidades</a>
          <a href="#precos" style={{ textDecoration: 'none', color: '#475569', fontSize: '0.95rem', fontWeight: 500 }}>Planos</a>
          <a href="#mobile" style={{ textDecoration: 'none', color: '#475569', fontSize: '0.95rem', fontWeight: 500 }}>Aplicativo</a>
          <button 
            className="btn btn-primary" 
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            onClick={onEnterApp}
          >
            Acessar Portal Demo <ArrowRight size={16} />
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#eff6ff',
          color: '#1d4ed8',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1.5rem'
        }}>
          <Star size={14} /> Plataforma 100% White-Label para Escolas Particulares
        </div>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          color: '#0f172a'
        }}>
          Seu aplicativo escolar,<br />
          <span style={{ color: '#0284c7' }}>com a marca da sua escola.</span>
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#475569',
          maxWidth: '700px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.6
        }}>
          Ofereça um portal completo para Pais, Professores e Alunos. Personalize as cores, envie comunicados, controle notas e emita boletos automáticos. Tudo sob o seu próprio domínio.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button 
            className="btn btn-primary" 
            style={{ padding: '0.75rem 1.5rem', fontSize: '1.05rem' }}
            onClick={onEnterApp}
          >
            Experimentar Demonstração
          </button>
          <a href="#precos" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '1.05rem', textDecoration: 'none' }}>
            Ver Planos e Preços
          </a>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Tudo o que sua escola precisa</h2>
          <p style={{ color: '#475569', marginTop: '0.5rem' }}>Uma plataforma de gestão ponta a ponta fácil de usar para todos.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          
          <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <div style={{ color: '#0284c7', marginBottom: '1rem' }}><Palette size={32} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Personalização White-Label</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Troque as cores, coloque o logotipo e a foto de fundo da escola. O app é seu e reflete a sua identidade institucional.
            </p>
          </div>

          <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <div style={{ color: '#0284c7', marginBottom: '1rem' }}><DollarSign size={32} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Mensalidades no PIX e Boleto</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Integração financeira completa. Emissão automática de boletos e chaves PIX para os pais com atualização em tempo real no dashboard.
            </p>
          </div>

          <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <div style={{ color: '#0284c7', marginBottom: '1rem' }}><MessageSquare size={32} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Canais de Mensagens Auditados</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Chat seguro entre professores e responsáveis. A direção escolar monitora e acompanha as conversas para garantir a segurança.
            </p>
          </div>

          <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <div style={{ color: '#0284c7', marginBottom: '1rem' }}><CheckCircle size={32} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Boletim & Notas Dinâmicas</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Professores lançam as notas mensais e semestrais em tabelas simples e os pais visualizam boletins interativos instantaneamente.
            </p>
          </div>

          <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <div style={{ color: '#0284c7', marginBottom: '1rem' }}><Smartphone size={32} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Notificações & Frequência</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Faça chamada digital diária. Pais recebem avisos imediatos se o aluno faltar, mantendo o controle total da presença.
            </p>
          </div>

          <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <div style={{ color: '#0284c7', marginBottom: '1rem' }}><ShieldCheck size={32} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Painel da Direção</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Controle inadimplência, aprove a confecção de uniformes/roupas para datas festivas e publique comunicados gerais no mural.
            </p>
          </div>

        </div>
      </section>

      {/* PLANOS E PREÇOS */}
      <section id="precos" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Planos simples que cabem no bolso</h2>
          <p style={{ color: '#475569', marginTop: '0.5rem' }}>Pague um valor fixo mensal de acordo com o número de alunos da sua escola.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          
          {/* PLANO BÁSICO */}
          <div style={{
            padding: '2.5rem 2rem',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Plano Crescimento</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Para escolas com até 150 alunos.</p>
              <div style={{ margin: '1.5rem 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>R$ 1,90</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}> / aluno ao mês</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> Personalização Básica (Logo e Cores)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> Notas e Boletim Online</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> Boletim e Frequência Digital</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> Mural Geral de Avisos</li>
              </ul>
            </div>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '2rem' }} onClick={onEnterApp}>
              Testar Demo Grátis
            </button>
          </div>

          {/* PLANO PROFISSIONAL */}
          <div style={{
            padding: '2.5rem 2rem',
            border: '2px solid #0284c7',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '24px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '0.2rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700
            }}>RECOMENDADO</div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Plano Escolar Pro</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Para escolas acima de 150 alunos.</p>
              <div style={{ margin: '1.5rem 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>R$ 1,50</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}> / aluno ao mês</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> <strong>Personalização Completa (White-Label)</strong></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> <strong>Mapeamento de Domínio Próprio</strong></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> Emissão ilimitada de PIX / Boleto</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> Chat Direto com Pais & Auditoria</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#16a34a' }} /> Chamada e Frequência Digital</li>
              </ul>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }} onClick={onEnterApp}>
              Contratar Plataforma
            </button>
          </div>

        </div>
      </section>

      {/* MOBILE APP BANNER */}
      <section id="mobile" style={{
        padding: '5rem 2rem',
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Pronto para rodar no Celular e no Desktop</h2>
          <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Graças à nossa arquitetura PWA e empacotamento nativo via Capacitor, os pais de alunos e professores acessam o app de forma ultra-veloz, podendo cadastrar a plataforma diretamente na tela inicial do celular com apenas um clique.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#ffffff', minWidth: '150px' }}>
              <span style={{ fontSize: '1.5rem' }}>📱</span>
              <h4 style={{ fontWeight: 700, marginTop: '0.5rem' }}>PWA Instalável</h4>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>Instala sem ir à loja de aplicativos</p>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#ffffff', minWidth: '150px' }}>
              <span style={{ fontSize: '1.5rem' }}>🤖</span>
              <h4 style={{ fontWeight: 700, marginTop: '0.5rem' }}>Nativo Android</h4>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>Disponibilize na Play Store</p>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#ffffff', minWidth: '150px' }}>
              <span style={{ fontSize: '1.5rem' }}>🍎</span>
              <h4 style={{ fontWeight: 700, marginTop: '0.5rem' }}>Nativo iOS</h4>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>Compatível com App Store</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '3rem 2rem',
        borderTop: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 EduCloud - Sistema de Gestão Escolar White-Label. Todos os direitos reservados.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Desenvolvido como SaaS Escolar Premium de Alta Performance.</p>
      </footer>

    </div>
  );
}
