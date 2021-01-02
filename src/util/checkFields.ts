export default function(fields:any){
    let valid  = true;
    Object.keys(fields).forEach(k=>{
        if((fields[k] === undefined || fields[k] === '' || fields[k] === null) && valid) valid = false;
    })
    return valid;
}