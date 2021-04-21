<template>
    <div class="main">
        <div class="slider">
            <div class="wrapper">
                <swiper ref="mySwiper" :options="swiperOption"
                        class="slider__wrapper wrapper--slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                    <swiper-slide v-for="(slide, index) in sliders.top" :key="index">
                        <div class="slider__link click" v-on:click="openProduct(slide.product)">
                            <div class="slider__baner">
                                <img alt="Micro_micro-se" class="slider__img swiper-lazy swiper-lazy-loaded"
                                     :src="slide.url">
                                <p class="slider__text title">
                                <p class="slider__text title">{{ slide.title.first }}
                                    <span class="slider__text--black">{{ slide.title.second }}</span>
                                </p>
                            </div>
                            <div class="slider__footer">
                                <h2 class="slider__title title">{{ slide.footer.first }}</h2>
                                <p class="slider__text-footer">{{ slide.footer.second }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                         slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="slider">
            <div class="wrapper">
                <swiper ref="mySwiper" :options="swiperOption"
                        class="slider__wrapper wrapper--slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                    <swiper-slide v-for="(slide, index) in sliders.mid" :key="index">
                        <div class="slider__link click" v-on:click="openProduct(slide.product)">
                            <div class="slider__baner">
                                <img alt="Micro_micro-se" class="slider__img swiper-lazy swiper-lazy-loaded"
                                     :src="slide.url">
                                <p class="slider__text  slider__text--discount " :class="{ 'slider__text--right': (slide.float === 'right') }">
                                    скидки до <br><span class="slider__text--discount-b">{{ slide.discount}}%</span>
                                </p>
                            </div>
                            <div class="slider__footer">
                                <h2 class="slider__title title">{{ slide.footer }}</h2>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                         slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="menu">
            <div class="wrapper">
                <div class="menu__wrapper">
                    <div class="menu__col">
                        <ul class="menu__widget widget">
                            <li class="widget__item" v-for="(item, index) in menu" :data-image="item.img" :key="index"
                                @mouseover="selectImg(item.name)" :class="{ active: (item.name === catHover) }">
                                <div class="widget__link"  v-on:click="openProduct(item.name)">
                                    {{ item.title }}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="menu__col">
                        <img alt="micro" class="menu__img" :src="imgProduct">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import base from '../assets/mixins/base.js';
    import 'swiper/css/swiper.css'


    // Import Swiper styles

    export default {
        created(){
            this.getMenu()
        },
        mixins: [base],
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        name: "Index",
        data() {
            return {
                sliders: {
                    top: [
                        {
                            url: require('../assets/img/banners/micro_micro-se.jpg'),
                            title: {
                                first: 'побалуй',
                                second: 'себя выбором'
                            },
                            product: 'micro',
                            footer: {
                                first: 'Micro и micro se',
                                second: 'спутниковые колонки'
                            },
                        },
                        {
                            url: require('../assets/img/banners/droplet.jpg'),
                            title: {
                                first: 'Давай',
                                second: 'зажжём'
                            },
                            product: 'micro_droplet',
                            footer: {
                                first: 'droplet',
                                second: 'подвесная акустика'
                            },
                        },
                        {
                            url: require('../assets/img/banners/PROFILESUBx2.jpg'),
                            title: {
                                first: 'держаться',
                                second: 'в тени'
                            },
                            product: 'subwoofers',
                            footer: {
                                first: 'PROFILESUB',
                                second: 'сабвуфер'
                            },
                        }
                    ],
                    mid: [
                        {
                            url: require('../assets/img/banners/micro.jpg'),
                            product: 'micro',
                            footer: 'Micro',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/micro-se.jpg'),
                            product: 'micro',
                            footer: 'Micro',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/micro-droplet.jpg'),
                            product: 'micro_droplet',
                            footer: 'micro droplet',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/micro-droplet.jpg'),
                            product: 'micro_droplet',
                            footer: 'micro droplet',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/micro-droplet.jpg'),
                            product: 'micro_droplet',
                            footer: 'micro droplet',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/micro-droplet.jpg'),
                            product: 'micro_droplet',
                            footer: 'micro droplet',

                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/adiva.jpg'),
                            product: 'adiva',
                            footer: 'adiva',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/adiva.jpg'),
                            product: 'adiva_se',
                            footer: 'adiva se',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/strada-2.jpg'),
                            product: 'strada_2',
                            footer: 'strada 2',
                            float: 'right',
                            discount: 30
                        },
                        {
                            url: require('../assets/img/banners/PROFILESUBx2.jpg'),
                            product: 'subwoofers',
                            footer: 'subwoofers',
                            discount: 30
                        }
                    ],
                },
                swiperOption: {
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                },
                menu: [],
                imgProduct: 'https://gallo.pult.ru/assets/img/menu/micro.jpg',
                catHover: 'micro'
            }
        },
        methods: {
            openProduct(name) {
                this.catHover = name;
                this.$router.push('/product/' + name ).catch(error => {
                    if (error) {
                        this.scroll('product');
                    }
                });
            },
            async getMenu() {
                this.menu = await this.callApi('http://u98172b3.beget.tech/api/?do=getList', {});
            },
            selectImg(name){
                this.catHover = name;
                this.imgProduct = 'https://gallo.pult.ru/assets/img/menu/' + this.catHover + '.jpg'
            },

        },
    }
</script>

<style scoped>

</style>