<template>
	<v-card height="130" width="100%" elevation="4" class="d-flex align-center create-card">
		<v-avatar size="80">
			<v-img :src="employee.profileUrl ? employee.profileUrl : require(`~/assets/empty-profile.png`)" />
		</v-avatar>
		<div class="d-flex flex-column rounded-sm pt-2 ml-5 pb-1 pr-4" style="width: 310px">
			<v-text-field
				v-model="employee.name"
				:class="{ 'has-content': !!employee.name }"
				class="core-details name"
				style="min-width: 230px; width: 230px"
				hide-details
				placeholder="Enter a name..."
				dense
			></v-text-field>
			<v-text-field
				v-model="employee.role"
				:class="{ 'has-content': !!employee.role }"
				class="core-details role"
				style="min-width: 170px; width: 170px"
				hide-details
				placeholder="Role"
				dense
			>
			</v-text-field>
			<v-spacer />
			<div class="mt-1 d-flex gap-4">
				<div class="d-flex align-center gap-1">
					<v-icon color="tertiary" size="20">mdi-airplane</v-icon>
					<div class="subtext--text f-12 w-700">24</div>
				</div>
				<div class="d-flex align-center gap-1">
					<v-icon color="tertiary" size="20">mdi-emoticon-sick</v-icon>
					<div class="subtext--text f-12 w-700">24</div>
				</div>
			</div>
		</div>
		<div class="d-flex flex-column mr-5" style="width: 310px; gap: 6px">
			<div>
				<v-autocomplete
					placeholder="Search for a manager"
					hide-details
					outlined
					item
					item-value="id"
					item-text="name"
					auto-select-first
					:filter="managerFilter"
					dense
					:items="[
						{ id: '1', name: 'Courtney Henry', icon: '', role: 'HR Manager' },
						{ id: '2', name: 'Alexandra Connor', icon: '', role: 'Frontend Manager' },
						{ id: '3', name: 'Ashley Olcon', icon: '', role: 'Sales Rep' },
					]"
					append-icon=""
				>
					<template #prepend-inner>
						<v-icon color="tertiary" class="pr-3">mdi-magnify</v-icon>
					</template>
					<template #item="{ item }">
						<div class="d-flex gap-3 align-center" style="height: 65px">
							<v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" height="50" width="50" class="rounded-xl" />
							<div class="d-flex flex-column">
								<div class="text--text f-18 w-600 lh-20">{{ item.name }}</div>
								<div class="info--text f-12 w-600">{{ item.role }}</div>
							</div>
						</div>
					</template>
				</v-autocomplete>
			</div>
			<div>
				<v-text-field v-model="employee.email" hide-details type="email" placeholder="Email" dense outlined>
					<template #prepend-inner>
						<v-icon color="tertiary" class="pr-3">mdi-mail</v-icon>
					</template>
				</v-text-field>
			</div>
		</div>
		<div class="d-flex flex-column manager-setting align-center gap-1">
			<div style="height: 34px" class="width-100 d-flex align-center justify-space-between">
				<div class="info--text w-700">Manager</div>
				<v-menu open-on-hover top offset-y>
					<template #activator="{ on }">
						<v-icon x-small v-on="on">mdi-information</v-icon>
					</template>
					<div class="d-flex align-start white gap-2 pa-2" style="width: 195px">
						<v-icon color="info" size="20">mdi-account-cog</v-icon>
						<div class="subtext--text w-500 f-10">
							A manager can accept, reject or update any leave requests assigned to them. You can add employees to a manager when adding a new employee.
						</div>
					</div>
				</v-menu>
				<v-switch v-model="employee.isManager" hide-details inset dense />
			</div>
			<v-btn color="secondary" width="150" height="34">Save</v-btn>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Employee } from '@/models/employee';
export default Vue.extend({
	props: {
		value: {
			type: Object as PropType<Employee>,
			required: true,
		},
	},
	data() {
		return {
			employee: this.value,
			editName: false,
			editRole: false,
			name: '',
			role: '',
		};
	},
	methods: {
		managerFilter(item: { name: string; role: string }, queryText: string): boolean {
			return item.name.toLocaleLowerCase().includes(queryText.toLocaleLowerCase());
		},
	},
});
</script>

<style lang="scss">
.core-details input {
	padding-top: 0px !important;
	padding-bottom: 0px !important;
}

.core-details.name {
	font-size: 18px;
}

.core-details.role {
	font-size: 12px;
}

.core-details.v-text-field .v-text-field__slot input {
	font-weight: 600 !important;
}

.has-content.core-details.name:not(.v-input--is-focused) input {
	font-weight: 600 !important;
	color: var(--v-text-base) !important;
}

.has-content.core-details.role:not(.v-input--is-focused) input {
	font-weight: 600 !important;
	color: var(--v-info-base) !important;
}

.v-text-field > .v-input__control > .v-input__slot:before {
	border-style: none !important;
}

.manager-setting .v-input--selection-controls__input {
	margin-right: 0 !important;
}
</style>
