"use client"

import * as React from "react"
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/react/16/solid"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <SunIcon className="min-h-[1.2rem] min-w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end" className="cursor-pointer">
    //       <div className="border-b mb-1">
    //         <p className="text-sm font-[500] p-2">Theme</p>
    //       </div>
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div className="flex gap-1">
      <Button
        variant={ theme === "light" ? "secondary": "ghost"}
        size="icon"
        onClick={() => setTheme("light")}
        >
        <SunIcon className="h-4 w-4" />
      </Button>
      <Button
        variant={ theme ==="system" ? "secondary": "ghost"}
        size="icon"
        onClick={() => setTheme("system")}
        >
        <ComputerDesktopIcon className="h-4 w-4" />
      </Button>
      <Button
        variant={ theme ==="dark" ? "secondary": "ghost"}
        size="icon"
        onClick={() => setTheme("dark")}
        >
        <MoonIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
