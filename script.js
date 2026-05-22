function selectCourse(courseName) {

    const result = document.getElementById("selected-course");

    result.innerHTML =
        "✅ You have successfully selected: " + courseName;

    result.style.color = "#38bdf8";
}