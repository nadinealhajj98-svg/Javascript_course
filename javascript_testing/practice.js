document.getElementById("roleInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let userRole = event.target.value.trim(); 
        let dietPlan;

        switch (userRole) {
            case "Employee":
                dietPlan = "Dietry Services.";
                break;
            case "Enrolled Member":
                dietPlan = "Dietry Services and one-on-one interaction";
                break;
            case "Subscriber":
                dietPlan = "Only Dietry Services.";
                break;
            case "Non Subscriber":
                dietPlan = "Need to enroll or at least subscribe first to avail this facility.";
                break;
            default:
                dietPlan = "Unknown role. Please enter a valid one.";
        }

        console.log("You have access to:", dietPlan);
        alert("You have access to: " + dietPlan);
    }
});
