"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InputOTPSlot, InputOTPGroup, InputOTP } from "@/components/ui/input-otp"

 declare global {
    interface Window {
        recaptchaVerifier:any;
    }
}
import {useState, useEffect} from "react"
import {getAuth, RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth"
import {app} from '../firbaseconfig.js'
import {useRouter} from "next/navigation"

export default function Login(){
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp,setOtp] = useState('')
  const [confirmationRes, setConfirmationRes]=useState<any | null>(null)
  const [otpSent,setOtpSent] = useState(false)

  const auth = getAuth()
  const router = useRouter()
 
  useEffect(()=>{
    let recaptchaVerifier = window.recaptchaVerifier
    window.recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha-container",{
      'size': 'normal',
      'callback': (response:any) => {

      },
      'expired-callback': () => {

      }
    })
  }, [auth])


  const handlePhoneNumberChange = (e:any)=>{
    setPhoneNumber(e.target.value)
  }
  const handleOtpChange = (e:any)=>{
    setOtp(e.target.value)
  }

  const handleSentOtp = async()=>{
    try{
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g,'')}`
      const confirmation = await signInWithPhoneNumber(auth,formattedPhoneNumber,window.recaptchaVerifier)
      setConfirmationRes(confirmation)
      setOtpSent(true)
      setPhoneNumber('')
      alert("OTP has been sent successfully")
    }catch (error){
      console.error(error)
    }
  }

  const handleOtpSubmit = async()=>{
    try{
      await confirmationRes.confirm(otp)
      setOtp('')
      router.push("/dashboard")
    }catch(error){
      console.error(error)
    }
  }
  return(

    <div>
         <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div className="flex flex-col items-center space-y-2">
        {
            !otpSent ? (
                <>
                <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Enter your phone number to get started</p>
        {!otpSent ? (
        <div id="recaptcha-container"></div>
      ):null}
                 <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
        <input value={otpSent ? otp: phoneNumber} onChange={otpSent ? handleOtpChange : handlePhoneNumberChange} className="max-w-xs" placeholder="Enter a phone number" type="text"/>
        <button onClick={otpSent ? handleOtpSubmit : handleSentOtp} className="rounded-full h-10 w-20 border border-black">
            Send
          </button>
        </div>
      </div>
                </>
            ) : (
                <>
                <h1 className="text-3xl font-bold">Hola!</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Enter your OTP</p>
                 <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <button onClick={otpSent ? handleOtpSubmit : handleSentOtp} className="rounded-full h-10 w-20 border border-black">
            Verify
          </button>
          </div>
          </div>
                </>
            )
        }
       
      </div>
    
    </div>
    </div>
  )
}



