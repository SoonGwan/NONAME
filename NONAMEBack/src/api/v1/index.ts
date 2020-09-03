import { Router } from 'express';
import auth from './auth';
import user from './user';
import item from './item';
import team from './team';
import upload from './upload';
const router = Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/item', item);
router.use('/team', team);
router.use('/upload', upload);

export default router;
