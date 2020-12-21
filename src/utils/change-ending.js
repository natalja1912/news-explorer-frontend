export function changeEnding(num) {
    const endNumber = num % 10;
    if ((num === 1) || (endNumber === 1)) {
        return 'го';
    }
    if ((num > 1 && num < 5) || (endNumber > 1 && endNumber < 5)) {
        return 'м';
    }
    if ((num > 6 && num < 9) || (endNumber > 6 && endNumber < 9)) {
        return 'ми';
    }
    return 'ти';
}