//@ts-nocheck
'use client'
import React, { useState } from 'react'
import { Switch, Theme } from '@radix-ui/themes'
import { Flame } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';


export default function layout({ children }) {
  // const [isdark , setisdark] = useState(false)




  return (
    
      <div>
       
        <Header/>
       

         {children}
         <Footer/>
      </div>
    
  )
}

