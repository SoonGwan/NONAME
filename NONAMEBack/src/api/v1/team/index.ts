import { Router } from 'express';
import getTeam from './getTeam';
import makeTeam from './makeTeam';
import getMyTeam from './getMyTeamList';
import infoTeam from './infoTeam';
import modifyTeam from './ModifyTeam';

const router = Router();
router.get('/getTeam', getTeam);
router.post('/makeTeam', makeTeam);
router.get('/getMyTeam', getMyTeam);
router.get('/infoTeam', infoTeam);
router.put('/modifyTeam', modifyTeam);

export default router;
