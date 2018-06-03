var app = angular.module('myApp', ['ngMaterial', 'ui.router','ngMessages']);
app.config(['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider)
    {
     
        $urlRouterProvider.otherwise("/home");
      
        $stateProvider
            .state('home',
            {
                url: '/home',
                templateUrl: '../../Views/Pages/DemoPage.html',
                controller:'AccountCtrl'
            })
            .state('reg',
            {
                url: '/reg',
                templateUrl: '../../Views/Pages/Register.html',
                     controller: 'AccountCtrl'
            })
            .state('signin',
            {
                url: '/signin',
                templateUrl: '../../Views/Pages/SignIn.html',
                controller: 'AccountCtrl'
            })
            .state('side',
            {
                url: '/side',
                templateUrl: '../../Views/Pages/Sidebar.html',
                controller:'AccountCtrl'
            })
            .state('hm',
            {
                url: '/hm',
                templateUrl: '../../Views/Pages/Home.html',
                controller:'AccountCtrl'
            })
            .state('profile',
            {
                url: '/profile',
                templateUrl: '../../Views/Pages/Profile.html',
                controller: 'AccountCtrl'
            })

            //.state('logout',
            //{
            //    url: '/logout',
            //    templateUrl: '../../Directive/Logout/Logout.html',
            //    controller: 'LogoutCtrl',
            //   // controller: 'AccountCtrl'
            //})

            .state('logout',
            {
                url: '/logout',
                templateUrl: '../../Directive/Logout/Logout.html',
                controller: 'AccountCtrl'
            })
            .state('insert',
            {
                url: '/insert',
                templateUrl: '../../Views/Pages/Inserted.html',
                controller: 'AccountCtrl'
            })
            
    }])