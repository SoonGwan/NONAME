import { Router } from 'express';
import getTeam from './getTeam';

const router = Router();
router.get('/getTeam', getTeam);

export default router;
