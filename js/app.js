// ================================================
// MANUAL OPERACIONAL CRV \u2014 Scripts
// Pol\u00edcia Penal de Santa Catarina
// ================================================

// ================================================
// CADASTRO DAS UNIDADES PRISIONAIS
// ================================================
const UNIDADES = [
  // SR01 \u2014 Grande Florian\u00f3polis
  { nome: 'Penitenci\u00e1ria de Florian\u00f3polis',              cidade: 'Florian\u00f3polis',        sr: 'SR01', diretor: 'Max Cleber Orth',                    email: 'pe01@pp.sc.gov.br', tel: '(48) 3665\u20119123', end: 'Rua Delminda da Silveira, 960 \u2013 Agron\u00f4mica \u2013 Florian\u00f3polis/SC \u2013 CEP 88025\u2011500' },
  { nome: 'Complexo Penitenci\u00e1rio do Estado',            cidade: 'S\u00e3o Pedro de Alc\u00e2ntara',sr: 'SR01', diretor: 'Fl\u00e1vio Brasil Gancin\u00e9',             email: 'pe02@pp.sc.gov.br', tel: '(48) 3664\u20112750', end: 'Rua Adriano Enning, s/n \u2013 Bairro Santa Tereza \u2013 S\u00e3o Pedro de Alc\u00e2ntara/SC \u2013 CEP 88125\u2011000' },
  { nome: 'Pres\u00eddio Regional de Tijucas',                cidade: 'Tijucas',              sr: 'SR01', diretor: 'Nathasha Daberkow Vieira',           email: 'pr03@pp.sc.gov.br', tel: '(48) 3665\u20119280', end: 'Rua Alberto Tomazi, s/n \u2013 Bairro Itinga \u2013 Tijucas/SC \u2013 CEP 88200\u2011000' },
  { nome: 'Hospital de Cust\u00f3dia e Tratamento Psiqui\u00e1trico \u2013 HCTP', cidade: 'Florian\u00f3polis', sr: 'SR01', diretor: 'F\u00e1bio Medeiros Wiese',            email: 'hctp@pp.sc.gov.br', tel: '(48) 3665\u20119191', end: 'Rua Delminda da Silveira, s/n \u2013 Agron\u00f4mica \u2013 Florian\u00f3polis/SC \u2013 CEP 88025\u2011500' },
  { nome: 'Pres\u00eddio Regional de Bigua\u00e7u',                cidade: 'Bigua\u00e7u',              sr: 'SR01', diretor: 'Fabiano Oliveira Suares',            email: 'pr04@pp.sc.gov.br', tel: '(48) 3664\u20112700', end: 'Rua Herm\u00f3genes Prazeres, 49 \u2013 Centro \u2013 Bigua\u00e7u/SC \u2013 CEP 88160\u2011152' },
  { nome: 'Pres\u00eddio Masculino Regional de Florian\u00f3polis',cidade: 'Florian\u00f3polis',        sr: 'SR01', diretor: 'Joana Mahfuz Vicini',                email: 'pr01@pp.sc.gov.br', tel: '(48) 3665\u20119256', end: 'Rua Delminda da Silveira, 900 \u2013 Agron\u00f4mica \u2013 Florian\u00f3polis/SC \u2013 CEP 88025\u2011500' },
  { nome: 'Pres\u00eddio Feminino Regional de Florian\u00f3polis', cidade: 'Florian\u00f3polis',        sr: 'SR01', diretor: 'Marina Pamplona Coelho',             email: 'pr02@pp.sc.gov.br', tel: '(48) 3665\u20119107', end: 'Rua Lauro Linhares, s/n \u2013 Trindade \u2013 Florian\u00f3polis/SC \u2013 CEP 88036\u2011001' },
  { nome: 'Unidade de Monitoramento Eletr\u00f4nico',         cidade: 'Florian\u00f3polis',        sr: 'SR01', diretor: 'Gustavo Costa Vieira',               email: 'ume@pp.sc.gov.br',  tel: '(48) 3665\u20117327', end: 'Rua F\u00falvio Aducci, 1214 \u2013 Estreito \u2013 Florian\u00f3polis/SC' },
  { nome: 'Col\u00f4nia Agroindustrial de Palho\u00e7a',           cidade: 'Palho\u00e7a',              sr: 'SR01', diretor: 'Renata de Souza de Oliveira',        email: 'cogri@pp.sc.gov.br',tel: '(48) 3664\u20115580', end: 'Rua Jos\u00e9 Jo\u00e3o Barcelos, s/n \u2013 Bela Vista \u2013 Palho\u00e7a/SC \u2013 CEP 88132\u2011770' },
  // SR02 \u2014 Sul
  { nome: 'Penitenci\u00e1ria Feminina de Crici\u00fama',          cidade: 'Crici\u00fama',             sr: 'SR02', diretor: 'Virginia Gabriela Gonzales',          email: 'pe04@pp.sc.gov.br', tel: '(48) 3403\u20111737', end: 'Rua Jos\u00e9 Marinho Teixeira, s/n \u2013 S\u00e3o Domingos \u2013 Crici\u00fama/SC \u2013 CEP 88812\u2011680' },
  { nome: 'Penitenci\u00e1ria Masculina de Tubar\u00e3o',          cidade: 'Tubar\u00e3o',              sr: 'SR02', diretor: 'Deiveison Querino Batista',           email: 'pe05@pp.sc.gov.br', tel: '(48) 3631\u20119777', end: 'Rua Maria Menegaz, 735 \u2013 S\u00e3o Jo\u00e3o \u2013 Tubar\u00e3o/SC \u2013 CEP 88708\u2011570' },
  { nome: 'Penitenci\u00e1ria Sul',                           cidade: 'Crici\u00fama',             sr: 'SR02', diretor: 'Juliana Borges Medeiros',                  email: 'pe03@pp.sc.gov.br', tel: '(48) 3403\u20111485', end: 'Rua Jos\u00e9 Marinho Teixeira, 5005 \u2013 S\u00e3o Domingos \u2013 Crici\u00fama/SC \u2013 CEP 88812\u2011680' },
  { nome: 'Pres\u00eddio Regional de Ararangu\u00e1',              cidade: 'Ararangu\u00e1',            sr: 'SR02', diretor: 'Daniel Possamai Vieira',              email: 'pr08@pp.sc.gov.br', tel: '(48) 3529\u20110441', end: 'Rua Renato Carbonera, 500 \u2013 Bairro Pol\u00edcia Rodovi\u00e1ria \u2013 Ararangu\u00e1/SC \u2013 CEP 88900\u2011000' },
  { nome: 'Pres\u00eddio Regional de Crici\u00fama',               cidade: 'Crici\u00fama',             sr: 'SR02', diretor: 'J\u00fanior Rodrigo Fagundes',             email: 'pr05@pp.sc.gov.br', tel: '(48) 3403\u20111516', end: 'Rua Odonel Bianchi, 330 \u2013 Santa Augusta \u2013 Crici\u00fama/SC \u2013 CEP 88805\u2011265' },
  { nome: 'Pres\u00eddio Regional de Imbituba',               cidade: 'Imbituba',             sr: 'SR02', diretor: 'Filipe Gonzaga Lopes',                email: 'pr09@pp.sc.gov.br', tel: '(48) 3647\u20117409', end: 'Rua 13 de Setembro, s/n \u2013 Vila Nova Alvorada \u2013 Imbituba/SC \u2013 CEP 88780\u2011000' },
  { nome: 'Pres\u00eddio Regional de Laguna',                 cidade: 'Laguna',               sr: 'SR02', diretor: 'Rafael Nunes de Oliveira',            email: 'pr10@pp.sc.gov.br', tel: '(48) 3647\u20117425', end: 'Rua Idelfonso Batista, s/n \u2013 Progresso \u2013 Laguna/SC \u2013 CEP 88790\u2011000' },
  { nome: 'Pres\u00eddio Regional de Tubar\u00e3o',                cidade: 'Tubar\u00e3o',              sr: 'SR02', diretor: 'Gladson Ant\u00f4nio da Silva',            email: 'pr06@pp.sc.gov.br', tel: '(48) 3631\u20119780', end: 'Rua Maria Menegaz, 635 \u2013 S\u00e3o Jo\u00e3o \u2013 Tubar\u00e3o/SC \u2013 CEP 88708\u2011570' },
  // SR03 \u2014 Norte Catarinense
  { nome: 'Penitenci\u00e1ria Industrial de Joinville',       cidade: 'Joinville',            sr: 'SR03', diretor: 'M\u00e1rcio Simbalista',                   email: 'pe06@pp.sc.gov.br', tel: '(47) 3481\u20113948', end: 'Servid\u00e3o Ant\u00f4nio Deglmann J\u00fanior, 245 \u2013 Parque Guarani \u2013 Joinville/SC \u2013 CEP 89209\u2011240' },
  { nome: 'Pres\u00eddio Feminino Regional de Joinville',     cidade: 'Joinville',            sr: 'SR03', diretor: 'Eliana Eloi',                         email: 'pr12@pp.sc.gov.br', tel: '(47) 3481\u20112369', end: 'Servid\u00e3o Ant\u00f4nio Deglmann J\u00fanior, 245 \u2013 Parque Guarani \u2013 Joinville/SC \u2013 CEP 89209\u2011240' },
  { nome: 'Pres\u00eddio Regional de Joinville',              cidade: 'Joinville',            sr: 'SR03', diretor: 'Andr\u00e9 Felippe Dias',                  email: 'pr11@pp.sc.gov.br', tel: '(47) 3481\u20113900', end: 'Servid\u00e3o Ant\u00f4nio Deglmann J\u00fanior, 245 \u2013 Parque Guarani \u2013 Joinville/SC \u2013 CEP 89209\u2011240' },
  { nome: 'Pres\u00eddio Regional de Barra Velha',            cidade: 'Barra Velha',          sr: 'SR03', diretor: 'L\u00e9ia Cristina Steffen Fuck',          email: 'pr14@pp.sc.gov.br', tel: '(47) 3481\u20112885', end: 'Rua Jo\u00e3o Anselmo Breniensen, s/n \u2013 Vila Nova \u2013 Barra Velha/SC \u2013 CEP 88390\u2011000' },
  { nome: 'Pres\u00eddio Regional de S\u00e3o Francisco do Sul',   cidade: 'S\u00e3o Francisco do Sul', sr: 'SR03', diretor: 'Lamartine Ximenes Fernandes',         email: 'pr13@pp.sc.gov.br', tel: '(47) 3481\u20113932', end: 'Estrada Geral da Pedreira \u2013 Bairro Miranda \u2013 S\u00e3o Francisco do Sul/SC \u2013 CEP 89240\u2011000' },
  // SR04 \u2014 Vale do Itaja\u00ed
  { nome: 'Penitenci\u00e1ria Masculina do Vale do Itaja\u00ed',   cidade: 'Itaja\u00ed',               sr: 'SR04', diretor: 'Bruno Domingos Gabriel',               email: 'pe07@pp.sc.gov.br', tel: '(47) 3398\u20116700', end: 'Estrada Geral Jo\u00e3o Tomaz Pinto, s/n \u2013 Canhanduba \u2013 Itaja\u00ed/SC \u2013 CEP 88307\u2011770' },
  { nome: 'Pres\u00eddio Feminino Regional de Itaja\u00ed',        cidade: 'Itaja\u00ed',               sr: 'SR04', diretor: 'Michele Rebello de Mesquita',          email: 'pr16@pp.sc.gov.br', tel: '(47) 3398\u20116185', end: 'Estrada Geral Jo\u00e3o Tomaz Pinto, s/n \u2013 Canhanduba \u2013 Itaja\u00ed/SC \u2013 CEP 88307\u2011770' },
  { nome: 'Pres\u00eddio Regional de Brusque',                cidade: 'Brusque',              sr: 'SR04', diretor: 'Giovani Manfredini Queiroz',           email: 'pr17@pp.sc.gov.br', tel: '(47) 3251\u20118280', end: 'Rod. SC\u2011408, km 02 \u2013 Bairro Santa Luzia \u2013 Brusque/SC \u2013 CEP 88357\u2011340' },
  { nome: 'Pres\u00eddio Regional de Itaja\u00ed',                 cidade: 'Itaja\u00ed',               sr: 'SR04', diretor: 'Rog\u00e9rio Jos\u00e9 Bizatto',                 email: 'pr15@pp.sc.gov.br', tel: '(47) 3398\u20116750', end: 'Estrada Geral Jo\u00e3o Tomaz Pinto, s/n \u2013 Canhanduba \u2013 Itaja\u00ed/SC \u2013 CEP 88307\u2011770' },
  { nome: 'Pres\u00eddio Regional de Itapema',                cidade: 'Itapema',              sr: 'SR04', diretor: 'Eduardo Weber Xavier',                 email: 'pr18@pp.sc.gov.br', tel: '(47) 3398\u20116684', end: 'Rua 440, s/n \u2013 Bairro Morretes \u2013 Itapema/SC \u2013 CEP 88220\u2011000' },
  // SR05 \u2014 Serrana
  { nome: 'Penitenci\u00e1ria Industrial de S\u00e3o Crist\u00f3v\u00e3o do Sul', cidade: 'S\u00e3o Crist\u00f3v\u00e3o do Sul', sr: 'SR05', diretor: 'Giselle Cordeiro Demeneck Remor', email: 'pe09@pp.sc.gov.br', tel: '(49) 3412\u20113190', end: 'Estrada Geral Pared\u00e3o, s/n \u2013 S\u00e3o Crist\u00f3v\u00e3o do Sul/SC \u2013 CEP 89533\u2011000' },
  { nome: 'Penitenci\u00e1ria Regional de Curitibanos',       cidade: 'S\u00e3o Crist\u00f3v\u00e3o do Sul', sr: 'SR05', diretor: 'Fabio Marcelo Palhano',                email: 'pe08@pp.sc.gov.br', tel: '(49) 3412\u20113300', end: 'Rua Juventino Fran\u00e7a de Moraes, s/n \u2013 S\u00e3o Crist\u00f3v\u00e3o do Sul/SC \u2013 CEP 89533\u2011000' },
  { nome: 'Pres\u00eddio Masculino de Lages',                 cidade: 'Lages',                sr: 'SR05', diretor: 'Rodrigo Ara\u00fajo Aquino',                email: 'pr19@pp.sc.gov.br', tel: '(49) 3289\u20118467', end: 'Rua Ricardo Marin, s/n \u2013 Bairro Santa Clara \u2013 Lages/SC \u2013 CEP 88513\u2011210' },
  { nome: 'Pres\u00eddio Regional de Lages',                  cidade: 'Lages',                sr: 'SR05', diretor: 'Ricardo Fernando Moreira Floriani',    email: 'pr20@pp.sc.gov.br', tel: '(49) 3289\u20118403', end: 'Rua Mato Grosso, 247 \u2013 Bairro S\u00e3o Crist\u00f3v\u00e3o \u2013 Lages/SC \u2013 CEP 88509\u2011220' },
  { nome: 'Pres\u00eddio Regional de Ca\u00e7ador',                cidade: 'Ca\u00e7ador',              sr: 'SR05', diretor: 'Andr\u00e9 Luiz Pierdon\u00e1',                  email: 'pr21@pp.sc.gov.br', tel: '(49) 3561\u20116945', end: 'Av. Albino Felipe Potrick, 50 \u2013 Bom Sucesso \u2013 Ca\u00e7ador/SC \u2013 CEP 89501\u2011335' },
  { nome: 'Pres\u00eddio Regional de Campos Novos',           cidade: 'Campos Novos',         sr: 'SR05', diretor: 'Evalcir Morais dos Santos',            email: 'pr22@pp.sc.gov.br', tel: '(49) 3541\u20113588', end: 'Estrada Geral Usina Velha, s/n \u2013 Interior \u2013 Campos Novos/SC \u2013 CEP 89620\u2011000' },
  { nome: 'Pres\u00eddio Regional de Videira',                cidade: 'Videira',              sr: 'SR05', diretor: 'Marcus Vinicius Lorenzetti',           email: 'pr23@pp.sc.gov.br', tel: '(49) 3533\u20115915', end: 'Rodovia SC\u2011303, Linha Scussiato, Interior \u2013 Videira/SC \u2013 CEP 89560\u2011000' },
  { nome: 'Unidade de Seguran\u00e7a M\u00e1xima de S\u00e3o Crist\u00f3v\u00e3o do Sul', cidade: 'S\u00e3o Crist\u00f3v\u00e3o do Sul', sr: 'SR05', diretor: 'Daniel de Sena',               email: 'umax@pp.sc.gov.br', tel: '(49) 3412\u20113241', end: 'Rua Juventino Fran\u00e7a de Moraes, s/n \u2013 S\u00e3o Crist\u00f3v\u00e3o do Sul/SC \u2013 CEP 89533\u2011000' },
  // SR06 \u2014 Oeste
  { nome: 'Penitenci\u00e1ria Agr\u00edcola de Chapec\u00f3',           cidade: 'Chapec\u00f3',              sr: 'SR06', diretor: 'Itacir Ricieri Cella',                 email: 'pe10@pp.sc.gov.br', tel: '(49) 2049\u20119760', end: 'Rua Cunha Por\u00e3, 1600\u2011E \u2013 Bairro Efapi \u2013 Chapec\u00f3/SC \u2013 CEP 89809\u2011500' },
  { nome: 'Penitenci\u00e1ria Industrial de Chapec\u00f3',         cidade: 'Chapec\u00f3',              sr: 'SR06', diretor: 'Iuri Elias Berwanger',                 email: 'pe11@pp.sc.gov.br', tel: '(49) 2049\u20119713', end: 'Rua Cunha Por\u00e3, 1600\u2011E \u2013 Bairro Efapi \u2013 Chapec\u00f3/SC \u2013 CEP 89809\u2011500' },
  { nome: 'Pres\u00eddio Feminino Regional de Chapec\u00f3',       cidade: 'Chapec\u00f3',              sr: 'SR06', diretor: 'Agda Remus',                           email: 'pr25@pp.sc.gov.br', tel: '(49) 2049\u20119813', end: 'Rua Cunha Por\u00e3, 1600\u2011E \u2013 Bairro Efapi \u2013 Chapec\u00f3/SC \u2013 CEP 89809\u2011500' },
  { nome: 'Pres\u00eddio Regional de Chapec\u00f3',                cidade: 'Chapec\u00f3',              sr: 'SR06', diretor: 'Jos\u00e9 Lauri Pelizzari',                 email: 'pr24@pp.sc.gov.br', tel: '(49) 2049\u20119602', end: 'Rua Cunha Por\u00e3, 1600\u2011E \u2013 Bairro Efapi \u2013 Chapec\u00f3/SC \u2013 CEP 89809\u2011500' },
  { nome: 'Pres\u00eddio Regional de Conc\u00f3rdia',              cidade: 'Conc\u00f3rdia',            sr: 'SR06', diretor: 'Rafael Schlegel Rodrigues Salgado',    email: 'pr26@pp.sc.gov.br', tel: '(49) 3482\u20116222', end: 'Rua Ad\u00edlio Hil\u00e1rio Mutzemberg, s/n \u2013 Guilherme Reich \u2013 Conc\u00f3rdia/SC \u2013 CEP 89709\u2011132' },
  { nome: 'Pres\u00eddio Regional de Joa\u00e7aba',                cidade: 'Joa\u00e7aba',              sr: 'SR06', diretor: 'Liliam Wiest',                         email: 'pr27@pp.sc.gov.br', tel: '(49) 3527\u20119829', end: 'BR\u2011282, km 391 \u2013 Vila Remor \u2013 Joa\u00e7aba/SC \u2013 CEP 89600\u2011000' },
  { nome: 'Pres\u00eddio Regional de Maravilha',              cidade: 'Maravilha',            sr: 'SR06', diretor: 'Marcelo Rodrigo Langaro',              email: 'pr29@pp.sc.gov.br', tel: '(49) 3664\u20116672', end: 'Av. Sul Brasil, 1607 \u2013 Centro \u2013 Maravilha/SC \u2013 CEP 89874\u2011000' },
  { nome: 'Pres\u00eddio Regional de S\u00e3o Jos\u00e9 do Cedro',      cidade: 'S\u00e3o Jos\u00e9 do Cedro',    sr: 'SR06', diretor: 'Rejane Birci Schrader de Mattos',      email: 'pr30@pp.sc.gov.br', tel: '(49) 3644\u20113436', end: 'Rua Amambuy esq. Dom Pedro, 673 \u2013 Jardim \u2013 S\u00e3o Jos\u00e9 do Cedro/SC \u2013 CEP 89930\u2011000' },
  { nome: 'Pres\u00eddio Regional de S\u00e3o Miguel do Oeste',    cidade: 'S\u00e3o Miguel do Oeste',  sr: 'SR06', diretor: 'Eduardo Francisco Bregola Junior',     email: 'pr31@pp.sc.gov.br', tel: '(49) 3631\u20113754', end: 'Rua Oiapoc, 1795 \u2013 Centro \u2013 S\u00e3o Miguel do Oeste/SC \u2013 CEP 89900\u2011000' },
  { nome: 'Pres\u00eddio Regional de Xanxer\u00ea',                cidade: 'Xanxer\u00ea',              sr: 'SR06', diretor: 'Vitor Matte',                          email: 'pr28@pp.sc.gov.br', tel: '(49) 3382\u20112269', end: 'Rua Maranh\u00e3o, 1780 \u2013 Castelo Branco \u2013 Xanxer\u00ea/SC \u2013 CEP 89820\u2011000' },
  // SR07 \u2014 M\u00e9dio Vale do Itaja\u00ed
  { nome: 'Penitenci\u00e1ria Industrial de Blumenau',        cidade: 'Blumenau',             sr: 'SR07', diretor: 'Luciano Cardoso',                      email: 'pe12@pp.sc.gov.br', tel: '(47) 3378\u20118600', end: 'Rua Silvano Candido da Silva, 4601 \u2013 Ponta Aguda \u2013 Blumenau/SC \u2013 CEP 89050\u2011287' },
  { nome: 'Pres\u00eddio Regional de Blumenau',               cidade: 'Blumenau',             sr: 'SR07', diretor: 'Augusto Gregory Hilgenberg Ijaille',   email: 'pr32@pp.sc.gov.br', tel: '(47) 3378\u20118716', end: 'Rua General Os\u00f3rio, 4585 \u2013 Passo Manso \u2013 Blumenau/SC \u2013 CEP 89032\u2011239' },
  { nome: 'Pres\u00eddio Regional de Indaial',                cidade: 'Indaial',              sr: 'SR07', diretor: 'Iv\u00e3 Carlos Fuck',                      email: 'pr34@pp.sc.gov.br', tel: '(47) 3399\u20113193', end: 'Rua Otto Stange, 127 \u2013 Bairro Estados \u2013 Indaial/SC \u2013 CEP 89086\u2011045' },
  { nome: 'Pres\u00eddio Regional de Ituporanga',             cidade: 'Ituporanga',           sr: 'SR07', diretor: 'Marisoni dos Santos',                  email: 'pr35@pp.sc.gov.br', tel: '(47) 3533\u20118797', end: 'Rua Governador Jorge Lacerda, 72 \u2013 Centro \u2013 Ituporanga/SC \u2013 CEP 88400\u2011000' },
  { nome: 'Pres\u00eddio Regional de Rio do Sul',             cidade: 'Rio do Sul',           sr: 'SR07', diretor: 'Victor Hugo Vanelli',                  email: 'pr33@pp.sc.gov.br', tel: '(47) 3526\u20113308', end: 'Estrada Geral Serra Canoas, s/n \u2013 Fundo Canoas \u2013 Rio do Sul/SC' },
  // SR08 \u2014 Planalto Norte
  { nome: 'Penitenci\u00e1ria Industrial de S\u00e3o Bento do Sul',cidade: 'S\u00e3o Bento do Sul',     sr: 'SR08', diretor: 'Le\u00f3 Da Silva Feliciano',               email: 'pe13@pp.sc.gov.br', tel: '(47) 3647\u20110240', end: 'Rua Miguel Hubl, 400 \u2013 Len\u00e7ol \u2013 S\u00e3o Bento do Sul/SC \u2013 CEP 89289\u2011580' },
  { nome: 'Pres\u00eddio Regional de Canoinhas',              cidade: 'Canoinhas',            sr: 'SR08', diretor: 'Alexander Marcelo Costa',              email: 'pr38@pp.sc.gov.br', tel: '(47) 3627\u20114352', end: 'Rua Catarina de Souza Hubner, 1035 \u2013 Bairro Piedade \u2013 Canoinhas/SC \u2013 CEP 89460\u2011613' },
  { nome: 'Pres\u00eddio Regional de Jaragu\u00e1 do Sul',         cidade: 'Jaragu\u00e1 do Sul',       sr: 'SR08', diretor: 'Carlos de Almeida Rossato',            email: 'pr36@pp.sc.gov.br', tel: '(47) 3276\u20119409', end: 'Rua Alvino Flor da Silva, 901 \u2013 Jaragu\u00e1 do Sul/SC \u2013 CEP 89260\u2011875' },
  { nome: 'Pres\u00eddio Regional de Mafra',                  cidade: 'Mafra',                sr: 'SR08', diretor: 'Gabriel Henning',                      email: 'pr37@pp.sc.gov.br', tel: '(47) 3647\u20110222', end: 'Rua Get\u00falio Vargas, 604 \u2013 Centro \u2013 Mafra/SC \u2013 CEP 89300\u2011210' },
  { nome: 'Pres\u00eddio Regional de Porto Uni\u00e3o',            cidade: 'Porto Uni\u00e3o',          sr: 'SR08', diretor: 'Josmar Mattos e Santos',               email: 'pr39@pp.sc.gov.br', tel: '(47) 3627\u20114340', end: 'Rua Matos Costa, 772 \u2013 Centro \u2013 Porto Uni\u00e3o/SC \u2013 CEP 89400\u2011000' },
];


