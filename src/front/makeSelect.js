const CurrentElement = document.getElementById("gpioTarget");
let Config = null;

(async () => {
    const res = await fetch("../src/config/config.json");
    Config = await res.json();

    let inner = '';
    for (let i = 0; i < Config.gpioTarget.length; i++)
        inner += `<option value="${Config.gpioTarget[i]}" ${i == 0 ? "selected" : ""}> 
                        GPIO ${Config.gpioTarget[i]} 
                    </option>`;
    
    CurrentElement.innerHTML = inner;
})();