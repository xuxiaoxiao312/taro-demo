import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Test from '../../components/Test/test'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)
    this.state = {
      testList:[
        'test1',
        'test2',
        'test3'
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
          {
            this.state.testList.map(item=>{
              return (
                <Test info={item} key={item} id={item}/>
              )
            })
          }
      </View>
    )
  }
}

