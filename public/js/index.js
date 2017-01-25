//factory of dummy accounts, maybe 4-5 people
    //login ==opens model with sign in info
// make them find each other on google map (add marker on map) or at least how far away they are from each other [Bob is 4 miles away] list
//add SoundCloud link
//add Eventful API for concerts search favorite band
//


// In order to use ngRoute as our router, we have to define what routes it should be looking for
// angular.module('JamSession')
//   .config(Router);
//
// Router.$inject = ['$routeProvider']; // Inject component from ngRoute




// function Router ($routeProvider) {
//
//   $routeProvider
//     .when('/', {
//       templateUrl   : '/home.html',// URL on your server that leads to an html file to be used for this page
//       controller    : 'jamTime', // String name of the angular controller you would like to use on this page
//       controllerAs  : 'jCtrl'  // Object name for `this` in your html from the specified controller
//     })
//
//     .when('/profilepage', {
//       templateUrl   : '/profilepage.html',
//     //  controller    : "jCtrl.saveUser()"
//     })
//     .when('/connect', {
//       templateUrl   : '/connect.html',
//     })
//     .when('/signup', {
//       templateUrl   : '/signup.html',
//     })
// //     .when('/login', {
// //       templateUrl   : '/login.html',
// //     })
// }

// User Factory here

// angular.module("JamSession")
//   .controller("jamTime", userCtrl)
//
// userCtrl.$inject = ["userFactory", "$location"] //factory, $location



angular.module('JamSession', [])
       .controller("jamTime", userCtrl)



function userCtrl ($http) {

     var uCtrl = this;
     var mapOptions = {
         zoom: 18,
         center: new google.maps.LatLng(39.919218, -105.008815),
         scrollwheel: false,

     };


     uCtrl.map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

   $http.get('/api/me')
    .then(function(response){
        if(response.data){
             uCtrl.user = response.data;
             uCtrl.isSignedIn = true;
        }

     });

   $http.get('/api/users')
   .then(function(response){
        uCtrl.userList = response.data;
        uCtrl.userList.forEach(function(user){
             console.log(user);
            var marker = new google.maps.Marker({
                map : uCtrl.map,
                position : {
                    lat : user.coords[0],
                    lng : user.coords[1]
                }
            })
            console.log(marker.addListener);
            var infoWindowContent =
'<h1>' + user.name + '</h1> <p>' +
user.genre + '</p> <p>' +
user.instrument + '</p> <p>' + user.favoriteBand + '</p> <a ng-show="uCtrl.isSignedIn" class="btn btn-info" href="mailto:{{uCtrl.user.email}}">' + "Let's Jam!" + '</a>'
            var infoWindow = new google.maps.InfoWindow({
                content : infoWindowContent
            })

            marker.addListener('click', function(){
                infoWindow.open(uCtrl.map, marker)
            })
            

        })


     });

uCtrl.saveUser = function(){
     $http.post('/api/users/' + uCtrl.user._id, uCtrl.user)
     .then(function(respose){
          uCtrl.isOnProfilePage = true;
     });
}







};
//
// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }

// 1870 W 122nd Ave
// Westminster, CO 80234
// 39.919603, -105.009085

// function userCtrl (userFactory) {
//   var jCtrl = this;
//    jCtrl.userInfo= userFactory.userdata;
//
//
//
//
//     //
//    jCtrl.saveUser = function (){
//        userFactory.userdata.push(jCtrl.newUser)
//        userFactory.currentUser = jCtrl.newUser
//        $location.url("/profilepage");
//    }
//    jCtrl.connectUser = function (){
//        $location.url("/connect");
//    }
// /*
//     jCtrl.addUser = function(){
//     jCtrl.userFactory.push(jCtrl.newUser);
//      // Take the object newUser that came from ngModel and push it into the collectibles array
//      // this will reset the form AND create a new object
//   }
// */
//    jCtrl.newUser = {};
//
//
// }



//
// // ----------FACTORY------------
//
//
// angular.module("JamSession")
//   .factory("userFactory", mainuserFactory);
//
//
//
// function mainuserFactory () {
//   var userInfo = [
//     {
//       fn : "Kevin",
//       ln : "LeFevre",
//       email: "kevin.lefevre@gmail.com",
//       instrument: "Guitar",
//       zipcode: 80526,
//       host: "Yes",
//       othersplay: "No",
//       genre1: "Blues",
//       genre2: "Indie",
//       genre3: "Rock",
//     },
//        {
//       fn : "",
//       ln : "",
//       email: "",
//       instrument: "",
//       zipcode: "",
//       host: "",
//       othersplay: "",
//       genre1: "",
//       genre2: "",
//       genre3: "",
//     },
//        {
//       fn : "",
//       ln : "",
//       email: "",
//       instrument: "",
//       zipcode: "",
//       host: "",
//       othersplay: "",
//       genre1: "",
//       genre2: "",
//       genre3: "",
//     },
//
//   ];
//
//   //   ALL FACTORIES MUST HAVE A RETURN STATEMENT!
//   return {
//     userdata : userInfo
//   }
//
// }
