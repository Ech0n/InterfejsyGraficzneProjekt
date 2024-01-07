import { openDB } from 'idb';

export async function checkUsernameAvailbility(username,db){
    let res = await db.getFromIndex('users','findUsername',username)
    if(res)
    {
      console.log("There is an userwith that name",res)
      return false
    }
    else{
      console.log("There is no user with that name")
      return true
    }
  }
  
export async function makeUser(user,passwordConfirmation) {
    if (user.password !== passwordConfirmation)
    {
        return " passwords don't match!"
    }
    let msg = "success"
      const db = await openDB("db_",1);
      let canMakeAnAccount = await checkUsernameAvailbility(user.username,db)
      if(canMakeAnAccount)
      {
        let k = await db.put("users",user)
        console.log(k)
        
      }else{
        msg = " Username taken!"
      }
      db.close()
  
      return msg
  }
  