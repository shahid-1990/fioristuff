sap.ui.define([
    'anubhav/app/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("anubhav.app.controller.View2",{
    onBack:function(){
      var oAppCon = this.getView().getParent();
      oAppCon.to("idNaveed");

    }

    })
    
});