import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getCalendarData } from '@/lib/data'
import { ResponsiveCalendar } from '@nivo/calendar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CalendarChart = () => {
  const data = getCalendarData()

  return (
    <ResponsiveCalendar
        data={data}
        from="2022-01-01"
        to="2023-03-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
  )
}

export default function CalendarCard () {
  return (
    <Card className={`w-full`}>
      <CardHeader>
        <CardTitle>This year</CardTitle>
        <CardDescription>Sales made per day</CardDescription>
      </CardHeader>
      <CardContent className='w-full h-[350px]'>
        <CalendarChart />
      </CardContent>
    </Card>
  )
}