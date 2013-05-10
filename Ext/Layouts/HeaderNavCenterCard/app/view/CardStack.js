/*
 * File: app/view/CardStack.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.CardStack', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.cardstack',

    itemId: 'cardStack',
    layout: {
        type: 'card'
    },
    title: 'Center / Card Layout',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    margins: '10 10 10 10',
                    html: 'Card 1'
                },
                {
                    xtype: 'panel',
                    margins: '10 10 10 10',
                    html: 'Card 2'
                },
                {
                    xtype: 'panel',
                    margins: '10 10 10 10',
                    html: 'Card 3'
                }
            ]
        });

        me.callParent(arguments);
    }

});