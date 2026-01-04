import { mockMatches } from "./mock-data"
import type { MatchesProps } from "./types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MatchCard } from "./components/matchCard"

export function Matches({ matches = mockMatches }: MatchesProps) {
  const potentialMatches = matches.filter((m) => m.status === "potential")
  const agreedMatches = matches.filter((m) => m.status === "agreed")
  const thinkingMatches = matches.filter((m) => m.status === "thinking")
  
  const handleScheduleInterview = (matchId: string) => {
    console.log("Schedule interview for match:", matchId)
    // TODO: Implement interview scheduling logic
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-4 p-4">
      <Tabs defaultValue="potential" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="potential">
            Potential ({potentialMatches.length})
          </TabsTrigger>
          <TabsTrigger value="agreed">
            Agreed ({agreedMatches.length})
          </TabsTrigger>
          <TabsTrigger value="thinking">
            Still thinking ({thinkingMatches.length})
          </TabsTrigger>
        </TabsList>
  
        <TabsContent value="potential" className="mt-4 space-y-3">
          {potentialMatches.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-sm text-muted-foreground">
                No potential matches
              </p>
            </div>
          ) : (
            potentialMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onScheduleInterview={handleScheduleInterview}
              />
            ))
          )}
        </TabsContent>
  
        <TabsContent value="agreed" className="mt-4 space-y-3">
          {agreedMatches.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-sm text-muted-foreground">
                No agreed matches
              </p>
            </div>
          ) : (
            agreedMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onScheduleInterview={handleScheduleInterview}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="thinking" className="mt-4 space-y-3">
          {thinkingMatches.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-sm text-muted-foreground">
                No thinking matches
              </p>
            </div>
          ) : (
            thinkingMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onScheduleInterview={handleScheduleInterview}
              />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
