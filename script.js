document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};
    let totalScore = 0;

    formData.forEach((value, key) => {
        data[key] = parseInt(value);
        totalScore += parseInt(value);
    });

    data.totalScore = totalScore;

    fetch('https://script.google.com/macros/s/AKfycbwumj2WYS6pDzz9Mph8Bso45iiYYFyZmmoewY3nw_XnshWnu7fnOuwnicx6wKj4gz-h/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Dziękujemy za wypełnienie kwestionariusza!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
