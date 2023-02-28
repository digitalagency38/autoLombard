import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
//import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import BlockDistance from '../blocks/modules/block_distance/block_distance.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        header: new Header({
            someVareible: 'someVareible'
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
        BlockDistance: new BlockDistance({
            sliderOptions: {
                type: 'carousel',
                perView: 3,
                gap: 20,
                startAt: 0,
                breakpoints: {
                    1023: {
                        perView: 2,
                        gap: 16,
                    },
                    767: {
                        perView: 1
                    },
                    480: {
                        perView: 1,
                        peek: {
                            before: 16,
                            after: 16
                        }
                    }
                }
            }
        }),
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
        this.modals.init();
        this.BlockDistance.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
});