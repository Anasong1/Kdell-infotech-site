// Load jobs from jobs.json
fetch('/jobs.json')
  .then(response => response.json())
  .then(data => {
    const jobContainer = document.querySelector('#job-list');

    data.forEach(job => {
      const jobCard = `
        <div class="job-card">
          <h3>${job.title}</h3>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Type:</strong> ${job.type}</p>
          <p><strong>Pay:</strong> ${job.pay}</p>
          <p><strong>Status:</strong> ${job.status}</p>

          <a class="view-details" href="job.html?id=${job.id}">
            View details
          </a>
        </div>
      `;

      jobContainer.innerHTML += jobCard;
    });
  })
  .catch(error => console.error('Error loading jobs:', error));

