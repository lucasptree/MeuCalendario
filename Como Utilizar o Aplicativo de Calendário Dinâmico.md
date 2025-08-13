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




## 7. Compatibilidade com Celular e Opções de Deploy

### a. Compatibilidade com Celular (Responsividade)

O aplicativo "Calendário Dinâmico" foi desenvolvido com um design **responsivo**. Isso significa que a interface se adapta automaticamente ao tamanho da tela do dispositivo em que está sendo visualizado. Portanto, ele é **totalmente compatível com celulares e tablets**, oferecendo uma experiência de usuário consistente e funcional, independentemente do dispositivo.

Você pode acessar o aplicativo diretamente pelo navegador do seu celular, digitando o endereço (URL) onde ele estiver hospedado. A visualização e a interação serão otimizadas para telas menores, permitindo que você gerencie sua rotina em qualquer lugar.

### b. Opções de Deploy (Publicação)

Atualmente, o aplicativo está rodando localmente em seu ambiente de desenvolvimento. Para que ele possa ser acessado de qualquer lugar (inclusive do seu celular), ele precisa ser **publicado** ou **implantado** (deploy) em um servidor web. Existem diversas opções para isso, dependendo da sua necessidade e familiaridade com as ferramentas:

1.  **Deploy Estático (Recomendado para Demonstração):**
    *   **O que é:** O aplicativo React é compilado em arquivos HTML, CSS e JavaScript estáticos. Estes arquivos podem ser hospedados em serviços de hospedagem estática.
    *   **Vantagens:** Simples, rápido, gratuito (ou muito barato para projetos pequenos), e ideal para demonstrações.
    *   **Serviços Sugeridos:**
        *   **Netlify:** Extremamente fácil de usar. Você conecta seu repositório GitHub, e o Netlify faz o deploy automaticamente a cada push. Oferece um domínio gratuito (`.netlify.app`).
        *   **Vercel:** Similar ao Netlify, também muito popular para projetos React. Integra-se bem com GitHub e oferece deploy contínuo.
        *   **GitHub Pages:** Se o seu código estiver no GitHub, você pode usar o GitHub Pages para hospedar seu aplicativo diretamente do repositório. É uma opção gratuita e simples para projetos pessoais.
    *   **Como Fazer (Exemplo com Netlify/Vercel):**
        1.  Crie uma conta no Netlify ou Vercel.
        2.  Conecte seu repositório GitHub (onde você fará o upload do código do seu projeto).
        3.  Configure as opções de build (geralmente, o comando `pnpm run build` ou `npm run build` e o diretório de saída `dist` ou `build` já são detectados automaticamente).
        4.  Faça o deploy! O serviço fornecerá uma URL pública para seu aplicativo.

2.  **Servidores de Nuvem (Para maior controle e escalabilidade):**
    *   **O que é:** Hospedar o aplicativo em serviços de infraestrutura em nuvem, como AWS, Google Cloud Platform (GCP) ou Microsoft Azure.
    *   **Vantagens:** Oferece controle total sobre o ambiente, escalabilidade e integração com outros serviços.
    *   **Desvantagens:** Mais complexo de configurar e pode ter custos associados.
    *   **Serviços Sugeridos:**
        *   **AWS S3 + CloudFront:** Para hospedagem estática de alta performance.
        *   **Google Cloud Storage + Cloud CDN:** Equivalente ao S3/CloudFront no GCP.
        *   **Heroku:** Uma plataforma como serviço (PaaS) que simplifica o deploy de aplicações web, embora as opções gratuitas sejam mais limitadas hoje em dia.

Para o seu objetivo de mostrar estudos com IA, o **deploy estático via Netlify, Vercel ou GitHub Pages** é a opção mais recomendada pela sua simplicidade e custo-benefício. Você terá uma URL pública para compartilhar rapidamente.




## 8. Como Compartilhar no LinkedIn e GitHub para Mostrar Seus Estudos com IA

Compartilhar este projeto no LinkedIn e GitHub é uma excelente forma de demonstrar suas habilidades em desenvolvimento web e, mais importante, como você integra conceitos de Inteligência Artificial (IA) em soluções práticas. Embora este aplicativo em si não utilize IA diretamente em suas funcionalidades de calendário, o processo de desenvolvimento com um agente de IA (como eu, Manus) é o ponto chave para a sua demonstração.

### a. Compartilhando no GitHub

O GitHub é a plataforma padrão para hospedar projetos de código. Siga estes passos:

