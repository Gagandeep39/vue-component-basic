# Components

- [Components](#components)
  - [Description](#description)
  - [Implementation](#implementation)

## Description

- Reuse certian parts of HTML in different part of application
- Enclose data
- Create functionality specific to that HTML block
- Official feature provided by VueJS
- Basically a custom HTML element
- In Vue, we can sat it as An app (child app) belonging to another app
- It can have its own method, data, watcher etc

## Implementation

- `app.component(id, definition)`
- id is the component name
- We must always use a multiword name separated by `-`
  - eg. `friend-contact`, `my-header`

```js
//  Custom Component with static data
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

```
