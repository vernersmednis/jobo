import type { Vacancy } from "@/types/vacancy"

export const mockVacancies: Vacancy[] = [
  {
    id: "v1",
    companyName: "All Opportunities",
    title: "Customer Support Specialist",
    level: "Junior",
    salaryEurBruto: 1600,
    location: "Riga",
    workFormat: "Hybrid",
    languages: ["Latvian", "English"],
    matchPercent: 80,
    description:
      "You will be the first point of contact for our customers. Help resolve issues, suggest improvements, and support the team in day-to-day work.",
    requirements: [
      "Strong communication skills",
      "Ability to learn new systems quickly",
      "Positive attitude and a willingness to help",
    ],
  },
  {
    id: "v2",
    companyName: "McDonald's Latvia",
    title: "Shift Supervisor Assistant",
    level: "Junior",
    salaryEurBruto: 1400,
    location: "Riga",
    workFormat: "On-site",
    languages: ["Latvian"],
    matchPercent: 72,
    description:
      "Help organize shift operations, coordinate the team, and follow quality standards. A great opportunity to start a leadership career.",
    requirements: [
      "Responsibility and attention to detail",
      "Ability to work in a fast-paced environment",
      "Willingness to work shifts",
    ],
  },
  {
    id: "v3",
    companyName: "SEB",
    title: "Customer Advisor",
    level: "Junior",
    salaryEurBruto: 1700,
    location: "Riga",
    workFormat: "Hybrid",
    languages: ["Latvian", "English"],
    matchPercent: 88,
    description:
      "Advise customers on banking products and services, helping them choose the most suitable solution.",
    requirements: [
      "Interest in finance",
      "Strong communication skills",
      "Customer-facing experience or mindset",
    ],
  },
]
