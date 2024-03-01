import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function SummaryCard({title, value}: {title: string, value: string}) {
  return (
    <Card className="w-full h-[150px] flex flex-col">
      <CardHeader className="py-4">
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>{title} summary</CardDescription> */}
      </CardHeader>
      <CardContent className="flex grow justify-center items-end text-xl m-2 rounded-lg">
        {value}
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
