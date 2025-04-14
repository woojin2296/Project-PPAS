import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CirclePlus, House, List, Play, Plus } from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function HomeMenu({
  serviceName,
  serviceDescription,
}: {
  serviceName: string;
  serviceDescription: string;
}) {
  return (
    <div className="flex flex-col">
      <Card className="my-6 border-none shadow-none">
        <CardHeader className="flex flex-wrap gap-3">
          <CardDescription className="basis-full text-sm">Welcome!</CardDescription>
          <div className="basis-2/3 flex flex-col gap-6">
            <CardTitle className="text-3xl">{serviceName}</CardTitle>
            <CardDescription className="text-sm">
              {serviceDescription}
            </CardDescription>
            <div>
              <Link href={"/project/create"}>
                <Button>
                  <Play /> Start a new project
                </Button>
              </Link>
            </div>
          </div>
          <Image className="grow" src="/main.png" alt="main" width={200} height={200} /> 
        </CardHeader>
      </Card>

      <CardDescription className="text-black text-md px-6">
        Recent Projects
      </CardDescription>
      <Card className="flex flex-col gap-0 mx-6 mt-3">
        <CardHeader className="flex flex-col gap-2 pb-4">
          <CardTitle>SLAM paper presentation</CardTitle>
          <CardDescription className="text-sm">
            This is a project to present the SLAM paper in the conference. Witch
            is at the end of this month.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex gap-3 justify-between">
          <div className="w-1/2">
            <div className="h-1/2">
              <CardDescription className="py-4">
                Total practice count
              </CardDescription>
              <CardTitle className="text-4xl">23</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Total score</CardDescription>
              <CardTitle className="text-4xl">90 / 100</CardTitle>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-1/2">
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Pose score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col gap-0 mx-6 mt-3">
        <CardHeader className="flex flex-col gap-2 pb-4">
          <CardTitle>Graduation Project Presentation</CardTitle>
          <CardDescription className="text-sm">
            This is a project to present the graduation project in the
            conference. Witch is at the end of this month.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex gap-3 justify-between">
          <div className="w-1/2">
            <div className="h-1/2">
              <CardDescription className="py-4">
                Total practice count
              </CardDescription>
              <CardTitle className="text-4xl">23</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Total score</CardDescription>
              <CardTitle className="text-4xl">90 / 100</CardTitle>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-1/2">
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Pose score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col gap-0 mx-6 mt-3">
        <CardHeader className="flex flex-col gap-2 pb-4">
          <CardTitle>Graduation Project Presentation</CardTitle>
          <CardDescription className="text-sm">
            This is a project to present the graduation project in the
            conference. Witch is at the end of this month.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex gap-3 justify-between">
          <div className="w-1/2">
            <div className="h-1/2">
              <CardDescription className="py-4">
                Total practice count
              </CardDescription>
              <CardTitle className="text-4xl">23</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Total score</CardDescription>
              <CardTitle className="text-4xl">90 / 100</CardTitle>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-1/2">
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Pose score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
            <div className="h-1/2">
              <CardDescription className="py-4">Speed score</CardDescription>
              <CardTitle className="text-xl">88 / 100</CardTitle>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function HomeFooter() {
  return (
    <Card className="sticky bottom-0 z-10 shadow-none rounded-none border-x-0 border-t">
      <CardHeader className="flex">
        <House className="basis-1/3 h-7 w-7" />
        <CirclePlus className="basis-1/3 h-7 w-7" />
        <List className="basis-1/3 h-7 w-7" />
      </CardHeader>
    </Card>
  );
}
