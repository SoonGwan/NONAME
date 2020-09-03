import { Router } from 'express';
import getTeam from './getTeam';
import makeTeam from './makeTeam';
import getMyTeam from './getMyTeamList';

const router = Router();
router.get('/getTeam', getTeam);
router.post('/makeTeam', makeTeam);
router.get('/getMyTeam', getMyTeam);

export default router;
