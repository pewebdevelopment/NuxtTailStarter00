import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "zen"
declare module "C:/Users/Tau/Desktop/nuxtTailwindUpdate/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}