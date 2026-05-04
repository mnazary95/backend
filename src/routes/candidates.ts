import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  res.json({ candidates: [], total: 0 });
});

router.post('/', async (_req: Request, res: Response) => {
  res.json({ message: 'Profile created' });
});

router.get('/:id', async (req: Request, res: Response) => {
  res.json({ candidate: null, id: req.params.id });
});

export default router;
