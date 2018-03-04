module.exports = function solveSudoku(matrix) {

	var i, j;
    for(i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
              if(matrix[i][j] === 0){
                  matrix[i][j] = [];
            }
        }
    }
    return matrix;
};
