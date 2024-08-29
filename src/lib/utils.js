import { onDestroy } from "svelte";

/**
 * @param {() => void} callback
 * @param {number | undefined} milliseconds
 */
export function onInterval(callback, milliseconds) {
    const interval = setInterval(callback, milliseconds);

    onDestroy(() => {
        clearInterval(interval);
    });
}