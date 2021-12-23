import * as fs from "fs";
import { APIGatewayProxyResult } from "aws-lambda";

export const handler = async(): Promise<APIGatewayProxyResult> => {
    const files = fs.readdirSync('./');
    console.log(files);
    return {
        statusCode: 200,
        body: JSON.stringify(files)
    };
};
