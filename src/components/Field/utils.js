export default function(nearMines){
  if(nearMines == 1) return '#2A28D7'
  if(nearMines == 2) return '#2B520F'
  if(nearMines > 2 && nearMines < 6) return '#F9060A'
  if(nearMines >= 6) return '#F221A9'
  return false
}
