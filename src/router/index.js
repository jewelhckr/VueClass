import { createRouter, createWebHistory } from "vue-router";
import RecipePage from "../views/RecipePage.vue"
import HomePage from "../views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProductPage from "@/views/ProductsPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
        path: "/", name: "home", component: HomePage,
        },
        {
        path: "/about", name: "about", component: AboutPage,
        },
        {
        path:'/recipe', name: 'foodlist', component: RecipePage,
        },
        {
          path: '/products', name: 'productlist', component: ProductPage,
        }
    ],
});
export default router;