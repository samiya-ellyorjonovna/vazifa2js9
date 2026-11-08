let savat = JSON.parse(localStorage.getItem('cart')) || [];
let jamiSumma = 0;

function zakazQilish(nomi, narxi) {
    let mahsulot = {
        nomi: nomi,
        narxi: narxi,
        soni: 1
    };
    
    savat.push(mahsulot);
    localStorage.setItem('cart', JSON.stringify(savat));

    jamiSumma = jamiSumma + narxi;
    document.getElementById('jami').innerText = "Umumiy summa: " + jamiSumma.toLocaleString() + " so'm";
}

function korsat(tur) {
    let meva = document.getElementById('meva');
    let don = document.getElementById('don');
    let gosht = document.getElementById('gosht');
    let sut = document.getElementById('sut');
    let gadjet = document.getElementById('gadjet');

    meva.classList.add('yashirin');
    don.classList.add('yashirin');
    gosht.classList.add('yashirin');
    sut.classList.add('yashirin');
    gadjet.classList.add('yashirin');

    if (tur === 'meva') {
        meva.classList.remove('yashirin');
    } else if (tur === 'don') {
        don.classList.remove('yashirin');
    } else if (tur === 'gosht') {
        gosht.classList.remove('yashirin');
    } else if (tur === 'sut') {
        sut.classList.remove('yashirin');
    } else if (tur === 'gadjet') {
        gadjet.classList.remove('yashirin');
    }
}
function clearSavat() {
    savat = [];
    jamiSumma = 0;

    localStorage.removeItem('cart');

    document.getElementById('jami').innerText =
        "Umumiy summa: 0 so'm";
}