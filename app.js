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

//  Custom Component
app.component('friend-contact', {
  // UI for Component
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide Details': 'Show Details' }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'gagan',
        name: 'Gagandeep Singh',
        phone: '9876543210',
        email: 'singh.gagandeep@gmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
