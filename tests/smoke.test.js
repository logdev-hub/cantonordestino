import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const pages=['index.html','sobre.html','cardapio.html','reservas.html','eventos.html','corporativo.html','galeria.html','contato.html','politica-privacidade.html'];
test('páginas principais existem',()=>pages.forEach(page=>assert.ok(fs.existsSync(page),page)));
test('dados do cardápio são JSON válido',()=>assert.ok(Array.isArray(JSON.parse(fs.readFileSync('assets/data/cardapio.json','utf8')))));
