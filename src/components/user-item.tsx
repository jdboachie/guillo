import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { cn } from "@/lib/utils";
import { fontSerif } from '@/lib/fonts';


const RandomAvatar = () => {
  const avatar = createAvatar(lorelei, {
    backgroundColor: ["ffffff"],
    backgroundType: ["gradientLinear","solid"],
    beardProbability: 10,
    frecklesProbability: 30,
    glassesProbability: 30,
    hairAccessoriesProbability: 20,
    seed: 'pfp',
    // the seed will be the user's name
  });

  return (
    <svg dangerouslySetInnerHTML={{ __html: avatar.toString()}} className="border bg-white p-0.5 min-w-12 min-h-12 w-12 h-12 rounded-full hover:border-primary" />
  )
}


const UserItem = ({collapsed}: {collapsed?:boolean}) => {

  return (
    <div className={
      cn(
        "border bg-card w-full flex p-2 rounded-lg hover:border-primary cursor-pointer items-center",
        collapsed && "px-0 bg-transparent border-transparent hover:border-transparent w-fit"
    )}>
      <RandomAvatar />
      <div className={cn("flex flex-col text-sm p-1 px-2 overflow-clip", collapsed && 'hidden')}>
        <p className={`${fontSerif.className} font-bold truncate`}>Jude Boachie</p>
        <p className="text-neutral-500 truncate text-xs">jdboachie@gmail.com</p>
      </div>
    </div>
  )
}

export default UserItem