import React         from 'react';
import PropTypes     from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ViewPropTypes
}                    from 'react-native';
import NavigationBar from "../components/NavigationBar";
import CommentInput  from "../components/CommentInput";
import CommentList   from "../components/CommentList";

export default class Comments extends React.Component{
  static propTypes = {
    comments       : PropTypes.arrayOf(PropTypes.string).isRequired,
    style          : ViewPropTypes.style,
    onClose        : PropTypes.func.isRequired,
    onSubmitComment: PropTypes.func.isRequired
  };

  static defaultProps = {
    style: null
  };

  render() {
    const {
            style,
            onClose,
            onSubmitComment,
            comments
          } = this.props;

    return (
      <SafeAreaView style={style}>
        <NavigationBar
          title={'Comments'}
          leftText={'Close'}
          onPressLeftText={onClose}
        />
        <CommentInput placeholder={'Leave a comment'} onSubmit={onSubmitComment}/>
        <CommentList items={comments}/>
      </SafeAreaView>
    );
  }
}