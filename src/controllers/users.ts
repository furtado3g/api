import { Request, Response } from "express";
import model from "../models/users";
import checkFields from "../util/checkFields";
import Password from './../util/passwordEncode'
import Mail from './../util/mailer'
import * as fs from 'fs'
import * as path from 'path'
class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password, name, birthday } = req.body;
    const usernameUse = await model.checkUserName(username);
    if (usernameUse.error) return res.status(422).json({ error: usernameUse.error });
    const emailUse = await model.checkEmail(email);
    if (emailUse.error) return res.status(422).json({ error: emailUse.error });
    if (!checkFields({ username, email, password, name, birthday }))
      res.status(400).json(emailUse.error);
    const psw = new Password(password,process.env.SALT||'')
    const hashedPassword = psw.encrypt()
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
      Mail.to = email;
      Mail.subject = "Confirmar Inscrição - Anemia Poesias"
      const file = fs.readFileSync(path.join(__dirname,'../public/mail.html'))
      Mail.message = file.toString().replace('[LINK]',`${process.env.BASEURL}/activate?h=${psw.encode(username)}`)
      Mail.sendMail()
      return res.status(201).json({ message });
    } else {
      return res.status(403).json({ error });
    }
  }

  async userDetailToConfimation(req: Request, res: Response){
    const {username} = req.query
    const psw = new Password('',process.env.SALT||'')
    // @ts-ignore: Unreachable code error
    const user = psw.decode(username||'')
    const response = await model.userDetailToConfimation(user)
    return res.json(response[0])
  }

  async activate (req: Request, res: Response){
    const {id} = req.params
    const response = await model.activateUser(id)
    if(response == 1){
      return res.json({ message : "Usuário ativado com sucesso!"})
    }else{
      return res.status(422).json({error : "Ocorreu um erro ao tentar ativar usuário,Tente novamente mais tarde"})
    }
  }
}

export default new UserController();
