const role = "MANAGER"; 

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