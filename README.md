# AngularJS Todo App

## Setting up an AngularJS App

### Installing Startup Packages

Firstly you need to make sure you have node and npm installed if not please go <a href='https://nodejs.org/en/' target='_blank'>here</a> and follow the installation process to setup you machine.

Let’s first create main directory:

```
$ mkdir angularjs-todo-app && cd angularjs-todo-app
```

#### Packages

For this project we will install the packages we need via `npm` instead of using the `cdn` links that is imported in the `html` file

Firstly, we need to initialise our `package.json` file, we do that by running this command:

```
$ npm init -y
```

Now we can install the packages we need to setup the AngularJS app.

We will be using the following packages:

- angular
- angular-route
- bootstrap
- prettier
- angular-cookies
- jQuery

Update the dependencies in the `package.json` with the following code:

```
...

"dependencies": {
    "angular-route": "^1.2.32",
    "bootstrap": "^4.4.1",
    "jquery": "^2.2.4",
    "prettier": "^2.0.2"
  },

...
```

then we running the command below:

```
$ npm i && npm ci
```

Once that’s done installing, let’s run the command below to create files for our `prettier` package and a `gitignore` file to handle files we do not want to add to github:

```
$ touch .prettierrc .gitignore
```

Open the `.prettierrc` file and update add the code below:

```
{
  "singleQuote": true,
  "printWidth": 160,
  "jsxBracketSameLine": true,
  "semi": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "bracketSpacing": true
}
```

Open the `.gitignore` file and update add the code below:

```
# Logs
logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# node-waf configuration
.lock-wscript

# Compiled binary addons (http://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules
jspm_packages

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history
```

For the code I use in my `.gitignore` file I get the code from <a href="https://github.com/executeautomation/gitignore" target="_blank">executeautomation</a>.

## Starting our app

Let’s first create our main file:

`index.html`, which will be linked to our external files and will serve as the primary template for our application.

In the main directory create `index.html` and add the code below:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo App</title>

    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" />

  </head>
  <body>
    <h1>Hello World!</h1>

    <!-- Libs -->
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/@uirouter/angularjs/release/angular-ui-router.js"></script>
  </body>
</html>
```

To test that all our imports is working we need to run our app.
For this app I am using <a href="https://www.npmjs.com/package/lite-server" target="_blank">lite-server</a>, to install `lite-server` we run this command:

```
$ npm install lite-server --save-dev
```

...and add a "script" entry within your project's `package.json` file:

```
# Inside package.json...
"scripts": {
    "dev": "lite-server"
},
```

With the above script entry, you can then start lite-server via:

```
$ npm run dev
```

Once the above command is running, in your browser of choice go to `http://localhost:3000` (by default `lite-server` will open a new tab in your default browser that is opened to `http://localhost:3000`).

## Creating First View and Controller

### Setting Up First Route

In the `app/` directory, we will be creating `app.js` file with the code below:

```
;(function () {
  angular.module('TodoApp', ['ngRoute', 'ngCookies']).config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          controller: 'TaskCtrl',
          templateUrl: 'views/tasks.html'
        })
        .otherwise({ redirectTo: '/' })

      //
      $locationProvider.hashPrefix('')
      $locationProvider.html5Mode(true)
    }
  ])
})()
```

Next, we create a view and controller file for out route.

In the `app/controllers` directory, we will be creating `TaskCtrl.js` file with the code below:

```
;(function () {
  angular.module('TodoApp').controller('TaskCtrl', [function () {}])
})()
```

Then, In the `views/` directory, we will be creating `tasks.html` file with some placeholder code:

```
<h1>Hello Form tasks.html</h1>
```

Finally we change the `body` in our `index.html` file to start using AngularJS.
We do this with the code below:

```
<body>
  <div ng-app="TodoApp">
    <div class="container">
      <div ng-view></div>
    </div>
  </div>

...
```
