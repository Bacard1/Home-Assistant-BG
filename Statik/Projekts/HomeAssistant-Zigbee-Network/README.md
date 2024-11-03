<h1 align="center">Създаване/Интегриране на Zigbee мрежа в Home Assistant</h1>

<br>

##  Хардуерна подготовка:

- Инсталиран и конфигуриа Home Assistant OS на хардуер или виртуализатор е без значение. Ато не сте готови с тази стъпка погледни [ТУК](https://www.home-assistant.io/installation/)

<br>

| В този проект беше използван "RaspberryPi 4B 8GB" | 
|:--------------------:|
| <img align="center" src="../../IMG/Devices/RASP PI 4B.png" width="50%" height="50%">  |

<br>

- Закумен "SONOFF Zigbee 3.0 USB Dongle Plus" или друк, който да създава Zigbee мрежата. Ако все още не разполагате с такъв виж Двата линка по долу:
    - [Amazon](https://www.amazon.de/dp/B09KZX4WSB?ref=ppx_yo2ov_dt_b_fed_asin_title)
    - [Aliexpress](https://de.aliexpress.com/item/1005004266559661.html?spm=a2g0o.productlist.main.1.29cfYELkYELkj7&algo_pvid=d6c4c86f-f945-433c-addd-962a0da0c955&algo_exp_id=d6c4c86f-f945-433c-addd-962a0da0c955-0&pdp_npi=4%40dis%21EUR%2138.16%2120.99%21%21%2140.55%2122.30%21%402103890117306177577828936efd34%2112000028571354347%21sea%21DE%21749630241%21X&curPageLogUid=DHGOVitBimE5&utparam-url=scene%3Asearch%7Cquery_from%3A) 

<br>

| В този проект беше използван SONOFF Zigbee 3.0 USB Dongle Plus: | 
|:--------------------:|
| <img align="center" src="../../IMG/Devices/Sonoff zigbee3.0 Dongel.png" width="120%" height="90%">  |

<br>

- **!!!ПРЕПОРАЧИТЕЛНО!!!:** Използвайте  "SONOFF Zigbee 3.0 USB Dongle Plus" със USB удължител. Причината е че всички Zigbee 3.0 USB Dongle се влияят от работата на хардуера и създава проблеми на мрежата! Ако се колебаете какъв да изберете погледнете линкът по доло.
    - [Aliexpress](https://de.aliexpress.com/item/1005007442670601.html?spm=a2g0o.order_list.order_list_main.75.6e4f5c5f9wWYJ0&gatewayAdapt=glo2deu)

 <br>

##  Софтуерна подготовка:

- **Обновяване на Firmware в "SONOFF Zigbee 3.0 USB Dongle Plus":** въпреки че "SONOFF Zigbee 3.0 USB Dongle Plus" е закупен съвсем скоро обновяването на Firmware му е задължителен. Така ще избегнете не желани проблеми със съвместимостта със добавката или устройствата. Софтуерът за флашването на Zigbee и хранилището със съвместим Firmware, както и драйвърите необходими свързването с вашият компютър.
    - [Флаш софтуер:](https://zig-star.com/radio-docs/zigstar-multi-tool/#nvram-tools) работи с всички видове Zigbee Dongle
    - [Firmware cordinator:](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) това е основният оправляващ Dongle (който е свързан към хардуерът).
    - [Firmware router:](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin) това ще ви потрябва ако искате да направите Dongle който да помага със сигнал на основният Dongle.
    - [Драивъри:](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) VCP Drivers
    - [Документация:](https://sonoff.tech/wp-content/uploads/2022/11/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf) Официялната документация от SONOFF

<p></p><br>

- **Инсталиране на MQTT Broker в Home Assistant:** Ако все още нямате MQTT брокер щракни на бутонът долу

<br>

<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mosquitto">
    <img align="center" src="../../IMG/Andere/button ADD-ON ON.svg" >
</a>

<p></p><br>

- **След инсталирането рестартирайте Home Assistant.**

    - **След инсталиране на добавката вървете на конфигурация и преминете в режим "Редактирае в YAML":** попълнете желаните потребителско име и парола с които ще се свързвате с MQTT, а на "server" попълнете IP адресът на устройството където е инсталиран Home Assistant. Запазете промените и стартирайте MQTT Broker.

    
```markdown
**Заглавие: Пример за HTML код**    
```html
logins:
    - username: "_________________"
      password: "_________________"
require_certificate: false
certfile: cer.pem
keyfile: key.pem
customize:
active: false
folder: mosquitto
anonymous: false
server: mqtt://_________________:1883
base_topic: zigbee2mqtt
debug: true
```
<br>

- **Инсталиране на zigbee2mqtt в Home Assistant**
    - Натисни бутонът по долу за да добавиш хранилището на zigbee2mqtt в добавките си
<a href="https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fzigbee2mqtt%2Fhassio-zigbee2mqtt">
    <img align="center" src="../../IMG/Andere/button ADD ADD-ON REPOSITORY TO MY.svg" >
</a>

