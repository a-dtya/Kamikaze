'use client';
import Link from 'next/link';
import { BellIcon, Cookie, CreditCard, HeartPulse, Inbox, MessageSquare, Settings, Users, Smile, Pizza, Dumbbell, Ribbon } from "lucide-react";
import UserItem from "./ui/useritem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/caloriedashboard",
          icon: <Smile/>,
          text: "Profile"
        },
        {
          link: "/medical",
          icon: <HeartPulse/>,
          text: "Medical Report"
        },
        {
          link: "/calorie",
          icon: <Pizza />,
          text: "Calorie Tracking"
        },
        {
          link: "/fitness",
          icon: <Dumbbell />,
          text: "Fitness"
        }
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/mental",
          icon: <Ribbon />,
          text: "Mental Health"
        },
        {
          link: "/community",
          icon: <Users />,
          text: "Community"
        },
        {
          link: "/about",
          icon: <Settings/>,
          text: "About"
        }
      ]
    }
  ]

  return(
    
<div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4 bg-red-200 my-2 mx-1 rounded-md">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }} className='bg-gray-200 rounded-md'>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <Link href={option.link} key={optionKey}>
                    <div className="flex gap-2 cursor-pointer">
                      {option.icon}
                      {option.text}
                    </div>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  );
}
