document.addEventListener("DOMContentLoaded", () => {
    const outdoorRadios = document.getElementsByName("outdoor");
    const dietRadios = document.getElementsByName("diet");
    const outdoorActivities = document.getElementById("outdoor-activities");
    const indoorActivities = document.getElementById("indoor-activities");
    const dietDetails = document.getElementById("diet-details");
    const form = document.getElementById("survey-form");

    outdoorRadios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            if (e.target.value === "yes") {
                outdoorActivities.classList.remove("hidden");
                indoorActivities.classList.add("hidden");
            } else {
                indoorActivities.classList.remove("hidden");
                outdoorActivities.classList.add("hidden");
            }
        });
    });

    dietRadios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            if (e.target.value === "yes") {
                dietDetails.classList.remove("hidden");
            } else {
                dietDetails.classList.add("hidden");
            }
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;

        if (!name || !age) {
            alert("Please complete all required fields.");
            return;
        }

        alert("Survey submitted successfully! Thank you, " + name + ".");
        form.reset();
        outdoorActivities.classList.add("hidden");
        indoorActivities.classList.add("hidden");
        dietDetails.classList.add("hidden");
    });
});
