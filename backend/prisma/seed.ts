import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('admin123', 12);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@tanzibaba.co.tz' },
    update: {},
    create: {
      email: 'admin@tanzibaba.co.tz',
      passwordHash: adminPassword,
      role: 'ADMIN',
    },
  });

  console.log('Admin user created:', adminUser.email);

  const supplierPass = await bcrypt.hash('supplier123', 12);
  const supUser = await prisma.user.upsert({
    where: { email: 'info@tanzibaba.co.tz' },
    update: {},
    create: {
      email: 'info@tanzibaba.co.tz',
      passwordHash: supplierPass,
      role: 'SUPPLIER',
    },
  });

  const sup = await prisma.supplier.upsert({
    where: { userId: supUser.id },
    update: {},
    create: {
      userId: supUser.id,
      companyName: 'Tanzibaba',
      contactPerson: 'Sales Team',
      phoneNumber: '0716002790',
      email: 'info@tanzibaba.co.tz',
      latitude: -6.7924,
      longitude: 39.2083,
      capacity: 500,
      reliabilityScore: 5.0,
      status: 'ACTIVE',
    },
  });

  const districts = ['Kinondoni', 'Ilala', 'Ubungo', 'Kigamboni', 'Temeke'];
  for (const district of districts) {
    await prisma.supplierCoverage.upsert({
      where: { id: `${sup.id}-${district}` },
      update: {},
      create: { supplierId: sup.id, district },
    });
  }

  const grades = ['C10', 'C15', 'C20', 'C25', 'C30', 'C35', 'C40', 'C45', 'C50'];
  const pricingData = [
    { supplierId: sup.id, grade: 'C10', pricePerM3: 130000, deliveryFee: 70000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C15', pricePerM3: 150000, deliveryFee: 75000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C20', pricePerM3: 180000, deliveryFee: 80000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C25', pricePerM3: 210000, deliveryFee: 85000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C30', pricePerM3: 250000, deliveryFee: 90000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C35', pricePerM3: 290000, deliveryFee: 95000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C40', pricePerM3: 330000, deliveryFee: 100000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C45', pricePerM3: 360000, deliveryFee: 105000, pumpFee: 150000 },
    { supplierId: sup.id, grade: 'C50', pricePerM3: 400000, deliveryFee: 110000, pumpFee: 150000 },
  ];
  for (const p of pricingData) {
    await prisma.supplierPricing.upsert({
      where: { supplierId_grade: { supplierId: sup.id, grade: p.grade } },
      update: {},
      create: p,
    });
  }

  console.log('Supplier created:', sup.companyName);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