// Nomes das Superintend\u00eancias Regionais e seus Superintendentes
const SR_INFO = {
  SR01: { nome: 'Superintend\u00eancia Regional da Grande Florian\u00f3polis', superintendente: 'Kelvyn Diehl',                           email: 'sr01@pp.sc.gov.br', tel: '(48) 3665\u20119131' },
  SR02: { nome: 'Superintend\u00eancia Regional Sul',                      superintendente: 'Marcos Aur\u00e9lio Spinardi',               email: 'sr02@pp.sc.gov.br', tel: '(48) 3403\u20111501' },
  SR03: { nome: 'Superintend\u00eancia Regional do Norte Catarinense',     superintendente: 'Efraym Ben Jos\u00e9 Falc\u00e3o',                email: 'sr03@pp.sc.gov.br', tel: '(47) 3481\u20113993' },
  SR04: { nome: 'Superintend\u00eancia Regional do Vale do Itaja\u00ed',        superintendente: 'Anderson Luiz Teodoro',                 email: 'sr04@pp.sc.gov.br', tel: '(47) 3398\u20116704' },
  SR05: { nome: 'Superintend\u00eancia Regional Serrana',                   superintendente: 'Fabiano Deitos Rech',                  email: 'sr05@pp.sc.gov.br', tel: '(49) 3412\u20113300' },
  SR06: { nome: 'Superintend\u00eancia Regional Oeste',                     superintendente: 'Guimorvan Boita',                      email: 'sr06@pp.sc.gov.br', tel: '(49) 2049\u20119768' },
  SR07: { nome: 'Superintend\u00eancia Regional do M\u00e9dio Vale do Itaja\u00ed',  superintendente: 'Ricardo da Silva Morlo',                email: 'sr07@pp.sc.gov.br', tel: '(47) 3378\u20118594' },
  SR08: { nome: 'Superintend\u00eancia Regional do Planalto Norte',        superintendente: 'Edenilson Schelbauer',                  email: 'sr08@pp.sc.gov.br', tel: '(47) 3647\u20110229' },
};

// Bras\u00e3o Pol\u00edcia Penal SC (base64)
const BRASAO_B64 = "data:image/png;base64,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";


// ================================================
// NAVEGA\u00c7\u00c3O ENTRE P\u00c1GINAS
// ================================================
function navegarPara(paginaId) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('ativo'));
  const alvo = document.getElementById(paginaId);
  if (alvo) {
    alvo.classList.add('ativo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-principal a').forEach(a => {
    a.classList.remove('ativo');
    if (a.dataset.pagina === paginaId) a.classList.add('ativo');
  });
  atualizarBreadcrumb(paginaId);
  document.getElementById('navPrincipal').classList.remove('aberto');
  history.pushState(null, null, '#' + paginaId);
}

function abrirModeloDireto(modeloId) {
  navegarPara('modelos');
  setTimeout(() => abrirModalOficio(modeloId), 80);
}

