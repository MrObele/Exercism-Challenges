class Year{
	isLeap(year){
		if(year%4 === 0) {
		 if ((year%100 != 0 )|| (year%400 === 0)){
			}	return true;
		}else{
			return false;
		}
	}
}

export default Year;