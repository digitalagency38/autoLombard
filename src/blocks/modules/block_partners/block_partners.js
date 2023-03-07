import Glide, { Controls, Breakpoints } from '@glidejs/glide';

const BlockPartners = class BlockPartners {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.slider = new Glide('.part-glide-js', this.sliderOptions);
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.part-glide-js')) return;
            this.slider.mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default BlockPartners;