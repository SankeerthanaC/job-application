var JobListings = /** @class */ (function () {
    function JobListings() {
        this.jobDetails = [];
        this.initializeJobDetails();
        this.setupFilters();
    }
    JobListings.prototype.initializeJobDetails = function () {
        var _this = this;
        var jobElements = document.querySelectorAll('.trainer-item');
        jobElements.forEach(function (jobElement) {
            var _a, _b, _c, _d;
            var salary = ((_a = jobElement.querySelector('.down-content span')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
            var title = ((_b = jobElement.querySelector('.down-content h4')) === null || _b === void 0 ? void 0 : _b.textContent) || '';
            var category = ((_c = jobElement.querySelector('.down-content p')) === null || _c === void 0 ? void 0 : _c.textContent) || '';
            var link = ((_d = jobElement.querySelector('.social-icons a')) === null || _d === void 0 ? void 0 : _d.getAttribute('href')) || '';
            _this.jobDetails.push({ salary: salary, title: title, category: category, link: link });
        });
    };
    JobListings.prototype.setupFilters = function () {
        var _this = this;
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                _this.filterJobs();
            });
        });
    };
    JobListings.prototype.filterJobs = function () {
        var filteredJobs = this.jobDetails.filter(function (job) {
            return true;
        });
        this.displayFilteredJobs(filteredJobs);
    };
    JobListings.prototype.displayFilteredJobs = function (jobs) {
        var jobListContainer = document.querySelector('.col-lg-8 .row');
        if (jobListContainer) {
            jobListContainer.innerHTML = '';
            jobs.forEach(function (job) {
                var jobElement = document.createElement('div');
                jobElement.classList.add('col-md-6', 'trainer-item');
                jobElement.innerHTML = "\n                    <div class=\"image-thumb\">\n                        <img src=\"assets/images/placeholder.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"down-content\">\n                        <span>".concat(job.salary, "</span>\n                        <h4>").concat(job.title, "</h4>\n                        <p>").concat(job.category, "</p>\n                        <ul class=\"social-icons\">\n                            <li><a href=\"").concat(job.link, "\">+ View More</a></li>\n                        </ul>\n                    </div>");
                jobListContainer.appendChild(jobElement);
            });
        }
    };
    return JobListings;
}());
document.addEventListener('DOMContentLoaded', function () {
    new JobListings();
});
