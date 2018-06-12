import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Ico extends Component {
  render () {
      return (
        <View className={'icon-' + this.props.type}>测试 + {this.props.type}</View>
      )
  }
}