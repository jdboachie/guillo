'use client';

import { cn } from '@/lib/utils'
import { Command } from "@/components/command-dialog";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import NotificationView from '@/components/notification-view';
import UserItem from '@/components/user-item';


export default function MobileHeader() {
  return (
    <div className={cn("flex m-4 rounded-lg h-[70px] justify-end max-sm:justify-between gap-4 p-4 border")}>
      <NotificationView />
      <Command />
      <Separator orientation="vertical" className="mx-2" />
      <ModeToggle />
    </div>
  );
}