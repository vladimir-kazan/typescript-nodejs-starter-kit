import { Router } from 'express';
import express = require('express');
import { UsersController1 } from './controllers/users-controller1';

const router1 = Router();

router1.get('/users', async (_req: express.Request, res: express.Response) => {
  const users = await new UsersController1().getUsers();
  res.json({ router1: users });
});

export { router1 };
