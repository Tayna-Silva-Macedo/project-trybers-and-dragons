# Bem-vindo ao Projeto Trybers and Dragons!

Este é um projeto da [Trybe](https://www.betrybe.com/) que foi desenvolvido no módulo de Back-end. 
O Trybers and Dragons trata-se de uma simulação de estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG.
O objetivo principal foi aplicar e exercitar os princípios SOLID e POO.

## Tecnologias utilizadas

Para o desenvolvimento deste projeto foi utilizado ***Docker*** para rodar o projeto em um container, linguagem **TypeScript** para a escrita do código, paradigma **POO** e pincípios **SOLID** que proporcionam um código mais limpo, organizado e de manutenção mais facilitada.

## O que foi desenvolvido

  - Aplicação que simula um mini jogo de RPG em TypeScript;
  - Criação de classes;
  - Aplicação de conceitos de herança, encapsulamento e polimorfismo;
  - Aplicação dos princípios SOLID.

## Como rodar o projeto na sua máquina utilizando o Docker:

1. Navegue até o local onde deseja clonar o repositório e utilize o **git clone**:
```
git clone git@github.com:Tayna-Silva-Macedo/project-trybers-and-dragons.git
```

2. Acesse o diretório do projeto **project-trybers-and-dragons** e rode o serviço **node** com os seguintes comandos:
```
cd project-trybers-and-dragons
docker-compose up -d
```

3. Acesse o terminal interativo do container criado:
```
docker exec -it trybers_and_dragons bash
```

4. Por fim, dentro do container, instale as dependências e rode a aplicação utilizando os comandos:
```
npm install
npm start
```
