export type Vacancy = {
  id: string
  companyName: string
  title: string
  level: "Junior" | "Mid" | "Senior"
  salaryEurBruto?: number
  location: string
  workFormat: "On-site" | "Hybrid" | "Remote"
  languages: string[]
  matchPercent: number
  description: string
  requirements: string[]
}