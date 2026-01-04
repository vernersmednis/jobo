import { Calendar, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { MatchCardProps } from "./types"

export function MatchCard({ match, onScheduleInterview }: MatchCardProps) {
  const { vacancy, interviewDate, interviewTime, companyRegistrationNumber } = match

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    return `${day}.${month}.`
  }

  return (
    <Card className="relative">
      <Button
        variant="ghost"
        size="icon-sm"
        className="absolute right-2 top-2"
        aria-label="Dismiss"
      >
        <X className="size-4" />
      </Button>

      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
            <div className="text-xs font-semibold text-muted-foreground">
              logo
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-base leading-tight">
              {vacancy.title}
            </CardTitle>
            <CardDescription className="text-xs">
              Company Name
            </CardDescription>
            {companyRegistrationNumber && (
              <p className="mt-0.5 text-xs text-muted-foreground">
                Reg. No. {companyRegistrationNumber}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {interviewDate && interviewTime && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-950/20">
            <p className="mb-1 text-xs font-medium text-amber-900 dark:text-amber-200">
              You have a scheduled job interview - have a great time!
            </p>
            <p className="text-xs text-amber-800 dark:text-amber-300">
              Go or prepare for the job interview
            </p>
          </div>
        )}

        {interviewDate && interviewTime && (
          <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Your interview appointment</p>
                <p className="text-sm font-medium">
                  {formatDate(interviewDate)}, {interviewTime}
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-800"
              onClick={() => onScheduleInterview?.(match.id)}
            >
              Call
            </Button>
          </div>
        )}

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="size-3" />
            <span>{vacancy.location}</span>
          </div>
          {vacancy.salaryEurBruto && (
            <>
              <span>•</span>
              <span>{vacancy.salaryEurBruto}€ gross</span>
            </>
          )}
        </div>

        {!interviewDate && match.status === "potential" && (
          <Button
            variant="outline"
            size="sm"
            className="w-full border-amber-500 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-950/20"
            onClick={() => onScheduleInterview?.(match.id)}
          >
            Schedule interview
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
