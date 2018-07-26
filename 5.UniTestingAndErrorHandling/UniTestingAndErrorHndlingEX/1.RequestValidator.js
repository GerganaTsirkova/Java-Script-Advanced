function validateRequest(obj) {
    let isMethod = false;
    let isUri = false;
    let isVersion = false;
    let isMessage = false;

    if(obj.hasOwnProperty('method')){
        if ((obj.method==='GET')||(obj.method==='POST')||(obj.method==='DELETE')||(obj.method==='CONNECT')){
            isMethod = true;
        }
        else {
            throw new Error('Invalid request header: Invalid Method');
        }
    }
    else {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(obj.hasOwnProperty('uri')){
        let patternUri = /^([A-Za-z0-9.]+)$/;
        let regexUri = new RegExp(patternUri);
        let matchUri = regexUri.exec(obj.uri);
        if ((matchUri)||(obj.uri==='*')) {
            isUri = true;
        }
        else {
            throw new Error('Invalid request header: Invalid URI');
        }
    }
    else {
        throw new Error('Invalid request header: Invalid URI');
    }

    if(obj.hasOwnProperty('version')){
        if ((obj.version==='HTTP/0.9')||(obj.version==='HTTP/1.0')||(obj.version==='HTTP/1.1')||(obj.version==='HTTP/2.0')) {
            isVersion = true;
        }
        else {
            throw new Error('Invalid request header: Invalid Version');
        }
    }
    else {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(obj.hasOwnProperty('message')){
        let patternMessage = /^[^<>\\\&'"]+$/;
        let regexMessage = new RegExp(patternMessage);
        let matchMessage = regexMessage.exec(obj.message);
        if((matchMessage)||(obj.message==='')){
            isMessage = true;
        }
        else {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
    else {
        throw new Error('Invalid request header: Invalid Message');
    }

    if ((isMethod) && (isUri) && (isVersion) && (isMessage)) {
        return obj
    }
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'
});