<template>
  <div>
    <div class="container">
      <h1>Cards</h1>
      <form class="mb-2" v-on:submit.prevent="search">
        <input class="form-control" v-model="input" />
      </form>
      <div>
        <div v-if="cards.lenght === 0">Not found</div>
        {{ cards.lenght }}
        <div class="row">
          <div class="col-md-3 mb-2" v-for="card of cards" :key="card.title">
            <img class="img-fluid" v-bind:src="card.card_images[0].image_url" />
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
      cards: [],
      input: "",
    };
  },
  methods: {
    async search() {
      let rs = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?${
          this.input === "" ? "" : `archetype=${this.input}`
        }`
      ).then((res) => res.json());
      if (!rs.error) {
        this.cards = rs.data;
      }
      console.log(rs);
    },
  },
};
</script>
