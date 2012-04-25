/*
 * @Copyright (c) 2011 Aurélio Saraiva
 * @Page https://github.com/aureliosaraiva/ExtJS-FieldStarRating
 * try at http://exemplos.aureliosaraiva.com/fieldstar/exemplo.html

 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * @Version: 0.1
 * @Release: 2012-04-24
 */
Ext.define('Ext.ux.form.FieldStarRating', {
	extend : 'Ext.form.field.Base',
	alias : 'widget.ratingfield',
	fieldSubTpl : ['<div id="{id}" class="{fieldCls}"></div>', {
		compiled : true,
		disableFormats : true
	}],

	fieldCls : Ext.baseCSSPrefix + 'form-rating-field',
	value : null,
	/**
	 * Define a quantidade de itens o componente vai ter bem como os valores de retorno para cada item
	 * @default [1, 2, 3, 4, 5]
	 */
	starsValues : [1, 2, 3, 4, 5],

	indexSelected : -1,

	initEvents : function() {
		this.callParent();

		this.inputEl.on('mouseover', this._mouseover, this, {
			delegate : 'div.x-field-star'
		});

		this.inputEl.on('mouseout', this._mouseout, this, {
			delegate : 'div.x-field-star'
		});

		this.inputEl.on('click', this._click, this, {
			delegate : 'div.x-field-star'
		});

	},
	setValue : function(v) {
		this.callParent(arguments);

		if(this.starEl) {
			Ext.each(this.starsValues, function(o, i) {
				if(!v) {
					this.indexSelected = -1;
					this.starEl[i].removeCls('x-star-selected');
				} else {
					this.starEl[i].addCls('x-star-selected');
					if(o == v) {
						this.indexSelected = i;
						return false;
					}
				}
			}, this);
		}
	},
	onRender : function() {
		this.callParent(arguments);

		var name = this.name || Ext.id();
		this.hiddenField = this.inputEl.insertSibling({
			tag : 'input',
			type : 'hidden',
			name : name

		});

		this.setValue = Ext.Function.createSequence(this.setValue, this._onUpdateHidden, this);

		var starEl = [];
		Ext.each(this.starsValues, function(o, i) {
			starEl.push(Ext.DomHelper.append(this.inputEl, {
				tag : 'div',
				rate : i,
				cls : 'x-field-star'
			}, true));
		}, this);

		this.starEl = starEl;

		this.setValue(this.value);
	},
	_onUpdateHidden : function() {
		if(this.hiddenField) {
			this.hiddenField.dom.value = this.getValue();
		}
	},
	_click : function(e, o) {
		var rate = o.getAttribute('rate');
		this.setValue(this.starsValues[rate]);
	},
	_mouseout : function() {

		Ext.each(this.starsValues, function(o, i) {
			if(i > this.indexSelected) {
				this.starEl[i].removeCls('x-star-selected');
			} else {
				this.starEl[i].addCls('x-star-selected');
			}

		}, this);
	},
	_mouseover : function(e, o) {
		var rate = o.getAttribute('rate');
		Ext.each(this.starsValues, function(o, i) {
			if(i <= rate) {
				this.starEl[i].addCls('x-star-selected');
			} else {
				this.starEl[i].removeCls('x-star-selected');
			}
		}, this);
	}
});
