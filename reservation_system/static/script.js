document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar-container');
    const message = document.getElementById('message');

    // 2024年のカレンダーを生成
    const year = 2024;
    const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

    monthNames.forEach((monthName, monthIndex) => {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';

        const monthTitle = document.createElement('h2');
        monthTitle.className = 'month-title';
        monthTitle.textContent = monthName;
        monthDiv.appendChild(monthTitle);

        const calendar = document.createElement('div');
        calendar.className = 'calendar';

        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dateDiv = document.createElement('div');
            dateDiv.className = 'day';
            dateDiv.textContent = day;
            dateDiv.dataset.date = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            dateDiv.addEventListener('click', function() {
                const selectedDate = this.dataset.date;
                reserveDate(selectedDate);
            });
            calendar.appendChild(dateDiv);
        }

        monthDiv.appendChild(calendar);
        calendarContainer.appendChild(monthDiv);
    });

    function reserveDate(date) {
        fetch('/reserve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date })
        })
        .then(response => response.json())
        .then(data => {
            message.textContent = data.message;
            if (data.status === 'success') {
                message.style.color = 'green';
                message.style.display = 'block';
                message.style.margin = '40px auto';
            } else {
                message.style.color = 'red';
            }
        });
    }
});
