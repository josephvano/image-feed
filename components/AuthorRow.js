import React          from 'react';
import PropTypes      from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
}                     from 'react-native'
import Avatar         from "./Avatar";
import getInitials    from "../utils/getInitials";
import getAvatarColor from "../utils/getAvatarColor";

export default class AuthorRow extends React.Component {
  static propTypes = {
    fullName       : PropTypes.string.isRequired,
    linkText       : PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
  };

  render() {
    const {fullName, linkText, onPressLinkText} = this.props;

    return (
      <View style={styles.container}>
        <Avatar
          initials={getInitials(fullName)}
          size={35}
          backgroundColor={getAvatarColor(fullName)}
        />
        <Text style={styles.text} numberOfLines={1}>{fullName}</Text>
        {!!linkText && (
          <TouchableOpacity onPress={onPressLinkText}>
            <Text numberOfLines={1}>{linkText}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection    : 'row',
    alignItems       : 'center',
    paddingHorizontal: 10,
    height           : 50
  },
  text     : {
    flex            : 1,
    marginHorizontal: 6
  }
})