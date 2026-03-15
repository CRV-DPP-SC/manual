/* ================================================
   MANUAL OPERACIONAL CRV - Scripts
   ================================================ */

// ---- Navegação entre páginas ----
function navegarPara(paginaId) {
  // Esconde todas as seções
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('ativo'));
  // Mostra a seção alvo
  const alvo = document.getElementById(paginaId);
  if (alvo) {
    alvo.classList.add('ativo');
    alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // Atualiza nav ativo
  document.querySelectorAll('.nav-principal a').forEach(a => {
    a.classList.remove('ativo');
    if (a.dataset.pagina === paginaId) a.classList.add('ativo');
  });
  // Atualiza breadcrumb
  atualizarBreadcrumb(paginaId);
  // Fecha menu mobile se aberto
  document.getElementById('navPrincipal').classList.remove('aberto');

  // ---- MELHORIA 1: Atualiza a URL com o hash da página ----
  // Permite compartilhar/favoritar links diretos para cada seção
  history.pushState(null, null, '#' + paginaId);
}

// ---- Breadcrumb dinâmico ----
const nomesPagina = {
  'inicio': 'Início',
  'hipoteses': 'Hipóteses de Transferência',
  'fluxo': 'Fluxo Operacional',
  'documentos': 'Documentos Necessários',
  'modelos': 'Modelos de Ofícios',
  'prazos': 'Prazos',
  'vedacoes': 'Vedações',
  'legislacao': 'Legislação',
  'unidades': 'Unidades Prisionais',
  'emergencial': 'Segurança / Emergência',
  'pedido-preso': 'Pedido do Preso ou Família',
  'equalizacao': 'Adequação da Capacidade de Ocupação',
  'mandado-comarca': 'Mandado de Prisão de Comarca Diversa',
  'pernoite': 'Pernoite',
  'seguranca-maxima': 'Segurança Máxima / RDD'
};

function atualizarBreadcrumb(paginaId) {
  const el = document.getElementById('breadcrumbAtual');
  if (el) el.textContent = nomesPagina[paginaId] || paginaId;
  const link = document.getElementById('breadcrumbLink');
  if (link) {
    if (paginaId !== 'inicio') {
      link.style.display = 'flex';
    } else {
      link.style.display = 'none';
    }
  }
}

// ---- Menu hambúrguer mobile ----
function toggleMenu() {
  const nav = document.getElementById('navPrincipal');
  nav.classList.toggle('aberto');
}

// ---- Accordion ----
function toggleAccordion(header) {
  const item = header.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');
  const estaAberto = header.classList.contains('aberto');

  // Fecha todos do mesmo grupo
  const grupo = item.closest('.accordion');
  grupo.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('aberto'));
  grupo.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('aberto'));

  // Abre o clicado (se estava fechado)
  if (!estaAberto) {
    header.classList.add('aberto');
    body.classList.add('aberto');
  }
}

// ---- Copiar modelo de ofício ----
function copiarModelo(btnEl) {
  const card = btnEl.closest('.modelo-card');
  const textoEl = card.querySelector('.modelo-texto');
  const texto = textoEl ? textoEl.innerText : '';
  navigator.clipboard.writeText(texto).then(() => {
    const original = btnEl.innerHTML;
    btnEl.innerHTML = '✅ Copiado!';
    btnEl.style.background = '#065f46';
    setTimeout(() => {
      btnEl.innerHTML = original;
      btnEl.style.background = '';
    }, 2000);
  }).catch(() => {
    // Fallback para navegadores antigos
    const area = document.createElement('textarea');
    area.value = texto;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    btnEl.innerHTML = '✅ Copiado!';
    setTimeout(() => { btnEl.innerHTML = '📋 Copiar Texto'; }, 2000);
  });
}

// ---- Filtro de unidades prisionais ----
function filtrarUnidades() {
  const busca = document.getElementById('buscaUnidade').value.toLowerCase();
  const tipo  = document.getElementById('filtroTipo').value.toLowerCase();
  document.querySelectorAll('.unidade-card').forEach(card => {
    const texto = card.textContent.toLowerCase();
    const tipoBadge = (card.dataset.tipo || '').toLowerCase();
    const matchBusca = texto.includes(busca);
    const matchTipo  = !tipo || tipoBadge.includes(tipo);
    card.style.display = (matchBusca && matchTipo) ? '' : 'none';
  });
}

