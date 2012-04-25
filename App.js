Ext.onReady(function() {
var win = Ext.create('Ext.window.Window',{
	
	modal:true,
	width: 400,
	height: 400,
	layout:'anchor',
	items:[star = Ext.create('Ext.ux.form.FieldStarRating',{
		xtype:'ratingfield',
		labelAlign:'top',
		anchor:'100%',
		name:'star',
		value: 2,
		fieldLabel:'Avalicação'
	})],
	tbar:[{
		text:'getValue',
		handler: function(){
			console.log(star.getValue());
		}
	},{
		text:'setValue',
		handler: function(){
			console.log(star.setValue(4));
		}},'->',{
		text:'Download',
		handler: function(){
			window.location = 'FieldStarRating.js';
		}
	}],
	title:'FieldStart'
});

win.show();
win.center();


});
