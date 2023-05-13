function demo(input){
let isLeap = (input%4===0 && input%100!==0) || input%400===0;
if (isLeap) {
    console.log('yes');
}else{
    console.log('no');
}
}
demo(4);