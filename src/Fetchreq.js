async function freq(method, path, body) {
    if (method == "POST") {
        try {
            console.log("Kuch bhi");
            const response = await fetch(`https://gbclothingbackend.onrender.com/${path}`, {
                mode: 'cors',
                "method": method,
                headers: {
                    'Content-Type': 'application/json',
                },
                "body": JSON.stringify(body),
            });
            console.log(response)
            return response;
        } catch (error) {
            console.error('Error sending data:', error);
            return "error"
        }
    }
    else {
        try {
            console.log("Kuch bhi");
            const response = await fetch(`https://gbclothingbackend.onrender.com/${path}`, {
                mode: 'cors',
                "method": method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            return response;
        } catch (error) {
            console.error('Error sending data:', error);
            return "error"
        }
    }
}

export default freq