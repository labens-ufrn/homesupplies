# Documento de Visão do Sistema HomeSupplies

O **HomeSupplies** é um Sistema de Controle de Estoque Residencial (Gerenciador de Despensas) que permitirá ao usuário cadastrar compras realizadas em um supermercado (ou outro estabelicimento) de um conjunto de produtos. Essas compras serão guardadas/estocadas em despensas residenciais. O Sistema também vai gerenciar os produtos abertos e em consumo na residência, guardando informações de validade e estoque.

Neste documento teremos a lista de requisitos, o modelo conceitual e a arquitetura geral do sistema. O documento base no Google Drive está aqui: [Documento de Visão](docs/doc-visao.md)!

## Perfis dos Usuários do Sistema

O sistema poderá ser utilizado por diversos perfis de usuários. Temos os seguintes perfis/atores:

Perfil                                 | Descrição   |
---------                              | ----------- |
Administrador | Este usuário administra o sistema, e pode realizar qualquer função.
Consumidor ou Gestor | Este usuário pode criar uma despensa e executar todas as funcionalidades na dispensa que é dono: incluir compras, incluir produtos na despensa, atualizar dados, listar produtos da despensa, compartilhar despensa, etc.

## Lista de Requisitos Funcionais

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |
RF001 - Cadastrar usuário/consumidor     | Um usuário pode se registrar preenchendo os seguintes dados: código, nome, e-mail, username, password. | Usuário |
RF002 - Visualizar profile do usuário/consumidor     | Um usuário pode visualizar seu profile com a exibição dos seus dados e informações sobre suas despensas. | Usuário |
RF003 - Atualizar dados do usuário/consumidor     | Um usuário pode atualizar qualquer um dos seus dados: código, nome, e-mail, username, password. | Usuário |
RF004 - Listar usuários     | Um administrador pode listar todos os usuários ou colocar algum filtro de busca. | Usuário |
RF005 - Excluir usuário/consumidor     | Um usuário pode solicitar exclusão do seu profile. | Usuário |
RF006 - Cadastrar despensa     | Um usuário pode cadastrar um despensa preenchendo os seguintes dados: código, nome, data de criação, dono. | Usuário |
RF007 - Visualizar despensa     | Um usuário pode visualizar despensa que exibe os dados da despensa e informações sobre seus produtos e quantidades. | Usuário |
RF008 - Listar despensas     | Um usuário pode listar suas despensas ou colocar algum filtro de busca. | Usuário |
RF009 - Atualizar despensa     | Um usuário pode atualizar qualquer um dos dados de uma despensa. | Usuário |
RF010 - Compartilhar despensa     | Um usuário pode compartilhar despensas que é dono com qualquer outro usuário dando permissão de visualização ou de gestão. Apenas o dono pode excluir compras, produtos da despensa. Gestores podem adicionar, editar e excluir (apenas o que criaram na despensa compartilhada). | Usuário |
RF011 - Excluir despensa     | Um usuário pode excluir despensas que é dono. | Usuário |
RF012 - Cadastrar marca     | Um usuário pode cadastrar uma marca preenchendo os seguintes dados: código, nome. | Usuário |
RF013 - Visualizar marca     | Um usuário pode visualizar marca e exibir os dados da marca e informações sobre quantidade de produtos da marca. | Usuário |
RF014 - Listar marcas     | Um usuário pode listar todas as marcas ou colocar algum filtro de busca. | Usuário |
RF015 - Atualizar marca     | Um usuário pode solicitar uma atualização dos dados de uma marca. A solicitação terá que ser aprovada por um administrador | Usuário, Administrador |
RF016 - Excluir marca     | Um usuário pode solicitar uma exclusão de uma marca, se ela não estiver sendo usada. A solicitação terá que ser aprovada por um administrador | Usuário, Administrador |
RF017 - Cadastrar categoria     | Um usuário pode cadastrar uma categoria preenchendo os seguintes dados: código, nome. O sistema terá as seguintes categorias cadastradas: Alimentos (cereais e grãos), Padaria, Congelados e frios, Hortifruti, Higiene Pessoal, Limpeza, Bebidas e Papelaria | Usuário |
RF018 - Visualizar categora     | Um usuário pode visualizar categoria e exibir os dados da categoria e informações sobre quantidade de produtos da categoria. | Usuário |
RF019 - Listar categorias     | Um usuário pode listar todas as categorias ou colocar algum filtro de busca. | Usuário |
RF020 - Atualizar categoria     | Um usuário pode solicitar uma atualização dos dados de uma categoria. A solicitação terá que ser aprovada por um administrador | Usuário, Administrador |
RF021 - Excluir categoria     | Um usuário pode solicitar uma exclusão de uma categoria, se ela não estiver sendo usada. A solicitação terá que ser aprovada por um administrador | Usuário, Administrador |
RF022 - Cadastrar produto     | Um usuário pode cadastrar um produto preenchendo os seguintes dados: nome, marca, tipo (perecível ou não perecível), categoria, peso, unidade; | Usuário |
RF023 - Visualizar produto     | Um usuário pode visualizar produto e exibir os dados do produto e informações sobre quantidade de produtos nas despensas em geral e nas despensas do usuário. | Usuário |
RF024 - Listar produtos     | Um usuário pode listar todas os produtos ou colocar algum filtro de busca. | Usuário |
RF025 - Atualizar produto     | Um usuário pode solicitar uma atualização dos dados de um produto. A solicitação terá que ser aprovada por um administrador ou pelo usuário que cadastrou o produto | Usuário, Administrador |
RF026 - Excluir produto     | Um usuário pode solicitar uma exclusão de um produto, se ela não estiver sendo usado. A solicitação terá que ser aprovada por um administrador | Usuário, Administrador |
RF027 - Cadastrar Compra     | Um usuário pode cadastrar uma compra preenchendo os seguintes dados: código, data, local, valor total e se está armazenado em alguma despensa. Uma compra é formada por um conjunto de produtos (Itens de Compra). Uma compra é realizada em um estabelecimento (Supermercado, mercadinho, mercado, feira, etc). Se na compra tiver os produtos (item de compra) com validade diferentes, deve-se cadastrar em Itens de Compras diferentes. | Usuário |
RF028 - Visualizar Compra     | Um usuário pode visualizar uma compra e exibir os dados dos produtos (Itens de Compra). | Usuário |
RF029 - Listar Compras     | Um usuário pode listar todas as compras que ele realizou ou colocar algum filtro de busca. | Usuário |
RF030 - Atualizar Compra     | Um usuário pode atualizar os dados de sua compra. | Usuário |
RF031 - Excluir Compra      | Um usuário pode excluir uma compra. Ao excluir uma compra todos os itens de compra e itens de despensa são excluídos em cascata | Usuário |
RF032 - Cadastrar Item de Compra     | Um usuário pode cadastrar Itens de Compra com os seguintes dados: preço, validade e a quantidade de cada produto, quantidade de produto armazenado. | Usuário |
RF033 - Atualizar Item de Compra     | Um usuário pode atualizar os dados de um item de compra e informar em qual despensa está armazenado o item. Ao armazenar um Item de Compra são criados diversões Itens de Despensa. | Usuário |
RF034 - Excluir Item de Compra      | Um usuário pode excluir um item de compra. Ao excluir um item de compra todos os itens de despensa são excluídos em cascata | Usuário |
RF035 - Cadastrar Item de Despensa     | Um Item de Despensa é criado para cada produto no Item de Compra (desmembramento do Item de Compra). Um Item de Despensa tem os seguintes dados de apenas um produto: item de compra, validade, validade aberto e status: fechado, aberto (em uso), consumido, doado. | Usuário |
RF036 - Excluir Item de Despensa      | Um usuário pode excluir um item de despensa. Ao excluir um item de despensa, os itens de compras devem ser atualizados na quantidade de produtos armazenados. | Usuário |

## Modelo Conceitual em UML

Abaixo apresentamos o modelo conceitual usando o **YUML**.

 ![Modelo UML](yuml/monitoria-modelo.png)

O código que gera o diagrama está [Aqui!](yuml/monitoria-yuml.md). O detalhamento dos modelos conceitual e de dados do projeto estão no [Documento de Modelos](doc-modelos.md).

## Modelo Arquitetural

## Lista de Requisitos Não-Funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF001 - Deve ser acessível via navegador | Deve abrir perfeitamento no Firefox e no Chrome. |
RNF002 - Consultas deve ser eficiente | O sistema deve executar as consultas em milessegundos |
RNF003 - Log e histórico de acesso e funções | Deve manter um log de todos os acessos e das funções executadas pelo usuário |
