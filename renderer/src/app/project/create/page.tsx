import { Header } from "@/components/header";
import { HomeFooter } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center md:p-10 ">
      <div className="flex w-full flex-col gap-3">
        <Header hasBackButton={true} hasMenuButton={false} backPath="/" title="Create project" />
        <div className="p-6 h-svh">
          <form className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Project Name</Label>
              <Input
                id="project-name"
                type="text"
                placeholder="New Project"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Goal Time (min)</Label>
              <Input
                id="project-name"
                type="number"
                placeholder="New Project"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Script (optional)</Label>
              <Textarea 
                id="project-script"
                placeholder="Enter your script."
                className="h-48 resize-none"
               />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Presentation file (optional)</Label>
              <Input id="presentaion" type="file"/>
            </div>
            <Link href="/project/record">
              <Button type="button" className="w-full">
                Start Recording
              </Button>
            </Link>
          </form>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
}
