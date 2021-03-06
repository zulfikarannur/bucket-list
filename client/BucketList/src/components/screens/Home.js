import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Dash from 'react-native-dash'
import Icon from 'react-native-vector-icons/FontAwesome'

import { styleMenu } from '../styles'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beras : require('../../assets/berasCrop.png'),
      minyak: require('../../assets/minyakCrop.png'),
      gula: require('../../assets/gulaCrop.png')
    }
  }
  render() {
    return (
      <View style={styleMenu.container}>
        <View style={styleMenu.banner}>
          <View style={styleMenu.imgBanner}>
            <Image
              // source={{ uri: 'http://berasmaknyuss.com/wp-content/themes/maknyuss/images/berasMaknyuss5kg.png' }}
              source={this.state.beras}
              style={styleMenu.imgStyle}
            />
          </View>
          <View style={styleMenu.textButtonContainer}>
            <View style={styleMenu.textBanner}>
              <Text style={styleMenu.textHeading}>New Product</Text>
              <Text style={styleMenu.textSubHeading}>Out now!</Text>
            </View>
            <View style={styleMenu.buttonBannerContainer}>
              <View style={styleMenu.buttonBanner}>
                <Text style={styleMenu.buttonText}>SOON ...</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styleMenu.searchContainer}>
          <TouchableOpacity style={styleMenu.searchBox}
            onPress = {() => this.props.navigation.navigate('Search')} >
            <Icon
              name="search"
              size={20}
              style={styleMenu.searchIcon} />
            <Text style={styleMenu.searchText}>Search an item..</Text>
          </TouchableOpacity>
        </View>
        <View style={styleMenu.popularTextContainer}>
          <Dash style={{width:100, height:1}}/>
          <Text style={styleMenu.popularText}>OUR POPULAR PRODUCTS</Text>
          <Dash style={{width:100, height:1}}/>
        </View>
        <View style={styleMenu.products}>
          <View style={styleMenu.boxProduct}>
            <Image
              source={this.state.minyak}
              style={styleMenu.imgStyle}
            />
          </View>
          <View style={styleMenu.boxProduct}>
            <Image
              source={this.state.gula}
              style={styleMenu.imgStyle}
            />
          </View>
        </View>
      </View>
    )
  }
}
