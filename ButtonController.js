$(document).ready(function() {
    var $sourceInput = $('#city-input');
    var $MyButton = $('#my-button');

    // Начально делаем кнопку неактивной
    $MyButton.prop('disabled', true);

    // Добавляем обработчик события input для поля ввода
    $sourceInput.on('input', function() {
        // Проверяем, есть ли значение в поле ввода
        if ($sourceInput.val() !== "") {
            // Если есть значение, активируем кнопку
            $MyButton.prop('disabled', false);
        } else {
            // Если нет значения, делаем кнопку неактивной
            $MyButton.prop('disabled', true);
        }
    });
});
