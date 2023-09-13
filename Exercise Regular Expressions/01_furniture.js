function furniture(input) {
    let boughtItems = [];
    let totalPrice = 0;
    for (const line of input) {

        if (line === 'Purchase') {
            break;
        }

        let pattern = />>(?<item>[A-Z][A-Za-z]*)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]*)/g;
        let matches = pattern.exec(line);

        if (matches !== null) {
            let item = matches.groups.item;
            let pricePerItem = matches.groups.price;
            let quantity = matches.groups.quantity;

            totalPrice += Number(pricePerItem) * Number(quantity);
            boughtItems.push(item);
        }

    }

    console.log('Bought furniture:');
    if (boughtItems.length > 0) {

        for (const item of boughtItems) {
            console.log(item);
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase'])