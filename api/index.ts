import * as fs from "fs";
import { APIGatewayProxyResult } from "aws-lambda";
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const stockfish = process.env['STOCKFISH_BINARY'] ?? 'stockfish/stockfish';

export const handler = async(): Promise<APIGatewayProxyResult> => {
    const { stdout, stderr, error } = await execFile(stockfish, ['uci']);
    if (error) {
        console.log(stderr);
        return {
            statusCode: 500,
            body: "An unknown error has occurred."
        };
    }
    return {
        statusCode: 200,
        body: stdout
    };
};
