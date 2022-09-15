const arr = [
    {id: 3, date: new Date("October 13, 2014 11:13:00")},
    {id: 5, date: new Date("October 13, 2021 5:10:20")},
    {id: 2, date: new Date("September 11, 2015 10:13:10")},
    {id: 1, date: new Date("September 11, 2015 9:13:10")},
  ];

function sortingTerbaru(data){
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data.length-1; j++){
            let temp = data[j]
            if (Number(data[j].date) < Number(data[j+1].date)){
                data[j] = data[j+1]
                data[j+1] = temp
            }
        }
    }
    return data
}

console.log(sortingTerbaru(arr))

function sortingTerdahulu(data){
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data.length-1; j++){
            let temp = data[j]
            if (Number(data[j].date) > Number(data[j+1].date)){
                data[j] = data[j+1]
                data[j+1] = temp
            }
        }
    }
    return data
}

console.log(sortingTerdahulu(arr))
