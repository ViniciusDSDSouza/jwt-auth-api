# 🔐 API de Autenticação JWT com TypeScript e Prisma

Uma API RESTful simples para autenticação e gerenciamento de usuários, construída com TypeScript, Express e Prisma, usando PostgreSQL como banco de dados e JWT para autenticação.

## 🛠️ Tecnologias

- **Node.js**, **TypeScript**, **Express**
- **Prisma** (ORM) + **PostgreSQL**
- **JWT** (autenticação) e **bcrypt** (hash de senha)
- **ts-node-dev** para desenvolvimento

## 🚀 Como rodar

1. Instale dependências:

```bash
npm install
```

2. Crie o arquivo `.env` na raiz:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
JWT_SECRET="sua_chave_secreta_jwt_aqui"
PORT=3000
```

3. Gere/migre o banco:

```bash
npx prisma migrate dev
```

4. Execute em desenvolvimento:

```bash
npm run dev
```

Servidor: `http://localhost:3000`

## 📚 Endpoints

- **POST /api/register**: cria usuário (name, email, password)
- **POST /api/login**: autentica e retorna JWT
- **GET /api/users**: lista usuários (requer `Authorization: Bearer <token>`)

## 🗄️ Modelo (User)

- `id` (UUID), `name`, `email` (único), `password` (hash), `createdAt`

## 📁 Estrutura

```
src/
├─ controllers/   # controladores
├─ middlewares/   # autenticação
├─ routes/        # rotas
├─ services/      # regras de negócio
├─ utils/         # utilitários (JWT)
├─ db/            # prisma client
├─ app.ts         # express app
└─ server.ts      # inicialização do servidor
```

## 🔧 Scripts

- `npm run dev`: desenvolvimento com hot reload

## 🔐 Segurança

- Hash de senha com bcrypt
- JWT para autenticação stateless
- Middleware protegendo rotas privadas
