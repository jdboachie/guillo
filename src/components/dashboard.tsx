import BumpChart from "@/components/cards/BumpChart";
import CalendarChart from "@/components/cards/CalendarChart"
import { ScrollArea } from "@/components/ui/scroll-area";
import RecentInvoicesTable from "./cards/RecentInvoicesTable";
import { fontSerif } from "@/lib/fonts";
import SummaryCard from "./cards/SummaryCard"; // temporary
import LineChart from "./cards/LineChart";


const Dashboard = () => {
  return (
    <ScrollArea className="h-screen">
      <section className="flex flex-col w-full p-4">
        <p className={`${fontSerif.className} text-xl py-4`}>Dashboard</p>
        <main className="flex flex-col gap-4 pb-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard title="Total Invoices" value="893" />
            <SummaryCard title="Total Invoices" value="893" />
            <SummaryCard title="Total Invoices" value="893" />
            <SummaryCard title="Total Invoices" value="893" />
          </div>
          <RecentInvoicesTable />
          <div className="grid max-2xl:grid-cols-1 grid-cols-2 gap-4">
            <div className="grid gap-4">
              <LineChart />
              <LineChart />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <BumpChart />
              <CalendarChart/>
            </div>
          </div>
        </main>
      </section>
    </ScrollArea>
  )
}

export default Dashboard