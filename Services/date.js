export const uniqueDates = (task) =>{
    const unique = [];
    task.forEach((task) => {
        if(!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat)
        }
    })
  return unique
}

export const orderDates = (dates) =>{
    return dates.sort((a,b)=>{
        const firstDate = moment(a,"DD/MM/YYYY")
        const secondtDate = moment(b,"DD/MM/YYYY")
        return firstDate - secondtDate
    })
}