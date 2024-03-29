'use client'

import Sidebar from "@/components/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Dashboard from "@/components/dashboard";
import { useState } from 'react'
import { cn } from '@/lib/utils'
import Header from "@/components/header";
import MobileHeader from "@/components/mobile/header";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
    <section className="w-screen h-screen max-sm:hidden">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full items-stretch"
        // onLayout={(sizes: number[]) => {
        //   document.cookie = `react-resizable-panels:layout=${JSON.stringify(
        //     sizes
        //   )}`
        // }}
      >
        <ResizablePanel
          collapsedSize={6}
          collapsible={true}
          minSize={15}
          defaultSize={20}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed
            )}`;
          }}
          onExpand={() => setIsCollapsed(false)}
          className={cn("max-sm:hidden", isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
        >
          <Sidebar collapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle className="max-sm:hidden" />
        <ResizablePanel
          defaultSize={80}
        >
          <Header />
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
      </section>


      {/* Mobile Layout */}
      <section className="w-screen h-screen sm:hidden">
        <main className="h-[calc(100vh-107px)]">
          {children}
        </main>
        <MobileHeader />
      </section>
    </>
  )
}