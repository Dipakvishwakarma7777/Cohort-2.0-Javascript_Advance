async function WeatherApp(city) {
  let API_KEY = `aa83882a9027ce69114601550b9f93a0`;
  let API_Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  let rowData = await fetch(API_Url);
  let realData = await rowData.json();
  console.log(realData.main);
}
WeatherApp("satara");
