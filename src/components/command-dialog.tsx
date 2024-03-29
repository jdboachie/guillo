"use client"

import * as React from "react"
import {
  CalculatorIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  Cog8ToothIcon,
  FaceSmileIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"


export function Command() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <div className="text-sm flex max-sm:hidden">
        <div className="w-60 border p-2 rounded-lg flex justify-between" onClick={()=>{setOpen(!open)}} >
          <div className="flex gap-2">
            <MagnifyingGlassIcon className="h-4 w-4" />
            <p className="text-neutral-500 max-sm:hidden">Search <span className="max-lg:hidden"> commands</span></p>
          </div>
          <kbd className="pointer-events-none max-sm:hidden inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </div>
      </div>
      <Button
        className="relative p-4 h-full w-full max-w-4 max-h-4 sm:hidden"
        variant="outline"
        size="icon"
        onClick={()=>{setOpen(!open)}}
      >
        <MagnifyingGlassIcon className="h-4 w-4 min-h-4 min-w-4" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <ScrollArea className="h-full">
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarDaysIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceSmileIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <CalculatorIcon className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCardIcon className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Cog8ToothIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
        </ScrollArea>
      </CommandDialog>
    </>
  )
}
