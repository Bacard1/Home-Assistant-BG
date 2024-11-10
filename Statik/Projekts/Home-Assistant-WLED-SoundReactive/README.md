<h1 align="center"><strong>🔉🔉WLED SoundReactiv интилигентна цветомузика🔉🔉</strong></h1>

## 🔔Идея: 
Идеята е в ъглите на помещението да се сложат алуминиеви профили с LED ленти, който да извършват дейност при звук, паралелно, а не последователно. Схемата която съм изработил е едно към едно с това как съм свързал компонентите.:

<img align="center" src="IMG\WLED-scheme.png"  alt="Списък за пазаруване" width="100%" height="100%">

:warning: На схемата не е показана дължината на лентата или броят на диодите, понеже това не е от значение.

- **Неоходими компоненти за проекта:**
    - **ESP32 DEV:** моделът не е от много голямо значение в този проект беше използван ["ESP32 WROOM-32 Entwicklungsboard TYPE-C CH340C/ CP2102" ](https://de.aliexpress.com/item/1005005953505528.html?spm=a2g0o.order_list.order_list_main.20.133b5c5fUUgTke&gatewayAdapt=glo2deu) 

    <img align="center" src="IMG/ESP WROMM 32.png"  alt="Списък за пазаруване" width="35%" height="35%">

    - **ESP32 Adapter:** Предимствата на този ["Terminal Adapter"](https://www.amazon.de/dp/B0CRVHJ9GB?ref=ppx_yo2ov_dt_b_fed_asin_title) са мното, ето и някой от тях.:
        - Не е необходимо запояване, а всъщност е здраво и стъбилно.
        - Не се налага да програмирате ["ESP32 WROOM-32 Entwicklungsboard TYPE-C CH340C/ CP2102" ](https://de.aliexpress.com/item/1005005953505528.html?spm=a2g0o.order_list.order_list_main.20.133b5c5fUUgTke&gatewayAdapt=glo2deu) на място, а след програмирането просто го поставяте.
        - Възможност за тестване с повече от един чип (докато всичко си работи можете да си поиграете с настроиките върху др. чип и просто да ги размените).
        - Предотвратява допир на два пина.
        - Удобно за направата на мост между два пина.
        
        <br>

        <img align="center" src="IMG/ESP-adapter.png"  alt="Списък за пазаруване" width="35%" height="35%">

    - **Микрофон:** [MAX9814](https://www.amazon.de/dp/B0D3X6K7BW?ref=ppx_yo2ov_dt_b_fed_asin_title) е идеалният избор за този проект, но той може да бъде заменен и с друг вид.:

    <img align="center" src="IMG/mic-MAX9814.png"  alt="Списък за пазаруване" width="35%" height="35%">
    
    :warning: Преди да включите захранването се уверете че кабелите водещи до микрофонът са точно както на схемата най горе и не контактуват помежду си. В противен слъчай микрофонът изгаря и става негоден за употреба. Можете да проверите това с мултицет. Четирите канала на микрофона не трябва да контактуват, ако те контактуват търсете проблемът в споиките или вече той е изгорял. 

    - **Захранване:** [vusum Schalt-LED-Netzteil, 5-V-Netzteil, Transformator](https://de.aliexpress.com/item/1005005616440560.html?spm=a2g0o.order_list.order_list_main.4.133b5c5fQtV6NX&gatewayAdapt=glo2deu)

    
