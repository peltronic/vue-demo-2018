<template>
<b-row class="preview preview--open preview--image-loaded">
<b-col>
    <img rel="canonical" class="original" v-bind:src="imageUrl">
    <!--
    style="opacity: 1; max-width: calc(50vw - 0px); max-height: calc(100vh - 0px); transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);">
    -->
</b-col>
<b-col>
    <button v-on:click="monitorClose" class="action action--close"><close-icon /><span class="text-hidden">Close</span></button>
    <div class="description description--preview">
        <h6 class="item-sub">2018</h6>
        <h3 class="item-heading">{{title}}</h3>
        <div class="details">
            <ul>
                <li v-on:click="FWDRL.show('lbid_4colRadio', 0)">
                    <div class="cat-icon"><img class="mic" src="img/icons8-Microphone-100-white.png"></div>
                </li>
                <li v-on:click="FWDRL.show('lbid_4colTV', 0)">
                    <div class="cat-icon"><img class="monitor" src="img/icons8-Monitor-100-white.png"></div>
                </li>
                <li v-on:click="FWDRL.show('lbid_4colArt', 0)">
                    <div class="cat-icon"><img class="resolution" src="img/icons8-Resolution-100-white.png"></div>
                </li>
            </ul>
        </div>
        <div class="item-list">
            <ul>
                <li>
                    <ul id="lbid_4colRadio" class="flex-col">
                        <li id="audioGeneric" v-on:click="FWDRL.show('lbid_4colRadio', 0)" data-url="./audio/BlueDucks_FourFlossFiveSix.mp3" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="600">
                            <h4><microphone-icon /><i class="material-icons">mic</i> Generic</h4>
                        </li>
                        <li id="audioAmex" v-on:click="FWDRL.show('lbid_4colRadio', 1)" data-url="./audio/BlueDucks_FourFlossFiveSix.mp3" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="600">
                            <h4><microphone-icon /><i class="material-icons">mic</i> Amex</h4>
                        </li>
                        <li id="audioCiti" v-on:click="FWDRL.show('lbid_4colRadio', 2)" data-url="./audio/BlueDucks_FourFlossFiveSix.mp3" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="600">
                            <h4><microphone-icon /><i class="material-icons">mic</i> Citi</h4>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul id="lbid_4colTV" class="flex-col">
                        <li id="videoGeneric" v-on:click="FWDRL.show('lbid_4colTV', 0)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon /><i class="material-icons">play_circle_outline</i> Generic</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoAmex" v-on:click="FWDRL.show('lbid_4colTV', 1)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon /><i class="material-icons">play_circle_outline</i> Amex</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoCiti" v-on:click="FWDRL.show('lbid_4colTV', 2)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon /><i class="material-icons">play_circle_outline</i> Citi</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoSuperless" v-on:click="FWDRL.show('lbid_4colTV', 3)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon /><i class="material-icons">play_circle_outline</i> Superless</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoXSupport" v-on:click="FWDRL.show('lbid_4colTV', 4)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon /><i class="material-icons">play_circle_outline</i> XSupport</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoYSupport" v-on:click="FWDRL.show('lbid_4colTV', 5)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon /><i class="material-icons">play_circle_outline</i> YSupport</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoSolo" v-on:click="FWDRL.show('lbid_4colTV', 6)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon /><i class="material-icons">play_circle_outline</i> Solo</h4>
                            <p class="description"></p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul id="lbid_4colArt" class="flex-col">
                        <li id="artworkPortrait" v-on:click="FWDRL.show('lbid_4colArt', 0)" data-url="./img/04.jpg" data-thumbnail-path="./img/04.jpg">
                            <h4><pencil-icon /><i class="material-icons">create</i> Portrait</h4>
                        </li>
                        <li id="artworkLandscape" v-on:click="FWDRL.show('lbid_4colArt', 1)" data-url="./img/04.jpg" data-thumbnail-path="./img/04.jpg">
                            <h4><pencil-icon /><i class="material-icons">create</i> Landscape</h4>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</b-col>
</b-row>


</template>

<script>

import CloseIcon from "vue-material-design-icons/close.vue"
import MicrophoneIcon from "vue-material-design-icons/microphone.vue"
import PencilIcon from "vue-material-design-icons/pencil.vue"
import PlayCircleOutlineIcon from "vue-material-design-icons/play-circle-outline.vue"

export default {
    name: 'TourPreview',
    props: {
        title: String,
        imageUrl: String
    },
    methods: {
        monitorClose() {
            this.$emit('close-preview', {
                //note: this.input,
                //timestamp: new Date().toLocaleString()
            })
        }
    },
    components: {
        CloseIcon,
        MicrophoneIcon,
        PencilIcon,
        PlayCircleOutlineIcon
    }
}
</script>

<style scoped lang="scss">
ul {
    list-style: none;
}
.details ul {
    display: flex;
    line-height: 1;
    position: relative;
    margin: 0;
    padding: 0;
}
.details ul li {
    font-size: 0.5em;
    position: relative;
    display: flex;
    margin: 0 1em 0 0;
    padding: 0.15em 0;
    white-space: nowrap;
    color: #9d9d9d;
    justify-content: left;
    flex-direction: row;
    align-items: center;
    min-width: 130px;
    /*
    -webkit-transition: -webkit-transform 1s, opacity 1s;
    transition: transform 1s, opacity 1s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
    */
}
.cat-icon {
    background: #333;
    padding: 15px;
    width: 80px;
    height: 66px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: center;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    //transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
img.mic, img.monitor, img.resolution {
    width: 40px;
}
</style>
