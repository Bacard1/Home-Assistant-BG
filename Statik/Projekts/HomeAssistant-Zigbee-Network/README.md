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

