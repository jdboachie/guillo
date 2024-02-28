import BumpChart from "@/components/cards/BumpChart";
import CalendarChart from "@/components/cards/CalendarChart"
import { ScrollArea } from "@/components/ui/scroll-area";
import RecentInvoicesTable from "./cards/RecentInvoicesTable";
import { fontSerif } from "@/lib/fonts";
import SummaryCard from "./cards/SummaryCard"; // temporary


const Dashboard = () => {
  return (
    <ScrollArea className="px-4  w-full h-[calc(100vh-70px)]">
      <p className={`${fontSerif.className} text-lg py-4`}>Dashboard</p>
      <main className="grid gap-4 pb-4">
        <div className="grid grid-cols-4 gap-4">
          <SummaryCard title="Total Invoices" value="98" />
          <SummaryCard title="Total Revenue" value="$6539.50" />
          <SummaryCard title="Total Clients" value="12" />
          <SummaryCard title="Total debt" value="$23.19" />
        </div>
        <div className="grid max-2xl:grid-cols-1 grid-cols-2 gap-4">
          <RecentInvoicesTable />
          <div className="grid grid-rows-2 gap-4">
            <CalendarChart/>
            <BumpChart />
          </div>
        </div>
      </main>
    </ScrollArea>
  )
}

export default Dashboard