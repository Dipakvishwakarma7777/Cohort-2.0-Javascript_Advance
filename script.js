function weatherApp(city) {
  const API_key = `aa83882a9027ce69114601550b9f93a0`;
  const API_Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

  fetch(API_Url)
    .then((rowData) => {
      return rowData.json();
    })
    .then((realData) => {
      console.log(realData);
    });
}

weatherApp("bhopal");
