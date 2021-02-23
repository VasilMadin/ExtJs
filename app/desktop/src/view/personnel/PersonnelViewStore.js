Ext.define('Effortel.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    proxy: {
        type: 'ajax',
        url:'http://jsonplaceholder.typicode.com/users',
    },
    autoLoad: true
});
