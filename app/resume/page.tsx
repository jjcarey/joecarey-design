"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const experience = [
  {
    title: "Principle Product Designer",
    company: "Company Name",
    period: "2022 - Present",
    description: "Leading design initiatives and mentoring design team members.",
  },
  {
    title: "Senior Product Designer",
    company: "Previous Company",
    period: "2019 - 2022",
    description: "Designed and shipped multiple product features.",
  },
];

const skills = {
  design: ["Product Strategy", "UX/UI Design", "Design Systems", "User Research"],
  tools: ["Figma", "Sketch", "Adobe Creative Suite", "Prototyping"],
};

// Example Chart.js data for skills visualization
const chartData = {
  labels: ["Product Strategy", "UX Design", "UI Design", "Research", "Prototyping", "Systems"],
  datasets: [
    {
      label: "Skill Proficiency",
      data: [95, 90, 88, 85, 92, 87],
      borderColor: "rgb(24, 24, 27)",
      backgroundColor: "rgba(24, 24, 27, 0.1)",
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Skills Overview",
      font: {
        size: 16,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50">
            Resume
          </h1>
          <button className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium">
            Download PDF
          </button>
        </div>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {job.title}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.period}
                  </span>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-3">
                  {job.company}
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Design
              </h3>
              <ul className="space-y-2">
                {skills.design.map((skill) => (
                  <li key={skill} className="text-zinc-700 dark:text-zinc-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Tools
              </h3>
              <ul className="space-y-2">
                {skills.tools.map((tool) => (
                  <li key={tool} className="text-zinc-700 dark:text-zinc-300">
                    • {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chart.js Visualization */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
            <Line data={chartData} options={chartOptions} />
          </div>
        </section>

        {/* Education Section (Optional) */}
        <section>
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
            Education
          </h2>
          <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Degree Name
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-1">
              University Name
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Year
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
