// Node.js’s event-driven nature aligns well with the Observer pattern. This pattern involves a subject that maintains a list of its dependents, called observers, and notifies them of any state changes. In the context of Node.js, this can be leveraged to build event-driven systems, such as real-time applications and chat applications.

class Subject {
    constructor() {
        this.observer = [];
    }

    subscribe (observer) {
        this.observers.push(observer);
    }

    unsubscribe (observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify () {
        this.observers.forEach(o => o.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(`${this.name} received ${data}`);
    }
}

const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello World');
// Observer 1 received Hello World 
// Observer 2 received Hello World

subject.unsubscribe(observer2);

subject.notify('Hello Again');
// Observer 1 received Hello Again