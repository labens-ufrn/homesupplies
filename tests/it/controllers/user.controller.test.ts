import {
    generateUserPayload,
} from "../../utils/generate";
import UserController from "../../../src/controllers/user.controller";

import { Connection, createConnection } from "typeorm";
import dbConfig from "../../../src/config/database";

let connection: Connection

beforeEach(async () => {
    connection = await createConnection(dbConfig);
});

afterEach(async () => {
    await connection.close()
})

describe("UserController Integration Test", () => {
    test("should return user list", async () => {
        const userData = [
            {
                "id": 2,
                "firstName": "taciano",
                "lastName": "silva",
                "email": "taciano.silva@ufrn.br",
            }
        ];

        const controller = new UserController();
        const users = await controller.getUsers();
        expect(users).toEqual(
            expect.arrayContaining([
              expect.objectContaining({id: 1}),
              expect.objectContaining({id: 2})
            ])
        );
    });

    describe("addUser", () => {
        test("should add user to the database", async () => {
            const payload = generateUserPayload();
            
            const controller = new UserController();
            const user = await controller.createUser(payload);
            expect(user).toMatchObject(payload);
            expect(user).toHaveProperty("id");

            controller.deleteUser(user.id);
        });
    });

    describe("getUser ", () => {
        test("should return user from the database", async () => {
            const userData = [
                {
                    "id": 3,
                    "firstName": "fernanda",
                    "lastName": "medeiros",
                    "email": "fernandamedeiros@gmail.com",
                }
            ];
            const id = 3;
            const controller = new UserController();
            const user = await controller.getUser(id.toString());
            expect(user).not.toBeNull();
            expect(user).toMatchObject(userData[0]);
            expect(user?.id).toBe(id);
        });

        test("should return null if user not found", async () => {
            const id = 12345;
            const controller = new UserController();
            const user = await controller.getUser(id.toString());
            expect(user).toBeNull();
        });
    });
});
