class Solution {
    cache: Map<number, boolean>;

    constructor() {
        this.cache = new Map();
        this.cache.set(0, false);
        this.cache.set(1, true);
    }

    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number) {
        if (this.cache.has(n)) return this.cache.get(n);

        const listCache = [n];
        let cur = n;
        while (true) {
            const listDigit = String(cur).split("");
            let sum = 0;
            for (const digit of listDigit) {
                sum += Number(digit) ** 2;
            }

            if (this.cache.has(sum)) return this.cache.get(sum);
            if (listCache.includes(sum)) {
                listCache.forEach((item) => this.cache.set(Number(item), false));
                return false;
            }

            listCache.push(sum);
            cur = sum;
        }
    }
}
