import React, {
  	Component,
  	StyleSheet,
  	WebView,
} from 'react-native';

export default class WebViewDemo extends Component {
	render () {
		return (
			<WebView
                source={{uri: 'http://115.28.193.141:8081/'}}
				automaticallyAdjustContentInsets={false}
				style={styles.webView}
				javaScriptEnabled={true}
				domStorageEnabled={true}
				decelerationRate="normal"
				onNavigationStateChange={navState=> null}
				onShouldStartLoadWithRequest={event=> true}
				startInLoadingState={false}
				scalesPageToFit={true} />
		);
	}
}

const styles = StyleSheet.create({
	webView: {
		
	},
});