<script>
    export let width = '24';
    export let height = '24';
    export let strokeWidth = '2';
    export let time = 'morning';

    // Morning fill and stroke
    let fill = '#FFF9C4'; /* Light Yellow */
    let stroke = '#333333'; /* Dark Gray */

    if (time === 'afternoon') {
        fill = '#FFEB3B'; /* Bright Yellow */
        stroke = '#212121'; /* Darker Gray */
    }
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={width}
	height={height}
	viewBox="0 0 24 24"
	fill={fill}
	stroke={stroke}
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	class="feather feather-sun"
    role="img"
	>
    <title>{time.toUpperCase()} time.</title>
    <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line
		x1="12"
		y1="21"
		x2="12"
		y2="23"
	></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line
		x1="18.36"
		y1="18.36"
		x2="19.78"
		y2="19.78"
	></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"
	></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line
		x1="18.36"
		y1="5.64"
		x2="19.78"
		y2="4.22"
	></line></svg
>