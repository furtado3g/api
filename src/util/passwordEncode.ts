import * as crypto from "crypto";
import cryptoJs from "crypto-js"

class Password {
  constructor(public password: string, public key: string) {}
  encrypt() {
    const hash = crypto.createHmac('sha512',this.key)
    hash.update(this.password)
    const password = hash.digest('hex')
    return password 
  }
  encode(msg : string){
    const hash = cryptoJs.AES.encrypt(msg,process.env.SALT||'').toString()
    return hash
  }
  decode(msg : string){
    const message = cryptoJs.AES.decrypt(msg,process.env.SALT||'').toString(cryptoJs.enc.Utf8)
    return message
  }
}

export default Password
