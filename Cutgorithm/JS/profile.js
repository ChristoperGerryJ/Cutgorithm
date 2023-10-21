function toggleEdit() {
    var fields = document.getElementsByClassName('editable-field');
    var editButton = document.getElementById('edit-button');
  
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      field.toggleAttribute('readonly');
    }
  
    editButton.innerText = editButton.innerText === 'Edit' ? 'Save' : 'Edit';
  }