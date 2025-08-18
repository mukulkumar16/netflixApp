



//@ts-nocheck
'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';



export async function handleSubmit(obj) {
  const { name, email, password } = obj;


    const usercookies = cookies();
    usercookies.set('user', `${name}`);
    // console.log("Login successful");
    

    return  {
      success: true,
      message: "Login successful"
    };
  
}



export async function handleEmail(formData) {
  const email = formData.get('email');
  const usercookies = cookies();
  usercookies.set('email', email);
  redirect('/searchresult');

}


export async function logout(){
  const usercookies = cookies();
  (await usercookies).delete('user');
  redirect('/form');
 

}




