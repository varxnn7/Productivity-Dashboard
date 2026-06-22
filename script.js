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
        let result = eval(display.value);

        if(result === Infinity || isNaN(result))
        {
            throw new Error();
        }

        display.value = result;
    }
    catch
    {
        alert("Invalid Expression");
        display.value = "";
    }
}

// Keyboard Support

document.addEventListener("keydown", (e) =>
{
    if(
        "0123456789+-*/.".includes(e.key)
    )
    {
        appendValue(e.key);
    }

    if(e.key === "Enter")
    {
        calculate();
    }

    if(e.key === "Backspace")
    {
        display.value =
        display.value.slice(0,-1);
    }

    if(e.key === "Escape")
    {
        clearDisplay();
    }
});

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

    document.getElementById("date")
    .innerText =
    now.toDateString();
}

setInterval(updateClock,1000);

updateClock();

// Notes

const notes =
document.getElementById("notes");

notes.value =
localStorage.getItem("notes") || "";

// Auto Save

notes.addEventListener("input", () =>
{
    localStorage.setItem(
        "notes",
        notes.value
    );
});

function saveNotes()
{
    localStorage.setItem(
        "notes",
        notes.value
    );

    alert("Notes Saved Successfully");
}