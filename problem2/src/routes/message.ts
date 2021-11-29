import express from "express";
import auth from "../middleware/auth";

const messageRouter = express.Router();
messageRouter.post("/messages", [auth], (req, res) => {
  res.send({
    ok: true,
  });
});

export default messageRouter;
