<template>
<div>


<b-row id="preview">
    <b-col id="crate-image" class="col-6">
        <img rel="canonical" class="original" v-bind:src="imageUrl">
        <!--
        style="opacity: 1; max-width: calc(50vw - 0px); max-height: calc(100vh - 0px); transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);">
        -->
    </b-col>
    <b-col id="crate-description" class="col-6">
        <button v-on:click="closePreview" class="action action--close"><close-icon /><span class="text-hidden">Close</span></button>

        <div class="description description--preview">
            <b-row>
                <b-col>
                    <h6 class="item-sub">{{title}}</h6>
                    <h3 class="item-heading">{{artist}}</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="col-2">
                    <div v-on:click="FWDRL.show('lbid_4colRadio', 0)">
                        <div class="cat-icon"><img class="mic" src="/img/icons8-Microphone-100-white.png"></div>
                    </div>
                    <ul id="lbid_4colRadio" class="radio-links flex-col">
                        <li id="audioGeneric" v-b-modal.modal-audio_player data-url="./audio/BlueDucks_FourFlossFiveSix.mp3" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="600">
                            <h4><microphone-icon />Generic</h4>
                        </li>
                        <li id="audioAmex"  v-b-modal.modal-audio_player data-url="./audio/BlueDucks_FourFlossFiveSix.mp3" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="600">
                            <h4><microphone-icon />Amex</h4>
                        </li>
                        <li id="audioCiti" v-b-modal.modal1 data-url="./audio/BlueDucks_FourFlossFiveSix.mp3" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="600">
                            <h4><microphone-icon />Citi</h4>
                        </li>
                    </ul>
                </b-col>
                <b-col class="col-2">
                    <div v-on:click="FWDRL.show('lbid_4colTV', 0)">
                        <div class="cat-icon"><img class="monitor" src="img/icons8-Monitor-100-white.png"></div>
                    </div>
                    <ul id="lbid_4colTV" class="flex-col">
                        <li id="videoGeneric" v-on:click="FWDRL.show('lbid_4colTV', 0)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon />Generic</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoAmex" v-on:click="FWDRL.show('lbid_4colTV', 1)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon />Amex</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoCiti" v-on:click="FWDRL.show('lbid_4colTV', 2)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon />Citi</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoSuperless" v-on:click="FWDRL.show('lbid_4colTV', 3)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon />Superless</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoXSupport" v-on:click="FWDRL.show('lbid_4colTV', 4)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon />XSupport</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoYSupport" v-on:click="FWDRL.show('lbid_4colTV', 5)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon />YSupport</h4>
                            <p class="description"></p>
                        </li>
                        <li id="videoSolo" v-on:click="FWDRL.show('lbid_4colTV', 6)" data-url="./assets/98920-3f854-GTC091953.mp4" data-poster-path="./img/revsliders/covers/d2a77-es.png" data-thumbnail-path="./img/revsliders/covers/d2a77-es.png" data-width="800" data-height="450">
                            <h4><play-circle-outline-icon />Solo</h4>
                            <p class="description"></p>
                        </li>
                    </ul>
                </b-col>
                <b-col class="col-2">
                    <div v-on:click="FWDRL.show('lbid_4colArt', 0)">
                        <div class="cat-icon"><img class="resolution" src="img/icons8-Resolution-100-white.png"></div>
                    </div>
                    <ul id="lbid_4colArt" class="flex-col">
                        <li id="artworkPortrait" v-on:click="FWDRL.show('lbid_4colArt', 0)" data-url="./img/04.jpg" data-thumbnail-path="./img/04.jpg">
                            <h4><pencil-icon />Portrait</h4>
                        </li>
                        <li id="artworkLandscape" v-on:click="FWDRL.show('lbid_4colArt', 1)" data-url="./img/04.jpg" data-thumbnail-path="./img/04.jpg">
                            <h4><pencil-icon />Landscape</h4>
                        </li>
                    </ul>
                </b-col>
            </b-row>

        </div>
    </b-col>
</b-row>

<!-- Modal Component -->
<b-modal centered hide-header hide-footer id="modal-audio_player" title="Bootstrap-Vue">
    <h3>title...{{title}}</h3>
    <audio controls>
        <!--
        <source src="http://www.l5-dev-gtc.com/cdn/audio/BlueDucks_FourFlossFiveSix.mp3" type="audio/mpeg">
        <source src="http://www.l5-dev-gtc.com/cdn/audio/BlueDucks_FourFlossFiveSix.ogg" type="audio/ogg">
        -->
        <source v-bind:src="mp3Url" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio> 
</b-modal>

</div>
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
        artist: String,
        mp3Url: String,
        imageUrl: String
    },
    methods: {
        closePreview(e) {
            this.$store.dispatch('hidePreview');
        },
    },
    components: {
        CloseIcon,
        MicrophoneIcon,
        PencilIcon,
        PlayCircleOutlineIcon
    }
}
</script>

<style lang="scss">
.modal-content,
.modal-body {
    background-color: inherit;
    border: none !important;
}
</style>

<style scoped lang="scss">
#crate-image img {
    width: 100%;
}
img.mic, img.monitor, img.resolution {
    width: 40px;
}
ul {
    //display: flex;
    list-style: none;
    padding-left: 0;
    margin-top: 15px;
}
ul.radio-links > li {
    cursor: pointer;
}

button {
    text-align: center;
    text-transform: uppercase;
}
.action {
    font-size: 1.5em;
    margin: 0;
    padding: 0;
    vertical-align: top;
    color: #fff;
    border: none;
    background: none;
}
button.action.action--close .material-design-icon {
    font-size: 60px;
    cursor: pointer;
}
.action--close {
    position: fixed;
    z-index: 150;
    top: 0;
    right: 0;
    padding: 1em;
    /*
    opacity: 0;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: scale3d(0.6, 0.6, 1);
    transform: scale3d(0.6, 0.6, 1);
    */
}
.text-hidden {
    position: absolute;
    display: block;
    overflow: hidden;
    width: 0;
    height: 0;
    color: transparent;
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
ul li h4 {
    font-size: 16px;
    text-align: left;
    text-transform: none;
    //letter-spacing: .1em;
    //line-height: 1em !important;
    //height: 20px;
}
ul li h4 .material-design-icon {
    margin-right: 3px;
}
/*
.details ul {
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
    //-webkit-transition: -webkit-transform 1s, opacity 1s;
    //transition: transform 1s, opacity 1s;
    //-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    //transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    //-webkit-transform: translate3d(0, 20px, 0);
    //transform: translate3d(0, 20px, 0);
}
*/
/*
.item-list {
    margin-top: 20px;
    min-height: 100px;
    //max-width: 100px;
}
.item-list ul {
    align-items: flex-start;
}

.item-list ul li {
    -webkit-transition: -webkit-transform 1s, opacity 1s;
    transition: transform 1s, opacity 1s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
    height: 32px;
    padding: 0px 10px 0px 0;
    margin-right: 0;
    margin-bottom: 10px;
    min-width: 130px;
    cursor: pointer;
}
*/

</style>
