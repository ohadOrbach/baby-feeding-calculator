function calculateFormulaAmount() {
    let months = document.getElementById("months").value;
    let days = document.getElementById("days").value;
    let weight = document.getElementById("weight").value * 2.20462; // Convert kg to pounds for the formula

    let totalFormulaOunces = 0;
    let feedingsPerDay = 0;
    if (months < 1) {
        // For the first month, considering a range of intake
        totalFormulaOunces = weight * 2.5; // General formula for 2-6 months
        feedingsPerDay = 8; // Approximate feedings for a newborn
        if (days <= 7) totalFormulaOunces = weight * 2; // Rough estimate for first week
    } else if (months >= 1 && months < 6) {
        totalFormulaOunces = weight * 2.5; // General formula for 2-6 months
        feedingsPerDay = 6; // As babies grow, the number of feedings might reduce
    } else {
        document.getElementById("results").innerText = "Baby might be ready for solids. Consult a pediatrician.";
        return;
    }

    let totalFormulaML = Math.round(totalFormulaOunces * 29.5735); // Convert ounces to milliliters and round
    let formulaPerFeeding = Math.round(totalFormulaML / feedingsPerDay);

    document.getElementById("results").innerHTML = `
        Total formula required per day: <strong>${totalFormulaML} mL</strong><br>
        Amount per feeding: <strong>${formulaPerFeeding} mL</strong><br>
        Total feedings per day: <strong>${feedingsPerDay}</strong>
    `;
}
