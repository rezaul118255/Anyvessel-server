import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus, { NOT_EXTENDED } from "http-status";
const app: Application = express();
import cookieParser from "cookie-parser";
import router from "./app/router/indexx";

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  })
);

//parser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use global error handler
// app.use(globalErrorHandler);

app.use("/api/v1", router);

// if not found any route or api
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    errorMessage: [
      {
        path: ".",
        message: "Api Is not found",
      },
    ],
  });
  next();
});

export default app;
