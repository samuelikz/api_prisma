import { genSalt, hash, compare } from "bcryptjs"

const SALT_RANDOMS = 7; // numero de saltos

const hashd = async (value: string) => {
    const saltGenerated = await genSalt(SALT_RANDOMS);
    const hashPass = await hash(value, saltGenerated)
    return hashPass;
}

const verify = async (value: string, hashdverify: string) => {
    return await compare(value, hashdverify)
}
//const match = await Crypto.verify(value, recebe)
export const securityUtils = {hashd,verify}