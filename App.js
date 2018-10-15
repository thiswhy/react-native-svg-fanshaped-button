/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class App extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      bounceValue: new Animated.Value(1),
      translateValue: new Animated.ValueXY({x: 0, y: 0}), // 二维坐标
      bounceValue_1: new Animated.Value(0.3),
      translateValue_1: new Animated.ValueXY({x: 400, y: -300}), // 二维坐标
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>

        <Animated.View style={{
          position: 'absolute',
          left: 20,
          transform: [  // scale, scaleX, scaleY, translateX, translateY, rotate, rotateX, rotateY, rotateZ
            {scale: this.state.bounceValue},  // 缩放
            {translateX: this.state.translateValue.x}, // x轴移动
            {translateY: this.state.translateValue.y}, // y轴移动*/
          ],
        }}>
          <TouchableOpacity onPress={() => {
            this.initAnimated()
          }}>
            <Image                         // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
              source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
              style={{
                width: 200, height: 200, borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{
          position: 'absolute',
          left: 20,
          transform: [  // scale, scaleX, scaleY, translateX, translateY, rotate, rotateX, rotateY, rotateZ
            {scale: this.state.bounceValue_1},  // 缩放
            {translateX: this.state.translateValue_1.x}, // x轴移动
            {translateY: this.state.translateValue_1.y}, // y轴移动
          ],
        }}>
          <TouchableOpacity onPress={() => {
            this.startAnimation()
          }}>
            <Image                         // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
              source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539333844976&di=e3ea64cbf0f87c2350eb0eca077aaf7d&imgtype=0&src=http%3A%2F%2Fm.itunes123.com%2Fuploadfiles%2F48138b5750bd14457b1ee8a8dd0b0ac4.jpg'}}
              style={{
                width: 200, height: 200, borderRadius: 100,

              }}/>
          </TouchableOpacity>
        </Animated.View>

      </View>

    );
  }

  initAnimated() {

    Animated.parallel([  //  组合动画 parallel（同时执行）、sequence（顺序执行）、stagger（错峰，其实就是插入了delay的parrllel）和delay（延迟）

        Animated.spring( //  基础的单次弹跳物理模型
          this.state.bounceValue_1,
          {
            toValue: 0.3,
            friction: 1000, // 摩擦力，默认为7.
            tension: 40, // 张力，默认40。
          }
        ),
        Animated.timing( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
          this.state.translateValue_1,
          {
            toValue: {x: 400, y: -300},
            easing: Easing.elastic(1),
            duration:1000
          }
        ),

        Animated.spring( //  基础的单次弹跳物理模型
          this.state.bounceValue,
          {
            toValue: 1,
            friction: 1000, // 摩擦力，默认为7.
            tension: 40, // 张力，默认40。
          }
        ),
        Animated.timing( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
          this.state.translateValue,
          {
            toValue: {x: 0, y: 0},
            easing: Easing.elastic(1),
            duration:1000

          }
        ),
      ]
    ).start(); // 执行动画


  }

  startAnimation() {

    Animated.parallel([  //  组合动画 parallel（同时执行）、sequence（顺序执行）、stagger（错峰，其实就是插入了delay的parrllel）和delay（延迟）

        Animated.spring( //  基础的单次弹跳物理模型
          this.state.bounceValue,
          {
            toValue: 0.3,
            friction: 1000, // 摩擦力，默认为7.
            tension: 40, // 张力，默认40。
          }
        ),
        Animated.timing( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
          this.state.translateValue,
          {
            toValue: {x: 400, y: -300},
            easing: Easing.elastic(1),
            duration:1000
          }
        ),

        Animated.spring( //  基础的单次弹跳物理模型
          this.state.bounceValue_1,
          {
            toValue: 1,
            friction: 1000, // 摩擦力，默认为7.
            tension: 40, // 张力，默认40。
          }
        ),
        Animated.timing( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
          this.state.translateValue_1,
          {
            toValue: {x: 0, y: 0},
            easing: Easing.elastic(1),
            duration:1000
          }
        ),
      ]
    ).start(); // 执行动画
  }

}

const styles = StyleSheet.create({});
