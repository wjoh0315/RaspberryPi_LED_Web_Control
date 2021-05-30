const Router = require("express").Router();
const GPIO = require("pigpio").Gpio;

Router.post("/LEDcontrol", (req, res) => {
    let bodydata = '';

    req.on("data", data => bodydata += data);
    req.on("end", () => {
        res.set("Content-Type", "application/json; charset=utf-8");
        console.log(`[Node.js Server]> POST request body: \n\r${bodydata}\n\r`);

        try
        {
            const JSONdata = JSON.parse(bodydata);
            const TargetGPIO = new GPIO(Number(JSONdata.target), {
                mode: GPIO.OUTPUT
            });
            TargetGPIO.digitalWrite(Number(JSONdata.onoff));
            res.json(200, {
                message: "200 OK"
            });
            console.log("[Node.js Server]> response success\n\r")
        }
        catch (err)
        {
            console.log(`[Node.js Server]> POST response error \n\r${err}\n\r`);
            res.json(400, {
                message: "400 error"
            });
        }
    })
});

module.exports = Router;