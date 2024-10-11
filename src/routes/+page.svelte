<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	const days = Array.from(Array(14));
	const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
</script>

<main class="mx-auto h-auto flex-col content-center justify-center px-4 py-8 md:container md:py-32">
	<Card.Root>
		<Card.Header>
			<Card.Title>Streak Tracker</Card.Title>
			<Card.Description>Track Leetcode</Card.Description>
		</Card.Header>
		<Card.Content class="grid grid-cols-2 grid-rows-7 gap-8 md:grid-cols-7 md:grid-rows-2">
			{#each days as day, index}
				<button on:click={() => (days[index] = !days[index])}>
					<svg class="h-16 w-16 md:h-32 md:w-32" xmlns="http://www.w3.org/2000/svg">
						<rect
							aria-checked={days[index] || null}
							class="h-16 w-16 fill-slate-200 aria-checked:fill-green-200 md:h-32 md:w-32"
							x={0}
							y={0}
                            rx={4}
                            ry={4}
						/>
						<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
							>{labels[index <= 6 ? index : index - 7]}</text
						>
					</svg>
				</button>
			{/each}
		</Card.Content>
		<!-- <Card.Footer>
            <p>Card Footer</p>
        </Card.Footer> -->
	</Card.Root>
</main>
