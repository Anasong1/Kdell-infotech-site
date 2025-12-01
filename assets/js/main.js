// assets/js/main.js

// Load jobs from jobs.json and render cards
fetch('/jobs.json')
  .then(res => res.json())
  .then(jobs => {
    const jobContainer = document.querySelector('#job-list');
    if (!jobContainer) return;

    if (!Array.isArray(jobs) || jobs.length === 0) {
      jobContainer.innerHTML =
        '<p class="jobs-empty">No open roles right now. Check back soon.</p>';
      return;
    }

    jobContainer.innerHTML = jobs
      .map(
        (job) => `
      <article class="job-card">
        <header class="job-card__header">
          <h3 class="job-card__title">${job.title}</h3>
          ${job.type ? `<span class="job-card__type">${job.type}</span>` : ''}
        </header>

        <p class="job-card__company">
          Kdell Infotech • ${job.location || ''}
        </p>

        <div class="job-card__meta">
          ${
            job.pay
              ? `<span class="job-tag job-tag--pay">${job.pay}</span>`
              : ''
          }
          ${
            job.status
              ? `<span class="job-tag job-tag--status">${job.status}</span>`
              : ''
          }
        </div>

        ${
          Array.isArray(job.skills) && job.skills.length
            ? `
          <ul class="job-card__skills">
            ${job.skills.map((s) => `<li>${s}</li>`).join('')}
          </ul>
        `
            : ''
        }

        <p class="job-card__summary">
          ${
            job.description ||
            'Click view details to learn more about this opportunity.'
          }
        </p>

        <div class="job-card__actions">
          <a class="btn btn-outline view-details" href="job.html?id=${job.id}">
            View details
          </a>
          <a
            class="btn btn-primary"
            href="mailto:kdellinfotech@gmail.com?subject=${encodeURIComponent(
              'Application - ' + job.title
            )}"
          >
            Submit your resume
          </a>
        </div>
      </article>
    `
      )
      .join('');
  })
  .catch((err) => {
    console.error('Error loading jobs:', err);
    const jobContainer = document.querySelector('#job-list');
    if (jobContainer) {
      jobContainer.innerHTML =
        '<p class="jobs-error">We were unable to load open roles. Please refresh or try again later.</p>';
    }
  });

