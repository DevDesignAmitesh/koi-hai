/*
  Warnings:

  - You are about to drop the column `firstPartnerNickName` on the `Pair` table. All the data in the column will be lost.
  - You are about to drop the column `secondPartnerNickName` on the `Pair` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Pair` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstPartnerId]` on the table `Pair` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[secondPartnerId]` on the table `Pair` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstPartnerId` to the `Pair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondPartnerId` to the `Pair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Pair` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "pairStatus" AS ENUM ('COMPLETED', 'SINGLE', 'SUSPEND', 'DELETED');

-- DropForeignKey
ALTER TABLE "Pair" DROP CONSTRAINT "Pair_userId_fkey";

-- DropIndex
DROP INDEX "Pair_firstPartnerNickName_key";

-- DropIndex
DROP INDEX "Pair_secondPartnerNickName_key";

-- DropIndex
DROP INDEX "Pair_userId_key";

-- AlterTable
ALTER TABLE "Pair" DROP COLUMN "firstPartnerNickName",
DROP COLUMN "secondPartnerNickName",
DROP COLUMN "userId",
ADD COLUMN     "firstPartnerId" TEXT NOT NULL,
ADD COLUMN     "secondPartnerId" TEXT NOT NULL,
ADD COLUMN     "status" "pairStatus" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pair_firstPartnerId_key" ON "Pair"("firstPartnerId");

-- CreateIndex
CREATE UNIQUE INDEX "Pair_secondPartnerId_key" ON "Pair"("secondPartnerId");

-- AddForeignKey
ALTER TABLE "Pair" ADD CONSTRAINT "Pair_firstPartnerId_fkey" FOREIGN KEY ("firstPartnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pair" ADD CONSTRAINT "Pair_secondPartnerId_fkey" FOREIGN KEY ("secondPartnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
