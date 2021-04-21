<template>
    <div id="app" class="body">
        <Header/>
        <Index/>
        <router-view id="product"/>
        <Footer/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Index from './components/Index.vue'
    import Footer from './components/Footer';

    export default {
        name: 'App',
        components: {
            Footer,
            Header,
            Index
        }
    }
</script>
