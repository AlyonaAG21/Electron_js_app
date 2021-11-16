try {
    const electron = require('electron');
    const net = electron.net;
    const fetchMeals = async () => {
        const response = await fetch('http://127.0.0.1:6532/test');

        if (!response.ok) {
            console.log('error');
            throw new Error('Something went wrong!');
        }

        const response_data = await response.json();
        console.log(response_data.text);
        
        var elem = document.getElementById('response_data');
        elem.innerHTML = response_data.text;
    }
    fetchMeals();
} catch (error) {
    setError(error.message)
}
