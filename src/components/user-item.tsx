import Image from "next/image"
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';


const RandomAvatar = () => {
  const avatar = createAvatar(lorelei, {
    backgroundColor: ["b6e3f4","c0aede","d1d4f9"],
    backgroundType: ["gradientLinear","solid"],
    beardProbability: 20,
    frecklesProbability: 20,
    glassesProbability: 20,
    hairAccessoriesProbability: 20,
    seed: 'jdboachie'
    // the seed will be the user's name
  });

  return (
    <svg dangerouslySetInnerHTML={{ __html: avatar.toString()}} className="min-w-12 min-h-12 w-12 h-12 rounded-full" />
  )
}


const UserItem = () => {

  return (
    <div className="border bg-card w-full flex p-2 rounded-lg hover:border-primary cursor-pointer">
      <RandomAvatar />
      <div className="flex flex-col text-sm p-1 px-2 overflow-clip">
        <p className="font-semibold">Jude Boachie</p>
        <p className="text-neutral-500 truncate">jdboachie@gmail.com</p>
      </div>
    </div>
  )
}

export default UserItem