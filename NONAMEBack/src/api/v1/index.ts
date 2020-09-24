import { Router } from 'express';
import auth from './auth';
import user from './user';
import item from './item';
import team from './team';
import upload from './upload';
import applyTeam from './applyTeam';
const router = Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/item', item);
router.use('/team', team);
router.use('/upload', upload);
router.use('/applyTeam', applyTeam);

export default router;
