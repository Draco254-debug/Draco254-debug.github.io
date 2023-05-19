function payment() {
    //GET THE VALUES ENTERED BY THE USER
    var cardnumber = document.getElementById("card-number").value;
    var cardholder = document.getElementById("card-holder").value;
    var cvv = document.getElementById("cvv").value;
    var expiration = document.getElementById("expiry-date").value;
    var amount = document.getElementById("amount").value;
    //PERFORM PAYMENT VALIDATION HERE (E.G., CHECK AGAINST STORED USERNAMES AND PASSWORDS)
    //REDIRECT THE USER TO THE INDEX.HTML PAGE
    window.location.href = "Home.html";
}
  
