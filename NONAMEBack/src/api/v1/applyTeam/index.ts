import { Router } from 'express';
import applyTeam from './applyTeam';
import teamApplyList from './teamApplyList';
const router = Router();
router.post('/applyTeam', applyTeam);
router.get('/teamApplyList', teamApplyList);
export default router;