// ================================================
// BREADCRUMB
// ================================================
const nomesPagina = {
  'inicio':          'In\u00edcio',
  'hipoteses':       'Hip\u00f3teses de Transfer\u00eancia',
  'fluxo':           'Fluxo Operacional',
  'documentos':      'Documentos Necess\u00e1rios',
  'modelos':         'Modelos de Of\u00edcios',
  'prazos':          'Prazos',
  'vedacoes':        'Veda\u00e7\u00f5es',
  'legislacao':      'Legisla\u00e7\u00e3o',
  'unidades':        'Unidades Prisionais',
  'emergencial':     'Seguran\u00e7a / Emerg\u00eancia',
  'pedido-preso':    'Programa de Permutas',
  'equalizacao':     'Adequa\u00e7\u00e3o da Capacidade de Ocupa\u00e7\u00e3o',
  'mandado-comarca': 'Mandado de Pris\u00e3o de Comarca Diversa',
  'pernoite':        'Pernoite',
  'seguranca-maxima':'Seguran\u00e7a M\u00e1xima / RDD',
  'faq':             'Perguntas Frequentes',
  'erros-comuns':    'Erros Mais Comuns',
  'comece-por-aqui': 'Comece por Aqui',
  'restrito':        '\u00c1rea Restrita',
};

function atualizarBreadcrumb(paginaId) {
  const el = document.getElementById('breadcrumbAtual');
  if (el) el.textContent = nomesPagina[paginaId] || paginaId;
  const link = document.getElementById('breadcrumbLink');
  if (link) link.style.display = paginaId !== 'inicio' ? 'flex' : 'none';
}

// ================================================
// MENU MOBILE
// ================================================
function toggleMenu() {
  document.getElementById('navPrincipal').classList.toggle('aberto');
}

// ================================================
// ACCORDION
// ================================================
function toggleAccordion(header) {
  const item = header.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');
  const estaAberto = header.classList.contains('aberto');
  const grupo = item.closest('.accordion');
  grupo.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('aberto'));
  grupo.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('aberto'));
  if (!estaAberto) {
    header.classList.add('aberto');
    body.classList.add('aberto');
  }
}

// ================================================
// UNIDADES \u2014 Toggle SR e UP
// ================================================
function toggleSR(header) {
  const bloco  = header.closest('.sr-bloco');
  const painel = bloco.querySelector('.sr-unidades');
  const aberto = header.classList.contains('aberto');
  header.classList.toggle('aberto', !aberto);
  painel.style.display = aberto ? 'none' : 'block';
}

function toggleUP(header) {
  const card    = header.closest('.up-card');
  const detalhe = card.querySelector('.up-detalhe');
  const aberto  = header.classList.contains('aberto');
  header.classList.toggle('aberto', !aberto);
  detalhe.style.display = aberto ? 'none' : 'flex';
}

function filtrarUnidades() {
  const busca  = (document.getElementById('buscaUnidade')?.value || '').toLowerCase().trim();
  const srFilt = (document.getElementById('filtroSR')?.value || '').toLowerCase();

  document.querySelectorAll('.sr-bloco').forEach(bloco => {
    const srId = (bloco.dataset.sr || '').toLowerCase();
    if (srFilt && srId !== srFilt) { bloco.classList.add('oculto'); return; }
    bloco.classList.remove('oculto');
    if (!busca) { bloco.querySelectorAll('.up-card').forEach(c => c.classList.remove('oculto')); return; }
    let algum = false;
    bloco.querySelectorAll('.up-card').forEach(card => {
      if (card.textContent.toLowerCase().includes(busca)) {
        card.classList.remove('oculto'); algum = true;
        card.querySelector('.up-header')?.classList.add('aberto');
        const det = card.querySelector('.up-detalhe');
        if (det) det.style.display = 'flex';
      } else { card.classList.add('oculto'); }
    });
    if (algum) {
      bloco.querySelector('.sr-header')?.classList.add('aberto');
      const su = bloco.querySelector('.sr-unidades');
      if (su) su.style.display = 'block';
    } else if (!srFilt) { bloco.classList.add('oculto'); }
  });
}

// ================================================
// BUSCA GLOBAL
// ================================================
function buscarManual() {
  const input     = document.getElementById('buscaManual');
  const termo     = input.value.toLowerCase().trim();
  const resultado = document.getElementById('buscaResultado');
  const btnLimpar = document.getElementById('buscaLimpar');
  btnLimpar.style.display = termo.length > 0 ? 'flex' : 'none';
  if (!termo) {
    resultado.style.display = 'none'; resultado.innerHTML = '';
    document.querySelectorAll('.page-section').forEach(s => s.style.display = '');
    return;
  }
  const hits = [];
  // Fix: use textContent on a cloned visible version to search hidden sections too
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.style.display = 'none';
    // Create a temporary clone to extract text even if element is hidden
    const clone = sec.cloneNode(true);
    clone.style.display = 'block';
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    document.body.appendChild(clone);
    const textoSec = clone.textContent.toLowerCase();
    document.body.removeChild(clone);
    if (textoSec.includes(termo)) {
      const id = sec.id, nome = nomesPagina[id] || id;
      const idx = textoSec.indexOf(termo);
      const ini = Math.max(0, idx - 60), fim = Math.min(textoSec.length, idx + termo.length + 120);
      let trecho = textoSec.substring(ini, fim).replace(/\s+/g, ' ').trim();
      if (ini > 0) trecho = '\u2026' + trecho;
      if (fim < textoSec.length) trecho += '\u2026';
      const regex = new RegExp('(' + termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      // Escape HTML before highlighting
      const trechoSeguro = trecho.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      hits.push({ id, nome, trecho: trechoSeguro.replace(regex, '<mark class="busca-mark">$1</mark>') });
    }
  });
  if (!hits.length) {
    resultado.innerHTML = '<p class="busca-sem-resultado">Nenhum resultado para <strong>"' + input.value.replace(/</g,'&lt;') + '"</strong>.</p>';
  } else {
    resultado.innerHTML =
      '<p class="busca-contagem">\u1f50d ' + hits.length + ' se\u00e7\u00e3o(\u00f5es) encontrada(s) para <strong>"' + input.value.replace(/</g,'&lt;') + '"</strong>:</p>' +
      hits.map(h => '<a class="busca-item" href="#" onclick="limparBusca();navegarPara(\'' + h.id + '\');return false;"><span class="busca-item-nome">\u1f4c4 ' + h.nome + '</span><span class="busca-item-trecho">' + h.trecho + '</span></a>').join('');
  }
  resultado.style.display = 'block';
}

function limparBusca() {
  document.getElementById('buscaManual').value = '';
  document.getElementById('buscaResultado').style.display = 'none';
  document.getElementById('buscaResultado').innerHTML = '';
  document.getElementById('buscaLimpar').style.display = 'none';
  document.querySelectorAll('.page-section').forEach(s => s.style.display = '');
  navegarPara('inicio');
}

// ================================================
// DARK MODE
// ================================================

// ================================================
// COMUNICA\u00c7\u00c3O AO JU\u00cdZO \u2014 SELETOR SA\u00cdDA / ENTRADA
// ================================================
function _aplicarVarianteComunicacao(tipo) {
  const m = modelosTexto['comunicacao'];
  if (!m || !m.variantes) return;
  const variante = m.variantes[tipo];
  if (!variante) return;

  // Atualiza t\u00edtulo
  document.getElementById('oficioTitulo').textContent = variante.titulo;

  // Atualiza par\u00e1grafos
  const cont = document.getElementById('ofc-paragrafos');
  cont.innerHTML = variante.paragrafos.map((p, pIdx) => {
    const texto = typeof p === 'object' ? p.texto : p;
    const sf    = typeof p === 'object' ? p.selectField      : null;
    const lista = typeof p === 'object' ? p.listaReeducandos : false;

    // Lista din\u00e2mica de reeducandos (modelo coletivo)
    if (lista) {
      return `<div class="oficio-paragrafo oficio-paragrafo-inline lista-reeducandos-wrap" data-texto-original="[LISTA_REEDUCANDOS]">
        <div id="lista-reeducandos">
          <div class="lista-reeducando-item" data-idx="1">
            <span style="font-weight:700;margin-right:6px;">1.</span>
            <input type="text" class="campo-inline-editavel" placeholder="Nome completo" data-field="nome" style="width:280px;" />
            <span style="margin:0 6px;">\u2014 IPEN N\u00ba</span>
            <input type="text" class="campo-inline-editavel" placeholder="N\u00famero IPEN" data-field="ipen" style="width:130px;" />
          </div>
          <div class="lista-reeducando-item" data-idx="2">
            <span style="font-weight:700;margin-right:6px;">2.</span>
            <input type="text" class="campo-inline-editavel" placeholder="Nome completo" data-field="nome" style="width:280px;" />
            <span style="margin:0 6px;">\u2014 IPEN N\u00ba</span>
            <input type="text" class="campo-inline-editavel" placeholder="N\u00famero IPEN" data-field="ipen" style="width:130px;" />
          </div>
        </div>
        <button onclick="adicionarReeducando()" type="button" style="margin-top:8px;padding:4px 12px;font-size:.82rem;background:#e0f2fe;border:1px solid #7dd3fc;border-radius:6px;cursor:pointer;color:#0369a1;">+ Adicionar reeducando</button>
      </div>`;
    }

    // Select inline
    let htmlTexto;
    if (sf) {
      htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
        const selectId = `campo-sel-${pIdx}`;
        const opts = sf.opcoes.map(o => `<option value="${o}">${o}</option>`).join('');
        return `<select class="campo-inline-select" id="${selectId}" data-original="${fieldName}" style="font-weight:bold;color:#000;border:1.5px solid #f59e0b;border-radius:4px;padding:2px 6px;background:#fffbeb;font-size:inherit;">${opts}</select>`;
      });
    } else {
      htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
        const inputId = `campo-${pIdx}-${fieldName.replace(/[^a-zA-Z0-9]/g,'_')}`;
        const w = Math.max(120, Math.min(400, fieldName.length * 9 + 40));
        return `<input type="text" class="campo-inline-editavel campo-inline-negrito" id="${inputId}" placeholder="${fieldName}" data-original="${fieldName}" style="width:${w}px;" />`;
      });
    }

    return `<div class="oficio-paragrafo oficio-paragrafo-inline" data-texto-original="${texto.replace(/"/g,'&quot;')}">
      <p class="oficio-paragrafo-texto">${htmlTexto}</p>
    </div>`;
  }).join('');
}

function selecionarTipoComunicacao(tipo) {
  const seletorEl = document.getElementById('ofc-tipo-seletor');
  if (seletorEl) {
    seletorEl.querySelectorAll('.tipo-btn').forEach(b => {
      b.classList.toggle('ativo', b.dataset.tipo === tipo);
    });
  }
  _aplicarVarianteComunicacao(tipo);
}

function adicionarReeducando() {
  const lista = document.getElementById('lista-reeducandos');
  if (!lista) return;
  const idx = lista.querySelectorAll('.lista-reeducando-item').length + 1;
  const div = document.createElement('div');
  div.className = 'lista-reeducando-item';
  div.dataset.idx = idx;
  div.style.marginTop = '4px';
  div.innerHTML = `
    <span style="font-weight:700;margin-right:6px;">${idx}.</span>
    <input type="text" class="campo-inline-editavel" placeholder="Nome completo" data-field="nome" style="width:280px;" />
    <span style="margin:0 6px;">\u2014 IPEN N\u00ba</span>
    <input type="text" class="campo-inline-editavel" placeholder="N\u00famero IPEN" data-field="ipen" style="width:130px;" />
  `;
  lista.appendChild(div);
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('btnDarkMode');
  if (btn) btn.innerHTML = isDark ? '\u2600\ufe0f Modo Claro' : '\u1f319 Modo Escuro';
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}

// ================================================
// BOT\u00c3O VOLTAR AO TOPO
// ================================================
window.addEventListener('scroll', () => {
  const btn = document.getElementById('btnTopo');
  if (btn) btn.classList.toggle('visivel', window.scrollY > 400);
});

// ================================================
// FLUXO OPERACIONAL \u2014 Toggle passo
// ================================================
function toggleFlowStep(body) {
  body.classList.toggle('aberto');
  const btn = body.querySelector('.flow-toggle-btn');
  if (btn) btn.textContent = body.classList.contains('aberto') ? '\u25bc Ocultar detalhes' : '\u25b6 Ver detalhes';
}

// ================================================
// SELETORES DE UNIDADE NO MODAL DE OF\u00cdCIO
// ================================================

// Popula os <select> de origem e destino com optgroups por SR
function popularSelectsUnidades() {
  ['sel-origem', 'sel-destino'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel || sel.options.length > 1) return; // j\u00e1 populado

    const grupos = {};
    UNIDADES.forEach((u, idx) => {
      if (!grupos[u.sr]) grupos[u.sr] = [];
      grupos[u.sr].push({ u, idx });
    });

    const srLabel = {
      SR01: 'SR01 \u2014 Grande Florian\u00f3polis',
      SR02: 'SR02 \u2014 Sul',
      SR03: 'SR03 \u2014 Norte Catarinense',
      SR04: 'SR04 \u2014 Vale do Itaja\u00ed',
      SR05: 'SR05 \u2014 Serrana',
      SR06: 'SR06 \u2014 Oeste',
      SR07: 'SR07 \u2014 M\u00e9dio Vale do Itaja\u00ed',
      SR08: 'SR08 \u2014 Planalto Norte',
    };

    Object.keys(srLabel).forEach(sr => {
      if (!grupos[sr]) return;
      const grp = document.createElement('optgroup');
      grp.label = srLabel[sr];
      grupos[sr].forEach(({ u, idx }) => {
        const opt = document.createElement('option');
        opt.value  = idx;
        opt.textContent = u.nome;
        grp.appendChild(opt);
      });
      sel.appendChild(grp);
    });
  });
}

// Estado global das unidades selecionadas
let unidadeOrigemSel  = null;
let unidadeDestinoSel = null;

function selecionarUnidadeOrigem() {
  const idx = document.getElementById('sel-origem').value;
  unidadeOrigemSel = (idx !== '') ? UNIDADES[parseInt(idx)] : null;
  atualizarInfoUnidade('origem', unidadeOrigemSel);
  atualizarOficioComUnidades();
}

function selecionarUnidadeDestino() {
  const idx = document.getElementById('sel-destino').value;
  unidadeDestinoSel = (idx !== '') ? UNIDADES[parseInt(idx)] : null;
  atualizarInfoUnidade('destino', unidadeDestinoSel);
  atualizarOficioComUnidades();
}

function atualizarInfoUnidade(tipo, u) {
  const el = document.getElementById('info-' + tipo);
  if (!el) return;
  if (!u) { el.innerHTML = ''; el.classList.remove('preenchido'); return; }
  const sr = SR_INFO[u.sr] || {};
  el.innerHTML = `<strong>${u.nome}</strong>${u.cidade} \u00b7 ${u.sr} \u00b7 Dir.: ${u.diretor} \u00b7 ${u.tel}`;
  el.classList.add('preenchido');
}

