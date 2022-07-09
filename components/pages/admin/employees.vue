<template>
	<div>
		<div class="d-flex align-center width-100 header-section">
			<header-1 class="primary--text">Employees</header-1>
			<v-spacer />
			<v-btn v-if="!employee" height="34" width="170" color="primary" @click="createEmployee">Add Employee</v-btn>
			<v-btn v-else height="34" width="170" color="error" @click="cancel">Cancel</v-btn>
		</div>
		<div class="d-flex flex-column gap-4">
			<div class="mt-2 f-12 w-500 subtext--text" style="max-width: 340px">Add, update or remove employees. and some other info that I am unsure I want to add here.</div>
			<div class="d-flex flex-wrap justify-space-between gap-row-5">
				<employee-edit-card v-show="employee" v-model="employee" />
				<v-card v-for="i in 12" :key="i + Math.random()" height="100" width="400" elevation="4" class="d-flex align-center">
					<v-avatar size="80">
						<v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
					</v-avatar>

					<div class="d-flex flex-column rounded-sm ml-5 pb-1">
						<div class="text--text f-18 w-600 lh-20">Peter John Meyer</div>
						<div class="subtext--text f-12 w-600">Backend Developer</div>
						<v-spacer />
						<div class="mt-2 d-flex gap-4">
							<div class="d-flex align-center gap-1">
								<v-icon color="tertiary" size="20">mdi-airplane</v-icon>
								<div class="subtext--text f-12 w-700">23</div>
							</div>
							<div class="d-flex align-center gap-1">
								<v-icon color="tertiary" size="20">mdi-emoticon-sick</v-icon>
								<div class="subtext--text f-12 w-700">23</div>
							</div>
						</div>
					</div>
					<v-spacer></v-spacer>
					<div class="actions d-flex align-center gap-2 rounded-sm">
						<icon-btn color="error">mdi-trash-can</icon-btn>
						<icon-btn color="info" @click="editEmployee">mdi-pencil</icon-btn>
					</div>
				</v-card>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Employee } from '@/models/employee';

export default Vue.extend({
	data() {
		return {
			employee: undefined as Employee | undefined,
		};
	},
	methods: {
		cancel(): void {
			this.employee = undefined;
		},
		createEmployee(): void {
			this.employee = new Employee();
		},
		editEmployee(): void {
			this.employee = new Employee();
			this.employee.name = 'Peter John Meyer';
			this.employee.role = 'Backend Developer';
			this.employee.email = 'sam@sam.co.za';
			this.employee.profileUrl = 'https://cdn.vuetifyjs.com/images/lists/2.jpg';
			this.employee.isManager = true;
		},
	},
});
</script>

<style scoped lang="scss">
.v-card {
	border-radius: 10px !important;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 20px;
	padding-right: 20px;
}

::v-deep {
	.header-section .v-btn {
		font-size: 18px !important;
		letter-spacing: 0px !important;
		font-weight: 500 !important;
	}
	.v-text-field.v-text-field--enclosed .v-text-field__details,
	.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
		margin: 0;
		max-height: 50px;
		min-height: 50px !important;
		display: flex !important;
		align-items: center !important;
	}

	.v-input--dense.v-text-field.v-text-field--enclosed .v-text-field__details,
	.v-input--dense.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
		max-height: 34px;
		min-height: 34px !important;
	}

	.v-text-field {
		input,
		.v-select__selection {
			color: var(--v-text-base) !important;
			font-weight: 400 !important;
		}
	}
}
</style>
