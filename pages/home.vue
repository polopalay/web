<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-3xl text-yellow-300">Cards</h1>
      <form class="mb-2" v-on:submit.prevent="search">
        <input
          class="w-64 border border-b-green-500 bg-green-100 outline-none"
          v-model="input"
        />
      </form>
      <div>
        <h1
          class="text-3xl text-red-600"
          v-if="this.$store.state.cards.length === 0"
        >
          Not found
        </h1>
        <div class="grid grid-cols-10 gap-1">
          <div
            class=""
            v-for="card of this.$store.state.cards"
            :key="card.title"
          >
            <img class="h-auto" v-bind:src="card.card_images[0].image_url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    async search() {
      await this.$store.dispatch("searchDecks", this.input);
    },
  },
};
</script>
