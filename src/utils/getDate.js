

export const getDate = (date) => {

	const d = new Date(date).toDateString().split(" ")
  
    return { day : d[2], month : d[1] }
	
}