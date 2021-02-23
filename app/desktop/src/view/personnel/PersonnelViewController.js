Ext.define('Effortel.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    },
    showInfo: function(grid,info){
            var username = info.record.get('username');
            var name = info.record.get('name');
            var phone = info.record.get('phone');
            var id = info.record.get('id');
            var email = info.record.get('email');

                var dialog = Ext.create({
                    xtype: 'dialog',
                    title: 'User information',
               
                    maximizable: true,
                    html: `<h3>Username:${username}</h3> <br>
                            <h3>Name:${name}</h3> <br>
                            <h3>Phone: ${phone}</h3> <br>
                            <h3>UserId: ${id}<h3> <br>
                            <h3>Email: ${email}`,
               
                    buttons: {
                        ok: function () { 
                            dialog.destroy();
                        }
                    }
                });
               
                dialog.show();
    }

    
});
