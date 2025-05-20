function minDistance(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    var matrix = Array.from({ length: m + 1 }, function () { return Array(n + 1).fill(0); });
    for (var i = 0; i <= m; i++) {
        matrix[i][0] = i;
    }
    for (var j = 0; j <= n; j++) {
        matrix[0][j] = j;
    }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1);
            }
        }
    }
    return matrix[m][n];
}
console.log(minDistance("panda", "dpanda"));
