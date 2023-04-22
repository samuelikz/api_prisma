import * as jwt from 'jsonwebtoken';

export interface IjwtData {
    uid: number;
}

const sing = (data: IjwtData):string | 'jwt-secret-not-found' => {
    if (!process.env.JWT_SECRET) return 'jwt-secret-not-found';

    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '24h'});
}

const verify = (token:string): IjwtData | 'jwt-secret-not-found' | 'invalid_token' => {
    if (!process.env.JWT_SECRET) return 'jwt-secret-not-found';

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (typeof decoded === 'string'){
            return 'invalid_token'
            
        }
        return decoded as IjwtData;
    } catch (error) {
        return 'invalid_token'
    }
}

export const JWTService = {
    sing,
    verify
}