const crpyto = require('crypto');

export const encrypt = (target) => {
	const sha256 = crpyto.createHash('sha256');
	sha256.update(target);
	
	return sha256.digest('hex');
}