import Glide, { Controls, Breakpoints } from '@glidejs/glide';

const BlockSteps = class BlockSteps {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.slider = new Glide('.step-glide-js', this.sliderOptions);
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.step-glide-js')) return;
            this.slider.mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default BlockSteps;