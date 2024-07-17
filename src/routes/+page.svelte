<script lang="ts">
    import "../css/app.css";
    import "../css/fonts.css";

    import Header from '../components/Header.svelte';

</script>

<div class="app">
    <div class="container">
        <Header/>
    </div>
</div>

<style lang="postcss">
    .container {
        margin: 0 auto;
        max-width: 1280rem;
        width: 100%;
    }
</style>
