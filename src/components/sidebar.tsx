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
} from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'



const Sidebar = ({collapsed}: {collapsed?: boolean}) => {

  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    {
      name: 'Dashboard',
      icon: RectangleGroupIcon,
      href: '/',
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
    <div className='max-md:hidden flex flex-col w-full h-screen min-h-screen p-4 gap-4
      duration-300 transition ease-in-out'>
      <div className="flex">
        <UserItem collapsed={collapsed} />
      </div>
      <div className={cn("flex flex-col grow gap-1 px-0.5 text-secondary-foreground", collapsed && 'gap-2')}>
        {menuItems.map((item, index) => (
          <>
          {collapsed ? (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'p-2 px-3 flex items-center justify-center hover:bg-secondary rounded-lg cursor-pointer',
                pathname === item.href && ('bg-secondary text-primary hover:bg-secondary/75 border')
              )}
            >
              <item.icon className="h-5 w-5" />
            </Link>
            ) : (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'p-2 px-3 flex items-center justify-start hover:bg-secondary rounded-lg cursor-pointer',
                pathname === item.href && ('bg-secondary text-primary hover:bg-secondary/75 border')
              )}
            >
              <div className="flex">
                <item.icon className="h-5 w-5" />
                <p className={cn(`block ml-2 text-sm`)}>{item.name}</p>
              </div>
            </Link>
          )}
          </>
        ))}
      </div>
      <div className={cn("flex", collapsed && 'hidden')}>Settings/Notifications</div>
    </div>
  )
}

export default Sidebar