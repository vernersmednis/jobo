import { useState } from "react"
import {
  Briefcase,
  Heart,
  HelpCircle,
  MapPin,
  Wallet,
  X,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import { mockVacancies } from "./mock-data.ts"
import type { Decision, SwipeProps } from "./types.ts"
import { SwipeActionButton } from "./components/swipeActionButton/index.tsx"


export function Swipe({ vacancies = mockVacancies }: SwipeProps) {
  const [index, setIndex] = useState(0)

  const current = vacancies[index] ?? null
  const total = vacancies.length

  function next(_decision: Decision) {
    void _decision
    if (total === 0) return
    setIndex((prev) => (prev + 1) % total)
  }

  if (!current) {
    return (
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-6 p-4">
        <Card>
          <CardHeader>
            <CardTitle>No vacancies</CardTitle>
            <CardDescription>
              Add vacancies to start browsing.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-4 p-4">

      <Card className="flex-1">
        <CardHeader className="gap-2">
          <CardTitle className="leading-snug">
            {current.title} <span className="text-muted-foreground">({current.level})</span>
          </CardTitle>
          <CardDescription className="truncate">
            {current.companyName}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Match</span>
              <span className="font-medium">{current.matchPercent}%</span>
            </div>
            <Progress value={current.matchPercent} />
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground" />
              <span className="truncate">{current.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="size-4 text-muted-foreground" />
              <span className="truncate">{current.workFormat}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="size-4 text-muted-foreground" />
              <span className="truncate">
                {current.salaryEurBruto
                  ? `${current.salaryEurBruto} € gross`
                  : "Salary not specified"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Languages:</span>
              <span className="truncate">{current.languages.join(", ")}</span>
            </div>
          </div>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold">Description</h2>
            <p className="text-sm text-muted-foreground">{current.description}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold">Requirements</h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {current.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </section>
        </CardContent>
        <CardFooter className="justify-center gap-4 ">
          <SwipeActionButton onClick={() => next("reject")}>
            <X className="size-6 text-destructive" />
          </SwipeActionButton>
          <SwipeActionButton onClick={() => next("maybe")}>
            <HelpCircle className="size-6 text-[color:var(--chart-4)]" />
          </SwipeActionButton>
          <SwipeActionButton onClick={() => next("like")}>
            <Heart className="size-6 text-[color:var(--chart-2)]" />
          </SwipeActionButton>
        </CardFooter>
      </Card>
    </div>
  )
}
