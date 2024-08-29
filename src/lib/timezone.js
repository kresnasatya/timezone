/**
 * @param {string} timeZone
 */
export function getTZDateTimeFormatted(timeZone = 'Asia/Singapore') {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone,
        timeZoneName: 'longOffset'
    }).format(new Date());
}

function getTZOffset(timeZone = 'Asia/Singapore') {
    // Create date object
    const date = new Date();

    // Format the date to get the timezone offset in minutes
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        timeZoneName: 'longOffset'
    });

    // Extract offset from the formatted string
    const parts = formatter.formatToParts(date);
    const offsetPart = parts.find(part => part.type === 'timeZoneName');

    if (!offsetPart) {
        throw new Error(`Unable to get offset for timezone ${timeZone}`);
    }

    // Extract offset from the time zone name
    const offset = offsetPart.value.match(/([+-]\d{2}:\d{2})/);

    if (!offset) {
        throw new Error(`Unable to parse offset for timezone ${timeZone}`);
    }

    return offset[1];
}

/**
 * @param {string} tz1
 * @param {string} tz2
 */
function calculateTZDifference(tz1, tz2) {
    const offset1 = getTZOffset(tz1);
    const offset2 = getTZOffset(tz2);

    // Parse offsets into hours and minutes
    // @ts-ignore
    const [sign1, hours1, minutes1] = offset1.match(/([+-])(\d{2}):(\d{2})/).slice(1);
    // @ts-ignore
    const [sign2, hours2, minutes2] = offset2.match(/([+-])(\d{2}):(\d{2})/).slice(1);

    const offsetInMinutes1 = (parseInt(hours1) * 60 + parseInt(minutes1)) * (sign1 === '+' ? 1 : -1);
    const offsetInMinutes2 = (parseInt(hours2) * 60 + parseInt(minutes2)) * (sign2 === '+' ? 1 : -1);

    // Calculate the difference in minutes
    const differenceInMinutes = Math.abs(offsetInMinutes2 - offsetInMinutes1);

    // Convert minutes to hours and minutes
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const remainingMinutes = differenceInMinutes % 60;

    return { hours: differenceInHours, minutes: remainingMinutes };
}

/**
 * @param {string} tz1
 * @param {string} tz2
 */
export function getTZDifferenceFormatted(tz1, tz2) {
    const result = calculateTZDifference(tz1, tz2);

    const hours = result.hours;
    const minutes = result.minutes;

    let str = '';
    if (hours > 0) {
        if (hours > 1) {
            str += `${hours} hours`;
        } else {
            str += `${hours} hour`;
        }
    } else if (minutes > 0) {
        if (minutes > 1) {
            str += `${minutes} minutes`;
        } else {
            str += `${minutes} minute`;
        }
    } else {
        str += `Nope!`;
    }

    return str;
}

/**
 * @param {string} tz1
 * @param {string} tz2
 */
export function getConclusionOnTZDiff(tz1, tz2) {
    const result = calculateTZDifference(tz1, tz2);

    if (result.hours > 5) {
        return `Hmm, okay! Let's try! I wish time zone difference is not a barrier for us to work together.`
    } else if (result.hours > 2 && result.hours < 5) {
        return `Good, I can catch up with you! But, I think we need to adjust the time if we need synchronous communication.`
    } else {
        return `Great, I can catch up with you!`;
    }
}