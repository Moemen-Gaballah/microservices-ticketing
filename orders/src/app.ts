import express from 'express';
import 'express-async-errors'
import {json} from 'body-parser';
import cookieSession from "cookie-session";
import {currentUser, errorHandler, NotFoundError} from "@mgticketing/common";
import {newOderRouter} from './routes/new'
import {showOderRouter} from "./routes/show";
import {indexOderRouter} from "./routes/index";
import {deleteOderRouter} from "./routes/delete";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}));
app.use(currentUser)

app.use(indexOderRouter);
app.use(newOderRouter);
app.use(showOderRouter);
app.use(deleteOderRouter);

app.all('*', async () => {
    throw new NotFoundError();
})

app.use(errorHandler);

export {app};
