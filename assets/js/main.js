const jobs = [
  {
    title: "Senior Data Engineer (Azure / Databricks)",
    location: "Remote - USA",
    type: "Contract-to-Hire",
    meta: ["Data", "Azure", "Databricks"],
    tags: ["Azure", "Databricks", "PySpark", "SQL"]
  },
  {
    title: "Cloud Solutions Architect (AWS / Azure)",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["Cloud", "Architecture"],
    tags: ["AWS", "Azure", "Cloud Architecture"]
  },
  {
    title: "DevOps Engineer (Kubernetes / CI/CD)",
    location: "Hybrid - Atlanta, GA",
    type: "Contract",
    meta: ["DevOps", "Kubernetes"],
    tags: ["Kubernetes", "CI/CD", "Terraform"]
  },
  {
    title: "Site Reliability Engineer (SRE)",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["SRE", "Reliability"],
    tags: ["SRE", "Observability", "Incident Response"]
  },
  {
    title: "Senior Software Engineer (.NET)",
    location: "Hybrid - Atlanta, GA",
    type: "Direct Hire",
    meta: ["Software", ".NET"],
    tags: [".NET", "C#", "API Development"]
  },
  {
    title: "Java Backend Developer (Microservices)",
    location: "Remote - USA",
    type: "Contract",
    meta: ["Software", "Java"],
    tags: ["Java", "Spring Boot", "Microservices"]
  },
  {
    title: "Full Stack Engineer (React / Node)",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["Full Stack", "JavaScript"],
    tags: ["React", "Node.js", "TypeScript"]
  },
  {
    title: "Frontend Engineer (React)",
    location: "Hybrid - Atlanta, GA",
    type: "Contract",
    meta: ["Frontend", "React"],
    tags: ["React", "JavaScript", "UI"]
  },
  {
    title: "Data Analyst (Power BI / Tableau)",
    location: "Hybrid - Atlanta, GA",
    type: "Contract-to-Hire",
    meta: ["Data", "BI"],
    tags: ["Power BI", "Tableau", "SQL"]
  },
  {
    title: "BI Developer (SQL / ETL)",
    location: "Remote - USA",
    type: "Contract",
    meta: ["Data", "BI"],
    tags: ["SQL", "ETL", "Reporting"]
  },
  {
    title: "Machine Learning Engineer (NLP)",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["ML", "AI"],
    tags: ["Python", "NLP", "MLOps"]
  },
  {
    title: "Cybersecurity Analyst (SOC)",
    location: "Hybrid - Atlanta, GA",
    type: "Contract",
    meta: ["Security", "SOC"],
    tags: ["SIEM", "Incident Response", "Splunk"]
  },
  {
    title: "Cloud Security Engineer (AWS)",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["Security", "Cloud"],
    tags: ["AWS", "Security+", "Cloud Security"]
  },
  {
    title: "QA Automation Engineer (Selenium / API)",
    location: "Hybrid - Atlanta, GA",
    type: "Contract",
    meta: ["QA", "Automation"],
    tags: ["Selenium", "API Testing", "Postman"]
  },
  {
    title: "Performance Test Engineer (JMeter / LoadRunner)",
    location: "Remote - USA",
    type: "Contract",
    meta: ["QA", "Performance"],
    tags: ["JMeter", "LoadRunner", "Performance Tuning"]
  },
  {
    title: "Manual QA / UAT Analyst",
    location: "Hybrid - Atlanta, GA",
    type: "Contract",
    meta: ["QA", "UAT"],
    tags: ["Functional Testing", "User Acceptance Testing"]
  },
  {
    title: "IT Support / Help Desk Analyst",
    location: "Onsite - Atlanta, GA",
    type: "Contract",
    meta: ["Support", "Help Desk"],
    tags: ["Windows", "Office 365", "Ticketing"]
  },
  {
    title: "Desktop Support Technician",
    location: "Onsite - Atlanta, GA",
    type: "Contract",
    meta: ["Support", "Desktop"],
    tags: ["Hardware", "Troubleshooting", "Imaging"]
  },
  {
    title: "Systems Administrator (Windows / Linux)",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["Systems", "Admin"],
    tags: ["Windows Server", "Linux", "Virtualization"]
  },
  {
    title: "Network Engineer (Cisco / Firewall)",
    location: "Hybrid - Atlanta, GA",
    type: "Contract-to-Hire",
    meta: ["Network", "Engineer"],
    tags: ["Cisco", "Firewalls", "Routing & Switching"]
  },
  {
    title: "IT Project Manager (Agile)",
    location: "Remote - USA",
    type: "Contract",
    meta: ["Project Management", "Agile"],
    tags: ["Agile", "Scrum", "SDLC"]
  },
  {
    title: "Scrum Master / Agile Coach",
    location: "Remote - USA",
    type: "Contract",
    meta: ["Scrum", "Agile"],
    tags: ["Scrum Master", "Facilitation", "Coaching"]
  },
  {
    title: "IT Business Analyst",
    location: "Hybrid - Atlanta, GA",
    type: "Contract",
    meta: ["BA", "IT"],
    tags: ["Requirements", "User Stories", "Process Mapping"]
  },
  {
    title: "Data Architect (Cloud)",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["Data", "Architecture"],
    tags: ["Data Modeling", "Cloud Data", "Best Practices"]
  },
  {
    title: "Enterprise Solutions Architect",
    location: "Remote - USA",
    type: "Direct Hire",
    meta: ["Architecture", "Enterprise"],
    tags: ["Enterprise Architecture", "Integration", "Roadmaps"]
  }
];

function renderJobs(filter = "") {
  const list = document.getElementById("jobList");
  if (!list) return;

  const query = filter.trim().toLowerCase();
  list.innerHTML = "";

  const filtered = jobs.filter((job) => {
    if (!query) return true;
    const haystack = [
      job.title,
      job.location,
      job.type,
      ...(job.meta || []),
      ...(job.tags || []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  if (!filtered.length) {
    list.innerHTML =
      '<p style="font-size:.85rem;color:#9ca3af;">No roles match that search yet. Try a different skill, title, or location.</p>';
    return;
  }

  filtered.forEach((job) => {
    const card = document.createElement("article");
    card.className = "job-card";
    card.innerHTML = `
      <div>
        <div class="job-title">${job.title}</div>
        <div class="job-meta">
          <span>${job.location}</span>
          <span>${job.type}</span>
        </div>
      </div>
      <div class="job-tags">
        ${job.tags.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <div class="job-action">
        <span class="job-type">All IT Opportunities</span>
        <button class="btn btn-sm btn-outline">View details</button>
      </div>
    `;
    card
      .querySelector("button")
      .addEventListener("click", () => {
        window.location.href =
          "mailto:Kdellinfotech@gmail.com?subject=" +
          encodeURIComponent("Candidate interested in: " + job.title);
      });
    list.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Render year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render jobs
  renderJobs();

  // Search
  const searchInput = document.getElementById("jobSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderJobs(e.target.value || "");
    });
  }

  // Nav toggle
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
    // Close nav on link click (mobile)
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  // Fake contact submit
  const contactForm = document.querySelector(".contact-form");
  const formNote = document.getElementById("formNote");
  if (contactForm && formNote) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formNote.textContent =
        "Thank you! This demo form was submitted. Connect this form to email, ATS, or CRM in production.";
    });
  }
});
