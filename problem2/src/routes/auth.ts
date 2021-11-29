import express from "express";
import { getToken } from "../auth";

const authRoute = express.Router();
authRoute.route("/", (req, res) => {
  const { userName, password } = req.body;
  const token = getToken(userName, password);

  res.send({
    ok: true,
    token,
  });
});

export default authRoute;
