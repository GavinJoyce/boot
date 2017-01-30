import Em from 'ember';

export default Em.Controller.extend({
  actions: {
    sayHelloClassic() {
      alert('hello classic');
    },
    sayHelloClosure() {
      alert('hello closure');
    }
  }
});
