import { userRoutes } from "./routes";
import { Server } from "@hapi/hapi";

console.log(userRoutes);

const server = new Server({
  port: 3000,
  host: "localhost",
});

const init = async () => {
  await server.route(userRoutes);

  await server.start().then(() => {
    console.log("connected");
  });
};
init();
