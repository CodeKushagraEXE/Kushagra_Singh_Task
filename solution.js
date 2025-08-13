function solution(D) {
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let dayValues = {};

    // Step 1: Aggregate sums for each day of week
    for (let dateStr in D) {
        let date = new Date(dateStr);
        let dayIndex = (date.getDay() + 6) % 7; // Convert JS day to Mon=0..Sun=6
        let dayName = dayNames[dayIndex];
        dayValues[dayName] = (dayValues[dayName] || 0) + D[dateStr];
    }

    // Step 2: Fill missing days
    for (let i = 0; i < 7; i++) {
        if (!(dayNames[i] in dayValues)) {
            let prevIndex = (i - 1 + 7) % 7;
            let nextIndex = (i + 1) % 7;

            while (!(dayNames[prevIndex] in dayValues)) {
                prevIndex = (prevIndex - 1 + 7) % 7;
            }
            while (!(dayNames[nextIndex] in dayValues)) {
                nextIndex = (nextIndex + 1) % 7;
            }

            dayValues[dayNames[i]] = Math.floor(
                (dayValues[dayNames[prevIndex]] + dayValues[dayNames[nextIndex]]) / 2
            );
        }
    }

    return dayValues;
}

module.exports = solution;