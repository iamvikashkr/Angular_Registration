/// <reference path="../scripts/app/app.js" />


app.controller('AccountCtrl', function ($scope, $mdSidenav, $window, $mdToast) {



    $scope.toggleLeft = function () {

        $mdSidenav('left').open();
    }
    $scope.close = function () {

        $mdSidenav('left').close();

    }
    $scope.test = function () {

        $mdSidenav('left').close();

        var temp = "logout";
        $window.sessionStorage.setItem('ex', temp);
    }
  
    $scope.Toast = function () {

        if ($scope.page == "Logout") {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Logged Out Successfull!!!!!')
                    .position('right')
                    .hideDelay(3000)
            );
        }
    }
   
    
    

    var hold = $window.sessionStorage.getItem('ex');
    if (hold != "logout") {
        $scope.page = "Logout";
        $scope.pg = "signin";
        $scope.inside = "profile";
        $scope.title = "Home";
        //var temp = "logout";
        //$window.sessionStorage.setItem('ex', temp);
    }
    else {
        $scope.page = "SignIn";
        $scope.pg = "signin";
        $scope.title = "Home";
        $scope.inside = "home";
        //var temp = "logout";
        //$window.sessionStorage.setItem('ex', temp);

    }

    $scope.reg = function () {

        var data = JSON.stringify($scope.model);
        console.log(data);

        var arr = new Array();


        arr.push(data);
        localStorage.setItem('demo', arr);



    }
    $(document).ready(function () {

        $("#regbtn").on('click', function () {
            window.history.forward();


            //var fname = $("#fname").val();
            //var mname = $("#mname").val();
            //var lname = $("#lname").val();

            //var aadhar = $("#aadhar").val();
            //var mobile = $("#mobile").val();
            //var address1 = $("#address1").val();
            //var address2 = $("#address2").val();
            //var city = $("#city").val();
            //var district = $("#district").val();
            //var pin = $("#Pin").val();

            //var email = $("#email").val();



            var data1 = JSON.parse(localStorage.getItem('demo'));
            //console.log("jQuery" + data1);
            //var gender = data1.gender;
            //var dob = data1.dob;
            //var city = data1.city;
            //var district = data1.district;
            //var pin = data1.Pin;
            //var state = data1.state;
            //var country = data1.country;
            //var role = data1.role;
            //var password = data1.password;


            var objUser =
                {
                    fname: $("#fname").val(),
                    mname: $("#mname").val(),
                    lname: $("#lname").val(),
                    aadhar: $("#aadhar").val(),
                    mobile: $("#mobile").val(),
                    address1: $("#address1").val(),
                    address2: $("#address2").val(),
                    city: $("#city").val(),
                    district: $("#district").val(),
                    pin: $("#Pin").val(),
                    email: $("#email").val(),
                    gender: data1.gender,
                    dob: data1.dob,
                    state: data1.state,
                    country: data1.country,
                    role: data1.role,
                    password: data1.password,
                };


            //var data12 = '{ fname: "' + data1.role + '",mname:"' + data1.password + '"}'

            //var name = "Vikash";


            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "Account1.asmx/Register",
                data: "{name:'" + JSON.stringify(objUser) + "'}",
                dataType: "json",
                success: function (response) {
                    console.log("Data is :" + response.d);
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Successfully Registered!!!!')
                            .position('right')
                            .hideDelay(3000)
                    );

                    window.top.location.href = "http://localhost:52842/Index.html#!/signin";
                },
                error: function (response) {
                    console.log(response.d);
                    alert(response.d);
                }
            });



        });
    });

    $(document).ready(function () {
        window.history.forward();
        $("#signbtn").on('click', function () {
            //debugger;
            window.history.forward();

            var email = $("#email").val();
            var password = $("#password").val();

            console.log(email + password);

            var obj = { email: $("#email").val(), password: $("#password").val(), };
            console.log(obj);

            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "Account1.asmx/Sign",
                data: "{name:'" + JSON.stringify(obj) + "'}",
                dataType: "json",
                success: function (response) {
                    if (response.d == "error") {
                        alert("Faliure!! Data Not Found");
                    }
                    else {
                        var data = response.d;
                        var pro =
                            {
                                'fname': data[0],
                                'mname': data[1],
                                'lname': data[2],
                                'gender': data[3],
                                'dob': data[4],
                                'aadhar': data[5],
                                'mobile': data[6],
                                'address1': data[7],
                                'adderss2': data[8],
                                'city': data[9],
                                'district': data[10],
                                'pin': data[11],
                                'state': data[12],
                                'country': data[13],
                                'role': data[14],
                                'email': data[15],
                            }
                        localStorage.setItem('profile', JSON.stringify(pro));
                        $window.sessionStorage.setItem('ex', "login");
                        console.log("Data is :" + response.d);
                        window.top.location.href = "http://localhost:52842/Index.html#!/profile";
                        // alert("Data Found:"+response.d);
                    }
                },
                error: function (response) {
                    console.log(response.d);
                    alert(response.d);
                }
                //window.parent.location.href = "Index.html";
            });

        });

    });
});