// Atualiza cidade, par\u00e1grafos, assinaturas, cabe\u00e7alho e rodap\u00e9 quando muda a sele\u00e7\u00e3o
function atualizarOficioComUnidades() {
  const ori = unidadeOrigemSel;
  const des = unidadeDestinoSel;

  // Cidade na linha de data
  const cidEl = document.getElementById('ofc-cidade-txt');
  if (cidEl) cidEl.textContent = ori ? ori.cidade : '[CIDADE]';

  // Cabe\u00e7alho visual \u2014 nome da unidade
  const cabUnEl = document.getElementById('ofc-cab-unidade');
  if (cabUnEl) cabUnEl.textContent = ori ? ori.nome.toUpperCase() : '[UNIDADE PRISIONAL]';

  // Bras\u00e3o
  const brasaoEl = document.getElementById('ofc-cab-brasao');
  if (brasaoEl) brasaoEl.src = BRASAO_B64;

  // Rodap\u00e9 visual
  const rodNomeEl = document.getElementById('ofc-rod-nome');
  const rodEndEl  = document.getElementById('ofc-rod-end');
  const rodContEl = document.getElementById('ofc-rod-cont');
  if (rodNomeEl) rodNomeEl.textContent = ori ? ori.nome.toUpperCase() : '[UNIDADE PRISIONAL]';
  if (rodEndEl)  rodEndEl.textContent  = ori && ori.end ? ori.end : (ori ? ori.cidade + '/SC' : '');
  if (rodContEl) rodContEl.textContent = ori ? ['Fone: ' + ori.tel, 'e-mail: ' + ori.email].filter(Boolean).join(' / ') : '';

  // Substitui placeholders nos campos inline das unidades
  document.querySelectorAll('#ofc-paragrafos .campo-inline-editavel').forEach(input => {
    const orig = input.dataset.original || input.placeholder;
    if (ori && (orig === 'UNIDADE PRISIONAL DE ORIGEM')) {
      input.value = ori.nome;
    } else if (ori && (orig === 'CIDADE')) {
      input.value = ori.cidade;
    } else if (des && (orig === 'UNIDADE PRISIONAL DE DESTINO')) {
      input.value = des.nome;
    }
  });
  // Atualiza tamb\u00e9m os dataset.textoOriginal dos par\u00e1grafos para reflexo na exporta\u00e7\u00e3o
  document.querySelectorAll('#ofc-paragrafos .oficio-paragrafo-inline').forEach(div => {
    let txt = div.dataset.textoOriginal || '';
    if (ori) txt = txt.replace(/\[UNIDADE PRISIONAL DE ORIGEM\]/g, ori.nome)
                      .replace(/\[CIDADE\]/g, ori.cidade);
    if (des) txt = txt.replace(/\[UNIDADE PRISIONAL DE DESTINO\]/g, des.nome);
    div.dataset.textoOriginal = txt;
  });

  // Reconstr\u00f3i assinaturas
  renderizarAssinaturas(ori, des);
}

// ================================================
// L\u00d3GICA DE ASSINATURAS
// Regra:
//   1. Diretor da Unidade de Origem         (sempre)
//   2. Diretor da Unidade de Destino        (sempre, exceto USM)
//   3. Superintendente da SR de Origem      (sempre)
//   4. Superintendente da SR de Destino     (s\u00f3 se SR destino \u2260 SR origem)
// ================================================
function construirListaAssinaturas(ori, des, isUSM) {
  const assinaturas = [];

  // Modelos que assinam somente o Diretor da unidade que comunica
  const somenteDiretorOrigem = ['comunicacao', 'mandado-comarca', 'mandado'].includes(modeloAtual);
  if (somenteDiretorOrigem) {
    assinaturas.push({
      nome:  ori ? ori.diretor   : '[NOME DO DIRETOR]',
      cargo: ori ? `Diretor(a)
${ori.nome}` : 'Diretor(a) \u2014 [UNIDADE PRISIONAL]',
    });
    return assinaturas;
  }

  // Pernoite: apenas Diretor origem + Diretor destino (sem SR)
  const semSuperintendente = modeloAtual === 'pernoite';

  // 1. Diretor origem
  assinaturas.push({
    nome:  ori ? ori.diretor             : '[NOME DO DIRETOR \u2014 ORIGEM]',
    cargo: ori ? `Diretor(a)
${ori.nome}` : 'Diretor(a) \u2014 [UNIDADE DE ORIGEM]',
  });

  // 2. Diretor destino (n\u00e3o aparece no modelo USM)
  if (!isUSM) {
    assinaturas.push({
      nome:  des ? des.diretor             : '[NOME DO DIRETOR \u2014 DESTINO]',
      cargo: des ? `Diretor(a)
${des.nome}` : 'Diretor(a) \u2014 [UNIDADE DE DESTINO]',
    });
  }

  // 3 e 4. Superintendentes \u2014 n\u00e3o aparecem no pernoite
  if (!semSuperintendente) {
    const srOriInfo = ori ? SR_INFO[ori.sr] : null;
    assinaturas.push({
      nome:  srOriInfo ? srOriInfo.superintendente : '[NOME DO SUPERINTENDENTE \u2014 ORIGEM]',
      cargo: srOriInfo ? `Superintendente
${srOriInfo.nome}` : 'Superintendente \u2014 [SR DE ORIGEM]',
    });

    if (!isUSM && des) {
      const srDesInfo = SR_INFO[des.sr];
      const srOriId   = ori ? ori.sr : null;
      if (des.sr !== srOriId) {
        assinaturas.push({
          nome:  srDesInfo ? srDesInfo.superintendente : '[NOME DO SUPERINTENDENTE \u2014 DESTINO]',
          cargo: srDesInfo ? `Superintendente
${srDesInfo.nome}` : 'Superintendente \u2014 [SR DE DESTINO]',
        });
      }
    }
  }

  return assinaturas;
}

function renderizarAssinaturas(ori, des) {
  const assEl = document.getElementById('ofc-assinaturas');
  if (!assEl) return;

  const isUSM  = modeloAtual === 'umax';
  const lista  = construirListaAssinaturas(ori, des, isUSM);

  assEl.innerHTML = lista.map((a) => {
    // Cargo pode ter \n para separar cargo da unidade
    const cargoLinhas = a.cargo.split('\n');
    return `<div class="oficio-assinatura-bloco">
      <div class="ass-digital">(documento assinado digitalmente)</div>
      <div class="ass-nome"><input class="campo-edit" value="${a.nome}" style="font-weight:bold;width:360px;max-width:100%;"/></div>
      ${cargoLinhas.map(l => `<div class="ass-cargo"><input class="campo-edit" value="${l}" style="width:360px;max-width:100%;"/></div>`).join('')}
    </div>`;
  }).join('');
}

