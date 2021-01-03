import { Request, Response } from "express";
import model from "../models/users";
import checkFields from "../util/checkFields";
import Password from './../util/passwordEncode'

class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password, name, birthday } = req.body;
    const usernameUse = await model.checkUserName(username);
    if (usernameUse.error) return res.status(422).json({ error: usernameUse.error });
    const emailUse = await model.checkEmail(email);
    if (emailUse.error) return res.status(422).json({ error: emailUse.error });
    if (!checkFields({ username, email, password, name, birthday }))
      res.status(400).json(emailUse.error);
    const hashedPassword = new Password(password,process.env.SALT||'').encrypt()
    const result = await model.create({
      id: null,
      username,
      email,
      password : hashedPassword,
      name,
      birthday,
      profileImage: null,
      description: null,
    });
    const { message, error } = result;
    if (message) {
      return res.status(201).json({ message });
    } else {
      return res.status(403).json({ error });
    }
  }
}

export default new UserController();
