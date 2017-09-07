function sayHello() {



    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
    let framework = (document.getElementById("framework") as HTMLInputElement).value;

    framework = '3232 angel dassdds';
    return `Hello from ${compiler} and ${framework}!`;
}