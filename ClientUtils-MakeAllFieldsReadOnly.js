/**
  Once in a while, when you find yourself in a position where: 
    # You have dozens or hundreds of fields on a form. 
    # Many or most of the fields have to be set to "Read Only"
    # You'll go crazy entering dozens or hundreds of UI Policy Actions :-) 

  This code should help you out! You can put this snippet of code into an OnLoad Client Script or UI Action, etc., You'll have to modify it a bit. 
*/

if (!g_form.isNewRecord()) {
        for (var x = 0; x < g_form.elements.length; x++) {
            g_form.setReadOnly("" + g_form.elements[x].fieldName, true);
        }
}

/**
  You may be wondering why I'm using g_form.elements.length? Well, GlideForm doesn't have a function to get all the fields on the form as an array.
  You can refer to https://www.servicenow.com/community/itom-forum/how-to-get-all-fields-which-are-available-on-form-only/m-p/941459/page/3 for 
  the complete info.
*/
