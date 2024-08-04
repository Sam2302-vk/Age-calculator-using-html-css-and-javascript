document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const today = new Date();
    
    if (isNaN(dob.getTime())) {
        document.getElementById('result').classList.add('hidden');
        alert('Please enter a valid date.');
        return;
    }

    const age = calculateAge(dob, today);

    document.getElementById('age').textContent = `You are ${age} years old.`;
    document.getElementById('result').classList.remove('hidden');
});

function calculateAge(dob, today) {
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}
