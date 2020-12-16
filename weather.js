class Weather {
    constructor(city) {
        this.city = city;
        this.key = '18e260f52d2a7b8a210e7bf4dbab8e47';
    }

    //data from API
    async weatherData() {
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.key);
        const data = await resp.json();
        return data;
    }
}