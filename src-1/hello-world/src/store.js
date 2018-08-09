import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isPreviewVisible: false,
        tours: [],
        videos: [],
        featuredVideos: []
    },
    mutations: {
        SHOW_PREVIEW (state, payload) {
            state.isPreviewVisible = true;
        },
        HIDE_PREVIEW (state, payload) {
            state.isPreviewVisible = false;
        },
        UPDATE_TOURS (state, payload) {
            state.tours = payload;
        },
        UPDATE_VIDEOS (state, payload) {
            state.videos = payload;
        }
    
    },
    actions: {
        showPreview({ commit } ) {
            commit('SHOW_PREVIEW', null);
        },
        hidePreview({ commit } ) {
            commit('HIDE_PREVIEW', null);
        },
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
        isPreviewVisible: state => state.isPreviewVisible,
        tours: state => state.tours,
        videos: state => state.videos
    }
})
