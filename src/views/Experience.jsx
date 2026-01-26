import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const EXPERIENCES = [ 
  {
    company: "sikka.ai",
    title: "Quality Assurance Intern",
    period: "Nov 2025 – Present",
    location: "San Jose, CA",
    bullets: [
      "Built a Python + Playwright concurrency performance harness using threading to simulate 40+ parallel user sessions, enforcing isolated browser contexts and custom resource controls to prevent system exhaustion",
      "Built stable UI automation for lazy-loaded components using ARIA locators, explicit waits, event dispatching, and async anchor verification, reducing flakiness under 30 seconds render delays",
      "Executed Dockerized Playwright test runs on Kubernetes deployments managed via ArgoCD, and monitored EC2 CPU/RAM during peak loads to provide worker/pod right-sizing inputs that prevented OOM failures in high-concurrency execution"
    ],
    skills: ["Python", "Selenium", "Kubernetes", "ArgoCD", "EC2", "Playwright"]
  },
  
  {
    company: "Nokia",
    title: "Software Engineer Intern",
    period: "May 2024 – May 2025",
    location: "Sunnyvale, CA",
    logo: "https://www.nokia.com/about-us/newsroom/media-resources/media-library/nokia-logo/",
    bullets: [
        "Designed scalable Microservices and RESTful APIs with FastAPI and PostgreSQL, enhancing system efficiency and reliability",
        "Optimized SQL queries and database indexing in PostgreSQL, increasing request throughput by 40%",
        "Developed high-performance backend services with Python and FastAPI, efficiently handling 100K+ daily requests",
        "Implemented CI/CD pipelines using GitLab, Docker, and Terraform, streamlining build automation and reducing failures by 30%",
        "Collaborated with senior engineers in peer reviews and design sessions, elevating code quality and fostering team alignment",
        "Engineered a high-speed caching layer with Redis, optimizing API response time by 50%",
        "Developed robust Python-based automation scripts with Pytest, strengthening code quality and minimizing defects by 25%",
        "Standardized network configurations by re-IP/’ing 800 testbeds across 6 data centers, ensuring operational uniformity"    

    ],
    skills: ["Microservices", "Gitlab CI/CD", "Python", "Docker", "Terraform", "Pytest"]
  },
  {
    company: "Infosys",
    title: "Data Engineer",
    period: "Sep 2021 – Jul 2023",
    location: "Bangalore, India",
    bullets: [
        "Led cloud migration from Google Firebase to AWS, achieving zero downtime and uninterrupted service transitions",
        "Constructed ETL pipelines using AWS Lambda and Redshift, processing 1M+ records daily with enhanced efficiency",
        "Developed a real-time data ingestion framework via AWS Step Functions, cutting latency by 40% for seamless workflows", 
        "Optimized AWS EC2 auto-scaling, lowering infrastructure expenses by 20% while maintaining system stability",
        "Automated data validation and transformation through dbt, ensuring higher accuracy and structured datasets",
        "Managed data pipelines for client updates, accelerating processing times by 40% and ensuring seamless data consistency", 
        "Implemented distributed data processing in PySpark, enabling high-volume real-time analytics and anomaly detection",
        "Designed a Django-based monitoring dashboard with Grafana, expediting issue detection by 35% and improving visibility"
    ],
    skills: ["Spark", "Kafka", "dbt", "AWS", "Airflow", "Redshift"]
  },
  {
    company: "Code Clinic Pvt. Ltd.",
    title: "Software Engineer",
    period: "Aug 2020 – Sep 2021",
    location: "Ahmedabad, India",
    bullets: [
        "Developed secure backend services with FastAPI to integrate banking/payment APIs, ensuring high-availability and fault-tolerant transactions",
        "Built a responsive customer portal using Angular, enabling seamless onboarding, wallet top-ups, and transaction history views across devices",
        "Designed PostgreSQL schemas with optimized queries to support 500K+ monthly active users with smooth account operations",
        "Implemented JWT-based authentication and role-based access control (RBAC) to safeguard sensitive financial data",
        "Integrated payment gateway workflows with real-time API responses, improving checkout success rate by 30%",
        "Enhanced customer experience by introducing interactive dashboards with charts and notifications for balance updates and settlements",
        "Collaborated with UI/UX designers and QA testers in Agile sprints, delivering pixel-perfect interfaces and bug-free releases under tight deadlines"

    ],
    skills: ["FastAPI", "PostgreSQL", "JWT", "Agile", "Dashboards", "Angular"]
  }
];

export default function Experience() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="experience"
      className={darkMode ? "bg-gray-900 pt-12 pb-6" : "bg-white pt-12 pb-6"}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className={
            darkMode
                ? "font-sans text-5xl font-bold text-center text-white mb-6"
                : "font-sans text-5xl font-bold text-center mb-6"
          }
        >
          Professional Experience
        </h2>

        <ol
          className={
            darkMode
              ? "relative border-s border-gray-700"
              : "relative border-s border-gray-300"
          }
        >
          {EXPERIENCES.map((exp, i) => (
            <li key={i} className="mb-8 ms-6">
              <span
                className={
                  darkMode
                    ? "absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black text-sm"
                    : "absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-sm"
                }
              >
                {EXPERIENCES.length - i}
              </span>

              <div
                className={
                  darkMode
                    ? "rounded-2xl shadow-lg p-6 bg-gray-800/80"
                    : "rounded-2xl shadow-lg p-6 bg-white/80"
                }
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3
                    className={
                      darkMode
                        ? "text-xl font-bold text-white"
                        : "text-xl font-bold text-gray-900"
                    }
                  >
                    {exp.title}
                  </h3>
                  <span className="text-gray-600">•</span>
                  <p
                    className={
                      darkMode
                        ? "text-lg font-semibold text-gray-200"
                        : "text-lg font-semibold text-gray-800"
                    }
                  >
                    {exp.company}
                  </p>
                </div>

                <p
                  className={
                    darkMode
                      ? "text-sm text-gray-400 mt-1"
                      : "text-sm text-gray-500 mt-1"
                  }
                >
                  {exp.period} • {exp.location}
                </p>

                <ul className="list-disc ms-5 mt-3 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className={
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                {exp.skills?.length ? (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((s, k) => (
                      <span
                        key={k}
                        className={
                          darkMode
                            ? "text-xs rounded-full border border-gray-500 px-2 py-1 text-gray-300"
                            : "text-xs rounded-full border px-2 py-1 text-gray-700"
                        }
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
