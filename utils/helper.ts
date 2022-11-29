export const sleep = (ms: any): any =>
  new Promise((resolve) => setTimeout(resolve, ms))
