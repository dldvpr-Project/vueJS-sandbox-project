<script lang="ts" setup>

import type {ProductInterface} from "@/interfaces/product.interface";

defineProps<{
  product: ProductInterface
}>()
const emit = defineEmits<{
  (e: 'removeProductFromCart', productId: number): void
}>()
</script>

<template>
  <div class="mb-10 p-10 d-flex flex-row align-items-center product">
    <strong class="flex-fill mr-10">{{product.title}}</strong>
    <span class="mr-10">Prix: {{product.price}}€</span>
    <button class="btn btn-danger"
            @click="emit('removeProductFromCart', product.id)"
    >
      Supprimer
    </button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  background-color: var(--gray-1);
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>