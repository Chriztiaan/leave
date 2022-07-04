<template>
	<v-app>
		<v-app-bar flat app color="white" :height="height">
			<div class="px-12 d-flex flex-column justify-center justify-md-start flex-md-row align-center gap-3 py-4" style="width: 100%">
				<v-img :src="require(`~/assets/leave.svg`)" max-height="50" max-width="50" />
				<v-btn class="f-18 w-700" :outlined="isMobile" width="100" text to="/home"> Home </v-btn>
				<v-btn class="f-18 w-700" :outlined="isMobile" width="100" text to="/design"> Manage </v-btn>
				<v-spacer />
				<div class="d-flex gap-3 align-center">
					<v-btn icon height="24" width="24">
						<v-icon color="text" size="20">mdi-bell-outline</v-icon>
					</v-btn>
					<v-badge bordered bottom color="secondary" dot offset-x="10" offset-y="45">
						<v-avatar size="50">
							<v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
						</v-avatar>
					</v-badge>
					<v-btn icon class="background" height="24" width="24">
						<v-icon color="black" size="20">mdi-chevron-down</v-icon>
					</v-btn>
				</div>
			</div>
		</v-app-bar>
		<v-main class="text--text" :class="{ 'main-mobile': isMobile }">
			<v-main>
				<v-container> <Nuxt /> </v-container>
			</v-main>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'AdminLayout',
	data() {
		return {};
	},
	computed: {
		isMobile(): boolean {
			const name = this.$vuetify.breakpoint.name;
			return name == 'xs' || name == 'sm';
		},
		height(): number {
			if (this.isMobile) {
				return 260;
			} else {
				return 80;
			}
		},
	},
});
</script>

<style scoped>
.main-mobile {
	margin-top: 190px;
}
</style>
