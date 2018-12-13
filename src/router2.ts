import { Router } from 'express';
import express = require('express');
import { UsersController2 } from './controllers/users-controller2';

const router2 = Router();

router2.get('/users', async (_req: express.Request, res: express.Response) => {
  const users = await new UsersController2().getUsers();
  res.json({ router2: users });
});

export { router2 };
