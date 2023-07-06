function demo(input) {

    let companies = {};

    for (const data of input) {

        let [company, employeeID] = data.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }

        if (!companies[company].includes(employeeID)) {
            companies[company].push(employeeID);
        }

    }

    let sortedCompanies = Object.keys(companies).sort((a, b) => a.localeCompare(b))

    for (const company of sortedCompanies) {

        let employeeIDs = companies[company];

        console.log(company);

        employeeIDs.forEach(element => {
            console.log(`-- ${element}`);
        });

    }
}
demo([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])