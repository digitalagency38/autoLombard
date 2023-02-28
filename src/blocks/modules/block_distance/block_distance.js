import Glide, { Controls, Breakpoints } from '@glidejs/glide';

const BlockDistance = class BlockDistance {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.slider = new Glide('.dist-glide-js', this.sliderOptions);
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.dist-glide-js')) return;
            this.slider.mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default BlockDistance;