/**
 * Created by wangdi on 24/11/16.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import BackPageComponent from '../BackPageComponent';
import NavigationBar from '../../components/NavigationBar';
import theme from '../../constants/theme';
import colors from '../../constants/colors';
import px2dp from '../../utils/px2dp';

export default class ThemeColorPage extends BackPageComponent{

    render(){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title="主题"
                    leftBtnText="取消"
                    leftBtnPress={this._handleBack.bind(this)}
                    rightBtnText="确定"/>
                <View style={styles.colorPickerView}>

                </View>
                <View style={[styles.colorPanel, {backgroundColor: theme.mainThemeColor}]}/>
                <Image
                    style={styles.img}
                    source={require('../../assets/model.png')}
                    resizeMode='stretch'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor,
        justifyContent: 'space-between'
    },
    colorPickerView: {
        height: px2dp(80),
        backgroundColor: '#fff'
    },
    img:{
        width: px2dp(250),
        height: px2dp(390),
        position: 'absolute',
        top: px2dp(70),
        left: (theme.screenWidth-px2dp(250))/2,
    },
    colorPanel: {
        width: px2dp(250),
        height: px2dp(390),
        position: 'absolute',
        top: px2dp(70),
        left: (theme.screenWidth-px2dp(250))/2,
        borderWidth: theme.segment.width,
        borderColor: theme.segment.color,
        //elevation: 5,
    },
});