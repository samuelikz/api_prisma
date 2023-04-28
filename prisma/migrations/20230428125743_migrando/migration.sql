/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `registration` will be added. If there are existing duplicate values, this will fail.
  - Made the column `cpf` on table `registration` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `registration` MODIFY `cpf` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `registration_cpf_key` ON `registration`(`cpf`);
