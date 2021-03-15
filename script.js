var app = angular.module('app',[]);



app.controller('mainController', function($scope){

    $scope.heroes = [
         {name: 'Alen', surname: 'Kljuno' , img:'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/782/ferrari-laferrari-once-owned-by-sebastian-vettel--photo-credit-which-car-tom-hartley-jnr_100782138.jpg',
        description:'sjoaopfjsidniosdogvbdfubšdfkvndfbdfkdfjbgdfšonbdfiobg'},
         {name: 'Denzel', surname: 'Washington' , img:'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/782/ferrari-laferrari-once-owned-by-sebastian-vettel--photo-credit-which-car-tom-hartley-jnr_100782138.jpg',
         description:'sjoaopfjsidniosdogvbdfubšdfkvndfbdfkdfjbgdfšonbdfiobg'},
         {name: 'Liam', surname: 'Nelson' , img:'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/782/ferrari-laferrari-once-owned-by-sebastian-vettel--photo-credit-which-car-tom-hartley-jnr_100782138.jpg',
         description:'sjoaopfjsidniosdogvbdfubšdfkvndfbdfkdfjbgdfšonbdfiobg'},
    ];

$scope.selected = null;


$scope.showHeroe = function(hero){
    $scope.selected = hero;
    console.log($scope.selected);
}


$scope.deleteHeroe = function(hero){
     $scope.heroes.splice(hero, 1)

}


});