import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
//import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import BlockDistance from '../blocks/modules/block_distance/block_distance.js';
import BlockReviews from '../blocks/modules/block_reviews/block_reviews.js';
import BlockInfo from '../blocks/modules/block_info/block_info.js';
import BlockSteps from '../blocks/modules/block_steps/block_steps.js';
import BlockPrev from '../blocks/modules/block_prev/block_prev.js';
import BlockPartners from '../blocks/modules/block_partners/block_partners.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            width: window.innerWidth,
            height: window.innerHeight,
            window: window.innerWidth
        },
        header: new Header({
            isMobileMenuOpened: false,
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
        BlockPartners: new BlockPartners({
            sliderOptions: {
                type: 'carousel',
                perView: 7,
                gap: 20,
                startAt: 0,
                autoplay: 3000,
                breakpoints: {
                    1340: {
                        perView: 4,
                        gap: 16,
                    },
                    1023: {
                        perView: 3,
                        gap: 16,
                    },
                    767: {
                        perView: 2
                    }
                }
            }
        }),
        BlockPrev: new BlockPrev({
            sliderOptions: {
                type: 'carousel',
                perView: 4,
                gap: 20,
                startAt: 0,
                breakpoints: {
                    1340: {
                        perView: 3,
                        gap: 16,
                    },
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
        BlockSteps: new BlockSteps({
            sliderOptions: {
                type: 'carousel',
                perView: 4,
                gap: 20,
                startAt: 0,
                breakpoints: {
                    1340: {
                        perView: 3,
                        gap: 16,
                    },
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
        BlockInfo: new BlockInfo({
            sliderOptions: {
                type: 'carousel',
                perView: 4,
                gap: 20,
                startAt: 0,
                breakpoints: {
                    1340: {
                        perView: 3,
                        gap: 16,
                    },
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
        BlockReviews: new BlockReviews({
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
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        this.isMounted = true;
        this.header.init();
        this.modals.init();
        this.BlockDistance.init();
        this.BlockInfo.init();
        this.BlockReviews.init();
        this.BlockSteps.init();
        this.BlockPrev.init();
        this.BlockPartners.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        },
        window: {
            get() {
                return {
                    width: this.sizes.window.width,
                    height: this.sizes.window.height
                }
            },
            set(newValue) {
                this.sizes.window = newValue;
            }
        }
    },
});