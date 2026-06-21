// Calculator

const display =
document.getElementById("display");

function appendValue(value)
{
    display.value += value;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try
    {
        display.value =
        eval(display.value);
    }
    catch
    {
        alert("Invalid Expression");
    }
}

// Clock

function updateClock()
{
    const now = new Date();

    const hours =
    String(now.getHours()).padStart(2,"0");

    const minutes =
    String(now.getMinutes()).padStart(2,"0");

    const seconds =
    String(now.getSeconds()).padStart(2,"0");

    document.getElementById("clock")
    .innerText =
    `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock,1000);

updateClock();

// Notes

const notes =
document.getElementById("notes");

notes.value =
localStorage.getItem("notes") || "";

function saveNotes()
{
    localStorage.setItem(
        "notes",
        notes.value
    );

    alert("Notes Saved");
}