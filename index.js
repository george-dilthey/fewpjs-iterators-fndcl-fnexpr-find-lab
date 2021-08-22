function superbowlWin(arr){
    let obj = arr.find(v => v.result === "W")
    return !!obj ? obj.year : undefined
}

