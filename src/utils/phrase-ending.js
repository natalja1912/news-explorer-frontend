export function phraseEnding(num) {
    if (num === 1) {
        return 'ая статья';
    }
    if (num > 1 && num < 5) {
        return 'ые статьи';
    }
    return 'ых статей';
}