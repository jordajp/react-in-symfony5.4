# Application example symfony 5.4 + React.js (using typescript)

See also the [README in french](README.fr.md).

## Presentation

* __Aim__ :Explain how to add a little bit of React.js in a symfony app.
* __Use case__ : A classic symfony app with some tricky js part, and we think it's worth while considering a « serious » framework.
* __The technical stack__ :
    * symfony 5.4 
    * symfony webpack Encore
    * Typescript
    * React.js
    * React bootstrap
* __THIS IS ONT__ :
   * a React.js tuto
   * a symfony tuto



## Prerequisite

* [symfony-cli](https://symfony.com/download)
* node 16+
* npm

> For node+npm, see [installation _with_ nvm](https://github.com/nvm-sh/nvm).

## Download the app

Pour récupérer le squelette :

```shell
git clone git@gitlab.inria.fr:dsi/react-in-symfony.git 
````
Install PHP components:

```shell
php composer.phar install
# vendor/ is now full of things
```

Install JS components:

```shell
npm install
#  node_modules/ is now full of things
```

## Let's build!


```shell
npm run build
#  public/build/ is now created
```

It's time to have a look at the app now:

```shell
symfony server:start

```

To code and automatically rebuild:

```shell
npm run watch
# will watch assets/ and automatically rebuild at need. 
```

(caution! may sometime failed, e.g if you modify webpack.config.j. In this case kill (Ctrl-C) and rerun)

## What you must install to have React.js (with typescript) in your symfony app


If you have an existing Symfony 5.4 app, and you want to add  React.js, here is what you should do.

> Tout ça est déjà fait dans ce squelette !

### webpack encore

To run webpack (JS builder) at the symfony mode.

```shell
composer require symfony/webpack-encore-bundle 
```

### Typescript + React.js

```shell
npm install -D typescript react react-dom @types/node @types/react @types/react-dom @babel/preset-react
# If you want to use  react-bootstrap:
npm install react-bootstrap bootstrap
```

```shell
npm install ts-loader
```


## Configuration to get React.js (with typescript)

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

> See `tsconfig.json`, there are plenty of explanations there.

## Symfony side: define a route and a hook point for the React.js part

* Controller, see  `src/Controller/MyReactAppController.php`
* Viem, see  `template/my-react-app.html.twig`

## React.js app coding 

The main file is `assets/react/my-react-app.tsx`

This file path is added in `webpack.config.js`:


```javascript
// webpack.config.js
// ...
Encore
        // many stuffs...
        .addEntry('my-react-app', '/assets/react/my-react-app.tsx') // the path to the react app
       // many stuffs...

```

## Resources

* [Symfony / Managing CSS and JavaScript](https://symfony.com/doc/current/frontend.html) (Webpack Encore official doc)
* [Symfony / Enabling React.js](https://symfony.com/doc/current/frontend/encore/reactjs.html) (Official doc)
* [Symfony / Enabling Typescript](https://symfony.com/doc/current/frontend/encore/typescript.html) (Official doc)
* [symfony react demo (github)](https://github.com/thomaskanzig/symfony-react-demo) a Symfony 6 demo I look at to build this tuto.
* 
## Do more in your React.js app

* Bootstrap for React.js : [react-bootstrap](https://react-bootstrap.github.io) (utilisé dans cette application)
* Client side router for React : [react router](https://github.com/remix-run/react-router)
* Internationalization in React.js : [react-intl](https://formatjs.io/docs/react-intl/)


