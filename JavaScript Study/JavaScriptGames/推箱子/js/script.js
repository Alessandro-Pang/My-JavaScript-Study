$(function(){
	game.init($('#container'))
});

let game = {
	// 初始化后获取元素
	selector:{},
	// 创建地图后刷新数据
	newMap: {},
	// 地图数据
	gk:[
		{
			// 0 : 蓝色区域 ; 1 : 灰色区域 ; 
			// 2 : 墙体区域 ; 3 : 红色区域 ;
			map:[
				1,1,2,2,2,2,1,1,
				1,1,2,3,3,2,1,1,
				1,2,2,0,3,2,2,1,
				1,2,0,0,0,3,2,1,
				2,2,0,0,0,0,2,2,
				2,0,0,2,0,0,0,2,
				2,0,0,0,0,0,0,2,
				2,2,2,2,2,2,2,2
			],
			box:[
				{x:4,y:3},
				{x:3,y:4},
				{x:4,y:5},
				{x:5,y:5},
			],
			person:{
				x:3,y:6
			}
		},
		{
			// 0 : 蓝色区域 ; 1 : 灰色区域 ; 
			// 2 : 墙体区域 ; 3 : 红色区域 ;
			map:[
				1,1,2,2,2,2,1,1,
				1,1,2,3,3,2,1,1,
				1,2,2,0,3,2,2,1,
				1,2,0,0,0,3,2,1,
				2,2,0,0,0,0,2,2,
				2,0,0,2,0,0,0,2,
				2,0,0,0,0,0,0,2,
				2,2,2,2,2,2,2,2
			],
			box:[
				{x:4,y:3},
				{x:3,y:4},
				{x:4,y:5},
				{x:5,y:5},
			],
			person:{
				x:4,y:1
			}
		},
	],
	// 初始化方法 => 开始执行游戏
	init(selector){
		// 可以让其他方法使用，把 Selector 弄成对象属性
		this.selector = selector;
		// 执行绘制地图
		this.createMap(0);
	},
	// 创建地图
	createMap(num){
		// 重置关卡
		this.selector.empty();
		document.title = '第'+(num+1)+'关';
		// 获取到地图数据
		this.newMap = this.gk[num];
		// 设置父元素的宽度
		this.selector.css({
			// 绘制地图时，必须是个正方形，否则无法开平方
			width: Math.sqrt(this.newMap.map.length)*50
		});
		// 往父元素中添加子元素（添加地图元素）
		$.each(this.newMap.map,$.proxy(function(index,item){
			// $.proxy 代理 this 指向,可以绑定一个函数，或者对象
			this.selector.append('<div class="pos'+item+'"></div>');
		},this));
		// 创建人物和箱子
		this.createBox();
		this.createPerson();
	},
	// 创建箱子
	createBox(){
		$.each(this.newMap.box,$.proxy(function(index,item){
			const oBox = $('<div class="box"></div>');
			oBox.css({
				left:item.x * 50,
				top:item.y*50
			})
			this.selector.append(oBox)
		},this))
	},
	// 创建人物
	createPerson(){
		const oPerson = $('<div class="person"></div>');
		const person = this.newMap.person;
		// 渲染人物
		oPerson.css({
			left:person.x * 50,
			top:person.y * 50
		});
		this.selector.append(oPerson);

		// 存储当前人物的位置
		$.data(oPerson,'position',{
			x:person.x,
			y:person.y
		})

		// 人物移动
		this.bindPerson( oPerson );
	},
	// 人物移动
	bindPerson(oPerson){
		$(document).keydown($.proxy(function(even){
			const code = even.keyCode;
			switch(code){
				case 37:
					// 左键
					oPerson.css('backgroundPosition','-150px,0');
					this.movePerson(oPerson,{x:-1});
					break;
				case 38:
					// 上键
					oPerson.css('backgroundPosition','0,0');
					this.movePerson(oPerson,{y:-1});
					break;
				case 39:
					// 右键
					oPerson.css('backgroundPosition','-50px,0');
					this.movePerson(oPerson,{x:1});
					break;
				case 40:
					// 下键
					oPerson.css('backgroundPosition','-100px,0');
					this.movePerson(oPerson,{y:1});
					break;
			}
		},this))
	},
	//移动函数
	movePerson(oPerson,obj){
		const xValue = obj.x || 0;
		const yValue = obj.y || 0;

		// 人物位置重新计算
		let positionX = $.data(oPerson,'position').x  + xValue;
		let positionY = $.data(oPerson,'position').y  + yValue;
		let cloumn = Math.sqrt(this.newMap.map.length);
		// 人物下一步的位置
		const nextPositon = (positionY * cloumn) + positionX ;
		// 人物下一步是否是往墙上走
		const isWall = this.newMap.map[nextPositon] === 2;
		// 撞墙行为
		if(isWall) return;

		// 保存重新计算的位置
		$.data(oPerson,'position',{
			x: positionX,
			y: positionY
		});

		// 重新渲染位置
		oPerson.css({
			left:positionX * 50,
			top:positionY * 50
		});

		$('.box').each($.proxy(function(index,ele){
			// 箱子位置计算
			const boxPositonX = positionX + xValue;
			const boxPositonY = positionY + yValue;
			// 箱子下一步的位置
			const boxNextPositon = boxPositonY * cloumn + boxPositonX ;
			// 箱子下一步是否是往墙上走
			const boxNextIsWall = this.newMap.map[boxNextPositon] === 2;
			// 检测箱子和人物碰撞情况
			if(this.collision(oPerson,$(ele)) && !boxNextIsWall){
				// 箱子移动比人物移动多一位
				$(ele).css({
					left:boxPositonX * 50,
					top:boxPositonY * 50
				});
				$('.box').each($.proxy(function(i,element){
					// 检测正在移动箱子与其他箱子是否碰撞
					if(this.collision($(ele),$(element)) && ele != element){
						// 箱子恢复到人物想要移动的位置
						$(ele).css({
							left:positionX * 50,
							top:positionY * 50
						});
						// 人物移动位置复原
						oPerson.css({
							left:(positionX - xValue) * 50,
							top:(positionY - yValue) * 50
						});
						// 保存复原后的位置
						$.data(oPerson,'position',{
							x: positionX  - xValue,
							y: positionY - yValue
						});
					}
				},this))
				
			}else if (this.collision(oPerson,$(ele))){
				// 修正人物位置，避免人物跑到箱子上
				oPerson.css({
					left:(positionX - xValue) * 50,
					top:(positionY - yValue) * 50
				});
				// 保存复原后的位置
				$.data(oPerson,'position',{
					x: positionX  - xValue,
					y: positionY - yValue
				});
			}
		},this));

		this.nextLevel();
	},
	// 人物与箱子碰撞行为
	collision(move,oBox){
		// 移动的位置
		const moveLeft = move.offset().left;
		const moveRight = move.offset().left + move.width();
		const moveTop = move.offset().top;
		const movenBottom = move.offset().top + move.height();
		// 箱子位置
		const boxLeft = oBox.offset().left;
		const boxRight = oBox.offset().left + oBox.width();
		const boxTop = oBox.offset().top;
		const boxBottom = oBox.offset().top + oBox.height();

		if(moveRight <= boxLeft || moveLeft >= boxRight 
			|| moveTop >= boxBottom || movenBottom <= boxTop) {
			return false;
		}else {
			return true;
		}

	},
	// 进入到下一关
	nextLevel(){
		let isNum = 0;
		$('.box').each($.proxy(function(i,ele){
			$('.pos3').each($.proxy(function(index,element){
				if(this.collision($(ele),$(element))){
					isNum++;
				}
			},this))
		},this));
		// 进入下一关
		if(isNum == this.newMap.box.length){
			this.createMap(1);
		}
	}
}