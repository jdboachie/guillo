import BumpChart from "@/components/cards/BumpChart";
import CalendarChart from "@/components/cards/CalendarChart"
import { ScrollArea } from "@/components/ui/scroll-area";
import RecentInvoicesTable from "./cards/RecentInvoicesTable";
import SummaryCard from "./cards/SummaryCard"; // temporary
import LineChart from "./cards/LineChart";


const Dashboard = () => {

  return (
    <ScrollArea className="h-[calc(100vh-100px)] mb-8">
      <section className="flex flex-col w-full p-4">
        {/* <p className={`${fontSerif.className} text-xl py-4`}>Dashboard</p> */}
        <main className="flex flex-col gap-4 pb-4">
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
              <LineChart />
            </div>
          </div>
          <RecentInvoicesTable />
        </main>
      </section>
    </ScrollArea>
  )
}

export default Dashboard