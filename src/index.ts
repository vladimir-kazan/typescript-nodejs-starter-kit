import express from 'express';
import { router1 } from './router1';
import { router2 } from './router2';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router1);
app.use('/api/v2', router2);

app.listen(5000, () => {
  console.log('Express server listening on port ' + 5000);
});
