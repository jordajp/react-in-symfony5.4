# Squelette d'application symfony 5.4 + React.js

## Présentation

* But : montrer comment ajouter du React.js (un peu...) dans une application symfony
* use case : une application symfony « standard », avec une des fonctionnalités qui réclame du JS  suffisamment compliqué pour qu'on envisage d'utiliser du React.js  
* la stack techniques :
    * symfony 5.4 
    * symfony webpack Encore
    * typescript
    * React.js
* Ce n'est pas :
   * un tuto React.js
   * un tuto symfony

## Les prérequis

* node 16+
* npm

> Voir l'[installation _via_ nvm](https://github.com/nvm-sh/nvm).

## Ce qu'il faut installer pour ajouter du React.js (avec typescript)

> C'est déjà fait dans ce squelette !

### webpack encore

pour lancer webpack (builder JS) à la sauce symfony

```shell
composer require symfony/webpack-encore-bundle 
```

### la stack Typescript + react

```shell
npm install -D typescript react react-dom @types/node @types/react @types/react-dom @babel/preset-react
```

```shell
npm install ts-loader
```


## Ce qu'il faut configurer pour ajouter du React.js (avec typescript)

### webpack.config.js

```javascript
Encore
        // plein de trucs...
        .enableTypeScriptLoader()
        .enableReactPreset()
        .addEntry('my-react-app', '/assets/react/my-react-app.tsx') // le chemin vers l'appli react

```

### tsconfig.js

> Voir `tsconfig.json`

## Côté symfony, on définie une route et un point d'ancrage pour l'appli React.js

* le contrôleur : `src/Controller/MyReactAppController.php`
* le template : `template/my-react-app.html.twig`

## On code l'appli symfony 

Le fichier principal est `assets/react/my-react-app.tsx`

## Buildons !

```shell
npm run build
```

Pour développer et builder automatiquement :

```shell
npm run watch
```

(attention, ça ne fonctionne pas toujours...)

## Pour aller plus loin

* bootstrap à la sauce react : react-bootstrap
* la gestion des routes côté client dans react : react router
* l'internationalisation : react-intl