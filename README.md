<div align="center">
  <img src="./assets/profile-banner.svg" width="100%" alt="Matheus Sousa dos Santos (Taiwansz) — AI Engineering &amp; Distributed Architecture" />
</div>

<div align="center">
  <a href="https://mth3us-portfolio.vercel.app"><b>Portfolio Website</b></a> &nbsp;•&nbsp;
  <a href="https://www.linkedin.com/in/mth3us/"><b>LinkedIn</b></a> &nbsp;•&nbsp;
  <a href="mailto:std.matheus@gmail.com"><b>std.matheus@gmail.com</b></a> &nbsp;•&nbsp;
  <a href="https://github.com/Taiwansz"><b>GitHub Repositories</b></a>
</div>

<br />

## Executive Overview

I am an **AI Engineer and Full-Stack Systems Developer** focused on the architecture of autonomous multi-agent systems, high-integrity transactional backends, and token-efficient LLM runtimes. Currently in my 8th semester of **B.S. in Computer Science** at Centro Universitário Max Planck (UniMAX).

My engineering approach prioritizes architectural discipline: replacing ad-hoc prompt chains with deterministic state machines, implementing database-level transactional integrity over client-side assumptions, and enforcing strict type safety across the entire delivery lifecycle.

---

## Featured Engineering Projects

### 01. Thallium — Core Banking &amp; Double-Entry Ledger Infrastructure

A financial ledger and digital banking core engineered for absolute transactional consistency, zero-balance anomalies, and idempotent payment processing.

<p align="center">
  <img src="./assets/projects/thallium-architecture.svg" width="100%" alt="Thallium Transaction Pipeline Architecture" />
</p>

- **Core Problem:** Financial applications suffer from race conditions, negative balance glitches, and inconsistent states when business logic relies on decoupled application-tier checks instead of atomic database guarantees.
- **Technical Approach:** Routes all balance mutations through atomic PostgreSQL Stored Procedures (RPCs) guarded by Row-Level Security (RLS) tied to authenticated session tokens. Every debit, credit, and Pix operation executes within a strict double-entry ledger invariant ($S \ge 0$), synchronously producing signed audit logs.
- **Key Capabilities:**
  - Double-entry ledger core recording signed debit/credit movements in an immutable `transacoes` schema.
  - Atomic database RPCs for deposits, withdrawals, email transfers, and Pix key settlements.
  - End-to-end integration and behavioral test coverage powered by Playwright.
