<script>
    import { onInterval } from '$lib/utils';
    import { getTZDateTimeFormatted, getTZName, getFullDate, getTime } from "$lib/timezone";

    const defaultTimeZone = {
        name: 'Bali Island',
        tz: 'Asia/Makassar'
    };

    const asiaTimeZones = [
        {
            name: 'Singapore',
            tz: 'Asia/Singapore'
        },
        {
            name: 'Tokyo, Japan',
            tz: 'Asia/Tokyo'
        },
        {
            name: 'Seoul, South Korea',
            tz: 'Asia/Seoul'
        }
    ];

    const europeTimeZones = [
        {
            name: 'Berlin, Germany',
            tz: 'Europe/Berlin'
        }
    ];

    const australiaTimeZones = [
        {
            name: 'Sydney, Australia',
            tz: 'Australia/Sydney'
        }
    ];

    const americaTimeZones = [
        {
            name: 'Cupertino, California',
            tz: 'America/Vancouver'
        }
    ];

    let currentTime = Date.now();
    onInterval(() => {
        currentTime = Date.now();
    }, 60000);

    /**
	 * @param {string} timeZone
	 */
    function getTimeZoneClass(timeZone) {
        const hours = parseInt(new Date().toLocaleString('en-US', { timeZone, hour: '2-digit', hour12: false }));
        console.log(timeZone, hours);
        if (hours >= 6 && hours < 18) {
            return 'daytime';
        } else {
            return 'nighttime';
        }
    }

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
</script>

<div class="container" style="margin: 0 auto;">
    <h1>timezone.kresna.me</h1>
    <p>Hi! I'm Kresna and I live in {defaultTimeZone.name}, Indonesia. I wish I can work with you despite of overlap timezone.</p>

    <div style="width: 100%; border: 1px solid gray;" class="rounded-md timezone">
        <p class="font-medium" style="font-size: 1.25rem; margin: 0; padding: 0;">{defaultTimeZone.name} <span class="{getTimeClass(defaultTimeZone.tz)} inline-block p-2 rounded-md font-medium">{getTimeClass(defaultTimeZone.tz)}</span></p>
        <div style="display: flex; justify-content: space-between; gap: 4px;">
            <div>
                <p>{defaultTimeZone.tz}</p>
                <p style="color: gray;">{getTZName(defaultTimeZone.tz)}</p>
            </div>
            <div>
                <p style="color: gray;">{getFullDate(defaultTimeZone.tz)}</p>
            </div>
            <div>
                <p>{getTime(defaultTimeZone.tz)}</p>
            </div>
        </div>
    </div>

    <h2>Asia</h2>
    {#each asiaTimeZones as timeZone}
        <div style="width: 100%; border: 1px solid gray;" class="rounded-md timezone">
            <p class="font-medium" style="font-size: 1.25rem; margin: 0; padding: 0;">{timeZone.name} <span class="{getTimeClass(timeZone.tz)} inline-block p-2 rounded-md font-medium">{getTimeClass(timeZone.tz)}</span></p>
            <div style="display: flex; justify-content: space-between; gap: 4px;">
                <div>
                    <p>{timeZone.tz}</p>
                    <p style="color: gray;">{getTZName(timeZone.tz)}</p>
                </div>
                <div>
                    <p style="color: gray;">{getFullDate(timeZone.tz)}</p>
                </div>
                <div>
                    <p>{getTime(timeZone.tz)}</p>
                </div>
            </div>
        </div>
    {/each}

    <h2>Australia</h2>
    {#each australiaTimeZones as timeZone}
        <div style="width: 100%; border: 1px solid gray;" class="rounded-md timezone">
            <p class="font-medium" style="font-size: 1.25rem; margin: 0; padding: 0;">{timeZone.name} <span class="{getTimeClass(timeZone.tz)} inline-block p-2 rounded-md font-medium">{getTimeClass(timeZone.tz)}</span></p>
            <div style="display: flex; justify-content: space-between; gap: 4px;">
                <div>
                    <p>{timeZone.tz}</p>
                    <p style="color: gray;">{getTZName(timeZone.tz)}</p>
                </div>
                <div>
                    <p style="color: gray;">{getFullDate(timeZone.tz)}</p>
                </div>
                <div>
                    <p>{getTime(timeZone.tz)}</p>
                </div>
            </div>
        </div>
    {/each}

    <h2>Europe</h2>
    {#each europeTimeZones as timeZone}
        <div style="width: 100%; border: 1px solid gray;" class="rounded-md timezone">
            <p class="font-medium" style="font-size: 1.25rem; margin: 0; padding: 0;">{timeZone.name} <span class="{getTimeClass(timeZone.tz)} inline-block p-2 rounded-md font-medium">{getTimeClass(timeZone.tz)}</span></p>
            <div style="display: flex; justify-content: space-between; gap: 4px;">
                <div>
                    <p>{timeZone.tz}</p>
                    <p style="color: gray;">{getTZName(timeZone.tz)}</p>
                </div>
                <div>
                    <p style="color: gray;">{getFullDate(timeZone.tz)}</p>
                </div>
                <div>
                    <p>{getTime(timeZone.tz)}</p>
                </div>
            </div>
        </div>
    {/each}

    <h2>America</h2>
    {#each americaTimeZones as timeZone}
        <div style="width: 100%; border: 1px solid gray;" class="rounded-md timezone">
            <p class="font-medium" style="font-size: 1.25rem; margin: 0; padding: 0;">{timeZone.name} <span class="{getTimeClass(timeZone.tz)} inline-block p-2 rounded-md font-medium">{getTimeClass(timeZone.tz)}</span></p>
            <div style="display: flex; justify-content: space-between; gap: 4px;">
                <div>
                    <p>{timeZone.tz}</p>
                    <p style="color: gray;">{getTZName(timeZone.tz)}</p>
                </div>
                <div>
                    <p style="color: gray;">{getFullDate(timeZone.tz)}</p>
                </div>
                <div>
                    <p>{getTime(timeZone.tz)}</p>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        width: 480px;
    }

    /* Medium screen */
    @media only screen and (min-width: 768px) {
        .container {
            width: 640px;
        }
    }

    /* Large screen */
    @media only screen and (min-width: 1280px) {
        .container {
            width: 960px;
        }
    }

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