import NotificationService from './notification'
import toastr from 'angular-toastr'
import angular from 'angular'

export default angular.module('bookmarky-notification', [toastr])
          .service('notificationService', NotificationService);
