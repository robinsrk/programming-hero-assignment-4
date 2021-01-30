
// two functions called to create
form("fc-plus", "fc-minus", "fc-ticket", "firstClassPrice");
form("eco-plus", "eco-minus", "eco-ticket", "ecoPrice");

// this function takes id of two buttons "+" and "-" to track, ticket amount and price
function form(btnPlus, btnMinus, ticket, price) {

    // this section is for plus button and for adding ticket prices
    document.getElementById(btnPlus).addEventListener("click", function() {
        let ticketAmount = parseFloat(document.getElementById(ticket).value);
        ticketAmount++;
        document.getElementById(ticket).value = ticketAmount;
        let ticketPrice = parseFloat(document.getElementById(price).innerText);
        let subtotal = addAmount("subtotal", ticketPrice);
        vat = (subtotal * parseFloat(document.getElementById("vatPercentage").innerText)) / 100;
        updateAmount("total", subtotal + vat);
        updateAmount("vat", vat)
    })

    //this section is for minus button and for removing ticket prices

    document.getElementById(btnMinus).addEventListener("click", function() {
        let ticketAmount = parseFloat(document.getElementById(ticket).value);
        if (ticketAmount >= 1) {
            ticketAmount--;
            document.getElementById(ticket).value = ticketAmount;
            let ticketPrice = parseFloat(document.getElementById(price).innerText);
            let subtotal = addAmount("subtotal", -1 * ticketPrice);
            vat = (subtotal * parseFloat(document.getElementById("vatPercentage").innerText)) / 100;
            updateAmount("total", subtotal + vat);
            updateAmount("vat", vat)
        }
        else {
            alert("Invalid input");
        }
    })
}

// show book successcul page
hideUnhide("book-btn", "form", "success-form");

// go home
hideUnhide("home", "success-form", "form");

// takes a button to track, and two sections to toggle hide and show them
function hideUnhide(btn, hide, unhide) {

    document.getElementById(btn).addEventListener("click", function() {
        const total = parseFloat(document.getElementById("total").innerText);
        // checks if the uesr gave valid ticket counts
        if (total > 0) {
            document.getElementById(hide).style.display = "none";
            document.getElementById(unhide).style.display = "block";
            // when going homepage, clears all the input field
            if (btn == "home") {
                setText0("total");
                setText0("subtotal");
                setText0("vat");
                setValue0("fc-ticket");
                setValue0("eco-ticket");
            }
            else {
                document.getElementById("orderFcTicket").innerText = document.getElementById("fc-ticket").value;
                document.getElementById("orderEcoTicket").innerText = document.getElementById("eco-ticket").value;
                document.getElementById("orderTotal").innerText = document.getElementById("total").innerText;

            }
        }
        // shows error when both ticket count is 0 and trying to book
        else {
            alert("Please select any ticket");
        }
    })
}

//sets the innertext of and id to 0
function setText0(id) {
    document.getElementById(id).innerText = "0";
}

//sets the value of an id to 0
function setValue0(id) {
    document.getElementById(id).value = "0";
}

//add amount to an id with it's previous amount
function addAmount(id, amount) {
    const current = parseFloat(document.getElementById(id).innerText);
    const total = current + amount;
    document.getElementById(id).innerText = total;
    return total;

}

//update amount of an id without adding with it's previous amount
function updateAmount(id, amount) {
    document.getElementById(id).innerText = amount;
}
