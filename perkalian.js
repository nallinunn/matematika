// penjumlahan
function tambahan(){
    let perkalian = Number(prompt(`masukan angka`))
    let perkalianSatu = Number(prompt(`masukan angka ke-2`))
    // penjumlahan operator
    const haa = perkalian * perkalianSatu
    const aaa = (`   :    jadi ${perkalian} dikali dengan ${perkalianSatu} adalah ${haa}`)
    // menampilkan di halaman utama
    document.getElementById("result3").innerText = aaa
}

var c = document.getElementById("button3")

c.addEventListener("click", tambahan)

