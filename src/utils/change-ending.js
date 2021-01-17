export function changeNumberEnding(num) {
    const endNumber = num % 10;
    if (num === 1) {
        return 'му другому';
    }
    if ((num > 1 && num < 5) || (endNumber > 1 && endNumber < 5)) {
        return 'м другим';
    }
    if ((num > 6 && num < 9) || (endNumber > 6 && endNumber < 9)) {
        return 'ми другим';
    }
    return 'ти другим';
}