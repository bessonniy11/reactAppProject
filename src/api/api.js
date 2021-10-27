import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '919129d7-c29d-4bcc-8665-0e398dc025ba'
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. please use profileAPI object')
        return instance.get(`profile/`+ userId);
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId);
    },
    getStatus(usersAPI) {
        return instance.get('profile/status/'+ usersAPI)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status:status})
    }
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe, isAuth) {
        return instance.post(`auth/login`, {email, password, rememberMe, isAuth})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};

