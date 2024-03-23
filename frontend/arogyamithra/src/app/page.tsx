"use client"

import Image from "next/image";
import Login  from "./loginpage/page"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {app} from './firbaseconfig'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import supabase from "./supabaseconfig";
export default function Home() {
  const router = useRouter()
  const auth = getAuth(app)
  const [userPhone,setUserPhone] = useState<null | any>("")
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log(user.phoneNumber?.slice(1))
        setUserPhone(user.phoneNumber?.slice(1))
        //router.push("/caloriedashboard")
      }
    })
    async function fetchUserData() {
      // Fetch user data where phone number is '8547950086'
      const { data, error } = await supabase
        .from('User')
        .select('name')
        .eq('phone',userPhone).single();

      if (error) {
        console.error('Error fetching user data:', error.message);
        return;
      }

      if (data) {
        router.push("/caloriedashboard")
      }else{
        console.log(data)
        
      }
    }

    fetchUserData();

    
  },[auth,router])
  return (
    <div>
      <Login/>
   </div>
  );
}