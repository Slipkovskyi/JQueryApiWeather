$(document).ready(function() {
    // Выбираем элемент ввода
    var $sourceInput = $('#city-input');

    // Выбираем элемент, в котором будет отображаться текст
    var $targetDiv = $('#translator-div');

    // Добавляем обработчик события input для элемента ввода
    $sourceInput.on('input', function() {
        // Получаем текущее значение ввода
        var inputText = $sourceInput.val();

        // Обновляем текст в целевом элементе
        $targetDiv.text(inputText);
    });
});
