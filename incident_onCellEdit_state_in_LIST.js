function onCellEdit(sysIDs, table, oldValue, newValue, callback) {
    // State value 2 is In Progress for the Incident table.
    if (newValue == '2') {
        alert('You cannot change the Incident state to In Progress from the list view.');
        callback(false);
        return;
    }

    callback(true);
}
