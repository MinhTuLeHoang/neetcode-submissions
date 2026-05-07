class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]) {
        let rs = [];
        let plus = 1;
        for (let i = digits.length - 1; i >= 0; i--) {
            const sum = digits[i] + plus;
            if (sum <= 9) {
                plus = 0;
                rs.unshift(sum);
                continue;
            }

            plus = 1;
            rs.unshift(0);
        }

        if (plus) rs.unshift(1);
        return rs;
    }
}
