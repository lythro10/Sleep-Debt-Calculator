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
    
  const getActualSleepHours = () => {
    
  }
  