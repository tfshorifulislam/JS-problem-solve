const firstUniqueChar = (text: string): string | null => {
    const count = new Map<string, number>();

    for (const char of text) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of text) {
        if (count.get(char) === 1) {
            return char;
        }
    }

    return null;
};

console.log(firstUniqueChar("aabbcdd"));
// "c"