"use client"

import Image from "next/image";
import Login  from "./loginpage/page"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {app} from './firbaseconfig'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <div>
      <Login/>
   </div>
  );
}