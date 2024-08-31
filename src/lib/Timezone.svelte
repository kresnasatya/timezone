<script>
    import { onInterval } from "./utils";
    import { getTZName, getFullDate, getTime } from "./timezone";
	import Sun from "./Sun.svelte";
	import Moon from "./Moon.svelte";
    export let timeZone;

    /**
	 * @param {string} timeZone
	 */
    function getIcon(timeZone) {
        const hours = parseInt(new Date().toLocaleString('en-US', { timeZone, hour: '2-digit', hour12: false }));
        if (hours >= 6 && hours < 18) {
            return 'sun';
        } else {
            return 'moon';
        }
    }

    /**
	 * @param {string} timeZone
	 */
     function getIconTime(timeZone) {
        const hours = parseInt(new Date().toLocaleString('en-US', { timeZone, hour: '2-digit', hour12: false }));
        if (hours >= 6 && hours < 12) {
            return 'morning';
        } else if (hours >= 12 && hours < 18) {
            return 'afternoon';
        } else if (hours >= 18 && hours < 21) {
            return 'evening';
        } else {
            return 'night';
        }
    }

    let currentTime = Date.now();
    onInterval(() => {
        currentTime = Date.now();
    }, 1000);
</script>

<div style="width: 100%; border: 1px solid gray;" 
    class="rounded-md timezone { (getIcon(timeZone.tz) === 'sun') ? 'daytime' : 'nighttime' }">
    <p class="font-medium" style="font-size: 1.25rem; margin: 0; padding: 0;">
        {#if getIcon(timeZone.tz) === 'sun'}
            <Sun time={getIconTime(timeZone.tz)}/>
        {:else}
            <Moon time={getIconTime(timeZone.tz)} />
        {/if}
        {timeZone.name}
    </p>
    <div style="display: flex; justify-content: space-between; gap: 1rem;">
        <div>
            <p>{timeZone.tz}</p>
            <p>{getTZName(timeZone.tz)}</p>
        </div>
        <div>
            <p>{getFullDate(timeZone.tz, currentTime)}</p>
        </div>
        <div>
            <p>{getTime(timeZone.tz, currentTime)}</p>
        </div>
    </div>
</div>

<style>
    /* Utility class */
    .p-2 {
        padding: 0.5rem;
    }

    .rounded-md {
        border-radius: 0.375rem; /* 6px */
    }

    .font-medium {
        font-weight: 500;
    }

    /* Time utility class */
    .timezone {
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .daytime {
        background-color: #cce7ff; /* Light blue for day */
        color: #000;
    }

    .nighttime {
        background-color: #2c3e50; /* Dark blue for night */
        color: #fff;
    }
</style>