function demo(input) {
    let startIndexOfFileName = input.lastIndexOf('\u005C') + 1;
    let fileNameAndExtention = input.substring(startIndexOfFileName, input.length);

    let lastIndexOfDot = fileNameAndExtention.lastIndexOf('.');
    let fileName = fileNameAndExtention.substring(lastIndexOfDot, 0);
    let extention = fileNameAndExtention.substring(lastIndexOfDot + 1, fileNameAndExtention.length);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);
}
demo('C:\\Internal\\training-internal\\Template.nhk.pptx')