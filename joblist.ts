
interface JobDetails {
    salary: string;
    title: string;
    category: string;
    link: string;
}


interface FilterOptions {
    type: string[];
    category: string[];
    careerLevels: string[];
    educationLevels: string[];
}


class JobListings {
    private jobDetails: JobDetails[] = [];

    constructor() {
        
        this.initializeJobDetails();
        
        this.setupFilters();
    }

    private initializeJobDetails() {
        
        const jobElements = document.querySelectorAll('.trainer-item');
        jobElements.forEach((jobElement: Element) => {
            const salary = jobElement.querySelector('.down-content span')?.textContent || '';
            const title = jobElement.querySelector('.down-content h4')?.textContent || '';
            const category = jobElement.querySelector('.down-content p')?.textContent || '';
            const link = jobElement.querySelector('.social-icons a')?.getAttribute('href') || '';
            this.jobDetails.push({ salary, title, category, link });
        });
    }

    private setupFilters() {
        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox: HTMLInputElement): void => {
            checkbox.addEventListener('change', () => {
                this.filterJobs();
            });
        });
    }

    private filterJobs() {
        
        const filteredJobs = this.jobDetails.filter((job: JobDetails) => {
            
            return true; 
        });
       
        this.displayFilteredJobs(filteredJobs);
    }

    private displayFilteredJobs(jobs: JobDetails[]) {
        
        const jobListContainer = document.querySelector('.col-lg-8 .row');
        if (jobListContainer) {
            jobListContainer.innerHTML = ''; 
            jobs.forEach((job: JobDetails) => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('col-md-6', 'trainer-item');
                jobElement.innerHTML = `
                    <div class="image-thumb">
                        <img src="assets/images/placeholder.jpg" alt="">
                    </div>
                    <div class="down-content">
                        <span>${job.salary}</span>
                        <h4>${job.title}</h4>
                        <p>${job.category}</p>
                        <ul class="social-icons">
                            <li><a href="${job.link}">+ View More</a></li>
                        </ul>
                    </div>`;
                jobListContainer.appendChild(jobElement);
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new JobListings();
});
