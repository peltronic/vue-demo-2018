import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tours: [],
        videos: [],
        featuredVideos: []
    },
    mutations: {
        UPDATE_TOURS (state, payload) {
            state.tours = payload;
        },
        UPDATE_VIDEOS (state, payload) {
            state.videos = payload;
        }
    
    },
    actions: {
        getTours({ commit }, take) {
            // /api/tours
            axios.get('/api/tours?take='+take).then( (response) => {
                commit('UPDATE_TOURS', response.data);
            });
        },
        getVideos({ commit }, take) {
            // /api/videos
            axios.get('/api/videos?take='+take).then( (response) => {
                commit('UPDATE_VIDEOS', response.data);
            });
        }
    
    },
    getters: {
        tours: state => state.tours,
        videos: state => state.videos
    }
})
