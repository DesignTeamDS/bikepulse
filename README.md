# Associação Bike Pulse — Protótipo do site

Protótipo navegável da **Associação Portuguesa de Comércio de Bicicletas e Serviços (Bike Pulse)**.
Construído em HTML + CSS + JavaScript puro, com features pensadas para serem reproduzíveis no **WordPress + Elementor Pro**.

## Como visualizar localmente

```bash
cd site
python3 -m http.server 8100
# abrir http://localhost:8100
```

## Estrutura

```
site/
├── index.html            # Home
├── sobre.html            # Sobre nós (A ABP, Objetivos, Visão Estratégica)
├── associados.html       # Benefícios, Categorias, Formulário de Adesão
├── parcerias.html        # Tipos de parceria, parceiros, como aderir
├── formacao.html         # Cursos, Certificações
├── noticias.html         # Legislação, Mercado, Mobilidade (com filtro)
├── eventos.html          # Agenda e eventos
├── relatorios.html       # Relatórios Nacionais e Internacionais
├── bolsa-emprego.html    # Bolsa de emprego (com filtro)
├── contactos.html        # Contactos, mapa e FAQ
├── css/style.css         # Design system completo (tokens, componentes, responsivo)
├── js/
│   ├── components.js     # Header + Footer (fonte única — equivalente aos templates globais do Elementor) + biblioteca de ícones SVG
│   └── main.js           # Interações: menu, reveal, contadores, FAQ, filtros, formulários
├── fonts/                # Aglet Sans (títulos)
└── assets/               # Logos (cor / escuro / branco)
```

## Identidade

- **Cores:** Rosa `#F16A7B` · Verde `#74C58E` · Cinza claro `#ECECEC` · Escuro `#212121`
- **Títulos:** Aglet Sans · **Texto:** Poppins (Google Fonts)
- **Estilo:** institucional clean + acentos de gradiente rosa→verde nos heros e CTAs

## Notas para reprodução no Elementor

- O header e o footer são uma fonte única em `components.js` → correspondem a **templates globais** no Elementor.
- Cada secção mapeia 1:1 para uma secção/container do Elementor; os ícones são SVG inline (Lucide-style).
- Os formulários são demonstrativos (sem backend) — substituir por **Elementor Forms**.
- O mapa usa o embed do Google Maps (`output=embed`, sem chave API).

## Imagens

Fotografias reais via **Unsplash** (hotlink direto), otimizadas com `?auto=format&fit=crop&w=…&q=80`.
