'use client';

import { cn } from '@/lib/utils'
import { Command } from "./command-dialog";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import NotificationView from './notification-view';
import UserItem from './user-item';


export default function Header() {
  return (
    <div className={cn("flex m-2 rounded-lg h-[70px] justify-end gap-4 p-4 border")}>
      <Command />
      <NotificationView />
      <Separator orientation="vertical" className="mx-2" />
      <ModeToggle />
    </div>
  );
}