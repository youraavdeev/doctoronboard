let awd = cities.map(el => el.city).sort();
awd.unshift('Выберите из списка', 'Москва')
copy(awd.map(el => ({ city: el })));