function sortBy2Criteria(array) {
    array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else{
            return a.localeCompare(b);
        }
    });

    console.log(array.join('\n'));
}
sortBy2Criteria(['alpa',
    'beta',
    'gama']
)