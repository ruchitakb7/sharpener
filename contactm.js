//const users=[];
const fs=require('fs');
const path=require('path')
const p=path.join(path.dirname(process.mainModule.filename),
'data',
'users.json'
);
module.exports = class User {
    constructor(name) {
        this.user=name;
    }
   save() {
  
   //   const p=path.join(path.dirname(process.mainModule.filename),
   //   'data',
   //   'users.json'
   //   );
   let users=[]
      fs.readFile(p,(err,fileContent)=>{
      //  let users=[]
        if (!err)
        {
            users=JSON.parse(fileContent)
        }
        users.push(this)
        fs.writeFile(p,JSON.stringify(users),(err)=>{
          console.log(err)
        })
        return users
      })
     
   }
   
   static fetchAll() {
  //  const p=path.join(path.dirname(process.mainModule.filename));
      fs.readFile(p,(err,fileContent)=>{
        if (err) {
            return []
        }
      return  JSON.stringify(fileContent)
      })
    
   }
}