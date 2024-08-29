<script>
    import { getTZDateTimeFormatted, getTZDifferenceFormatted, getConclusionOnTZDiff } from "$lib/timezone";

	let singaporeTZ = 'Asia/Singapore';
    let tokyoTZ = 'Asia/Tokyo';
    let seoulTZ = 'Asia/Seoul';
    let berlinTZ = 'Europe/Berlin';
    let sydneyTZ = 'Australia/Sydney';
    let vancouverTZ = 'America/Vancouver';

    
</script>

<h1>timezone.kresna.me</h1>
<p>Hi! I'm Kresna and I live in Bali Island, Indonesia. I want to see the time difference between my time and your time in that part of the world.</p>

<p>Bali Island timezone: { getTZDateTimeFormatted(singaporeTZ) }</p>

<table>
    <thead>
        <tr>
            <th>City</th>
            <th>Date, Time, Time Zone</th>
            <th>Time Difference</th>
            <th>Conclusion</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Singapore</td>
            <td>{getTZDateTimeFormatted(singaporeTZ)}</td>
            <td>{getTZDifferenceFormatted(singaporeTZ, singaporeTZ)}</td>
            <td>{getConclusionOnTZDiff(singaporeTZ, singaporeTZ)}</td>
        </tr>
        <tr>
            <td>Tokyo, Japan</td>
            <td>{getTZDateTimeFormatted(tokyoTZ)}</td>
            <td>{getTZDifferenceFormatted(singaporeTZ, tokyoTZ)}</td>
            <td>{getConclusionOnTZDiff(singaporeTZ, seoulTZ)}</td>
        </tr>
        <tr>
            <td>Seoul, South Korea</td>
            <td>{getTZDateTimeFormatted(seoulTZ)}</td>
            <td>{getTZDifferenceFormatted(singaporeTZ, seoulTZ)}</td>
            <td>{getConclusionOnTZDiff(singaporeTZ, seoulTZ)}</td>
        </tr>
        <tr>
            <td>Berlin, Germany</td>
            <td>{getTZDateTimeFormatted(berlinTZ)}</td>
            <td>{getTZDifferenceFormatted(singaporeTZ, berlinTZ)}</td>
            <td>{getConclusionOnTZDiff(singaporeTZ, berlinTZ)}</td>
        </tr>
        <tr>
            <td>Sydney, Australia</td>
            <td>{getTZDateTimeFormatted(sydneyTZ)}</td>
            <td>{getTZDifferenceFormatted(singaporeTZ, sydneyTZ)}</td>
            <td>{getConclusionOnTZDiff(singaporeTZ, sydneyTZ)}</td>
        </tr>
        <tr>
            <td>Cupertino, California</td>
            <td>{getTZDateTimeFormatted(vancouverTZ)}</td>
            <td>{getTZDifferenceFormatted(singaporeTZ, vancouverTZ)}</td>
            <td>{getConclusionOnTZDiff(singaporeTZ, vancouverTZ)}</td>
        </tr>
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid;
    }
</style>