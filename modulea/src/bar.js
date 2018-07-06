function timeout(milliseconds = 0) {
  return function(target, key, descriptor) {
    var originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };

    return descriptor;
  };
}


export default class DemoComponent {
  @timeout()
  demoMethod() {
  }
}