import BumpCard from "@/components/cards/General";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="p-4 w-full h-[calc(100vh-70px)]">
      <main className="grid max-2xl:grid-cols-1 grid-cols-2 gap-4">
        <BumpCard />
      </main>
    </ScrollArea>
  );
}
