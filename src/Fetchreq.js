async function freq(method, path, body) {
    if (method == "POST") {
        try {
            const response = await fetch(`https://gbclothingbackend.onrender.com/${path}`, {
                mode: 'cors',
                "method": method,
                headers: {
                    'Content-Type': 'application/json',
                },
                "body": JSON.stringify(body),
            });
            return response;
        } catch (error) {
            console.error('Error sending data:', error);
            return "error"
        }
    }
    else {
        try {
            const response = await fetch(`https://gbclothingbackend.onrender.com/${path}`, {
                mode: 'cors',
                "method": method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        } catch (error) {
            console.error('Error sending data:', error);
            return "error"
        }
    }
}

export default freq