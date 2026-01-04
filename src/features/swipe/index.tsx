import { useMemo, useState } from "react"

import { mockVacancies } from "./mock-data.ts"
import type { Decision, SwipeProps } from "./types.ts"
import { VacancyCard } from "./components/vacancyCard/index.tsx"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function Swipe({ vacancies = mockVacancies }: SwipeProps) {
  const [index, setIndex] = useState(0)
  const [animatingDecision, setAnimatingDecision] = useState<Decision | null>(null)
  const ANIMATION_MS = 650
  const current = vacancies[index] ?? null
  const next = vacancies[(index + 1) % vacancies.length] ?? null
  const total = vacancies.length

  // Calculate CSS classes for card exit animation based on decision type
  const cardMotionClassName = useMemo(() => {
    if (!animatingDecision) {
      return "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100"
    }
    if (animatingDecision === "like") {
      return "translate-x-48 rotate-6 scale-95 opacity-0"
    }
    if (animatingDecision === "reject") {
      return "-translate-x-48 -rotate-6 scale-95 opacity-0"
    }
    return "-translate-y-48 scale-95 opacity-0"
  }, [animatingDecision])

  // Handle user decision and trigger card exit animation
  function handleDecision(decision: Decision) {
    // Prevent multiple decisions while animating
    if (animatingDecision) return
    if (total === 0) return

    setAnimatingDecision(decision)
    
    window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % total)
      setAnimatingDecision(null)
    }, ANIMATION_MS)
  }

  // Show empty state if no vacancies available
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
      <div className="relative flex-1">
        {/* Next card positioned behind current card */}
        {next && (
          <div
            className={
              "absolute inset-0 transition-[scale,opacity] duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] " +
              (animatingDecision ? "scale-100 opacity-100" : "scale-95 opacity-60")
            }
          >
            <VacancyCard vacancy={next} className="flex-1" />
          </div>
        )}

        {/* Current card on top - user interacts with this */}
        <div className="relative">
          <VacancyCard
            key={current.id}
            vacancy={current}
            onDecision={handleDecision}
            className={
              "flex-1 select-none will-change-[translate,rotate,scale,opacity] " +
              "transition-[translate,rotate,scale,opacity] duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] " +
              cardMotionClassName +
              (animatingDecision ? " pointer-events-none" : "")
            }
          />
        </div>
      </div>
    </div>
  )
}
