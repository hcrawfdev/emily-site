<template>
    <div id="layout-root">
        <TopNav />
        <Nuxt />
    </div>
</template>

<style>
#layout-root {
    display: grid;
    grid-template-areas:
        "nav nav nav"
        "content content content";
    grid-template-columns: repeat(3, minmax(10px, 1fr));
}

</style>
