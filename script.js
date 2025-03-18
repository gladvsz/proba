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

    fetch('https://script.google.com/macros/s/AKfycbyeSvPjvpws8M2WYOEGrJaB0m-TfgRmSGOCOqlFo1bXWSv4bwdoWNPMlvTOpRniUz37/exec', {
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
