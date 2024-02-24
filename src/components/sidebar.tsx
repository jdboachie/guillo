'use client'

import { cn } from '@/lib/utils'
import UserItem from './user-item'
import {
  BellIcon,
  CalendarDaysIcon,
  Cog8ToothIcon,
  CreditCardIcon,
  DocumentIcon,
  RectangleGroupIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Sidebar = () => {

  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Dashboard',
      icon: RectangleGroupIcon,
      href: '/',
    },
    {
      name: 'Profile',
      icon: UserIcon,
      href: '/profile',
    },
    {
      name: 'Billing',
      icon: CreditCardIcon,
      href: '/billing',
    },
    {
      name: 'Notifications',
      icon: BellIcon,
      href: '/notifications',
    },
    {
      name: 'Calendar',
      icon: CalendarDaysIcon,
      href: '/calendar',
    },
    {
      name: 'Documents',
      icon: DocumentIcon,
      href: '/documents',
    },
    {
      name: 'Settings',
      icon: Cog8ToothIcon,
      href: '/settings',
    },
  ]

  return (
    <div className='max-md:hidden flex flex-col w-[300px] min-w-[300px] h-screen min-h-screen border-r p-4 gap-4'>
      <div className="flex">
        <UserItem />
      </div>
      <div className="flex flex-col grow gap-1">
        {menuItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={
              cn("flex p-2.5 px-4 rounded-lg text-sm w-full justify-start",
              pathname === item.href
                ? "bg-primary dark:text-primary-background text-primary-foreground dark:bg-primary-background"
                : "hover:bg-muted-foreground/10"
            )}
          >
            <div className="flex">
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex">Settings/Notifications</div>
    </div>
  )
}

export default Sidebar