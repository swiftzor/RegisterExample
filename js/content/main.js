var RegisterContent = Backbone.View.extend({
    itemTemplate: '<div class="form-inline"><div class="form-group"><label>Item Name</label><input type="text" class="form-control" ' + 
                  'id="item_name_{{num}}"></div><div class="form-group"><label>Item Price</label><input type="text" ' +
                  'class="form-control" id="item_price_{{num}}"></div><div class="form-group"><label>Item Quantity</label>' +
                  '<input type="text" class="form-control" id="item_quantity_{{num}}"></div></div>',
    renderData: {
        num: 0
    },  
    
    el: '#content_body',
    
    events: {
        'click #add': 'add',
        'click #total' : 'getTotal'
    },
    
    render: function(e) {
        this.renderData.num++;
        var $itemsList = $('#items');
        var toAddHtml = Mustache.to_html(this.itemTemplate, this.renderData);
        $itemsList.append(toAddHtml);
    },
    
    add: function(e) {
        this.render(e);
    },
    
    getTotal: function(e) {
        var i = 1;
        var total = 0.0;
        for(i; i <= this.renderData.num; i++) {
            var thisPrice = parseFloat($('#item_price_' + i).val());
            var thisQty = parseInt($('#item_quantity_' + i).val());
            total = total + (thisPrice * thisQty);
        }
        $('#totalAmt').html('Total: $' + parseFloat(total).toFixed(2));
    }
});