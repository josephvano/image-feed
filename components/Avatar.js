import React     from 'react';
import {
  ColorPropType,
  StyleSheet,
  Text,
  View
}                from 'react-native'
import PropTypes from 'prop-types';

export default class Avatar extends React.Component {
  static propTypes = {
    initials       : PropTypes.string.isRequired,
    size           : PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width          : this.props.size,
      height         : this.props.size,
      borderRadius   : this.props.size / 2,
      backgroundColor: this.props.backgroundColor
    };

    return (
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{this.props.initials}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems    : 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});