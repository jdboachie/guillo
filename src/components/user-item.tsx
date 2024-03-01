import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { cn } from "@/lib/utils";
import { fontSerif } from '@/lib/fonts';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const RandomAvatar = () => {
  const avatar = createAvatar(lorelei, {
    backgroundColor: ["ffffff"],
    backgroundType: ["gradientLinear","solid"],
    beardProbability: 10,
    frecklesProbability: 30,
    glassesProbability: 30,
    hairAccessoriesProbability: 20,
    seed: 'fffff',
    // the seed will be the user's name
  });

  return (
    <svg dangerouslySetInnerHTML={{ __html: avatar.toString()}} className="border min-w-12 min-h-12 w-12 h-12 rounded-full hover:border-primary" />
  )
}


export function UserItem({collapsed}: {collapsed?:boolean}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn('h-fit w-full', collapsed && "px-0 bg-transparent border-transparent w-fit shadow-none hover:bg-transparent")}>
        <div className={
            cn(
              "bg-transparent w-full flex rounded-lg cursor-pointer items-center",
              collapsed && "px-0 bg-transparent border-transparent w-fit"
          )}>
            <RandomAvatar />
            <div className={cn("flex flex-col text-sm p-1 px-2 overflow-clip text-start", collapsed && 'hidden')}>
              <p className={`${fontSerif.className} font-bold truncate`}>Jude Boachie</p>
              <p className="text-neutral-500 truncate text-xs">jdboachie@gmail.com</p>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘J</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserItem