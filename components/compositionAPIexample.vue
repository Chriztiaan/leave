<template>
	<v-btn>Nee</v-btn>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { useCounterStore } from '@/store/counter';

export default defineComponent({
	setup() {
		const store = useCounterStore();

		return {
			// you can return the whole store instance to use it in the template
			double: computed(() => store.double),
		};
	},
});
</script>
