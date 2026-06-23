import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

export const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// --- ROUTES --- //

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'success', 
    message: 'LaliKids API is running securely!' 
  });
});

app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// --- START THE ENGINE --- //
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log('====================================');
  console.log('  LaliKids Backend Engine Online');
  console.log('====================================');
  console.log(`  API Base URL: http://localhost:${PORT}`);
});