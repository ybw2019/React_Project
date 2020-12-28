import Server from "./server"

class Api extends Server {
    /**
     *  用途：获取tab为“全部”的列表数据
     *  
     * 
     */

    async getAllList(params = {}) {
        try {
            let result = await this.axios("get", `https://cnodejs.org/api/v1/topics`);
            if (result && (result.data instanceof Object) && result.status == 200) {
                return result.data;
            } else {
                let err = {
                    tip: "获取首页信息失败",
                    response: result,
                    data: params,
                    url: `https://cnodejs.org/api/v1/topics`
                };
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
    /**
    *  用途：获取主题详情
    *  @id:主题的id
    *  Api.getThemeInfo({ id: "5fe2b84498427e7b936a9f8c" });
    */
    async getThemeInfo(params = {}) {
        try {
            let result = await this.axios("get", `https://cnodejs.org/api/v1/topic/${params.id}`);
            if (result && (result.data instanceof Object) && result.status == 200) {
                return result.data;
            } else {
                let err = {
                    tip: "获取主题详情失败",
                    response: result,
                    data: params,
                    url: `https://cnodejs.org/api/v1/topics`
                };
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
}

export default new Api();