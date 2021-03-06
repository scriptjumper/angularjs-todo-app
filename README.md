# AngularJS Todo App

## Quick Startup

### todo-list-api

Before running your app make sure you your rest api(backend) is running on `http://localhost:8000/api`, if that's not the case you can always change your backend url in the `app/app.js` file under the constant `baseUrl`.

Also make sure you have the nessesary database and tables for this app for more information on the database and backend go to <a href="https://github.com/scriptjumper/scriptjumper-api-laravel">scriptjumper-api-laravel</a>.

#### Cloning Repository

Use the following command to clone repository (if you have git cli):

```
$ git clone https://github.com/scriptjumper/angularjs-todo-app.git
```

alternatively you can download the zipped files.

Then, change directory in your terminal to the project directory:

```
$ cd angularjs-todo-app/
```

#### Installing required packages

Firstly you need to make sure you have node and npm installed if not please go <a href='https://nodejs.org/en/' target='_blank'>here</a> and follow the installation process to setup you machine.

Run the command below to install all the necessary packages:

```
$ npm ci
```

#### Launching App

Run the command below:

```
$ npm run dev
```

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
  "@angular/router": "^0.2.0",
  "angular": "1.5.6",
  "angular-cookies": "1.5.6",
  "angular-font-awesome": "^3.1.2",
  "angular-resource": "1.5.6",
  "angular-route": "1.5.6",
  "bootstrap": "^4.4.1",
  "font-awesome": "^4.7.0",
  "jquery": "3.3.x",
  "prettier": "^2.0.4"
}
```

then we running the command below:

```
$ npm i
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

Open the `.gitignore` file and add the code below:

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

In the head tag:

```
<html lang="en" ng-app="TodoApp">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo App</title>

    <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/font-awesome/css/font-awesome.css" />

    <link rel="stylesheet" type="text/css" href="app.css" />

    <base href="/" />
  </head>

  ...
```

In the body:

```
  ...
  <body>
    <app></app>

    <script type="module" src="dist/dependencies.js"></script>
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

## Creating First View and Component

### Setup App with ngComponentRouter

In the `app/components/app/` directory, we will be creating `app.js` file with the code below:

```
;(function () {
  angular.module('todoApp', ['ngComponentRouter'])
})()
```

Since we will be using lite-server to run the app, we add the code below beneath `angular.module` in `app.js`:

```
  ...

  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })

  ...
```

Configure the top level routed `App` Component.

```
  ...

  .value('$routerRootComponent', 'app')

  ...
```

Finally we can add our component:

```
  ...

  .component('app', {
    template: '<h1>Hello World!</h1>'
  });

  ...
```

Add a `<base>` element to the head of our index.html. Remember that we have chosen to use HTML5 mode for the `$location` service.

```
  ...
  <base href="/">
  </head>
  ...
```

Bootstrap with AngularJS.

```
<body ng-app="app">
  <h1 class="title">Component Router</h1>
  <app></app>
</body>
```

....

### Setting Up Login and Register Route

We'll start in the `app.js`, add the code below to setup the login route:

```
{ path: '/login', component: 'login', name: 'Login' }
```

Next, we create the `login.html` view file in `app/routes/login/` with a basic login form code:

```
<div class="container">

  ...

        <form name="form" role="form">
          <div class="form-group">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
          </div>
          <div class="form-group">
            <input type="password" name="password" id="password" class="form-control" placeholder="Password" required />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-block send-button tx-tfm">Login</button>
          </div>

          <p class="small mt-3">Are you new? why don't you create an account <a href="#" class="ps-hero__content__link">here</a>.</p>
        </form>

  ...
