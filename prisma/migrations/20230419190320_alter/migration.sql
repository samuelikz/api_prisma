/*
  Warnings:

  - You are about to drop the column `endereco` on the `posts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "email" TEXT,
    "cpf" TEXT,
    "data_nascimento" TEXT
);
INSERT INTO "new_posts" ("cpf", "data_nascimento", "email", "id", "nome") SELECT "cpf", "data_nascimento", "email", "id", "nome" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