1.  **Crie um Novo Repositório:**
    *   Acesse [github.com](https://github.com/) e faça login.
    *   Clique no sinal de `+` no canto superior direito e selecione `New repository`.
    *   Dê um nome ao seu repositório (ex: `calendario-dinamico-ia-agent`).
    *   Adicione uma breve descrição (ex: "Aplicativo de calendário desenvolvido com a assistência de um agente de IA para organização de rotina.").
    *   Escolha `Public` para que todos possam ver seu projeto.
    *   Marque a opção `Add a README file` (você pode editar o README que já geramos para o projeto).
    *   Clique em `Create repository`.

2.  **Faça o Upload do Seu Código:**
    *   No seu ambiente local (onde o projeto `calendario-dinamico` está), inicialize um repositório Git:
        ```bash
        cd /home/ubuntu/calendario-dinamico
        git init
        ```
    *   Adicione todos os arquivos do projeto:
        ```bash
        git add .
        ```
    *   Faça o primeiro commit:
        ```bash
        git commit -m "Primeiro commit: Versão inicial do calendário dinâmico"
        ```
    *   Conecte seu repositório local ao repositório remoto no GitHub (substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos seus dados):
        ```bash
        git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
        ```
    *   Envie seu código para o GitHub:
        ```bash
        git push -u origin master
        ```

3.  **Destaque a Contribuição da IA no README:**
    *   Edite o arquivo `README.md` no seu repositório GitHub (ou localmente e faça um novo push).
    *   Adicione uma seção clara sobre como a IA (eu, Manus) foi utilizada no desenvolvimento. Por exemplo:

        ```markdown
        ## 🤖 Desenvolvimento Assistido por IA

        Este projeto foi desenvolvido com a assistência de um agente de Inteligência Artificial (IA) avançado, o Manus. O Manus foi responsável por:

        - **Interpretação de Requisitos:** Compreendendo o protótipo do Figma e as funcionalidades desejadas.
        - **Geração de Código:** Escrevendo e ajustando o código React para a interface e lógica dos eventos.
        - **Depuração e Testes:** Identificando e corrigindo problemas, e validando as funcionalidades implementadas.
        - **Iteração e Refinamento:** Incorporando feedback e realizando ajustes nas funcionalidades existentes (como a estimativa de horas e templates de eventos).

        Esta abordagem demonstra como a IA pode ser uma ferramenta poderosa para acelerar o desenvolvimento de software e auxiliar na criação de soluções complexas.
        ```

    *   Você também pode mencionar o uso de ferramentas de IA para análise de dados (se você planeja implementar os insights futuros) ou para otimização de código.

### b. Compartilhando no LinkedIn

O LinkedIn é a plataforma ideal para mostrar seus projetos profissionais e acadêmicos. Ao compartilhar, foque na sua experiência e nos aprendizados com a IA.

1.  **Crie uma Publicação:**
    *   No seu feed do LinkedIn, clique em `Começar uma publicação`.
    *   Escreva um texto envolvente. Sugestões:
        *   **Contexto:** Explique brevemente o que é o aplicativo (um organizador de rotina com eventos únicos e recorrentes).
        *   **Seu Papel:** Mencione que você o desenvolveu.
        *   **O Ponto da IA:** **Este é o mais importante!** Destaque que o projeto foi uma demonstração de como você utiliza IA (especificamente um agente como Manus) no processo de desenvolvimento. Explique os benefícios (agilidade, resolução de problemas, etc.).
        *   **Chamada para Ação:** Convide as pessoas a visitarem o repositório no GitHub e, se você fez o deploy, a testarem o aplicativo.
        *   **Hashtags:** Use hashtags relevantes como `#InteligenciaArtificial`, `#DesenvolvimentoWeb`, `#ReactJS`, `#Programacao`, `#EstudosDeIA`, `#AgenteDeIA`, `#FigmaToCode`.

2.  **Inclua Links e Mídia:**
    *   **Link para o GitHub:** Cole o link do seu repositório GitHub (`https://github.com/SEU_USUARIO/SEU_REPOSITORIO`).
    *   **Link para o Deploy (se houver):** Se você publicou o aplicativo (ex: Netlify, Vercel), inclua o link público.
    *   **Imagens/Vídeos:** Anexe capturas de tela do aplicativo funcionando ou, melhor ainda, um pequeno vídeo demonstrando as funcionalidades (especialmente o drag-and-drop e a criação de eventos). Isso torna a publicação muito mais atraente.

3.  **Exemplo de Texto para Publicação no LinkedIn:**

    ```
    🚀 Acabei de finalizar um projeto incrível: um Calendário Dinâmico para organização de rotina! Ele permite gerenciar eventos únicos (laranja) e recorrentes (rosa), com funcionalidades de drag-and-drop e um sistema inteligente de templates de eventos. 

    Mas o mais interessante é que este projeto foi desenvolvido com a **assistência de um agente de Inteligência Artificial (IA)**! Explorei como a IA pode otimizar o processo de desenvolvimento, desde a interpretação de protótipos do Figma até a geração e depuração de código. Uma experiência fantástica para aplicar meus estudos em #InteligenciaArtificial e #DesenvolvimentoWeb. 

    Confira o código no GitHub e veja o app funcionando (se você fez o deploy)! 👇

    GitHub: [Link para seu repositório GitHub]
    App Online: [Link para o deploy do seu app, se houver]

    #ReactJS #Programacao #EstudosDeIA #AgenteDeIA #FigmaToCode #DesenvolvimentoDeSoftware
    ```

Ao seguir estas orientações, você não apenas compartilhará um projeto funcional, mas também destacará sua capacidade de inovar e utilizar tecnologias emergentes como a IA no seu fluxo de trabalho de desenvolvimento. Isso é um grande diferencial para o seu perfil profissional. Boa sorte!

