# 🏅 SEMADEC API – Sistema de Gerenciamento Esportivo do IFRN

Este projeto é uma **API RESTful** desenvolvida com **AdonisJS** e **PostgreSQL**, criada para gerenciar as competições esportivas da **SEMADEC (Semana de Arte, Cultura e Desporto)** do IFRN.

A API permite o **cadastro e gerenciamento de atletas, equipes, modalidades esportivas e cursos**, possibilitando a organização das competições de forma estruturada e eficiente.

---

## 🔧 Tecnologias Utilizadas

- [AdonisJS](https://adonisjs.com/) – Framework Node.js MVC completo
- [PostgreSQL](https://www.postgresql.org/) – Banco de dados relacional robusto
- [Lucid ORM](https://docs.adonisjs.com/guides/database/introduction) – ORM oficial do AdonisJS

---

## 📦 Funcionalidades

- Cadastro e controle de **cursos** e **modalidades**
- Gerenciamento de **atletas** e suas informações (nome, gênero, curso)
- Criação de **equipes** com vínculo a cursos e modalidades
- Controle de **composição de equipes** através de associação de atletas
- Validação e filtragem por **gênero**, **status de atividade** e **participação**
- Estrutura pronta para uso em **eventos recorrentes**, como diferentes edições da SEMADEC

---

## 🔗 Modelo de Dados

O banco de dados segue uma estrutura relacional com as seguintes entidades principais:

- `modalidades`
- `cursos`
- `atletas`
- `equipes`
- `equipe_atletas` (pivot de relação muitos-para-muitos)

![Diagrama](./diagrama_bd.png)
