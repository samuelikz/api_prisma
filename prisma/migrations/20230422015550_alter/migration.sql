/*
  Warnings:

  - You are about to drop the column `nome` on the `registration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `registration` DROP COLUMN `nome`,
    ADD COLUMN `name` VARCHAR(191) NULL;
