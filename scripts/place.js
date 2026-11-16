const temperature = 8;
const windSpeed = 12;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

const weatherReadings = [
    { id: "temperature", value: `${temperature} °C` },
    { id: "wind-speed", value: `${windSpeed} km/h` },
    {
        id: "wind-chill",
        value: temperature <= 10 && windSpeed > 4.8
            ? `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`
            : "N/A"
    }
];

weatherReadings.forEach(({ id, value }) => {
    document.getElementById(id).textContent = value;
});