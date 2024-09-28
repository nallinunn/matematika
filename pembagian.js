// penjumlahan
function tambahan(){
    let angka = Number(prompt(`masukan angka`))
    let satu = Number(prompt(`masukan angka ke-2`))
    // penjumlahan operator
    const ha = angka / satu
    const aa = (`   :    jadi ${angka} dibagi dengan ${satu} adalah ${ha}`)
    // menampilkan di halaman utama
    document.getElementById("result2").innerText = aa
}

var c = document.getElementById("button2")

c.addEventListener("click", tambahan)

