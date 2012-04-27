Ext.onReady(function() {
	Ext.create('Ext.form.Panel', {
		width : 400,
		height : 350,
		title : 'Formulário de qualificação',
		bodyPadding : 10,
		renderTo : 'container',
		defaultType : 'sliderfield',
		defaults : {
			labelAlign : 'top',
			labelWidth : 200,
			anchor : '100%'
		},
		items : [{
			xtype : 'ratingfield',
			startText : 'Difícil',
			endText : 'Fácil',
			value : 3,
			items : [0, 1, 2, 3, 4, 5, 6, 7, 8],
			fieldLabel : 'Facilidade de utilização'
		}, {
			xtype : 'ratingfield',
			items : [0, 1, 2, 3, 4, 5],
			fieldLabel : 'Organização das informações'
		}, {
			xtype : 'ratingfield',
			items : [{
				value : 1,
				text : 'Difícil'
			}, {
				value : 2,
				text : 'Regular'
			}, {
				value : 3,
				text : 'Bom'
			}, {
				value : 4,
				text : 'Fácil'
			}],
			fieldLabel : 'Layout das telas'
		}, {
			xtype : 'ratingfield',
			value: 1,
			fieldLabel : 'Nomenclatura utilizada nas telas (nome de comandos, títulos, campos, etc.)'
		}, {
			xtype : 'ratingfield',
			value: 5,
			fieldLabel : 'Mensagens do sistema'
		}, {
			xtype : 'ratingfield',
			value: 2,
			fieldLabel : 'Assimilação das informações'
		}]
	});
});
