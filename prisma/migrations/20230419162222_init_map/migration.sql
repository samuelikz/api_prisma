/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "email" TEXT,
    "cpf" TEXT,
    "endenreco" TEXT,
    "data_nascimento" TEXT
);
