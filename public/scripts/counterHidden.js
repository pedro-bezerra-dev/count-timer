import { notifier } from './notifier.js'

function counter(eventName, targetDate) {

  if(typeof(targetDate) == "string") {
    targetDate = targetDate.split(',')
  }

  const main = {
    eventName,
    targetDate,
    seconds: null,
    minutes: null,
    hours: null,
    days: null,
    months: null,
    interval: null,
  
    secondsToMinutesAndMinutesToHours(arg) {
      const result = Math.floor(arg / 60);
      const remainder = arg % 60;
    
      return [result, remainder];
    },
  
    hoursToDays(hours) {
      const days = Math.floor(hours / 24);
      const remainder = hours % 24;
    
      return [days, remainder];
    },
  
    daysToMonths(days) {
      const months = Math.floor(days / 30);
      const remainder = days % 30;
    
      return [months, remainder];
    },
  
    findTheRemainingTimeInSeconds(target) {
      const year = target[0];
      const month = target[1];
      const day = target[2];
      const hour = target[3];
      const min = target[4];
    
      const start = new Date();
      const end = new Date(year, month, day, hour, min);
      const elapsedTime = Math.round((end.getTime() - start.getTime())/1000);
    
      return elapsedTime;
    },
  
    subSeconds() {
      if(main.seconds > 0) {
        main.seconds -= 1;
      } else {
        if(main.minutes == 0 && main.hours == 0 && main.days == 0 && main.months == 0) {
          clearInterval(main.interval);
          notifier({title: "It's time!", body: `The ${main.eventName} already arrived!`, icon: 'images/logo.svg'})
        } else {
          main.seconds = 59;
          main.subMinutes();
        }
      };
    },
  
    subMinutes() {
      if(main.minutes > 0) {
        main.minutes -= 1;
      } else {
        if(main.hours == 0 && main.days == 0 && main.months == 0) {
          main.minutes= 0;
        } else {
          main.minutes = 59;
          main.subHours();
        }
      };
    },
  
    subHours() {
      main.minutes, main.hours, main.days, main.months
  
      if(main.hours > 0) {
        main.hours -= 1;
      } else {
        if(main.days == 0 && main.months == 0) {
          main.hours = 0;
        } else {
          main.hours = 23;
          main.subDays();
        }
      };
    },
  
    subDays() {
      if(main.days > 0) {
        main.days -= 1;
      } else {
        if(main.months== 0) {
          main.days = 0;
        } else {
          main.days = 29;
          main.subMonths();
        }
      };
    },
  
    subMonths() {
      if(main.months > 0) {
        main.months -= 1;
      } else {
        main.months = 0;
        return;
      };
    },
  
    makesItWork() {
      main.seconds = main.findTheRemainingTimeInSeconds(main.targetDate);
      main.minutes = main.secondsToMinutesAndMinutesToHours(main.seconds)[0];
      main.seconds = main.secondsToMinutesAndMinutesToHours(main.seconds)[1];
      main.hours = main.secondsToMinutesAndMinutesToHours(main.minutes)[0];
      main.minutes = main.secondsToMinutesAndMinutesToHours(main.minutes)[1];
      main.days = main.hoursToDays(main.hours)[0];
      main.hours = main.hoursToDays(main.hours)[1];
      main.months = main.daysToMonths(main.days)[0];
      main.days = main.daysToMonths(main.days)[1];
  
      main.interval = setInterval(() => main.subSeconds(), 1000);
    }
  };

  main.makesItWork();
}


export { counter };
