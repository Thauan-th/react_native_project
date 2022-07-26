import {Dimensions} from 'react-native'

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio:0.15,
  difficultLevel:0.1,
  getColumsAmount(){
    const W = Dimensions.get('window').width
    return Math.floor(W/this.blockSize)
  },
  getRowsAmount(){
    const H = Dimensions.get('window').height
    const boardHeight =  H * (1-this.headerRatio)
    return Math.floor(boardHeight/this.blockSize)
  }
}

export default params
