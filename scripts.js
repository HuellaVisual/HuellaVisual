document.addEventListener("DOMContentLoaded", function () {
    // Generar miniaturas de cursos dinámicamente
    const coursesSection = document.querySelector(".courses-section");

    for (let i = 1; i <= 50; i++) {
        const courseThumbnail = document.createElement("div");
        courseThumbnail.classList.add("course-thumbnail");
        courseThumbnail.innerHTML = `
            <img src="curso${i}.jpg" alt="Curso ${i}">
            <h3>Curso ${i}</h3>
            <p>Descripción del curso ${i}</p>
            <a href="registro.html" style="background-color: #00B2BD; width: 50%;">$10.00</a>
        `;
        coursesSection.appendChild(courseThumbnail);
    }

    // Generar miniaturas de publicaciones del blog dinámicamente
    const blogSection = document.querySelector(".blog-section");

    for (let i = 1; i <= 3; i++) {
        const blogThumbnail = document.createElement("div");
        blogThumbnail.classList.add("blog-thumbnail");
        blogThumbnail.innerHTML = `
            <img src="blog${i}.jpg" alt="Blog ${i}">
        `;
        blogSection.appendChild(blogThumbnail);
    }
});
