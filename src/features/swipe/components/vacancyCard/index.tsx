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
import { SwipeActionButton } from "../swipeActionButton"
import type { VacancyCardProps } from "./types"


export function VacancyCard({
  vacancy,
  onDecision,
  className,
  style,
}: VacancyCardProps) {
  return (
    <Card className={className} style={style}>
      <CardHeader className="gap-2">
        <CardTitle className="leading-snug">
          {vacancy.title}{" "}
          <span className="text-muted-foreground">({vacancy.level})</span>
        </CardTitle>
        <CardDescription className="truncate">
          {vacancy.companyName}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Match</span>
            <span className="font-medium">{vacancy.matchPercent}%</span>
          </div>
          <Progress value={vacancy.matchPercent} />
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-muted-foreground" />
            <span className="truncate">{vacancy.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="size-4 text-muted-foreground" />
            <span className="truncate">{vacancy.workFormat}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="size-4 text-muted-foreground" />
            <span className="truncate">
              {vacancy.salaryEurBruto
                ? `${vacancy.salaryEurBruto} € gross`
                : "Salary not specified"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Languages:</span>
            <span className="truncate">{vacancy.languages.join(", ")}</span>
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold">Description</h2>
          <p className="text-sm text-muted-foreground">{vacancy.description}</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold">Requirements</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {vacancy.requirements.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </section>
      </CardContent>
      <CardFooter className="justify-center gap-4 ">
        <SwipeActionButton
          onClick={() => onDecision?.("reject")}
          disabled={!onDecision}
        >
          <X className="size-6 text-destructive" />
        </SwipeActionButton>
        <SwipeActionButton
          onClick={() => onDecision?.("maybe")}
          disabled={!onDecision}
        >
          <HelpCircle className="size-6 text-[color:var(--chart-4)]" />
        </SwipeActionButton>
        <SwipeActionButton
          onClick={() => onDecision?.("like")}
          disabled={!onDecision}
        >
          <Heart className="size-6 text-[color:var(--chart-2)]" />
        </SwipeActionButton>
      </CardFooter>
    </Card>
  )
}
