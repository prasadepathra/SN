function clearMessage() {
    g_form.hideFieldMsg('work_notes', true);
}

function onSubmit() {
    clearMessage();

    var state = g_form.getValue('state');
    var originalState = g_form.getOriginalValue('state');
    var workNotes = g_form.getValue('work_notes');

    if (state === '2' && originalState !== state && !workNotes.trim()) {
        g_form.showFieldMsg(
            'work_notes',
            'Update work notes to change the status to In Progress.',
            'error'
        );
        return false;
    }

    return true;
}
