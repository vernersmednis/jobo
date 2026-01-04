import type { Vacancy } from "@/types/vacancy"

export type Decision = "reject" | "maybe" | "like"

export type SwipeProps = {
  vacancies?: Vacancy[]
}