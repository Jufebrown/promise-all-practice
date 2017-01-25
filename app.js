// example code

firebase.auth().onAuthStateChange(function(user) {
  if(user) {
    //send to good page
  } else {
    //send to login page
  }
})



.controller('MainCtrl', function ($q, $http) {

  if (firebase.auth().currentUser === null) {
    return $location.url('login')
  }


  $q.all([
      $http.get(thing1),
      $http.get(thing2),
      $http.get(thing3)
    ])
  .then((array) => {
    console.log(array) // => [{data:dataforthing1}, {dataforthing2},{dataforthing3}]
  })
})
