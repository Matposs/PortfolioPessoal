
document.addEventListener("DOMContentLoaded", function () {
    changeLanguage('pt');
});
function showContent(projectId) {
    var projects = document.querySelectorAll('.project-content');
    projects.forEach(function (project) {
        project.classList.remove('active');
    });
    var selectedProject = document.getElementById(projectId);
    selectedProject.classList.add('active');
}
function changeLanguage(language) {
    var classesToTranslate = ['.translate', '.option'];
    var elementsToTranslate = document.querySelectorAll(classesToTranslate);

    elementsToTranslate.forEach(function (element) {
        var link = element.querySelector('.translate-link');
        if (link) {
            if (language === 'pt') {
                link.textContent = link.getAttribute('data-pt');
            } else if (language === 'en') {
                link.textContent = link.getAttribute('data-en');
            }
        }

        if (language === 'pt') {
            element.textContent = element.getAttribute('data-pt');
        } else if (language === 'en') {
            element.textContent = element.getAttribute('data-en');
        }
    });
}


