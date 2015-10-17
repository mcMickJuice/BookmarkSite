class NotificationService {
  constructor(toastr) {
    this.defaultOptions = {
      closeButton: true,
      newestOnTop: true,
      positionClass: 'toast-top-right',
      showDuration: 300,
      hideDuration: 700
    };

    this.toastr = toastr;
    toastr.options = this.defaultOptions;
  }

  error(message) {
    this.toastr.error(message);
  }

  success(message) {
    this.toastr.success(message);
  }

  info(message) {
    this.toastr.info(message);
  }
}

export default NotificationService
