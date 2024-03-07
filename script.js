
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;

    if (name === "" || email === "" || age === "" || password === "") {
        alert("All fields are required!");
        return false;
    }

    if (isNaN(age) || age < 0) {
        alert("Please enter a valid age!");
        return false;
    }


    return true;
}
