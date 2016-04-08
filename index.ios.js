import {
	AppRegistry,
	StatusBarIOS,
} from 'react-native';

import rn_demo from './src/webview';

StatusBarIOS.setHidden(true, false);

AppRegistry.registerComponent('rn_demo', ()=> rn_demo);