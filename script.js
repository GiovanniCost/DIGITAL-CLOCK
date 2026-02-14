const citySelection = document.getElementById("city-selection");
const WorldTimes = Intl.supportedValuesOf("timeZone");
const localTime = Intl.DateTimeFormat().resolvedOptions().timeZone;
const clock = document.querySelector("clock")


WorldTimes.forEach((hours) => {
  let options = document.createElement("option");
  options.value = hours;
  options.textContent = hours;

  if (hours === localTime) {
    options.selected = true;
  }
  citySelection.appendChild(options);
});


function timeUpdate() {

  const selectedTime = citySelection.value
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  const formattedTime = `${hours} : ${minutes} : ${secondes}`;


  document.querySelector(".clock").innerText = formattedTime;

  // Dentro da função atualizarRelogio:

  const fullDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateInFull = date.toLocaleDateString("pt-BR", fullDate);

  document.querySelector("#date").innerHTML = dateInFull;
  document.querySelector("#date").innerText = formattedDate;

  citySelection.addEventListener("change", timeUpdate)
}



setInterval(timeUpdate,1000)

timeUpdate()



  //   let day = date.getDay();
  //   let month = date.getMonth();
  //   let year = date.getFullYear();

  //   day = day < 10 ? "0" + day : day;
  //   month = month < 10 ? "0" + ( month + 1) : month +1;
  //   year = year < 10 ? "0" + year : year;

  //   const formattedDate = `${day} / ${month} / ${year}`
  // 