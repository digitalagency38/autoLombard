import Glide, { Controls, Breakpoints } from '@glidejs/glide';

const BlockInfo = class BlockInfo {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.slider = new Glide('.info-glide-js', this.sliderOptions);
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.info-glide-js')) return;
            this.slider.mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default BlockInfo;