// first class plus
form("fc-plus", "fc-minus", "fc-ticket", "firstClassPrice");
form("eco-plus", "eco-minus", "eco-ticket", "ecoPrice");
function form(btnPlus, btnMinus, ticket, price) {

    document.getElementById(btnPlus).addEventListener("click", function() {
        let ticketAmount = parseFloat(document.getElementById(ticket).value);
        ticketAmount++;
        document.getElementById(ticket).value = ticketAmount;
        let ticketPrice = parseFloat(document.getElementById(price).innerText);
        let subtotal = addAmount("subtotal", ticketPrice);
        vat = (subtotal * parseFloat(document.getElementById("vatPercentage").innerText)) / 100;
        // document.
        // document.getElementById("total").innerText = subtotal + vat;
        updateAmount("total", subtotal + vat);
        updateAmount("vat", vat)
    })

    // first class plus

    document.getElementById(btnMinus).addEventListener("click", function() {
        let ticketAmount = parseFloat(document.getElementById(ticket).value);
        if (ticketAmount >= 1) {
            ticketAmount--;
            document.getElementById(ticket).value = ticketAmount;
            let ticketPrice = parseFloat(document.getElementById(price).innerText);
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
}
// book successful
hideUnhide("book-btn", "form", "success-form");
hideUnhide("home", "success-form", "form");

// go home

function hideUnhide(btn, hide, unhide) {

    document.getElementById(btn).addEventListener("click", function() {
        document.getElementById(hide).style.display = "none";
        document.getElementById(unhide).style.display = "block";
    })
}
function addAmount(id, amount) {
    const current = parseFloat(document.getElementById(id).innerText);
    const total = current + amount;
    document.getElementById(id).innerText = total;
    return total;

}
function updateAmount(id, amount) {
    document.getElementById(id).innerText = amount;
}
