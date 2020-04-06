;(function () {
  angular.module('TodoApp').factory('TodoTaskService', [
    '$http',
    '$cookieStore',
    '$rootScope',
    '$timeout',
    'baseUrl',
    function ($http, $cookieStore, $rootScope, $timeout, baseUrl) {
      var service = {}

      service.FetchAllTodoTasks = function (callback) {
        var authentication = service.getAuthenticationHeaders(),
          res = {}

        var req = {
          method: 'GET',
          url: baseUrl + '/tasks',
          headers: {
            Authorization: `${authentication.token_type} ${authentication.access_token}`
          }
        }

        $http(req).then(
          function (response) {
            if (response.status === 200) {
              res.success = true
              res.data = response.data.data || []
            }

            sessionStorage.setItem('todoTasks', JSON.stringify(res.data))
            return callback(res)
          },
          function (response) {
            callback(response)
          }
        )
      }

      service.SaveTodoTask = function (data) {}

      service.UpdateTodoTask = function (data) {}

      service.DeleteTodoTask = function (data) {}

      service.getTodoTaskById = function (id) {
        var todoTasks = JSON.parse(sessionStorage.getItem('todoTasks')) || [],
          todoTask = {}

        todoTasks.forEach((todoTaskObj) => {
          if (todoTaskObj.id == id) {
            todoTask = todoTaskObj
            return
          }
        })

        return todoTask
      }

      service.getAuthenticationHeaders = function () {
        // get users authentication from localstorage
        var authentication = JSON.parse(localStorage.getItem('isAuthenticated'))

        return authentication
      }

      return service
    }
  ])
})()
