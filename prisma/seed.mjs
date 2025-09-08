import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed a default marketing agent
  await prisma.agent.upsert({
    where: { code: 'SP1001' },
    update: { name: 'Default Agent', phone: '9000000000' },
    create: {
      name: 'Default Agent',
      phone: '9000000000',
      email: 'agent@spdevelopers.example',
      code: 'SP1001',
    },
  })
  console.log('Seed complete: agent SP1001')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


