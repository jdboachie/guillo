'use client'

import { cn } from '@/lib/utils'
import UserItem from './user-item'
import {
  CalendarDaysIcon,
  Cog8ToothIcon,
  CreditCardIcon,
  DocumentIcon,
  HomeIcon,
  HomeModernIcon,
} from '@heroicons/react/16/solid'
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'


const Sidebar = ({collapsed}: {collapsed?: boolean}) => {

  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Home',
      icon: HomeIcon,
      href: '/dashboard',
    },
    {
      name: 'Billing',
      icon: CreditCardIcon,
      href: '/billing',
    },
    // {
    //   name: 'Notifications',
    //   icon: BellIcon,
    //   href: '/notifications',
    // },
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
      className="flex flex-col h-full gap-4 p-4 max-xl:data-[collapsed=true]:px-2.5"
    >
      <Link
        href={'/'}
        className={cn("text-4xl flex gap-4 p-4", collapsed && 'px-2')}
      >
        <HomeModernIcon className='w-10 h-10' />
        {
          !collapsed && ('ALPHA')
        }
      </Link>
      <div className={cn("flex flex-col justify-center grow gap-1 text-secondary-foreground", collapsed && 'gap-2 px-1')}>
        {menuItems.map((item, index) => (
          <>
          {collapsed ? (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex items-center justify-center hover:bg-secondary rounded-lg cursor-pointer',
                pathname === item.href && ('bg-secondary text-primary hover:bg-secondary/75')
              )}
            >
              <Button
                className={cn(
                  'w-full',
                  pathname !== item.href && ('border-none shadow-none')
                )}
                variant={pathname === item.href ? 'default': 'outline'}
                size="icon">
                <item.icon className="h-4 w-4" />
              </Button>
            </Link>
            ) : (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex items-center justify-start hover:bg-secondary rounded-lg cursor-pointer',
                pathname === item.href && ('bg-secondary text-primary hover:bg-secondary/75')
              )}
            >
              <Button
                className={cn(
                  'w-full items-center justify-start flex',
                  pathname !== item.href && ('border-none shadow-none')
                )}
               variant={pathname === item.href ? 'default': 'outline'}
              >
                <item.icon className="mr-2 h-4 w-4" /> {item.name}
              </Button>
            </Link>
          )}
          </>
        ))}
      </div>
      {/* <div className={cn("flex", collapsed && 'hidden')}>Settings/Notifications</div> */}
      <div className="flex">
        <UserItem collapsed={collapsed} />
      </div>
    </div>
  )
}

export default Sidebar