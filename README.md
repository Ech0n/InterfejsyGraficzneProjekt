# Korepetycje


## Info ode mnie jak uruchomić

1. Zainstalujcie node.js (razem z npm)
2. Jak nie macie repo spkopiowanego to skopiujcie do siebie 
```sh
git clone git@github.com:Ech0n/InterfejsyGraficzneProjekt.git
```
3. W folderze projektu czyli "InterfejsyGraficzneProjekt" instalujecie potrzebne moduły:
```sh
npm install
```
4. Uruchamianie:
```sh
npm run dev
```
5. W przeglądarce odpalasz adres wyświetlany w konsoli po napisie "Local:"

## Struktura plików
Wstępna struktura, w miare potrzeb ją pozmieniamy
`src/components` - Komponenty
`src/router/index.js` - Przy dodawaniu nowej podstrony tutaj trzeba zmodyfikowac config
`src/router/views` - Wszystkie podstrony
`src/assets/` - Wszystkie elementy graficzne (Jakieś pliki jpg,svg.) oraz jakieś defaultowe css'ki

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```


### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production (Optional)

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/) (Optional)

```sh
npm run lint
```
