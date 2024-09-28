// pengurangan
function tahan() {
    let satu = Number(prompt("Masukkan angka pertama"));
    let dua = Number(prompt("Masukkan angka kedua"));

    // Operator pengurangan
    const tiga = satu - dua;

    // Membuat hasil
    const hasil = `Hasilnya: ${satu} dikurangi dengan ${dua} adalah ${tiga}`;

    // Menampilkan hasil di elemen HTML dengan id "result1"
    document.getElementById("result1").innerHTML = hasil;
}

// Menambahkan event listener ke tombol dengan id "button1"
var tampilan = document.getElementById("button1");
tampilan.addEventListener("click", tahan);
