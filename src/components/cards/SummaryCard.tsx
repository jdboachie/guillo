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
    <Card className="w-full h-fit flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{title} summary</CardDescription>
      </CardHeader>
      <CardContent className="grow justify-center items-center flex">
        <p className="text-3xl text-center">{value}</p>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
