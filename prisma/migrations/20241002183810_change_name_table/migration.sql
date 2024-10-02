/*
  Warnings:

  - You are about to drop the `Avalatiation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Avalatiation";

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "showName" BOOLEAN NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
