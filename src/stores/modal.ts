import { defineStore } from 'pinia'
import { defineAsyncComponent, type Component } from 'vue'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isVisible: false,
    modalComponent: null as Component | null, // Store a Vue component
    modalComponentProps: {} as Record<string, unknown>, // Store the props for the component
  }),
  actions: {
    open(component: Component, props: Record<string, unknown> = {}) {
      this.isVisible = true
      this.modalComponent = component
      // Pass props to the component
      this.modalComponentProps = props
    },
    close() {
      this.isVisible = false
      setTimeout(() => {
        this.modalComponent = null
        this.modalComponentProps = {}
      }, 300)
    },
  },
})
