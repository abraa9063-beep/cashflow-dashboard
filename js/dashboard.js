// MOCK DATA (simula Google Forms / Firebase)
const pedidos = [
  { pedido: 'P-001', fornecedor: 'Fornecedor A', valor: 1200, desconto: 200 },
  { pedido: 'P-002', fornecedor: 'Fornecedor B', valor: 800, desconto: 0 },
  { pedido: 'P-003', fornecedor: 'Fornecedor A', valor: 1500, desconto: 300 },
  { pedido: 'P-004', fornecedor: 'Fornecedor C', valor: 600, desconto: 50 }
];

// MÉTRICAS GERAIS
const totalGasto = pedidos.reduce((s, p) => s + (p.valor - p.desconto), 0);
const totalCompras = pedidos.length;
const fornecedores = [...new Set(pedidos.map(p => p.fornecedor))];

// HEADER
document.getElementById('totalGasto').innerText =
  totalGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

document.getElementById('totalCompras').innerText = totalCompras;
document.getElementById('totalFornecedores').innerText = fornecedores.length;

// VISÃO GERAL
const ticketMedio = totalGasto / totalCompras;
const maiorCompra = Math.max(...pedidos.map(p => p.valor));
const totalDescontos = pedidos.reduce((s, p) => s + p.desconto, 0);

document.getElementById('ticketMedio').innerText =
  ticketMedio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

document.getElementById('maiorCompra').innerText =
  maiorCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

document.getElementById('totalDescontos').innerText =
  totalDescontos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// RANKINGS
const rankingCompras = [...pedidos]
  .sort((a, b) => b.valor - a.valor)
  .slice(0, 5);

const rankingList = document.getElementById('rankingCompras');
rankingCompras.forEach(p => {
  const li = document.createElement('li');
  li.textContent = `${p.pedido} — ${p.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  rankingList.appendChild(li);
});

// FORNECEDORES
const gastoPorFornecedor = {};
pedidos.forEach(p => {
  gastoPorFornecedor[p.fornecedor] =
    (gastoPorFornecedor[p.fornecedor] || 0) + (p.valor - p.desconto);
});

const rankingFornecedores = Object.entries(gastoPorFornecedor)
  .sort((a, b) => b[1] - a[1]);

const fornecedorList = document.getElementById('rankingFornecedores');
rankingFornecedores.forEach(([nome, valor]) => {
  const li = document.createElement('li');
  li.textContent = `${nome} — ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  fornecedorList.appendChild(li);
});

// TABELA DE DESCONTOS
const tabela = document.getElementById('tabelaDescontos');
pedidos.forEach(p => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${p.pedido}</td>
    <td>${p.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    <td>${p.desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    <td>${(p.valor - p.desconto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
  `;
  tabela.appendChild(tr);
});
