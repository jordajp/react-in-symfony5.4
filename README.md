# Squelette d'application symfony 5.4 + React.js

## Présentation

* __But__ : montrer comment ajouter du React.js (un peu...) dans une application symfony
* __Use case__ : une application symfony « standard », avec une des fonctionnalités qui réclame du JS  suffisamment compliqué pour qu'on envisage d'utiliser du React.js  
* __La stack techniques__ :
    * symfony 5.4 
    * symfony webpack Encore
    * Typescript
    * React.js
    * React bootstrap, pour se faciliter un peu la vie
* __Ce n'est pas__ :
   * un tuto React.js
   * un tuto symfony

## Les prérequis

* [symfony-cli](https://symfony.com/download)
* node 16+
* npm

> Pour node+npm, voir l'[installation _via_ nvm](https://github.com/nvm-sh/nvm).

## Récupérer et utiliser ce squelette

Pour récupérer le squelette :

```shell
git clone git@gitlab.inria.fr:dsi/react-in-symfony.git 
````
et classiquement :

```shell
php composer.phar install
```

puis un peu moins classiquement :

```shell
npm install
# oh ! on a maintenant un répertoire node_modules/
```

## Buildons !


```shell
npm run build
# oh ! on a plein de trucs dans public/build/
```

Allez, un p'tit coup d'œil à l'appli :

```shell
symfony server:start

```

Pour développer et builder automatiquement :

```shell
npm run watch
# ça va surveiller assets/ et rebuilder si des changements sont détectées
```

(attention, ça ne fonctionne pas toujours...)

## Ce qu'il faut installer pour ajouter du React.js (avec typescript)

> Tout ça est déjà fait dans ce squelette !

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
// webpack.config.js
// ...
Encore
        // plein de trucs...
        .enableTypeScriptLoader()
        .enableReactPreset()
       // plein de trucs...

```

### tsconfig.js

> Voir `tsconfig.json`

## Côté symfony, on définie une route et un point d'ancrage pour l'appli React.js

* le contrôleur : `src/Controller/MyReactAppController.php`
* le template : `template/my-react-app.html.twig`

## On code l'appli symfony 

Le fichier principal est `assets/react/my-react-app.tsx`

On ajoute ce chemin dans `webpack.config.js`:


```javascript
// webpack.config.js
// ...
Encore
        // plein de trucs...
        .addEntry('my-react-app', '/assets/react/my-react-app.tsx') // le chemin vers l'appli react
       // plein de trucs...

```


## Pour aller plus loin

* bootstrap à la sauce react : [react-bootstrap](https://react-bootstrap.github.io) (utilisé dans cette application)
* la gestion des routes côté client dans react : [react router](https://github.com/remix-run/react-router)
* l'internationalisation : [react-intl](https://formatjs.io/docs/react-intl/)
* [Le projet RADAR/REx](https://gitlab.inria.fr/dsi/radar/rex)  utilise ces 3 composants.