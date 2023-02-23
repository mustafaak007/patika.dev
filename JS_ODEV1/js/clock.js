
let yazi = document.querySelector("#isim");
yazi.innerHTML= prompt("Kullanıcı Adını Giriniz", "Adınız");

setInterval(showTime,1000);

function showTime(){
    let gunler = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    const tarih = new Date();
    let yazi = `${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${gunler[(tarih.getDay())-1]}`;
    document.querySelector("#myClock").innerHTML=yazi;
}