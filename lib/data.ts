export interface Job {
  company: string;
  companyUrl?: string;
  logo?: string;
  role: string;
  period: string;
}

export const JOBS: Job[] = [
  {
    company: "Salesforce",
    companyUrl: "https://www.salesforce.com",
    logo: "/logos/salesforce_logo.jpg",
    role: "Software Engineer",
    period: "2022-Present",
  },
  {
    company: "Canary",
    companyUrl: "https://www.canarystudent.com",
    logo: "/logos/canary_logo.jpg",
    role: "Software Engineer",
    period: "2021",
  },
  {
    company: "ADP",
    companyUrl: "https://www.adp.com",
    logo: "/logos/adp_logo.jpg",
    role: "Software Engineer Intern",
    period: "2021",
  },
  {
    company: "Bits of Good",
    companyUrl: "https://www.bitsofgood.org/",
    logo: "/logos/gtbitsofgood_logo.jpeg",
    role: "Volunteer Software Engineer",
    period: "2020-21",
  },
  {
    company: "Idenhaus",
    companyUrl: "https://www.idenhaus.com",
    logo: "/logos/idenhaus_logo.jpg",
    role: "Cyber Security Intern",
    period: "2019",
  },
  {
    company: "Precisely",
    companyUrl: "https://www.precisely.com",
    logo: "/logos/precisely_logo.jpg",
    role: "Software Engineer Intern",
    period: "2018",
  },
];
