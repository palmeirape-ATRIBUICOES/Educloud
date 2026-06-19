import React, { useState, useEffect } from 'react';
import { 
  School, 
  Users, 
  DollarSign, 
  Megaphone, 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  Eye, 
  Settings, 
  Palette, 
  Plus, 
  Check, 
  X, 
  Send, 
  FileText, 
  TrendingUp, 
  UserCheck, 
  AlertCircle,
  Clock,
  ArrowRight,
  ChevronRight,
  ClipboardList,
  Home,
  Briefcase,
  Layers,
  FileSpreadsheet,
  AlertTriangle,
  Lock,
  UserPlus,
  Shield,
  Upload,
  Trash2,
  Search,
  CheckCircle,
  XCircle
} from 'lucide-react';

import LandingPage from './views/landing/LandingPage';

// === CORES PREDEFINIDAS PARA O ONBOARDING WHITE-LABEL ===
const PALETTES = [
  { name: "Azul Sky", color: "#2563eb", hover: "#1d4ed8" },
  { name: "Verde Esmeralda", color: "#0f766e", hover: "#0d9488" },
  { name: "Verde Floresta", color: "#16a34a", hover: "#15803d" },
  { name: "Roxo Royal", color: "#7c3aed", hover: "#6d28d9" },
  { name: "Rosa Vibrante", color: "#db2777", hover: "#c11f6d" }
];

// Componente de Avatar Visualmente Atraente (Sem placeholders)
function Avatar({ type, size = 40, photoUrl = '', style = {} }) {
  if (photoUrl && (photoUrl.startsWith('data:') || photoUrl.startsWith('blob:') || photoUrl.startsWith('http'))) {
    return (
      <img 
        src={photoUrl} 
        alt="Foto de Perfil" 
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          borderRadius: '50%', 
          objectFit: 'cover', 
          border: '2px solid var(--primary-color)',
          ...style 
        }} 
      />
    );
  }

  const renderSvg = () => {
    switch (type) {
      case 'arthur':
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#dbeafe" />
            <path d="M16 28 C 16 12, 48 12, 48 28 C 44 24, 38 28, 32 26 C 26 28, 20 24, 16 28 Z" fill="#1e3a8a" />
            <circle cx="32" cy="33" r="14" fill="#fed7aa" />
            <circle cx="28" cy="31" r="2" fill="#1e293b" />
            <circle cx="36" cy="31" r="2" fill="#1e293b" />
            <path d="M28 38 Q32 42 36 38" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 52 C 18 45, 46 45, 46 52 L 46 64 L 18 64 Z" fill="#2563eb" />
          </svg>
        );
      case 'beatriz':
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#fce7f3" />
            <circle cx="16" cy="24" r="7" fill="#eab308" />
            <circle cx="48" cy="24" r="7" fill="#eab308" />
            <path d="M16 28 C 16 14, 48 14, 48 28" fill="#eab308" />
            <circle cx="32" cy="33" r="14" fill="#fed7aa" />
            <circle cx="28" cy="31" r="2" fill="#1e293b" />
            <circle cx="36" cy="31" r="2" fill="#1e293b" />
            <path d="M28 38 Q32 42 36 38" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 52 C 18 45, 46 45, 46 52 L 46 64 L 18 64 Z" fill="#db2777" />
          </svg>
        );
      case 'carlos':
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#f1f5f9" />
            <path d="M18 24 C 18 10, 46 10, 46 24" fill="#0f172a" />
            <circle cx="32" cy="32" r="15" fill="#fdd1a9" />
            <path d="M17 32 C 17 44, 47 44, 47 32" stroke="#0f172a" strokeWidth="3" fill="none" />
            <rect x="22" y="27" width="8" height="6" rx="2" stroke="#475569" strokeWidth="2" fill="none" />
            <rect x="34" y="27" width="8" height="6" rx="2" stroke="#475569" strokeWidth="2" fill="none" />
            <line x1="30" y1="30" x2="34" y2="30" stroke="#475569" strokeWidth="2" />
            <path d="M29 39 Q32 41 35 39" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 54 C 14 46, 50 46, 50 54 L 50 64 L 14 64 Z" fill="#334155" />
          </svg>
        );
      case 'tia':
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#faf5ff" />
            <path d="M14 36 C 10 18, 54 18, 50 36 C 46 40, 44 26, 32 26 C 20 26, 18 40, 14 36 Z" fill="#b45309" />
            <circle cx="32" cy="32" r="14" fill="#fed7aa" />
            <circle cx="28" cy="30" r="2" fill="#1e293b" />
            <circle cx="36" cy="30" r="2" fill="#1e293b" />
            <path d="M28 37 Q32 41 36 37" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 52 C 18 45, 46 45, 46 52 L 46 64 L 18 64 Z" fill="#7c3aed" />
          </svg>
        );
      case 'tio':
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#eff6ff" />
            <path d="M18 24 C 18 10, 46 10, 46 24" fill="#1e40af" />
            <circle cx="32" cy="32" r="14" fill="#fed7aa" />
            <circle cx="28" cy="30" r="2" fill="#1e293b" />
            <circle cx="36" cy="30" r="2" fill="#1e293b" />
            <path d="M28 37 Q32 40 36 37" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 52 C 18 45, 46 45, 46 52 L 46 64 L 18 64 Z" fill="#1e40af" />
          </svg>
        );
      case 'driver':
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#f0fdf4" />
            <path d="M20 20 C 20 12, 44 12, 44 20 L 46 24 L 18 24 Z" fill="#15803d" />
            <path d="M16 23 L 48 23" stroke="#166534" strokeWidth="3" />
            <circle cx="32" cy="34" r="14" fill="#fdd1a9" />
            <circle cx="27" cy="32" r="2" fill="#1e293b" />
            <circle cx="37" cy="32" r="2" fill="#1e293b" />
            <path d="M26 38 Q32 40 38 38" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            <path d="M18 52 C 18 46, 46 46, 46 52 L 46 64 L 18 64 Z" fill="#166534" />
          </svg>
        );
      case 'grandma':
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#fffbeb" />
            <circle cx="32" cy="14" r="7" fill="#cbd5e1" />
            <path d="M18 26 C 18 14, 46 14, 46 26" fill="#cbd5e1" />
            <circle cx="32" cy="33" r="14" fill="#fed7aa" />
            <circle cx="27" cy="31" r="4" stroke="#475569" strokeWidth="1.5" fill="none" />
            <circle cx="37" cy="31" r="4" stroke="#475569" strokeWidth="1.5" fill="none" />
            <line x1="31" y1="31" x2="33" y2="31" stroke="#475569" strokeWidth="1.5" />
            <path d="M28 39 Q32 42 36 39" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 52 C 18 45, 46 45, 46 52 L 46 64 L 18 64 Z" fill="#d97706" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#e2e8f0" />
            <path d="M18 52 C 18 40, 46 40, 46 52 L 46 64 L 18 64 Z" fill="#94a3b8" />
            <circle cx="32" cy="26" r="11" fill="#94a3b8" />
          </svg>
        );
    }
  };

  return (
    <div 
      className="avatar-container"
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        borderRadius: '50%', 
        overflow: 'hidden', 
        display: 'inline-block',
        flexShrink: 0,
        backgroundColor: '#f1f5f9',
        border: '1px solid var(--border-color)',
        ...style 
      }}
    >
      {renderSvg()}
    </div>
  );
}

