const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'gagan',
          name: 'Gagandeep Singh',
          phone: '9876543210',
          email: 'singh.gagandeep@gmail.com',
        },
        {
          id: 'troye',
          name: 'Troye Sivan',
          phone: '1234567890',
          email: 'troye@mail.com',
        },
      ],
    };
  },
});
app.mount('#app');
