function deleteReservation(date) {
    fetch('/delete_reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date })
    })
    .then(response => response.json())
    .then(data => {
        const adminMessage = document.getElementById('admin-message');
        adminMessage.textContent = data.message;
        if (data.status === 'success') {
            adminMessage.style.color = 'green';
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            adminMessage.style.color = 'red';
        }
    });
}
