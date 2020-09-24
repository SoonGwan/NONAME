import { Router } from 'express';
import applyTeam from './applyTeam';

const router = Router();
router.post('/applyTeam', applyTeam);

export default router;
