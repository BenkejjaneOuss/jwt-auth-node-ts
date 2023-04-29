require('dotenv').config();
import express, {Application, Request, Response, NextFunction} from 'express';
import config from 'config';

const app: Application = express();
const port = config.get<number>('port');

app.get('/', (req: Request, res: Response) => {
    res.send('The current route is /');
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});