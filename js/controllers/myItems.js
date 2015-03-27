'use strict';
app

.controller('MyItemsCtrl', function(
    $scope,
    $state,
    $timeout,
    $ionicPopup,
    $location,
    $ionicSideMenuDelegate,
    $ionicHistory,
    localStorageService) {

    $scope.$on('$ionicView.beforeEnter', function() {
        // Clear history since this might have been a forced redirect
        $ionicHistory.clearHistory();
    });

    $scope.currentItems = [
        {
            id: 0,
            name: "Anne Klein Perfect Medium Tote Handbag",
            imgUrl: "img/bag1.jpg",
            price: "$199.99",
            icon: "ion-music-note",
            description: "A tried-and-true tote dials up the cool quotient with this classic carryall offered in an array of colors and finishes from mod metallic to matte black."
        },
        {
            id: 1,
            name: "Marc Fisher Day by Day Horizontal Tote",
            imgUrl: "http://slimages.macys.com/is/image/MCY/products/9/optimized/1940059_fpx.tif",
            price: "$200.00",
            icon: "ion-music-note",
            description: "Sleek and styled for your daily endeavors, this classic carryall from Marc Fisher is the perfect choice. Rendered in smooth faux leather with polished hardware, the generous interior stashes all your here-to-there essentials."
        },
        {
            id: 2,
            name: "Nine West Hex 9 It Girl Small Shopper",
            imgUrl: "img/bag3.jpg",
            price: "$299.00",
            icon: "ion-music-note",
            description: "The Nine West Hex 9 It Girl Small Shopper is a smaller version of the classic tote bag, with a twist. New, hexagon-inspired designs cover the exterior of this discount Nine West tote. "
        },
        {
            id: 3,
            name: "Kenneth Cole Reaction KN1563 Large Shopper Multiplier Stripes",
            imgUrl: "img/bag4.jpg",
            price: "$4,999",
            icon: "ion-music-note",
            description: "New Kenneth Cole Reaction Logo , Gold Color Hardware. Very Spacious , Good for Any Occasions. Snap Clip closure. Metal Bars Design. interior zipper pocket & 2 open pockets for extra storage"
        },
        {
            id: 4,
            name: "Valco Baby Single Tri-Mode EX Stroller in Raven",
            price: "$10,000",
            description: "Valco Baby 2011 Quad Single Stroller Raven Black New Trimode Single w/ 4 wheels. Newly listed Valco Baby Tri-Mode Twin EX Stroller Candy Apple NEW In Box 2012 ,Raven is your choice- even the EX zip-out panel is black, Valco Single Tri-Mode",
            imgUrl: "img/stroller.jpg"
        },
    ];

    // Triggered on a button click, or some other target
    $scope.showdetails = function(item) {
        localStorageService.set('itemDetails', item.id);
        console.log(item.id + ": $state.go('app.itemDetails');");
        $state.go('app.itemDetails');
    };
});