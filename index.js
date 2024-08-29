function greet() {
    let name = prompt ("What is your name?");
    console.log("Hello, " + name);
    alert("Hello, Sally");
    
    let age = parseInt(prompt ("How old are you?"));
    console.log(age);

    let hasHadBirthday = confirm("Have you had a birthday yet this year?");
    console.log(hasHadBirthday);
    
    let currentYear = new Date().getFullYear();

    let birthYear;
    if (hasHadBirthday) {
        console.log(birthYear = currentYear - age);
    } else {
        console.log(birthYear = currentYear - age - 1);
    };

    alert("You were born in" + birthYear);
}