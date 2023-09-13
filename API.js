$(document).ready(function() {
    $('#weather-form').submit(function(e) {
        e.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Получаем значение, введенное пользователем в поле ввода
        var city = $('#city-input').val();

        // Формируем URL с учетом введенного города
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b172df1f516182179b4c10bc69fc507a`;

        // Отправляем запрос к API
        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                // Обработка и вывод данных, как в предыдущем примере
                console.log(data);
                $('#error').html("")
                $('#data-container').html('Temperature: ' + data.main.temp + '<br>' + 'Temperature feels like: ' + data.main.feels_like + '<br>' + 'Min.Temperature: ' + data.main.temp_min + '<br>' + 'Max.Temperature: ' + data.main.temp_max);
            },
            error: function(error) {
                console.error('Ошибка при запросе к API: ', error);
                $('#data-container').html("");
                $('#error').html('Error: ' + error.responseJSON.message);
            }
        });
    });
});
