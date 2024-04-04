import axios from 'axios';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CarDetails from '../CarDetails';
import MobileDetails from './MobileDetails';

export class MobileList extends Component {
  state = {mobilelist: []};

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/Raja2248s/mobile/smartphones')
      .then(response => {
        this.setState({mobilelist: response.data});
      });
  }
  // renderList = () => {
  //   return this.state.mobilelist.map((mobile, index) => {
  //     return (
  //       <View key={index}>
  //         <Text>Brand: {mobile.brand}</Text>
  //         <Text>Model: {mobile.model}</Text>
  //         <Text>URL: {mobile.url}</Text>
  //         {/* Render other details as needed */}
  //       </View>
  //     );
  //   });
  // }

  renderList = () => {
    return this.state.mobilelist.map((mobile, index) => {
      return <MobileDetails key={index} mobile={mobile} />;
    });
  };

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default MobileList;
