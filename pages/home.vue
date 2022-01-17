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
        <template v-for="card of this.$store.state.cards">
          <div class="" v-for="image of card.card_images" >
            <img class="h-auto" v-bind:src="image.image_url"/>
          </div>
        </template>
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
      // await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?format=ocg goat`)
      // .then((result) => result.json()).then(rs=>{
      //   console.log(rs)
      // })
    },
  },
};
</script>
