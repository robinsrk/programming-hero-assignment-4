// first class

document.getElementById("fc-plus").addEventListener("click", function() {
    let ticketAmount = parseFloat(document.getElementById("fc-ticket").value);
    ticketAmount++;
    document.getElementById("fc-ticket").value = ticketAmount;
    let ticketPrice = parseFloat(document.getElementById("firstClassPrice").innerText) * ticketAmount;
    console.log(ticketPrice);
})

function updateAmount(id, amount) {
    const current = parseFloat(document.getElementById(id).innerText);
    

}
