// penjumlahan
function tambahan(){
    let x = Number(prompt(`masukan angka`))
    let y = Number(prompt(`masukan angka ke-2`))
    // penjumlahan operator
    const h = x + y
    const a = (`   :    jadi ${x} ditambah dengan ${y} adalah ${h}`)
    // menampilkan di halaman utama
    document.getElementById("result").innerText = a
}

var p = document.getElementById("button")

p.addEventListener("click", tambahan)

