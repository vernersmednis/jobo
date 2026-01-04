import type { Match } from "@/types/match"

export interface MatchCardProps {
  match: Match
  onScheduleInterview?: (matchId: string) => void
}
