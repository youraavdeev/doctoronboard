$(document).ready(function() {
    var lst = [{ "name": "Авиационная и космическая медицина" }, { "name": "Администратор" }, { "name": "Акушер" }, { "name": "Акушер-гинеколог" }, { "name": "Аллерголог" }, { "name": "Аллерголог-иммунолог" }, { "name": "Амбулаторный хирург" }, { "name": "Ангиографист" }, { "name": "Ангионевролог" }, { "name": "Ангиохирург" }, { "name": "Андролог" }, { "name": "Андролог-эндокринолог" }, { "name": "Анестезиолог" }, { "name": "Анестезиолог-реаниматолог" }, { "name": "Анестезист" }, { "name": "Апитерапевт" }, { "name": "Аритмолог" }, { "name": "Ароматерапевт" }, { "name": "Артролог" }, { "name": "Бактериолог" }, { "name": "Бальнеолог" }, { "name": "Валеолог" }, { "name": "Венеролог" }, { "name": "Вертебролог" }, { "name": "Ветеринар" }, { "name": "Вирусолог" }, { "name": "Водолазная медицина" }, { "name": "Восстановительная медицина" }, { "name": "ЭКО" }, { "name": "Гастроэнтеролог" }, { "name": "Гематолог" }, { "name": "Генетик" }, { "name": "Гепатолог" }, { "name": "Гериатр" }, { "name": "Геронтолог" }, { "name": "Гигиенист" }, { "name": "Гинеколог" }, { "name": "Гинеколог-онколог" }, { "name": "Гинеколог-перинатолог" }, { "name": "Гинеколог-эндокринолог" }, { "name": "Гирудотерапевт" }, { "name": "Гистолог" }, { "name": "Гомеопат" }, { "name": "Дерматовенеролог" }, { "name": "Дерматолог" }, { "name": "Детский гинеколог" }, { "name": "Детский невропатолог" }, { "name": "Детский хирург" }, { "name": "Диабетолог" }, { "name": "Диетолог" }, { "name": "Иглорефлексотерапевт" }, { "name": "Иммунолог" }, { "name": "Имплантолог" }, { "name": "Инфекционист" }, { "name": "Кардиолог" }, { "name": "Кардиоревматолог" }, { "name": "Кардиохирург" }, { "name": "Кинезиолог" }, { "name": "Колопроктолог" }, { "name": "Комбустиолог" }, { "name": "Косметолог" }, { "name": "Косметолог-дерматолог" }, { "name": "Курортолог" }, { "name": "Лаборант" }, { "name": "Лабораторная диагностика" }, { "name": "Логопед" }, { "name": "Лучевая диагностика" }, { "name": "ЛФК" }, { "name": "Маммолог" }, { "name": "Массажист" }, { "name": "Миколог" }, { "name": "Микрохирург" }, { "name": "Нарколог" }, { "name": "Натуротерапевт" }, { "name": "Невролог" }, { "name": "Невропатолог" }, { "name": "Нейрохирург" }, { "name": "Неонатолог" }, { "name": "Нефролог" }, { "name": "Общая гигиена" }, { "name": "Общая практика" }, { "name": "Окулист" }, { "name": "Онколог" }, { "name": "Онкоуролог" }, { "name": "Ординатор" }, { "name": "Ортодонт" }, { "name": "Ортопед" }, { "name": "Остеопат" }, { "name": "Отоларинголог" }, { "name": "Оториноларинголог" }, { "name": "Офтальмолог" }, { "name": "Паллиатолог" }, { "name": "Паразитолог" }, { "name": "Паркинсонолог" }, { "name": "Пародонтолог" }, { "name": "Патологоанатом" }, { "name": "Педагог-психолог" }, { "name": "Педиатр" }, { "name": "Пластический хирург" }, { "name": "Подолог" }, { "name": "Провизор" }, { "name": "Проктолог" }, { "name": "Профилактическая медицина" }, { "name": "Профпатолог" }, { "name": "Психиатр" }, { "name": "Психиатр-нарколог" }, { "name": "Психоаналитик" }, { "name": "Психолог" }, { "name": "Психоневролог" }, { "name": "Психотерапевт" }, { "name": "Пульмонолог" }, { "name": "Радиационная гигиена" }, { "name": "Радиолог" }, { "name": "Реабилитолог" }, { "name": "Реаниматолог" }, { "name": "Ревматолог" }, { "name": "Рентгенолог" }, { "name": "Репродуктолог" }, { "name": "Рефлексотерапевт" }, { "name": "Санитарный врач" }, { "name": "Сексолог" }, { "name": "Сексопатолог" }, { "name": "Семейный врач" }, { "name": "Сердечно-сосудистый хирург" }, { "name": "Сертификация" }, { "name": "Сестра" }, { "name": "Сиделка" }, { "name": "Скорая помощь" }, { "name": "Сомнолог" }, { "name": "Сосудистый хирург" }, { "name": "Социальная гигиена" }, { "name": "Спортивная медицина" }, { "name": "Стоматолог" }, { "name": "Стоматолог-имплантолог" }, { "name": "Стоматолог-ортодонт" }, { "name": "Стоматолог-ортопед" }, { "name": "Стоматолог-терапевт" }, { "name": "Стоматолог-хирург" }, { "name": "Судебно-медицинский эксперт" }, { "name": "Судовой врач" }, { "name": "Сурдолог" }, { "name": "Терапевт" }, { "name": "Токсиколог" }, { "name": "Торакальный хирург" }, { "name": "Травматолог" }, { "name": "Трансплантолог" }, { "name": "Трансфузиолог" }, { "name": "Трихолог" }, { "name": "Ультразвуковая диагностика" }, { "name": "Уролог" }, { "name": "Фармаколог" }, { "name": "Фармацевт" }, { "name": "Фельдшер" }, { "name": "Физиотерапевт" }, { "name": "Фитотерапевт" }, { "name": "Флеболог" }, { "name": "Фониатр" }, { "name": "Фтизиатр" }, { "name": "Функциональная диагностика" }, { "name": "Химиотерапевт" }, { "name": "Хирург" }, { "name": "Хирург-онколог" }, { "name": "Челюстно-лицевой хирург" }, { "name": "Эмбриолог" }, { "name": "Эндоваскулярный хирург" }, { "name": "Эндокринолог" }, { "name": "Эндоскопист" }, { "name": "Эпидемиолог" }, { "name": "Эпилептолог" }, { "name": "Другое" }]


    var employee_data = '<option value="">Выберите из списка</option>';
    for (var i = 0; i < lst.length; i++) {
        employee_data += '<option value="';
        employee_data += lst[i].name + '">';
        employee_data += lst[i].name + '</option>';
        // alert(employee_data);

    }
    $('#input_speciality').append(employee_data);
    $('#speciality-2').append(employee_data);


});