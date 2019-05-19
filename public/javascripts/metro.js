function bookWater() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var smallTanker = document.getElementById('6000').checked ? 6000 : 0;
    var largeTanker = document.getElementById('9000').checked ? 9000 : 0;
    if (phoneNumber.length === 10 && (smallTanker || largeTanker)) {
        tanker = smallTanker ? smallTanker : largeTanker;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }
        xhr.open('POST', '/book', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({ 'number': +phoneNumber, 'tanker': tanker }));
    } else {
        alert('Please enter valid data in inputs')
    }
}