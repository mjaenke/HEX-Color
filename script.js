function isValidHex(x) {
    if (x.length != 6) {                
        return false;
    } else {
        const test = document.createElement('div')
        test.style.color = "#" + x;
        return test.style.color !== '';
    }
}

function myFunction() {
    var hex = document.getElementById('color')
    console.log(hex.value)
    if (!isValidHex(hex.value)) {
        hex.style.outline = "3px solid red";
    } else {
        hex.style.outline = "none";
        document.body.style.backgroundColor = "#" + hex.value;
    }
}