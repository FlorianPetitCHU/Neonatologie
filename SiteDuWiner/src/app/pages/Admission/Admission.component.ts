import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './Admission.component.html',
  styleUrls: ['./Admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}
// var app = angular.module("myapp", []);
// app.controller("ListController", ['$scope', function($scope) {
//     $scope.personalDetails = [
//         {
//             'fname':'Muhammed',
//             'lname':'Shanid',
//             'email':'shanid@shanid.com'
//         },
//         {
//             'fname':'John',
//             'lname':'Abraham',
//             'email':'john@john.com'
//         },
//         {
//             'fname':'Roy',
//             'lname':'Mathew',
//             'email':'roy@roy.com'
//         }];

//         $scope.addNew = function(personalDetail){
//             $scope.personalDetails.push({
//                 'fname': "",
//                 'lname': "",
//                 'email': "",
//             });
//         };

//         $scope.remove = function(){
//             var newDataList=[];
//             $scope.selectedAll = false;
//             angular.forEach($scope.personalDetails, function(selected){
//                 if(!selected.selected){
//                     newDataList.push(selected);
//                 }
//             });
//             $scope.personalDetails = newDataList;
//         };

//     $scope.checkAll = function () {
//         if (!$scope.selectedAll) {
//             $scope.selectedAll = true;
//         } else {
//             $scope.selectedAll = false;
//         }
//         angular.forEach($scope.personalDetails, function(personalDetail) {
//             personalDetail.selected = $scope.selectedAll;
//         });
//     };


//}]);
