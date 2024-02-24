'use client'

import { getData } from '@/lib/data'
import { ResponsiveBump } from '@nivo/bump'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const BumpGraph = () => {

  const data = getData()

  return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: 'greens' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
          truncateTickAt: 0
      }}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
    />
  )
}

export default function BumpCard ({className}: {className?: string}) {
  return (
    <Card className={`w-full ${className}`}>
      <CardHeader>
        <CardTitle>This year</CardTitle>
        <CardDescription>Yearly sale results</CardDescription>
      </CardHeader>
      <CardContent className='w-full h-[350px]'>
        <BumpGraph />
      </CardContent>
    </Card>
  )
}