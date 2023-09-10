     const message = "I want to learn JavaScript 1000 times";
        let count = 0;
        function printMessage() {
            if (count < 1000) {
                const container = document.getElementById('output');
                container.innerHTML += message + "<br>";
                count++;
            } else {
                clearInterval(interval);
            }
        }
        printMessage();
        const interval = setInterval(printMessage, 10);