import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const getToken = async (userName: string, password: string) => {
  const users = [{ userName: "hoan", password: "123456", _id: 1 }];
  let currentUser = users.find((u) => u.userName === userName);
  if (!currentUser) throw new Error("Invalid user or password!");

  const isValid = await bcrypt.compare(currentUser.password, password);
  if (!isValid) throw new Error("Invalid password!");
  const token = jwt.sign(
    {
      id: currentUser._id,
    },
    "jwtPrivateKey",
    { expiresIn: "15m" }
  );

  return token;
};

const verifyToken = (token: string) => {
  if (!token) throw new Error("Invalid token");
  try {
    const decoded = jwt.verify(token, "jwtPrivateToken");
    return decoded;
  } catch (error) {
    throw new Error("Token expired");
  }
};

export { getToken, verifyToken };
