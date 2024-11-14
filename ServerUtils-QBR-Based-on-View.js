/**
  Let's say: you want to filter-out or show some records in the List View - based on the "View" selected - this code will do it for you!!!
  You'll have to create a Query Business Rule and put the code in the Advanced Script section. 
*/

var view = GlideTransaction.get().getRequestParameter("sysparm_view");      //This is the code - that get's the name of the view - that got selected.

    if (view == "social_interactions") {                                    //Let's say, the View selected was "Social Interactions", the internal name will be social_interactions                              
        current.addEncodedQuery("u_lovLIKESocial");                         //Add the Encoded Query! 
    } else {
        current.addEncodedQuery("u_lovNOT LIKEObservation > Social > Interaction");    //For the "Default View"
    }
