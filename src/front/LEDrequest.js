const Statustxt = document.getElementById("status");

const LEDonoff = (highlow) => {
    const select = CurrentElement.selectedIndex;
    if (select == -1)
        return;

    const fetchdata = { 
        target: Number(CurrentElement.options[select].value), 
        onoff: highlow 
    };

    fetch(`http://${Config.Host}:${Config.Port}/LEDcontrol`, 
    {
        method: "POST",
        body: JSON.stringify(fetchdata),
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(res => res.json())
    .then((data) => 
    {
        console.log(data.message);
        Statustxt.innerHTML = highlow ? "LED Status: ON" : "LED Status: OFF";
    })
    .catch(err => console.log(err));
}