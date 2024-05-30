export interface User {
    username: string;
    password: string;
    email: string;
    sex: 'male' | 'female';
    birthdate: Date;
    weight: number;
    height: number;
}