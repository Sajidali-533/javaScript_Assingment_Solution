let packageType = "Standard";
switch (packageType) {
    case 'Standard':
        console.log("might take 3-5 days");
        break;
    case 'express':
        console.log("might take 1-2 days");
    case 'overnight':
        break;
        console.log("would be delivered te next day");
        break;
    default:
        console.log("Enter valid pakage type!");
        break;
}