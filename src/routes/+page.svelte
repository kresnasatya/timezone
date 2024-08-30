<script>
    import { onInterval } from '$lib/utils';
    import { getTZDateTimeFormatted, getTZDifferenceFormatted, getConclusionOnTZDiff } from "$lib/timezone";

    const timeZones = [
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
        },
        {
            name: 'Berlin, Germany',
            tz: 'Europe/Berlin'
        },
        {
            name: 'Sydney, Australia',
            tz: 'Australia/Sydney'
        },
        {
            name: 'Cupertino, California',
            tz: 'America/Vancouver'
        }
    ];

    let currentTime = Date.now();
    onInterval(() => {
        currentTime = Date.now();
    }, 1000);

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
    function getTime(timeZone) {
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
    <p>Hi! I'm Kresna and I live in Bali Island, Indonesia. I wish I can work with you despite of overlap timezone.</p>
    <p>Today is {getTZDateTimeFormatted('Asia/Singapore', currentTime)} in Bali Island and it's <span class="{getTime('Asia/Singapore')} inline-block p-2 rounded-md font-medium">{getTime('Asia/Singapore')}</span> time.</p>

    {#each timeZones as timeZone}
        <div class="rounded-md timezone {getTimeZoneClass(timeZone.tz)}">
            <h2>{timeZone.name}</h2>
            <p>Today is {getTZDateTimeFormatted(timeZone.tz, currentTime)} in {timeZone.name} and it's <span class="{getTime(timeZone.tz)} inline-block p-2 rounded-md font-medium">{getTime(timeZone.tz)}</span> time.</p>
            <p class="conclusion"></p>
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