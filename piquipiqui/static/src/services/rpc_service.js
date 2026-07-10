let _id = 1;

export class RpcService {
    async _call(endpoint, params) {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'call',
                id: _id++,
                params,
            }),
        });
        const data = await response.json();
        if (data.error) {
            const msg = data.error.data?.message || data.error.message || 'Error RPC';
            throw new Error(msg);
        }
        return data.result;
    }

    call(model, method, args = [], kwargs = {}) {
        return this._call('/web/dataset/call_kw', { model, method, args, kwargs });
    }

    searchRead(model, domain, fields, opts = {}) {
        return this.call(model, 'search_read', [domain], { fields, ...opts });
    }

    read(model, ids, fields) {
        return this.call(model, 'read', [ids], { fields });
    }

    write(model, ids, values) {
        return this.call(model, 'write', [ids, values]);
    }

    create(model, values) {
        return this.call(model, 'create', [[values]]);
    }

    unlink(model, ids) {
        return this.call(model, 'unlink', [ids]);
    }
}
