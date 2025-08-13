# 📅 Calendário Dinâmico - Organizador de Rotina

Uma aplicação moderna e intuitiva para organizar sua rotina diária com eventos únicos e recorrentes.

## 🚀 Funcionalidades

- **Eventos Únicos** (🟠): Para compromissos específicos e tarefas pontuais
- **Eventos Recorrentes** (🩷): Para rotinas diárias que se repetem
- **Drag & Drop**: Arraste eventos para reorganizar facilmente
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Persistência Automática**: Seus dados são salvos automaticamente
- **Navegação Intuitiva**: Navegue facilmente entre semanas

## 🛠️ Tecnologias

- React 19.1.0
- @dnd-kit (Drag & Drop)
- Tailwind CSS
- Lucide React (Ícones)
- Vite (Build Tool)

## 📦 Instalação

1. Clone o repositório ou extraia os arquivos
2. Instale as dependências:
   ```bash
   pnpm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
4. Acesse `http://localhost:5173` no seu navegador

## 🎯 Como Usar

### Criando Eventos
1. Clique em "Novo Evento" ou em qualquer célula do calendário
2. Preencha as informações do evento
3. Escolha entre "Evento Único" ou "Evento Recorrente"
4. Defina horários e descrição
5. Clique em "Criar Evento"

### Editando Eventos
1. Clique em qualquer evento existente
2. Modifique as informações desejadas
3. Clique em "Salvar Alterações"

### Movendo Eventos
1. Clique e arraste o ícone de grip (≡) do evento
2. Solte no horário/dia desejado
3. O evento será reposicionado automaticamente

## 🎨 Cores dos Eventos

- **🟠 Laranja**: Eventos únicos (acontecem uma vez)
- **🩷 Rosa**: Eventos recorrentes (repetem diariamente)

## 📱 Responsividade

A aplicação foi desenvolvida com design responsivo, funcionando perfeitamente em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 💾 Persistência de Dados

Os dados são automaticamente salvos no localStorage do navegador, garantindo que suas informações permaneçam disponíveis entre sessões.

## 🔧 Scripts Disponíveis

- `pnpm run dev` - Inicia servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Visualiza build de produção

## 📄 Licença

Este projeto foi desenvolvido como uma aplicação personalizada para organização de rotinas.

---

Desenvolvido com ❤️ para ajudar você a organizar sua rotina de forma dinâmica e eficiente!

