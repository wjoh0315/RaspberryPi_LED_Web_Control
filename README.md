# RaspberryPi_LED_Web_Control

## Directory tree
```
./var/www (in apache web server)
|-- html
|   `-- LEDonoff.html
`-- src
    |-- node_modules
    |-- package.json
    |-- package-lock.json
    |-- back
    |   |-- router.js
    |   `-- server.js
    |-- config
    |   `-- config.json
    `-- front
        |-- LEDrequest.js
        `-- makeSelect.js
```

## Config
```
{
    "Host": "[RaspberryPi IP]"
    "Port": 8080,
    "gpioTarget": [ 12, 24 ]
}
```

`Host`: RaspberryPi IP e.g. `192.168.219.108`   
`Port`: Server port   
`gpioTarget`: Registered GPIO pins (Can be added)

## Getting Start
### 1. Install npm packages
Enter the following npm command in terminal.
```
pi@raspberrypi:/var/www/src $ npm install
```

### 2. Server Start
(in apache web server)   
Enter the following node command in terminal.
```
pi@raspberrypi:/var/www $ sudo node ./src/back/server.js
```

### 3. Enter URL in browser
```
http://[Host IP]/LEDonoff.html
```
then, It'll be like this.
![image](https://user-images.githubusercontent.com/65387631/120104162-1ebaaf80-c18e-11eb-9b06-fe4ac1dc48be.png)

## Blog
Naver blog [퍼텐셜의 개발 일지](https://blog.naver.com/PostView.nhn?blogId=wjoh0315&Redirect=View&logNo=222375428753&categoryNo=27&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=189979) in korea

