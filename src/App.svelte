<script lang="ts">
	import type { ICategory } from './types/ICategory';
	import PageTitle from './components/PageTitle.svelte';
	import UserAgent from './components/UserAgent.svelte';
import Category from './components/Category.svelte';
import Hostname from './components/Hostname.svelte';

	const mainCategory: ICategory = {
		name: 'Example',
		hostnames: [
			{
				name: 'Svelte',
				href: 'https://svelte.dev/'
			},
			{
				name: 'Google',
				href: 'https://google.com/'
			},
			{
				name: 'Github',
				href: 'https://github.com/'
			}
		]
	}
</script>

<main>
	<PageTitle />
	<UserAgent />
	<Category {...mainCategory} />
</main>
