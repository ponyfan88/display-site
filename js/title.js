setInterval(randomEnvironmentText, 1000);

const environmentText = document.getElementById("replace-quickly")

let selectedTextIndex = 0;

function randomEnvironmentText() {
    
    selectedTextIndex++;

    if (selectedTextIndex >= environmentTexts.length) {
        selectedTextIndex = 0;
    }
    
    environmentText.innerText = environmentTexts[selectedTextIndex];
}

environmentTexts = [
    "professional",
    "epic",
    "really cool",
    "awesome",
    "fast",
    "amazing",
    "helpful",
    "friendly",
    "fast",
    "funny",
    "cool"
]