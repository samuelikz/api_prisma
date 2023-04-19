-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "cpf" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("cpf", "id", "nome") SELECT "cpf", "id", "nome" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE TABLE "new_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "email" TEXT,
    "cpf" TEXT,
    "data_nascimento" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_posts" ("cpf", "data_nascimento", "email", "id", "nome") SELECT "cpf", "data_nascimento", "email", "id", "nome" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
