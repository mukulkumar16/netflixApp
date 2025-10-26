//@ts-nocheck
'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export async function handleSubmit(obj) {
  const { name, email, password } = obj;
    const usercookies = cookies();
    await usercookies.set('user', `${email}`);
    await usercookies.set('email', `${email}`);
    // console.log("Login successful");
    

    return  {
      success: true,
      message: "Login successful"
    };
  
}



export async function handleEmail(formData) {
  const email = formData.get('email');
  const usercookies = cookies();
  const useremail = (await usercookies).get('user');
  
  if(useremail?.value !== email){
    redirect('/form');
  }
  await usercookies.set('email', email);
  redirect('/searchresult');

}


export async function logout(){
  const usercookies = cookies();
  (await usercookies).delete('user');
  redirect('/form');
 

}




