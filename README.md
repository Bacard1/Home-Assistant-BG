
<h1 align="center">Home Assistant</h1>


По-долу ще представя моя проект "Home Assistant", като ще го разделя на части и ще го представя като отделни мини-проекти.
В това хранилище ще обясня накратко идеята, целта и предимствата на всеки проект. Ако някой от тях представлява интерес за Вас, можете да последвате връзката към пълния проект под всяко описание.

<br>

<h1 align="center" color="red">Обобщение</h1>

### Цел на проекта "Home Assistant":

- **Динамичност:** Всички обекти и текстове трябва да могат да се мащабират автоматично в зависимост от размера на екрана или прозореца, като се поддържа удобен изглед в рамките на допустими граници.
- **Опростен и стегнат дизайн:** Лесен за разбиране както от възрастни, така и от деца. Включване на бързи връзки към ключови функции и информация с цел намаляване на препратките между страниците, компенсирано с изскачащи прозорци за по-добра навигация.
- **Оптимизиране на ресурсите:**
    - Намаляване на разхода на ресурси в домакинството чрез автоматизации.
    - Създаване на удобство и ненатрапчиво взаимодействие за обитателите.
- **Изграждане на структура за управление:** Разделяне на зони и групиране на сензори, осветление и превключватели за улеснение в автоматизациите. Въвеждане на йерархия за по-добра организация на групите.
- **Сигурност:** Използване на наличните устройства за защита на дома, когато няма никой в него.
- **Родителски контрол:**
  - Достъп до информация за местоположението на мобилни устройства.
  - Контрол над достъпа и използването на компютрите от деца.
- **Информираност:** Известяване на всички членове на домакинството за важни събития.
- **Интеграция на електроуреди:** Стремеж към интеграция на наличната техника, без да е необходима подмяна, доколкото това е възможно.
- **Независимост:** всичко трябва да работи без достъп до интернет.

<br>

### Снимки от моят "Home Assistant":
| Начална страница:    | Една от стаите:      | Изскачащи прозорци в стаята: |
|:--------------------|:--------------------|:--------------------|
| ![image](https://github.com/user-attachments/assets/c0aa838d-1254-4fec-b54f-724e8a331a81) | ![image](https://github.com/user-attachments/assets/18d63240-3ce3-438b-826e-0aa0712fdc33) | ![image](https://github.com/user-attachments/assets/7376a137-b84c-48b1-b314-85a92bc1495d) |
| Shopllist с картинки: | Интеграции които използвам: | Zigbee мрежа: |
| ![image](https://github.com/user-attachments/assets/4841bfc5-3007-44a6-8944-828c92286d8d) | ![image](https://github.com/user-attachments/assets/85e188d6-8d55-46ad-871b-fb6422578cfa) | ![image](https://github.com/user-attachments/assets/fe2ebfec-5623-446c-8a3c-8a5f1feacf0a) |
| Добавки: | Мониторинг: | Натоварване хардуер: |
| ![image](https://github.com/user-attachments/assets/cb5b7ebb-7234-4821-9867-abe2de667ae3) | ![image](https://github.com/user-attachments/assets/39dbc905-90aa-4b76-8358-399418b98a6e) | ![image](https://github.com/user-attachments/assets/a2139e51-4ebe-4e87-bc3b-c17f58c0a6a9) |


<br>
<h1 align="left" color="red;">Проекти:</h1>


<h3 align="center"><strong>Създаване/Интегриране на Zigbee мрежа </strong></h3>

![image](Statik/IMG/Andere/украса_002.png)
### Предимства на Zigbee мрежата:
- Не зависи от интернет. С добавката Zigbee2MQTT, HomeAssistant сам хоства и потдържа Zigbee устроиствата Ви.
- Не натоварва допълнително основната интерет мрежа.
- Лесна миграция, инсталация на устройства.
- Zigbee устройствата сами по себе си са "Рутери" и удължават сигнала на мрежата.
- Zigbee устройствата са ефтини.
- Лесен ъпгрейд при натоварена мрежа.
  
<div style="text-align: center;">
    <img align="center" src="https://github.com/Bacard1/HomeAssistant-Bulgaria/blob/main/Statik/GIF/Zigbee_Network.gif?raw=true"  alt="Към проекта" >
</div>

<p></p>

<a href="Projekts/HomeAssistant-Zigbee-Network">
    <img align="center" src="Statik\Buttons\button-kam-proekt.png" alt="Към проекта" width="30%" height="15%">
</a>

<h1></h1>


<h3 align="center"><strong>Списък за пазаруване с изображения</strong></h3>

![image](Statik/IMG/Andere/украса_002.png)
### Предимствата на този списък за пазаруване:
- Бързао намиране на артикулите в отделните категории.
- Лесно ориентиране с картини на артикулите.
- Уведомяване на членовете в домакинството за наличие на нов артикул в списъка.
- Автоматично изчистване на вече отметнатите артикули.

<div style="text-align: center;">
    <img align="center" src="Statik\GIF\Projekt_shoplist.gif"  alt="Списък за пазаруване" width="100%" height="90%">
</div>

<p></p>

<a href="Projekts\Home-Assistant-Shoplist">
    <img align="center" src="Statik\Buttons\button-kam-proekt.png" alt="Към проекта" width="30%" height="15%">
</a>

<h1></h1>

<h3 align="center"><strong>WLED SoundReactiv интилигентна цветомузика</strong></h3>

![image](Statik/IMG/Andere/украса_002.png)
### Предимства WLED SoundReactiv:
- Мигновенна реакция, недоловима за човешкото око.
- Автоматична чувствителност на микрофона.
- Ефтино и енергоспестяващо.
- WLED мод включващ всички функции на оригиналният Firmware.
- Web интерфейс, Андроид/МАК приложение, съвместимо с Home Assistent.
- [Video1](https://youtu.be/L4S17ooFPhY)  [Video2](https://youtu.be/V5HgxFt4hFg)
  
<div style="text-align: center;">
    <img align="center" src="Projekts\Home-Assistant-WLED-SoundReactive\IMG\WLED SaundReactive.gif"  alt="WLED SoundReactiv" width="100%" height="100%">
</div>

<p></p>

<a href="Projekts\Home-Assistant-WLED-SoundReactive">
    <img align="center" src="Statik\Buttons\button-kam-proekt.png" alt="Към проекта" width="30%" height="15%">
</a>

<h1></h1>

<h3 align="center"><strong>TASMOTA - интеграция и устройства</strong></h3>

![image](Statik/IMG/Andere/украса_002.png)
### Предимствата на TASMOTA:
- Пълен контрол над устройството.
- Контролът върху устройството не зависи от връзката му с интернет.
- Мигновенна реакция през TASMOTA, Home Assistant и Alexa.
- Не натоварва интернет мрежата.
  
<div style="text-align: center;">
    <img align="center" src="Projekts\HASS-Sonoff-BASIC-Tasmota\IMG\TASMOTA.gif"  alt="WLED SoundReactiv" width="100%" height="100%">
</div>

<p></p>

<a href="Projekts\HASS-Sonoff-BASIC-Tasmota">
    <img align="center" src="Statik\Buttons\button-kam-proekt.png" alt="Към проекта" width="30%" height="15%">
</a>

<h1></h1>

 