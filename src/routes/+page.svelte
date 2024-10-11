<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import activeSprint from '$lib/shared/stores/activeSprint';

	function handleClick(event: MouseEvent): void {
		event.stopPropagation();
		const target = event.target;
		if (target instanceof HTMLButtonElement) {
			const indexStr: string | undefined = target.dataset['index'];
			if (indexStr && indexStr.length > 0) {
				const index = Number(indexStr);
				$activeSprint[index].complete = !$activeSprint[index].complete;
				activeSprint.set($activeSprint);
			}
		}
	}
</script>

<main class="mx-auto h-auto flex-col content-center justify-center px-4 py-8 md:container md:py-32">
	<Card.Root>
		<Card.Header>
			<Card.Title>Streak Tracker</Card.Title>
			<Card.Description>Track Leetcode</Card.Description>
		</Card.Header>
		<Card.Content class="grid grid-cols-2 grid-rows-7 gap-8 md:grid-cols-7 md:grid-rows-2">
			{#each $activeSprint as day, index}
				<button class="h-16 w-16 md:h-32 md:w-32" data-index={index} on:click={handleClick}>
					<svg
						class="pointer-events-none h-16 w-16 md:h-32 md:w-32"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							aria-checked={day.complete || null}
							class="h-16 w-16 fill-slate-200 aria-checked:fill-green-200 md:h-32 md:w-32"
							x={0}
							y={0}
							rx={4}
							ry={4}
						/>
						<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{day.label}</text>
					</svg>
				</button>
			{/each}
		</Card.Content>
		<!-- <Card.Footer>
            <p>Card Footer</p>
        </Card.Footer> -->
	</Card.Root>
</main>
