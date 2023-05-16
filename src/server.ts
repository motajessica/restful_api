import express, { Application } from 'express';
import env from 'dotenv';
import router from './routes';

env.config();

const server: Application = express();
server.use(express.json());

server.use('/api/v1/', router);

const PORT: number = parseInt(process.env.PORT || '3000', 10);
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
