// first class plus
document.getElementById("fc-plus").addEventListener("click", function() {
    let ticketAmount = parseFloat(document.getElementById("fc-ticket").value);
    ticketAmount++;
    document.getElementById("fc-ticket").value = ticketAmount;
    let ticketPrice = parseFloat(document.getElementById("firstClassPrice").innerText);
    let subtotal = addAmount("subtotal", ticketPrice);
    vat = (subtotal * parseFloat(document.getElementById("vatPercentage").innerText)) / 100;
    // document.
    // document.getElementById("total").innerText = subtotal + vat;
    updateAmount("total", subtotal + vat);
    updateAmount("vat", vat)
})

// first class plus

document.getElementById("fc-minus").addEventListener("click", function() {
    let ticketAmount = parseFloat(document.getElementById("fc-ticket").value);
    if (ticketAmount >= 1) {
        ticketAmount--;
        document.getElementById("fc-ticket").value = ticketAmount;
        let ticketPrice = parseFloat(document.getElementById("firstClassPrice").innerText);
        let subtotal = addAmount("subtotal", -1 * ticketPrice);
        vat = (subtotal * parseFloat(document.getElementById("vatPercentage").innerText)) / 100;
        // document.
        // document.getElementById("total").innerText = subtotal + vat;
        updateAmount("total", subtotal + vat);
        updateAmount("vat", vat)
    }
    else {
        alert("Invalid input");
    }
})

// book successful

document.getElementById("book-btn").addEventListener("click", function(){
    document.getElementById("form").style.display = "none";
    document.getElementById("success-form").style.display = "block";
})


function addAmount(id, amount) {
    const current = parseFloat(document.getElementById(id).innerText);
    const total = current + amount;
    document.getElementById(id).innerText = total;
    return total;

}
function updateAmount(id, amount) {
    document.getElementById(id).innerText = amount;
}
