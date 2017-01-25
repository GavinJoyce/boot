import Em from 'ember';

export default Em.Component.extend({
  actions: {
    button1() {
      debugger;
      console.log('button 1');
    },
    button2() {
      console.log('button 2');
    },
    button2Up() {
      console.log('button 2 up');
    },
    button3() {
      console.log('button 3');
    }
  }
});
