import axios from 'axios';

const TAG = 'NetworkOps: ';
// const unAuthenticatedRoutes = [];

const API_TIMEOUT = 10000;

axios.interceptors.request.use(async (config) => {
    let newConfig = config;
    try {
        // const isTokenRequired = !unAuthenticatedRoutes.includes(config.url);
        const isTokenRequired = false;
        console.log(TAG, 'isTokenRequired', isTokenRequired);
        if (isTokenRequired) {
            // const token = await getAsyncData(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
            const token = 'change_me_later';

            newConfig = {
                ...newConfig,
                headers: {
                    ...newConfig.headers,
                    Authorization: `Bearer ${token}`,
                },
                timeout: API_TIMEOUT,
            };
        }
    } catch (e) {
        console.log(TAG, 'Error in interceptor request', e);
    }

    return newConfig;
}, (error) => {
    console.log(TAG, 'Error in interceptor request', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(
    async (res) => {
        try {
            const { data } = res;

            const { status, message, errorCode } = data;
            if (!status) console.log(TAG, `${errorCode} - ${message} - ${res.config.url}`);
            return data;
        } catch (e) {
            console.log(TAG, 'error', e);
        }
        return {
            success: false,
            message: 'NetworkOps: Something went wrong intercepting response',
        };
    },

    (error) => {
        console.log(TAG, error.message);
        return Promise.reject(error);
    },
);

export const makeGetRequest = (URL, token = '') => axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
export const makePostRequest = (URL, data = {}) => axios.post(URL, { ...data });
export const makePutRequest = (URL, data = {}) => axios.put(URL, { ...data });
