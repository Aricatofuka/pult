<template>
    <div>
        <div class="product" v-if="product">
            <div class="wrapper">
                <div class="product__grid">
                    <div class="product__picture">
                        <h2 class="product__picture-title title">{{ select.title }}</h2>
                        <img alt="MICRO SINGLE MATT WHITE" class="product__img" :src="getImg(select.id)">
                    </div>
                    <div class="product__content">
                        <h2 class="product__title title">{{ select.title }}</h2>
                        <p class="product__text">{{ select.description }}</p>
                        <div class="product__get">
                            <a class="product__btn link" :href="select.buy_url" target="_blank">купить</a>
                            <div class="product__prices">
                                <p class="product__price product__price--before">{{ preparePrice(select.price) }}</p>
                                <p class="product__price product__price--after">{{ preparePrice(select.discount) }}</p>
                            </div>
                        </div>
                    </div>
                    <p class="product__question">
                        выбери свой цвет
                    </p>

                    <ul class="product__colors">
                        <li class="product__color click" :class="{ active: (option.id === select.id) }" v-for="(option,index) in product.options" :key="index" >
                            <div v-on:click="selectProd(index)">
                                <img :alt="option.title" class="product__img-color" :src="getIcon(option.id)">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import base from '../assets/mixins/base.js';

    export default {
        name: 'Product',
        mixins: [base],
        watch:{
            async $route (to){
                if(this.product.name !== to.name) {
                    await this.getProduct(to.params.name, to.params.id);
                    this.name = to.params.name;
                    this.scroll('product');
                } else {
                    this.scroll('product');
                }
            }
        },
        async created() {
            if(!this.product.name) {
                await this.getProduct(this.$route.params.name, this.$route.params.id);
                this.scroll('product');
            }
        },
        data() {
            return {
                name: this.$route.params.name,
                id: (this.$route.params.id) ? this.$route.params.id : 0,
                product: {},
                select: {}
            }
        },
        methods: {
            async getProduct(name, id){
                this.product = await this.callApi('http://u98172b3.beget.tech/api/?do=getProduct', {name: name});
                if(id){
                    for(const key in this.product.options){
                        if(this.product.options[key].id === id){
                            this.select = this.product.options[key];
                        }
                    }
                } else {
                    this.select = this.product.options[0]
                }
                return true;
            },
            getIcon(id){
                return (id) ? 'https://gallo.pult.ru/assets/img/products/' + this.name + '/small_' + id + '.jpg' : '';
            },
            getImg(id){
                return (id) ? 'https://gallo.pult.ru/assets/img/products/' + this.name + '/' + id + '.jpg' : ''
            },
            preparePrice(price){
                price = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
                price = price.replace('₽', 'Р.');
                return price;
            },
            selectProd(index){
                this.select = this.product.options[index];
                this.$router.push('/product/' + this.name + '/' + this.product.options[index].id).catch(() => {})
            }
        }
    }
</script>

<style scoped>

</style>