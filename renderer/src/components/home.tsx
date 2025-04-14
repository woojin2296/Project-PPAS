import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CirclePlus, House, List, Menu, Plus } from "lucide-react";
import { Separator } from "./ui/separator";

export function HomeHeader() {
  return (
    <Card className="flex flex-col gap-3 sticky top-0 z-10 border-none shadow-none">
      <CardHeader className="flex items-center relative justify-between">
        <Image src="/main-logo.svg" alt="Logo" width={100} height={100} />
        <Menu className="w-7 h-7" />
      </CardHeader>
    </Card>
  );
}

export function HomeMenu({
  serviceName,
  serviceDescription,
}: {
  serviceName: string;
  serviceDescription: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <Card className="bg-alpha-10 border-none shadow-none my-6">
        <CardHeader className="flex flex-col gap-2">
          <CardDescription className="text-sm">Welcome!</CardDescription>
          <CardTitle className="text-3xl">{serviceName}</CardTitle>
          <CardDescription className="text-sm">
            {serviceDescription}
          </CardDescription>
        </CardHeader>
      </Card>

      <CardDescription className="text-sm px-6">
        Start a new project
      </CardDescription>
      <a href="/project/create">
        <Card className="mx-6 border-dashed shadow-none border-2 border-alpha-50 items-center hover:border-alpha-80">
          <Plus className="h-8 w-8 mx-6 text-gray-400" />
        </Card>
      </a>

      <CardDescription className="text-sm px-6 pt-6">
        Recent Projects
      </CardDescription>
      <Card className="flex flex-col gap-0 mx-6">
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
      <Card className="flex flex-col gap-0 mx-6">
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
    <Card className="sticky bottom-0 z-10 shadow-none border-x-0 border-t-2 border-alpha-50 border-rounded-none">
      <CardHeader className="text-center flex gap-2 items-center justify-between">
        <House className="h-7 w-7 mx-6" />
        <CirclePlus className="h-7 w-7 mx-6" />
        <List className="h-7 w-7 mx-6" />
      </CardHeader>
    </Card>
  );
}
