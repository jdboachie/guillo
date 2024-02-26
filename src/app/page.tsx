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


export default function Home() {

  const [collapsed, setCollapsed] = useState(false)

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        collapsible
        defaultSize={20}
        collapsedSize={6}
        minSize={12}
        maxSize={20}
        onCollapse={() => setCollapsed(true)}
        onExpand={() => setCollapsed(false)}
      >
        <Sidebar collapsed={collapsed} />
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
