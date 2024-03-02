'use client';

import { cn } from '@/lib/utils'
import { Command } from "./command-dialog";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import NotificationView from './notification-view';
import UserItem from './user-item';


export default function Header() {
  return (
    <div className={cn("flex m-4 rounded-lg h-[70px] justify-end max-sm:justify-between gap-4 p-4 border")}>
      <div className="hidden max-sm:block">
        <UserItem />
      </div>
      <div className="flex items-center justify-end gap-2">
        <Command />
        <NotificationView />
        <Separator orientation="vertical" className="mx-2" />
        <ModeToggle />
      </div>
    </div>
  );
}