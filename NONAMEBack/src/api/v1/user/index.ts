import { Router } from 'express';
// import auth from './auth';
import getUser from './getUser';
import deleteUser from './deleteUser';
import putUser from './putUser';
import AuthMiddleware from '../../../lib/middleware/auth';

const router = Router();
router.get('/userList', getUser);
router.delete('/userListDelete', AuthMiddleware.admin, deleteUser);
router.put('/modifyUser', AuthMiddleware.admin, putUser);

export default router;
