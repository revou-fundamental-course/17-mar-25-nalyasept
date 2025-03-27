function hitungLuas() {
    let sisi = document.getElementById('sisi-luas').value;
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan sisi yang valid!");
        return;
    }
    let luas = sisi * sisi;

    document.querySelectorAll('.sisi-value').forEach(el => {
        el.innerText = sisi;
    });

    document.getElementById('hasil-luas').innerText = luas;
}

function resetForm() {
    document.getElementById('sisi-luas').value = "";
    document.getElementById('hasil-luas').innerText = "-";
}

function hitungKeliling() {
    let sisi = document.getElementById('sisi-keliling').value;
        if (sisi === "" || sisi <= 0) {
            alert("Masukkan sisi yang valid!");
        return;
        }
    let keliling = 4 * sisi;

    document.querySelector('.sisi-keliling').innerText = sisi;
    document.getElementById('hasil-keliling').innerText = keliling;
}

function resetKeliling() {
    document.getElementById('sisi-keliling').value = "";
    document.querySelector('.sisi-keliling').innerText = "-";
    document.getElementById('hasil-keliling').innerText = "-";
}
