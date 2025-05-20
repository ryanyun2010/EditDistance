# The Problem
Given two strings, find the number of alterations needed to transform the first one into the second one, where the alterations can be inserting a character, removing a character or replacing a character.
# Real World Applications
- Spell Checking

# Solution
matrix[x][y] represents the mininum number of operations to transform the first x letters of the first string into the first y letters of the second string.

matrix[0][y] is clearly y, because you just need to perform y insertions and matrix[x][0] is clearly x, because you just need to perform x removals.

then we iterate through the entire matrix ignoring row 0 and col 0.

if the xth letter of word 1 is equivalent to the yth letter of word 2, then there is no operation required except for the ones to transform the first x-1 letters of the first string into the first y-1 letters of the second string to transform the first x letters of word 1 into the first y letters of word 2, so matrix[x][y] = matrix[x-1][y-1] in this case.

if the xth letter of word 1 is not equivalent to the yth letter of word 2 then we have three options, we will choose the one with the minimum operations required:

1. you can delete the xth letter of word 1, then transform the first x-1 letters of word 1 to the first y letters of word 2, this takes 1 + matrix[x-1][y] operations

2. you can transform the first x letters of word 1 to the first y-1 letters of word 2, then insert the yth letter of word 2 in the yth position, this takes matrix[x][y-1] + 1 operations

3. you can transform the first x-1 letters of word 1 to the first y-1 letters of word 2, then replace the xth letter of word 1 with the yth letter of word 2, this takes matrix[x-1][y-1] + 1 operations.

so we set matrix[x][y] = min(1 + matrix[x-1][y], matrix[x][y-1] + 1, matrix[x-1][y-1] + 1)

This runs in O(m*n) where m and n are the lengths of the words
