import { verifyToken } from "../auth";

const auth = (req, res, next) => {
  const token = req.header("X-Auth-Token");
  verifyToken(token);
  next();
};

export default auth;