// ================================================
// MODAL DO OF\u00cdCIO
// ================================================
function abrirModalOficio(modeloId) {
  const modal = document.getElementById('modalOficio');
  if (!modal) return;

  // Reset sele\u00e7\u00f5es anteriores
  unidadeOrigemSel  = null;
  unidadeDestinoSel = null;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Popula os selects (s\u00f3 na primeira abertura)
  popularSelectsUnidades();

  // Zera selects
  const sOri = document.getElementById('sel-origem');
  const sDes = document.getElementById('sel-destino');
  if (sOri) sOri.value = '';
  if (sDes) sDes.value = '';
  atualizarInfoUnidade('origem', null);
  atualizarInfoUnidade('destino', null);

  // Data autom\u00e1tica
  const hoje   = new Date();
  const meses  = ['janeiro','fevereiro','mar\u00e7o','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const dataFmt = `${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`;
  const dataEl  = document.getElementById('ofc-data-txt');
  if (dataEl) { dataEl.textContent = dataFmt; dataEl.contentEditable = 'true'; }

  // Cidade edit\u00e1vel
  const cidEl = document.getElementById('ofc-cidade-txt');
  if (cidEl) { cidEl.textContent = '[CIDADE]'; cidEl.contentEditable = 'true'; }

  selecionarModelo(modeloId);
}

function fecharModalOficio() {
  const modal = document.getElementById('modalOficio');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function fecharModalOficioFora(event) {
  if (event.target === document.getElementById('modalOficio')) fecharModalOficio();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModalOficio(); });

// ================================================
// MODELOS DE OF\u00cdCIOS
// ================================================
const modelosTexto = {

  /* \u2500\u2500 EMERGENCIAL \u2014 TRANSFER\u00caNCIA EMERGENCIAL (Art. 21, I) \u2500\u2500\u2500 */
  emergencial: {
  titulo: '\u1f6a8 Transfer\u00eancia Emergencial',
  saudacaoInicial: 'Senhor(a) Coordenador(a),',
  tipoSeletor: 'hipotese_emergencial',
  variantes: {
    hipotese_i: {
      titulo: '\u1f4cb Modelo A \u2014 Com PAD',
      paragrafos: [
      { texto: 'Encaminho para an\u00e1lise urgente dessa Central de Regula\u00e7\u00e3o de Vagas pedido de transfer\u00eancia excepcional do(a) reeducando(a) [NOME COMPLETO], IPEN n\u00ba [N\u00daMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], em raz\u00e3o de situa\u00e7\u00e3o emergencial identificada pelas equipes deste estabelecimento penal, conforme segue.', editavel: false },
      { texto: 'A presente solicita\u00e7\u00e3o fundamenta-se no art. 21, inciso I, da Resolu\u00e7\u00e3o Conjunta Interinstitucional n. 01/2026, em raz\u00e3o de situa\u00e7\u00e3o de risco atual, concreto e relevante que exige a retirada imediata do(a) reeducando(a). A medida possui natureza administrativa e n\u00e3o punitiva.', editavel: false },
      { texto: 'A situa\u00e7\u00e3o concreta consiste em [DESCREVER DETALHADAMENTE A CONDUTA E SEUS REFLEXOS NA SEGURAN\u00c7A/ORDEM DA UNIDADE], demonstrando risco atual, concreto e relevante \u00e0 seguran\u00e7a institucional, o que torna invi\u00e1vel a perman\u00eancia do(a) reeducando(a) nesta unidade prisional.', editavel: true, label: 'Descri\u00e7\u00e3o detalhada da situa\u00e7\u00e3o e do risco' },
      { texto: 'Diante da urg\u00eancia, solicita-se a transfer\u00eancia do(a) reeducando(a) para o(a) [UNIDADE PRISIONAL DE DESTINO], onde h\u00e1 condi\u00e7\u00f5es adequadas para sua cust\u00f3dia.', editavel: false },
      { texto: 'Informa-se que [SELECIONE] o competente Procedimento Administrativo Disciplinar (PAD), nos termos da legisla\u00e7\u00e3o vigente, em raz\u00e3o de conduta enquadrada no rol taxativo do art. 50 / art. 52 da Lei de Execu\u00e7\u00e3o Penal.', editavel: false, selectField: { placeholder: 'SELECIONE', opcoes: ['FOI INSTAURADO', 'SER\u00c1 INSTAURADO'] } },
      { texto: 'Esclarece-se que a presente medida n\u00e3o possui natureza de san\u00e7\u00e3o disciplinar, tratando-se de provid\u00eancia administrativa de car\u00e1ter cautelar, sem preju\u00edzo da apura\u00e7\u00e3o regular dos fatos no \u00e2mbito do PAD.', editavel: false },
      { texto: 'Ressalta-se que eventual isolamento preventivo observar\u00e1 rigorosamente os limites legais, especialmente quanto ao prazo m\u00e1ximo (at\u00e9 10 dias, prorrog\u00e1vel por mais 20 se o PAD for conclu\u00eddo com decis\u00e3o procedente dentro desse per\u00edodo, nos termos do art. 60 da LEP) e \u00e0 veda\u00e7\u00e3o de puni\u00e7\u00e3o antecipada, com preserva\u00e7\u00e3o integral dos direitos da pessoa privada de liberdade.', editavel: false },
      { texto: 'Para subsidiar a an\u00e1lise, encaminham-se, anexos, o Boletim Penal Informativo devidamente atualizado, o Relat\u00f3rio de Sa\u00fade, assinado pelo Respons\u00e1vel T\u00e9cnico (M\u00e9dico, Enfermeiro, T\u00e9cnico de Enfermagem, etc.), pelo Coordenador de Sa\u00fade ou pelo Diretor, e [OUTROS DOCUMENTOS: of\u00edcio do Chefe de Seguran\u00e7a e/ou Setor de Intelig\u00eancia, boletim de ocorr\u00eancia interno, entre outros].', editavel: false },
      { texto: 'Uma vez efetivada a remo\u00e7\u00e3o, caso aprovada, o Ju\u00edzo competente ser\u00e1 devidamente comunicado no prazo legal de at\u00e9 24 horas.', editavel: false },
      { texto: 'Informo, por fim, que foram realizados contatos pr\u00e9vios com as autoridades pertinentes, incluindo o Diretor do estabelecimento penal de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem o presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se an\u00e1lise e c\u00e9lere delibera\u00e7\u00e3o quanto \u00e0 viabilidade da transfer\u00eancia.', editavel: false },
      ]
    },
    hipotese_ii: {
      titulo: '\u1f4cb Modelo B \u2014 Sem PAD',
      paragrafos: [
      { texto: 'Encaminho para an\u00e1lise urgente da Central de Regula\u00e7\u00e3o de Vagas (CRV) pedido de transfer\u00eancia excepcional do(a) reeducando(a) [NOME COMPLETO], IPEN n\u00ba [N\u00daMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], em raz\u00e3o de situa\u00e7\u00e3o emergencial identificada pelas equipes deste estabelecimento penal, conforme segue.', editavel: false },
      { texto: 'A presente solicita\u00e7\u00e3o fundamenta-se no art. 21, inciso I, da Resolu\u00e7\u00e3o Conjunta Interinstitucional n. 01/2026, em raz\u00e3o de situa\u00e7\u00e3o de risco atual, concreto e relevante \u00e0 integridade f\u00edsica do(a) reeducando(a), de terceiros, ou \u00e0 estabilidade e seguran\u00e7a da unidade prisional. A medida possui natureza administrativa e n\u00e3o punitiva, n\u00e3o estando vinculada \u00e0 pr\u00e1tica de falta grave.', editavel: false },
      { texto: 'A situa\u00e7\u00e3o concreta consiste em [DESCREVER DETALHADAMENTE A SITUA\u00c7\u00c3O: amea\u00e7as, conflitos interpessoais ou coletivos, risco \u00e0 integridade f\u00edsica, tens\u00f5es internas, motins, rebeli\u00f5es, entre outros], circunst\u00e2ncia que inviabiliza a perman\u00eancia do(a) reeducando(a) nesta unidade sem comprometimento da seguran\u00e7a institucional.', editavel: true, label: 'Descri\u00e7\u00e3o detalhada da situa\u00e7\u00e3o de risco' },
      { texto: 'Diante da urg\u00eancia, solicita-se a transfer\u00eancia do(a) reeducando(a) para o(a) [UNIDADE PRISIONAL DE DESTINO], onde h\u00e1 condi\u00e7\u00f5es adequadas para sua cust\u00f3dia em seguran\u00e7a.', editavel: false },
      { texto: 'Esclarece-se que a presente medida n\u00e3o possui natureza disciplinar, tratando-se exclusivamente de provid\u00eancia administrativa destinada \u00e0 preserva\u00e7\u00e3o da seguran\u00e7a do(a) reeducando(a) e de terceiros. N\u00e3o h\u00e1 instaura\u00e7\u00e3o de PAD, por n\u00e3o se verificar, no caso concreto, a pr\u00e1tica de falta grave tipificada nos arts. 50 ou 52 da Lei de Execu\u00e7\u00e3o Penal.', editavel: false },
      { texto: 'Ressalta-se que o(a) reeducando(a) permanecer\u00e1 em cela de conv\u00edvio, com a integral preserva\u00e7\u00e3o de seus direitos, sendo vedada qualquer forma de isolamento.', editavel: false },
      { texto: 'Para subsidiar a an\u00e1lise, encaminham-se, anexos, o Boletim Penal Informativo devidamente atualizado, o Relat\u00f3rio de Sa\u00fade, assinado pelo Respons\u00e1vel T\u00e9cnico (M\u00e9dico, Enfermeiro, T\u00e9cnico de Enfermagem, etc.), pelo Coordenador de Sa\u00fade ou pelo Diretor, e [OUTROS DOCUMENTOS: of\u00edcio do Chefe de Seguran\u00e7a e/ou Setor de Intelig\u00eancia, boletim de ocorr\u00eancia interno, entre outros].', editavel: false },
      { texto: 'Uma vez efetivada a remo\u00e7\u00e3o, caso aprovada, o Ju\u00edzo competente ser\u00e1 devidamente comunicado no prazo legal de at\u00e9 24 horas.', editavel: false },
      { texto: 'Informo, por fim, que foram realizados contatos pr\u00e9vios com as autoridades pertinentes, incluindo o Diretor do estabelecimento penal de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem o presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se an\u00e1lise e c\u00e9lere delibera\u00e7\u00e3o quanto \u00e0 viabilidade da transfer\u00eancia.', editavel: false },
      ],
  },
  },   // fecha: variantes
},     // fecha: emergencial

 /* \u2500\u2500 PEDIDO DO PRESO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  pedido_preso: {
    titulo: '\u1f464 Modelo 1 \u2014 Pedido do Preso',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      'Encaminho para an\u00e1lise dessa Central pedido de transfer\u00eancia do reeducando [NOME COMPLETO], IPEN [N\u00ba], atualmente custodiado no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], formulado pelo pr\u00f3prio reeducando por meio de memorando datado de [DATA DO MEMORANDO].',
      'A solicita\u00e7\u00e3o tem por fundamento [MOTIVO ALEGADO PELO REEDUCANDO: mudan\u00e7a de domic\u00edlio familiar, necessidade de aproxima\u00e7\u00e3o da fam\u00edlia, outro motivo relevante], nos termos do art. 21, inciso II, da Resolu\u00e7\u00e3o Conjunta Interinstitucional n. 01/2026.',
      'Para subsidiar a an\u00e1lise, encaminho em anexo Boletim Penal Informativo devidamente atualizado, assinado pelo Coordenador de Execu\u00e7\u00e3o Penal (ou pelo Diretor da Unidade Prisional), bem como Relat\u00f3rio de Sa\u00fade, assinado pelo Respons\u00e1vel T\u00e9cnico (M\u00e9dico, Enfermeiro, T\u00e9cnico de Enfermagem, etc.), pelo Coordenador de Sa\u00fade, ou pelo Diretor, e memorando original do reeducando.',
      'Uma vez efetivada a remo\u00e7\u00e3o \u2014 caso aprovada \u2014, o r. Ju\u00edzo competente ser\u00e1 devidamente comunicado, no prazo legal estabelecido, qual seja, em at\u00e9 24 horas.',
      'Informo, por fim, que foram realizados contatos pr\u00e9vios com os entes envolvidos, quais sejam, o Diretor da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem ou anuem ao presente expediente.',
      'Diante do exposto, solicita-se a an\u00e1lise e delibera\u00e7\u00e3o da Central de Regula\u00e7\u00e3o de Vagas quanto \u00e0 viabilidade da transfer\u00eancia administrativa do referido reeducando.',
    ],
  },

  /* \u2500\u2500 PEDIDO POR FAMILIAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  pedido_familiar: {
    titulo: '\u1f468\u200d\u1f469\u200d\u1f467 Modelo 2 \u2014 Pedido por Familiar',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      'Encaminho para an\u00e1lise dessa Central pedido de transfer\u00eancia do reeducando [NOME COMPLETO], IPEN [N\u00ba], atualmente custodiado no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], formulado por seu(ua) familiar [NOME DO FAMILIAR], [GRAU DE PARENTESCO], por meio de [carta / e-mail / peti\u00e7\u00e3o f\u00edsica / peti\u00e7\u00e3o judicial] datado(a) de [DATA].',
      'A solicita\u00e7\u00e3o tem por fundamento [MOTIVO ALEGADO PELO FAMILIAR: mudan\u00e7a de domic\u00edlio, necessidade de aproxima\u00e7\u00e3o do n\u00facleo familiar, dificuldade de deslocamento para visitas, outro motivo relevante], nos termos do art. 21, inciso II, da Resolu\u00e7\u00e3o Conjunta Interinstitucional n. 01/2026.',
      'Para subsidiar a an\u00e1lise, encaminho em anexo Boletim Penal Informativo devidamente atualizado, assinado pelo Coordenador de Execu\u00e7\u00e3o Penal (ou pelo Diretor da Unidade Prisional), bem como Relat\u00f3rio de Sa\u00fade, assinado pelo Respons\u00e1vel T\u00e9cnico (M\u00e9dico, Enfermeiro, T\u00e9cnico de Enfermagem, etc.), pelo Coordenador de Sa\u00fade, ou pelo Diretor, e [carta / e-mail / peti\u00e7\u00e3o f\u00edsica] original do familiar.',
      'Uma vez efetivada a remo\u00e7\u00e3o \u2014 caso aprovada \u2014, o r. Ju\u00edzo competente ser\u00e1 devidamente comunicado, no prazo legal estabelecido, qual seja, em at\u00e9 24 horas.',
      'Informo, por fim, que foram realizados contatos pr\u00e9vios com os entes envolvidos, quais sejam, o Diretor da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem ou anuem ao presente expediente.',
      'Diante do exposto, solicita-se a an\u00e1lise e delibera\u00e7\u00e3o da Central de Regula\u00e7\u00e3o de Vagas quanto \u00e0 viabilidade da transfer\u00eancia administrativa do referido reeducando.',
    ],
  },

  /* \u2500\u2500 PEDIDO POR ADVOGADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  pedido_advogado: {
    titulo: '\u2696\ufe0f Modelo 3 \u2014 Pedido por Advogado',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      'Encaminho para an\u00e1lise dessa Central pedido de transfer\u00eancia do reeducando [NOME COMPLETO], IPEN [N\u00ba], atualmente custodiado no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], formulado pelo advogado constitu\u00eddo [NOME DO ADVOGADO], OAB/[UF] n.\u00ba [N\u00daMERO], por meio de peti\u00e7\u00e3o datada de [DATA].',
      'A solicita\u00e7\u00e3o tem por fundamento [MOTIVO ALEGADO PELO ADVOGADO: mudan\u00e7a de domic\u00edlio, aproxima\u00e7\u00e3o familiar, outro motivo relevante devidamente fundamentado], nos termos do art. 21, inciso II, da Resolu\u00e7\u00e3o Conjunta Interinstitucional n. 01/2026.',
      'Para subsidiar a an\u00e1lise, encaminho em anexo Boletim Penal Informativo devidamente atualizado, assinado pelo Coordenador de Execu\u00e7\u00e3o Penal (ou pelo Diretor da Unidade Prisional), bem como Relat\u00f3rio de Sa\u00fade, assinado pelo Respons\u00e1vel T\u00e9cnico (M\u00e9dico, Enfermeiro, T\u00e9cnico de Enfermagem, etc.), pelo Coordenador de Sa\u00fade, ou pelo Diretor, e peti\u00e7\u00e3o original do advogado, com comprova\u00e7\u00e3o de mandato.',
      'Uma vez efetivada a remo\u00e7\u00e3o \u2014 caso aprovada \u2014, o r. Ju\u00edzo competente ser\u00e1 devidamente comunicado, no prazo legal estabelecido, qual seja, em at\u00e9 24 horas.',
      'Informo, por fim, que foram realizados contatos pr\u00e9vios com os entes envolvidos, quais sejam, o Diretor da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem ou anuem ao presente expediente.',
      'Diante do exposto, solicita-se a an\u00e1lise e delibera\u00e7\u00e3o da Central de Regula\u00e7\u00e3o de Vagas quanto \u00e0 viabilidade da transfer\u00eancia administrativa do referido reeducando.',
    ],
  },

  /* \u2500\u2500 ADEQUA\u00c7\u00c3O \u2014 COLETIVA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  equalizacao_coletiva: {
    titulo: '\u2696\ufe0f Adequa\u00e7\u00e3o da Capacidade de Ocupa\u00e7\u00e3o \u2014 Coletiva (Art. 21, III)',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      { texto: 'Considerando a necessidade de gest\u00e3o e equaliza\u00e7\u00e3o da ocupa\u00e7\u00e3o carcer\u00e1ria no \u00e2mbito do(a) [UNIDADE PRISIONAL DE ORIGEM], bem como a adequada distribui\u00e7\u00e3o das pessoas privadas de liberdade entre as diferentes estruturas de estabelecimentos penais, encaminho para an\u00e1lise dessa Central de Regula\u00e7\u00e3o de Vagas pedido de transfer\u00eancia dos(as) reeducandos(as) abaixo relacionados(as), atualmente custodiados(as) nesta unidade prisional, para o(a) [UNIDADE PRISIONAL DE DESTINO].', editavel: false },
      { texto: '[LISTA_REEDUCANDOS]', editavel: false, listaReeducandos: true },
      { texto: 'A solicita\u00e7\u00e3o fundamenta-se na necessidade de equaliza\u00e7\u00e3o da lota\u00e7\u00e3o entre as unidades do sistema prisional catarinense, em conformidade com as diretrizes estabelecidas para a gest\u00e3o de vagas e movimenta\u00e7\u00f5es prisionais previstas na Resolu\u00e7\u00e3o Conjunta Interinstitucional n. 01/2026, especialmente em seu art. 21, inciso III.', editavel: false },
      { texto: 'Para subsidiar a an\u00e1lise, informo a devida atualiza\u00e7\u00e3o no sistema i-PEN dos Boletins Penais Informativos, assinados pelo Coordenador de Execu\u00e7\u00e3o Penal (ou pelo Diretor da Unidade Prisional), bem como anexo os Relat\u00f3rios de Sa\u00fade, assinados pelo Respons\u00e1vel T\u00e9cnico (M\u00e9dico, Enfermeiro, T\u00e9cnico de Enfermagem, etc.), pelo Coordenador de Sa\u00fade, ou pelo Diretor.', editavel: false },
      { texto: 'Uma vez efetivadas as remo\u00e7\u00f5es, caso aprovadas, os respectivos Ju\u00edzos competentes ser\u00e3o devidamente comunicados, no prazo legal estabelecido, qual seja em at\u00e9 24 horas.', editavel: false },
      { texto: 'Informo, por fim, que foram realizados contatos pr\u00e9vios com as autoridades pertinentes, quais sejam, o Diretor do estabelecimento penal de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que anuem ao presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a an\u00e1lise e delibera\u00e7\u00e3o da Central de Regula\u00e7\u00e3o de Vagas quanto \u00e0 viabilidade das transfer\u00eancias administrativas.', editavel: false },
    ],
  },

  /* \u2500\u2500 MANDADO DE COMARCA DIVERSA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  mandado: {
    titulo: '\u1f3db\ufe0f Modelo \u2014 Mandado de Pris\u00e3o de Comarca Diversa',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      { texto: 'Encaminho para an\u00e1lise pedido de transfer\u00eancia do(a) reeducando(a) [NOME COMPLETO], IPEN N\u00ba [N\u00daMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], em raz\u00e3o do cumprimento de Mandado de Pris\u00e3o expedido pelo(a) [JU\u00cdZO EXPEDIDOR \u2014 Ex.: Vara Regional de Execu\u00e7\u00f5es Penais da Comarca de XXXXX / 2\u00aa Vara Criminal da Comarca de XXX].', editavel: false },
      { texto: 'Considerando que o(a) referido(a) custodiado(a) foi preso(a) em comarca diversa daquela que expediu a ordem de pris\u00e3o, bem como que o(a) [UNIDADE PRISIONAL DE DESTINO] \u00e9 a unidade respons\u00e1vel pela circunscri\u00e7\u00e3o da autoridade judici\u00e1ria expedidora, a transfer\u00eancia mostra-se adequada, em conformidade com as diretrizes estabelecidas para a gest\u00e3o de vagas e movimenta\u00e7\u00f5es prisionais previstas na Resolu\u00e7\u00e3o Conjunta Interinstitucional n. 01/2026, especialmente em seu art. 21, inciso III, bem como em cumprimento ao Art. 24 da Portaria Normativa n\u00ba. 2189/2025 do Departamento de Pol\u00edcia Penal.', editavel: false },
      { texto: 'Informo, por fim, que foram realizados contatos pr\u00e9vios com as autoridades pertinentes, quais sejam, o(a) Diretor(a) da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que anuem ao presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a an\u00e1lise e delibera\u00e7\u00e3o da Central de Regula\u00e7\u00e3o de Vagas quanto \u00e0 viabilidade da transfer\u00eancia administrativa.', editavel: false },
    ],
  },

  /* \u2500\u2500 PERNOITE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  pernoite: {
    titulo: '\u1f319 Modelo \u2014 Pernoite',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      { texto: 'Encaminho para an\u00e1lise pedido de PERNOITE do(a) reeducando(a) [NOME COMPLETO], IPEN N\u00ba [N\u00daMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], no estabelecimento penal [UNIDADE PRISIONAL DE DESTINO], em raz\u00e3o de [FUNDAMENTAR A RAZ\u00c3O].', editavel: true, label: 'Raz\u00e3o do pernoite' },
      { texto: 'Informo, por fim, que fora realizado contato pr\u00e9vio com a gest\u00e3o da unidade de destino, que subscreve tamb\u00e9m o presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a an\u00e1lise e delibera\u00e7\u00e3o da Central de Regula\u00e7\u00e3o de Vagas quanto \u00e0 viabilidade do pleito administrativo.', editavel: false },
    ],
  },

  /* \u2500\u2500 SEGURAN\u00c7A M\u00c1XIMA / RDD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  umax: {
    titulo: '\u1f512 Modelo \u2014 Inclus\u00e3o na Unidade de Seguran\u00e7a M\u00e1xima (ap\u00f3s RDD deferido)',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    destinatarioExtra: true,
    paragrafos: [
      { texto: 'Encaminho para an\u00e1lise e delibera\u00e7\u00e3o dessa Comiss\u00e3o Deliberativa para inclus\u00e3o de presos na Unidade de Seguran\u00e7a M\u00e1xima do Estado de Santa Catarina, bem como da Central de Regula\u00e7\u00e3o de Vagas (CRV) quanto \u00e0 inclus\u00e3o do(a) reeducando(a) [NOME COMPLETO], IPEN N\u00ba [N\u00daMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM].', editavel: false },
      { texto: 'A presente solicita\u00e7\u00e3o fundamenta-se nos documentos e informa\u00e7\u00f5es que seguem anexos, os quais demonstram a necessidade da medida, especialmente diante das circunst\u00e2ncias que envolvem o referido custodiado e os riscos \u00e0 ordem, \u00e0 disciplina e \u00e0 seguran\u00e7a do estabelecimento prisional.', editavel: false },
      { texto: 'Para subsidiar a an\u00e1lise dessa Comiss\u00e3o e da CRV, encaminham-se os seguintes documentos: (i) Of\u00edcio de solicita\u00e7\u00e3o de inclus\u00e3o em Regime Disciplinar Diferenciado (RDD) encaminhado ao r. Ju\u00edzo competente; (ii) Decis\u00e3o judicial que determina a inclus\u00e3o do apenado em RDD; (iii) Boletim de Ocorr\u00eancia, PAD, Relat\u00f3rios e/ou demais informa\u00e7\u00f5es pertinentes \u00e0 avalia\u00e7\u00e3o da medida.', editavel: false },
      { texto: 'Ademais, informo a devida atualiza\u00e7\u00e3o no sistema i-PEN do Boletim Penal Informativo, assinado pelo Coordenador de Execu\u00e7\u00e3o Penal (ou pelo Diretor da Unidade Prisional), bem como anexo o Relat\u00f3rio de Sa\u00fade, assinado pelo Respons\u00e1vel T\u00e9cnico (M\u00e9dico, Enfermeiro, T\u00e9cnico de Enfermagem, etc.), pelo Coordenador de Sa\u00fade, ou pelo Diretor.', editavel: false },
      { texto: 'Uma vez efetivada a remo\u00e7\u00e3o, caso aprovada, o r. Ju\u00edzo competente ser\u00e1 devidamente comunicado, no prazo legal estabelecido, qual seja em at\u00e9 24 horas.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a urgente aprecia\u00e7\u00e3o do presente pedido, com vistas \u00e0 delibera\u00e7\u00e3o acerca da inclus\u00e3o do apenado na Unidade de Seguran\u00e7a M\u00e1xima do Estado.', editavel: false },
      { texto: 'Sem mais para o momento, colocamo-nos \u00e0 disposi\u00e7\u00e3o para quaisquer esclarecimentos adicionais que se fa\u00e7am necess\u00e1rios.', editavel: false },
    ],
  },

  /* \u2500\u2500 COMUNICA\u00c7\u00c3O AO JU\u00cdZO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  comunicacao: {
    titulo: '\u1f3db\ufe0f Comunica\u00e7\u00e3o ao Ju\u00edzo de Execu\u00e7\u00e3o \u2014 Sa\u00edda e Entrada',
    saudacaoInicial: 'Senhor(a) Juiz(a),',
    destinatarioJuizo: false,
    destinatarioCustom: true,
    tipoSeletor: 'saida_entrada',
    variantes: {
      saida: {
        titulo: '\u1f3db\ufe0f Comunica\u00e7\u00e3o ao Ju\u00edzo de Execu\u00e7\u00e3o \u2014 Sa\u00edda',
        paragrafos: [
          { texto: 'Comunicamos a Vossa Excel\u00eancia que o(a) custodiado(a) [NOME COMPLETO], IPEN n\u00ba [N\u00daMERO], foi transferido(a) desta Unidade Prisional para a [UNIDADE PRISIONAL DE DESTINO], localizada em [CIDADE DE DESTINO]/SC, no dia [DATA].', editavel: false },
          { texto: 'A transfer\u00eancia foi devidamente autorizada pela Central de Regula\u00e7\u00e3o de Vagas \u2014 CRV/DPP, uma vez que [MOTIVO DA TRANSFER\u00caNCIA \u2014 Ex.: a Unidade Prisional de Destino \u00e9 competente para a manuten\u00e7\u00e3o da pris\u00e3o do custodiado por estar vinculada \u00e0 Unidade Judici\u00e1ria que determinou a pris\u00e3o da referida pessoa / a transfer\u00eancia ocorreu provisoriamente para manuten\u00e7\u00e3o da ordem e seguran\u00e7a].', editavel: false },
          { texto: 'Nada mais havendo a comunicar, ficamos \u00e0 disposi\u00e7\u00e3o de Vossa Excel\u00eancia para quaisquer esclarecimentos que se fa\u00e7am necess\u00e1rios.', editavel: false }
        ],
      },
      entrada: {
        titulo: '\u1f3db\ufe0f Comunica\u00e7\u00e3o ao Ju\u00edzo de Execu\u00e7\u00e3o \u2014 Entrada',
        paragrafos: [
          { texto: 'Comunicamos a Vossa Excel\u00eancia que o(a) custodiado(a) [NOME COMPLETO], IPEN n\u00ba [N\u00daMERO], ingressou nesta Unidade Prisional, oriundo(a) da [UNIDADE PRISIONAL DE ORIGEM], localizada em [CIDADE DE ORIGEM]/SC, no dia [DATA].', editavel: false },
          { texto: 'A transfer\u00eancia foi devidamente autorizada pela Central de Regula\u00e7\u00e3o de Vagas \u2014 CRV/DPP, uma vez que [MOTIVO DA TRANSFER\u00caNCIA \u2014 Ex.: a Unidade Prisional de Destino \u00e9 competente para a manuten\u00e7\u00e3o da pris\u00e3o do custodiado por estar vinculada \u00e0 Unidade Judici\u00e1ria que determinou a pris\u00e3o da referida pessoa / a transfer\u00eancia ocorreu provisoriamente para manuten\u00e7\u00e3o da ordem e seguran\u00e7a].', editavel: false },
          { texto: 'Nada mais havendo a comunicar, ficamos \u00e0 disposi\u00e7\u00e3o de Vossa Excel\u00eancia para quaisquer esclarecimentos que se fa\u00e7am necess\u00e1rios.', editavel: false }
        ],
      },
    },
    paragrafos: [
  { texto: 'Comunicamos a Vossa Excel\u00eancia que o(a) custodiado(a) [NOME COMPLETO], IPEN n\u00ba [N\u00daMERO], foi transferido(a) desta Unidade Prisional para a [UNIDADE PRISIONAL DE DESTINO], localizada em [CIDADE DE DESTINO]/SC, no dia [DATA].', editavel: false },
  { texto: 'A transfer\u00eancia foi devidamente autorizada pela Central de Regula\u00e7\u00e3o de Vagas \u2014 CRV/DPP, uma vez que [MOTIVO DA TRANSFER\u00caNCIA \u2014 Ex.: a Unidade Prisional de Destino \u00e9 competente para a manuten\u00e7\u00e3o da pris\u00e3o do custodiado por estar vinculada \u00e0 Unidade Judici\u00e1ria que determinou a pris\u00e3o da referida pessoa / a transfer\u00eancia ocorreu provisoriamente para manuten\u00e7\u00e3o da ordem e seguran\u00e7a].', editavel: false },
  { texto: 'Nada mais havendo a comunicar, ficamos \u00e0 disposi\u00e7\u00e3o de Vossa Excel\u00eancia para quaisquer esclarecimentos que se fa\u00e7am necess\u00e1rios.', editavel: false }
]
},  // fecha: comunicacao
};

let modeloAtual = 'emergencial';

function selecionarModelo(id) {
  modeloAtual = id;
  const m = modelosTexto[id];
  if (!m) return;
   const seletor = document.getElementById('ofc-hipotese-seletor');

  if (seletor) {
    seletor.style.display = (id === 'emergencial') ? 'flex' : 'none';
  }

  if (id === 'emergencial') {
    selecionarHipoteseEmergencial('hipotese_i');
  }

  // T\u00edtulo
  document.getElementById('oficioTitulo').textContent = m.titulo;

  // Destaca bot\u00e3o ativo
  document.querySelectorAll('[id^="tab-"]').forEach(b => {
    b.style.background = ''; b.style.color = ''; b.style.borderColor = '';
  });
  const tabBtn = document.getElementById('tab-' + id);
  if (tabBtn) {
    tabBtn.style.background = 'var(--azul-2)';
    tabBtn.style.color      = '#fff';
    tabBtn.style.borderColor = 'var(--azul-2)';
  }

  // Sauda\u00e7\u00e3o padr\u00e3o
  const sel = document.getElementById('ofc-saudacao');
  if (sel) sel.value = m.saudacaoInicial === 'Senhor(a) Juiz(a),'
    ? 'Senhor(a) Juiz(a),'
    : 'Senhor(a) Coordenador(a),';

  // Par\u00e1grafos \u2014 renderiza\u00e7\u00e3o inline com campos [EDIT\u00c1VEIS] como inputs amarelos
  const cont = document.getElementById('ofc-paragrafos');
  let paragrafosBase = m.paragrafos;

  // \u1f449 Se for emergencial, usa hip\u00f3tese I por padr\u00e3o
  if (id === 'emergencial' && m.variantes) {
    paragrafosBase = m.variantes['hipotese_i'].paragrafos;
  }

    cont.innerHTML = paragrafosBase.map((p, pIdx) => {
    const isObj  = typeof p === 'object';
    const texto  = isObj ? p.texto : p;
    const sf     = isObj ? p.selectField      : null;
    const lista  = isObj ? p.listaReeducandos : false;

    // Lista din\u00e2mica de reeducandos (modelo coletivo)
    if (lista) {
      return `<div class="oficio-paragrafo oficio-paragrafo-inline lista-reeducandos-wrap" data-texto-original="[LISTA_REEDUCANDOS]">
        <div id="lista-reeducandos" style="margin:4px 0 6px 0;">
          <div class="lista-reeducando-item" data-idx="1" style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
            <span style="font-weight:700;min-width:18px;">1.</span>
            <input type="text" class="campo-inline-editavel" placeholder="Nome completo do reeducando" data-field="nome" style="flex:1;min-width:220px;" />
            <span style="white-space:nowrap;">\u2014 IPEN N\u00ba</span>
            <input type="text" class="campo-inline-editavel" placeholder="N\u00famero IPEN" data-field="ipen" style="width:130px;" />
          </div>
          <div class="lista-reeducando-item" data-idx="2" style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
            <span style="font-weight:700;min-width:18px;">2.</span>
            <input type="text" class="campo-inline-editavel" placeholder="Nome completo do reeducando" data-field="nome" style="flex:1;min-width:220px;" />
            <span style="white-space:nowrap;">\u2014 IPEN N\u00ba</span>
            <input type="text" class="campo-inline-editavel" placeholder="N\u00famero IPEN" data-field="ipen" style="width:130px;" />
          </div>
        </div>
        <button onclick="adicionarReeducando()" type="button" style="margin-top:2px;padding:4px 14px;font-size:.82rem;background:#e0f2fe;border:1px solid #7dd3fc;border-radius:6px;cursor:pointer;color:#0369a1;">+ Adicionar reeducando</button>
      </div>`;
    }

    // Par\u00e1grafo com select inline
    let htmlTexto;
    if (sf) {
      htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
        const selectId = `campo-sel-${pIdx}`;
        const opts = sf.opcoes.map(o => `<option value="${o}">${o}</option>`).join('');
        return `<select class="campo-inline-select" id="${selectId}" data-original="${fieldName}" style="font-weight:bold;color:#000;border:1.5px solid #f59e0b;border-radius:4px;padding:2px 6px;background:#fffbeb;font-size:inherit;">${opts}</select>`;
      });
    } else {
      // Substitui [CAMPO] por <input> amarelo inline
      htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
        const inputId = `campo-${pIdx}-${fieldName.replace(/[^a-zA-Z0-9]/g,'_')}`;
        const w = Math.max(120, Math.min(400, fieldName.length * 9 + 40));
        return `<input type="text" class="campo-inline-editavel campo-inline-negrito" id="${inputId}" placeholder="${fieldName}" data-original="${fieldName}" style="width:${w}px;" />`;
      });
    }

    return `<div class="oficio-paragrafo oficio-paragrafo-inline" data-texto-original="${texto.replace(/"/g,'&quot;')}">
      <p class="oficio-paragrafo-texto">${htmlTexto}</p>
    </div>`;
  }).join('');

  // Destinat\u00e1rio
  const destEl = document.getElementById('ofc-destinatario');
  if (m.destinatarioCustom) {
    // Campos edit\u00e1veis: Juiz(a), Vara, Cidade
    destEl.innerHTML =
      '<p>Ao(\u00c0) Senhor(a)</p>' +
      '<p><strong>Dr(a). <input type="text" class="campo-dest-inline" id="dest-juiz" placeholder="NOME DO(A) JUIZ(A)" style="width:280px;" /></strong></p>' +
      '<p>Juiz(a) de Direito</p>' +
      '<p><input type="text" class="campo-dest-inline" id="dest-vara" placeholder="VARA / JU\u00cdZO" style="width:300px;" /></p>' +
      '<p><input type="text" class="campo-dest-inline" id="dest-cidade" placeholder="CIDADE" style="width:200px;" /></p>';
  } else if (m.destinatarioJuizo) {
    destEl.innerHTML = '<p>A</p><p><strong>[VARA DE EXECU\u00c7\u00d5ES PENAIS \u2014 COMARCA DE [COMARCA]]</strong></p><p>[CIDADE]/SC</p>';
  } else if (m.destinatarioExtra) {
    destEl.innerHTML =
      '<p>\u00c0</p><p><strong>COMISS\u00c3O DELIBERATIVA \u2014 UNIDADE DE SEGURAN\u00c7A M\u00c1XIMA</strong></p>' +
      '<p>Departamento de Pol\u00edcia Penal \u2014 DPP</p>' +
      '<p>Secretaria de Estado de Justi\u00e7a e Reintegra\u00e7\u00e3o Social \u2014 SEJURI</p>' +
      '<p>Florian\u00f3polis/SC</p><br>' +
      '<p>\u00c0</p><p><strong>CENTRAL DE REGULA\u00c7\u00c3O DE VAGAS \u2014 CRV</strong></p>' +
      '<p>Departamento de Pol\u00edcia Penal \u2014 DPP</p>' +
      '<p>Secretaria de Estado de Justi\u00e7a e Reintegra\u00e7\u00e3o Social \u2014 SEJURI</p>' +
      '<p>Florian\u00f3polis/SC</p>';
  } else {
    destEl.innerHTML =
      '<p>\u00c0</p><p><strong>CENTRAL DE REGULA\u00c7\u00c3O DE VAGAS \u2014 CRV</strong></p>' +
      '<p>Departamento de Pol\u00edcia Penal \u2014 DPP</p>' +
      '<p>Secretaria de Estado de Justi\u00e7a e Reintegra\u00e7\u00e3o Social \u2014 SEJURI</p>' +
      '<p>Florian\u00f3polis/SC</p>';
  }

  // Seletor Sa\u00edda/Entrada para comunicacao
  const seletorEl = document.getElementById('ofc-tipo-seletor');
  if (m.tipoSeletor === 'saida_entrada') {
    if (seletorEl) {
      seletorEl.style.display = 'flex';
      seletorEl.querySelectorAll('.tipo-btn').forEach(b => {
        b.classList.toggle('ativo', b.dataset.tipo === 'saida');
      });
    }
    // Load saida by default
    _aplicarVarianteComunicacao('saida');
  } else {
    if (seletorEl) seletorEl.style.display = 'none';
  }


  // Renderiza assinaturas com unidades j\u00e1 selecionadas (ou placeholders)
  renderizarAssinaturas(unidadeOrigemSel, unidadeDestinoSel);
}

function atualizarSaudacao() {
  // Nada a fazer \u2014 campo customizado removido
}

// ================================================
// EXPORTAR \u2014 Coleta texto do of\u00edcio
// ================================================
function coletarTextoOficio() {
  const cidade   = document.getElementById('ofc-cidade-txt')?.textContent || '';
  const data     = document.getElementById('ofc-data-txt')?.textContent   || '';
  const saudSel  = document.getElementById('ofc-saudacao');
  const saudacao = saudSel?.value || 'Prezado(a) Coordenador(a),';
  const despedida = document.getElementById('ofc-despedida')?.value || 'Atenciosamente,';
  // Coleta par\u00e1grafos com campos inline preenchidos (texto puro para c\u00f3pia)
  // e parasHtml com campos em negrito + quebras de linha para PDF/Word
  const parasRaw = [...document.querySelectorAll('#ofc-paragrafos .oficio-paragrafo-inline')].map(div => {
    let texto = div.dataset.textoOriginal || '';
    let textoHtml = div.dataset.textoOriginal || '';

    // Bloco de lista de reeducandos (modelo coletivo)
    if (texto === '[LISTA_REEDUCANDOS]') {
      const itens = [...div.querySelectorAll('.lista-reeducando-item')].map((item, i) => {
        const nome = item.querySelector('[data-field="nome"]')?.value.trim() || '(nome n\u00e3o informado)';
        const ipen = item.querySelector('[data-field="ipen"]')?.value.trim() || '(IPEN n\u00e3o informado)';
        return `<strong>${nome}</strong> \u2014 IPEN N\u00ba <strong>${ipen}</strong>`;
      });
      // Para HTML (PDF/Word): cada item em div pr\u00f3prio com recuo
      const itensHtml = itens.map((linha, i) =>
        `<div style="margin-left:1.5cm;text-indent:0;margin-bottom:2px;">${i + 1}. ${linha}</div>`
      ).join('');
      // Para texto puro (c\u00f3pia): sem tags, separado por \n
      const itensPuro = [...div.querySelectorAll('.lista-reeducando-item')].map((item, i) => {
        const nome = item.querySelector('[data-field="nome"]')?.value.trim() || '(nome n\u00e3o informado)';
        const ipen = item.querySelector('[data-field="ipen"]')?.value.trim() || '(IPEN n\u00e3o informado)';
        return `${i + 1}. ${nome} \u2014 IPEN N\u00ba ${ipen}`;
      });
      return { puro: itensPuro.join('\n'), html: itensHtml };
    }

    div.querySelectorAll('.campo-inline-editavel').forEach(input => {
      const original = input.dataset.original || input.placeholder;
      const valor = input.value.trim() || input.placeholder;
      texto = texto.replace('[' + original + ']', valor);
      textoHtml = textoHtml.replace('[' + original + ']', '<strong>' + valor + '</strong>');
    });
    // Substitui selects inline
    div.querySelectorAll('.campo-inline-select').forEach(sel => {
      const original = sel.dataset.original || '';
      const valor = sel.value || original;
      texto = texto.replace('[' + original + ']', valor);
      textoHtml = textoHtml.replace('[' + original + ']', '<strong>' + valor + '</strong>');
    });
    return { puro: texto.trim(), html: textoHtml.trim() };
  });
  const paras    = parasRaw.filter(p => p && p.puro).map(p => p.puro);
  const parasHtml = parasRaw.filter(p => p && p.html).map(p => p.html);
  const asss     = [...document.querySelectorAll('#ofc-assinaturas .oficio-assinatura-bloco')].map(b => {
    const nome   = b.querySelector('.ass-nome input')?.value || '';
    const cargos = [...b.querySelectorAll('.ass-cargo input')].map(i => i.value).filter(Boolean);
    return { nome, cargo: cargos.join('\n') };
  });
  // Coleta destinat\u00e1rio \u2014 campos edit\u00e1veis ou texto fixo
  const destEl2 = document.getElementById('ofc-destinatario');
  let destHTML = '';
  if (destEl2) {
    const juiz = destEl2.querySelector('#dest-juiz');
    const vara = destEl2.querySelector('#dest-vara');
    const cidade = destEl2.querySelector('#dest-cidade');
    if (juiz) {
      // Montagem linha a linha do destinat\u00e1rio edit\u00e1vel
      destHTML = 'Ao(\u00c0) Senhor(a)\n' +
        'Dr(a). ' + (juiz.value || juiz.placeholder) + '\n' +
        'Juiz(a) de Direito\n' +
        (vara.value || vara.placeholder) + '\n' +
        (cidade.value || cidade.placeholder);
    } else {
      destHTML = destEl2.innerText || '';
    }
  }
  return { cidade, data, saudacao, paras, parasHtml, despedida, asss, destHTML };
}

function copiarOficio() {
  const { cidade, data, saudacao, paras, despedida, asss, destHTML } = coletarTextoOficio();
  const NL     = '\n';
  const bigGap = '\n\n\n\n';
  const midGap = '\n\n\n\n\n';
  const assGap = '\n\n';
  const indent = '   ';
  const pad8   = '                                ';
  let txt = cidade + ', ' + data + '.' + bigGap + indent + saudacao + NL + bigGap;
  paras.forEach((p, i) => {
    txt += indent + p + NL;
    if (i < paras.length - 1) txt += NL;
  });
  txt += bigGap + pad8 + despedida + NL + midGap;
  asss.forEach(a => {
    txt += pad8 + '(documento assinado digitalmente)' + NL;
    txt += pad8 + a.nome + NL;
    a.cargo.split('\n').forEach(l => { txt += pad8 + l + NL; });
    txt += assGap;
  });
  txt += bigGap + destHTML;
  navigator.clipboard.writeText(txt).then(() => showToast('\u2705 Of\u00edcio copiado!')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    showToast('\u2705 Of\u00edcio copiado!');
  });
}

// \u2500\u2500 Helpers: dados da unidade e destinat\u00e1rio limpo \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function _dadosUnidade() {
  const ori = unidadeOrigemSel;
  const srOri = ori ? (SR_INFO[ori.sr] || {}) : {};
  return {
    nomeUnidade:  ori ? ori.nome       : '[UNIDADE PRISIONAL]',
    cidade:       ori ? ori.cidade     : '[CIDADE]',
    tel:          ori ? ori.tel        : '',
    email:        ori ? ori.email      : '',
    end:          ori ? ori.end        : '',
    nomeSR:       srOri.nome           || '',
    diretor:      ori ? ori.diretor    : '',
  };
}

// Coleta destinat\u00e1rio como texto limpo (resolve campos de input)
function _destTextoLimpo() {
  const destEl = document.getElementById('ofc-destinatario');
  if (!destEl) return [];
  const juiz   = destEl.querySelector('#dest-juiz');
  const vara   = destEl.querySelector('#dest-vara');
  const cidade = destEl.querySelector('#dest-cidade');
  if (juiz) {
    return [
      '\u00c0 Senhor(a)',
      'Dr(a). ' + (juiz.value.trim() || juiz.placeholder),
      'Juiz(a) de Direito',
      (vara.value.trim()   || vara.placeholder),
      (cidade.value.trim() || cidade.placeholder),
    ];
  }
  // Texto fixo: extrai linha a linha sem tags HTML
  return destEl.innerText.split('\n').map(l => l.trim()).filter(Boolean);
}

function gerarPDF() {
  const { cidade, data, saudacao, paras, parasHtml, despedida, asss } = coletarTextoOficio();
  const u   = _dadosUnidade();
  const dest = _destTextoLimpo();

  // Rodap\u00e9: nome (negrito) | endere\u00e7o completo | fone \u00b7 e-mail
  const rodapeLinha1 = u.nomeUnidade.toUpperCase();
  const rodapeLinha2 = u.end || (u.cidade ? u.cidade + '/SC' : '');
  const rodapeLinha3 = [u.tel, u.email].filter(Boolean).join(' \u00b7 ');

  const html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"/><title>Of\u00edcio CRV</title>'
    + '<style>'
    + '@page{size:A4;margin:0;}'
    + 'html,body{margin:0;padding:0;font-family:Arial,sans-serif;font-size:11pt;color:#000;line-height:1.5;}'
    + '.pagina{width:21cm;min-height:29.7cm;margin:0 auto;padding:4cm 2.5cm 3cm 3cm;box-sizing:border-box;}'
    + '.cab{display:table;width:100%;border-bottom:2px solid #555;padding-bottom:.6em;margin-bottom:2em;}'
    + '.cab-logo{display:table-cell;width:2.2cm;vertical-align:middle;padding-right:.6em;}'
    + '.cab-logo img{width:1.8cm;height:auto;display:block;}'
    + '.cab-texto{display:table-cell;vertical-align:middle;}'
    + '.cab-top{font-size:7.5pt;color:#333;margin:0;letter-spacing:.04em;}'
    + '.cab-sejuri{font-size:7.5pt;color:#333;margin:.1em 0 0;}'
    + '.cab-dpp{font-size:8pt;color:#000;margin:.1em 0 0;font-weight:bold;}'
    + '.cab-unidade{font-size:11pt;font-weight:bold;color:#000;margin:.25em 0 0;}'
    + '.data{text-align:right;margin-bottom:3.5em;}'
    + '.saud{text-indent:1.5cm;margin-bottom:3.5em;}'
    + '.par{text-indent:1.5cm;text-align:justify;margin-bottom:1em;}'
    + '.par-lista{text-indent:0;text-align:left;margin-bottom:1em;}'
    + '.desp{margin-top:3.5em;margin-left:8cm;}'
    + '.asss{margin-top:4em;margin-left:8cm;}'
    + '.ab{margin-bottom:2em;}'
    + '.dig{font-size:9pt;color:#555;font-style:italic;}'
    + '.nom{font-weight:bold;}'
    + '.dest{margin-top:3.5em;line-height:1.5;}'
    + '.dest-linha{display:block;margin:0;padding:0;}'
    + '.dest-linha strong{font-weight:bold;text-transform:uppercase;}'
    + '.rod{border-top:1px solid #bbb;padding-top:.5em;margin-top:2em;text-align:center;font-size:8pt;color:#555;line-height:1.5;}'
    + '.rod-nome{font-weight:bold;font-size:8.5pt;display:block;}'
    + '.rod-end{display:block;}'
    + '.rod-cont{display:block;}'
    + '</style></head><body>'
    + '<div class="pagina">'
    // Cabe\u00e7alho institucional com bras\u00e3o
    + '<div class="cab">'
    + '<div class="cab-logo"><img src="' + BRASAO_B64 + '" alt="Bras\u00e3o"/></div>'
    + '<div class="cab-texto">'
    + '<div class="cab-top">ESTADO DE SANTA CATARINA</div>'
    + '<div class="cab-sejuri">SECRETARIA DE ESTADO DE JUSTI\u00c7A E REINTEGRA\u00c7\u00c3O SOCIAL</div>'
    + '<div class="cab-dpp">DEPARTAMENTO DE POL\u00cdCIA PENAL</div>'
    + '<div class="cab-unidade">' + u.nomeUnidade.toUpperCase() + '</div>'
    + '</div>'
    + '</div>'
    // Corpo
    + '<div class="data">' + cidade + ', ' + data + '.</div>'
    + '<div class="saud">' + saudacao + '</div>'
    + paras.map((p, i) => {
        const h = parasHtml[i] || p;
        const isLista = h.includes('margin-left:1.5cm');
        return '<div class="' + (isLista ? 'par-lista' : 'par') + '">' + h + '</div>';
      }).join('')
    + '<div class="desp">' + despedida + '</div>'
    + '<div class="asss">'
    + asss.map(a =>
        '<div class="ab">'
        + '<div class="dig">(documento assinado digitalmente)</div>'
        + '<div class="nom">' + a.nome + '</div>'
        + a.cargo.split('\n').map(l => '<div>' + l + '</div>').join('')
        + '</div>').join('')
    + '</div>'
    // Destinat\u00e1rio \u2014 sem tags extras, linha a linha
    + '<div class="dest">'
    + dest.map((l, i) => {
        const bold = i === 1; // linha do nome do ju\u00edzo/CRV em negrito
        return '<span class="dest-linha">' + (bold ? '<strong>' + l + '</strong>' : l) + '</span>';
      }).join('')
    + '</div>'
    // Rodap\u00e9 institucional
    + '<div class="rod">'
    + '<span class="rod-nome">' + rodapeLinha1 + '</span>'
    + (rodapeLinha2 ? '<span class="rod-end">' + rodapeLinha2 + '</span>' : '')
    + (rodapeLinha3 ? '<span class="rod-cont">' + rodapeLinha3 + '</span>' : '')
    + '</div>'
    + '</div>'
    + '</body></html>';

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  setTimeout(() => w.print(), 600);
}

function gerarWord() {
  const { cidade, data, saudacao, paras, parasHtml, despedida, asss } = coletarTextoOficio();
  const u    = _dadosUnidade();
  const dest = _destTextoLimpo();

  // Cabe\u00e7alho MSO com bras\u00e3o
  const cab =
    '<div style="mso-element:header;font-family:Arial;border-bottom:2pt solid #555;padding-bottom:6pt;margin-bottom:12pt;">'
    + '<table style="width:100%;border-collapse:collapse;border:none;"><tr>'
    + '<td style="width:2.2cm;vertical-align:middle;border:none;padding:0 6pt 0 0;">'
    + '<img src="' + BRASAO_B64 + '" style="width:1.8cm;height:auto;" alt="Bras\u00e3o"/>'
    + '</td>'
    + '<td style="vertical-align:middle;border:none;padding:0;">'
    + '<p style="margin:0;font-size:8pt;color:#333;">ESTADO DE SANTA CATARINA</p>'
    + '<p style="margin:0;font-size:8pt;color:#333;">SECRETARIA DE ESTADO DE JUSTI\u00c7A E REINTEGRA\u00c7\u00c3O SOCIAL</p>'
    + '<p style="margin:0;font-size:9pt;color:#000;font-weight:bold;">DEPARTAMENTO DE POL\u00cdCIA PENAL</p>'
    + '<p style="margin:0;font-size:11pt;font-weight:bold;color:#000;">' + u.nomeUnidade.toUpperCase() + '</p>'
    + '</td></tr></table>'
    + '</div>';

  // Rodap\u00e9 MSO com endere\u00e7o completo
  const endCompleto = u.end || (u.cidade ? u.cidade + '/SC' : '');
  const rod =
    '<div style="mso-element:footer;font-family:Arial;font-size:8pt;color:#555;text-align:center;border-top:1pt solid #bbb;padding-top:4pt;margin-top:12pt;">'
    + '<p style="margin:0;font-weight:bold;font-size:8.5pt;">' + u.nomeUnidade.toUpperCase() + '</p>'
    + (endCompleto ? '<p style="margin:0;">' + endCompleto + '</p>' : '')
    + ([u.tel, u.email].filter(Boolean).length ? '<p style="margin:0;">Fone: ' + (u.tel || '') + ' / e-mail: ' + (u.email || '') + '</p>' : '')
    + '</div>';

  // Destinat\u00e1rio limpo
  const destHtml = dest.map((l, i) =>
    '<p style="margin:0;font-family:Arial;font-size:11pt;">'
    + (i === 1 ? '<b>' + l + '</b>' : l)
    + '</p>'
  ).join('');

  const mso =
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">'
    + '<head><meta charset="UTF-8"/>'
    + '<style>'
    + '@page{mso-page-orientation:portrait;margin:3cm 2.5cm 2.5cm 3cm;mso-header-margin:1.5cm;mso-footer-margin:1.2cm;mso-header:h1;mso-footer:f1;}'
    + 'body{font-family:Arial;font-size:11pt;line-height:1.5;}'
    + '.data{text-align:right;}.gap4{margin-bottom:4em;}.gap5{margin-bottom:5em;}.gap2{margin-bottom:2em;}'
    + '.i15{margin-left:1.5cm;text-align:justify;}.i8{margin-left:8cm;}'
    + 'b{font-weight:bold;}.dig{font-size:9pt;color:#555;font-style:italic;}'
    + '</style></head><body>'
    + cab
    + '<p class="data">' + cidade + ', ' + data + '.</p>'
    + '<p class="gap4">&nbsp;</p>'
    + '<p class="i15 gap4">' + saudacao + '</p>'
    + paras.map((p, i) => {
        const h = parasHtml[i] || p;
        const isLista = h.includes('margin-left:1.5cm');
        if (isLista) return h; // j\u00e1 tem margin em cada div
        return '<p class="i15">' + h + '</p><p>&nbsp;</p>';
      }).join('')
    + '<p class="i8 gap4">' + despedida + '</p>'
    + '<p class="gap5">&nbsp;</p>'
    + asss.map(a =>
        '<p class="i8 dig">(documento assinado digitalmente)</p>'
        + '<p class="i8"><b>' + a.nome + '</b></p>'
        + a.cargo.split('\n').map(l => '<p class="i8">' + l + '</p>').join('')
        + '<p class="gap2">&nbsp;</p>').join('')
    + '<p class="gap4">&nbsp;</p>'
    + destHtml
    + rod
    + '</body></html>';

  const blob = new Blob(['\ufeff', mso], { type: 'application/msword' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'oficio-crv.doc';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
  showToast('\u1f4d8 Download Word iniciado!');
}

// ================================================
// GERAR CARDS DE UNIDADES DINAMICAMENTE
// (evita ofusca\u00e7\u00e3o de e-mail pelo Cloudflare)
// ================================================
function gerarCardsUnidades() {
  const container = document.getElementById('srContainer');
  if (!container) return;

  const srLabel = {
    SR01: 'Superintend\u00eancia Regional da Grande Florian\u00f3polis',
    SR02: 'Superintend\u00eancia Regional Sul',
    SR03: 'Superintend\u00eancia Regional do Norte Catarinense',
    SR04: 'Superintend\u00eancia Regional do Vale do Itaja\u00ed',
    SR05: 'Superintend\u00eancia Regional Serrana',
    SR06: 'Superintend\u00eancia Regional Oeste',
    SR07: 'Superintend\u00eancia Regional do M\u00e9dio Vale do Itaja\u00ed',
    SR08: 'Superintend\u00eancia Regional do Planalto Norte',
  };

  // Agrupa unidades por SR
  const grupos = {};
  UNIDADES.forEach(u => {
    if (!grupos[u.sr]) grupos[u.sr] = [];
    grupos[u.sr].push(u);
  });

  let html = '';
  Object.keys(srLabel).forEach(srId => {
    const unds = grupos[srId] || [];
    const sr   = SR_INFO[srId] || {};
    const telLink = sr.tel ? sr.tel.replace(/[\s\u2011\-]/g,'') : '';
    const emailSR = sr.email || '';

    html += `<div class="sr-bloco" data-sr="${srId.toLowerCase()}">
      <div class="sr-header" onclick="toggleSR(this)">
        <div class="sr-header-left">
          <span class="sr-tag">${srId}</span>
          <span class="sr-titulo">${srLabel[srId]}</span>
        </div>
        <div class="sr-header-right">
          <span class="sr-count">${unds.length} unidade${unds.length !== 1 ? 's' : ''}</span>
          <span class="sr-chevron-icon">\u25b6</span>
        </div>
      </div>
      <div class="sr-info-strip">
        <span>\u1f464 <strong>${sr.superintendente || ''}</strong></span>
        <span>\u1f4de <a href="tel:+55${telLink}">${sr.tel || ''}</a></span>
        <span>\u1f4e7 <a href="mailto:${emailSR}">${emailSR}</a></span>
      </div>
      <div class="sr-unidades" style="display:none;">`;

    unds.forEach(u => {
      const telU    = u.tel || '';
      const telNum  = telU.replace(/[\s\u2011\-\(\)]/g,'');
      const emailU  = u.email || '';
      html += `<div class="up-card">
        <div class="up-header" onclick="toggleUP(this)">
          <div>
            <div class="up-nome">${u.nome}</div>
            <div class="up-diretor">Dir.: ${u.diretor}</div>
          </div>
          <span class="up-chevron">\u25b6</span>
        </div>
        <div class="up-detalhe" style="display:none;">
          <span>\u1f4cd ${u.cidade}/SC</span>
          <span>\u1f4de <a href="tel:+55${telNum}">${telU}</a></span>
          <span>\u1f4e7 <a href="mailto:${emailU}">${emailU}</a></span>
        </div>
      </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

// ================================================
// TOAST
// ================================================
function showToast(msg) {
  let t = document.getElementById('crvToast');
  if (!t) {
    t = document.createElement('div'); t.id = 'crvToast';
    t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--azul-2);color:#fff;padding:.6rem 1.5rem;border-radius:100px;font-size:.85rem;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.3);transition:opacity .3s;pointer-events:none;';
    document.body.appendChild(t);
  }
  t.textContent = msg; t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ================================================
// INICIALIZA\u00c7\u00c3O
// ================================================
document.addEventListener('DOMContentLoaded', () => {
  // Gera cards de unidades dinamicamente (evita ofusca\u00e7\u00e3o de e-mail)
  gerarCardsUnidades();
  // Restaurar dark mode
  if (localStorage.getItem('darkMode') === '1') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('btnDarkMode');
    if (btn) btn.innerHTML = '\u2600\ufe0f Modo Claro';
  }

  // Inicializa modelo padr\u00e3o (sem abrir modal)
  // selecionarModelo('emergencial'); // s\u00f3 quando o modal abrir

  // Abre p\u00e1gina correta pelo hash
  const hash   = window.location.hash.replace('#','').trim();
  const validos = Object.keys(nomesPagina);
  if (hash && validos.includes(hash)) {
    navegarPara(hash);
  } else {
    navegarPara('inicio');
  }

  // Bot\u00e3o voltar/avan\u00e7ar
  window.addEventListener('popstate', () => {
    const h = window.location.hash.replace('#','').trim();
    if (h && validos.includes(h)) {
      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('ativo'));
      const alvo = document.getElementById(h);
      if (alvo) alvo.classList.add('ativo');
      document.querySelectorAll('.nav-principal a').forEach(a => {
        a.classList.remove('ativo');
        if (a.dataset.pagina === h) a.classList.add('ativo');
      });
      atualizarBreadcrumb(h);
    }
  });
});

function selecionarHipoteseEmergencial(hip) {
  const m = modelosTexto['emergencial'];
  if (!m || !m.variantes) return;

  const variante = m.variantes[hip];
  if (!variante) return;

  // Atualiza t\u00edtulo
  document.getElementById('oficioTitulo').textContent = variante.titulo;

  // Atualiza estado visual dos bot\u00f5es do seletor
  document.querySelectorAll('#ofc-hipotese-seletor .tipo-btn').forEach(btn => {
    btn.classList.remove('ativo');
  });
  const btnAtivo = hip === 'hipotese_i'
    ? document.querySelector('#ofc-hipotese-seletor .tipo-btn:first-child')
    : document.querySelector('#ofc-hipotese-seletor .tipo-btn:last-child');
  if (btnAtivo) btnAtivo.classList.add('ativo');

  // Renderiza par\u00e1grafos com o pipeline completo (campos amarelos, selects, etc.)
  const cont = document.getElementById('ofc-paragrafos');
  cont.innerHTML = variante.paragrafos.map((p, pIdx) => {
    const isObj = typeof p === 'object';
    const texto = isObj ? p.texto : p;
    const sf    = isObj ? p.selectField      : null;
    const lista = isObj ? p.listaReeducandos : false;

    if (lista) {
      return `<div class="oficio-paragrafo oficio-paragrafo-inline lista-reeducandos-wrap" data-texto-original="[LISTA_REEDUCANDOS]">
        <div id="lista-reeducandos" style="margin:4px 0 6px 0;">
          <div class="lista-reeducando-item" data-idx="1" style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
            <span style="font-weight:700;min-width:18px;">1.</span>
            <input type="text" class="campo-inline-editavel" placeholder="Nome completo do reeducando" data-field="nome" style="flex:1;min-width:220px;" />
            <span style="white-space:nowrap;">\u2014 IPEN N\u00ba</span>
            <input type="text" class="campo-inline-editavel" placeholder="N\u00famero IPEN" data-field="ipen" style="width:130px;" />
          </div>
          <div class="lista-reeducando-item" data-idx="2" style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
            <span style="font-weight:700;min-width:18px;">2.</span>
            <input type="text" class="campo-inline-editavel" placeholder="Nome completo do reeducando" data-field="nome" style="flex:1;min-width:220px;" />
            <span style="white-space:nowrap;">\u2014 IPEN N\u00ba</span>
            <input type="text" class="campo-inline-editavel" placeholder="N\u00famero IPEN" data-field="ipen" style="width:130px;" />
          </div>
        </div>
        <button onclick="adicionarReeducando()" type="button" style="margin-top:2px;padding:4px 14px;font-size:.82rem;background:#e0f2fe;border:1px solid #7dd3fc;border-radius:6px;cursor:pointer;color:#0369a1;">+ Adicionar reeducando</button>
      </div>`;
    }

    let htmlTexto;
    if (sf) {
      htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
        const selectId = `campo-sel-${pIdx}`;
        const opts = sf.opcoes.map(o => `<option value="${o}">${o}</option>`).join('');
        return `<select class="campo-inline-select" id="${selectId}" data-original="${fieldName}" style="font-weight:bold;color:#000;border:1.5px solid #f59e0b;border-radius:4px;padding:2px 6px;background:#fffbeb;font-size:inherit;">${opts}</select>`;
      });
    } else {
      htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
        const inputId = `campo-${pIdx}-${fieldName.replace(/[^a-zA-Z0-9]/g,'_')}`;
        const w = Math.max(120, Math.min(400, fieldName.length * 9 + 40));
        return `<input type="text" class="campo-inline-editavel campo-inline-negrito" id="${inputId}" placeholder="${fieldName}" data-original="${fieldName}" style="width:${w}px;" />`;
      });
    }

    return `<div class="oficio-paragrafo oficio-paragrafo-inline" data-texto-original="${texto.replace(/"/g,'&quot;')}">
      <p class="oficio-paragrafo-texto">${htmlTexto}</p>
    </div>`;
  }).join('');

  // Re-aplica substitui\u00e7\u00e3o de unidades caso j\u00e1 estejam selecionadas
  const ori = unidadeOrigemSel;
  const des = unidadeDestinoSel;
  if (ori || des) {
    document.querySelectorAll('#ofc-paragrafos .oficio-paragrafo').forEach(div => {
      let txt = div.dataset.textoOriginal || '';
      if (ori) txt = txt.replace(/\[UNIDADE PRISIONAL DE ORIGEM\]/g, ori.nome);
      if (des) txt = txt.replace(/\[UNIDADE PRISIONAL DE DESTINO\]/g, des.nome);
      div.dataset.textoOriginal = txt;
    });
    renderizarAssinaturas(ori, des);
  }
}
