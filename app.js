const getSleepHours = day => {
    if (day === 'monday'){
      return 8;
    }else if (day === 'tuesday'){
      return 7;
    }else if (day === 'wednesday'){
      return 6;
    }else if(day === 'thursday'){
      return 7;
    }else if (day === 'friday'){
      return 6
    }else if (day === 'saturday'){
      return 9;
    }else if (day === 'sunday'){
      return 10;
    }
  }
    
    const getActualSleepHours = () => 
      // we now call the getSleepHours function above and add each day in the parametre to sum up the days
      //we will not use the keyword return to get the sum in this kind of function
    // if we added {} we would add the return statement on the top
      getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    
  
    
  
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () =>{
   let actualSleepHours = getActualSleepHours();
   let idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours ===  idealSleepHours){
      console.log('User got the perfect amount of sleep.')
    }else if (actualSleepHours > idealSleepHours){
      console.log('User got more sleep than needed by '+ (acutalSleepHours - idealSleepHours) )
    }else if (actualSleepHours < idealSleepHours){
      console.log('The user should get some rest by  ' + (idealSleepHours - actualSleepHours))
    }
  }
  calculateSleepDebt();
  console.log(getActualSleepHours() + ' are actual sleep hours')
  console.log(getIdealSleepHours() + ' This is the ideal Sleep Hours')