export default () => {
  const now = new Date()
  const month = now.getMonth() + 1
  const date = now.getDate()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()
  const weekList = new Array(
    'Sun.',
    'Mon.',
    'Tue.',
    'Wed.',
    'Thu.',
    'Fri.',
    'Sat.'
  )
  const week = weekList[now.getDay()]
  const time = now.getTime()

  const dateInfo = {
    month,
    date,
    week,
    hour,
    min,
    sec,
  }
  return dateInfo
}
