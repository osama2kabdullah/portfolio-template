function loadProjects() {
    fetch("/api/projects")
        .then(res => res.text())
        .then(html => {
            document.getElementById("dynamic-content").innerHTML = html;
        });
}

function loadContact() {
    fetch("/api/contact")
        .then(res => res.text())
        .then(html => {
            document.getElementById("dynamic-content").innerHTML = html;
        });
}
