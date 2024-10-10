<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	const days = Array(14);
	const squareSize = 100;
	const squareGap = 15;
</script>

<main
	class="mx-auto flex-col content-center justify-center px-4 py-8 md:container h-auto md:py-32"
>
	<Card.Root>
		<Card.Header>
			<Card.Title>Streak Tracker</Card.Title>
			<Card.Description>Track Leetcode</Card.Description>
		</Card.Header>
		<Card.Content class="grid grid-rows-7 md:grid-rows-2 grid-cols-2 md:grid-cols-7 gap-8">
			{#each days as day}
				<svg class="h-16 md:h-32 w-16 md:w-32" xmlns="http://www.w3.org/2000/svg">
					<rect class="fill-slate-200 h-16 md:h-32 w-16 md:w-32"x={0} y={0} />
				</svg>
			{/each}
		</Card.Content>
		<!-- <Card.Footer>
            <p>Card Footer</p>
        </Card.Footer> -->
	</Card.Root>
</main>
