sap.ui.define([
    'sap/ui/core/UIComponent',
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("anubhav.app.Component",{
       metadata:{},
       onInit:function(){
           UIComponent.proptotype.init.apply(this);
       },
       createContent:function(){
           var oView = new sap.ui.view({
               viewName:"anubhav.app.view.App",
               type:"XML"
           });

           var oContainer = oView.byId("idSpidy");
            
             var oView1 = new sap.ui.view({
               viewName:"anubhav.app.view.View1",
               type:"XML",
               id:"idNaveed"
           });

             var oView2 = new sap.ui.view({
               viewName:"anubhav.app.view.View2",
               type:"XML",
               id:"idArfa"
           });




           oContainer.addPage(oView1);
            oContainer.addPage(oView2);
        



            return oView;
       }

    })
    
});