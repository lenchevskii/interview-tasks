

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, cb) {
        if(!this.events[event]) {
           this.events[event] = [];
        }
        this.events[event].push(cb);
    }

    emit(event, ...args) {
        if(this.events[event]) {
            this.events[event].forEach(cb => cb(...args))
        } else {
            console.log("no subscription");
        }
    }

}
const myEmitter = new EventEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b);
  // Prints: a b
});
myEmitter.emit('event', 'a', 'b');
//
// class MyApp {
//   constructor() {
//     this.emitter = new EventEmitter();
//   }
//
//   createDom() {
//     this.button = document.createElement('button');
//     document.body.appendChild(this.button);
//     this.button.addEventListener('click', () => {
//       this.emitter.emit('press');
//     });
//     this.emitter.on('press', this.onPress);
//   }
//
//   onPress() {
//     this.log();
//   }
//
//   log() {
//     console.log('button was pressed');
//   }
// }
//
//
//
//
// const app = new MyApp();
// app.createDom();
