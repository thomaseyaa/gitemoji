<template>
  <div></div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Toast",
  props: {
    // eslint-disable-next-line vue/require-prop-types
    message: { default: null },
  },
  mounted() {
    this.sendToast();
  },
  methods: {
    sendToast() {
      const toast = useToast();
      toast.success(this.message, {
        position: "top-right",
        timeout: 1500,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
  },
};
</script>
