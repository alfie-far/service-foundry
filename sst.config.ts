/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "service-foundry",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {

      const api = new sst.aws.ApiGatewayV2("TaskApi");
      api.route("GET /health", {
        handler: "apps/task-api/src/handlers/health.handler"
      });

      return {
        api: api.url
      };
      
  },
});
