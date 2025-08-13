const solution = require('./solution');

test('Example case 1: All days present', () => {
    const input = {
        '2020-01-01': 4,
        '2020-01-02': 4,
        '2020-01-03': 6,
        '2020-01-04': 8,
        '2020-01-05': 2,
        '2020-01-06': -6,
        '2020-01-07': 2,
        '2020-01-08': -2
    };
    const expected = {
        'Mon': -6,
        'Tue': 2,
        'Wed': 2,
        'Thu': 4,
        'Fri': 6,
        'Sat': 8,
        'Sun': 2
    };
    expect(solution(input)).toEqual(expected);
});

test('Example case 2: Missing Thu & Fri', () => {
    const input = {
        '2020-01-01': 6,
        '2020-01-04': 12,
        '2020-01-05': 14,
        '2020-01-06': 2,
        '2020-01-07': 4
    };
    const expected = {
        'Mon': 2,
        'Tue': 4,
        'Wed': 6,
        'Thu': 8,
        'Fri': 10,
        'Sat': 12,
        'Sun': 14
    };
    expect(solution(input)).toEqual(expected);
});

test('Handles negative values and missing middle days', () => {
    const input = {
        '2020-01-01': -5,
        '2020-01-05': 10,
        '2020-01-07': -1
    };
    const result = solution(input);
    expect(Object.keys(result).length).toBe(7); // All 7 days present
    expect(result['Mon']).toBeDefined();
    expect(result['Sun']).toBeDefined();
});