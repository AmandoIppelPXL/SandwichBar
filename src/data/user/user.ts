export type User = {
    email: string;
    username: string;
    password: {
        original: string;
        comfirm: string;
    }
}

export type UserForLogin = {
    username: string;
    password: string;

}

export type UserProfile = {
    id: number;
    username: string;
    role: string;
}