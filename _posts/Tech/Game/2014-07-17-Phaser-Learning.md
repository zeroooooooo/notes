---
layout: post
title: Phaser学习笔记
category: Tech
tags: Phaser 
type: Game
---

### Phaser例子学习笔记

		*.inputEnabled = true;                        //启动物体的事件属性
		*.events.onInputeDown.add(listener, this);    //绑定事件

		game.physics.startSystem(Phaser.Physics.ARCADE); //启动物理系统
		game.physics.arcade.enable(*);                    //使物体具备物理性质如重力等
		game.input.activePointer                        //移动光标

		//判断精灵与移动光标的距离
	    if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8)
	    {
	        game.physics.arcade.moveToPointer(*, 300);             //将精灵以速度300移至光标处
	    }
	    else
	    {
	        *.body.velocity.set(0);     //将速度设置为0
	    }

	    game.load.atlasJSONHash('sprite', 'sprite.png', 'sprite.json');    //将在图片和图片的json数据用于动画精灵图片的加载
	    //下面这个也可以用作动画的加载
	    game.load.spritesheet('sprite','sprite.png',图片中每帧的宽度,图片中每帧的高度,最多有几帧,每帧的外边距,每帧之间的间隔); 

	    //将在精灵后可以添加动画
	    sprite.animations.add('play');
	    sprite.animations.play('play', 频率, bool(是否循环));

	    //添加文字
	    game.add.text(x, y, text(文字内容), style(自定义字体属性));
		
		//替换当前精灵,建议不要过多的使用
	  	cursprite.loadTexture('sprite1', 0);  

	  	//产生100~400的随机数
	  	game.rnd.integerInRange(100, 400)

