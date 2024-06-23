<script lang="ts">
    export let title: string;

    let expanded = false;
</script>
<div>
    <button on:click={() => expanded = !expanded} class="header inline-block text-end" class:font-bold={expanded}>{title}</button>
    {#if expanded}
    <slot />
    {/if}
</div>