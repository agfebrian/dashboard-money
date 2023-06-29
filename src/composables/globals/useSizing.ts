import { computed } from "vue";

export const useSizing = (size: string): string => {
  const sizing = computed(() => {
    let result = "px-4 py-2 text-base";
    switch (size) {
      case "sm":
        result = "px-4 py-2 text-sm";
        break;
      case "md":
        result = "px-4 py-2 text-base";
        break;
      case "lg":
        result = "px-4 py-2 text-lg";
        break;
    }
    return result;
  });
  return sizing.value;
};
