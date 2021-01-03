import * as crypto from "crypto";

class Password {
  constructor(public password: string, public key: string) {}
  encrypt() {
    const hash = crypto.createHmac('sha512',this.key)
    hash.update(this.password)
    const password = hash.digest('hex')
    return password 
  }
  encode(){
    const hash = crypto.createCipheriv('aes-256-gcm',this.key,process.env.IV||'')
    hash.update(this.password,'utf8')
    const ciphed = hash.final('hex')
    return ciphed
  }
  decode(){
    const hash = crypto.createDecipheriv('aes-256-gcm',this.key,process.env.IV||'')
    hash.update(this.password,'hex')
    const deciphedString = hash.final('utf-8')
    console.log(deciphedString)
    return deciphedString
  }
}

export default Password
