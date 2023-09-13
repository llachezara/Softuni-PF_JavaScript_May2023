function demo(arrayOfBarcodes) {
    let barcodesCount = arrayOfBarcodes.shift();

    let pattern = /@[#]+(?<item>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})@[#]+/;

    for (const string of arrayOfBarcodes) {
        let match = pattern.exec(string);


        if (match) {

            let item = match.groups.item;
            let productGroup = '';
            for (let index = 0; index < item.length; index++) {

                let symbol = item[index];
                if (!isNaN(Number(symbol)) ) {
                    productGroup += symbol;
                }

            }

            if (productGroup.length > 0) {
                console.log(`Product group: ${productGroup}`);
            }else{
                console.log(`Product group: 00`);
            }
            
        } else {
            console.log('Invalid barcode');
        }
    }
}
demo(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
;