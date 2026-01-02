-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pair" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "firstPartnerNickName" TEXT NOT NULL,
    "secondPartnerNickName" TEXT NOT NULL,
    "phrase" TEXT NOT NULL,

    CONSTRAINT "Pair_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pair_userId_key" ON "Pair"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Pair_firstPartnerNickName_key" ON "Pair"("firstPartnerNickName");

-- CreateIndex
CREATE UNIQUE INDEX "Pair_secondPartnerNickName_key" ON "Pair"("secondPartnerNickName");

-- CreateIndex
CREATE UNIQUE INDEX "Pair_phrase_key" ON "Pair"("phrase");

-- AddForeignKey
ALTER TABLE "Pair" ADD CONSTRAINT "Pair_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
