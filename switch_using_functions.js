const role = "MANAGER"; 
const statusCode = 404;
const dayNumber = 6; 
const paymentMode = "CARD"; 

function roleBasedAccess(){
switch (role) {
    case "ADMIN":
        console.log("Full system access");
        break;
    case "MANAGER":
        console.log("Manage team access");
        break;
    case "USER":
        console.log("Limited access");
        break;
    case "GUEST":
        console.log("View only access");
        break;
    default:
        console.log("Invalid role");
}
}

function paymentModeProcessing(){
    
switch (paymentMode) {
    case "UPI":
        console.log("Redirecting to UPI Gateway");
        break;
    case "CARD":
        console.log("Processing Card Payment");
        break;
    case "NETBANKING":
        console.log("Redirecting to Bank");
        break;
    case "COD":
        console.log("Cash on Delivery Selected");
        break;
    default:
        console.log("Invalid Payment Mode");
}
}

function httpCodeStimulator(){

     

switch (statusCode) {
    case 200:
        console.log("OK: Request Successful");
        break;
    case 201:
        console.log("Created Successfully");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized Access");
        break;
    case 404:
        console.log("Page Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown Status Code");
}
}

function dayOffer(){ 

switch (dayNumber) {
    case 1:
        console.log("Monday Offer: 10% Discount");
        break;
    case 2:
        console.log("Tuesday Offer: Free Delivery");
        break;
    case 3:
        console.log("Wednesday Offer: Buy 1 Get 1");
        break;
    case 4:
        console.log("Thursday Offer: Cashback 5%");
        break;
    case 5:
        console.log("Friday Offer: 15% Discount");
        break;
    case 6:
        console.log("Weekend Mega Sale");
        break;
    case 7: 
        console.log("Weekend Mega Sale");
        break;
    default:
        console.log("Invalid Day");
}
}

roleBasedAccess();
dayOffer();
httpCodeStimulator();
paymentModeProcessing();