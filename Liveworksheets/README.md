
<p align="center">
  <img width="100px" src="https://i0.wp.com/www3.gobiernodecanarias.org/medusa/edublog/cprofessantacruzdetenerife/wp-content/uploads/sites/91/2020/04/liveworksheets.jpg?fit=280%2C280&ssl=1" />
</p>

# Hack to autocomplete a [Liveworksheets](https://es.liveworksheets.com)
> **[English]** This script seeks to automatically fill the responses of any Liveworksheets page. (Accuracy 98.9%). You just need to *copy the following in the console* of the page opening it with **CTRL + J** and paste it.

> **[Español]** Este script busca llenar automáticamente las respuestas de cualquier página de Liveworksheets. (Precisión 98,9%). Solo necesitas *copiar lo siguiente en la consola* de la pagina abriendola con **CTRL + J** y pegarlo.

## 📝 Script
```
fetch("https://raw.githubusercontent.com/Manzanitabot123/Pranks-and-hacks-for-page-console/main/Liveworksheets/hack.js")
.then((res) => res.text()
.then((t) => eval(t)))
```