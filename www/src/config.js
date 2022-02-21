// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4letbqfnot14kiml6u2j95hk90",                                    // CognitoClientID
  "api_base_url": "https://bhqklbr7ba.execute-api.us-east-1.amazonaws.com",       // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless-brown-bag.auth.us-east-1.amazoncognito.com",  // CognitoDomainName
  "redirect_url": "https://master.d12mccyumxz9tb.amplifyapp.com"                                   // AmplifyURL
};

export default config;
