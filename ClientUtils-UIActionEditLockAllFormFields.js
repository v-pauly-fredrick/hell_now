/**
  Well well well, lets suppose you decided to have a UI Action (client-side, on the form) - which an be used to 

    # Lock or unlock (read-only) all fields on the form
    # Act's a toggle button (click it once, it locks all the fields on form, click it again - unlocks all the fields!!!)

  Well, the below code will accomplish that for you (you'll have to figure out or know already - how to create an client UI Action button though). 
*/ 

function toggleEdit() {
    var makeEditable = false;

    if (!g_form.isDisabled('u_main')) {  //"u_main" is a field on my form - you'll have to replace it some field which will ALWAYS be on your form. 
        makeEditable = true;
    }

    for (var x = 0; x < g_form.elements.length; x++) {
        g_form.setReadOnly("" + g_form.elements[x].fieldName, makeEditable);
    }
}

