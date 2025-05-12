import { CirclePlus, House, List } from "lucide-react";
import { Card, CardHeader } from "./ui/card";


export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white h-24 py-8 px-8 z-50 rounded-tl-2xl rounded-tr-2xl border">
      <div className="flex items-center justify-center">
        <House className="basis-1/3 h-7 w-7" />
        <CirclePlus className="basis-1/3 h-7 w-7" />
        <List className="basis-1/3 h-7 w-7" />
      </div>
    </footer>
  );
}