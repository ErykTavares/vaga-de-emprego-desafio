function createSquare(num){
    let square =""
    let left = 1
    let right = num 

    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num; j++){
            
            if( i == 1 || i == num){
                square += "&"
            }
            else{
                if( j == 1 || j == num){
                    square += "&"
                }
                else{
                    if( j == left || j == right || i > num/2+1 && j < left && j > right){
                        square += "&"
                    }
                        else{
                            if(i >= 2 && i < num || ( i > 1 && i < num) ){
                                if(j >= 2 || j <= num && j > 1){
                                    square += " "
                                }
                            }
                        }
                    }
                }
            if(j == num){
                square += "\n"
            }
        }
        left++
        right--
    }
    console.log(square)
}

createSquare(20)





