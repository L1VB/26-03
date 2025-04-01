function scrollToSection(targetId) {
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    document.getElementById("upButton").style.display = "block";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("upButton").style.display = "none";
}
