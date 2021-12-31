var millionaire;

function raiseSalary() {
    var salaryDiv = document.getElementById("mySalaryValue");
    var currentSalary = Number.parseInt(salaryDiv.textContent);
    var newSalary = currentSalary + Math.floor(Math.random() * 2000) + 50;
    salaryDiv.textContent = newSalary;

    if (newSalary > 10000 && !millionaire) {
        becomeMillionaire();
    }

    if (newSalary > 20000 && millionaire) {
        loseEverything()
    }

    var snd = new Audio("sounds/chime.wav");
    snd.play();
}

function becomeMillionaire() {
    millionaire = true;
    var millionaireDiv = document.getElementById("myMillionaireStatus");
    millionaireDiv.textContent = "You are a millionaire!!!"
    document.getElementById("wrapper").classList.add("money");
    var snd = new Audio("sounds/winner.wav");
    snd.play();
}

function loseEverything() {
    var millionaireDiv = document.getElementById("myMillionaireStatus");
    millionaireDiv.textContent = "Oh shit! You lost everything 'cause you're one greedy bastard!";

    var wrapper =  document.getElementById("wrapper")
   wrapper.classList.remove("money", "green");
   wrapper.classList.add("red");

    var moneyBtn = document.getElementById("moneyBtn");
    moneyBtn.remove();

    var salaryLabel = document.getElementById("mySalaryLabel");
    salaryLabel.remove()

    var salaryDiv = document.getElementById("mySalaryValue");
    salaryDiv.remove();

    var snd = new Audio("sounds/fail.wav");
    snd.play();
}

function setSalary() {
    var myDiv = document.getElementById("mySalaryValue");
    myDiv.textContent = Math.floor(Math.random() * 5000) + 200;
    millionaire = false;
}

window.onload = setSalary;
