import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { BellIcon } from "@heroicons/react/16/solid"
import Link from 'next/link'


export default function NotificationView() {
  const [open, setOpen] = React.useState(false)

  const [notifications, setNotifications] = React.useState<any>([
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




  return (
    <>
    <div className="w-full h-full max-lg:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="relative" variant="outline" size="icon">
            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500 animate-ping' : 'bg-neutral-200'}`}></div>
            <BellIcon className="h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              3 most recent notifications (edit this in settings)
            </DrawerDescription>
          </DrawerHeader>
          <div className="w-full p-2">
            {notifications.map((item: any, key: number) => (
              <div key={key} className="py-2 px-3 cursor-pointer hover:bg-secondary transition flex items-start gap-2 rounded-lg">
                <div className={`h-3 w-3 min-h-3 min-w-3 block rounded-full my-4 ${!item.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                <div>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                  <p className="font-[500] text-sm grow">{item.title}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
            <Link href={'/notifications'} className="">
              <div className="py-2 px-3 cursor-pointer hover:bg-secondary rounded-lg transition text-primary hover:underline hover:underline-offset-4">
                  See all notifications
              </div>
            </Link>
          </div>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    <div className="w-full h-full lg:hidden">
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="relative" variant="outline" size="icon">
            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500 animate-ping' : 'bg-neutral-200'}`}></div>
            <BellIcon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              3 most recent notifications (edit this in settings)
            </DialogDescription>
          </DialogHeader>
          <div className="w-full">
            {notifications.map((item: any, key: number) => (
              <div key={key} className="py-2 px-3 rounded-lg cursor-pointer hover:bg-secondary transition flex items-start gap-2">
                <div className={`h-3 w-3 min-h-3 min-w-3 block rounded-full my-4 ${!item.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                <div>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                  <p className="font-[500] text-sm grow">{item.title}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
            <Link href={'/notifications'}>
              <div className="py-2 px-3 cursor-pointer hover:bg-secondary transition text-primary hover:underline hover:underline-offset-4 rounded-lg">
                  See all notifications
              </div>
            </Link>
          </div>
        </DialogContent>

      </Dialog>
    </div>
    </>
  )
}
