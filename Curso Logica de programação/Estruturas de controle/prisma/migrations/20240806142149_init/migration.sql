-- CreateTable
CREATE TABLE "providers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "audience" TEXT NOT NULL,
    "token" TEXT,
    "tokenExpiration" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fgts_simulation" (
    "id" SERIAL NOT NULL,
    "provider" TEXT NOT NULL,
    "avaible_balance" DOUBLE PRECISION NOT NULL,
    "emission_amount" DOUBLE PRECISION NOT NULL,
    "total_balance" DOUBLE PRECISION NOT NULL,
    "total_installments" INTEGER NOT NULL,
    "document" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fgts_simulation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fgts_installments" (
    "id" SERIAL NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "due_principal" TIMESTAMP(3) NOT NULL,
    "fgts_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fgts_installments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "simulation_fees" (
    "id" SERIAL NOT NULL,
    "fees_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "simulation_fees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "providers_username_key" ON "providers"("username");

-- CreateIndex
CREATE UNIQUE INDEX "providers_password_key" ON "providers"("password");

-- CreateIndex
CREATE UNIQUE INDEX "providers_client_id_key" ON "providers"("client_id");

-- AddForeignKey
ALTER TABLE "fgts_installments" ADD CONSTRAINT "fgts_installments_fgts_id_fkey" FOREIGN KEY ("fgts_id") REFERENCES "fgts_simulation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
