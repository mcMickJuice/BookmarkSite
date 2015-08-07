import {NotificationService} from './notification'
import toastr from 'angular-toastr'
import angular from 'angular'
console.log(toastr.name);

export default angular.module('bookmarky-notification', [toastr])
          .factory('notificationService', NotificationService);
