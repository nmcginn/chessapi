import * as fs from "fs";

export const handler = async() => {
    const files = fs.readdirSync('./');
    console.log(files);
    return {
        status: 200,
        body: files
    };
};
