import React from 'react';
import {connect} from 'react-redux';
import {getBMap} from '../../actions/common';

class MapComponent extends React.Component{
	componentWillMount(){
		if(!window.BMap){
			this.props.getBMap().then((res)=>{
				let code = res.data, scriptNode = document.createElement('script');
				scriptNode.innerHTML = code;
				document.body.appendChild(scriptNode);
				this.initMap();
			});
		}else{
			this.initMap();
		}
	}

	initMap(){
		// 百度地图API功能
		var map = new BMap.Map(this.refs.map);    // 创建Map实例
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
		//添加地图类型控件
		map.addControl(new BMap.MapTypeControl({
			mapTypes:[
	            BMAP_NORMAL_MAP,
	            BMAP_HYBRID_MAP
	        ]}));	  
		map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	}

	render(){
		return <div ref='map' style={{width: '100%', height: '100%', overflow: 'hidden', margin: 0}}></div>
	}
}

export default connect(state=>({}), {getBMap})(MapComponent)