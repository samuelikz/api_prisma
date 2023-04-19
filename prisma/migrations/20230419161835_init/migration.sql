-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "cpf" TEXT
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "email" TEXT,
    "cpf" TEXT,
    "endenreco" TEXT,
    "data_nascimento" TEXT
);
