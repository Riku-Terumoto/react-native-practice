import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// prop-typesはpropsの設定が色々できる
// 今回AnbnbのESLintで必要となった

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

// propsのデフォルト値でESLintに怒られるから記述している
Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
