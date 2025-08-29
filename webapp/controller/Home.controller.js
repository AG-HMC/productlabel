sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("productlabel.controller.Home", {
        onInit() {
            // Get the router instance from the component and attach route match handler
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRouteMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function(oEvent){

        },

        onPrintPreview: function(){

        },

        onPrint: function(){
            
        }
    });
});