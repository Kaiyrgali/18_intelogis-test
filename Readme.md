# Тестовое задание
## на позицию React-разработчик

![N|Solid](https://sojuzpatent.com/tmImgs/676/676633.jpg)

### Требуется спроектировать модуль для отображения заявок на перевозку:

- создать произвольный набор заказов и точек погрузки/разгрузки;
- слева на экране должна быть таблица со списком заказов, а справа карта;
- активный ордер должен быть выделен;
- на карте должны отображаться точки загрузки и выгрузки в виде маркеров и полилинии;
- полилиния строится из произвольного сервиса для построения дорожек вдоль дорог;
- точки загрузки/выгрузки приложений в таблице должны быть доступны для редактирования (в виде выбора из справочника точек);
- граница между таблицей и картой должна изменяться мышью (двигаться влево-вправо);
- таблица должна иметь возможность горизонтальной прокрутки;
- для отображения карты желательно использовать пакет Leaflet, для компонентов - AntdDesign, для хранения состояния компонентов и данных - Redux, для реагирования на события - Saga;
- не используйте классы, только функциональные компоненты;

### Что не сделано:
- маршрут выстраивается двумя способами :
I. функция MapRender выстаивает прямую линию и работает без ошибок
II. подключенный RoutingMachine не рендерится при смене активного ордера и изменении точек погрузки\выгрузки. Причину за отведенное время на выполнение тестового задания ен нашел.
- для реагирования на события Saga не использовалась;