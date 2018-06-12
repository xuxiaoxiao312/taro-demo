import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import Ico from '../Icon/icon'

export default class Test extends Component {
  render () {
      return (
          <View>
              <Ico type="test"></Ico>
              <View>{this.props.info}</View>
          </View>
      )
  }
}