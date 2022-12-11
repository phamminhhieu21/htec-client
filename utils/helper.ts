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

export const toSlug = (str : string) : string => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();     
 
  // xóa dấu
  str = str
    .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
 
  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, 'd');
  
  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');
 
  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');
  
  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, '-');
 
  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, '');
 
  // return
  return str;
}

