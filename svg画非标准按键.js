/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';
// Mx y A r r 0 0 0 x+r-r*cos(α)  y+r*sin(α)  L x+r y z
export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData(80, 60, 40, 9)
  }

  getData(x, y, r, count) {
    let data = []

    for (let i = 0; i < count; i++) {
      let previouslyPoint = (x + r * Math.sin(2 * Math.PI / count * (i))) + " " + (y - r * Math.cos(2 * Math.PI / count * (i)));
      let nextPoint = (x + r * Math.sin(2 * Math.PI / count * (i + 1))) + " " + (y - r * Math.cos(2 * Math.PI / count * (i + 1)));
      let cell = {}
      cell.point = 'M ' + x + " " + y + " L " + previouslyPoint + ' A ' + r + " " + r + " 0 0 1 " + nextPoint + " Z";
      cell.color = '#' + i + i + i + i + i + i;
      console.log(cell)
      data.push(cell)
    }
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <Svg
        height="200"
        width="200"
      >
        <G
          id={'shape'}
          rotation="-30"
          origin="80, 60"
        >
          {this.state.data.map((d, index) => {
            return <Path
              key={index}
              d={d.point}
              stroke="#fff"
              strokeWidth="1"
              fill={d.color} onPress={() => {
              alert('我是大饼' + index)
            }}/>
          })}
          <Circle
            cx="80"   //中心点x
            cy="60"   //中心点y
            r="15"    //半径
            fill="green"   //填充颜色
            stroke="#fff"   //边框颜色
            strokeWidth="3"   //边框宽度
            onPress={() => {
              alert('我是中心圆')
            }}
          />
        </G>
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
