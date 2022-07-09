<template>
	<div>
		<div class="d-flex width-100">
			<header-1 class="primary--text">Requests</header-1>
		</div>
		<div class="d-flex flex-column gap-4">
			<div class="mt-2 f-12 w-500 subtext--text" style="max-width: 340px">Handle any leave requests by employees.</div>
			<div class="d-flex flex-wrap justify-space-between gap-row-5">
				<employee-leave-details-card v-show="leave" :key="leave.id" />
				<v-card v-for="i in 12" :key="i" height="70" width="400" elevation="4" class="d-flex align-center">
					<employee-leave-data name="Peter John Meyer" role="Backend Developer" :count="2.5" />

					<v-spacer></v-spacer>
					<icon-btn color="info" @click="viewLeaveRequest">mdi-eye</icon-btn>
				</v-card>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			leave: { id: Math.random().toString() } as { id: string } | undefined,
		};
	},
	methods: {
		viewLeaveRequest(): void {
			this.leave = { id: (Math.random() * 1000).toString() };
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
</style>
