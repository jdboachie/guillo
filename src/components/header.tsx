'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { BellIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Command } from "./command-dialog";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from 'next/link'
import { fontSerif } from "@/lib/fonts";


export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      title: "Billing information out of date",
      desc: "Your billing information is out of date. Please update your payment method.",
      date: "5s ago",
      read: false
    },
    {
      title: "Andy updated the project",
      desc: "Andy added the new feature to the project. You can check the updates now.",
      date: "Yesterday",
      read: false
    },
    {
      title: "Email updated successfully",
      desc: "",
      date: "12-21-2022",
      read: true
    }
  ])

  return <div className="flex w-full h-[100px] justify-between gap-4 p-4 border-b">
    <div className={`px-2 text-3xl ${fontSerif.className}`}>
      Talent
    </div>
    <div className="flex items-center justify-end gap-2">
      <Command />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="relative" variant="outline" size="icon">
            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500 animate-ping' : 'bg-neutral-200'}`}></div>
            <BellIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[400px]">
          <div className="border-b mb-1">
            <p className="text-sm font-[500] p-2">Notifications</p>
          </div>
          {notifications.map((item: any, key: number) => (
            <DropdownMenuItem key={key} className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
              <div className={`h-3 w-3 min-h-3 min-w-3 block rounded-full my-4 ${!item.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
              <div>
                <p className="text-xs text-neutral-500">{item.date}</p>
                <p className="font-[500] grow">{item.title}</p>
                <p className="font-[500] text-neutral-500">{item.desc}</p>
              </div>
            </DropdownMenuItem>
          ))}
          <Link href={'/notifications'}>
            <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition text-primary hover:underline hover:underline-offset-4">
                See all notifications
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
    </div>
  </div>;
}