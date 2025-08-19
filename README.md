# MeuCalendario
Projeto pessoal de desenvolvimento de um calendario usando como base o pensamento da experiência particular de rotina com desenvolvimento assistido pela inteligência artificial Manus

# Como Utilizar o Aplicativo de Calendário Dinâmico

Este guia detalha como você pode aproveitar ao máximo o seu novo aplicativo de calendário para organizar sua rotina de forma eficiente.

## 1. Visão Geral da Interface

Ao abrir o aplicativo, você verá um calendário semanal com horários de 7:00 às 20:00. No topo, há botões para navegar entre as semanas (`<` e `>`), um botão para retornar à semana atual (`Hoje`), um botão para acessar seus `Templates` de eventos e um botão para criar um `Novo Evento`.

## 2. Criando Eventos

Você pode criar dois tipos de eventos:

### a. Eventos Únicos (Laranja 🟠)

São eventos que acontecem sem uma frequência exata e são ideais para tarefas pontuais ou compromissos específicos.

1.  **Clique no botão `Novo Evento`** no canto superior direito ou clique diretamente em qualquer célula de horário no calendário.
2.  No modal que se abre, preencha o campo `Nome do Evento`.
3.  Certifique-se de que `Evento Único` esteja selecionado no campo `Tipo de Evento`.
4.  No campo `Horas Estimadas`, insira um valor numérico (ex: `2.5` para duas horas e meia) que representa a duração estimada da tarefa. Esta é uma estimativa flexível, não um horário fixo.
5.  Opcionalmente, adicione uma `Descrição` para mais detalhes.
6.  Clique em `Criar Evento`.

**Reutilização de Eventos Únicos:**

Ao criar um evento único, ele é automaticamente salvo como um 

template. Para reutilizá-lo:

1.  Clique no botão `Templates` no canto superior direito.
2.  Você verá uma lista de seus eventos únicos salvos, ordenados pelos mais utilizados. Cada template mostra o nome, horas estimadas e quantas vezes foi usado.
3.  Clique no botão `Usar` ao lado do template desejado. Isso preencherá automaticamente o formulário de `Novo Evento` com os dados do template.
4.  Ajuste a data ou outros detalhes se necessário e clique em `Criar Evento`.

### b. Eventos Recorrentes (Rosa 🩷)

São eventos que se repetem todo dia no mesmo horário e são ideais para rotinas diárias.

1.  **Clique no botão `Novo Evento`** ou em uma célula do calendário.
2.  Preencha o `Nome do Evento`.
3.  Selecione `Evento Recorrente` no campo `Tipo de Evento`.
4.  Defina o `Horário Início` e `Horário Fim` para o evento. Estes horários serão fixos para todos os dias.
5.  Adicione uma `Descrição` opcional.
6.  Clique em `Criar Evento`.

## 3. Editando Eventos

Para modificar um evento existente:

1.  Clique no evento diretamente no calendário.
2.  O modal de edição será aberto, pré-preenchido com as informações do evento.
3.  Faça as alterações desejadas (nome, tipo, horas estimadas/horários, descrição).
4.  Clique em `Salvar Alterações`.

## 4. Movendo Eventos (Drag & Drop)

Você pode reorganizar seus eventos únicos no calendário:

1.  Clique e segure o ícone de `grip` (vertical dots) ao lado do nome do evento único.
2.  Arraste o evento para a célula de horário e dia desejada no calendário.
3.  Solte o botão do mouse para posicionar o evento.

## 5. Excluindo Eventos

Para remover um evento:

1.  Clique no evento que deseja excluir.
2.  No modal de edição, clique no botão de lixeira (🗑️) vermelho.
3.  Confirme a exclusão se solicitado.

## 6. Navegando no Calendário

-   Use os botões de seta (`<` e `>`) ao lado do mês para navegar entre as semanas.
-   Clique no botão `Hoje` para retornar rapidamente à semana que contém a data atual.

Com estas instruções, você estará pronto para gerenciar sua rotina de forma dinâmica e eficiente!

## 🤖 Desenvolvimento Assistido por IA

        Este projeto foi desenvolvido com a assistência de um agente de Inteligência Artificial (IA) avançado, o Manus. O Manus foi responsável por:

        - **Interpretação de Requisitos:** Compreendendo o protótipo do Figma e as funcionalidades desejadas.
        - **Geração de Código:** Escrevendo e ajustando o código React para a interface e lógica dos eventos.
        - **Depuração e Testes:** Identificando e corrigindo problemas, e validando as funcionalidades implementadas.
        - **Iteração e Refinamento:** Incorporando feedback e realizando ajustes nas funcionalidades existentes (como a estimativa de horas e templates de eventos).
