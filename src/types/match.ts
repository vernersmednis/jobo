import type { Vacancy } from "@/types/vacancy"

export interface Match {
  id: string
  vacancy: Vacancy
  status: "potential" | "agreed" | "thinking"
  interviewDate?: string // ISO string
  interviewTime?: string // "HH:MM-HH:MM" format
  matchedAt: number // timestamp
  companyRegistrationNumber?: string
}