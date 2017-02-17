angular.module("brawlApp", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('team-select', {
                url: '/',
                templateUrl: "../views/team-select/team-select.html"
            })
            // .state('roster', {
            //     url: '/roster/:id',
            //     parent: 'team-select',
            //     templateUrl: '../views/roster/roster.html'
            // })
            // .state('fight', {
            //     url: '/fight/:id',
            //     parent: 'roster',
            //     templateUrl: '../views/fight/fight.html'
            // })
            // .state('results', {
            //     url: '/results/:id',
            //     parent: "fight",
            //     templateUrl: '../views/results/results.html'
            // })

        $urlRouterProvider
            .otherwise('/');
    })
