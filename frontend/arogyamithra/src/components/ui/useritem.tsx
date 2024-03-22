"use client"
export default function Useritem() {
  return (
    <div className="flex items-center justify-center gap-2 border-rounded -[8px] p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex-items-center justify-center">
            <p className="pl-2 pt-2">SN</p>

        </div>
        <div>
            <p className="text-[16px] font-bold">Sreehari S Nair</p>
            <p className="text-[12px] text-neutral-500">sreeharisnair@gmail.com</p>
        </div>
    </div>
  )
}
