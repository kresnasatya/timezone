<script>
    import Timezone from '$lib/Timezone.svelte';

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
</script>

<div class="container" style="margin: 0 auto; padding: 1rem;">
    <h1>timezone.kresna.me</h1>
    <p>Hi! I'm Kresna and I live in {defaultTimeZone.name}, Indonesia. I wish I can work with you despite of overlap timezone.</p>

    <Timezone timeZone={defaultTimeZone}/>

    <h2>Asia</h2>
    {#each asiaTimeZones as timeZone}
        <Timezone {timeZone} />
    {/each}

    <h2>Australia</h2>
    {#each australiaTimeZones as timeZone}
        <Timezone {timeZone} />
    {/each}

    <h2>Europe</h2>
    {#each europeTimeZones as timeZone}
        <Timezone {timeZone} />
    {/each}

    <h2>America</h2>
    {#each americaTimeZones as timeZone}
        <Timezone {timeZone} />
    {/each}
</div>

<style>
    .container {
        width: 100%;
    }

    /* Medium screen */
    @media only screen and (min-width: 768px) {
        .container {
            max-width: 640px;
        }
    }

    /* Large screen */
    @media only screen and (min-width: 1280px) {
        .container {
            max-width: 960px;
        }
    }
</style>