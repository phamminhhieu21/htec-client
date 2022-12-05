export const sleep = (ms: any): any =>
  new Promise((resolve) => setTimeout(resolve, ms))
  
export const TimeSince = (date : any) : any => {
  var seconds = Math.floor((new Date().valueOf() - new Date(date).valueOf()) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return /* Math.floor(seconds) +  */"Just now";
}

