"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Label,
  Pie,
  PieChart,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CirclePlus, Pin, Play, TrendingUp } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

export function ProfileStatusSection() {
  return (
    <Card className="flex flex-col gap-0 text-[#333C4B]">
      <CardHeader className="flex flex-col gap-2 pb-4">
        <CardTitle className="text-4xl">
          <span className="text-[#01477E]">OOO님</span>
          <span className="text-2xl">의 발표 등급은 </span>
          <span className="text-[#A8C66C]">상위 82%</span>
          <span className="text-2xl"> 입니다.</span>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex items-center">
        <div className="w-1/3">
          <ProjectCountChart total={25} completed={15} />
        </div>
        <div className="w-1/3">
          <PracticeCountChart data={[8, 5, 3, 1, 30]} />
        </div>
        <div className="w-2/3">
          <div className="">
            <CardDescription className="py-4">Average Score</CardDescription>
            <CardTitle className="text-4xl">90 / 100</CardTitle>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <CardDescription className="py-4">Speed Score</CardDescription>
              <CardTitle className="text-4xl">23</CardTitle>
            </div>
            <div className="w-1/3">
              <CardDescription className="py-4">Pose Score</CardDescription>
              <CardTitle className="text-4xl">25</CardTitle>
            </div>
            <div className="w-1/3">
              <CardDescription className="py-4">QnA Score</CardDescription>
              <CardTitle className="text-4xl">24</CardTitle>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function RecentProjectSection() {
  return (
    <>
      <div className="text-4xl pt-8 p-4 text-bold text-[#28303F]">최근 프로젝트</div>
      <div className="flex flex-col gap-4">
        <RecentProjectCard />
        <RecentProjectCard />
        <RecentProjectCard />
        <RecentProjectCard />
        <RecentProjectCard />
        <RecentProjectCard />
        <RecentProjectCard />
        <RecentProjectCard />
      </div>
    </>
  )
}

export function RecentProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>프로젝트 이름</CardTitle>
        <CardDescription>프로젝트 설명</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <CardDescription>Speed score</CardDescription>
            <CardTitle>88 / 100</CardTitle>
          </div>
          <div className="flex flex-col gap-2">
            <CardDescription>Pose score</CardDescription>
            <CardTitle>88 / 100</CardTitle>
          </div>
          <div className="flex flex-col gap-2">
            <CardDescription>QnA Acc</CardDescription>
            <CardTitle>88 / 100</CardTitle>
          </div>
          <div className="flex flex-col gap-2">
            <CardDescription>Total score</CardDescription>
            <CardTitle>88 / 100</CardTitle>
          </div>
          etc...
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectPinSection() {
  return (
    <>
      <div className="text-4xl p-4 pt-8 text-bold text-[#28303F]">고정된 프로젝트</div>
      <div className="grid grid-cols-2 gap-4">
        <PinedProjectCard />
        <PinedProjectCard />
        <PinedProjectCard />
        <Card>
          <CardHeader>
            <CardTitle>새 프로젝트 추가</CardTitle>
            <CardDescription>프로젝트 추가하기</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}

export function PinedProjectCard() {
  return (
    <Card className="grid grid-cols-3 text-[#28303F]">
      <CardHeader>
        <CardTitle>프로젝트 이름</CardTitle>
        <CardDescription>프로젝트 설명</CardDescription>
      </CardHeader>
      <CardHeader>
        <CardTitle>50/100</CardTitle>
      </CardHeader>
      <Pin color="#28303F" />
    </Card>
  )
}

export function CreateNewProjectButton() {
  return (
    <Link href={"/project/create"}>
      <Button className="w-full">
        <CirclePlus /> Create new project
      </Button>
    </Link>
  );
}

export function ProjectCountChart({ total, completed }: { total: number, completed: number }) {
  const chartData = [
    { label: "completed", total: total, fill: "var(--color-completed)" },
  ]
  const chartConfig = {
    total: {
      label: "개",
    },
    completed: {
      label: "Completed",
      color: "#3182F7",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="aspect-square max-h-[250px]">
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={90 + (completed / total) * 360}
        innerRadius={80}
        outerRadius={110}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="total" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 28} className="fill-muted-foreground" >
                      프로젝트
                    </tspan>
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                      {chartData[0].total.toLocaleString()}개
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground" >
                      중 {completed?.toLocaleString()}개 완료
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}
export function PracticeCountChart({ data }: { data: number[] }) {
  const chartData = [
    { project_name: "Project1", practice: data[0], fill: "var(--color-Project1)" },
    { project_name: "Project2", practice: data[1], fill: "var(--color-Project2)" },
    { project_name: "Project3", practice: data[2], fill: "var(--color-Project3)" },
    { project_name: "Project4", practice: data[3], fill: "var(--color-Project4)" },
    { project_name: "other", practice: data[4], fill: "var(--color-other)" },
  ]
  const chartConfig = {
    practice: {
      label: "Visitors",
    },
    Project1: {
      label: "Project1",
      color: "#012E57",
    },
    Project2: {
      label: "Project2",
      color: "#01477E",
    },
    Project3: {
      label: "Project3",
      color: "#1F65B7",
    },
    Project4: {
      label: "Project4",
      color: "#3182F7",
    },
    other: {
      label: "Other",
      color: "#8FBDFE",
    },
  } satisfies ChartConfig

  const totalPractice = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.practice, 0)
  }, [])

  return (
    <ChartContainer config={chartConfig} className="aspect-square max-h-[230px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="practice"
          nameKey="project_name"
          innerRadius={70}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 28}
                      className="fill-muted-foreground"
                    >
                      총
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {totalPractice.toLocaleString()}번
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      연습
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
