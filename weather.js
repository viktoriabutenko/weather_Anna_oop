class Weather {
    constructor(city) {
        this.city = city;
        this.key = '64cc962540a7dca65d39453e5e413743';
    }

    //data from API
    async weatherData() {
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.key);
        const data = await resp.json();
        return data;
    }
}