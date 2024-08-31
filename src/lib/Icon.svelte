<script>
import MoonIcon from '@icons/moon.svg?raw';
import SunIcon from '@icons/sun.svg?raw';

const mapIcons = new Map();

mapIcons.set('sun', SunIcon);
mapIcons.set('moon', MoonIcon);

export let name = 'sun';
export let time = 'unknown';
export let width = '24';
export let height = '24';
export let fill = 'none';
export let stroke = 'currentColor';
export let strokeWidth = '2';

switch (time) {
    case 'morning':
        fill = '#FFF9C4'; /* Light Yellow */
        stroke = '#333333'; /* Dark Gray */
        break;
    case 'afternoon':
        fill = '#FFEB3B'; /* Bright Yellow */
        stroke = '#212121'; /* Darker Gray */
        break;
    case 'evening':
        fill = '#4b0082'; /* Indigo for evening */
        stroke = '#dda0dd'; /* Purple for evening */
        break;
    case 'night':
        fill = '#000033'; /* Very dark blue for night */
        stroke = '#ffffff'; /* White for night text */
        break;
}
</script>

<div role="img" aria-label="{time} time" style="display: inline; --width: {width}px; --height: {height}px; --stroke-width: {strokeWidth};
    --stroke: {stroke}; --fill: {fill};">
    {@html mapIcons.get(name)}
</div>

<style>
    /* CSS modules */
    div :global(svg) {
        width: var(--width);
        height: var(--height);
        fill: var(--fill);
        stroke-width: var(--stroke-width);
        stroke: var(--stroke);
    }
</style>
