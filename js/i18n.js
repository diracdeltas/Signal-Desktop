if (!window.chrome.i18n) {
  let localesFile = `chrome-extension://iopnjipkpnmbpjaalcjcpcbfcnjknmmo/_locales/en/messages.json`
  window.fetch(localesFile).then((response) => {
    response.json().then((json) => {
      console.log('initialize localization', localesFile)
      window.i18n = function (message, substitutions) {
        let s = json[message] ? json[message].message : message
        if (substitutions instanceof Array) {
          substitutions.forEach((sub) => {
            s = s.replace(/\$.+?\$/, sub)
          })
        } else if (substitutions) {
          s = s.replace(/\$.+?\$/, substitutions)
        }
        return s
      }
    })
  })
}
