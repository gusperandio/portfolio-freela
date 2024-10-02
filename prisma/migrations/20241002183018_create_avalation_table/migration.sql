-- CreateTable
CREATE TABLE "Avalatiation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "showName" BOOLEAN NOT NULL,

    CONSTRAINT "Avalatiation_pkey" PRIMARY KEY ("id")
);
