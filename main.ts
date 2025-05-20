function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;
    
    const matrix: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        matrix[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + 1
                );
            }
        }
    }

    return matrix[m][n];
}

console.log(minDistance("panda", "dpanda"));