// ================================================
// MELHORIA 3 — Busca global no manual
// Filtra e exibe resultados de todas as seções
// ================================================
function buscarManual() {
  const input    = document.getElementById('buscaManual');
  const termo    = input.value.toLowerCase().trim();
  const resultado = document.getElementById('buscaResultado');
  const btnLimpar = document.getElementById('buscaLimpar');

  // Exibe/oculta botão de limpar
  btnLimpar.style.display = termo.length > 0 ? 'flex' : 'none';

  // Se campo vazio, restaura exibição normal
  if (!termo) {
    resultado.style.display = 'none';
    resultado.innerHTML = '';
    document.querySelectorAll('.page-section').forEach(sec => {
      sec.style.display = '';
    });
    return;
  }

  // Coleta resultados em todas as seções
  const hits = [];
  document.querySelectorAll('.page-section').forEach(sec => {
    // Oculta todas (a busca usa o painel de resultados)
    sec.style.display = 'none';

    const textoSec = sec.innerText.toLowerCase();
    if (textoSec.includes(termo)) {
      const id    = sec.id;
      const nome  = nomesPagina[id] || id;

      // Tenta extrair um trecho de contexto ao redor do termo
      const idx = textoSec.indexOf(termo);
      const inicio = Math.max(0, idx - 60);
      const fim    = Math.min(textoSec.length, idx + termo.length + 100);
      let trecho   = sec.innerText.substring(inicio, fim).replace(/\n+/g, ' ').trim();
      if (inicio > 0) trecho = '…' + trecho;
      if (fim < textoSec.length) trecho = trecho + '…';

      // Destaca o termo no trecho
      const regex   = new RegExp('(' + termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      const trecho2 = trecho.replace(regex, '<mark>$1</mark>');

      hits.push({ id, nome, trecho: trecho2 });
    }
  });

  // Monta o painel de resultados
  if (hits.length === 0) {
    resultado.innerHTML = '<p class="busca-sem-resultado">Nenhum resultado encontrado para <strong>"' + input.value + '"</strong>.</p>';
  } else {
    resultado.innerHTML =
      '<p class="busca-contagem">' + hits.length + ' seção(ões) encontrada(s) para <strong>"' + input.value + '"</strong>:</p>' +
      hits.map(h =>
        '<a class="busca-item" href="#" onclick="limparBusca(); navegarPara(\'' + h.id + '\'); return false;">' +
          '<span class="busca-item-nome">📄 ' + h.nome + '</span>' +
          '<span class="busca-item-trecho">' + h.trecho + '</span>' +
        '</a>'
      ).join('');
  }
  resultado.style.display = 'block';
}

// Limpa a busca e restaura a página inicial
function limparBusca() {
  const input = document.getElementById('buscaManual');
  input.value = '';
  document.getElementById('buscaResultado').style.display = 'none';
  document.getElementById('buscaResultado').innerHTML = '';
  document.getElementById('buscaLimpar').style.display = 'none';
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.style.display = '';
  });
  navegarPara('inicio');
}

// ================================================
// INICIALIZAÇÃO
// ================================================
document.addEventListener('DOMContentLoaded', () => {

  // ---- MELHORIA 2: Abre a página correta pelo hash da URL ----
  // Exemplos: site.com/#fluxo  →  abre seção "fluxo"
  //           site.com/         →  abre "inicio" por padrão
  const hashInicial = window.location.hash.replace('#', '').trim();
  const paginasValidas = Object.keys(nomesPagina);

  if (hashInicial && paginasValidas.includes(hashInicial)) {
    navegarPara(hashInicial);
  } else {
    navegarPara('inicio');
  }

  // Suporte ao botão "voltar/avançar" do navegador
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && paginasValidas.includes(hash)) {
      // Navega sem gerar novo pushState (evita duplicação)
      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('ativo'));
      const alvo = document.getElementById(hash);
      if (alvo) alvo.classList.add('ativo');
      document.querySelectorAll('.nav-principal a').forEach(a => {
        a.classList.remove('ativo');
        if (a.dataset.pagina === hash) a.classList.add('ativo');
      });
      atualizarBreadcrumb(hash);
    }
  });

  // Animações de entrada nos elementos principais
  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animation = el.style.animation; // força repaint
  });
});
