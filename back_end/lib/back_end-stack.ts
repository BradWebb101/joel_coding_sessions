import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackEndStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    GLOBALS = {
      name: 'Joel Mckechnie',
      bucketName: 'joelwebsitebucket'
      domain: 'www.joelmckechnie.com'
    }

    var websiteBucket = new Bucket(GLOBALS)
  }
}
