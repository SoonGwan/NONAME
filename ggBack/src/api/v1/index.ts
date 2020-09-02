import { Router } from 'express';
// import auth from './auth';
// import user from './user';
// import item from './item';
import riotRes from './riot';
const router = Router();

// router.use('/auth', auth);
// router.use('/user', user);
// router.use('/item', item);
router.use('/riotRes', riotRes);

export default router;
