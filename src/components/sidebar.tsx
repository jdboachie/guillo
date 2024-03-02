'use client'

import { cn } from '@/lib/utils'
import UserItem from './user-item'
import {
  CalendarDaysIcon,
  Cog8ToothIcon,
  CreditCardIcon,
  DocumentIcon,
  HomeIcon,
  GlobeAltIcon,
} from '@heroicons/react/16/solid'
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Separator } from './ui/separator'


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
      href: '/dashboard/billing',
    },
    {
      name: 'Calendar',
      icon: CalendarDaysIcon,
      href: '/dashboard/calendar',
    },
    {
      name: 'Documents',
      icon: DocumentIcon,
      href: '/dashboard/documents',
    },
    {
      name: 'Settings',
      icon: Cog8ToothIcon,
      href: '/dashboard/settings',
    },
  ]

  return (
    <div
      data-collapsed={collapsed}
      className="flex flex-col h-full gap-4 max-xl:data-[collapsed=true]:px-2.5"
    >
      <div className="py-4 px-8">
        <Link
          href={'/'}
          className={cn("p-4 ", collapsed && 'px-2 -ml-1')}
          >
          <GlobeAltIcon className='w-10 h-10 rotate-45 border/dashboard' />
        </Link>
      </div>
      <div className={cn("flex flex-col justify-center grow gap-1 p-4 text-secondary-foreground", collapsed && 'gap-2 px-1')}>
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
                <item.icon className="min-h-4 min-w-4 h-4 w-4" />
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
                <item.icon className="mr-2 min-h-4 min-w-4 h-4 w-4" /> <p className="truncate">{item.name}</p>
              </Button>
            </Link>
          )}
          </>
        ))}
      </div>
      <Separator />
      <div className="flex p-4">
        <UserItem collapsed={collapsed} />
      </div>
    </div>
  )
}

export default Sidebar