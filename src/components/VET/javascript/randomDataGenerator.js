const generateRandomData = (e) =>{
    let data = []
    for (let i = 0; i<e; i++){
        let obj = {
            id: i+1,
            num: i*10
        }
        data.push(obj)
    }
    return data;
}

export {
    generateRandomData
}