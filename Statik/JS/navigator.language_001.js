function setUserLanguage() {
    let lang = navigator.language || navigator.userLanguage;
    fetch("/api/states/input_text.user_language", {
        method: "POST",
        headers: {
            "Authorization": "Bearer YOUR_LONG_LIVED_ACCESS_TOKEN",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            state: lang.substring(0, 2) // записва само 'de', 'bg', 'en' и т.н.
        })
    });
}

// Изпълни функцията веднага при зареждане на страницата
setUserLanguage();
