import { Router } from 'express';
import auth from './auth';
import user from './user';
import item from './item';
const router = Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/item', item);

export default router;
