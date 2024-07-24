<script lang="ts">
    import "../css/app.css";
    import "../css/fonts.css";

    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
</script>

<div class="app">
    <div class="wrapper">
        <Header />
    
        <slot />

        <Footer />
    </div>
</div>


<style lang="postcss">
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
</style>
