import { Router } from 'express';
import getTeam from './getTeam';
import makeTeam from './makeTeam';

const router = Router();
router.get('/getTeam', getTeam);
router.post('/makeTeam', makeTeam);

export default router;
