function greet() {
    let name = prompt ("What is your name?");
    console.log("Hello, " + name);
    alert("Hello, Sally");
    
    let age = parseInt(prompt ("How old are you?"));
    console.log(age);

    let hasHadBirthday = parseInt(prompt ("Have you had a birthday yet this year?"));
    console.log(hasHadBirthday);

    var bucket = 0
    
    if (hasHadBirthday) {
        console.log(birthYear = currentYear - age);
    } else {
        console.log(birthYear = currentYear - age - 1);
    }

    let currentyear = new Date().getFullYear();
     

    alert("You were born in" + birthYear);
}