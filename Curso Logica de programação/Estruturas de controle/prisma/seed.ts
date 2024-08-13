import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const normal = await prisma.simulationFees.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Normal',
      feesId: 'cb563029-ba93-4b53-8d53-4ac145087212'
    }
  });

  const acelera2 = await prisma.simulationFees.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Acelera 2.0",
      feesId: "f6d779ed-52bf-42f2-9dbc-3125fe6491ba"
    }
  });

  const milhas = await prisma.simulationFees.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Milhas",
      feesId: "13c4c16a-0ace-4cca-af52-323ddf2c0894"
    }
  });

  const turbo = await prisma.simulationFees.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: "Turbo",
      feesId: "8beaa78b-b7ba-4f48-853e-de9f322be42f"
    }
  });

  const pitstop = await prisma.simulationFees.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: "Pitstop",
      feesId: "cd67cb02-c49d-457e-bfa9-a99316eb9dfe"
    }
  });

  console.table({ normal, acelera2, milhas, turbo, pitstop });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
