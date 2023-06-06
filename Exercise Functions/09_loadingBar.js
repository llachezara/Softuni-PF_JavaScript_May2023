function printLoadingBar(percentage) {
    let output = makeLoadingBar(percentage);

    return output;

    function makeLoadingBar(num) {
        let percentegesCount = num / 10;
        let dotsCount = 10 - percentegesCount;

        let bar = '';
        let text = '';

        if (percentage < 100) {
            bar = `${num}% [${'%'.repeat(percentegesCount)}${'.'.repeat(dotsCount)}]`;
            text = '\nStill loading...';
        } else if (percentage === 100) {
            bar = `${num}%`;
            text = ' Complete!';
        }

        let result = bar + text;
        return result;
    }
}
printLoadingBar(-3)