-- ==========================================
-- EDUCLOUD DATABASE SCHEMA (POSTGRESQL / SUPABASE)
-- SCHEMA MULTI-TENANT PARA ESCOLAS
-- ==========================================

-- Habilitar a extensão uuid-ossp para gerar IDs aleatórios robustos
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABELA DE ESCOLAS (TENANTS / CLIENTES SAAS)
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    subdomain VARCHAR(50) UNIQUE NOT NULL,
    custom_domain VARCHAR(100) UNIQUE,
    logo_url TEXT,
    primary_color VARCHAR(10) DEFAULT '#0284c7',
    primary_hover VARCHAR(10) DEFAULT '#0369a1',
    header_theme VARCHAR(30) DEFAULT 'primary-gradient',
    plan_tier VARCHAR(20) DEFAULT 'crescimento', -- 'crescimento', 'pro', 'enterprise'
    status VARCHAR(20) DEFAULT 'active', -- 'active', 'suspended', 'trial'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABELA DE USUÁRIOS (DIREÇÃO, PROFESSORES, PAIS, ALUNOS)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('manager', 'teacher', 'parent', 'student')),
    phone VARCHAR(20),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABELA DE TURMAS (CLASSES)
CREATE TABLE classes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL, -- ex: '5º Ano A', '6º Ano B'
    shift VARCHAR(20) NOT NULL, -- ex: 'Tarde', 'Manhã'
    grade_level VARCHAR(30) NOT NULL -- ex: 'Ensino Fundamental I'
);

-- 4. MATRÍCULA DE ALUNOS
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    class_id UUID REFERENCES classes(id) ON DELETE SET NULL,
    parent_id UUID REFERENCES users(id) ON DELETE SET NULL, -- Responsável financeiro/pedagógico
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. RELAÇÃO DE PROFESSORES E TURMAS
CREATE TABLE teacher_classes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    subject VARCHAR(50) NOT NULL, -- ex: 'Matemática', 'Ciências'
    UNIQUE(teacher_id, class_id, subject)
);

-- 6. TAREFAS DA AGENDA DIÁRIA
CREATE TABLE agenda_tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
    subject VARCHAR(50) NOT NULL,
    task_description TEXT NOT NULL,
    task_type VARCHAR(30) NOT NULL, -- ex: 'Tarefa de Casa', 'Trabalho', 'Prova'
    due_date VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. NOTAS DOS ALUNOS
CREATE TABLE student_grades (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    subject VARCHAR(50) NOT NULL,
    m1 NUMERIC(4, 2) DEFAULT 0.00,
    m2 NUMERIC(4, 2) DEFAULT 0.00,
    sem1 NUMERIC(4, 2) DEFAULT 0.00,
    annual NUMERIC(4, 2) DEFAULT 0.00,
    updated_by UUID REFERENCES users(id) ON DELETE SET NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, subject)
);

-- 8. CONTROLE DE FREQUÊNCIA (CHAMADA)
CREATE TABLE attendance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('Presente', 'Ausente')),
    recorded_by UUID REFERENCES users(id) ON DELETE SET NULL,
    UNIQUE(student_id, date)
);

-- 9. BOLETOS E COBRANÇAS FINANCEIRAS
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    month VARCHAR(30) NOT NULL, -- ex: 'Junho/2026'
    due_date DATE NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'Pendente' CHECK (status IN ('Pendente', 'Pago', 'Vencido')),
    pay_date DATE,
    pix_code TEXT,
    gateway_id VARCHAR(100), -- ID da cobrança no Asaas/Stripe/etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. QUADRO DE COMUNICADOS GERAIS
CREATE TABLE notices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'Geral', -- ex: 'Eventos', 'Financeiro'
    author VARCHAR(50) DEFAULT 'Direção',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 11. MURAL DE INSCRIÇÕES E RSVP DE EVENTOS
CREATE TABLE event_rsvps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    event_id INT NOT NULL,
    parent_id UUID REFERENCES users(id) ON DELETE CASCADE,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    rsvp_status VARCHAR(20) NOT NULL CHECK (rsvp_status IN ('Confirmado', 'Recusado')),
    clothing_size VARCHAR(20), -- opcional (tamanho selecionado)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(event_id, student_id)
);

-- 12. MENSAGENS E SALAS DE CHAT (TEACHER <-> PARENT)
CREATE TABLE chat_rooms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, teacher_id, parent_id)
);

CREATE TABLE chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chat_room_id UUID REFERENCES chat_rooms(id) ON DELETE CASCADE,
    sender_role VARCHAR(20) NOT NULL CHECK (sender_role IN ('parent', 'teacher')),
    text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- ÍNDICES PARA ALTA PERFORMANCE
-- ==========================================
CREATE INDEX idx_users_tenant ON users(tenant_id);
CREATE INDEX idx_students_tenant ON students(tenant_id);
CREATE INDEX idx_invoices_tenant ON invoices(tenant_id);
CREATE INDEX idx_chat_messages_room ON chat_messages(chat_room_id);
