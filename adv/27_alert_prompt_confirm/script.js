alert("hello your script works!");

let a = prompt("Enter a here:", "578");

a = Number.parseInt(a);

alert("you entered a of type " + (typeof a))
// document.write(a);

let write = confirm("Do you want it to write on the page")
if (write) {
    document.write(a);
}
else {
    document.write("Please allow me to write")
}