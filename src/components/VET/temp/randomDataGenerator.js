const generateRandomData = (e) =>{
    let data = []

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).replace(/ /g, '-');
    
    for (let i = 0; i<e; i++){
        let obj = {
            id: i+1,
            num: i*10,
            PL: 5,
            SL: 4,
            description: `description-${i+1}`,
            date_of_create: `${formattedDate}`,
        }
        data.push(obj)
    }
    return data;
}

export {
    generateRandomData
}