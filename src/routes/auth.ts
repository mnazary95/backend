import { Router, Request, Response } from 'express';

const router = Router();

router.post('/login', async (_req: Request, res: Response) => {
  res.json({ message: 'Login endpoint' });
});

router.post('/register', async (_req: Request, res: Response) => {
  res.json({ message: 'Register endpoint' });
});

export default router;
