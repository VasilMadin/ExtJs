Ext.define('Effortel.view.gallery.Gallery', {
				extend: 'Ext.Container',
				xtype: 'gallery',
				requires : ['Ext.data.JsonP'],
				config: {
					cls : 'gallery',
					scrollable : true,
					showNavigation : true,
					floatingCloseBtn : true,
								
				tpl : Ext.create('Ext.XTemplate', 
							'<tpl if="this.isEmpty(items)">',
							'<div class="empty-text empty-gallery">No image available</div>',
							'</tpl>',
							'<div class="gallery" id="photos">',
							'<tpl for="items">',
							'<img src="{media.m:this.getThumbnail}" class="thumbnail" data-fullimage="{media.m:this.getFullImage}"/>',
							'</tpl>',
							'</div>', {
								isEmpty : function(items){
									if(items.length === 0){
										return true;
									}
										return false;
									},
								getThumbnail : function(url){
									return url.replace('_m', '_t');
										},
								getFullImage : function(url){
										return url.replace('_m', '_n');
									}
												})
				},
				
				initialize : function(){
								var me = this;
								
								// Add tap event on the images to open the carousel
								me.element.on('tap', function(e, el){
												me.showGalleryCarousel(el);												
								}, me, {
												delegate : 'img.thumbnail'
								});
								
								me.loadImages();
								me.callParent(arguments);
				},
				loadImages : function(){
						var me = this;
						Ext.data.JsonP.request({
							url: 'http://api.flickr.com/services/feeds/photos_public.gne',
								callbackKey: 'jsoncallback',
									params: {
										format: 'json'
									},
								success: function(response) {
									me.items = response.items;
									me.setData(response);
									}
								});
				},
				
				/**
				 * Show the gallery carousel with all the images
				 */
		showGalleryCarousel : function(clickedImage){
				var me = this,
				clickedImgIndex = 0,
				galleryCarousel = Ext.Viewport.add({
					xtype : 'gallerycarousel',
					totalCount : me.items.length
					});
					me.images = me.images || me.element.query('img.thumbnail');
						galleryCarousel.element.on('tap', function(e, el){
							galleryCarousel.hide(true);
								Ext.defer(function(){
									Ext.Viewport.remove(galleryCarousel);
												}, 300);
								}, this, {
									delegate : 'div[data-action="close_carousel"]'
								});
								
					while( (clickedImage = clickedImage.previousSibling) != null ) {
								clickedImgIndex++;
					}								
					for(var i=0; i<me.images.length; i++){
							galleryCarousel.add({
								xtype : 'container',
								html : '<img class="gallery-item" src="' + Ext.get(me.images[i]).getAttribute('data-fullimage') + '" />',
								index : i + 1
							});
								}							
								galleryCarousel.setActiveItem(clickedImgIndex);
								galleryCarousel.show();
		}
});
