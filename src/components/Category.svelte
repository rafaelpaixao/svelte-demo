<script lang="ts">
    import type { IHostname } from "../types/IHostname";
    import Hostname from "./Hostname.svelte";

	export let name: string;
	export let hostnames: IHostname[];
</script>

<section>
    <h1>{name}</h1>
    {#each hostnames as hostname}
        <Hostname {...hostname} />
    {/each}
</section>