function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;
    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                totalPrice = groupOfPeople * 8.45;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = groupOfPeople * 9.80;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = groupOfPeople * 10.46;
            }

            if (groupOfPeople >= 30) {
                totalPrice *= 0.85;
            }
            break;

        case "Business":
            if (dayOfWeek === "Friday") {
                totalPrice = groupOfPeople * 10.90;
                if (groupOfPeople >= 100) {
                    totalPrice -= 10 * 10.90;
                }
            } else if (dayOfWeek === "Saturday") {
                totalPrice = groupOfPeople * 15.60;
                if (groupOfPeople >= 100) {
                    totalPrice -= 10 * 15.60;
                }
            } else if (dayOfWeek === "Sunday") {
                totalPrice = groupOfPeople * 16;
                if (groupOfPeople >= 100) {
                    totalPrice -= 10 * 16;
                }
            }
            break;

        case "Regular":
            if (dayOfWeek === "Friday") {
                totalPrice = groupOfPeople * 15;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = groupOfPeople * 20;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = groupOfPeople * 22.50;
            }

            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(30, "Students", "Sunday");