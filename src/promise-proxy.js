export default class {
  constructor(promise) {
    this.promise = promise;
    this.fulfilled = false;
    this.rejected = false;
    this.completed = false;
    this.promise.then(() => {
      this.fulfilled = true;
      this.completed = true;
    }, () => {
      this.rejected = true;
      this.completed = true;
    });
  }

  then(...args) {
    return new this.constructor(this.promise.then(...args));
  }

  catch(...args) {
    return new this.constructor(this.promise.catch(...args));
  }
}