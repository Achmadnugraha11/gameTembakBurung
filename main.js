var counter = 1;
var start = "";
var end = "";
var totalWaktu = "";

 if (localStorage.getItem("topScore") !== null) {
   var topScore = localStorage.getItem("topScore");
   document.getElementById("topScore").innerHTML = topScore + "s";
 }

// 1. tampilkan gambar burung secara random
tampilkanGambar();
function tampilkanGambar() {
   var top = Math.random() * 400;
   var left = Math.random() * 400;

   start = new Date().getTime();

   document.getElementById("burung").src = "burung.png";
   document.getElementById("burung").style.height = 70 + "px";
   document.getElementById("burung").style.width = 70 + "px";
   document.getElementById("burung").style.top = top + "px";
   document.getElementById("burung").style.left = left + "px";
   document.getElementById("burung").style.position = "relative";
   document.getElementById("burung").style.display = "block";
}

// 2. kalo burung di tembak, ganti gambar jadi bom
document.getElementById("burung").onclick = function() {
   document.getElementById("burung").src = "dor.png";
   document.getElementById("burung").style.height= 120 + "px";
   document.getElementById("burung").style.width = 120 + "px";
   
   setTimeout(sembunyikanGambar, 500);

   // 3. setelah 5x tembakan, hitung total waktunya
   if (counter < 5) {
      setTimeout(tampilkanGambar, 600);
      counter++;
   } else {
      setTimeout(function() {
         alert("Game over");
      }, 100);
      
      end = new Date().getTime();
      totalWaktu = (end - start) / 1000;
      document.getElementById("totalWaktu").innerHTML = totalWaktu + "s";

      setTopscore();
   }
}

function sembunyikanGambar() {
   document.getElementById("bird").style.display = "none";
}

// 4. Set top Score
function setTopscore() {
   if(localStorage.getItem("topScore") == null) {
      localStorage.setItem("topScore", totalWaktu);
      document.getElementById("topScore").innerHTML = totalWaktu + "s";
   } else if (totalWaktu < topScore) {
      localStorage.setItem("topScore", totalWaktu);
      document.getElementById("topScore").innerHTML = totalWaktu + "s";
   } else {

   }
}