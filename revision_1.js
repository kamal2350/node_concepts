const amount = 12;
if(amount <10){
    console.log("small number")
}
else{
    console.log("large number")
}
console.log(`${__filename}`);

// __filename gives the filename with directory Path
// __dirname gives the directory path but without filename
//process gives the info about the env where the program is being executed
// module info about the current file(module)
setInterval(() => {
    console.log(new Date().getTimezoneOffset())
}, 1000);