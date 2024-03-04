


export default function SummaryCard({title, value}: {title: string, value: string}) {
  return (
    <div className="flex flex-col items-center justify-center border rounded-lg shadow p-4 gap-4 max-sm:p-2 text-center">
      <p className="py-2 text-primary/70 text-sm">{title}</p>
      <div className="flex grow justify-center items-center text-xl p-2">
        {value}
      </div>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </div>
  )
}
