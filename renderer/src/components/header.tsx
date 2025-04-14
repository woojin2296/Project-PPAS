import { ChevronLeft, Menu } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

export function Header(
  { 
    hasBackButton,
    hasMenuButton,
    backPath,
    title
  } : { hasBackButton: boolean, hasMenuButton: boolean, backPath?: string, title: string }) {
  return (
    <Card className="flex flex-col sticky top-0 z-10 border-none rounded-none shadow-none">
      <CardHeader className="flex items-center relative justify-between">
        {
          hasBackButton ?
          <a href={backPath}><ChevronLeft /></a> :
          <Image src="/main-logo.svg" alt="Logo" width={110} height={110} /> 
        }
        {title}
        {
          hasMenuButton ? 
          <Menu className="w-7 h-7" /> : 
          <div className="w-7 h-7" />
        }
      </CardHeader>
    </Card>
  );
}