import type { Vacancy } from "@/types/vacancy"
import type { Decision } from "../../types"

export interface VacancyCardProps {
  vacancy: Vacancy
  onDecision?: (decision: Decision) => void
  className?: string
  style?: React.CSSProperties
}