// Show popup with project/internship details
function showPopup(type) {
    const popup = document.getElementById("popup");
    const details = document.getElementById("popup-details");

    let content = "";
    if (type === "car") {
        content = `
            <h3>Car Showroom Website</h3>
            <p>A platform for managing car inventory and providing a seamless experience for customers and showroom owners.</p>
            <ul>
                <li>Built using Django for backend and MySQL for database management.</li>
                <li>Implemented user-friendly interfaces with HTML, CSS, and JavaScript.</li>
            </ul>`;
    } else if (type === "todo") {
        content = `
            <h3>To-Do List App</h3>
            <p>A mobile-friendly app for managing daily tasks efficiently.</p>
            <ul>
                <li>Developed using Flutter framework for cross-platform compatibility.</li>
                <li>Integrated SQLite for data persistence and management.</li>
            </ul>`;
    } else if (type === "hotel") {
        content = `
            <h3>Hotel Management System</h3>
            <p>A software application designed to manage hotel operations effectively.</p>
            <ul>
                <li>Features include room booking, payment processing, and guest records.</li>
                <li>Created using Django, HTML, CSS, and JavaScript for a responsive UI.</li>
            </ul>`;
    } else if (type === "internship") {
        content = `
            <h3>Prodigy InfoTech Internship</h3>
            <p>Role: Full Stack Web Development Intern (September 2024 - November 2024)</p>
            <h4>Responsibilities:</h4>
            <ul>
                <li>Developed an e-commerce platform with responsive design.</li>
                <li>Collaborated with a team to implement features like product catalogs and user authentication.</li>
                <li>Optimized website performance to reduce load time by 20%.</li>
            </ul>
            <h4>Technologies Used:</h4>
            <ul>
                <li>Frontend: HTML, CSS, JavaScript, ReactJS</li>
                <li>Backend: Node.js, Express</li>
                <li>Database: MongoDB</li>
            </ul>
            <h4>Achievements:</h4>
            <ul>
                <li>Recognized as "Best Intern of the Month" for exemplary performance.</li>
                <li>Delivered a fully functional e-commerce website within project deadlines.</li>
            </ul>`;
    }

    details.innerHTML = content;
    popup.classList.add("visible");
}

// Close popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("visible");
}

// Scroll animations
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            section.classList.add("visible");
        }
    });
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});


























// // Show popup with project/internship details
// function showPopup(type) {
//     const popup = document.getElementById("popup");
//     const details = document.getElementById("popup-details");

//     let content = "";
//     if (type === "car") {
//         content = "<h3>Car Showroom Website</h3><p>A platform for managing car inventory.</p>";
//     } else if (type === "todo") {
//         content = "<h3>To-Do List App</h3><p>A mobile app to manage daily tasks.</p>";
//     } else if (type === "hotel") {
//         content = "<h3>Hotel Management System</h3><p>An app to manage bookings and guests.</p>";
//     } else if (type === "internship") {
//         content = "<h3>Internship</h3><p>Details about Prodigy InfoTech internship.</p>";
//     }

//     details.innerHTML = content;
//     popup.classList.add("visible");
// }

// // Close popup
// function closePopup() {
//     const popup = document.getElementById("popup");
//     popup.classList.remove("visible");
// }

// // Scroll animations
// document.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll("section");
//     sections.forEach(section => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.9) {
//             section.classList.add("visible");
//         }
//     });
// });

// // Handle contact form submission
// document.getElementById("contact-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Thank you for reaching out! I'll get back to you soon.");
// });
