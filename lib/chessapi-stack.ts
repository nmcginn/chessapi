import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class ChessapiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const stockfishLayer = new lambda.LayerVersion(this, 'StockfishLayer', {
      code: lambda.Code.fromAsset(`${__dirname}/../stockfish/stockfish.zip`),
      compatibleRuntimes: [lambda.Runtime.NODEJS_14_X],
      license: 'GPL-v3',
      description: 'A layer to make the stockfish binary available'
    });

    const func = new lambda.Function(this, 'ChessAPIFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(`${__dirname}/../api`),
      layers: [ stockfishLayer ]
    });

    const api = new apigateway.RestApi(this, 'ChessAPI', {
      restApiName: "Chess API",
      description: "An HTTP interface for stockfish"
    });

    const integration = new apigateway.LambdaIntegration(func, {
      requestTemplates: { "application/json": '{"statusCode":"200"}' }
    });

    api.root.addMethod("GET", integration);
  }
}
