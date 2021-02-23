Ext.define('Effortel.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Username',
            dataIndex: 'username',
            editable: true,
            width:100,
        },
        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },

        {text: 'Email',dataIndex: 'email',editable: true, width: 230},

        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        },

        {text: 'UserId',dataIndex: 'id'},
        {
            width: 70,
            hideable: false,
    
            cell: {
                tools: {
                    approve: {
                        iconCls: 'x-fa fa-info',
                        handler: 'showInfo'
                    },
                   
                }
            }
        }],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
