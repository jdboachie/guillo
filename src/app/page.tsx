'use client'

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Dashboard from "@/components/dashboard";
import { useState } from 'react'
import { cn } from '@/lib/utils'


export default function Home() {

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full items-stretch"
    >
      <ResizablePanel
        collapsible
        defaultSize={20}
        collapsedSize={6}
        minSize={15}
        maxSize={20}
        onCollapse={() => {
          setIsCollapsed(true)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            isCollapsed
          )}`;
        }}
        onExpand={() => setIsCollapsed(false)}
        className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
      >
        <Sidebar collapsed={isCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <main className="flex flex-col items-start h-screen w-full">
          <Header />
          <div className="w-full h-[calc(100vh - 70px)]">
            <Dashboard />
          </div>
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
