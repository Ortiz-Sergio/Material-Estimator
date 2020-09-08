var intro_speed = 50;

var height_index = 0;
var height_text;

var length_index = 0;
var length_text;

var product_index = 0;
var product_text;

function onLoad() {
    console.log("Body load");
}

function calculateProduct(num1, num2) {
    return num1 * num2;
}

function displayHeight() {
    if (height_index < height_text.length) {
        document.getElementById("your-height").innerHTML +=
            height_text.charAt(height_index);
        height_index++;
        setTimeout(displayHeight, intro_speed);
    }
}

function displayLength() {
    if (length_index < length_text.length) {
        document.getElementById("your-length").innerHTML +=
            length_text.charAt(length_index);
        length_index++;
        setTimeout(displayLength, intro_speed);
    }
}

function displayProduct() {
    if (product_index < product_text.length) {
        document.getElementById("your-product").innerHTML +=
            product_text.charAt(product_index);
        product_index++;
        setTimeout(displayProduct, intro_speed);
    }
}

function estimatorLoad() {
    const user_height = localStorage.getItem("heightKey");
    const user_length = localStorage.getItem("lengthKey");

    height_text = 'Your height is '+user_height;
    length_text = 'Your length is '+user_length;

    product_text = 'The product of your input is '+
        calculateProduct(user_height, user_length);

    displayHeight();

    setTimeout(function() {
        displayLength();
    }, 1000);

    setTimeout(function() {
        displayProduct();
    }, 2000);
}

function setDimensions() {
    const new_height = document.getElementById("height").value;
    const new_length = document.getElementById("length").value;

    localStorage.setItem("heightKey", new_height);
    localStorage.setItem("lengthKey", new_length);

    window.location.href = "estimator.html";
}
