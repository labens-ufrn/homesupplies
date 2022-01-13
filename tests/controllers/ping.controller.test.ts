import PingController from "../../src/controllers/ping.controller";

test("it should pass", async () => {
    expect(true).toBe(true);
});

test("should return pong message", async () => {
    const controller = new PingController();
    const response = await controller.getMessage();
    expect(response.message).toBe("pong");
});