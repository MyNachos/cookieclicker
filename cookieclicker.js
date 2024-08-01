let cookieCount = 0;
let clickCount = 1;
let autoClickerCount = 0;
let autoClickerCost = 500;
let clickCost = 1000;

//Function to handle cookie click
function clickCookie() {
    cookieCount += clickCount;
    document.getElementById("cookieCount").innerText = cookieCount;
}

//Function to buy double clicks upgrade
function buyDoubleClicks() {
    let cost = 50;
    if (cookieCount >= cost) {
        cookieCount -= cost;
        clickCount *= 2; // Corrected from 100 to 2
        document.getElementById("cookieCount").innerText = cookieCount;
        // Disable the button after purchase
        document.querySelector("button[onclick='buyDoubleClicks()']").disabled = true;
        document.getElementById("Clicks").textContent = `Cookies Per Click: ${clickCount}`;
    } else {
        alert("Not enough cookies!");
    }
}

//Function to buy triple clicks upgrade
function buyTripleClicks() {
    let cost = 200;
    if (cookieCount >= cost) {
        cookieCount -= cost;
        clickCount *= 3;
        document.getElementById("cookieCount").innerText = cookieCount;
        //Disable the button after purchase
        document.querySelector("button[onclick='buyTripleClicks()']").disabled = true;
        document.getElementById("Clicks").textContent = `Cookies Per Click: ${clickCount}`;
    } else {
        alert("Not enough cookies!");
    }
}

//Function to buy an auto clicker upgrade
function buyAutoClicker() {
    if (autoClickerCount > 0) {
        if (cookieCount >= autoClickerCost) {
            cookieCount -= autoClickerCost;
            autoClickerCount++;
            document.getElementById("cookieCount").innerText = cookieCount;
            // Increase cost of auto clicker
            autoClickerCost = Math.floor(autoClickerCost * 1.2);
        } else {
            alert("Not enough cookies.");
        }
    } else {
        if (cookieCount >= autoClickerCost) {
            cookieCount -= autoClickerCost;
            autoClickerCount++;
            document.getElementById("cookieCount").innerText = cookieCount;
            startAutoClicker();
            //increase cost of auto clicker
            autoClickerCost = Math.floor(autoClickerCost * 1.2);
        }
    }
    document.getElementById("CPS").textContent = `CPS: ${autoClickerCount}`;
    document.getElementById("a1").textContent = `+1 Click Per Second (${autoClickerCost} Cookies)`;
}

//Function to start the auto clicker
function startAutoClicker() {
    if (autoClickerCount === 1 || autoClickerCount > 1) {
        setInterval(() => {
            cookieCount += autoClickerCount;
            document.getElementById("cookieCount").innerText = cookieCount;
        }, 1000);
    }
}

//Function to buy +1 click per click upgrade
function buy1Click() {
    let cost = 1000;
    if (cookieCount >= cost) {
        cookieCount -= cost;
        clickCount += 1;
        document.getElementById("Clicks").textContent = `Cookies Per Click: ${clickCount}`;
        clickCost = Math.floor(clickCost * 3);
    } else {
        alert("Not enough cookies!");
    }
}

//Function to buy x5 clicks upgrade
function buyClicks5() {
    let cost2 = 3000;
    if (cookieCount >= cost2) {
        cookieCount -= cost2;
        clickCount *= 5;
        document.getElementById("Clicks").textContent = `Cookies Per Click: ${clickCount}`;
        //disable the button after purchase
        document.querySelector("button[onclick='buyClicks5()']").disabled = true;
    } else {
        alert("Not enough cookies!");
    }
}

//Function to triple the CPS (Clicks Per Second)
function tripleCPS() {
    let cost3 = 5000;
    if (cookieCount >= cost3) {
        cookieCount -= cost3;
        autoClickerCount *= 3;
        document.getElementById("cookieCount").innerText = cookieCount;
        // Disable the button after purchase
        document.querySelector("button[onclick='tripleCPS()']").disabled = true;
    } else {
        alert("Not enough cookies.");
    }
    document.getElementById("CPS").textContent = `CPS: ${autoClickerCount}`;
}
