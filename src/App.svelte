
<script lang="ts">
	import Books from './pages/Books.svelte';
import type { BookType } from './types/bookType';

export let books :Array<BookType> = Array.from(Array(10)).map((_, index) => {
	return { coverImage: 'https://via.placeholder.com/200x320?text=...', title: `Book title ${index + 1}`};
});
</script>

<div>
	<Books {books} />
</div>