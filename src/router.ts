import Home from "./components/Home.vue";
import SonnerDemo from "./components/SonnerDemo.vue";
import TableDemo from "./components/TableDemo.vue";
import NotFound from "./components/NotFound.vue";

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: Home,
		name: "Home",
	},
	{
		path: "/sonner",
		component: SonnerDemo,
		name: "Sonner",
	},
	{
		path: "/table",
		component: TableDemo,
		name: "Table",
	},
	{
		path: "/:pathName(.*)",
		component: NotFound,
		name: "Not Found",
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
