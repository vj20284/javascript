class Subject {
    constructor() {
      this.observers = new ObserverList();
    }
  
    addObserver(observer) {
      this.observers.add(observer);
    }
  
    removeObserver(observer) {
      this.observers.removeAt(this.observers.indexOf(observer, 0));
    }
  
    notify(context) {
      const observerCount = this.observers.count();
      for (let i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
      }
    }
  }