- **Technologies:** `Next.js 16 (App Router)` &nbsp;•&nbsp; `Tailwind CSS v4` &nbsp;•&nbsp; `TypeScript 5` &nbsp;•&nbsp; `Supabase (PostgreSQL RPCs &amp; RLS)` &nbsp;•&nbsp; `Playwright`
- **Repository:** [`github.com/Taiwansz/Thallium`](https://github.com/Taiwansz/Thallium)

---

### 02. Atlas OS — Multi-Agent Engineering Operating System

An engineering operating system designed for deterministic multi-agent orchestration, constitutional code quality enforcement, and persistent architectural memory.

<p align="center">
  <img src="./assets/projects/atlas-architecture.svg" width="100%" alt="Atlas OS Architecture Pipeline" />
</p>

- **Core Problem:** Generative AI code tools accelerate implementation speed but induce severe institutional amnesia, quality drift, and unmaintainable architectural debt across software lifecycles.
- **Technical Approach:** Implements a *Blueprint-First* specification protocol. Agents operate under persistent memory modules that log Architecture Decision Records (ADRs) and topological code graphs, evaluated by continuous constitutional quality gates before code commit.
- **Key Capabilities:**
  - Multi-agent coordination runtime with deterministic role assignment and scheduling.
  - Persistent memory layer mitigating context loss across long-horizon engineering tasks.
  - Modular package structure orchestrated via Nx monorepo tooling.
- **Technologies:** `TypeScript` &nbsp;•&nbsp; `Node.js` &nbsp;•&nbsp; `Nx Monorepo` &nbsp;•&nbsp; `Docker` &nbsp;•&nbsp; `Jest`
- **Repository:** [`github.com/Taiwansz/atlas`](https://github.com/Taiwansz/atlas)

---

### Secondary Projects &amp; Tooling

#### TokLang — Semantic Prompt Compression Middleware
*A lightweight semantic compression middleware designed to execute client-side with sub-5ms latency, eliminating linguistic redundancy before payload dispatch to LLM endpoints.*
- **Implementation:** Employs an in-memory heuristic tokenizer and domain-specific grammar rules, stripping structural and conversational filler without adding external API latency or compromising payload privacy.
- **Empirical Validation Note:** While heuristic rules yield substantial token reductions on verbose natural language prompts, quantitative empirical evaluations across academic benchmark suites (BERTScore F1, ROUGE, and BLEU retention) are currently in progress as part of undergraduate thesis research.
- **Stack:** `JavaScript` &nbsp;•&nbsp; `Node.js` &nbsp;•&nbsp; `Vercel Runtime` &nbsp;•&nbsp; `Playwright`
- **Repository:** [`github.com/Taiwansz/TokLang`](https://github.com/Taiwansz/TokLang)

#### Ad Creative Studio — Multimodal Marketing Pipeline
*An automated advertising copy and asset generation pipeline powered by multimodal vision models.*
- **Implementation:** Connects Next.js application services to multimodal LLMs (GPT-4o Vision) to analyze product visual features and extract high-conversion copywriting hooks, formatted ad angles, and structured scripts into Supabase storage.
- **Stack:** `Next.js 15` &nbsp;•&nbsp; `TypeScript` &nbsp;•&nbsp; `Supabase` &nbsp;•&nbsp; `Tailwind CSS`
- **Access Note:** Private enterprise repository. Source code access available upon request.

---

## Honors &amp; Academic Recognition

- **1st Place — TechDay UniMAX (Tharium House)**  
  Awarded first place in the institutional engineering showcase at Centro Universitário Max Planck for *Tharium House*, an interactive 3D game engineered with real-time artificial intelligence behavior systems.  
  *Clarification Note: This recognition is specifically attributed to the Tharium House game system and is entirely distinct from the Thallium digital banking ledger.*

---

## Technical Stack &amp; Capabilities

| Category | Primary Technologies &amp; Standards |
| :--- | :--- |
| **Languages** | TypeScript, JavaScript (ESNext), Python 3.12+, SQL (PostgreSQL dialect), C++ |
| **Frontend Engineering** | Next.js (App Router), React 19, Tailwind CSS v4, HTML5 Semantics, WebGL / Three.js |
| **Backend &amp; Systems** | Node.js, Express, FastAPI, Supabase, RESTful APIs, WebSockets, Atomic RPC Stored Procedures |
| **Databases &amp; Storage** | PostgreSQL, Row-Level Security (RLS), MySQL, Redis |
| **DevOps &amp; Infrastructure** | Docker, Git, GitHub Actions (CI/CD Pipelines), Linux Environments, Playwright E2E |
| **AI &amp; Agentic Systems** | LLM API Orchestration, Prompt Compression Mechanics, Multi-Agent Scheduling, Vector Embeddings |

---

## Contact &amp; Professional Links

- **Email:** [`std.matheus@gmail.com`](mailto:std.matheus@gmail.com)
- **Portfolio:** [`mth3us-portfolio.vercel.app`](https://mth3us-portfolio.vercel.app)
- **LinkedIn:** [`linkedin.com/in/mth3us`](https://www.linkedin.com/in/mth3us/)
- **GitHub:** [`github.com/Taiwansz`](https://github.com/Taiwansz)

---

## Activity &amp; Contribution Graph

<div align="center">
  <a href="https://Taiwansz.github.io/Taiwansz/docs/" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Taiwansz/Taiwansz/output/pacman-contribution-graph-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Taiwansz/Taiwansz/output/pacman-contribution-graph.svg">
      <img alt="Pacman Contribution Graph" src="https://raw.githubusercontent.com/Taiwansz/Taiwansz/output/pacman-contribution-graph.svg" width="65%" />
    </picture>
  </a>
</div>

---

<details>
<summary><b>🇧🇷 Versão em Português Brasileiro (Clique para expandir)</b></summary>
<br />

### Visão Executiva

Desenvolvedor de Software e Engenheiro de IA focado na arquitetura de sistemas multiagentes autônomos, backends transacionais de alta integridade e runtimes de LLMs com eficiência de tokens. Bacharelando em Ciência da Computação (8º semestre) no Centro Universitário Max Planck (UniMAX).

Minha abordagem de engenharia prioriza rigor arquitetural: substituir fluxos de prompts desestruturados por máquinas de estados determinísticas, implementar integridade transacional no nível do banco de dados e garantir tipagem estrita de ponta a ponta.

---

### Projetos em Destaque

#### 01. Thallium — Core Bancário &amp; Ledger de Dupla Entrada
- **Problema:** Aplicações financeiras sofrem com condições de corrida, anomalias de saldo negativo e inconsistências quando regras críticas residem no cliente em vez de garantias atômicas de banco.
- **Abordagem Técnica:** Encaminha todas as mutações de saldo por meio de Procedimentos Armazenados (RPCs) atômicos em PostgreSQL, protegidos por políticas de Row-Level Security (RLS) vinculadas à sessão do usuário. Todas as operações de débito, crédito e Pix ocorrem sob a regra de ledger de dupla entrada ($S \ge 0$), gerando logs de auditoria síncronos e assinados.
- **Recursos Principais:** Livro-razão digital imutável, liquidação de transferências e chaves Pix via RPC, proteção contra saldo negativo e cobertura de testes ponta a ponta com Playwright.
- **Stack:** `Next.js 16 (App Router)` • `Tailwind CSS v4` • `TypeScript 5` • `Supabase (PostgreSQL RPCs &amp; RLS)` • `Playwright`
- **Repositório:** [`github.com/Taiwansz/Thallium`](https://github.com/Taiwansz/Thallium)

#### 02. Atlas OS — Sistema Operacional de Engenharia Multiagente
- **Problema:** Ferramentas de geração de código por IA aumentam a velocidade inicial, mas induzem amnésia institucional, perda de contexto arquitetural e acúmulo desordenado de dívida técnica.
- **Abordagem Técnica:** Adota o protocolo *Blueprint-First*. Agentes autônomos são orquestrados sob módulos de memória persistente que registram Decisões Arquiteturais (ADRs) e grafos de código, validados continuamente por portais constitucionais de qualidade antes de commits.
- **Recursos Principais:** Runtime de coordenação multiagente, camada de memória contextual persistente, validação automatizada de integridade e estrutura modular em monorepo com Nx.
- **Stack:** `TypeScript` • `Node.js` • `Nx Monorepo` • `Docker` • `Jest`
- **Repositório:** [`github.com/Taiwansz/atlas`](https://github.com/Taiwansz/atlas)

#### Projetos Secundários
- **TokLang:** Middleware de compressão semântica de prompts executado no lado do cliente com latência inferior a 5ms, removendo redundâncias gramaticais antes da transmissão aos provedores de LLM. Validação quantitativa empírica em andamento como tema formal de monografia acadêmica.
- **Ad Creative Studio:** Pipeline de geração estruturada de roteiros e ângulos publicitários utilizando modelos de visão multimodal (GPT-4o Vision) e Supabase. Repositório privado comercial.

---

### Conquistas Acadêmicas
- **1º Lugar — TechDay UniMAX (Tharium House):** Premiado com a primeira colocação na mostra institucional de engenharia da UniMAX pelo desenvolvimento do *Tharium House*, jogo 3D interativo integrado a sistemas de inteligência artificial em tempo real. (Projeto e premiação totalmente distintos do core bancário Thallium).

---

### Contato
- **E-mail:** [`std.matheus@gmail.com`](mailto:std.matheus@gmail.com)
- **Portfólio:** [`mth3us-portfolio.vercel.app`](https://mth3us-portfolio.vercel.app)
- **LinkedIn:** [`linkedin.com/in/mth3us`](https://www.linkedin.com/in/mth3us/)
- **GitHub:** [`github.com/Taiwansz`](https://github.com/Taiwansz)

</details>
