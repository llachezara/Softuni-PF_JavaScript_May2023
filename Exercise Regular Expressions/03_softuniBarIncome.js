function demo(input) {
    let totalIncome = 0;

    for (const line of input) {

        if (line === "end of shift") {
            break;
        }

        let pattern = /[^|%$.]*%(?<customer>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|%$.]*\|(?<count>[0-9]+)\|[^|%$.0-9]*(?<price>[0-9]+\.?[0-9]*)\$/g;
        let matches = pattern.exec(line);
        console.log(matches,`'${line}'`);

        if (matches !== null) {

            let currCustomer = matches.groups.customer;
            let product = matches.groups.product;
            let quantity = matches.groups.count;
            let price = matches.groups.price;

            let totalPricePerCurrProduct = Number(quantity) * Number(price);
            console.log(`${currCustomer}: ${product} - ${totalPricePerCurrProduct.toFixed(2)}`);
            totalIncome += totalPricePerCurrProduct;
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
demo(['%George%<Croissant>|2|10.3$',
    "%Peter%<Gum>|1|1.3$",
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
