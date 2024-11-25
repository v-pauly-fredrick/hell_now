/** This is my tool-chest; a large collection of static methods that I can use - whether on the Client or Server side, the sole purpose of this Script Include is to make my life easier! */ 

var EZ = Class.create();

/**This is a simple wrapper around sn_run_leve.GlideSystemRunLevel.getCurrentLevel() method. 
 * @static 
 * @returns {string} The current system run level.
 */
EZ.get_system_run_level = function(){
	return sn_run_level.GlideSystemRunLevel.getCurrentLevel();
};

EZ.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    type: 'EZ'
});
