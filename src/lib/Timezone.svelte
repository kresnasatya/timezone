<script>
    import { onInterval } from "./utils";
    import { getTZName, getFullDate, getTime } from "./timezone";
    export let timeZone;

    /**
	 * @param {string} timeZone
	 */
     function getTimeClass(timeZone) {
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
    }, 60000);
</script>

<div style="width: 100%; border: 1px solid gray;" class="rounded-md timezone">
    <p class="font-medium" style="font-size: 1.25rem; margin: 0; padding: 0;">{timeZone.name} <span class="{getTimeClass(timeZone.tz)} inline-block p-2 rounded-md font-medium">{getTimeClass(timeZone.tz)}</span></p>
    <div style="display: flex; justify-content: space-between; gap: 4px;">
        <div>
            <p>{timeZone.tz}</p>
            <p style="color: gray;">{getTZName(timeZone.tz)}</p>
        </div>
        <div>
            <p style="color: gray;">{getFullDate(timeZone.tz, currentTime)}</p>
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

    .inline-block {
        display: inline-block;
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

    .morning {
        background-color: #FFF9C4; /* Light Yellow */
        color: #333333; /* Dark Gray */
    }

    .afternoon {
        background-color: #FFEB3B; /* Bright Yellow */
        color: #212121; /* Darker Gray */
    }
    
    .evening {
        background-color: #4b0082; /* Indigo for evening */
        color: #dda0dd; /* Purple for evening */
    }

    .night {
        background-color: #000033; /* Very dark blue for night */
        color: #ffffff; /* White for night text */
    }
</style>