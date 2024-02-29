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


export default function Home() {

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full items-stretch"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`
      }}
    >
      <ResizablePanel
        collapsedSize={6}
        collapsible={true}
        minSize={15}
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
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={80}
      >
        <Header />
        <Dashboard />
      </ResizablePanel>
      {/* <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]} maxSize={defaultLayout[2]}>
        <div className="w-full h-full">
          <p>Right Panel</p>
        </div>
        </ResizablePanel> */}
    </ResizablePanelGroup>
  );
}
