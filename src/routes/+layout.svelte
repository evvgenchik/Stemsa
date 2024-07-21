<script lang="ts">
    import "../css/app.css";
    import "../css/fonts.css";

    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
</script>

<div class="app">
    <Header />

    <slot />

    <Footer />
</div>
