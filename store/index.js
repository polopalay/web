import Vuex from "vuex";
import 'firebase/database';

const store = () => {
  return new Vuex.Store({
    state: {
      cards: [],
    },
    mutations: {
      searchDecks(state, cards) {
        state.cards = cards;
      },
    },
    actions: {
      searchDecks(context, text) {
      // const cards = this.$fire.database.ref('cards').orderByChild('name').equalTo(text.toLowerCase());
      const cards = this.$fire.database.ref('cards');
      cards.once('value',(snapshot)=>{
        let data= snapshot.val();
        context.commit("searchDecks", data?data:[]);
      })
        //  this.$axios.$get(
        //   `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=ocg goat`
        // ).then((rs) => {
        //   rs.data.forEach(element => {
        //     if(element.archetype) {
        //       element.archetype=element.archetype.toLowerCase();
        //     }
        //   });
        //   this.$fire.database.ref('cards').set(rs.data)
        //   console.log(rs.data)
        // }).catch(rs => {
        //   console.log(rs)
        // });
      },
    },
  });
};
export default store;
