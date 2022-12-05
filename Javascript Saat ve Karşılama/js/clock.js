function showTime() {
  const tarih = new Date();

  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();

  document.getElementById("myClock").innerHTML =
    saat + ":" + dakika + ":" + saniye;

  dakika = checkTime(dakika);
  saniye = checkTime(saniye);

  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
showTime();
