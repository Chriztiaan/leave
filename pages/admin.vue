<template>
	<v-container>
		<v-row>
			<v-col class="" cols="2">
				<header-1 class="ml-4">Manage</header-1>
				<div class="mt-4 d-flex flex-column gap-3 manage-btns">
					<v-btn text width="180" class="f-18 w-500">
						<v-icon class="mr-4" color="tertiary" left size="24">mdi-view-dashboard</v-icon>
						Dashboard
					</v-btn>
					<v-btn text width="180" class="background f-18 w-500">
						<v-icon class="mr-4" color="primary" left size="24">mdi-briefcase</v-icon>
						Work Setup
					</v-btn>
					<v-btn text width="180" class="f-18 w-500">
						<v-icon class="mr-4" color="tertiary" left size="24">mdi-account-group </v-icon>
						Employees
					</v-btn>
					<v-btn text width="180" class="f-18 w-500">
						<v-icon class="mr-4" color="tertiary" left size="24">mdi-calendar-check</v-icon>
						Requests
					</v-btn>
				</div>
			</v-col>
			<v-col class="" cols="9">
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

					<v-btn class="mt-4" color="secondary" width="250">Save</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'AdminPage',
	layout: 'admin',
	data() {
		return {
			bool: true,
		};
	},
});
</script>

<style scoped>
.manage-btns .v-btn::v-deep {
	justify-content: start;
}
</style>
