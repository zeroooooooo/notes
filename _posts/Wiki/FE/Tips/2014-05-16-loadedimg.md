---
layout: post
title: 图片预加载
category: Wiki
tags: Tips
type: FE
---

### 情景
当网站图片量较多时,如果一次加载的话需要很长的时间,体验就会很差,所以这个时候我们可以通过图片预加载的方式,在网站进入图片页面之前先加载一部分图片缓存到浏览器里面,这样当访问到图片页面时就可以适量减少请求数,提升页面载入速度.

### 原理
通过创建一定数量的Image对象,然后赋予每个Image对象想要预加载的图片链接,这样就可以预先加载这部分图片了.

##### 代码

		<script type="text/javascript">
  
	        var images = new Array();
	        function preload() 
	        {
	            for (var i = 0; i < preload.arguments.length; i++) 
	            {
	                images[i] = new Image();
	                images[i].src = preload.arguments[i];
	            }
	        }
	        preload(
	        	想要预加载的图片链接,
	        )
	        
    	</script>