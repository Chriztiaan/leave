<template>
	<div>
		<header-1 class="primary--text">Work Setup</header-1>
		<div class="d-flex flex-column gap-4">
			<div class="mt-2 f-12 w-500 subtext--text" style="max-width: 340px">Manage your work environment by setting the working days, leave, and more.</div>

			<header-3>Working Days</header-3>
			<div class="d-flex flex-column gap-2">
				<v-switch v-model="bool" hide-details inset dense label="Monday" />
				<v-switch v-model="bool" hide-details inset dense label="Tuesday" />
				<v-switch v-model="bool" hide-details inset dense label="Wednesday" />
				<v-switch v-model="bool" hide-details inset dense label="Thursday" />
				<v-switch v-model="bool" hide-details inset dense label="Friday" />
				<v-switch hide-details inset dense label="Saturday" />
				<v-switch hide-details inset dense label="Sunday" />
			</div>

			<header-3>Sick Leave</header-3>
			<div>
				<header-5>Type<required /></header-5>
				<div class="mt-1 mb-2" style="width: 250px">
					<dropdown
						dense
						:items="[
							{ label: 'Unlimited', icon: 'mdi-infinity' },
							{ label: 'On Demand', icon: 'mdi-checkbox-multiple-marked' },
						]"
					/>
				</div>
				<header-5>Resets<required /></header-5>
				<div class="mt-1 mb-2" style="width: 250px">
					<dropdown dense :items="[{ label: 'Date goes here?' }]" />
				</div>
			</div>

			<header-3>Holiday Leave</header-3>
			<div>
				<header-5>Type<required /></header-5>
				<div class="mt-1 mb-2" style="width: 250px">
					<dropdown
						dense
						:items="[
							{ label: 'Unlimited', icon: 'mdi-infinity' },
							{ label: 'On Demand', icon: 'mdi-checkbox-multiple-marked' },
						]"
					/>
				</div>
				<header-5>Resets<required /></header-5>
				<div class="mt-1" style="width: 250px">
					<dropdown dense :items="[{ label: 'Date goes here?' }]" />
				</div>
			</div>

			<v-btn class="mt-4" color="secondary" width="250" height="34">Save</v-btn>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			bool: true,
		};
	},
});
</script>
