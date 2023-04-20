export function formatFriendlyDate(dateStr) {
    const dateObj = new Date(dateStr);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'UTC'
    };

    return dateObj.toLocaleDateString('en-US', options);
}
