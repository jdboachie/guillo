import { cn } from '@/lib/utils'
import BumpChart from "@/components/cards/BumpChart";
import CalendarChart from "@/components/cards/CalendarChart"
import { ScrollArea } from "@/components/ui/scroll-area";
import RecentInvoicesTable from "@/components/cards/RecentInvoicesTable";
import SummaryCard from "@/components/cards/SummaryCard"; // temporary
import LineChart from "@/components/cards/LineChart";
import BoxChart from '../cards/BoxChart';


const MobileDashboard = ({className}: {className: string}) => {
  return (
    <div className={cn(className)}>
      <ScrollArea className={cn("flex flex-col h-[calc(100vh-100px)] w-full p-4")}>
        <p className="text-xl font-semibold py-4 px-1">Dashboard</p>
        <main className="flex flex-col mt-4 gap-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard title="Collected" value="$10,570.32" />
            <SummaryCard title="Pending" value="$2820.64" />
            <SummaryCard title="Total Invoices" value="34" />
            <SummaryCard title="Total Customers" value="23" />
          </div>
          <div className="grid max-xl:grid-cols-1 grid-cols-2 gap-4">
            <div className="grid gap-4">
              <LineChart />
              <CalendarChart/>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <BumpChart />
              <BoxChart />
            </div>
          </div>
          {/* <RecentInvoicesTable /> */}
        </main>
      </ScrollArea>
    </div>
  )
}

export default MobileDashboard