```

In the `app/routes/login/` directory, we will be creating `login.js` file with the code below:

```
;(function () {
  angular.module('app.login', []).component('login', {
    templateUrl: 'app/routes/login/login.html',
    controllerAs: '$ctrl',
    controller: [function() {}
      ...

```

In the main directory we create our custom styles, create the `app.css` file.
Code is available <a href='https://github.com/scriptjumper/angularjs-todo-app/blob/master/app.css'>here</a>

We do the same the process

In the html file for the register view, we add 2 extra inputs:

```
...

<div class="form-group">
  <input
    type="text"
    name="firstName"
    id="firstName"
    class="form-control"
    ng-model="$ctrl.registerFormDetails.firstName"
    placeholder="First Name"
  />
</div>

<div class="form-group">
  <input
    type="text"
    name="lastName"
    id="lastName"
    class="form-control"
    ng-model="$ctrl.registerFormDetails.lastName"
    placeholder="Last Name"
  />
</div>

...
```

## Linking all our scripts

In the main directory we create a file to contain all our scripts called `dist/dependencies.js`

```
// Libs
import '../../node_modules/jquery/dist/jquery.min.js'
import '../../node_modules/angular/angular.js'
import '../../node_modules/angular-route/angular-route.js'
import '../../node_modules/angular-cookies/angular-cookies.js'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../../node_modules/@angular/router/angular1/angular_1_router.js'
...

```

Then, in the `index.html` we import that dependency file

```
<script type="module" src="dist/dependencies.js"></script>
```

make sure you add the `type="module"` in the script link tag.

## Creating Service

We will create a service to handle all our requests to the backend.

First we create the follow folders called `services/` and `AuthenticationService/` in our `app/` directory.
Then we create our `AuthenticationService.js` file in the `app/services/AuthenticationService/` directory with basic service code:

```
;(function () {
  angular.module('TodoApp').factory('AuthenticationService', [
    function () {
      var AuthenticationService = {}

      return AuthenticationService
    }
  ])
})()
```

## Linking App To Backend

In our `app.js` with add a `.run()` that will contain the url address to our backend url, after the `.component()` method close we add the follow:

```
...
.run([
  '$rootScope',
  function ($rootScope) {
    $rootScope.backendUrl = 'http://localhost:8000/api'

    ...
```

## Setting Up Service For Backend Requests

Firstly, we need in inject our constant, we do this in our `app/services/AuthenticationService/AuthenticationService.js` file:

```
...
'$cookieStore',
'$rootScope',
'$timeout',
'baseUrl',
function ($http, $cookieStore, $rootScope, $timeout, baseUrl) {
      var AuthenticationService = {}
...
```

Then, we scrap all our functions in `app/services/AuthenticationService/AuthenticationService.js` and create methods that is going to send a request to our `backend`.

```
  AuthenticationService.Login = function (user) {
    $http
      .post(baseUrl + '/login', user)
      .success(function() {
        ...
      })
      .error(function() {
        ...
      })
  }

  ...
}
```

### Using Login Service

We will be the way we are getting data from our view and handling the requestion in the controller, by doing the following:

In `auth.html`,:
add the `ng-submit` attribute

```
<form name="form" ng-submit="submit()" role="form">

  ...
```

In `AuthCtrl.js`:

```
  AuthenticationService.Login($scope.userFormDetails)
```

For the registeration process we will be doing a similar procedure to the login request.

In `AuthCtrl.js`:

```
AuthenticationService.Register($scope.userFormDetails)
```

In `authService.js`:

```
  AuthenticationService.Register = function (user) {
    $http
      .post(baseUrl + '/register', user)
      .success(function() {
        ...
      })
      .error(function() {
        ...
      })
  }
```

## Todo Components

### Todo Task List Component

Firstly, we create our `todoTasks.html` file in the `app/routes/tasks/` directory with code below:

```

  <div class="col-md-12 mt-md-2">
    <ul class="list-group">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center">
          <span class="float-left">
            <button type="button" class="btn btn-success"><span class="fa fa-check"> </span></button>
          </span>
          <span>My first todo task</span>
          <span class="float-right">
            <a href="#/" class="btn btn-primary"><span class="fa fa-pencil"></span></a>
            <button type="button" class="btn btn-danger">
              <span class="fa fa-trash"> </span>
            </button>
          </span>
        </li>
      </ul>
    </ul>
  </div>

```

### Todo Form Component

Finally, we create our form file called `app/routes/tasks/todoTaskForm.html` with code below:

```

    <form name="todoTaskForm">
      <div class="form-group">
        <input type="text" class="form-control" name="title" placeholder="Task Title" required />
      </div>

      <div class="form-group">
        <button type="button" class="btn btn-success btn-lg btn-block"><span class="fa fa-save"></span> Save</button>
      </div>
      <div class="form-group">
        <a href="#/" class="btn btn-default btn-lg btn-block"><span class="fa fa-remove"></span> Cancel</a>
      </div>
    </form>

```

### Routing To Todo Components

In the `app.js` add the following:

```
...
{ path: '/tasks/...', component: 'tasks', name: 'Tasks' }
...
```

### Todo Task Controller

In our `app/routes/tasks/` directory we create our `TaskCtrl.js` file with the following code:

```
;(function () {
  angular
    .module('app.tasks', [])
    .component('tasks', {

      ...

```

### Todo Task Service

In our app/services/ directory we create a service file to handle all our todo task requests:

`app/services/taskService.js`:

```
;(function () {
  angular.module('TodoApp').factory('TodoTaskService', [
    function () {
      var TodoTaskService = {}

      TodoTaskService.FetchAllTodoTasks = function () {}

      TodoTaskService.SaveTodoTask = function (data) {}

      TodoTaskService.UpdateTodoTask = function (data) {}

      TodoTaskService.DeleteTodoTask = function (data) {}

      return TodoTaskService
    }
  ])
})()
```

Linking task service with controller:

```
// app/routes/tasks/TaskCtrl.js
....
'TodoTaskService',
    function (TodoTaskService) {
      ....
```

Importing file in our `dependencies.js`:

```
//  dist/dependencies.js

  ...

// Services
import '../app/services/authenticationService/authenticationService.js'
import '../app/services/taskService/taskService.js'
```

## Creating Navbar Component

We create our form file called `app/directives/navbarDirective.js` with code below:

```
;(function () {
  ;(function () {
  angular.module('app.navbar', []).component('navBar', {
    template: '<nav class="navbar navbar-light bg-light">'+
              '  <a class="navbar-brand" href="#">Navbar</a>'+
              '</nav>',

        ...
})()
```

For more template or how to create a `navbar` using `bootstrap` <a href="https://getbootstrap.com/docs/4.0/components/navbar/">go here</a>

# Updating user Details

Firstly, we create an update service method with the follow code:

```
// app/service/authService.js
...
service.UpdateCurrentUsersDetails = function (data) {
  $http.put($rootScope.backendUrl + '/user/update', user, )
    .success(function (response, status) {

      ...

    })
    .error(function (err) {

      ...

    })
}
...
```

## Avatar Upload

In `app/routes/profile/` we create a file `profileCtrl.js` and add the follow code to it:

```

  ...

  $ctrl.addImage = function () {
    var f = document.getElementById('file').files[0],
      r = new FileReader()
    $ctrl.newAvatar = true
    $rootScope.$apply()
    r.onloadend = function (e) {
      $ctrl.dataimg = 'data:image/jpeg;base64,' + btoa(e.target.result)
      var img = document.getElementById('newAvatar')
      img.src = $ctrl.dataimg
    }
    r.readAsBinaryString(f)
  }

  ...

```

Then, add the link to the directive in our `dist/dependencies.js` under our other directives:

```
// Routes
import '../app/routes/profile/profileCtrl.js'
```

We can now change our view to display our existing avatar image and also change our avatar.

Add the code below at top of `userProfile.html`:

```
<!-- views/userProfile.html -->

  ...

  <!-- show image -->

  <div class="row row-no-margin" style="margin-bottom: 1em;">
    <div class="col-xs-12 col-sm-12 col-no-padding" ng-show="filepreview == null">
      <img ng-src="{{userDetails.avatar}}" alt="" style="height: 200px; width: 200px;" class="thumbnail img-responsive rounded mx-auto d-block" />
    </div>
  </div>


  <!-- input type file for selecting file to upload as an avatar image -->

  <div class="custom-file" id="customFile" lang="es">
    <div class="col-md-12">
      <input type="file" fileinput="file" class="custom-file-input" filepreview="filepreview" />
      <label class="custom-file-label" for="exampleInputFile">
        Select image file...
      </label>
    </div>
  </div>

  ...

```

Then we add our functions to cancel upload and upload image in our `ProfileCtrl.js`:

```
...
$scope.handleAvatarUpload = function () {
  AuthenticationService.changeUserAvatar($scope.filepreview)
  .then(
    function(res) {
      ...
    },
    function(err) {
      ...
    })
}

$scope.cancelAvatarUpload = function () {
  // clear all binding variable here to rest file input
}
...
```

Finally, we can create our request in our service file and change avatar images from our app:

```
// app/service/authService.js
  ...

  service.changeUserAvatar = function (data) {
    $http
      .post($rootScope.backendUrl + '/user/avatar/new', data)
      .success(function (response, status) {
        ...
      })
      .error(function (err) {
        ...
      })
  }

  ...
```
