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
    <div
      data-collapsed={collapsed}
      className='"group flex flex-col gap-4 p-4 data-[collapsed=true]:p-4'
    >
      <div className="flex">
        <UserItem collapsed={collapsed} />
      </div>
      <div className={cn("flex flex-col grow gap-1 text-secondary-foreground", collapsed && 'gap-2 px-1')}>
        {menuItems.map((item, index) => (
          <>
          {collapsed ? (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'p-2 flex items-center justify-center hover:bg-secondary rounded-lg cursor-pointer',
                pathname === item.href && ('bg-secondary text-primary hover:bg-secondary/75')
              )}
            >
              <item.icon className="h-5 w-5" />
            </Link>
            ) : (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'p-2 flex items-center justify-start hover:bg-secondary rounded-lg cursor-pointer',
                pathname === item.href && ('bg-secondary text-primary hover:bg-secondary/75')
              )}
            >
              <div className="flex">
                <item.icon className="h-5 w-5 mx-1" />
                <p className={cn(`block ml-2 text-sm`)}>{item.name}</p>
              </div>
            </Link>
          )}
          </>
        ))}
      </div>
      {/* <div className={cn("flex", collapsed && 'hidden')}>Settings/Notifications</div> */}
    </div>
  )
}

export default Sidebar