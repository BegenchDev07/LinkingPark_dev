import Pocketbase from 'pocketbase';
import { Collections, UsersRecord } from './pocketbase-types';
import { FormValues } from 'pages/Register';
import { LoginValues } from 'pages/Login';

const pb = new Pocketbase('https://admin.400box.cn');


export const registerUser = async (data:FormValues) : Promise<Boolean> => {
  // debugger;
  const result = await pb.collection('users').create({
    "username" : data.username,
    "original_name" : data.original_name,
    "phone_number" : data.username,
    "password": data.password,
    "passwordConfirm": data.password,
    "emailVisibility":true
  })
  .then((result)=>{
    return true
  })
  .catch((error)=>{
    // debugger;
    // Object.entries(data.data).map((result:any)=>{alert(result[0] + '\t' + result[1].message)})
    return false
  })
  return result

}

export const loginUser = async(data:LoginValues) : Promise<Boolean> => {
  const result = await pb.collection('users').authWithPassword(
    data.username,
    data?.password
  )
  .then((result)=>{
    return true
  })
  .catch((error)=>{
    return false
  })
  return result;
}
