import db from "../databases/conection";
import {DateTime} from "luxon"

interface userI {
    id : number|null;
    username : string;
    email : string;
    password : string;
    name : string;
    birthday : string;
    profileImage : string|null;
    description : string|null;
}

class UserModel {
  async create(user : userI) {
    
    return db('users').insert({
        username : user.username,
        email : user.email,
        password : user.password,
        name : user.name,
        birthday : user.birthday
    }).then((result : any)=>{
        const {rowCount} = result
        if(rowCount > 0){
            return{
                message:'Usuário criado com sucesso'
            }
        }else{
            return{
                error : 'Ocorreu um erro ao tentar criar novo usuário'
            }
        }
    })
  }

  async checkUserName(username:string){
    const user = await db('users')
    .select('*')
    .where('username',username)
    .then(result => {
        return result
    })
    if(user[0]) return {
        error : "Nome de usuário ja cadastrado"
    }
    return {
        message : "Nome de usuário disponivel"
    }
  }

  async checkEmail(email:string){
    const user = await db('users')
    .select('*')
    .where('email',email)
    .then(result => {
        return result
    })
    if(user[0]) return {
        error : "Email ja cadastrado"
    }
    return {
        message : "Email não cadastrado"
    }
  }
}

export default new UserModel()