const {stat} = require('fs');
const path = require('path');

function getTheRoot() { 
	return path.dirname(process.mainModule.filename);
}

function parser(pt) { 
	return path.parse(pt)
	
}



function fileOptionChecker(root) { 
	return {
		root:`${getTheRoot()}/expr`
	};
	//this object represent our options to be used during the sending the file;
}

//all the files is check from the directory by me
function checkFile(fileName,cb) {

	// const specifiedPath = (typeof getTheRoot() == 'string') ? `${getTheRoot()}/${fileName}` : __dirname
	const specifiedPath = getTheRoot()+'/'+'expr'+'/'+fileName;
	console.log(specifiedPath);

	stat(specifiedPath,(err,stat)=>{
		if(err) { 
			cb(false);
			return;
		}
		
			console.log('the direcgtory is there');
			cb(true);
			return;

	
	});
}

exports.checkFile = checkFile;
exports.fileOptionChecker = fileOptionChecker;
exports.getRoot = getTheRoot;

