<template>
	<v-card height="430" width="100%" elevation="4" class="d-flex flex-column align-start pa-5 text--text">
		<div class="d-flex width-100">
			<employee-leave-data name="Peter John Meyer" role="Backend Developer" :count="2.5" />
			<v-spacer />
			<div class="d-flex gap-2">
				<count-chip :count="2.5" text="selected" count-colour="secondary" />
				<count-chip :count="18.5" text="available" count-colour="primary" />
			</div>
		</div>
		<div class="mt-2">
			<header-5>Category</header-5>
			<div class="mt-1" style="width: 435px">
				<dropdown />
			</div>
		</div>
		<div class="mt-5">
			<header-5> Selected Dates</header-5>
			<div class="mt-1 d-flex flex-column gap-2" style="width: 435px">
				<div v-for="i in 4" :key="i" class="mt-1 d-flex align-center">
					<v-switch v-model="bool" hide-details inset dense />
					<div class="ml-1 text--text f-16 w-500 d-flex align-center">08-11-2022</div>
					<div class="tertiary--text f-10 w-700">
						<div class="pt-1 ml-1" style="margin-left: 4px; padding-bottom: 2px">Monday</div>
					</div>
					<v-spacer />
					<div style="width: 100px">
						<dropdown dense :items="[{ label: 'Full' }, { label: 'Half' }, { label: 'None' }]" />
					</div>
				</div>
			</div>
		</div>
		<v-spacer />
		<div class="d-flex justify-end gap-2 width-100 rounded-sm">
			<v-btn color="error">Decline</v-btn>
			<v-btn color="secondary">Approve</v-btn>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return { bool: true };
	},
});
</script>