export function AppPortal({ onBackToLanding, schoolConfig, setSchoolConfig, schoolData, setSchoolData }) {
  // === ESTADOS DE NAVEGAÇÃO E PERFIL ===
  const [currentRole, setCurrentRole] = useState('parent'); // 'manager' | 'teacher' | 'parent'
  const [activeTab, setActiveTab] = useState('home'); // 'cronograma', 'diretoria', 'home', 'painel', 'secretaria'
  
  // Sub-Views
  const [cronoSubView, setCronoSubView] = useState('list'); // 'list', 'points', 'add-crono', 'add-points'
  const [secreSubView, setSecreSubView] = useState('menu'); // 'menu', 'grades-audit', 'docs', 'enrolls', 'add-cert'

  // === ESTADO DE FILHOS SELECIONADOS (PAIS) ===
  const [selectedChildId, setSelectedChildId] = useState(1); // Arthur (1) ou Beatriz (2)

  // Sincronizar Cores do White-Label
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', schoolConfig.color);
    document.documentElement.style.setProperty('--primary-hover', schoolConfig.hover);
    document.documentElement.style.setProperty('--primary-light', schoolConfig.color + '10');
  }, [schoolConfig]);

  // === BANCO DE DADOS EM MEMÓRIA ===
  const [notices, setNotices] = useState([
    { id: 1, title: "Boas-vindas ao novo portal!", content: `Prezados alunos e responsáveis, o portal da ${schoolConfig.name} está no ar de forma oficial.`, date: "2026-06-18", category: "Geral", author: "Direção" }
  ]);
  
  // Boletos específicos por aluno
  const [boletos, setBoletos] = useState([
    // Arthur Ramos (ID 1)
    { id: "BOL-001", studentId: 1, month: "Junho/2026", dueDate: "10/06/2026", value: 850.00, status: "Pago", payDate: "08/06/2026" },
    { id: "BOL-002", studentId: 1, month: "Julho/2026", dueDate: "10/07/2026", value: 850.00, status: "Pendente", payDate: "-" },
    // Beatriz Ramos (ID 2)
    { id: "BOL-003", studentId: 2, month: "Junho/2026", dueDate: "10/06/2026", value: 720.00, status: "Pendente", payDate: "-" },
    { id: "BOL-004", studentId: 2, month: "Julho/2026", dueDate: "10/07/2026", value: 720.00, status: "Pendente", payDate: "-" }
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: "Feira de Projetos da Escola", date: "27 de Junho, às 14:00", description: "Exposição de projetos acadêmicos com as turmas da escola.", clothingRequest: { needed: true, role: "Apresentador", clothing: "Uniforme de Gala / Roupa Social", options: ["Tamanho P", "Tamanho M", "Tamanho G"] }, rsvp: null, selectedOption: "" }
  ]);
  
  const [agenda, setAgenda] = useState([
    { id: 1, studentId: 1, date: "Amanhã", subject: "Matemática", task: "Exercícios no caderno sobre frações.", type: "Tarefa de Casa" },
    { id: 2, studentId: 2, date: "Amanhã", subject: "Ciências", task: "Leitura do livro de histórias animais.", type: "Leitura" }
  ]);

  // Ciclo de Medicamentos / Saúde (Sincronizado)
  const [medicationAlerts, setMedicationAlerts] = useState([
    { id: 1, studentId: 1, studentName: "Arthur Ramos", className: "5º Ano A", note: "Tomar anti-inflamatório às 15:00 (está na mochila)", time: "15:00", status: 'Pendente', confirmedAt: null, confirmedBy: '' },
    { id: 2, studentId: 2, studentName: "Beatriz Ramos", className: "1º Ano B", note: "Tomar xarope às 10:30 (frasco azul)", time: "10:30", status: 'Pendente', confirmedAt: null, confirmedBy: '' }
  ]);

  // Chats separados por filho (Cada filho tem um professor diferente)
  const [chats, setChats] = useState([
    { 
      id: "chat-child-1", 
      studentId: 1, 
      studentName: "Arthur Ramos", 
      className: "5º Ano A", 
      teacherName: "Profª. Elaine Costa", 
      messages: [
        { sender: "teacher", text: "Olá! Qualquer dúvida com as tarefas escolares de matemática do Arthur, pode falar comigo por aqui.", time: "10:00" }
      ] 
    },
    { 
      id: "chat-child-2", 
      studentId: 2, 
      studentName: "Beatriz Ramos", 
      className: "1º Ano B", 
      teacherName: "Prof. Marcos Silva", 
      messages: [
        { sender: "teacher", text: "Olá! Sou o professor Marcos da Beatriz. Estou à disposição para falar sobre o desenvolvimento dela.", time: "11:00" }
      ] 
    }
  ]);

  const [enrollments, setEnrollments] = useState([
    { id: 1, studentName: "Henrique Ramos", classRequested: "1º Ano", parentName: "Ivan Ramos", status: "Pendente" }
  ]);

  const [certificates, setCertificates] = useState([]);

  // Notas
  const [grades, setGrades] = useState({
    1: { 
      Math: { m1: 8.5, m2: 7.0, sem1: 7.75, annual: 7.75 }, 
      Science: { m1: 9.0, m2: 8.5, sem1: 8.75, annual: 8.75 },
      Portuguese: { m1: 7.8, m2: 8.2, sem1: 8.0, annual: 8.0 },
      History: { m1: 8.2, m2: 8.8, sem1: 8.5, annual: 8.5 },
      Geography: { m1: 7.5, m2: 8.1, sem1: 7.8, annual: 7.8 },
      Arts: { m1: 9.2, m2: 9.6, sem1: 9.4, annual: 9.4 }
    },
    2: { 
      Math: { m1: 6.0, m2: 7.5, sem1: 6.75, annual: 6.75 }, 
      Science: { m1: 8.5, m2: 9.0, sem1: 8.75, annual: 8.75 },
      Portuguese: { m1: 8.0, m2: 8.4, sem1: 8.2, annual: 8.2 },
      History: { m1: 7.2, m2: 7.8, sem1: 7.5, annual: 7.5 },
      Geography: { m1: 6.8, m2: 7.4, sem1: 7.1, annual: 7.1 },
      Arts: { m1: 9.0, m2: 9.0, sem1: 9.0, annual: 9.0 }
    }
  });

  // Estado para visualização detalhada do card de disciplinas
  const [selectedSubjectDetails, setSelectedSubjectDetails] = useState(null);

  // Form states
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeContent, setNewNoticeContent] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [newAgendaSubject, setNewAgendaSubject] = useState(schoolData.teachers[0]?.subject || 'Matemática');
  const [newAgendaTask, setNewAgendaTask] = useState('');
  const [newAgendaDate, setNewAgendaDate] = useState('Amanhã');
  const [newAgendaType, setNewAgendaType] = useState('Tarefa de Casa');
  const [certStudent, setCertStudent] = useState(schoolData.students[0]?.name || '');
  const [certReason, setCertReason] = useState('Consulta Médica');

  // Agenda Escolar - Nova observação do medicamento
  const [newMedNote, setNewMedNote] = useState('');
  const [newMedTime, setNewMedTime] = useState('15:00');

  // Lançamento de notas
  const [selectedStudentForGrades, setSelectedStudentForGrades] = useState(schoolData.students[0]?.id || 1);
  const [editGrades, setEditGrades] = useState({ Math: {}, Science: {} });

  // Calendário - Dia selecionado no modal e estados de edição do Diretor
  const [selectedCalendarDay, setSelectedCalendarDay] = useState(null);
  const [editCalendarType, setEditCalendarType] = useState('green');
  const [editCalendarDesc, setEditCalendarDesc] = useState('');

  useEffect(() => {
    if (grades[selectedStudentForGrades]) {
      setEditGrades(JSON.parse(JSON.stringify(grades[selectedStudentForGrades])));
    }
  }, [selectedStudentForGrades, grades]);

  // Mapeamento Letivo de Junho de 2026 em estado dinâmico
  const [calendarDays, setCalendarDays] = useState(() => {
    const initial = [];
    for (let i = 1; i <= 30; i++) {
      const dayOfWeek = ((i - 1) % 7) + 1;
      let type = 'green';
      let desc = 'Aula Letiva Normal';

      if (dayOfWeek === 6 || dayOfWeek === 7) {
        type = 'red';
        desc = 'Fim de semana - Sem aula';
      } else if (i === 4) {
        type = 'red';
        desc = 'Feriado de Corpus Christi - Sem aula';
      } else if (i === 19) {
        type = 'orange';
        desc = 'Feira de Ciências da Escola (Apresentações de Projetos)';
      } else if (i === 27) {
        type = 'orange';
        desc = 'Festa Junina EduCloud (Danças e barraquinhas típicas)';
      }

      initial.push({ day: i, type, description: desc });
    }
    return initial;
  });

  // Sincronizar formulário de edição do Diretor ao abrir o dia
  useEffect(() => {
    if (selectedCalendarDay) {
      setEditCalendarType(selectedCalendarDay.type);
      setEditCalendarDesc(selectedCalendarDay.description);
    }
  }, [selectedCalendarDay]);

  // === ESTADOS PARA PORTARIA, AUTORIZADOS E DOCUMENTOS ===
  const [authorizedPickups, setAuthorizedPickups] = useState([
    { id: 1, studentId: 1, name: "Mariana Ramos", relationship: "Tia", phone: "(11) 98888-7777", avatarType: "tia", photoUrl: "" },
    { id: 2, studentId: 1, name: "José Silva", relationship: "Motorista", phone: "(11) 97777-6666", avatarType: "driver", photoUrl: "" },
    { id: 3, studentId: 2, name: "Regina Ramos", relationship: "Avó", phone: "(11) 96666-5555", avatarType: "grandma", photoUrl: "" }
  ]);

  const [studentDocuments, setStudentDocuments] = useState([
    { id: 1, studentId: 1, studentName: "Arthur Ramos", docName: "Certidão de Nascimento", status: "Pendente", fileName: "", fileUrl: "", uploadDate: "", feedback: "" },
    { id: 2, studentId: 1, studentName: "Arthur Ramos", docName: "Comprovante de Residência", status: "Aprovado", fileName: "comprovante_residencia_2026.pdf", fileUrl: "mock_url", uploadDate: "18/06/2026", feedback: "Documento verificado e aprovado." },
    { id: 3, studentId: 2, studentName: "Beatriz Ramos", docName: "Certidão de Nascimento", status: "Em Análise", fileName: "certidao_nascimento_beatriz.pdf", fileUrl: "mock_url", uploadDate: "19/06/2026", feedback: "" },
    { id: 4, studentId: 2, studentName: "Beatriz Ramos", docName: "Carteira de Vacinação", status: "Pendente", fileName: "", fileUrl: "", uploadDate: "", feedback: "" }
  ]);

  // Logs de Saída da Portaria
  const [doormanExitLogs, setDoormanExitLogs] = useState([
    { id: 1, studentName: "Arthur Ramos", className: "5º Ano A", authorizedName: "Ivan Ramos", relation: "Pai", time: "18/06/2026 às 17:35" }
  ]);

  // Estados dos formulários de cadastro de autorizados
  const [newAuthName, setNewAuthName] = useState('');
  const [newAuthRelationship, setNewAuthRelationship] = useState('Tia');
  const [newAuthPhone, setNewAuthPhone] = useState('');
  const [newAuthAvatar, setNewAuthAvatar] = useState('tia');
  const [newAuthPhoto, setNewAuthPhoto] = useState('');
  const [isAddingAuth, setIsAddingAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filtros da Portaria
  const [doormanSearch, setDoormanSearch] = useState('');
  const [doormanClassFilter, setDoormanClassFilter] = useState('Todos');
  const [selectedDoormanStudentId, setSelectedDoormanStudentId] = useState(1);

  // Estados da Diretoria para Documentos
  const [newDocReqStudentId, setNewDocReqStudentId] = useState(1);
  const [newDocReqName, setNewDocReqName] = useState('Carteira de Vacinação');
  const [selectedDocForReview, setSelectedDocForReview] = useState(null);
  const [docReviewFeedback, setDocReviewFeedback] = useState('');
  const [docReviewTab, setDocReviewTab] = useState('pending'); // 'pending' | 'all'

  // Handlers
  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNoticeTitle.trim() || !newNoticeContent.trim()) return;
    const notice = {
      id: notices.length + 1,
      title: newNoticeTitle,
      content: newNoticeContent,
      category: "Geral",
      date: new Date().toISOString().split('T')[0],
      author: "Direção"
    };
    setNotices([notice, ...notices]);
    setNewNoticeTitle('');
    setNewNoticeContent('');
    alert("Comunicado publicado com sucesso!");
  };

  const handleAddAgenda = (e) => {
    e.preventDefault();
    if (!newAgendaTask.trim()) return;
    const newTask = {
      id: agenda.length + 1,
      studentId: selectedChildId,
      date: newAgendaDate,
      subject: newAgendaSubject,
      task: newAgendaTask,
      type: newAgendaType
    };
    setAgenda([newTask, ...agenda]);
    setNewAgendaTask('');
    alert("Tarefa adicionada com sucesso!");
    setCronoSubView('list');
  };

  const handleAddMedicationNote = (e) => {
    e.preventDefault();
    if (!newMedNote.trim()) return;
    const activeChildObj = schoolData.students.find(s => s.id === selectedChildId);
    const newAlert = {
      id: medicationAlerts.length + 1,
      studentId: selectedChildId,
      studentName: activeChildObj?.name || "Estudante",
      className: activeChildObj?.class || "Turma",
      note: newMedNote,
      time: newMedTime,
      status: 'Pendente',
      confirmedAt: null,
      confirmedBy: ''
    };
    setMedicationAlerts([newAlert, ...medicationAlerts]);
    setNewMedNote('');
    alert("Recado de saúde enviado à agenda digital do professor!");
  };

  const handleAddCertificate = (e) => {
    e.preventDefault();
    const cert = {
      id: certificates.length + 1,
      studentName: certStudent,
      dateSubmitted: new Date().toLocaleDateString('pt-BR'),
      reason: certReason,
      status: "Aprovado"
    };
    setCertificates([cert, ...certificates]);
    setSchoolData(prev => ({
      ...prev,
      students: prev.students.map(s => s.name === certStudent ? { ...s, attendance: 'Presente' } : s)
    }));
    alert("Atestado registrado com sucesso!");
    setSecreSubView('menu');
  };

  const handleSaveGrades = () => {
    setGrades(prev => ({
      ...prev,
      [selectedStudentForGrades]: editGrades
    }));
    alert("Notas salvas!");
    setCronoSubView('list');
  };

  const handleGradeFieldChange = (subject, period, value) => {
    const val = parseFloat(value) || 0;
    setEditGrades(prev => {
      const sub = { ...prev[subject], [period]: val };
      if (period === 'm1' || period === 'm2') {
        const m1 = period === 'm1' ? val : (prev[subject].m1 || 0);
        const m2 = period === 'm2' ? val : (prev[subject].m2 || 0);
        sub.sem1 = parseFloat(((m1 + m2) / 2).toFixed(2));
        sub.annual = sub.sem1;
      }
      return { ...prev, [subject]: sub };
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const role = currentRole === 'parent' ? 'parent' : 'teacher';
    const activeChatIdForChild = selectedChildId === 1 ? 'chat-child-1' : 'chat-child-2';

    setChats(prev => prev.map(c => {
      if (c.id === activeChatIdForChild) {
        return {
          ...c,
          messages: [
            ...c.messages,
            { sender: role, text: chatInput, time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) }
          ]
        };
      }
      return c;
    }));
    setChatInput('');
  };

  // Filho ativo
  const activeChild = schoolData.students.find(s => s.id === selectedChildId) || schoolData.students[0];
  const activeChildTeacherName = selectedChildId === 1 ? "Profª. Elaine Costa" : "Prof. Marcos Silva";
  const activeChildTeacherSubject = selectedChildId === 1 ? "Matemática" : "Ciências";
  const activeChildChat = chats.find(c => c.studentId === selectedChildId) || chats[0];

  // Informações de Entrada / Saída
  const activeChildSchedule = selectedChildId === 1 
    ? { entry: '13:00', exit: '17:30' }
    : { entry: '07:30', exit: '12:00' };

  // Recados do professor ativos para a turma
  const activeMedAlertsForTeacher = medicationAlerts.filter(m => m.status === 'Pendente' && (currentRole === 'manager' || m.className === '5º Ano A'));

  // Notificações de medicação confirmada visíveis para o pai
  const confirmedMedAlertsForParent = medicationAlerts.filter(m => m.studentId === selectedChildId && m.status === 'Confirmado');

  return (
    <div className="portal-layout">
      
      {/* 1. SIDEBAR (DESKTOP) */}
      <aside className="portal-sidebar">
        <div className="sidebar-header">
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ffffff', color: '#0c1e3f', display: 'flex', alignItems: 'center', justifyArea: 'center', justifyContent: 'center', fontWeight: 'bold'
          }}>
            {schoolConfig.logoText || 'EC'}
          </div>
          <span style={{ fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{schoolConfig.name}</span>
        </div>

        <ul className="sidebar-menu">
          {currentRole !== 'doorman' && (
            <li>
              <button className={`sidebar-menu-btn ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                <Home size={18} /> Início
              </button>
            </li>
          )}
          <li>
            <button className={`sidebar-menu-btn ${activeTab === 'cronograma' ? 'active' : ''}`} onClick={() => { setActiveTab('cronograma'); setCronoSubView('list'); }}>
              <Calendar size={18} /> Cronograma letivo
            </button>
          </li>
          
          {/* DIRETOR (manager) APENAS */}
          {currentRole === 'manager' && (
            <li>
              <button className={`sidebar-menu-btn ${activeTab === 'diretoria' ? 'active' : ''}`} onClick={() => setActiveTab('diretoria')}>
                <Briefcase size={18} /> Diretoria
              </button>
            </li>
          )}

          {/* RESPONSÁVEL (parent) APENAS */}
          {currentRole === 'parent' && (
            <>
              <li>
                <button className={`sidebar-menu-btn ${activeTab === 'painel' ? 'active' : ''}`} onClick={() => setActiveTab('painel')}>
                  <GraduationCap size={18} /> Boletim Escolar
                </button>
              </li>
              <li>
                <button className={`sidebar-menu-btn ${activeTab === 'mensagens' ? 'active' : ''}`} onClick={() => setActiveTab('mensagens')}>
                  <MessageSquare size={18} /> Mensagens
                </button>
              </li>
              <li>
                <button className={`sidebar-menu-btn ${activeTab === 'agenda_digital' ? 'active' : ''}`} onClick={() => setActiveTab('agenda_digital')}>
                  <BookOpen size={18} /> Agenda Digital
                </button>
              </li>
              <li>
                <button className={`sidebar-menu-btn ${activeTab === 'financeiro' ? 'active' : ''}`} onClick={() => setActiveTab('financeiro')}>
                  <DollarSign size={18} /> Financeiro
                </button>
              </li>
              <li>
                <button className={`sidebar-menu-btn ${activeTab === 'autorizados' ? 'active' : ''}`} onClick={() => setActiveTab('autorizados')}>
                  <Users size={18} /> Autorizados a Retirar
                </button>
              </li>
              <li>
                <button className={`sidebar-menu-btn ${activeTab === 'documentos' ? 'active' : ''}`} onClick={() => setActiveTab('documentos')}>
                  <FileText size={18} /> Documentos
                </button>
              </li>
            </>
          )}

          {/* SECRETARIA (manager / teacher) */}
          {(currentRole === 'manager' || currentRole === 'teacher') && (
            <li>
              <button className={`sidebar-menu-btn ${activeTab === 'secretaria' ? 'active' : ''}`} onClick={() => { setActiveTab('secretaria'); setSecreSubView('menu'); }}>
                <FileText size={18} /> Secretaria
              </button>
            </li>
          )}

          {/* DOCUMENTOS DIRETOR (manager) */}
          {currentRole === 'manager' && (
            <li>
              <button className={`sidebar-menu-btn ${activeTab === 'documentos' ? 'active' : ''}`} onClick={() => setActiveTab('documentos')}>
                <FileText size={18} /> Documentos
              </button>
            </li>
          )}

          {/* PORTEIRO (doorman) APENAS */}
          {currentRole === 'doorman' && (
            <li>
              <button className={`sidebar-menu-btn ${activeTab === 'portaria' ? 'active' : ''}`} onClick={() => setActiveTab('portaria')}>
                <Shield size={18} /> Portaria
              </button>
            </li>
          )}
        </ul>

        <div className="sidebar-footer">
          <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Perfil de Acesso</div>
          <select className="form-select" style={{ backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155', fontSize: '0.85rem' }} value={currentRole} onChange={e => { setCurrentRole(e.target.value); setActiveTab(e.target.value === 'doorman' ? 'portaria' : 'home'); }}>
            <option value="parent">Responsável (Ivan Ramos)</option>
            <option value="teacher">Professora (Elaine Costa - 5º Ano A)</option>
            <option value="manager">Diretor(a)</option>
            <option value="doorman">Porteiro (Tablet)</option>
          </select>
        </div>

      </aside>

      {/* 2. MAIN AREA */}
      <div className="portal-main">
        {/* TOP NAVBAR */}
        <header className="portal-navbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ fontWeight: 700, color: 'var(--text-main)' }}>
              {activeTab === 'home' && "Portal Integrado"}
              {activeTab === 'cronograma' && "Mural Letivo"}
              {activeTab === 'diretoria' && "Diretoria e Auditoria"}
              {activeTab === 'painel' && "Boletim Escolar"}
              {activeTab === 'secretaria' && "Secretaria e Matrículas"}
              {activeTab === 'portaria' && "Controle de Portaria"}
              {activeTab === 'autorizados' && "Pessoas Autorizadas a Retirar"}
              {activeTab === 'documentos' && "Central de Documentos"}
              {activeTab === 'financeiro' && "Financeiro e Boletos"}
              {activeTab === 'agenda_digital' && "Agenda Digital e Saúde"}
              {activeTab === 'mensagens' && "Mensagens com Professores"}
            </h3>
            
            {/* Seletor de filho visível na navbar se for Responsável */}
            {currentRole === 'parent' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', backgroundColor: '#f1f5f9', padding: '0.35rem 0.75rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Filho Ativo:</span>
                <select 
                  className="form-select" 
                  style={{ border: 'none', background: 'transparent', padding: 0, fontWeight: 700, fontSize: '0.85rem', width: '130px', outline: 'none', cursor: 'pointer' }}
                  value={selectedChildId}
                  onChange={e => setSelectedChildId(parseInt(e.target.value))}
                >
                  <option value={1}>Arthur Ramos</option>
                  <option value={2}>Beatriz Ramos</option>
                </select>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className={`status-badge ${currentRole === 'manager' ? 'warning' : currentRole === 'teacher' ? 'success' : 'danger'}`}>
              {currentRole === 'manager' && 'Diretoria'}
              {currentRole === 'teacher' && 'Professora'}
              {currentRole === 'parent' && 'Responsável'}
            </span>
            <button className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={onBackToLanding}>
              Sair
            </button>
          </div>
        </header>

        {/* CONTENT SCROLL */}
        <div className="portal-content-scroll">
          
          {/* NOTIFICAÇÃO VERDE DE MEDICAMENTO ADMINISTRADO PARA O PAI */}
          {currentRole === 'parent' && confirmedMedAlertsForParent.length > 0 && (
            <div className="parent-notification-success">
              <Check size={18} />
              <div>
                <strong>Confirmado:</strong> A <strong>{confirmedMedAlertsForParent[0].confirmedBy}</strong> administrou o medicamento para <strong>{confirmedMedAlertsForParent[0].studentName}</strong> às <strong>{confirmedMedAlertsForParent[0].confirmedAt}</strong>! ("{confirmedMedAlertsForParent[0].note}")
              </div>
              <button 
                style={{ background: 'none', border: 'none', color: '#166534', cursor: 'pointer', marginLeft: 'auto', fontWeight: 700 }}
                onClick={() => {
                  setMedicationAlerts(prev => prev.filter(m => !(m.studentId === selectedChildId && m.status === 'Confirmado')));
                }}
              >
                X
              </button>
            </div>
          )}

          {/* AVISOS CRÍTICOS DE SAÚDE PARA PROFESSORES */}
          {currentRole === 'teacher' && activeMedAlertsForTeacher.length > 0 && (
            <div className="medication-alert-bar">
              <AlertCircle size={22} style={{ color: '#dc2626' }} />
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: '0.85rem', color: '#dc2626', textTransform: 'uppercase' }}>Alerta de Medicamento Urgente:</strong>
                {activeMedAlertsForTeacher.map(alert => (
                  <p key={alert.id} style={{ fontSize: '0.8rem', color: 'var(--text-main)', marginTop: '0.15rem' }}>
                    <strong>{alert.studentName}</strong> ({alert.className}) às <strong>{alert.time}</strong>: "{alert.note}"
                  </p>
                ))}
              </div>
              <button 
                className="btn btn-primary" 
                style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                onClick={() => {
                  setMedicationAlerts(prev => prev.map(a => {
                    if (a.className === '5º Ano A' && a.status === 'Pendente') {
                      return {
                        ...a,
                        status: 'Confirmado',
                        confirmedAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                        confirmedBy: 'Profª. Elaine Costa'
                      };
                    }
                    return a;
                  }));
                  alert("Você confirmou a administração do medicamento. O responsável foi notificado.");
                }}
              >
                Confirmar Medicado
              </button>
            </div>
          )}

          {/* TAB: INÍCIO */}
          {activeTab === 'home' && (
            <div>
              <div className="welcome-gradient-banner">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Olá, Ivan Ramos</h3>
                <p style={{ opacity: 0.9, fontSize: '0.85rem' }}>Acompanhe o rendimento e rotina escolar no portal da {schoolConfig.name}</p>
                {currentRole === 'parent' && (
                  <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', opacity: 0.9 }}>
                    Responsável CPF vinculado: <strong>123.456.789-00</strong>
                  </div>
                )}
              </div>

              {/* Horário de Entrada e Saída */}
              {currentRole === 'parent' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="time-card">
                    <Clock size={20} style={{ color: 'var(--primary-color)' }} />
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block' }}>Entrada Autorizada</span>
                      <strong style={{ fontSize: '0.95rem' }}>{activeChildSchedule.entry}</strong>
                    </div>
                  </div>
                  <div className="time-card">
                    <Clock size={20} style={{ color: 'var(--primary-color)' }} />
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block' }}>Saída Regulamentar</span>
                      <strong style={{ fontSize: '0.95rem' }}>{activeChildSchedule.exit}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Grade de atalhos */}
              <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Atalhos Rápidos</h4>
              <div className="shortcuts-grid-3x3">
                <div className="shortcut-box" onClick={() => alert(`Horários de Aula de ${activeChild.name}: Segunda a Sexta: ${activeChildSchedule.entry} às ${activeChildSchedule.exit}`)}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#2563eb' }}><Clock size={18} /></div>
                  <span className="shortcut-txt">Horários</span>
                </div>
                <div className="shortcut-box" onClick={() => { setActiveTab('cronograma'); setCronoSubView('list'); }}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#db2777' }}><Calendar size={18} /></div>
                  <span className="shortcut-txt">Calendário</span>
                </div>
                <div className="shortcut-box" onClick={() => alert("Cópias: Sem cotas de xerox pendentes para os responsáveis.")}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#059669' }}><ClipboardList size={18} /></div>
                  <span className="shortcut-txt">Cópias</span>
                </div>
                <div className="shortcut-box" onClick={() => alert(`Turma de ${activeChild.name}: ${activeChild.class}`)}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#7c3aed' }}><Layers size={18} /></div>
                  <span className="shortcut-txt">Salas</span>
                </div>
                <div className="shortcut-box" onClick={() => alert("Envio de Atividades: Sistema integrado para responder lições de casa.")}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#0891b2' }}><Send size={18} /></div>
                  <span className="shortcut-txt">Envios</span>
                </div>
                <div className="shortcut-box" onClick={() => { setActiveTab('painel'); }}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#4f46e5' }}><Eye size={18} /></div>
                  <span className="shortcut-txt">Ver Notas</span>
                </div>
                <div className="shortcut-box" onClick={() => alert("Arquivos didáticos compartilhados pelo professor na agenda.")}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#ea580c' }}><BookOpen size={18} /></div>
                  <span className="shortcut-txt">Materiais</span>
                </div>
                <div className="shortcut-box" onClick={() => setActiveTab('painel')}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#0d9488' }}><UserCheck size={18} /></div>
                  <span className="shortcut-txt">Frequência</span>
                </div>
                <div className="shortcut-box" onClick={() => alert("Rendimento Geral: Arthur Ramos está no TOP 10 de desempenho.")}>
                  <div className="shortcut-icon-circle" style={{ backgroundColor: '#d97706' }}><TrendingUp size={18} /></div>
                  <span className="shortcut-txt">Métricas</span>
                </div>
              </div>

              {/* Quadro de avisos */}
              <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', marginTop: '1.5rem' }}>Mural Geral de Avisos</h4>
              <div className="list-group-app">
                {notices.map(n => (
                  <div key={n.id} className="list-item-app" style={{ cursor: 'default' }}>
                    <div className="list-item-app-content">
                      <div className="list-item-app-icon" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}><Megaphone size={16} /></div>
                      <div>
                        <span className="list-item-app-title">{n.title}</span>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{n.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CRONOGRAMA (CALENDÁRIO COLORIDO E ATIVIDADES) */}
          {activeTab === 'cronograma' && (
            <div>
              {cronoSubView === 'list' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  
                  {/* Calendário escolar interativo */}
                  <div className="app-card">
                    <h3 className="app-card-title"><Calendar size={20} /> Calendário Letivo - Junho 2026</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      🟢 Aulas Letivas | 🔴 Sem Aula / Recesso | 🟠 Eventos Diferenciados. Clique no dia para ver detalhes.
                    </p>
                    
                    {currentRole === 'manager' && (
                      <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '0.5rem', borderRadius: '6px', fontSize: '0.8rem', marginBottom: '1rem', fontWeight: 600 }}>
                        💡 Modo Direção Ativo: Clique em qualquer dia para alterar sua cor/status e o texto da programação escolar.
                      </div>
                    )}

                    <div className="calendar-container">
                      <div className="calendar-grid-weekdays">
                        <span>DOM</span><span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SAB</span>
                      </div>
                      
                      <div className="calendar-grid">
                        <div className="calendar-day-box empty"></div>
                        
                        {calendarDays.map(d => (
                          <div 
                            key={d.day}
                            className={`calendar-day-box ${d.type === 'green' ? 'day-green' : d.type === 'red' ? 'day-red' : 'day-orange'}`}
                            onClick={() => setSelectedCalendarDay(d)}
                          >
                            <span>{d.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lista de Atividades */}
                  <div className="app-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h4 style={{ fontWeight: 700, fontSize: '0.9rem' }}>Atividades de {activeChild.name}</h4>
                      <button className="btn btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }} onClick={() => setCronoSubView('add-crono')}>
                        + Nova Atividade
                      </button>
                    </div>

                    <div className="list-group-app">
                      {agenda.filter(a => a.studentId === selectedChildId).map(a => (
                        <div key={a.id} className="list-item-app">
                          <div className="list-item-app-content">
                            <div className="list-item-app-icon"><BookOpen size={16} /></div>
                            <div>
                              <span className="list-item-app-title">{a.subject} - {a.type}</span>
                              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{a.task} ({a.date})</p>
                            </div>
                          </div>
                          <ChevronRight size={16} />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {cronoSubView === 'add-crono' && (
                <div className="app-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <h3 className="app-card-title">Nova Atividade</h3>
                  <form onSubmit={handleAddAgenda}>
                    <div className="form-group">
                      <label className="form-label">Disciplina</label>
                      <select className="form-select" value={newAgendaSubject} onChange={e => setNewAgendaSubject(e.target.value)}>
                        <option value="Matemática">Matemática</option>
                        <option value="Ciências">Ciências</option>
                        <option value="História">História</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Data de entrega</label>
                      <input type="text" className="form-input" value={newAgendaDate} onChange={e => setNewAgendaDate(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Tipo de Tarefa</label>
                      <select className="form-select" value={newAgendaType} onChange={e => setNewAgendaType(e.target.value)}>
                        <option value="Tarefa de Casa">Tarefa de Casa</option>
                        <option value="Leitura">Leitura</option>
                        <option value="Trabalho">Trabalho</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Instruções</label>
                      <textarea className="form-textarea" rows={4} value={newAgendaTask} onChange={e => setNewAgendaTask(e.target.value)} required></textarea>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem' }}>
                      <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setCronoSubView('list')}>Cancelar</button>
                      <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Salvar</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* TAB: DIRETORIA */}
          {activeTab === 'diretoria' && (
            <div>
              {currentRole !== 'manager' ? (
                <div className="app-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
                  <Lock size={32} style={{ color: 'var(--warning)', marginBottom: '0.5rem' }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Acesso Restrito à Diretoria</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Altere seu perfil para 'Diretoria' no painel lateral.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div className="app-card" style={{ marginBottom: 0 }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Alunos Matriculados</span>
                      <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>{schoolData.students.length}</h2>
                    </div>
                    <div className="app-card" style={{ marginBottom: 0 }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Professores Ativos</span>
                      <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>{schoolData.teachers.length}</h2>
                    </div>
                  </div>

                  {/* Comunicados */}
                  <div className="app-card" style={{ maxWidth: '600px' }}>
                    <h3 className="app-card-title"><Megaphone size={18} /> Publicar Comunicado no Mural</h3>
                    <form onSubmit={handleAddNotice}>
                      <div className="form-group">
                        <label className="form-label">Título</label>
                        <input type="text" className="form-input" value={newNoticeTitle} onChange={e => setNewNoticeTitle(e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Conteúdo</label>
                        <textarea className="form-textarea" rows={3} value={newNoticeContent} onChange={e => setNewNoticeContent(e.target.value)} required></textarea>
                      </div>
                      <button className="btn btn-primary" type="submit">Publicar</button>
                    </form>
                  </div>

                  {/* Monitor de Chats */}
                  <div className="app-card">
                    <h3 className="app-card-title"><Eye size={18} /> Auditoria Geral de Conversas (Professores ↔️ Pais)</h3>
                    <div className="list-group-app">
                      {chats.map(c => (
                        <div key={c.id} className="list-item-app" style={{ cursor: 'default' }}>
                          <div className="list-item-app-content">
                            <div className="list-item-app-icon"><MessageSquare size={16} /></div>
                            <div>
                              <span className="list-item-app-title">{c.teacherName} conversando com {c.parentName}</span>
                              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                                Aluno: {c.studentName} ({c.className})
                              </p>
                            </div>
                          </div>
                          <span className="status-badge success">Auditado</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* TAB: PAINEL (BOLETIM POR CARDS QUADRADOS) */}
          {activeTab === 'painel' && (
            <div>
              {currentRole === 'parent' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Boletim escolar por cards quadrados */}
                  <div className="app-card">
                    <h3 className="app-card-title"><GraduationCap size={18} /> Boletim de Notas ({activeChild.name})</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      Clique no card de qualquer disciplina para visualizar o boletim completo, nota de corte e as próximas datas.
                    </p>

                    <div className="subject-grid">
                      {[
                        { key: 'Math', name: 'Matemática', icon: '📐', color: '#2563eb', exam: '24 de Junho de 2026', content: 'Operações com Frações e Decimais', notes: `${activeChild.name} demonstra excelente raciocínio matemático, com boa participação e dedicação nos exercícios.` },
                        { key: 'Science', name: 'Ciências', icon: '🧪', color: '#16a34a', exam: '19 de Junho de 2026', content: 'Sistemas Ecológicos e Fotossíntese', notes: 'Demonstra muito interesse por experimentos científicos. Sempre focado nas aulas teóricas.' },
                        { key: 'Portuguese', name: 'Português', icon: '📚', color: '#db2777', exam: '22 de Junho de 2026', content: 'Interpretação Textual e Gramática', notes: 'Apresenta boa leitura e ortografia. Demonstra melhora contínua na produção de redações.' },
                        { key: 'History', name: 'História', icon: '🏛️', color: '#ea580c', exam: '25 de Junho de 2026', content: 'Brasil Colônia e Capitanias Hereditárias', notes: 'Muito interessado nas aulas de história nacional, sempre participando dos debates.' },
                        { key: 'Geography', name: 'Geografia', icon: '🌍', color: '#0891b2', exam: '26 de Junho de 2026', content: 'Relevo, Clima e Distribuição de Recursos', notes: 'Demonstra boa interpretação de mapas e gráficos climáticos. Dedicado nas atividades de casa.' },
                        { key: 'Arts', name: 'Artes', icon: '🎨', color: '#7c3aed', exam: '30 de Junho de 2026', content: 'História da Arte Moderna e Técnicas de Pintura', notes: 'Extremamente criativo. Apresenta trabalhos artísticos muito caprichados e originais.' }
                      ].map(sub => {
                        const subGrades = grades[selectedChildId]?.[sub.key] || { m1: '-', m2: '-', sem1: '-', annual: '-' };
                        return (
                          <div 
                            key={sub.key}
                            className="subject-card" 
                            style={{ borderLeftColor: sub.color }}
                            onClick={() => setSelectedSubjectDetails({
                              name: sub.name,
                              icon: sub.icon,
                              m1: subGrades.m1,
                              m2: subGrades.m2,
                              sem1: subGrades.sem1,
                              annual: subGrades.annual,
                              cutOff: '6.0',
                              nextExam: sub.exam,
                              nextExamContent: sub.content,
                              notes: sub.notes
                            })}
                          >
                            <span className="subject-card-name">{sub.name}</span>
                            <div className="subject-card-grade-wrapper">
                              <span className="subject-card-grade-num">{subGrades.annual}</span>
                              <span className="subject-card-grade-lbl">Média Letiva</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              ) : (
                /* VISÃO DO PROFESSOR (CHAMADA) */
                <div className="app-card">
                  <h3 className="app-card-title"><UserCheck size={18} /> Diário de Chamada - 5º Ano A</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {schoolData.students.map(stud => (
                      <div key={stud.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
                        <div>
                          <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{stud.name}</span> <br />
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Responsável: {stud.parentName}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                          <button 
                            className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', backgroundColor: stud.attendance === 'Presente' ? 'var(--primary-light)' : '' }}
                            onClick={() => {
                              setSchoolData(prev => ({
                                ...prev,
                                students: prev.students.map(s => s.id === stud.id ? { ...s, attendance: 'Presente' } : s)
                              }));
                            }}
                          >Presença</button>
                          <button 
                            className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', backgroundColor: stud.attendance === 'Ausente' ? '#fef2f2' : '' }}
                            onClick={() => {
                              setSchoolData(prev => ({
                                ...prev,
                                students: prev.students.map(s => s.id === stud.id ? { ...s, attendance: 'Ausente' } : s)
                              }));
                            }}
                          >Falta</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }} onClick={() => alert("Chamada finalizada!")}>Salvar Chamada Diária</button>
                </div>
              )}
            </div>
          )}

          {/* TAB: FINANCEIRO (RESPONSÁVEL) */}
          {activeTab === 'financeiro' && currentRole === 'parent' && (
            <div className="finance-section">
              <div className="welcome-gradient-banner" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Painel Financeiro</h3>
                <p style={{ opacity: 0.9, fontSize: '0.85rem' }}>
                  Acompanhe e realize o pagamento das mensalidades e taxas escolares de {activeChild.name}.
                </p>
              </div>

              <div className="app-card">
                <h3 className="app-card-title"><DollarSign size={18} /> Boletos em Aberto - {activeChild.name}</h3>
                <div className="list-group-app">
                  {boletos.filter(b => b.studentId === selectedChildId).map(b => (
                    <div key={b.id} className="list-item-app" style={{ cursor: 'default' }}>
                      <div className="list-item-app-content">
                        <div className="list-item-app-icon"><DollarSign size={16} /></div>
                        <div>
                          <span className="list-item-app-title">Mensalidade Escolar - {b.month}</span>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                            Valor: R$ {b.value.toFixed(2)} | Vencimento: {b.dueDate}
                          </p>
                          {b.status === 'Pago' && (
                            <span style={{ fontSize: '0.7rem', color: 'var(--success)' }}>Pago em: {b.payDate}</span>
                          )}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.25rem' }}>
                        <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem' }} onClick={() => alert("Simulando download do PDF do boleto...")}>
                          Baixar
                        </button>
                        {b.status !== 'Pago' && (
                          <button className="btn btn-primary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem' }} onClick={() => handlePayBoleto(b.id)}>
                            Pagar PIX
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: AGENDA DIGITAL (RESPONSÁVEL) */}
          {activeTab === 'agenda_digital' && currentRole === 'parent' && (
            <div className="agenda-digital-section">
              <div className="welcome-gradient-banner" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Agenda Digital</h3>
                <p style={{ opacity: 0.9, fontSize: '0.85rem' }}>
                  Envie recados rápidos de saúde e acompanhe a rotina diária de seu filho(a).
                </p>
              </div>

              {/* Form de Medicação */}
              <div className="app-card" style={{ marginBottom: '1.5rem' }}>
                <h3 className="app-card-title"><BookOpen size={18} /> Recado de Saúde para o Professor</h3>
                <form onSubmit={handleAddMedicationNote}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    Envie anotações que vão para o painel de aula do professor do seu filho (Ex: medicamentos, restrições).
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type="text" className="form-input" placeholder="Ex: Arthur precisa tomar xarope às 15:00" 
                      value={newMedNote} onChange={e => setNewMedNote(e.target.value)} required 
                    />
                    <input 
                      type="text" className="form-input" style={{ width: '80px' }} value={newMedTime} onChange={e => setNewMedTime(e.target.value)} placeholder="15:00" required 
                    />
                    <button type="submit" className="btn btn-primary">Adicionar Recado</button>
                  </div>
                </form>
              </div>

              {/* Listagem de Recados/Medicações Ativos */}
              <div className="app-card">
                <h3 className="app-card-title"><AlertCircle size={18} /> Histórico de Recados de Saúde</h3>
                <div className="list-group-app">
                  {medicationAlerts.filter(m => m.studentId === selectedChildId).map(m => (
                    <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                      <div>
                        <strong style={{ fontSize: '0.85rem' }}>{m.note}</strong>
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                          Horário: {m.time} | Status: <strong style={{ color: m.status === 'Confirmado' ? 'var(--success)' : 'var(--warning)' }}>{m.status}</strong>
                        </span>
                      </div>
                      {m.status === 'Confirmado' && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--success)' }}>✓ {m.confirmedBy} às {m.confirmedAt}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: MENSAGENS (RESPONSÁVEL) */}
          {activeTab === 'mensagens' && currentRole === 'parent' && (
            <div className="chat-section">
              <div className="welcome-gradient-banner" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Mensagens Escolares</h3>
                <p style={{ opacity: 0.9, fontSize: '0.85rem' }}>
                  Canal de comunicação direta com a professora titular de seu filho.
                </p>
              </div>

              <div className="app-card">
                <h3 className="app-card-title">
                  <MessageSquare size={18} /> Chat com {activeChildTeacherName} ({activeChildTeacherSubject} de {activeChild.name})
                </h3>
                
                <div style={{ minHeight: '220px', maxHeight: '300px', overflowY: 'auto', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '0.75rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeChildChat.messages.map((m, idx) => (
                    <div key={idx} style={{ 
                      fontSize: '0.8rem', padding: '0.5rem', borderRadius: '8px', maxWidth: '75%',
                      alignSelf: m.sender === 'parent' ? 'flex-end' : 'flex-start',
                      backgroundColor: m.sender === 'parent' ? 'var(--primary-light)' : '#f1f5f9'
                    }}>
                      <strong>{m.sender === 'parent' ? 'Você' : 'Professor'}:</strong> {m.text}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="text" className="form-input" placeholder="Digite uma dúvida..." value={chatInput} onChange={e => setChatInput(e.target.value)} />
                  <button className="btn btn-primary" onClick={handleSendMessage}>Enviar</button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: SECRETARIA */}
          {activeTab === 'secretaria' && (
            <div>
              {secreSubView === 'menu' && (
                <div className="app-card">
                  <div style={{ backgroundColor: '#dc2626', color: '#ffffff', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                    <strong>Central da Secretaria Escolar</strong> <br />
                    Controle de matrículas, atestados e envio de documentos.
                  </div>

                  <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Opções Administrativas</h4>
                  <div className="list-group-app">
                    
                    <div className="list-item-app" onClick={() => { setActiveTab('cronograma'); setCronoSubView('points'); }}>
                      <div className="list-item-app-content">
                        <div className="list-item-app-icon"><FileSpreadsheet size={16} /></div>
                        <div>
                          <span className="list-item-app-title">Notas Parciais</span>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>Gerenciar boletins e notas</p>
                        </div>
                      </div>
                      <ChevronRight size={16} />
                    </div>

                    <div className="list-item-app" onClick={() => setSecreSubView('docs')}>
                      <div className="list-item-app-content">
                        <div className="list-item-app-icon"><FileText size={16} /></div>
                        <div>
                          <span className="list-item-app-title">Documentos Faltosos</span>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>Pendências de documentos</p>
                        </div>
                      </div>
                      <ChevronRight size={16} />
                    </div>

                    <div className="list-item-app" onClick={() => setSecreSubView('enrolls')}>
                      <div className="list-item-app-content">
                        <div className="list-item-app-icon"><ClipboardList size={16} /></div>
                        <div>
                          <span className="list-item-app-title">Autorização de Pré-Matrícula</span>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>Aprovar matrículas de novos alunos</p>
                        </div>
                      </div>
                      <ChevronRight size={16} />
                    </div>

                    <div className="list-item-app" onClick={() => setSecreSubView('add-cert')}>
                      <div className="list-item-app-content">
                        <div className="list-item-app-icon"><Plus size={16} /></div>
                        <div>
                          <span className="list-item-app-title">Cadastrar Atestados</span>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>Registrar e abonar justificativas de faltas</p>
                        </div>
                      </div>
                      <ChevronRight size={16} />
                    </div>

                  </div>
                </div>
              )}

              {secreSubView === 'docs' && (
                <div>
                  <button className="btn btn-secondary" style={{ marginBottom: '1rem' }} onClick={() => setSecreSubView('menu')}>← Voltar</button>
                  <div className="app-card">
                    <h3 className="app-card-title">Documentos Pendentes</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {schoolData.students.map(s => (
                        <div key={s.id} style={{ padding: '0.5rem', borderBottom: '1px solid var(--border-color)', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <strong>{s.name}</strong> <br />
                            <span style={{ color: s.docStatus === 'Ok' ? 'var(--success)' : 'var(--danger)' }}>{s.docStatus}</span>
                          </div>
                          {s.docStatus !== 'Ok' && (
                            <button className="btn btn-primary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }} onClick={() => {
                              setSchoolData(prev => ({
                                ...prev,
                                students: prev.students.map(stud => stud.id === s.id ? { ...stud, docStatus: 'Ok' } : stud)
                              }));
                              alert("Documento anexado!");
                            }}>Resolver</button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {secreSubView === 'enrolls' && (
                <div>
                  <button className="btn btn-secondary" style={{ marginBottom: '1rem' }} onClick={() => setSecreSubView('menu')}>← Voltar</button>
                  <div className="app-card">
                    <h3 className="app-card-title">Novos Pedidos de Matrícula</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {enrollments.map(e => (
                        <div key={e.id} style={{ padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.8rem' }}>
                          <strong>Estudante:</strong> {e.studentName} <br />
                          <strong>Série:</strong> {e.classRequested} <br />
                          <strong>Responsável:</strong> {e.parentName} <br />
                          <strong>Status:</strong> {e.status}
                          {e.status === 'Pendente' && (
                            <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
                              <button className="btn btn-primary" style={{ padding: '0.2rem 0.4rem', fontSize: '0.7rem' }} onClick={() => {
                                setEnrollments(prev => prev.map(item => item.id === e.id ? { ...item, status: 'Aprovada' } : item));
                                const newStud = { id: schoolData.students.length + 1, name: e.studentName, class: e.classRequested, parentName: e.parentName, attendance: "Presente", docStatus: "Ok" };
                                setSchoolData(prev => ({ ...prev, students: [...prev.students, newStud] }));
                                alert("Matrícula aprovada!");
                              }}>Aprovar</button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {secreSubView === 'add-cert' && (
                <div className="app-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <h3 className="app-card-title">Registrar Atestado</h3>
                  <form onSubmit={handleAddCertificate}>
                    <div className="form-group">
                      <label className="form-label">Estudante</label>
                      <select className="form-select" value={certStudent} onChange={e => setCertStudent(e.target.value)}>
                        {schoolData.students.map(s => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Justificativa</label>
                      <input type="text" className="form-input" value={certReason} onChange={e => setCertReason(e.target.value)} required />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem' }}>
                      <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setSecreSubView('menu')}>Cancelar</button>
                      <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Salvar</button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          )}

          {/* TAB: PORTARIA (PORTEIRO) */}
          {activeTab === 'portaria' && currentRole === 'doorman' && (
            <div className="doorman-dashboard">
              <div className="doorman-split-layout">
                
                {/* COLUNA ESQUERDA: LISTA DE ALUNOS COM BUSCA E FILTROS */}
                <div className="app-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: 'fit-content' }}>
                  <h3 className="app-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Shield size={18} /> Portaria - Alunos Cadastrados
                  </h3>
                  
                  {/* Busca */}
                  <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Buscar aluno por nome..." 
                      style={{ paddingLeft: '2.25rem', fontSize: '0.85rem' }}
                      value={doormanSearch}
                      onChange={e => setDoormanSearch(e.target.value)}
                    />
                  </div>

                  {/* Filtros por Turma */}
                  <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                    {['Todos', ...schoolData.classes.map(c => c.name)].map(cls => (
                      <button 
                        key={cls}
                        className={`btn ${doormanClassFilter === cls ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderRadius: '15px' }}
                        onClick={() => setDoormanClassFilter(cls)}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>

                  {/* Listagem */}
                  <div style={{ maxHeight: '420px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {schoolData.students
                      .filter(s => {
                        const matchesSearch = s.name.toLowerCase().includes(doormanSearch.toLowerCase());
                        const matchesClass = doormanClassFilter === 'Todos' || s.class === doormanClassFilter;
                        return matchesSearch && matchesClass;
                      })
                      .map(stud => {
                        const exitLogForToday = doormanExitLogs.find(l => l.studentName === stud.name);
                        return (
                          <div 
                            key={stud.id}
                            className={`doorman-student-item ${selectedDoormanStudentId === stud.id ? 'active' : ''}`}
                            onClick={() => setSelectedDoormanStudentId(stud.id)}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', 
                              borderRadius: '8px', cursor: 'pointer', border: '1px solid var(--border-color)',
                              backgroundColor: selectedDoormanStudentId === stud.id ? 'var(--primary-light)' : '#ffffff',
                              borderColor: selectedDoormanStudentId === stud.id ? 'var(--primary-color)' : 'var(--border-color)'
                            }}
                          >
                            <Avatar type={stud.id === 1 ? 'arthur' : 'beatriz'} size={40} />
                            <div style={{ flex: 1 }}>
                              <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-main)' }}>{stud.name}</strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{stud.class}</span>
                            </div>
                            <div>
                              {exitLogForToday ? (
                                <span className="status-badge danger" style={{ fontSize: '0.65rem' }}>Saída Registrada</span>
                              ) : (
                                <span className="status-badge success" style={{ fontSize: '0.65rem' }}>Presente</span>
                              )}
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>

                {/* COLUNA DIREITA: DETALHE DE VALIDAÇÃO VISUAL */}
                <div>
                  {(() => {
                    const stud = schoolData.students.find(s => s.id === selectedDoormanStudentId);
                    if (!stud) {
                      return (
                        <div className="app-card" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                          <Shield size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                          <p>Selecione um aluno na coluna à esquerda para verificação de liberação.</p>
                        </div>
                      );
                    }

                    const exitLogForToday = doormanExitLogs.find(l => l.studentName === stud.name);
                    const parentsForStudent = [
                      { name: stud.parentName, relation: "Responsável Legal (Pai)", avatarType: "carlos", cpf: "123.456.789-00", phone: "(11) 99999-8888" }
                    ];
                    const pickupsForStudent = authorizedPickups.filter(p => p.studentId === stud.id);

                    return (
                      <div className="app-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        
                        {/* Cabeçalho do Aluno */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                          <Avatar type={stud.id === 1 ? 'arthur' : 'beatriz'} size={60} />
                          <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase' }}>Aluno(a) Selecionado</span>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0.15rem 0', color: 'var(--text-main)' }}>{stud.name}</h2>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                              Turma: <strong>{stud.class}</strong> | Horário: <strong>{stud.id === 1 ? '13:00 às 17:30' : '07:30 às 12:00'}</strong>
                            </p>
                          </div>
                        </div>

                        {/* Status de Saída */}
                        {exitLogForToday && (
                          <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '8px', padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#b91c1c' }}>
                            <AlertCircle size={20} />
                            <div style={{ fontSize: '0.8rem' }}>
                              <strong>Atenção:</strong> Saída deste aluno já registrada hoje às {exitLogForToday.time.split('às')[1]} por <strong>{exitLogForToday.authorizedName} ({exitLogForToday.relation})</strong>.
                            </div>
                          </div>
                        )}

                        {/* SEÇÃO 1: FOTO DO PAI CADASTRADO (RESPONSÁVEL PRINCIPAL) */}
                        <div>
                          <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                            Responsável Principal (Vínculo CPF)
                          </h4>
                          {parentsForStudent.map((p, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', borderRadius: '8px', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)' }}>
                              <Avatar type={p.avatarType} size={50} />
                              <div style={{ flex: 1 }}>
                                <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)', display: 'block' }}>{p.name}</strong>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{p.relation} | CPF: {p.cpf}</span>
                              </div>
                              <button 
                                className="btn btn-primary"
                                style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                                disabled={!!exitLogForToday}
                                onClick={() => {
                                  const nowStr = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                                  const newLog = {
                                    id: doormanExitLogs.length + 1,
                                    studentName: stud.name,
                                    className: stud.class,
                                    authorizedName: p.name,
                                    relation: 'Pai',
                                    time: `${new Date().toLocaleDateString('pt-BR')} às ${nowStr}`
                                  };
                                  setDoormanExitLogs([newLog, ...doormanExitLogs]);
                                  alert(`Saída de ${stud.name} liberada para o Pai (${p.name})!`);
                                }}
                              >
                                Liberar p/ Pai
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* SEÇÃO 2: FOTOS DAS PESSOAS AUTORIZADAS A RETIRAR */}
                        <div>
                          <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                            Pessoas Autorizadas a Retirar (Cadastradas pelos Pais)
                          </h4>
                          
                          {pickupsForStudent.length === 0 ? (
                            <div style={{ padding: '1.25rem', textAlign: 'center', backgroundColor: '#f8fafc', border: '1px dashed var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                              Nenhuma outra pessoa autorizada cadastrada pelo responsável para este aluno.
                            </div>
                          ) : (
                            <div className="doorman-authorized-grid">
                              {pickupsForStudent.map(p => (
                                <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff' }}>
                                  <Avatar type={p.avatarType} photoUrl={p.photoUrl} size={48} />
                                  <div style={{ flex: 1, minWidth: 0 }}>
                                    <strong style={{ fontSize: '0.8rem', color: 'var(--text-main)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</strong>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--primary-color)', fontWeight: 600, display: 'block' }}>{p.relationship}</span>
                                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{p.phone}</span>
                                  </div>
                                  <button 
                                    className="btn btn-secondary"
                                    style={{ padding: '0.35rem 0.5rem', fontSize: '0.7rem', border: '1px solid var(--primary-color)', color: 'var(--primary-color)' }}
                                    disabled={!!exitLogForToday}
                                    onClick={() => {
                                      const nowStr = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                                      const newLog = {
                                        id: doormanExitLogs.length + 1,
                                        studentName: stud.name,
                                        className: stud.class,
                                        authorizedName: p.name,
                                        relation: p.relationship,
                                        time: `${new Date().toLocaleDateString('pt-BR')} às ${nowStr}`
                                      };
                                      setDoormanExitLogs([newLog, ...doormanExitLogs]);
                                      alert(`Saída de ${stud.name} liberada para ${p.name} (${p.relationship})!`);
                                    }}
                                  >
                                    Liberar
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Histórico Recente de Portaria */}
                        <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                          <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Registro de Liberações de Hoje</h4>
                          <div style={{ maxHeight: '100px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {doormanExitLogs.length === 0 ? (
                              <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Nenhuma liberação registrada hoje.</p>
                            ) : (
                              doormanExitLogs.map(l => (
                                <div key={l.id} style={{ fontSize: '0.7rem', padding: '0.35rem', borderRadius: '4px', backgroundColor: '#f1f5f9', color: '#334155' }}>
                                  🔓 Aluno <strong>{l.studentName}</strong> ({l.className}) retirado por <strong>{l.authorizedName}</strong> ({l.relation}) às {l.time.split('às')[1]}
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                      </div>
                    );
                  })()}
                </div>

              </div>
            </div>
          )}

          {/* TAB: AUTORIZADOS A RETIRAR (RESPONSÁVEL) */}
          {activeTab === 'autorizados' && currentRole === 'parent' && (
            <div className="authorized-pickups-section">
              <div className="welcome-gradient-banner" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Pessoas Autorizadas a Retirar</h3>
                <p style={{ opacity: 0.9, fontSize: '0.85rem' }}>
                  Gerencie quem pode buscar {activeChild.name} e Beatriz Ramos na escola. O porteiro tem acesso em tempo real a estas fotos e dados.
                </p>
              </div>

              {/* Botão para mostrar formulário */}
              {!isAddingAuth && (
                <button className="btn btn-primary" style={{ marginBottom: '1.5rem' }} onClick={() => setIsAddingAuth(true)}>
                  + Autorizar Nova Pessoa
                </button>
              )}

              {/* Formulário de Cadastro de Autorizado */}
              {isAddingAuth && (
                <div className="app-card" style={{ marginBottom: '1.5rem', maxWidth: '600px' }}>
                  <h3 className="app-card-title">Nova Autorização de Retirada</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!newAuthName.trim()) return;
                    
                    const newPickup = {
                      id: authorizedPickups.length + 1,
                      studentId: selectedChildId,
                      name: newAuthName,
                      relationship: newAuthRelationship,
                      phone: newAuthPhone || '(Sem telefone)',
                      avatarType: newAuthAvatar,
                      photoUrl: newAuthPhoto
                    };

                    setAuthorizedPickups([...authorizedPickups, newPickup]);
                    setNewAuthName('');
                    setNewAuthPhone('');
                    setNewAuthPhoto('');
                    setIsAddingAuth(false);
                    alert(`${newAuthName} foi autorizado(a) com sucesso! A portaria já está atualizada.`);
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700 }}>Nome Completo</label>
                        <input type="text" className="form-input" value={newAuthName} onChange={e => setNewAuthName(e.target.value)} required placeholder="Ex: Tio Marcos Souza" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700 }}>Grau de Parentesco / Relação</label>
                        <select className="form-select" value={newAuthRelationship} onChange={e => {
                          setNewAuthRelationship(e.target.value);
                          // Ajustar avatar padrão sugerido
                          if (e.target.value === 'Motorista') setNewAuthAvatar('driver');
                          else if (e.target.value === 'Avó' || e.target.value === 'Avô') setNewAuthAvatar('grandma');
                          else if (e.target.value === 'Tio') setNewAuthAvatar('tio');
                          else setNewAuthAvatar('tia');
                        }}>
                          <option value="Tia">Tia</option>
                          <option value="Tio">Tio</option>
                          <option value="Avó">Avó</option>
                          <option value="Avô">Avô</option>
                          <option value="Motorista">Motorista Particular / Escolar</option>
                          <option value="Padrinho">Padrinho / Madrinha</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.75rem' }}>
                      <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700 }}>Telefone para Contato</label>
                        <input type="text" className="form-input" value={newAuthPhone} onChange={e => setNewAuthPhone(e.target.value)} placeholder="Ex: (11) 98888-1111" />
                      </div>
                      
                      {/* Upload de Foto (Simulado/Real) */}
                      <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700 }}>Foto de Identificação (Opcional)</label>
                        <input 
                          type="file" 
                          className="form-input" 
                          accept="image/*"
                          onChange={e => {
                            const file = e.target.files[0];
                            if (file) {
                              setNewAuthPhoto(URL.createObjectURL(file));
                            }
                          }}
                        />
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', display: 'block', marginTop: '0.2rem' }}>
                          Escolha um arquivo de imagem para enviar uma foto real. Caso contrário, um avatar padrão será gerado.
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', justifyContent: 'flex-end' }}>
                      <button type="button" className="btn btn-secondary" onClick={() => setIsAddingAuth(false)}>Cancelar</button>
                      <button type="submit" className="btn btn-primary">Salvar Autorização</button>
                    </div>
                  </form>
                </div>
              )}

              {/* Listagem de Autorizados */}
              <div className="app-card">
                <h3 className="app-card-title">Pessoas Autorizadas Ativas para {activeChild.name}</h3>
                
                {authorizedPickups.filter(p => p.studentId === selectedChildId).length === 0 ? (
                  <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    Nenhuma pessoa autorizada além do pai/mãe cadastrada para este aluno.
                  </p>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                    {authorizedPickups.filter(p => p.studentId === selectedChildId).map(p => (
                      <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#f8fafc' }}>
                        <Avatar type={p.avatarType} photoUrl={p.photoUrl} size={50} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{p.name}</strong>
                          <span className="status-badge success" style={{ fontSize: '0.65rem', display: 'inline-block', margin: '0.25rem 0' }}>{p.relationship}</span>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Contato: {p.phone}</p>
                        </div>
                        <button 
                          className="btn btn-secondary" 
                          style={{ padding: '0.35rem 0.5rem', color: '#dc2626', borderColor: '#fecaca', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          onClick={() => {
                            if (window.confirm(`Tem certeza de que deseja remover a autorização de ${p.name}?`)) {
                              setAuthorizedPickups(authorizedPickups.filter(item => item.id !== p.id));
                              alert("Autorização removida.");
                            }
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: DOCUMENTOS (RESPONSÁVEL / DIRETORIA) */}
          {activeTab === 'documentos' && (
            <div>
              {currentRole === 'parent' ? (
                /* VISÃO RESPONSÁVEL: LISTAGEM DE SOLICITAÇÕES E UPLOAD */
                <div className="documents-parent-section">
                  <div className="welcome-gradient-banner" style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Central de Envio de Documentos</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.85rem' }}>
                      Envie a documentação obrigatória solicitada pela secretaria para regularizar a matrícula de {activeChild.name}.
                    </p>
                  </div>

                  <div className="app-card">
                    <h3 className="app-card-title">Documentação Escolar - {activeChild.name}</h3>
                    
                    <div className="list-group-app" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {studentDocuments.filter(d => d.studentId === selectedChildId).map(doc => (
                        <div 
                          key={doc.id} 
                          className="list-item-app" 
                          style={{ 
                            cursor: 'default', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1rem',
                            borderLeft: '4px solid',
                            borderLeftColor: doc.status === 'Aprovado' ? 'var(--success)' : doc.status === 'Em Análise' ? 'var(--warning)' : doc.status === 'Rejeitado' ? 'var(--danger)' : '#cbd5e1'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                              <div style={{ 
                                width: '36px', height: '36px', borderRadius: '8px', 
                                backgroundColor: doc.status === 'Aprovado' ? '#f0fdf4' : doc.status === 'Em Análise' ? '#fffbeb' : doc.status === 'Rejeitado' ? '#fef2f2' : '#f1f5f9',
                                color: doc.status === 'Aprovado' ? 'var(--success)' : doc.status === 'Em Análise' ? 'var(--warning)' : doc.status === 'Rejeitado' ? 'var(--danger)' : '#64748b',
                                display: 'flex', alignItems: 'center', justifyContent: 'center' 
                              }}>
                                <FileText size={18} />
                              </div>
                              <div>
                                <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{doc.docName}</strong>
                                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                                  {doc.fileName ? `Arquivo: ${doc.fileName} (${doc.uploadDate})` : 'Aguardando envio do arquivo'}
                                </span>
                              </div>
                            </div>
                            
                            <div>
                              <span className={`status-badge ${doc.status === 'Aprovado' ? 'success' : doc.status === 'Em Análise' ? 'warning' : doc.status === 'Rejeitado' ? 'danger' : 'neutral'}`}>
                                {doc.status === 'Aprovado' && 'Aprovado'}
                                {doc.status === 'Em Análise' && 'Em Análise'}
                                {doc.status === 'Rejeitado' && 'Rejeitado / Pendente'}
                                {doc.status === 'Pendente' && 'Pendente de Envio'}
                              </span>
                            </div>
                          </div>

                          {/* Mensagem de Feedback/Rejeição */}
                          {doc.feedback && (
                            <div style={{ 
                              fontSize: '0.75rem', padding: '0.5rem 0.75rem', borderRadius: '6px', 
                              backgroundColor: doc.status === 'Rejeitado' ? '#fef2f2' : '#f0fdf4',
                              color: doc.status === 'Rejeitado' ? '#b91c1c' : '#15803d',
                              borderLeft: '2px solid',
                              borderLeftColor: doc.status === 'Rejeitado' ? '#ef4444' : '#22c55e'
                            }}>
                              <strong>Observação da Escola:</strong> {doc.feedback}
                            </div>
                          )}

                          {/* Ações de Upload */}
                          {doc.status !== 'Aprovado' && (
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem', width: '100%', justifyContent: 'flex-end' }}>
                              <label className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <Upload size={14} /> Enviar Arquivo
                                <input 
                                  type="file" 
                                  style={{ display: 'none' }}
                                  onChange={e => {
                                    const file = e.target.files[0];
                                    if (file) {
                                      setStudentDocuments(prev => prev.map(item => {
                                        if (item.id === doc.id) {
                                          return {
                                            ...item,
                                            status: 'Em Análise',
                                            fileName: file.name,
                                            uploadDate: new Date().toLocaleDateString('pt-BR')
                                          };
                                        }
                                        return item;
                                      }));
                                      alert(`Documento "${doc.docName}" enviado para análise!`);
                                    }
                                  }}
                                />
                              </label>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* VISÃO DIRETORIA: GERENCIAMENTO E ANÁLISE DE DOCUMENTOS */
                <div className="documents-director-section">
                  <div className="app-card" style={{ marginBottom: '1.5rem' }}>
                    <h3 className="app-card-title">Auditoria de Documentos Escolares</h3>
                    
                    {/* Compliance Dashboard Header */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Aguardando Revisão</span>
                        <strong style={{ fontSize: '1.5rem', color: 'var(--warning)' }}>
                          {studentDocuments.filter(d => d.status === 'Em Análise').length}
                        </strong>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Total Aprovados</span>
                        <strong style={{ fontSize: '1.5rem', color: 'var(--success)' }}>
                          {studentDocuments.filter(d => d.status === 'Aprovado').length}
                        </strong>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Pendentes / Rejeitados</span>
                        <strong style={{ fontSize: '1.5rem', color: '#64748b' }}>
                          {studentDocuments.filter(d => d.status === 'Pendente' || d.status === 'Rejeitado').length}
                        </strong>
                      </div>
                    </div>

                    {/* Tabs na Diretoria */}
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '1rem', gap: '1rem' }}>
                      <button 
                        className="btn" 
                        style={{ 
                          border: 'none', background: 'none', padding: '0.5rem 0', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                          color: docReviewTab === 'pending' ? 'var(--primary-color)' : 'var(--text-secondary)',
                          borderBottom: docReviewTab === 'pending' ? '2px solid var(--primary-color)' : 'none',
                          borderRadius: 0
                        }}
                        onClick={() => setDocReviewTab('pending')}
                      >
                        Pendências para Análise ({studentDocuments.filter(d => d.status === 'Em Análise').length})
                      </button>
                      <button 
                        className="btn" 
                        style={{ 
                          border: 'none', background: 'none', padding: '0.5rem 0', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                          color: docReviewTab === 'all' ? 'var(--primary-color)' : 'var(--text-secondary)',
                          borderBottom: docReviewTab === 'all' ? '2px solid var(--primary-color)' : 'none',
                          borderRadius: 0
                        }}
                        onClick={() => setDocReviewTab('all')}
                      >
                        Todos os Documentos ({studentDocuments.length})
                      </button>
                    </div>

                    {/* FILA DE REVISÃO */}
                    {docReviewTab === 'pending' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {studentDocuments.filter(d => d.status === 'Em Análise').length === 0 ? (
                          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                            <CheckCircle size={40} style={{ color: 'var(--success)', opacity: 0.8, marginBottom: '0.5rem' }} />
                            <p style={{ fontSize: '0.85rem' }}>Tudo em ordem! Não há documentos aguardando análise no momento.</p>
                          </div>
                        ) : (
                          studentDocuments.filter(d => d.status === 'Em Análise').map(doc => (
                            <div key={doc.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff' }}>
                              <div>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-color)' }}>{doc.studentName}</span>
                                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-main)', marginTop: '0.1rem' }}>{doc.docName}</strong>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Enviado em: {doc.uploadDate} | Arquivo: <em>{doc.fileName}</em></span>
                              </div>
                              <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <button 
                                  className="btn btn-secondary" 
                                  style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem', border: '1px solid var(--primary-color)', color: 'var(--primary-color)' }}
                                  onClick={() => setSelectedDocForReview(doc)}
                                >
                                  Analisar
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}

                    {/* TODOS OS DOCUMENTOS */}
                    {docReviewTab === 'all' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {studentDocuments.map(doc => (
                          <div key={doc.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff' }}>
                            <div>
                              <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{doc.docName}</strong>
                              <span style={{ fontSize: '0.7rem', display: 'block', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                                Aluno: {doc.studentName} | Status: <strong style={{ color: doc.status === 'Aprovado' ? 'var(--success)' : doc.status === 'Em Análise' ? 'var(--warning)' : '#e11d48' }}>{doc.status}</strong>
                              </span>
                            </div>
                            <div>
                              {doc.status === 'Em Análise' && (
                                <button className="btn btn-secondary" style={{ padding: '0.35rem 0.5rem', fontSize: '0.7rem' }} onClick={() => setSelectedDocForReview(doc)}>Analisar</button>
                              )}
                              {doc.status === 'Aprovado' && (
                                <span style={{ fontSize: '0.7rem', color: 'var(--success)' }}>✓ Aprovado</span>
                              )}
                              {doc.status === 'Rejeitado' && (
                                <button className="btn btn-secondary" style={{ padding: '0.35rem 0.5rem', fontSize: '0.7rem', color: '#e11d48', borderColor: '#fecaca' }} onClick={() => alert(`Motivo Rejeição: ${doc.feedback}`)}>Ver Motivo</button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* FORMULÁRIO DE REQUISIÇÃO DE NOVO DOCUMENTO */}
                  <div className="app-card" style={{ maxWidth: '500px' }}>
                    <h3 className="app-card-title">+ Requerer Novo Documento</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      Solicite um documento escolar customizado para qualquer estudante matriculado. O pai receberá o pedido na Central de Documentos.
                    </p>
                    
                    <form onSubmit={e => {
                      e.preventDefault();
                      const stud = schoolData.students.find(s => s.id === newDocReqStudentId);
                      if (!stud) return;

                      // Checar se já existe essa solicitação
                      const exists = studentDocuments.find(d => d.studentId === newDocReqStudentId && d.docName.toLowerCase() === newDocReqName.toLowerCase());
                      if (exists) {
                        alert("Este documento já está solicitado para este aluno!");
                        return;
                      }

                      const newDocReq = {
                        id: studentDocuments.length + 1,
                        studentId: newDocReqStudentId,
                        studentName: stud.name,
                        docName: newDocReqName,
                        status: 'Pendente',
                        fileName: '',
                        fileUrl: '',
                        uploadDate: '',
                        feedback: ''
                      };

                      setStudentDocuments([...studentDocuments, newDocReq]);
                      alert(`Documento "${newDocReqName}" solicitado para ${stud.name}!`);
                    }}>
                      <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700 }}>Selecionar Aluno</label>
                        <select className="form-select" value={newDocReqStudentId} onChange={e => setNewDocReqStudentId(parseInt(e.target.value))}>
                          {schoolData.students.map(s => (
                            <option key={s.id} value={s.id}>{s.name} ({s.class})</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700 }}>Nome do Documento Solicitado</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          value={newDocReqName}
                          onChange={e => setNewDocReqName(e.target.value)}
                          placeholder="Ex: Histórico Escolar, Laudo Médico, RG do Aluno"
                          required
                        />
                      </div>

                      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                        Solicitar Documento
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* 3. BARRA DE NAVEGAÇÃO INFERIOR (MOBILE-ONLY) */}
      <nav className="bottom-nav">
        {currentRole === 'doorman' ? (
          <>
            <button className={`bottom-nav-btn ${activeTab === 'portaria' ? 'active' : ''}`} onClick={() => setActiveTab('portaria')}>
              <Shield />
              <span>Portaria</span>
            </button>
            <button className={`bottom-nav-btn ${activeTab === 'cronograma' ? 'active' : ''}`} onClick={() => { setActiveTab('cronograma'); setCronoSubView('list'); }}>
              <Calendar />
              <span>Agenda</span>
            </button>
          </>
        ) : (
          <>
            <button className={`bottom-nav-btn ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
              <Home />
              <span>Início</span>
            </button>
            <button className={`bottom-nav-btn ${activeTab === 'cronograma' ? 'active' : ''}`} onClick={() => { setActiveTab('cronograma'); setCronoSubView('list'); }}>
              <Calendar />
              <span>Agenda</span>
            </button>
            {currentRole === 'manager' && (
              <button className={`bottom-nav-btn ${activeTab === 'diretoria' ? 'active' : ''}`} onClick={() => setActiveTab('diretoria')}>
                <Briefcase />
                <span>Gestor</span>
              </button>
            )}
            {currentRole === 'parent' && (
              <>
                <button className={`bottom-nav-btn ${activeTab === 'painel' ? 'active' : ''}`} onClick={() => setActiveTab('painel')}>
                  <GraduationCap />
                  <span>Boletim</span>
                </button>
                <button className={`bottom-nav-btn ${activeTab === 'mensagens' ? 'active' : ''}`} onClick={() => setActiveTab('mensagens')}>
                  <MessageSquare />
                  <span>Mensagens</span>
                </button>
                <button className={`bottom-nav-btn ${activeTab === 'agenda_digital' ? 'active' : ''}`} onClick={() => setActiveTab('agenda_digital')}>
                  <BookOpen />
                  <span>Agenda</span>
                </button>
                <button className={`bottom-nav-btn ${activeTab === 'financeiro' || activeTab === 'autorizados' || activeTab === 'documentos' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(true)}>
                  <Plus />
                  <span>Mais</span>
                </button>
              </>
            )}
            {(currentRole === 'manager' || currentRole === 'teacher') && (
              <button className={`bottom-nav-btn ${activeTab === 'secretaria' ? 'active' : ''}`} onClick={() => { setActiveTab('secretaria'); setSecreSubView('menu'); }}>
                <FileText />
                <span>Secretaria</span>
              </button>
            )}
            {currentRole === 'manager' && (
              <button className={`bottom-nav-btn ${activeTab === 'documentos' ? 'active' : ''}`} onClick={() => setActiveTab('documentos')}>
                <FileSpreadsheet />
                <span>Docs</span>
              </button>
            )}
          </>
        )}
      </nav>

      {/* MODAL DETALHE CALENDÁRIO COM FORMULÁRIO DE EDIÇÃO PARA O DIRETOR */}
      {selectedCalendarDay && (
        <div className="modal-overlay" style={{ zIndex: 1000 }} onClick={() => setSelectedCalendarDay(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontWeight: 700 }}>Dia {selectedCalendarDay.day} de Junho de 2026</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSelectedCalendarDay(null)}><X size={20} /></button>
            </div>
            <div className="modal-body">
              {currentRole === 'manager' ? (
                /* VISÃO DIRETOR: EDITÁVEL */
                <div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontWeight: 700 }}>Status / Cor do Dia</label>
                    <select className="form-select" value={editCalendarType} onChange={e => setEditCalendarType(e.target.value)}>
                      <option value="green">🟢 Dia Letivo Letra A (Aulas Normais)</option>
                      <option value="red">🔴 Sem Aula (Feriado / Recesso / Fim de Semana)</option>
                      <option value="orange">🟠 Evento Especial (Apresentações / Festas)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontWeight: 700 }}>Descrição da Programação</label>
                    <textarea 
                      className="form-textarea" 
                      rows={3} 
                      value={editCalendarDesc} 
                      onChange={e => setEditCalendarDesc(e.target.value)} 
                      required
                    ></textarea>
                  </div>
                </div>
              ) : (
                /* VISÃO RESPONSÁVEL / PROFESSOR: LEITURA */
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span className={`status-badge ${selectedCalendarDay.type === 'green' ? 'success' : selectedCalendarDay.type === 'red' ? 'danger' : 'warning'}`}>
                      {selectedCalendarDay.type === 'green' && 'Letivo Normal'}
                      {selectedCalendarDay.type === 'red' && 'Feriado / Recesso / Fim de Semana'}
                      {selectedCalendarDay.type === 'orange' && 'Evento Diferenciado'}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    {selectedCalendarDay.description}
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              {currentRole === 'manager' ? (
                <>
                  <button className="btn btn-secondary" onClick={() => setSelectedCalendarDay(null)}>Cancelar</button>
                  <button className="btn btn-primary" onClick={() => {
                    setCalendarDays(prev => prev.map(d => {
                      if (d.day === selectedCalendarDay.day) {
                        return { ...d, type: editCalendarType, description: editCalendarDesc };
                      }
                      return d;
                    }));
                    setSelectedCalendarDay(null);
                    alert("Calendário letivo atualizado!");
                  }}>Salvar Alterações</button>
                </>
              ) : (
                <button className="btn btn-primary" onClick={() => setSelectedCalendarDay(null)}>Entendido</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETALHE DO CARD DE DISCIPLINA */}
      {selectedSubjectDetails && (
        <div className="modal-overlay" style={{ zIndex: 1000 }} onClick={() => setSelectedSubjectDetails(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontWeight: 700 }}>{selectedSubjectDetails.icon} Boletim Detalhado: {selectedSubjectDetails.name}</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSelectedSubjectDetails(null)}><X size={20} /></button>
            </div>
            <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '6px' }}>
                <span>Nota de Corte (Média Mínima):</span>
                <span className="status-badge success" style={{ backgroundColor: '#f1f5f9', color: '#1e293b' }}>
                  {selectedSubjectDetails.cutOff}
                </span>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Detalhamento das Notas</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div style={{ border: '1px solid var(--border-color)', padding: '0.5rem', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block' }}>Avaliação 1</span>
                    <strong style={{ fontSize: '1.15rem' }}>{selectedSubjectDetails.m1}</strong>
                  </div>
                  <div style={{ border: '1px solid var(--border-color)', padding: '0.5rem', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block' }}>Avaliação 2</span>
                    <strong style={{ fontSize: '1.15rem' }}>{selectedSubjectDetails.m2}</strong>
                  </div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '6px', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block' }}>Média Geral Semestral</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--primary-color)' }}>{selectedSubjectDetails.annual}</strong>
                  </div>
                  <div>
                    {parseFloat(selectedSubjectDetails.annual) >= parseFloat(selectedSubjectDetails.cutOff) ? (
                      <span className="status-badge success">Aprovado</span>
                    ) : (
                      <span className="status-badge warning">Abaixo da Média</span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Próximas Datas Importantes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
                  <div>📅 <strong>Próxima Prova:</strong> {selectedSubjectDetails.nextExam} <br />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '1.25rem' }}>Matéria: {selectedSubjectDetails.nextExamContent}</span>
                  </div>
                  <div style={{ marginTop: '0.25rem' }}>📝 <strong>Próxima Chamada / Atividade:</strong> {selectedSubjectDetails.nextExam === '24 de Junho de 2026' ? 'Lista de Geometria em 26/06' : 'Apresentação Oral em 22/06'}</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Observação do Professor</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                  "{selectedSubjectDetails.notes}"
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setSelectedSubjectDetails(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL AUDITORIA DE DOCUMENTO (DIRETOR) */}
      {selectedDocForReview && (
        <div className="modal-overlay" style={{ zIndex: 10000 }} onClick={() => setSelectedDocForReview(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h3 style={{ fontWeight: 700 }}>Auditoria: {selectedDocForReview.docName}</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSelectedDocForReview(null)}><X size={20} /></button>
            </div>
            
            <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Estudante:</span>
                <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-main)' }}>{selectedDocForReview.studentName}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Arquivo Enviado:</span>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--primary-color)' }}>📁 {selectedDocForReview.fileName}</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Data do Upload: {selectedDocForReview.uploadDate}</span>
              </div>

              {/* Visualização de Visualização de Documento Simulado */}
              <div style={{ border: '2px dashed var(--border-color)', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#fafafa', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}><FileText size={36} style={{ color: 'var(--primary-color)' }} /></div>
                <strong style={{ display: 'block', fontSize: '0.85rem' }}>{selectedDocForReview.docName.toUpperCase()}</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>EDUCLOUD VERIFICATION • MOCK VIEWER</span>
                
                <div style={{ marginTop: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', textAlign: 'left', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <p><strong>Nome do Titular:</strong> {selectedDocForReview.studentName}</p>
                  <p><strong>Responsável:</strong> Ivan Ramos</p>
                  <p><strong>Chave Digital:</strong> HASH-MD5-{selectedDocForReview.id}-2026</p>
                  <p style={{ color: 'var(--success)' }}>✓ Arquivo legível e assinado digitalmente.</p>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '0.5rem' }}>
                <label className="form-label" style={{ fontWeight: 700 }}>Parecer / Feedback para os Pais (Obrigatório se Rejeitado)</label>
                <textarea 
                  className="form-textarea"
                  rows={2}
                  value={docReviewFeedback}
                  onChange={e => setDocReviewFeedback(e.target.value)}
                  placeholder="Ex: Documento aceito ou Motivo da rejeição..."
                ></textarea>
              </div>
            </div>

            <div className="modal-footer" style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                className="btn btn-secondary" 
                style={{ color: '#dc2626', borderColor: '#fecaca', flex: 1 }}
                onClick={() => {
                  if (!docReviewFeedback.trim()) {
                    alert("Por favor, preencha o motivo de rejeição no campo de Parecer.");
                    return;
                  }
                  setStudentDocuments(prev => prev.map(item => {
                    if (item.id === selectedDocForReview.id) {
                      return { ...item, status: 'Rejeitado', feedback: docReviewFeedback };
                    }
                    return item;
                  }));
                  setDocReviewFeedback('');
                  setSelectedDocForReview(null);
                  alert("Documento rejeitado. O responsável foi notificado.");
                }}
              >
                Rejeitar Documento
              </button>
              <button 
                className="btn btn-primary" 
                style={{ flex: 1 }}
                onClick={() => {
                  setStudentDocuments(prev => prev.map(item => {
                    if (item.id === selectedDocForReview.id) {
                      return { ...item, status: 'Aprovado', feedback: docReviewFeedback || 'Documento aprovado.' };
                    }
                    return item;
                  }));
                  setDocReviewFeedback('');
                  setSelectedDocForReview(null);
                  alert("Documento aprovado com sucesso!");
                }}
              >
                Aprovar Documento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL MAIS OPÇÕES (MOBILE DRAWER) */}
      {isMobileMenuOpen && (
        <div className="modal-overlay" style={{ zIndex: 10000 }} onClick={() => setIsMobileMenuOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ 
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            maxWidth: '100%',
            animation: 'slideUpMobile 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <div className="modal-header" style={{ padding: '1rem 1.5rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)' }}>Mais Opções</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }} onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button 
                className="btn btn-secondary" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  justifyContent: 'flex-start',
                  padding: '1rem',
                  fontSize: '0.9rem',
                  width: '100%'
                }}
                onClick={() => {
                  setActiveTab('financeiro');
                  setIsMobileMenuOpen(false);
                }}
              >
                <DollarSign size={18} style={{ color: 'var(--primary-color)' }} />
                <span>Financeiro e Boletos</span>
              </button>
              
              <button 
                className="btn btn-secondary" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  justifyContent: 'flex-start',
                  padding: '1rem',
                  fontSize: '0.9rem',
                  width: '100%'
                }}
                onClick={() => {
                  setActiveTab('autorizados');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Users size={18} style={{ color: 'var(--primary-color)' }} />
                <span>Pessoas Autorizadas a Retirar</span>
              </button>

              <button 
                className="btn btn-secondary" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  justifyContent: 'flex-start',
                  padding: '1rem',
                  fontSize: '0.9rem',
                  width: '100%'
                }}
                onClick={() => {
                  setActiveTab('documentos');
                  setIsMobileMenuOpen(false);
                }}
              >
                <FileText size={18} style={{ color: 'var(--primary-color)' }} />
                <span>Central de Documentos</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState('landing');
  const [onboardingStep, setOnboardingStep] = useState(1);

  // === ESTADOS DO ONBOARDING DO CLIENTE ===
  const [schoolConfig, setSchoolConfig] = useState({
    name: 'Colégio EduCloud',
    color: '#2563eb',
    hover: '#1d4ed8',
    logoText: 'CE'
  });

  const [schoolData, setSchoolData] = useState({
    classes: [
      { id: 1, name: "5º Ano A", shift: "Tarde" },
      { id: 2, name: "1º Ano B", shift: "Manhã" }
    ],
    teachers: [
      { id: 1, name: "Profª. Elaine Costa", subject: "Matemática" },
      { id: 2, name: "Prof. Marcos Silva", subject: "Ciências" }
    ],
    students: [
      { id: 1, name: "Arthur Ramos", parentName: "Ivan Ramos", class: "5º Ano A", attendance: "Presente", docStatus: "Pendente: Certidão de Nascimento" },
      { id: 2, name: "Beatriz Ramos", parentName: "Ivan Ramos", class: "1º Ano B", attendance: "Presente", docStatus: "Ok" }
    ]
  });

  // Temporários do Onboarding
  const [tempClass, setTempClass] = useState('');
  const [tempShift, setTempShift] = useState('Tarde');
  const [tempTeacher, setTempTeacher] = useState('');
  const [tempSubject, setTempSubject] = useState('Matemática');
  const [tempStudent, setTempStudent] = useState('');
  const [tempParent, setTempParent] = useState('');
  const [tempStudClass, setTempStudClass] = useState('5º Ano A');

  // Adicionar classe
  const handleAddClass = () => {
    if (!tempClass.trim()) return;
    const newClass = { id: schoolData.classes.length + 1, name: tempClass, shift: tempShift };
    setSchoolData(prev => ({ ...prev, classes: [...prev.classes, newClass] }));
    setTempClass('');
  };

  // Adicionar professor
  const handleAddTeacher = () => {
    if (!tempTeacher.trim()) return;
    const newTeacher = { id: schoolData.teachers.length + 1, name: tempTeacher, subject: tempSubject };
    setSchoolData(prev => ({ ...prev, teachers: [...prev.teachers, newTeacher] }));
    setTempTeacher('');
  };

  // Adicionar estudante
  const handleAddStudent = () => {
    if (!tempStudent.trim()) return;
    const newStudent = {
      id: schoolData.students.length + 1,
      name: tempStudent,
      parentName: tempParent || "Ivan Ramos",
      class: tempStudClass,
      attendance: "Presente",
      docStatus: "Ok"
    };
    setSchoolData(prev => ({ ...prev, students: [...prev.students, newStudent] }));
    setTempStudent('');
    setTempParent('');
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      
      {/* 1. LANDING PAGE IN TELA CHEIA (DESKTOP) */}
      {route === 'landing' && (
        <LandingPage 
          onEnterApp={() => setRoute('login')} 
        />
      )}

      {/* 2. TELA DE LOGIN */}
      {route === 'login' && (
        <div className="auth-wrapper">
          <div className="onboarding-card" style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: 800, fontSize: '1.25rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <School /> <span>EduCloud</span>
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontWeight: 700 }}>Acessar o Painel Escolar</h3>
            
            <form onSubmit={(e) => { e.preventDefault(); setRoute('app'); }}>
              <div className="form-group">
                <label className="form-label">E-mail Administrativo</label>
                <input type="email" className="form-input" defaultValue="carlos@escola.com.br" required />
              </div>
              <div className="form-group">
                <label className="form-label">Senha de Acesso</label>
                <input type="password" className="form-input" defaultValue="123456" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Entrar no Sistema
              </button>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem' }}>
              Não tem uma conta escola de testes? <br />
              <button style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: 600, cursor: 'pointer', marginTop: '0.25rem' }} onClick={() => setRoute('signup')}>
                Registrar Nova Escola (Onboarding)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. TELA DE CADASTRO */}
      {route === 'signup' && (
        <div className="auth-wrapper">
          <div className="onboarding-card" style={{ maxWidth: '450px' }}>
            <h3 style={{ fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>Cadastre sua Escola</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              Crie seu ambiente de testes exclusivo para apresentar a plataforma.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); setRoute('onboarding'); setOnboardingStep(1); }}>
              <div className="form-group">
                <label className="form-label">Nome da Escola</label>
                <input type="text" className="form-input" placeholder="Ex: Colégio Objetivo" onChange={e => setSchoolConfig(prev => ({ ...prev, name: e.target.value, logoText: e.target.value.substring(0,2).toUpperCase() }))} required />
              </div>
              <div className="form-group">
                <label className="form-label">Subdomínio de testes</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" className="form-input" placeholder="ex: colegio" required />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '0.5rem', fontWeight: 600 }}>.educloud.com</span>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">E-mail Administrador</label>
                <input type="email" className="form-input" placeholder="seuemail@escola.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Senha</label>
                <input type="password" className="form-input" placeholder="Mínimo 6 caracteres" required />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Criar Conta & Configurar Escola
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. ASSISTENTE DE CONFIGURAÇÃO (ONBOARDING) */}
      {route === 'onboarding' && (
        <div className="auth-wrapper">
          <div className="onboarding-card">
            
            {/* Indicador de passos */}
            <div className="step-indicator-bar">
              <div className={`step-node ${onboardingStep >= 1 ? 'active' : ''} ${onboardingStep > 1 ? 'completed' : ''}`}>1</div>
              <div className={`step-node ${onboardingStep >= 2 ? 'active' : ''} ${onboardingStep > 2 ? 'completed' : ''}`}>2</div>
              <div className={`step-node ${onboardingStep >= 3 ? 'active' : ''} ${onboardingStep > 3 ? 'completed' : ''}`}>3</div>
              <div className={`step-node ${onboardingStep >= 4 ? 'active' : ''} ${onboardingStep > 4 ? 'completed' : ''}`}>4</div>
            </div>

            {/* PASSO 1: CONFIGURAÇÃO DE WHITE-LABEL */}
            {onboardingStep === 1 && (
              <div>
                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Passo 1: Identidade Visual White-label</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Defina a cor principal e o logo que serão aplicados no PWA de sua escola.</p>
                
                <div className="form-group">
                  <label className="form-label">Paleta de Cores do App</label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    {PALETTES.map(p => (
                      <button 
                        key={p.name} 
                        type="button"
                        style={{
                          padding: '0.5rem 1rem', fontSize: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '20px', cursor: 'pointer',
                          backgroundColor: p.color, color: '#ffffff', fontWeight: 600,
                          outline: schoolConfig.color === p.color ? '2px solid #000' : 'none'
                        }}
                        onClick={() => setSchoolConfig(prev => ({ ...prev, color: p.color, hover: p.hover }))}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Iniciais do Logotipo (Ex: CO)</label>
                  <input 
                    type="text" className="form-input" maxLength={3} value={schoolConfig.logoText} 
                    onChange={e => setSchoolConfig(prev => ({ ...prev, logoText: e.target.value.toUpperCase() }))} 
                  />
                </div>

                <div style={{ border: '1px dashed var(--border-color)', padding: '1rem', borderRadius: '8px', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: schoolConfig.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {schoolConfig.logoText}
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{schoolConfig.name}</span>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pré-visualização do logotipo e cor principal ativos.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                  <button className="btn btn-primary" onClick={() => setOnboardingStep(2)}>
                    Prosseguir Passo 2
                  </button>
                </div>
              </div>
            )}

            {/* PASSO 2: CADASTRO DE TURMAS */}
            {onboardingStep === 2 && (
              <div>
                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Passo 2: Configurar Turmas e Turnos</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Cadastre as turmas iniciais de sua instituição.</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <input type="text" className="form-input" placeholder="Ex: 5º Ano A" value={tempClass} onChange={e => setTempClass(e.target.value)} />
                  <select className="form-select" value={tempShift} onChange={e => setTempShift(e.target.value)} style={{ width: '120px' }}>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Integral">Integral</option>
                  </select>
                  <button type="button" className="btn btn-primary" onClick={handleAddClass}>
                    <Plus size={16} />
                  </button>
                </div>

                <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
                  {schoolData.classes.map(c => (
                    <div key={c.id} className="onboarding-list-item">
                      <span>{c.name} - Turno: <strong>{c.shift}</strong></span>
                      <button onClick={() => setSchoolData(prev => ({ ...prev, classes: prev.classes.filter(item => item.id !== c.id) }))}>
                        Excluir
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button className="btn btn-secondary" onClick={() => setOnboardingStep(1)}>Voltar</button>
                  <button className="btn btn-primary" onClick={() => setOnboardingStep(3)}>Prosseguir Passo 3</button>
                </div>
              </div>
            )}

            {/* PASSO 3: CADASTRO DE PROFESSORES */}
            {onboardingStep === 3 && (
              <div>
                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Passo 3: Cadastrar Professores</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Insira os professores e suas respectivas matérias.</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <input type="text" className="form-input" placeholder="Nome do Professor" value={tempTeacher} onChange={e => setTempTeacher(e.target.value)} />
                  <select className="form-select" value={tempSubject} onChange={e => setTempSubject(e.target.value)} style={{ width: '150px' }}>
                    <option value="Matemática">Matemática</option>
                    <option value="Ciências">Ciências</option>
                    <option value="História">História</option>
                    <option value="Português">Português</option>
                  </select>
                  <button type="button" className="btn btn-primary" onClick={handleAddTeacher}>
                    <Plus size={16} />
                  </button>
                </div>

                <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
                  {schoolData.teachers.map(t => (
                    <div key={t.id} className="onboarding-list-item">
                      <span>{t.name} (Matéria: <strong>{t.subject}</strong>)</span>
                      <button onClick={() => setSchoolData(prev => ({ ...prev, teachers: prev.teachers.filter(item => item.id !== t.id) }))}>
                        Excluir
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button className="btn btn-secondary" onClick={() => setOnboardingStep(2)}>Voltar</button>
                  <button className="btn btn-primary" onClick={() => setOnboardingStep(4)}>Prosseguir Passo 4</button>
                </div>
              </div>
            )}

            {/* PASSO 4: CADASTRO DE ALUNOS */}
            {onboardingStep === 4 && (
              <div>
                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Passo 4: Matricular Alunos & Irmãos</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Cadastre os alunos vinculando-os ao mesmo responsável (Ivan Ramos) para testar o recurso multi-filhos.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="text" className="form-input" placeholder="Nome do Aluno" value={tempStudent} onChange={e => setTempStudent(e.target.value)} />
                    <input type="text" className="form-input" placeholder="Responsável" value={tempParent} onChange={e => setTempParent(e.target.value)} />
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <select className="form-select" value={tempStudClass} onChange={e => setTempStudClass(e.target.value)}>
                      {schoolData.classes.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                    <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={handleAddStudent}>
                      + Matricular Aluno
                    </button>
                  </div>
                </div>

                <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                  {schoolData.students.map(s => (
                    <div key={s.id} className="onboarding-list-item">
                      <span>{s.name} ({s.class}) - Pai: {s.parentName}</span>
                      <button onClick={() => setSchoolData(prev => ({ ...prev, students: prev.students.filter(item => item.id !== s.id) }))}>
                        Excluir
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button className="btn btn-secondary" onClick={() => setOnboardingStep(3)}>Voltar</button>
                  <button className="btn btn-primary" onClick={() => setRoute('app')}>
                    Finalizar e Entrar no Painel <Check size={16} />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 5. PORTAL DE GESTÃO DO APLICATIVO SAAS */}
      {route === 'app' && (
        <AppPortal 
          schoolConfig={schoolConfig}
          setSchoolConfig={setSchoolConfig}
          schoolData={schoolData}
          setSchoolData={setSchoolData}
          onBackToLanding={() => setRoute('landing')}
        />
      )}

    </div>
  );
}

