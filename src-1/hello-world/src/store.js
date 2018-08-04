import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tours: [],
        featuredVideos: []
    },
    mutations: {
        UPDATE_TOURS (state, payload) {
            state.tours = payload;
        }
    
    },
    actions: {
        getTours({ commit }) {
            // /api/tours
            axios.get('/api/tours').then( (response) => {
                commit('UPDATE_TOURS', response.data);
            });
        }
    
    },
    getters: {
        tours: state => state.tours
    }
})
